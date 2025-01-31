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

const Frame = styled.pre`
    position: relative;
    overflow: hidden;
    min-height: 100%;
    width: 100%;
    margin: 0;
    color: white;
    box-sizing: border-box;

    background: rgb(246, 246, 247);
    display: inline-block;
    padding: 20px;
    min-width: 300px;
    border-radius: 8px;
    &, * {
        font-family: "Roboto Mono", serif;
        font-size: 14px;
    }
`
