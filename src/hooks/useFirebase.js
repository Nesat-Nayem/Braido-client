import intializeFirebase from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";

intializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })

      .catch((err) => {
        console.log(err);
      })

      .finally(() => setIsLoading(false));
    sessionStorage.removeItem("email");
  };

  const handleUserRegister = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        hanldeUserInfoRegister(result.user.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  const hanldeUserInfoRegister = (email) => {
    fetch("https://salty-reaches-02915.herokuapp.com/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  const handleUserLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        sessionStorage.setItem("email", result.user.email);
        console.log(result.user);
      })

      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  return {
    handleGoogleLogin,
    handleUserLogin,
    user,
    isLoading,
    handleLogout,
    handleUserRegister,
  };
};

export default useFirebase;
