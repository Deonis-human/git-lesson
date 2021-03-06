import React from 'react';
import F from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
  const FriendsItems = props.FriendsData.map(
    friend => <Friend item={friend}/>
  );
  return(
  <div className={F.friends}>
    <h2 className={F.friends__title}>
      Друзья
    </h2>
    <div className={F.friends__list}>
      {FriendsItems}
    </div>
  </div>
  );
};

  
export default Friends;