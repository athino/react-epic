import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'

type Props = {
    title: string
    script: string
    url?: string
    port?: number
    version?: string
}

const Html = (props: Props) => {

    return (
        <html lang='no'>
            <head>
                <meta charSet='UTF-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <title>{props.title}</title>
                <link rel='preconnect' href='https://fonts.googleapis.com'/>
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous'/>
                <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet'/>
                <style dangerouslySetInnerHTML={{__html: `*{font-family: "Poppins";}`}}/>
            </head>
            <body style={{margin: 0}}>
                <script
                    type='application/json'
                    id='injected' dangerouslySetInnerHTML={{__html: JSON.stringify({
                        url: props.url,
                        port: props.port,
                        version: props.version
                    })}}/>
                <div id='root'/>
                <script dangerouslySetInnerHTML={{
                    __html: props.script
                }}/>
            </body>
        </html>
    )
}

export const renderHTML = (arg: {
    script: string
    url?: string
    port?: number
    version?: string
}) => {
    return {
        html: ['<!DOCTYPE html>', renderToStaticMarkup((
            <Html
                title='Athino'
                url={arg.url}
                port={arg.port}
                version={arg.version}
                script={arg.script}/>
        ))].join('\n')
    }
}
