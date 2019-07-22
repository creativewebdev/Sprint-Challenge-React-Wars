import React from 'react'

function Characters(props) {
    console.log('props', props)

    return(
        <div style={{border: '1px solid back', background:'white'}}>
            <p>name:    {props.name}</p>
            <p>height: {props.height}</p>
            <p>gender: {props.gender}</p>
        </div>
    )
}

export default Characters