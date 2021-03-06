const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

const profilePageReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.PostText.length != 0) {
        const newPost = {
          id: '3',
          author: 'Рома',
          title: state.PostText
        };
        state.PostsData.push(newPost);

        state.PostText = '';
      };
      return state;
    case NEW_POST_TEXT:
      state.PostText = action.postText;
      return state;
    default : return state;
  }
}

export const addPostActionCreator = () => {
  return {type: ADD_POST};
};
export const newPostTextActionCreator = (text) => {
  return {type: NEW_POST_TEXT, postText: text};
};

export default profilePageReducer;