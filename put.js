

// BURDAN ASAGI GETDIR + EDIT BUTTON ELAVE EDILIB
    // Import the functions you need from the SDKs you need
    const table = document.querySelector("table");
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    // import { getAnalytics, } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
    import {
    getDatabase,
    ref,
    get,
    update
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
const getData = ()=>{
    table.innerHTML=`<tr>
    <th>Ad</th>
    <th>Price</th>
    <th>About</th>
    <th>Image</th>
    <th></th>
</tr>`;

    get(dataRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // console.log(data);
    
        for(let foodId in data){
            let food = data[foodId]   
            // console.log(food);
            let tr = document.createElement("tr");
            tr.setAttribute("data-key",foodId)
            let tdName = document.createElement("td");
            tdName.setAttribute("key","name")
            let tdPrice = document.createElement("td");
            tdPrice.setAttribute("key","price")
            let tdAbout = document.createElement("td");
            tdAbout.setAttribute("key","about")
            let tdImage = document.createElement("td");
            tdImage.setAttribute("key","image")
            let tdEdit = document.createElement("td");
            tdName.innerText=food.name;
            tdPrice.innerText=food.price;
            tdAbout.innerText=food.about;
            tdImage.innerHTML=` 
            <td><img src=${food?.imageUrl}/></td>`;
            let btn = document.createElement("button");
            btn.innerText="Edit";
            btn.addEventListener("click",(e)=>editData(e))
            // btn.addEventListener()
            tdEdit.append(btn);
            table.append(tr);
            tr.append(tdName,tdPrice,tdAbout,tdImage,tdEdit);
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
}
///////////////////////////////////////////////////////////////////////
const editData = (e)=>{
    let newData ={};
    let tr = e.target.closest("tr");
    let tds = tr.querySelectorAll("td");
    let dataKey = tr.getAttribute("data-key")
    console.log(tds);
    [...tds].map((td,index)=>{
        if(index<3){
            let tdValue = td.innerText;
            let inp = document.createElement("input");
            inp.value = tdValue;
            td.innerHTML="";
            td.append(inp);
        }else if(index<4){
            let imageSrc = td?.querySelector("img")?.getAttribute("src");
            let inp = document.createElement("input");
            inp.value=imageSrc;
            td.innerHTML="";
            td.append(inp);
        }else{
            let editbtn = td.querySelector("button");
            editbtn.removeEventListener("click",editData,true);
            editbtn.innerText="Save";
            editbtn.addEventListener("click",(e)=> changeData(e,newData,dataKey));
        }
        td.addEventListener("input",(e)=>{
            let key = e.target.closest("td").getAttribute("key");
            newData[key] = e.target.value;
            console.log(newData);
        })
    })
    console.log(tds);
    // let inputs
}
getData();
const changeData = (e,newData,dataKey)=>{
    
    update(ref(database, "/menu/" + dataKey),newData)
        .then(() => {
          console.log("Price successfully updated!");
          getData();
        })
        .catch((error) => {
          console.error("Error updating price: ", error);
        });
}