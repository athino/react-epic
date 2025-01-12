import * as esbuild from 'esbuild'

export const buildScript = async (arg: {
    previewComponent: string
    outdir: string
    mainExport: string
}) => {
    return {
        script: (await esbuild?.build?.({
            stdin: {
                contents: [
                    `import React from 'react'`,
                    `import {createRoot} from 'react-dom/client'`,
                    `import {${arg.previewComponent}} from './${arg.outdir}/${arg.mainExport}'`,
                    `const root = createRoot(document.getElementById('root')!)`,
                    `root.render(<${arg.previewComponent}/>)`
                ].join('\n'),
                loader: 'tsx',
                resolveDir: '.',
            },
            bundle: true,
            minify: true,
            sourcemap: true,
            write: false,
            target: ['es6'],
        }))?.outputFiles[0]?.text
    }
}
