import ts from 'typescript'

export const tokenize = (code: string) => {
    ts.LanguageVariant.JSX
    /// const scanner = ts.createScanner(ts.ScriptTarget.Latest, false, ts.LanguageVariant.Standard, code)

    const scanner = ts.createScanner(ts.ScriptTarget.Latest, false, ts.LanguageVariant.JSX, code)
    let tokens: { text: string, kind: string }[] = []

    let token = scanner.scan()
    while (token !== ts.SyntaxKind.EndOfFileToken) {
        tokens.push({
            text: escapeHTML(scanner.getTokenText()) || '',
            kind: ts.SyntaxKind[token]!,
        })
        token = scanner.scan()
    }

    console.log(tokens)
    return tokens
}

type SyntaxKindType = keyof typeof ts.SyntaxKind

const escapeHTML = (text: string) => {
    return text
      .replace(/&/g, '&amp;')  // Escape &
      .replace(/</g, '&lt;')   // Escape <
      .replace(/>/g, '&gt;')   // Escape >
      .replace(/"/g, '&quot;') // Escape "
      .replace(/'/g, '&#39;'); // Escape '
  };
  