/* line graph, bar graph, pie graph chart section*/

/******* line graph ******/
let trafficCanvas = document.getElementById("traffic-chart");

let dailyTraffic = {
    labels: ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
        data:[750, 1150, 1750, 1250, 2250, 2000, 1000],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        tension: 0.4
    }]
};

let weeklyData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
    datasets: [{
        data:[10150, 11500, 9450, 8760, 12900, 7200, 11100, 9870],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        tension: 0.4
    }]
};

let monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    datasets: [{
        data:[75000, 51150, 67175, 81250, 92250, 62000, 81100, 75000, 51150, 56175, 61250, 102250],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        tension: 0.4
    }]
};

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data:[750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        tension: 0.4
    }]
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

 /***** bar graph *****/
 const dailyCanvas = document.getElementById("daily-chart");

 const dailyData = {
     labels: ["s", "M", "T", "W", "T", "F", "S"],
     datasets: [{
         label: '# of Hits',
         data: [75, 115, 175, 125, 225, 200, 100],
         backgroundColor: '#7477BF',
         borderWidth: 1
     }]
 };

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display:false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

/***** pie graph  *******/
 const mobileCanvas = document.getElementById("mobile-chart");

 const mobileData = {
     labels: ["Desktop", "Tablet", "Phones"],
     datasets: [{
         label: '# of users',
         data: [2000, 550, 500],
         backgroundColor: ['#7477BF', '#78CF82', '#51B6C8'],
         borderWidth: 0
     }]
 };

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});
