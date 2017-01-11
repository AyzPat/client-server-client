( function(){


     const config = {
    apiKey: "AIzaSyAYfgyinUAbYU3tb5lc3wDCNedQ0oKBp7A",
    authDomain: "faith-20e6a.firebaseapp.com",
    databaseURL: "https://faith-20e6a.firebaseio.com",
    storageBucket: "faith-20e6a.appspot.com",
    messagingSenderId: "100477053105"
  };
  firebase.initializeApp(config);

  const email=document.getElementById('email');
  const password=document.getElementById('password');
  const login=document.getElementById('login');

login.addEventListener('click',e =>{
    const email=email.value;
    const pass=password.value;
    const auth=firebase.auth();
    const promise=auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e=>console.log(e.message));
})

})