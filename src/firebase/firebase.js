// import firebase sdk
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// create database
const db = getFirestore();

// create firebase auth provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const SignInWithGoogle = async () =>
  signInWithPopup(auth, googleProvider).then(async (result) => {
    const docRef = doc(db, "users", result.user.email);
    const userSnapshot = await getDoc(docRef);

    if (userSnapshot.exists()) {
      // if user exist just get the user email
      let userInfo = result.user.email;
      return { userInfo };
    } else {
      try {
        await setDoc(docRef, {
          email: result.user.email,
          displayName: result.user.displayName,
          photoUrl: result.user.photoURL,
          //dummy data will be created the moment you create a user
          data: [
            {
              vehicleNo: "IT 20 BOM",
              driver: "Tom David",
              date: "1 / 11 / 2012",
              vehicleType: "Motorcycle",
              dueDate: "12 / 4 / 2021",
              vehicleModel: "2014 Model",
              cost: "$100",
            },
            {
              vehicleNo: "IT 20 BOM",
              driver: "Tom David",
              date: "1 / 11 / 2012",
              vehicleType: "Motorcycle",
              dueDate: "12 / 4 / 2021",
              vehicleModel: "2014 Model",
              cost: "$100",
            },
            {
              vehicleNo: "IT 20 BOM",
              driver: "Tom David",
              date: "1 / 11 / 2012",
              vehicleType: "Motorcycle",
              dueDate: "12 / 4 / 2021",
              vehicleModel: "2014 Model",
              cost: "$100",
            },
            {
              vehicleNo: "IT 20 BOM",
              driver: "Tom David",
              date: "1 / 11 / 2012",
              vehicleType: "Motorcycle",
              dueDate: "12 / 4 / 2021",
              vehicleModel: "2014 Model",
              cost: "$100",
            },
            {
              vehicleNo: "IT 20 BOM",
              driver: "Tom David",
              date: "1 / 11 / 2012",
              vehicleType: "Motorcycle",
              dueDate: "12 / 4 / 2021",
              vehicleModel: "2014 Model",
              cost: "$100",
            },
            {
              vehicleNo: "IT 20 BOM",
              driver: "Tom David",
              date: "1 / 11 / 2012",
              vehicleType: "Motorcycle",
              dueDate: "12 / 4 / 2021",
              vehicleModel: "2014 Model",
              cost: "$100",
            },
            {
              vehicleNo: "IT 20 BOM",
              driver: "Tom David",
              date: "1 / 11 / 2012",
              vehicleType: "Motorcycle",
              dueDate: "12 / 4 / 2021",
              vehicleModel: "2014 Model",
              cost: "$100",
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
      let userInfo = result.user.email;
      return { userInfo };
    }
  });

// get user data from firebase
export const getUserData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let userData = docSnap.data();
    return { userData };
  } else {
    let userData = "login again";
    console.log("No document!");
    return { userData };
  }
};

export const logout = async () => {
  // signout of google, redirect to homepage
  signOut(auth).then(() => {
    console.log("SignedOut");
    window.location.pathname = "/";
  });
};
