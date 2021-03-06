import React from 'react';
import Message from './Message/Message';
import M from './Messages.module.css';
import PCr from './../../Profile/post_creator/Post_creator.module.css';
import {addMessageActionCreator, messageTextActionCreator} from './../../#state/dialogPageReducer';

const Messages = (props) => {
  const MessagesList = props.MessagesData.MessagesList.map(
    message => message.read == false ? 
    <Message message={message.message} id={message.id} className='noRead'/> : 
    <Message message={message.message} id={message.id} className='read'/>
  );

  let messageTextArea = React.createRef();
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let messageText = (e) => {
    const text = e.target.value; // можно ловить событие через объект event и обращаться к значению value textarea вместо использования ref
    // ref на данный момент не рекомендуется использовать
    props.dispatch(messageTextActionCreator(text));
  }
  return (
    <div className={M.dialogs__wrap}>
      <div className={M.dialogs__userMessages}>
        {
          MessagesList
        }
      </div>
      <div className={PCr.post_wall__post_creator}>
        <textarea className={PCr.post_creator__input} placeholder='Введите сообщение' value={props.MessagesData.MessageText} onChange={messageText}/>
        <button onClick={addMessage} className={PCr.post_creator__send_button} type='button'>Опубликовать</button>
      </div>
    </div>
  );
}

export default Messages;