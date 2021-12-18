import React, { useState } from 'react'
import style from './../../styles/blogs.module.css'
import { blogUtil } from '../../util/helperFunctions'
import { commentService } from '../../api'
const Item = ({ id, index, description, timestamp, comments }) => {
    const [commentData, setcommentData] = useState({
        name: "",
        description: ""
    })
    const handleComment = (e) => {
        const name = e.target.name
        const value = e.target.value
        setcommentData({ ...commentData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id,
            name: commentData.name,
            comment: commentData.description
        }
        console.log("Data : ", data)
        commentService.postComment(data)
    }
    return (
        <div className="container">
            <div className={`jumbotron ${style.blog}`}>
                <div className="markupP" dangerouslySetInnerHTML={{ __html: description }}></div>
                <div className={style.bF}>
                    <p>
                        <a href={`#comments${index}`} data-toggle="collapse" role="button" aria-expanded="false"
                            aria-controls="collapseExample" style={{ cursor: 'pointer' }}>Comments({comments.length})</a>
                    </p>
                    <abbr title={timestamp} className={style.created}>
                        <p>{blogUtil.getTimeStamp(timestamp)}</p>
                    </abbr>
                </div>
                <div className="collapse" id={`comments${index}`}>
                    <form className={`row row-cols-lg-auto g-3 align-items-center ${style.cFM}`} onSubmit={(e) => handleSubmit(e)}>
                        <div className="col-12">
                            <div className="input-group">
                                <input type="text" className="form-control"
                                    id="description" placeholder="Make a comment..."
                                    name="description" required onChange={(e) => handleComment(e)} />
                            </div>
                        </div>

                        <div className={`col-12 ${style.fB}`}>
                            <div className="input-group">
                                <input type="text" className="form-control"
                                    id="name" placeholder="Enter Name"
                                    name="name" required onChange={(e) => handleComment(e)} />
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </div>
                        </div>
                    </form>
                    {
                        comments.length !== 0 &&
                        <div className="card card-body">
                            <div className="alert alert-secondary" role="alert">
                                {
                                    comments.map((item, i) =>
                                        <div key={`comm${i}`} className={`${style.cB} cB`}>
                                            <h5>{item.name}</h5>
                                            <p>{item.comment}</p>
                                            <abbr title={item.createdAt} className={style.created}>
                                                <p>{blogUtil.getTimeStamp(item.createdAt)}</p>
                                            </abbr>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Item
