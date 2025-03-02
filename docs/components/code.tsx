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
    background-color: #282C34;
    min-height: 100%;
    padding: 20px;
    width: 100%;
    margin: 0;
    color: white;
    box-sizing: border-box;
    display: inline-block;
    min-width: 300px;
    .Identifier {
        color: #E5C07B;
    }

    .FirstAssignment {
        color: #56B6C2;
    }

    .SlashToken,
    .OpenParenToken,
    .CloseParenToken,
    .GreaterThanToken,
    .LessThanSlashToken,
    .FirstPunctuation,
    .CloseBraceToken,
    .FirstBinaryOperator,
    .SemicolonToken {
        color: #ABB2BF;
    }

    .EqualsGreaterThanToken,
    .FromKeyword,
    .ReturnKeyword,
    .ImportKeyword,
    .ExportKeyword,
    .ConstKeyword {
        color: #C678DD;
    }
    .StringLiteral {
        color: #98C379;
    }
    .FirstTriviaToken {
        color: #5B626F;
    }
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
