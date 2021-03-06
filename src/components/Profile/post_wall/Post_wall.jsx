import React from 'react';
import Post_Item from './post_item/Post_item';
import PW from './Post_wall.module.css';

const Post_Wall = (props) => {
  const Posts = props.Data.map(
    post => <Post_Item author={post.author} title={post.title}/>
  );
  return (
    <div className={PW.post_list}>
      {Posts}
      {/* в атрибутах тегов-компонентов можно указывать любые названия, в том числе и станартные (id, name, value),
      так как эти компоненты не являются обычными тегами и названия их атрибутов не имеют ничего общего со стандартными атрибутами 
      <div id='32'></div> !== <Post_Item id='32' />
      <Post_Item /> - это в первую очеркдб функция*/}
    </div>
  );
}

export default Post_Wall;