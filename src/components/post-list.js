import React from 'react';

const PostList = ({post, onPostSelect}) => {
    return (
        <li onClick={() => onPostSelect(post)} className='list-group-item'>{post.title}</li>
    )
}

export default PostList
