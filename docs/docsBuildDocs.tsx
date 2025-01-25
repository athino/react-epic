import React from "react";
import { createHTML } from "../common/createHTML";
import { Sidebar } from "./components/sidebar/sidebar";
import { writeHTMLFiles } from "../common/writeHTMLFiles";

export const docsBuildDocs = () => {
    const html = createHTML({
        title: '',
        body: <Sidebar/>
    })

    writeHTMLFiles({
        files: [{
            filename: 'index.html',
            html
        }]
    })
}
