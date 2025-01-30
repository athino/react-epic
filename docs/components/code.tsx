import React from "react"
import styled from "styled-components"
import hljs from 'highlight.js';

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
    background: #252830;
    color: white;
    box-sizing: border-box;

    background: rgb(246, 246, 247);
    display: inline-block;
    padding: 20px;
    min-width: 300px;
    border-radius: 8px;
    color: rgb(36, 41, 46);
    &, * {
        font-family: "Roboto Mono", serif;
        font-size: 14px;
    }
    .hljs {
        &-keyword {
            color: rgb(215, 58, 73);;
        }
        &-title {
            color: rgb(36, 41, 46);
            &.function_ {
                color: rgb(111, 66, 193);
            }
        }
        &-string {
            color: rgb(3, 47, 98);
        }
        &-comment {
            color: rgb(106, 115, 125);
        }
        &-name {
            color: rgb(227, 98, 9);
        }
        &-attr {
            color: rgb(72, 78, 84);
        }
    }
`
