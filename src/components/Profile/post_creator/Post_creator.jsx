import React from 'react';
import PCr from './Post_creator.module.css';
import {addPostActionCreator, newPostTextActionCreator} from './../../#state/profilePageReducer';

const Post_Creator = (props) => {
  let textForNewPost = React.createRef();

  let AddPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let newPostText = () => {
    const text = textForNewPost.current.value;
    props.dispatch(newPostTextActionCreator(text));
  }
  return (
    <div className={PCr.post_wall__post_creator}>
      <textarea ref={textForNewPost} className={PCr.post_creator__input} placeholder='Ваши новости' onChange={newPostText} value={props.postText}/>
      <button className={PCr.post_creator__send_button} type='button' onClick={AddPost}>Опубликовать</button>
    </div>
  );
}

export default Post_Creator;