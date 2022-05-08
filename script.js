let myallthrough = document.getElementById("allthrough");
let myplaceholder = document.getElementById("placeholder");
let mySearch = document.getElementById("Search");
let mycountry = document.getElementById("country");
let mystate = document.getElementById("state");
let mytimezone = document.getElementById("time-zone");
let mywind = document.getElementById("wind");
let mydgree = document.getElementById("dgree");
let myTempreture = document.getElementById("Tempreture");
let myLongtitude = document.getElementById("Longtitude");
let myLatitude = document.getElementById("Latitude");
let myweather = document.getElementById("weather");
let myMIN = document.getElementById("MIN");
let myMAX = document.getElementById("MAX");
let mysealevel = document.getElementById("sea-level");
let mygroundlevel = document.getElementById("ground-level");
let myPressure = document.getElementById("Pressure");






mySearch.addEventListener("click", (e) => {
    e.preventDefault();
    
    var x = document.getElementById("colum1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
    var x = document.getElementById("colum2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var x = document.getElementById("colum3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    let city = "";
    city = `${myplaceholder.value}`;
    
    // Make a request the Data
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cebd60a3ff2ea596c1c53f24d5f8d397`)
    .then(function (response) {
    
    // handle success
    // console.log(response.data);
    
    let data = response.data;
    let alldata = Object.entries(data);
    console.log(alldata);
    
    let Longtitude = " ";
     Longtitude = Math.ceil(alldata[0][1]["lon"]) 
     myLongtitude.innerHTML = Longtitude  + "<sup> ° </sup> ";
    
    let Latitude = " ";
     Latitude = Math.ceil(alldata[0][1]["lat"]) 
     myLatitude.innerHTML = Latitude + "<sup> ° </sup> ";
    
    let weather = " ";
     weather = alldata[1][1][0]["description"]
     myweather.innerHTML = weather;
    
    let country = " ";
     country = alldata[8][1]["country"]
     mycountry.innerHTML = country;
    
    let state = " ";
     state = alldata[11][1]
     mystate.innerHTML = state; //°
    
    let timezone = " ";
    timezone = alldata[9][1]
     mytimezone.innerHTML = timezone;
    
    let Tempreture = " ";
    Tempreture = alldata[3][1]["temp"]
    myTempreture.innerHTML = Tempreture + "<sup> ° </sup> C ";
    
    let Max = " ";
    Max = alldata[3][1]["temp_max"]
    myMAX.innerHTML = Max + "<sup> ° </sup> C ";
    
    let min = " ";
    min = alldata[3][1]["temp_min"]
    myMIN.innerHTML = min + "<sup> ° </sup> C ";
    
    let pressure = " ";
    pressure = alldata[3][1]["pressure"]
    myPressure.innerHTML = pressure;
    
    let sea = " ";
    sea = alldata[3][1]["sea_level"]
    mysealevel.innerHTML = sea;
    
    let Ground = " ";
    Ground = alldata[3][1]["grnd_level"]
    mygroundlevel.innerHTML = Ground;
    
    let wind = " ";
    wind = alldata[5][1]["speed"]
    mywind.innerHTML = wind + "<sup> + </sup> ";
    
    let dgree = " ";
    dgree = alldata[5][1]["deg"]
    mydgree.innerHTML = dgree + "<sup> RF </sup> ";
    
    })
    })