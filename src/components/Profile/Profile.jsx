import React from 'react';
import P from './Profile.module.css';
import Post_Creator from './post_creator/Post_creator';
import Profile_Info from './profile_Info/Profile_Info';
import Post_Wall from './post_wall/Post_wall';

const Profile = (props) => {
  return (
    <main className={P.main_part}>
      <div>
        <img className={P.background__img} src='https://cdn.pixabay.com/photo/2017/06/11/02/04/panorama-2391345_1280.jpg' alt='background' />
      </div>
      <Profile_Info />
      <div className={P.post_wall}>
        <h2 className={P.post_wall__title}>Мои записи</h2>
        <Post_Creator postText={props.state.PostText} dispatch={props.dispatch} dispatch={props.dispatch}/>
        <Post_Wall Data={props.state.PostsData}/>
      </div>
    </main>
  );
}

export default Profile;