import React from "react";
import { createHTML } from "../common/createHTML";
import { writeHTMLFiles } from "../common/writeHTMLFiles";
import { Body } from "./components/body";
import { readExample } from "../common/readExample";

const files = readExample()

export const docsBuildDocs = () => {
    const html = createHTML({
        title: '',
        body: <Body files={files}/>
    })

    writeHTMLFiles({
        files: [{
            filename: 'index.html',
            html
        }]
    })
}
