<template>
    <div class="container">
        <header>
            <div id="logo">
                <img src="@/assets/logo2.png" alt="">
                Checkplify
            </div>
            <router-link to="/mobile/notification" id="notification">
                <img src="@/assets/notification.png" alt="">
            </router-link>
        </header>
        <div id="card-wrapper">
            <div class="card-title">
                Employee Card
            </div>
            <div class="card-content">
                <div class="card-information">
                    <div class="info-item">
                        <div class="info-title">
                            Username:
                        </div>
                        <div class="info-value">
                            Kak Kheang
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-title">
                            Date of Birth:
                        </div>
                        <div class="info-value">
                            01/12/2005
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-title">
                            Phone Number:
                        </div>
                        <div class="info-value">
                            0123456789
                        </div>
                    </div>
                </div>
                <div class="card-image">
                    <!-- <img src="@/assets/user.png" alt=""> -->
                </div>
            </div>
        </div>
        <div id="time-wrapper">
            <div class="time-item">
                <img src="@/assets/calendar.png" alt="">
                22/01/2025
            </div>
            <div class="time-item">
                <img src="@/assets/clock.png" alt="">
                12:30 pm
            </div>
        </div>
        <div id="action-wrapper">
            <router-link to="/mobile/report" class="action-item">
                <img src="@/assets/report.png" alt="">
                Report
            </router-link>
            <button @click="toggleOT" class="action-item">
                <img src="@/assets/overtime.png" alt="">
                Request OT
            </button>
            <router-link to="/mobile/request-leave" class="action-item">
                <img src="@/assets/paper.png" alt="">
                Request Leave
            </router-link>
        </div>
        <footer>
            <div class="curved-section"></div>
            <router-link to="/mobile/qr-code" class="icon-container">
                <img src="@/assets/scan-qr.png" alt="Icon" width="30" height="30">
            </router-link>
        </footer>
    </div>

    <div id="ot-modal-bg" :class="{ 'show' : showOTModal }"></div>
    <div id="ot-modal-container" :class="{ 'show' : showOTModal }">
        <div class="ot-header">
            Request Overtime
        </div>
        <p>
            Are you sure you want to request overtime?
        </p>
        <div class="ot-footer">
            <button @click="toggleOT" id="no-btn">No</button>
            <button @click="toggleOT" id="yes-btn">Yes</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showOTModal: false
            }
        },
        methods: {
            toggleOT() {
                this.showOTModal = !this.showOTModal;
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        max-width: 500px;
        background-color: #0092E1;
        min-height: 100vh;
        margin: 0 auto;
        font-family: "Poppins", sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        color: white;
    }
    .container header {
        width: 90%;
        padding: 20px 0;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }
    header #logo img {
        width: 25px;
    }
    header #notification img {
        width: 15px;
    }
    .container #card-wrapper {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #FFFFFF;
        border-radius: 25px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        color: black;
        padding: 25px 35px 45px 25px;
        gap: 1.5rem;
    }
    #card-wrapper .card-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    #card-wrapper .card-content .card-information {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        width: 60%;
    }
    .card-information {
        width: 100%;
    }
    .card-information .info-item { 
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        width: 100%;
        gap: 0.5rem;
    }
    #card-wrapper .card-title {
        text-align: center;
        text-decoration: underline;
        font-weight: 600;
    }
    .card-content .card-image {
        width: 40%;
        max-width: 100px;
        aspect-ratio: 1;
        background-color: #0092E1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('@/assets/user.png');
        background-position: center;
        background-size: 25px;
        background-repeat: no-repeat;
    }
    .container #time-wrapper {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 20px auto;
    }
    #time-wrapper .time-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }
    #time-wrapper .time-item > img {
        width: 25px;
    }
    .container #action-wrapper {
        width: 100%;
        border-radius: 50px 50px 0 0;
        background-color: white;
        flex-grow: 1;
        padding: 12% 12% 60px 12%;
        gap: 2rem;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .container #action-wrapper .action-item {
        display: block;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        text-decoration: none;
        color: black;
        font-size: 9px;
        text-align: center;
        border: none;
    }
    .container #action-wrapper .action-item > img {
        width: 30%;
    }
    footer {
        position: relative;
        background: white;
        /* height: 200px; */
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        box-sizing: border-box; 
        max-width: 500px;
        /* margin: 0 auto; */
    }
    .curved-section {
        background: #008cdd; /* Blue color */
        height: 60px;
        position: relative;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }
    .curved-section::before {
        content: "";
        position: absolute;
        top: -40px;
        left: 50%;
        width: 80px;
        height: 80px;
        background: white;
        border-radius: 50%;
        transform: translateX(-50%);
        /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    }
    .icon-container {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #ot-modal-bg{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .25);
        z-index: 2;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }
    #ot-modal-container{
        width: 90%;
        max-width: 400px;
        padding: 20px;
        border-radius: 16px;
        background-color: white;
        font-size: 14px;
        z-index: 3;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -80%);
        font-family: "Poppins", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        flex-direction: column;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }
    #ot-modal-bg.show {
        opacity: 1;
        visibility: visible;
    }
    #ot-modal-container.show {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -50%);
    }
    #ot-modal-container .ot-header {
        font-weight: bold;
        text-align: center;
    }
    #ot-modal-container p {
        text-align: center;
    }
    #ot-modal-container .ot-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    #ot-modal-container .ot-footer button {
        padding: 10px 15px;
        border-radius: 10px;
        color: white;
        border: none;
    }
    #ot-modal-container .ot-footer #yes-btn {
        background-color: #0092E1;
    }
    #ot-modal-container .ot-footer #no-btn {
        background-color: #898989;
    }
    button, .action-item, .icon-container {
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        border: none;
    }
    .action-item:hover {
        transform: scale(1.1);
        color: white !important;
        background-color: #0092E1 !important;
    }
    .icon-container:hover { 
        transform: translateX(-50%) scale(1.1);
    }
    @media (max-width: 500px) {
        #card-wrapper .card-content .card-information {
            font-size: 13px;
        }
        .card-content .card-image {
            max-width: 70px;
        }
    }


</style>
