const rootReducer = (state, action) => {
    switch (action.type) {
      case 'SET_RESPONSE_DATA':
        return {
          ...state,
          responseData: action.payload,
        };
      case 'LOGOUT_USER':
        return null;
      case 'UPDATE_RESPONSE_DATA':
        return {
          ...state,
          responseData: action.payload,
        };
      // case 'RESET_VALUES':
      //   return null;
      default:
        return state;
    }
  };
  
  export default rootReducer;