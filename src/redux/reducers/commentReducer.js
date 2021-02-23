export const commentReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADDCOMMENT':
        state = action.payload;
        return state;
      default:
        return state;
    }
  };

  