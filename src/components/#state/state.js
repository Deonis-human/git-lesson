import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";

let store = {
  _state: {
    DialogPage: {
      UsersData: [
        { id: '1', name: 'Денис' },
        { id: '2', name: 'Максим' },
        { id: '3', name: 'Дима' },
        { id: '4', name: 'Рома' },
        { id: '5', name: 'Шурик' }
      ],
      MessagesData: {
        MessagesList:
          [
            { id: 1, message: 'Привет. Я слышал, ты снова приехад в Петербург, который раз за эту неделю...', read: true },
            { id: 2, message: 'Здравствуй. На счёт твоей презентации... Картинки подобраны хорошо, на этом хорошие моменты презентации закончились', read: false },
            { id: 3, message: 'Никак, погода за окном безбожно удручающая. Нет ни солнца, ни неба, ни надежды...', read: false }
          ],
        MessageText: ''
      }
    },
    ProfilePage: {
      PostsData: [
        { id: '1', author: "Денис", title: 'Эх, почему меня никто не любит' },
        { id: '2', author: "Максим", title: 'Эй-йоу, я изучаю курс по React' },
      ],
      PostText: ''
    },
    NavBar: {
      FriendsData: [
        {
          id: 1, ref: '/',
          imgUrl: 'https://sun9-19.userapi.com/s/v1/ig2/OeRQFdFv686EmdglLGkYREXXjXdXg5i8IDV0oV6P4XzbcNSdXhNUTpoXnwGTVDanh7mRHh9HL5ybh95oWcoESXl6.jpg?size=50x0&quality=96&crop=139,35,415,415&ava=1',
          name: 'Дмитрий'
        },
        {
          id: 2, ref: '/',
          imgUrl: 'https://sun9-9.userapi.com/s/v1/ig2/uY8Sx1dXkg_dZza3Vg30lTWVDWPlkt6E7tSFEZ2eNrNlQsSV7e_xqe53cAaSopB2STIwDZDcnVb0OnkmmYZrlkpv.jpg?size=100x0&quality=96&crop=5,5,1067,1067&ava=1',
          name: 'Максим'
        },
        {
          id: 3, ref: '/',
          imgUrl: 'https://sun9-47.userapi.com/s/v1/if1/ZUi_Wc3_90sQ2vr7CeDLDUbAfMnu4xR5VnantfLP3J4w7_ekEJh48BNukhHi_lIHsIr_3Hap.jpg?size=100x0&quality=96&crop=81,1,1277,1277&ava=1',
          name: 'Роман'
        }
      ]
    }
  },
  _callSubscriber() { /*observer*/ },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // паттерн observer
  },

  addPost() {
    if (this._state.ProfilePage.PostText.length != 0) {
      const newPost = {
        id: '3',
        author: 'Рома',
        title: this._state.ProfilePage.PostText
      };
      this._state.ProfilePage.PostsData.push(newPost);

      this._state.ProfilePage.PostText = '';
      this._callSubscriber();
    }
  },
  newPostText(postText) {
    this._state.ProfilePage.PostText = postText;
    this._callSubscriber();
  },
  addMessage() {
    if (this._state.DialogPage.MessagesData.MessageText.length != 0) {
      const newMessage = {
        id: 4,
        message: this._state.DialogPage.MessagesData.MessageText,
        read: false
      };
      this._state.DialogPage.MessagesData.MessagesList.push(newMessage);

      this._state.DialogPage.MessagesData.MessageText = '';
      this._callSubscriber();
    }
  },
  newMessageText(messageText) {
    this._state.DialogPage.MessagesData.MessageText = messageText;
    this._callSubscriber();
  },
  dispatch(action) {
      this._state.ProfilePage = profilePageReducer(this._state.ProfilePage, action);
      this._state.DialogPage = dialogPageReducer(this._state.DialogPage, action);

      this._callSubscriber();
  }
};

export default store;