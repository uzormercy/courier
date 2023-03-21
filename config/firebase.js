import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const { 
    NEXT_PUBLIC_FIREBASE_APIKEY, 
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, 
    NEXT_PUBLIC_FIREBASE_DATABASE_URL, 
    NEXT_PUBLIC_PROJECT_ID, 
    NEXT_PUBLIC_STORAGE_BUCKET, 
    NEXT_PUBLIC_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_APP_ID, 
    NEXT_PUBLIC_MEASUREMENT_ID 
} = process.env;

const firebaseConfig = {
    apiKey: NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: 'https://xdevlogistics-default-rtdb.firebaseio.com',//NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: NEXT_PUBLIC_PROJECT_ID,
    storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: NEXT_PUBLIC_APP_ID,
    measurementId: NEXT_PUBLIC_MEASUREMENT_ID
  };

  const app = initializeApp(firebaseConfig);
  
  export const database = getDatabase(app);


