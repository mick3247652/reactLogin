export const ACTION_SET_TOKEN = "ACTION_SET_TOKEN"; //получен токен авторизации с сервера
export const ACTION_SET_USER_PROFILE = "ACTION_SET_USER_PROFILE"

export const actionSetToken = token => ({
  type: ACTION_SET_TOKEN,
  token,
});

export const actionSetUserProfile = profile => ({
  type: ACTION_SET_USER_PROFILE,
  profile,
})
