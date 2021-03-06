const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

const dialogPageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (state.MessagesData.MessageText.length != 0) {
        const newMessage = {
          id: 4,
          message: state.MessagesData.MessageText,
          read: false
        };
        state.MessagesData.MessagesList.push(newMessage);

        state.MessagesData.MessageText = '';

        return state;
      }
    case NEW_MESSAGE_TEXT:
      state.MessagesData.MessageText = action.messageText;
      return state;

    default: return state;
  }
};

export const addMessageActionCreator = () => {
  return {type: ADD_MESSAGE};
};
export const messageTextActionCreator = (text) => {
  return {type: NEW_MESSAGE_TEXT, messageText: text};
};

export default dialogPageReducer;