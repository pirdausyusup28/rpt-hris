export const setResponseData = (data) => ({
    type: 'SET_RESPONSE_DATA',
    payload: data,
  });

export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });

export const updateResponseData = (data) => ({
  type: 'UPDATE_RESPONSE_DATA',
  payload: data,
});

// export const resetValue = () => ({
//   type: 'RESET_VALUES',
//   payload: '',
// });