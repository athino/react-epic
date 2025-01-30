import React from "react";
import { ReactNode } from "react"
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from "react-dom/server"
import { html as beautifyHtml } from 'js-beautify'

const style = `
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

body {
  margin: 0;
}

* {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export const createHTML = (arg: {
    body: ReactNode,
    title: string
}) => {

    const sheet = new ServerStyleSheet()
    renderToString(sheet.collectStyles(arg.body))

    const html = `<!DOCTYPE html>${renderToString(
        <html lang="no">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <div className="cushycms-text">
                <meta name="description" content="" />
                </div>
                <style
                    dangerouslySetInnerHTML={{
                        __html: style,
                    }}
                />
                {sheet.getStyleElement()}
                <title className="cushycms">{arg.title}</title>
            </head>
            {arg.body}
        </html>
    )}`;

    const prettyHtml = beautifyHtml(`<!DOCTYPE html>${html}`, {
        indent_size: 2,
        wrap_line_length: 80,
    });


    return prettyHtml
}
