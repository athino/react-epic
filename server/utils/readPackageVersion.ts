import {readFileSync} from 'fs'

export const readPackageVersion = () => {
    const file = readFileSync('./package.json', {
        encoding: 'utf8'
    })

    const json = JSON.parse(file)

    return {version: json.version}
}
