<template>
  <div class="dashboard-wrapper">
    <div class="dashboard-item">
        <div class="title">
            <span>
                Statistics
            </span>
        </div>
        <div class="content">
            <canvas ref="statisticsChart"></canvas>
        </div>
    </div>
    <div class="dashboard-item">
        <div class="title">
            <span>
                Attendance
            </span>
        </div>
        <div class="content">
            <div class="attendance-container">
                <div class="attendance-item">
                    <div class="attendance-content">
                        <div class="icon-container">
                            <img src="" alt="">
                        </div>
                        <div class="attendance-title">
                            <span>Checked it</span>
                        </div>
                        <div class="attendance-value">
                            <span>5000</span>
                        </div>
                    </div>
                </div>
                <div class="attendance-item">
                    <div class="attendance-content">
                        <div class="icon-container">
                            <img src="" alt="">
                        </div>
                        <div class="attendance-title">
                            <span>Not Checked In</span>
                        </div>
                        <div class="attendance-value">
                            <span>5000</span>
                        </div>
                    </div>
                </div>
                <div class="attendance-item">
                    <div class="attendance-content">
                        <div class="icon-container">
                            <img src="" alt="">
                        </div>
                        <div class="attendance-title">
                            <span>On Leave</span>
                        </div>
                        <div class="attendance-value">
                            <span>5000</span>
                        </div>
                    </div>
                </div>
                <div class="attendance-item">
                    <div class="attendance-content">
                        <div class="icon-container">
                            <img src="" alt="">
                        </div>
                        <div class="attendance-title">
                            <span>Weekly Off</span>
                        </div>
                        <div class="attendance-value">
                            <span>5000</span>
                        </div>
                    </div>
                </div>
                <div class="attendance-item">
                    <div class="attendance-content">
                        <div class="icon-container">
                            <img src="" alt="">
                        </div>
                        <div class="attendance-title">
                            <span>Weekly</span>
                        </div>
                        <div class="attendance-value">
                            <span>5000</span>
                        </div>
                    </div>
                </div>
                <div class="attendance-item">
                    <div class="attendance-content">
                        <div class="icon-container">
                            <img src="" alt="">
                        </div>
                        <div class="attendance-title">
                            <span>Checked Out</span>
                        </div>
                        <div class="attendance-value">
                            <span>5000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="dashboard-item">
        <div class="title">
            <span>
                On Time Check In
            </span>
        </div>
        <div class="content">
            <canvas ref="onTimeChart"></canvas>
        </div>
    </div>
    <div class="dashboard-item">
        <div class="title">
            <span>
                Overtime
            </span>
        </div>
        <div class="content">
            <canvas ref="overTimeChart"></canvas>
        </div>
    </div>
    <div class="dashboard-item">
        <div class="title">
            <span>
                Attendance Source
            </span>
        </div>
        <div class="content">
            <div class="attendance-source-wrapper">
                <div class="source-items">
                    <div class="source-title">
                        <span>Item1</span>
                    </div>
                    <div class="source-value">
                        <span>5000</span>
                    </div>
                </div>
                <div class="source-items">
                    <div class="source-title">
                        <span>Item1</span>
                    </div>
                    <div class="source-value">
                        <span>5000</span>
                    </div>
                </div>
                <div class="source-items">
                    <div class="source-title">
                        <span>Item1</span>
                    </div>
                    <div class="source-value">
                        <span>5000</span>
                    </div>
                </div>
                <div class="source-items">
                    <div class="source-title">
                        <span>Item1</span>
                    </div>
                    <div class="source-value">
                        <span>5000</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="dashboard-item">
        <div class="title">
            <span>
                Exceptions
            </span>
        </div>
        <div class="content">
            <div class="others-container">
                <div class="other-item">
                    <div class="other-title">
                        <span>Item Title</span>
                    </div>
                    <div class="other-value">
                        <span>5000</span>
                    </div>
                </div>
                <div class="other-item">
                    <div class="other-title">
                        <span>Item Title</span>
                    </div>
                    <div class="other-value">
                        <span>5000</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="dashboard-item">
        <div class="title">
            <span>
                Pending Requests
            </span>
        </div>
        <div class="content">
            <div class="others-container">
                <div class="other-item">
                    <div class="other-title">
                        <span>Item Title</span>
                    </div>
                    <div class="other-value">
                        <span>5000</span>
                    </div>
                </div>
                <div class="other-item">
                    <div class="other-title">
                        <span>Item Title</span>
                    </div>
                    <div class="other-value">
                        <span>5000</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

  
