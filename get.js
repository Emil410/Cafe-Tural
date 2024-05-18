    // Import the functions you need from the SDKs you need
   const table = document.querySelector("table");
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    // import { getAnalytics, } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
    import {
    getDatabase,
    ref,
    get,
  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDjPDAQ7HpWFUEheU_Rmdn6mAjiw5mvNg4",
      authDomain: "tural-cafe-db.firebaseapp.com",
      databaseURL: "https://tural-cafe-db-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "tural-cafe-db",
      storageBucket: "tural-cafe-db.appspot.com",
      messagingSenderId: "473916549227",
      appId: "1:473916549227:web:81c794567a51d49e66e92e",
      measurementId: "G-7S3LTF9XJE"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    const database = getDatabase(app)
  // Yazmak için veri referansını alın
  const dataRef = ref(database, "/menu");
  get(dataRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
    
        for(let foodId in data){
            let food = data[foodId]   
            console.log(food);
            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdPrice = document.createElement("td");
            let tdAbout = document.createElement("td");
            let tdImage = document.createElement("td");
            tdName.innerText=food.name;
            tdPrice.innerText=food.price;
            tdAbout.innerText=food.about;
            tdImage.innerHTML=` 
            <td><img src=${food?.imageUrl}/></td>`;
            table.append(tr);
            tr.append(tdName,tdPrice,tdAbout,tdImage)
        }
        // data.map((food)=>{
        //     let tr = document.createElement("tr");
        //     let tdName = document.createElement("td");
        //     let tdPrice = document.createElement("td");
        //     let tdAbout = document.createElement("td");
        //     tdName.innerText=food.name;
        //     tdPrice.innerText=food.price;
        //     tdAbout.innerText=food.about;
        //     table.append(tr);
        //     tr.append(tdName,tdPrice,tdAbout)
        // })
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("Error reading data: ", error);
        });

