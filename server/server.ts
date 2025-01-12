import chokidar from 'chokidar'
import express from 'express'
import open from 'open'
import {buildScript} from './utils/buildScript'
import {renderHTML} from './utils/renderHTML'
import {log} from './utils/logger'
import {buildDist} from './utils/buildDist'
import {getInternetProtocolAdress} from './utils/getInternetProtocolAdress'
import {readPackageVersion} from './utils/readPackageVersion'

const outdir = 'dist'
const mainExport = 'app'
const srcdir = 'src'
const previewComponent = 'App'

buildDist({
    outdir: outdir,
    mainExport: mainExport,
    srcdir: srcdir
})
chokidar.watch(`./${srcdir}`).on('change', (event, path) => {
    buildDist({
        outdir: outdir,
        mainExport: mainExport,
        srcdir: srcdir
    })
})

const app = express()
const port = 3001

app.use('/static', express.static('public'))

app.get('/*', async (req, res) => {
    const {ip} = getInternetProtocolAdress()

    log('Building script', 'blue')
    const {script} = await buildScript({
        previewComponent: previewComponent,
        outdir: outdir,
        mainExport: mainExport
    })
    log('Rendering HTML', 'yellow')
    const {version} = readPackageVersion()

    const {html} = renderHTML({
        script: script || '',
        url: `http://${ip}:${port}`,
        port: port,
        version: version
    })
    res.set('Content-Type', 'text/html').send(html)
})

app.listen(port, async () => {
    const {ip} = getInternetProtocolAdress()
    const localAdress = `http://localhost:${port}`
    const ipAdress = `http://${ip}:${port}`
    log(`Listening on ${localAdress} | ${ipAdress}`)

    await open(`http://localhost:${port}`)
})
