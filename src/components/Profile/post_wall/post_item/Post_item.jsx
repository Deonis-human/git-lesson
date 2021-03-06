import React from 'react';
import PI from './Post_item.module.css';

const Post_Item = (props) => {
  return (
    <div className={PI.post_list__one_post}>
      <span className={PI.post_list__post_marker}></span>
      <span className={PI.author}>{props.author}</span>
      <p className={PI.post_list__post_title}><a className='item' href='#'>{props.title}</a></p>
    </div>
  );
}

export default Post_Item;