export const addComments = (newComment) => {
    return {
      type: 'ADDCOMMENT',
      payload: newComment,
    };
  };
  