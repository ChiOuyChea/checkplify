<template>
    <div class="container">
        <div id="container-header">
            <router-link to="/mobile/" class="action-wrapper">
                <img src="@/assets/back-arrow.png" alt="" class="back-btn">
            </router-link>
            <div class="title">
                Scan QR Code
            </div>
        </div>
        <div id="reader"></div>
        <p v-if="scannedResult">Scanned QR Code: {{ scannedResult }}</p>
    </div>
</template>

<script>
    import { Html5QrcodeScanner } from "html5-qrcode";

    export default {
        data() {
            return {
                scannedResult: null,
            };
        },
        mounted() {
            this.startScanner();
        },
        methods: {
            startScanner() {
                const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

                scanner.render(
                    (decodedText) => {
                        this.scannedResult = decodedText;
                        scanner.clear(); // Stop scanning after a successful scan
                    },
                    (errorMessage) => {
                        console.warn(errorMessage);
                    }
                );
            },
        },
    };
</script>

<style>
    .container {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        font-family: "Poppins", sans-serif;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        min-height: 100vh;
    }
    .container #container-header {
        width: 100%;
        background-color: #0092E1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        padding: 20px;
        color: white;
    }
    #container-header .action-wrapper img {
        width: 50%;
        max-width: 30px;
    }
    #container-header .title {
        margin: 0 auto;
        font-weight: 600;
    }
    #reader {
        flex-grow: 1;
        width: 100%;
        height: 100%;
    }
    #reader > div > video {
        width: 100%;
        height: 85vh;
        object-fit: cover;
    }
    p {
        margin-top: auto;
        width: 100%;
        padding: 10px;
        text-align: center;
    }
    #html5-qrcode-button-camera-stop {
        border: none;
        padding: 10px 20px;
        border-radius: 15px;
        font-family: inherit;
        cursor: pointer;
        transition: 0.3 aall ease-in-out;
    }
    #html5-qrcode-button-camera-stop:hover {
        transform: scale(1.1);
    }
</style>