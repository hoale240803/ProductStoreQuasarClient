import http from "../http";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../../firebase/auth";

const BASE_ENPOINT = "Authentication";

class AuthServices {
  login(dataLogin) {
    return http
      .post(`/${BASE_ENPOINT}/loginRefreshtoken`, dataLogin)
      .then((response) => {
        if (response.data.isAuthenticated) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  register(dataRegister) {
    return http
      .post(`/${BASE_ENPOINT}/registerConfirmedEmail`, dataRegister)
      .then((response) => {
        return response;
      })
      .catch(({ response }) => {
        return response;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  googleSignIn() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    console.log("firebaseApp", firebaseApp);

    return signInWithPopup(auth, provider)
      .then((result) => {
        debugger;
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log("gg logged results>>>", result);
        console.log("gg logged user info>>>", user);
        return { userInfo: user, accessToken: token };
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        return error;
      });
  }
  googleSignOut() {}
  forgotPassword(email) {
    return http
      .post(`/${BASE_ENPOINT}/forgot-password`, email)
      .then((response) => {
        return response;
      })
      .catch(({ response }) => {
        return response;
      });
  }

  resetPassword(form) {
    return http
      .post(`/${BASE_ENPOINT}/reset-password`, form)
      .then((response) => {
        return response;
      })
      .catch(({ response }) => {
        return response;
      });
  }
}

export default new AuthServices();
