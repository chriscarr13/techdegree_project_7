/*******************  Variables *********************/ 
const alertBanner = document.getElementById("alert");   // alert baner variables
const notification = document.getElementById("notification");

const iconMenu = document.getElementById("icon"); // dropdown menu variables
const dropMenu = document.querySelector ('.dropdown-content');

let time = document.querySelector('#traffic-list'); // traffic list variable

const trafficNav = document.getElementById('traffic-list'); // traffic chart nav variable

// note: variable trafficCanvas was declared in chart.js
// note: variable trafficChart was declared in chart.js
// note: variable dailyTraffic was declared in chart.js
// note: variable trafficOptions was declared in chart.js
// note: variables weeklyData, monthlyData and trafficData was declared in chart.js

const user = document.getElementById("userField");   // variables for  form field and messages
const message = document.getElementById("messageField");
const send = document.getElementById("send");

const timezone = document.getElementById("timezone");  // variables for settings local storage section
const emailSettings = document.getElementById("email-notification");
const privacySettings = document.getElementById("privacy");




/**********  Notification alert banner ***********/
alertBanner.innerHTML = 
`
<div class="alert-banner container">
    <p><strong>Alert:</strong> You have unread messages</p>
    <p class="alert-banner-close">X</p>
</div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});

/*********  drop down menu **********/
iconMenu.addEventListener('click', e => {
    notification.style.display = "none";
    if(dropMenu.classList.contains("hide")){
        dropMenu.classList.remove("hide");
    }
    else if(false ==(dropMenu.classList.contains("hide"))){
    dropMenu.classList.add("hide");
    }
});


/********* traffic list navigation **************/
time.addEventListener('click', e =>{
    let active = document.querySelector(".selected");
    active.classList.remove('selected');
    const element = e.target;
    element.classList.remove('selected');
    element.classList.add('selected');
});


trafficNav.addEventListener('click', e => {
    let element = e.target;
    trafficChart.destroy();
    if(element.classList.contains("daily")){
            trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: dailyTraffic,
            options: trafficOptions
        });
    }
    else if (element.classList.contains("weekly")) {
            trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: weeklyData,
            options: trafficOptions
        });
    }
    else if (element.classList.contains("monthly")) {
            trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: monthlyData,
            options: trafficOptions
        });
    }
    else if (element.classList.contains("hourly")) {
            trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
    }
});

/************** form field messages stuff *********/
send.addEventListener('click', () => {
    if (user.value === "" && message.value === ""){
        alert("Please fill out user and message fields before sending");
    } 
    else if (user.value === ""){
        alert("Please fill out user field before sending");
    }
    else if (message.value === ""){
        alert("Please fill out message field before sending");
    } 
    else {
        alert(`Message succesfully sent to: ${user.value}`);
    }
});

/*********** local storage settings *****************/
myStorage = window.localStorage;
function save() {
    if(emailSettings.checked === true){
        myStorage.setItem('email-notification', emailSettings.checked);
    }
    else {
        myStorage.setItem('email-notification', false);
    }

    if(privacySettings.checked === true){
        myStorage.setItem('privacy', privacySettings.checked);
    }
    else {
        myStorage.setItem('privacy', false);
    }
    myStorage.setItem('timezone', timezone.value);
}
function cancel() {
    myStorage.clear();
    emailSettings.checked = false;  
    privacySettings.checked = false;
    timezone.value = "";
}

var checkedOne = JSON.parse(myStorage.getItem('email-notification'));
var checkedTwo = JSON.parse(myStorage.getItem('privacy'));
var timezoneSelect = myStorage.getItem('timezone');
    emailSettings.checked = checkedOne;  
    privacySettings.checked = checkedTwo;
    timezone.value = timezoneSelect;
    



 