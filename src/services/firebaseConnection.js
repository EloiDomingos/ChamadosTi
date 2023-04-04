import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD_bCvydPo0VEdT6bOqbDy6EAZDfev8wro",
    authDomain: "chamados-26172.firebaseapp.com",
    projectId: "chamados-26172",
    storageBucket: "chamados-26172.appspot.com",
    messagingSenderId: "799165578406",
    appId: "1:799165578406:web:f8e247907d7d5dfe144867",
    measurementId: "G-LTBRP07N2W"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export {auth, db, storage};