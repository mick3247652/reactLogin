export const ACTION_SIGNIN_SEND = "ACTION_SIGNIN_SEND"; //отправка данных для авторизации
export const ACTION_SIGNIN_TOKEN = "ACTION_SIGNIN_TOKEN"; //получен токен авторизации с сервера
export const ACTION_SIGNIN_ERROR = "ACTION_SIGNIN_ERROR"; //ошибка получения токена авторизации

export const ACTION_SIGNUP_SEND = ""; //отправка данных для регистрации
export const ACTION_SIGNUP_OK = ""; //регистрация пользователя прошла успешно
export const ACTION_SIGNUP_ERR = ""; //ошибка регистрации пользователя

export const actionSignInSend = (email, password) => ({
  type: ACTION_SIGNIN_SEND,
  email,
  password,
});

export const actionSignInToken = token => ({
  type: ACTION_SIGNIN_TOKEN,
  token,
});

export const actionSignInError = err => ({
  type: ACTION_SIGNIN_ERROR,
  err,
});

export const actionSignUpSend = (email, password) => ({
  type: ACTION_SIGNUP_SEND,
  email,
  password,
});

export const actionSignUpOk = () => ({
  type: ACTION_SIGNUP_OK,
});

export const actionSignUpError = err => ({
  type: ACTION_SIGNUP_ERR,
  err,
});
