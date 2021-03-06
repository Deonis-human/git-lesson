import React from 'react';
import m from './Message.module.css'; 

const Message = (props) => {
  return(
    <p id={props.id} className={`${m.dialog__message} ${m[props.className]}`}>
      {props.message}
    </p>
  );
}

export default Message;