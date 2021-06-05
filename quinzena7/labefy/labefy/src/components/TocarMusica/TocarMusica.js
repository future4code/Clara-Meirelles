import React from 'react'


export default function TocarMusica(props) {
    const url = props.urlMusica
    if (url.includes('spotify')) {
        return <iframe src={`${url}`} width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
    } else {
        return <audio src={`${url}`} controls />
    }
}