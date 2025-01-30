import React from "react"
import styled from "styled-components"
import { Code } from "./code"

export type TBodyProps = {
    files: Record<string, string>
}

export const Body = (props: TBodyProps) => {

    return (
        <Frame>
            <Sidebar>
                <Logo>
                    REACTIONS
                </Logo>
            </Sidebar>
            <Wrapper>
                <Content>
                    <Title>Usage</Title>
                        <Desc>1. Setting up domain actions</Desc>
                        <Desc>Within your app, for instance under `@/user/`, add a file called `userActions.ts`.</Desc>
                    {Object.entries(props.files).map(([path, html]) => (
                        <Code
                            key={path}
                            path={path}
                            html={html}/>
                    ))}
                </Content>
            </Wrapper>
        </Frame>
    )
}

const Frame = styled.body`
    overflow: hidden;
    min-height: 100%;
    margin: 0;
    background: #181b20;
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
    color: #181b20;
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

const Content = styled.div`
    position: absolute;
    left: 20px;
    right: 20px;
    top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 800;
    font-size: 24px;
    color: #f6f6f6;
    letter-spacing: 0.12em;
    padding: 20px 0;
    background: #20222a;
`

const Title = styled.div`
    font-size: 28px;
    font-weight: 500;
`

const Desc = styled.div`
    color: rgb(60, 60, 67);
    font-size: 16px;
`