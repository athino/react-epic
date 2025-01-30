import React from "react";
import { createHTML } from "../common/createHTML";
import { writeHTMLFiles } from "../common/writeHTMLFiles";
import { Body } from "./components/body";

export const docsBuildDocs = () => {
    const html = createHTML({
        title: '',
        body: <Body/>
    })

    writeHTMLFiles({
        files: [{
            filename: 'index.html',
            html
        }]
    })
}
