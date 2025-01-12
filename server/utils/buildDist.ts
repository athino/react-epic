import ts, {JsxEmit, ModuleKind, ModuleResolutionKind, ScriptTarget, parseJsonConfigFileContent, readConfigFile} from 'typescript'
import {log} from './logger'
import {tsCompile} from './tsCompile'
import {cwd} from 'process'

export const buildDist = (arg: {
    outdir: string
    mainExport: string
    srcdir: string
}) => {
    log(`Building files from /${arg.srcdir}`, 'yellow')

    const tsconfig = readConfigFile(`${cwd()}/tsconfig.json`, ts.sys.readFile)

    const compilerOptions = parseJsonConfigFileContent(
        tsconfig.config,
        ts.sys,
        './'
    )

    const options = {
        ...compilerOptions.options,
        target: ScriptTarget.ES2022,
        declaration: true,
        outDir: arg.outdir,
        jsx: JsxEmit.React,
        esModuleInterop: true,
        module: ModuleKind.ES2022,
        moduleResolution: ModuleResolutionKind.Node10,
        strict: true,
        noImplicitAny: true,
        forceConsistentCasingInFileNames: true,
        skipLibCheck: true,
        isolatedModules: false
    }

    tsCompile([`./${arg.srcdir}/${arg.mainExport}`], options)
}
