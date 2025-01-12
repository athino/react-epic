import ts, {CompilerOptions} from 'typescript'
import {log} from './logger'
import path from 'path'
import {existsSync, mkdirSync, writeFileSync} from 'fs'

export const tsCompile = (fileNames: string[], options: CompilerOptions): void => {
  let program = ts.createProgram(fileNames, options)
  let emitResult = program.emit(undefined, (fileName, data) => {
    const relativePath = path.relative(process.cwd(), fileName)
    const directory = path.dirname(relativePath)

    // here?
    if (!existsSync(directory)) {
      mkdirSync(directory, {recursive: true})
    }
    writeFileSync(fileName, data, 'utf-8')
  })

  let allDiagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics)

  allDiagnostics.forEach(diagnostic => {
    if (diagnostic.file) {
      let {line, character} = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start!)
      let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
      log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`, 'red')
    } else {
      log(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'), 'red')
    }
  })

  if (allDiagnostics.length === 0) {
    log(`Build successful`, 'green')
  } else {
    log(`Build unsuccessful`, 'red')
  }
}
