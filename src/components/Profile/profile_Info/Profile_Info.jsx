import React from 'react';
import PI from './Profile_Info.module.css';

const Profile_Info = () => {
  return (
    <div className={PI.profile_info}>
      <img className={PI.profile_photo} src='https://s.zefirka.net/images/2016-04-25/100-krutyx-fotografij-enotov-kotorye-zaryazhayut-pozitivom/100-krutyx-fotografij-enotov-kotorye-zaryazhayut-pozitivom-14.jpg' alt='Фотка профиля' />
      <div className={PI.profile_info__text}>
        <h2 className={PI.profile_info__user_name}>
          Kondrashov Denis
        </h2>
        <p className={PI.profile_info__user_birth}>
          Birthday: <span className={PI.user_birth__day}>26</span> <span className='user-birth__month'>march</span>
        </p>
        <p className={PI.profile_info__user_city}>
          City: <span>Saint-Peterburg</span>
        </p>
        <p className={PI.profile_info__education}>
          Education <span>ETU</span>
        </p>
        <p className={PI.profile_info__site}>
          Site: <a href='https://vk.com/kondrashovdn'>Мой Вконтакте</a>
        </p>
      </div>
    </div>
  );
}

export default Profile_Info;