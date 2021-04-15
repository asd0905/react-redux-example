import React from "react";

const PostDetail = (props) => {
    if (!props.activePost) {
        return <div>게시물을 선택해 주세요.</div>
    }
    return (
        <div>
            {props.activePost.title}
        </div>
    )
}

export default PostDetail;
