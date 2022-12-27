const Comment = ({ item, index, blogUtil, style }) => {
    return (
        <div key={`comm${index}`} className={`${style.cB} cB`}>
            <div className="row">
                <div className="col-9">
                    <h6>{item.name}</h6>
                </div>
                <div className={`col-3 ${style.commentDate}`}>
                    <abbr title={item.createdAt} className={style.created}>
                        <p>{blogUtil.getTimeStamp(item.createdAt)}</p>
                    </abbr>
                </div>
            </div>
            <div className="row">
                    <div className={`col-10`}>
                        <p>{item.comment}</p>
                    </div>

                </div>
        </div>
    )
}

export default Comment;