import React from 'react';


class CommentInput extends React.Component {
    constructor(props) {
        super(props)
        this.AddComment = this.AddComment.bind(this)
    }
    AddComment() {
        if(this.textInput.value === ""){
            return
        }
        this.props.onAddComment(this.textInput.value)
        this.textInput.value = ""
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    ref={(textInput) => { this.textInput = textInput }}
                    placeholder="please input your reply,can't null!"
                />
                <button className="btn btn-primary" onClick={this.AddComment}>提交</button>
                <p>你有{this.props.CommentLength}条留言</p>
            </div>

        )


    }
}

export default CommentInput;