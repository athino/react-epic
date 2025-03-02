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
    padding: 20px;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    display: inline-block;
    min-width: 300px;
    
    color: white;
    background-color: #282C34;
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
`
