import { api_authenticate, api_register, api_getUserProfile } from "./config";

export const authenticate = async (email, password) => {
  const response = await fetch(api_authenticate, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const json = await response.json();
  if (json.error) throw json.error;
  return json.token;
};

export const register = async (email, password) => {
  const response = await fetch(api_register, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return await authenticate(email, password);
};

export const getUserProfile = async token => {
  const response = await fetch(api_getUserProfile, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
  const json = await response.json();
  if (json.error) throw json.error;
  return json;
};
