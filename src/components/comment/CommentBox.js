import React from 'react';

const CommentBox = ({CommentList})=>{
    return (
        <div className="comment-list-component">
            <label >评论列表</label>
            <ul className="list-group mb-3">
                {CommentList.map((comment,index)=>
                    <li className="list-group-item" key={index}>
                        {comment}
                    </li>
                )}
            </ul>
        </div>
    )
}


export default CommentBox