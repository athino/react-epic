import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const Docs = () => {
    return (
        <div>
        </div>
    )
}


export const docsBuildDocs = () => {
    const html = renderToStaticMarkup(<Docs/>)

    console.log(html)
}
