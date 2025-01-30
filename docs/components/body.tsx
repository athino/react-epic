import React from "react"
import styled from "styled-components"

export type TBodyProps = {

}

export const Body = () => {

    return (
        <Frame>
            <Sidebar>
                REACTIONS
            </Sidebar>
            <Wrapper>

            </Wrapper>
        </Frame>
    )
}

const Frame = styled.body`
    overflow: hidden;
    min-height: 100%;
    margin: 0;
    background: #252830;
    color: white;
`

const Wrapper = styled.div`
    position: absolute;
    height: 100dvh;
    left: 260px;
    right: 0;
    overscroll-behavior: contain;
    overflow-y: auto;
    background: white;
    color: #252830;
`

const Sidebar = styled.div`
    position: absolute;
    height: 100dvh;
    left: 0;
    top: 0;
    width: 260px;
    overscroll-behavior: contain;
    overflow-y: auto;
    background: #252830;
    color: white;
`
