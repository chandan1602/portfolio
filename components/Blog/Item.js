import React, { useEffect, useState } from 'react'
import style from './../../styles/blogs.module.css'
import { commentService } from '../../api'
import Comment from './Comment'
import { blogUtil } from '../../util/helperFunctions'
import { Spinner } from 'react-bootstrap'
const Item = ({ id, index, description, timestamp, comments , title}) => {
    const [commentData, setcommentData] = useState({
        name: "",
        description: ""
    })
    const [allComments, setAllComment] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setAllComment([...comments]);
    }, [])
    const handleComment = (e) => {
        const name = e.target.name
        const value = e.target.value
        setcommentData({ ...commentData, [name]: value })
    }
    const handleSubmit = async (e) => {
        try {
            setIsLoading(true);
            e.preventDefault();
            const data = {
                id,
                name: commentData.name,
                comment: commentData.description
            }
            await commentService.postComment(data)
            setAllComment(allComments => [...allComments, data])
            setIsLoading(false);
        } catch (error) {
            alert("An error occured. Couldn't complete the transaction. Try again later.");
            console.log(error);
            setIsLoading(false);
        }
    }
    // if (isLoading) {
    //     return (
    //         <div className={style.loading}>
    //             <Spinner animation="grow" />
    //         </div>
    //     )
    // }
    return (
        <div className="container" key={id}>
            <br />
            <div className={`jumbotron ${style.blog}`}>
                <h1>{title}</h1>
                <div className="markupP" dangerouslySetInnerHTML={{ __html: description }}></div>
                <div className={style.bF}>
                    <p>
                        <a href={`#comments${index}`} data-toggle="collapse" role="button" aria-expanded="false"
                            aria-controls="collapseExample" style={{ cursor: 'pointer' }}>Comments({allComments.length})</a>
                    </p>
                    <abbr title={timestamp} className={style.created}>
                        <p>Blog posted {blogUtil.getTimeStamp(timestamp)}</p>
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

                        <div className={`col-8 ${style.fB}`}>
                            <div className="input-group">
                                <input type="text" className="form-control"
                                    id="name" placeholder="Enter Name"
                                    name="name" required onChange={(e) => handleComment(e)} />
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </div>
                        </div>
                    </form>
                    {
                        allComments.length !== 0 &&
                        <div>
                            {
                                allComments.map((item, i) =>
                                    <Comment item={item} index={i} blogUtil={blogUtil} style={style} />
                                )
                            }
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Item
