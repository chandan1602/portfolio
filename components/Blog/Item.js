import React from 'react'

const Item = ({ description, date, timestamp, comments }) => {
    return (
        <div className="container">
            <div className="jumbotron">
                <p><div dangerouslySetInnerHTML={{__html: description}}></div></p>
            </div>
        </div>
    )
}

export default Item
