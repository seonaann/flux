import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpdXPYbOxzCMQrtUxU7fBR8GrmsBZem08",
  authDomain: "smart-energy-usage-track-6d53a.firebaseapp.com",
  databaseURL: "https://smart-energy-usage-track-6d53a-default-rtdb.firebaseio.com",
  projectId: "smart-energy-usage-track-6d53a",
  storageBucket: "smart-energy-usage-track-6d53a.firebasestorage.app",
  messagingSenderId: "1040161862583",
  appId: "1:1040161862583:web:c4b6f6d33cd24badcdee32"
};

const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

export default app;