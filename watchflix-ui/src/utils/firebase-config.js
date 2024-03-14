import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBM4MI7v79MHVBtnGBb_2TCdrhbGBuuDX8",
  authDomain: "watchflix-project.firebaseapp.com",
  projectId: "watchflix-project",
  storageBucket: "watchflix-project.appspot.com",
  messagingSenderId: "1080734573424",
  appId: "1:1080734573424:web:1f69d104cf059d595d65b5",
  measurementId: "G-ZY73MYV1KX"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
