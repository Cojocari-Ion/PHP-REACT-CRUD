import * as actionTypes from "./actions";

const initialState = {
  openDelete: false,
  openEdit: false,
  userToDelete: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_DELETE_MODAL:
      return { ...state, openDelete: action.payload };

    case actionTypes.OPEN_EDIT_MODAL:
      return { ...state, openEdit: action.payload };

    case actionTypes.ADD_USER_TO_DELETE:
      return { ...state, userToDelete: action.payload };

    default:
      return state;
  }
};

export default reducer;
