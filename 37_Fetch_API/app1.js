console.log("hello javascript(JS)");

const API_KEY = "94303a144ace0d258e29adcfc5f72bd8";

function renderWeatherInformation(data) {
  // show in UI
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

  document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
  // let latitude = 15.3333;
  // let longitude = 74.0822;

  try {
    let city = "Indore";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log(" Weather data:-> ", data);

    // show in UI
    // let newPara = document.createElement("p");
    // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

    // document.body.appendChild(newPara);

    //render weather information
    renderWeatherInformation(data);
  } catch (error) {
    // handle error
    console.log(error);
  }
}
fetchWeatherDetails();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function getCustomerDetails() {
  try {
    let latitude1 = 17.6333;
    let longitude1 = 18.3333;

    let result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude1}&lon=${longitude1}&appid=${API_KEY}&units=metric`
    );
    let data = await result.json();
    console.log(data);
  } catch (error) {
    console.log("Error Found" + error);
  }
}

getCustomerDetails();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function switchTab(clickedTab){
  apiErrorContainer.classLink.remove("active");

  if(clickedTab !== currentTab){
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
    currentTab.classList.add("current-tab");

    if(!searchForm.classList.contains("active")){
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
    } else {
        searchForm.classList.contains("active");
        userInfoContainer.classList.remove("active");
        getFormSessionStorage();
    }

    // console.log("Current Tab", currentTab);
  }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("No geoLocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}