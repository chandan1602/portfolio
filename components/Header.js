import React from 'react'

export const Header = (props) => {
    return (
        <div>
            <h3 style={{"textAlign" : "center"}}>{props.title}</h3>
            <hr />
        </div>
    )
}
