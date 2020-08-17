import React from 'react';
import CommentInput from "./CommentInput";
import CommentBox from "./CommentBox";

class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CommentList: ["first reply"]
        }
        this.addComment = this.addComment.bind(this)
    }
    addComment(comment) {
        this.setState({
            CommentList: [...this.state.CommentList, comment]
        })
    }
    render() {
        return (
            <div>
                <p>state/props</p>
                <CommentBox CommentList={this.state.CommentList} />
                <CommentInput
                    onAddComment={this.addComment}
                    CommentLength={this.state.CommentList.length}
                />
            </div>
        )

    }
}

export default Comment