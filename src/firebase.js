import { initializeApp  } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAi0nzZH0ItyAiobhSTirCVux_emTY87WY",
    authDomain: "avispa-lab.firebaseapp.com",
    projectId: "avispa-lab",
    storageBucket: "avispa-lab.appspot.com",
    messagingSenderId: "979080031019",
    appId: "1:979080031019:web:4c6c253d831225079f736e"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  
  export default firebaseApp;
 