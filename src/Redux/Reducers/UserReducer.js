const stateUser = {
  credential: null,
  profile: null,
};

const UserReducer = (state = stateUser, action) => {
  switch (action.type) {
    case "USER": {
      state.credential = action.payload;
      return { ...state };
    }
    case "REMOVE_USER": {
      state.credential = action.payload;
      return { ...state };
    }
    case "FECH_PROFILE": {
      state.profile = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default UserReducer;
