import React from "react"
import styled from "styled-components"

export type TCodeProps = {
    path: string
    html: string
}

export const Code = (props: TCodeProps) => {
    return (
        <Frame dangerouslySetInnerHTML={{__html: props.html}}/>
    )
}

const Frame = styled.div`
    position: relative;
    overflow: hidden;
    min-height: 100%;
    width: 100%;
    margin: 0;
    color: white;
    box-sizing: border-box;
    display: inline-block;
    min-width: 300px;
    pre {
        margin: 0;
        padding: 20px;
        border-radius: 8px;
        &, * {
            font-family: "Roboto Mono", serif;
            font-size: 14px;
        }
    }

`
