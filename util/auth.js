import axios from "axios";

const API_KEY = "AIzaSyBnet9ItWPZWL1f4LvTKD61XYWDoIM8-9A";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    //displayName: "teste",
    email: email,
    password: password,
    returnSecureToken: true,
  });
  //console.log(response.data);

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