<script>
    import { ref, onMounted } from "vue";
    import { Chart, registerables } from "chart.js";

    Chart.register(...registerables);

    export default {
        setup() {
            const statisticsChart = ref(null);
            const onTimeChart = ref(null);
            const overTimeChart = ref(null);

            onMounted(() => {
            // Initialize Pie Chart
                if (statisticsChart.value) {
                    new Chart(statisticsChart.value, {
                    type: "pie",
                    data: {
                        labels: ["Red", "Blue", "Yellow"],
                        datasets: [
                        {
                            label: "Votes",
                            data: [12, 19, 7],
                            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                        },
                        ],
                    },
                    options: {
                        responsive: true,
                    },
                    });
                }

                // Initialize Bar Chart
                if (onTimeChart.value) {
                    new Chart(onTimeChart.value, {
                    type: "bar",
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                        {
                            label: "Performance",
                            data: [80, 75, 85, 78, 82, 88],
                            backgroundColor: "rgba(54, 162, 235, 0.7)",
                            borderColor: "dodgerblue",
                            borderWidth: 1,
                        },
                        ],
                    },
                    options: {
                        responsive: true,
                        scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                            display: true,
                            text: "Performance (%)",
                            },
                        },
                        },
                    },
                    });
                }
                // Initialize Bar Chart
                if (overTimeChart.value) {
                    new Chart(overTimeChart.value, {
                    type: "bar",
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                        {
                            label: "Performance",
                            data: [80, 75, 85, 78, 82, 88],
                            backgroundColor: "rgba(54, 162, 235, 0.7)",
                            borderColor: "dodgerblue",
                            borderWidth: 1,
                        },
                        ],
                    },
                    options: {
                        responsive: true,
                        scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                            display: true,
                            text: "Performance (%)",
                            },
                        },
                        },
                    },
                    });
                }
            });

            return { statisticsChart, onTimeChart, overTimeChart };
        },
    };
</script>
  

<style>
    .dashboard-wrapper {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr)); /* Ensures columns never shrink unevenly */
        gap: 1.5rem;
        /* background-color: dodgerblue;
        padding: 10px; */
        width: 100%;
        height: 100%;
        font-family: 'Poppins', sans-serif;
    }
    .dashboard-wrapper > .dashboard-item {
        background-color: #F4F6FA;
        border-radius: 28px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        box-sizing: border-box; /* Ensures padding doesn't add extra width */
        margin: 0;
        width: 100%; /* Forces full width of the grid cell */
        gap: 1rem;

    }
    /* LAYOUT  */
    .dashboard-wrapper > .dashboard-item:nth-child(1) {
        grid-column: span 2;

    }
    .dashboard-wrapper > .dashboard-item:nth-child(2) {
        grid-column: span 10;
    }
    .dashboard-wrapper > .dashboard-item:nth-child(3){
        grid-column: span 4;
    }
    .dashboard-wrapper > .dashboard-item:nth-child(4){
        grid-column: span 4;
    }
    .dashboard-wrapper > .dashboard-item:nth-child(5){
        grid-column: span 4;
    }
    .dashboard-wrapper > .dashboard-item:nth-child(6){
        grid-column: span 6;
    }
    .dashboard-wrapper > .dashboard-item:nth-child(7){
        grid-column: span 6;
    }
    .dashboard-wrapper .title span{
        font-size: 18px;
    }
    .dashboard-wrapper .content {
        width: 100%;
    }
    .dashboard-wrapper .content > canvas {
        width: 100%;
    }
    .dashboard-wrapper .attendance-container {
        /* padding: 5px 1rem; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        gap: 1rem;
        padding: 5px;
    }

    .attendance-container{
      white-space: nowrap;  /* Prevents wrapping */
      overflow-x: auto;     /* Enables horizontal scrolling */
      overflow-y: hidden;
    }

    .attendance-container .attendance-item {
        background-color: white;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        border-radius: 19px;
        padding: 2rem 1rem;
        width: 100%;
        min-width: 150px;
    }
    .attendance-container .attendance-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    .attendance-container .attendance-title {
        font-size: 12px;
    } 
    .attendance-container .attendance-value {
        font-size: 24px;
        color: red;
    }
    .attendance-container .icon-container {
        width: 30px;
        height: 30px;
        border-radius: 7px;
        background-color: #D9D9D9;
        display: flex;
        justify-content: center;
    }
    .dashboard-item .attendance-source-wrapper {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr)); /* Ensures columns never shrink unevenly */
        gap: 1rem;
        padding: .5rem;
    }
    .attendance-source-wrapper .source-items {
        grid-column: span 6;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 19px;
        padding: 1rem .5rem;
        flex-direction: column;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    }
    .source-items .source-title {
        font-size: 12px;
    }
    .source-items .source-value {
        font-size: 24px;
        color: #0092E1;
    }
    .others-container {
        margin-top: 15px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
    }
    .others-container .other-item {
        background-color: white;
        border-radius: 19px;
        width: 100%;
        padding: 1rem;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    }
    .other-item .other-title {
        font-size: 12px;
    }
    .other-item .other-value { 
        font-size: 24px;
        color: #0092E1;
    }

    @media (max-width: 1650px) {
        .dashboard-wrapper > .dashboard-item:nth-child(1) {
            grid-column: span 3;
        }
        .dashboard-wrapper > .dashboard-item:nth-child(2) {
            grid-column: span 9;
        } 
    }
    @media (max-width: 1400px) {
        .dashboard-wrapper > .dashboard-item:nth-child(1) {
            grid-column: span 4;
        }
        .dashboard-wrapper > .dashboard-item:nth-child(2) {
            grid-column: span 8;
        } 
    }
    

</style>