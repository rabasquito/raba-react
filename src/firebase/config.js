import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyCpP6TcO8frll7OHrHqLQuMHzXO3WExZT8",
  authDomain: "react-rabasquino.firebaseapp.com",
  projectId: "react-rabasquino",
  storageBucket: "react-rabasquino.appspot.com",
  messagingSenderId: "237287563664",
  appId: "1:237287563664:web:e4d5ef5cee57953c701315"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);