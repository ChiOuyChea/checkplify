<template>
  <div class="attendance-wrapper">
    <div class="attendance-item">
        <div class="attendance-header">
            <div class="title">
                <h1>Attendance</h1>
                <span>Month-January</span>
            </div>
            <div class="date-picker">
                <label for="dateSelection">
                    Date
                </label>
                <input type="date" id="dateSelection"/>
            </div>
        </div>
    </div>
    <div class="attendance-item">
        <div class="attendance-profile">

            <div v-for="(item, index) in tableItems" :key="index" class="profile-wrapper">
                <div class="image-block">
                    <img :src="item.image" alt="">
                </div>
                <div class="name-block">
                    <span class="username">
                        {{ item.name }}
                    </span>
                    <div class="position">
                        {{ item.designation }}
                    </div>
                </div>
                <div class="footer-block">
                    <button class="profile-btn">Profile Details</button>
                </div>
            </div>
            
        </div>
    </div>
    <div class="attendance-item">
        <div class="attendance-table">
            <div class="table-header">
                <div class="employees-header">Employees</div>
                <div class="designation-header">Designation</div>
                <div class="date-header">Date</div>
                <div class="check-in-header">Check-in Time</div>
                <div class="checkout-header">Checkout Time</div>
                <div class="details-header">Details</div>
            </div>

            <div v-for="(item, index) in tableItems" :key="index" class="table-body" :style="tableBackgroundColor(index)">
                <div class="employees-column">
                    <div class="image">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="name">
                        {{ item.name }}
                    </div>
                </div>
                <div class="designation-column">
                    {{ item.designation }}
                </div>
                <div class="date-column">
                    {{ item.date }}
                </div>
                <div class="check-in-column">
                    {{ item.checkInTime }}
                </div>
                <div class="checkout-column">
                    {{ item.checkInTime }}
                </div>
                <div class="details-column">
                    <button>View</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    setup() {
        
    },
    data() {
        return {
            tableItems: [
                            { 
                                name: 'Vang Kheang',
                                image: 'https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/318346617_1299951467457123_320425686641260075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFmAq5cn22oT4pEsHM5elNbESENWfewphwRIQ1Z97CmHOGFzsyZP8AgSPEQWrCi2_hVuLgdU0a95jFYR59BLDFe&_nc_ohc=-kw2AfBrK30Q7kNvgGK_3FK&_nc_oc=AdmIxh14JXS9l7QoCYTD0Z9amF9jN8JgV99E6VwdrGeAxI5i2BPHBll9QUeb7F27zdE&_nc_zt=23&_nc_ht=scontent.fpnh20-1.fna&_nc_gid=jCM9C3402GD-Q9m9_5VIGQ&oh=00_AYFqGY9x-AHjFciSIH5NVw0TzDOPyQGp06-pK6VQD_qyXA&oe=67EF102D',
                                designation: 'Web Developer',
                                date: '12-12-2025',
                                checkInTime: '6:10 AM',
                                checkOutTime: '5:10 PM'
                            },
                            { 
                                name: 'Vang Kheang',
                                image: 'https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/318346617_1299951467457123_320425686641260075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFmAq5cn22oT4pEsHM5elNbESENWfewphwRIQ1Z97CmHOGFzsyZP8AgSPEQWrCi2_hVuLgdU0a95jFYR59BLDFe&_nc_ohc=-kw2AfBrK30Q7kNvgGK_3FK&_nc_oc=AdmIxh14JXS9l7QoCYTD0Z9amF9jN8JgV99E6VwdrGeAxI5i2BPHBll9QUeb7F27zdE&_nc_zt=23&_nc_ht=scontent.fpnh20-1.fna&_nc_gid=jCM9C3402GD-Q9m9_5VIGQ&oh=00_AYFqGY9x-AHjFciSIH5NVw0TzDOPyQGp06-pK6VQD_qyXA&oe=67EF102D',
                                designation: 'Web Developer',
                                date: '12-12-2025',
                                checkInTime: '6:10 AM',
                                checkOutTime: '5:10 PM'
                            },
                            { 
                                name: 'Vang Kheang',
                                image: 'https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/318346617_1299951467457123_320425686641260075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFmAq5cn22oT4pEsHM5elNbESENWfewphwRIQ1Z97CmHOGFzsyZP8AgSPEQWrCi2_hVuLgdU0a95jFYR59BLDFe&_nc_ohc=-kw2AfBrK30Q7kNvgGK_3FK&_nc_oc=AdmIxh14JXS9l7QoCYTD0Z9amF9jN8JgV99E6VwdrGeAxI5i2BPHBll9QUeb7F27zdE&_nc_zt=23&_nc_ht=scontent.fpnh20-1.fna&_nc_gid=jCM9C3402GD-Q9m9_5VIGQ&oh=00_AYFqGY9x-AHjFciSIH5NVw0TzDOPyQGp06-pK6VQD_qyXA&oe=67EF102D',
                                designation: 'Web Developer',
                                date: '12-12-2025',
                                checkInTime: '6:10 AM',
                                checkOutTime: '5:10 PM'
                            },
                            { 
                                name: 'Vang Kheang',
                                image: 'https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/318346617_1299951467457123_320425686641260075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFmAq5cn22oT4pEsHM5elNbESENWfewphwRIQ1Z97CmHOGFzsyZP8AgSPEQWrCi2_hVuLgdU0a95jFYR59BLDFe&_nc_ohc=-kw2AfBrK30Q7kNvgGK_3FK&_nc_oc=AdmIxh14JXS9l7QoCYTD0Z9amF9jN8JgV99E6VwdrGeAxI5i2BPHBll9QUeb7F27zdE&_nc_zt=23&_nc_ht=scontent.fpnh20-1.fna&_nc_gid=jCM9C3402GD-Q9m9_5VIGQ&oh=00_AYFqGY9x-AHjFciSIH5NVw0TzDOPyQGp06-pK6VQD_qyXA&oe=67EF102D',
                                designation: 'Web Developer',
                                date: '12-12-2025',
                                checkInTime: '6:10 AM',
                                checkOutTime: '5:10 PM'
                            },
                            { 
                                name: 'Vang Kheang',
                                image: 'https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/318346617_1299951467457123_320425686641260075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFmAq5cn22oT4pEsHM5elNbESENWfewphwRIQ1Z97CmHOGFzsyZP8AgSPEQWrCi2_hVuLgdU0a95jFYR59BLDFe&_nc_ohc=-kw2AfBrK30Q7kNvgGK_3FK&_nc_oc=AdmIxh14JXS9l7QoCYTD0Z9amF9jN8JgV99E6VwdrGeAxI5i2BPHBll9QUeb7F27zdE&_nc_zt=23&_nc_ht=scontent.fpnh20-1.fna&_nc_gid=jCM9C3402GD-Q9m9_5VIGQ&oh=00_AYFqGY9x-AHjFciSIH5NVw0TzDOPyQGp06-pK6VQD_qyXA&oe=67EF102D',
                                designation: 'Web Developer',
                                date: '12-12-2025',
                                checkInTime: '6:10 AM',
                                checkOutTime: '5:10 PM'
                            },
                            { 
                                name: 'Vang Kheang',
                                image: 'https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/318346617_1299951467457123_320425686641260075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFmAq5cn22oT4pEsHM5elNbESENWfewphwRIQ1Z97CmHOGFzsyZP8AgSPEQWrCi2_hVuLgdU0a95jFYR59BLDFe&_nc_ohc=-kw2AfBrK30Q7kNvgGK_3FK&_nc_oc=AdmIxh14JXS9l7QoCYTD0Z9amF9jN8JgV99E6VwdrGeAxI5i2BPHBll9QUeb7F27zdE&_nc_zt=23&_nc_ht=scontent.fpnh20-1.fna&_nc_gid=jCM9C3402GD-Q9m9_5VIGQ&oh=00_AYFqGY9x-AHjFciSIH5NVw0TzDOPyQGp06-pK6VQD_qyXA&oe=67EF102D',
                                designation: 'Web Developer',
                                date: '12-12-2025',
                                checkInTime: '6:10 AM',
                                checkOutTime: '5:10 PM'
                            },
                        ],
        }
    },
    methods: {
        tableBackgroundColor(index) {
            if ((index + 1) % 2 == 0) {
                return 'background-color: white';
            }
            else {
                return 'background-color: #DDEEF6';
            }
        }
    }
}
</script>

<style>
    .attendance-wrapper {
        font-family: "Poppins", sans-serif;
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr)); /* Ensures columns never shrink unevenly */
        gap: 2rem;
        padding: 2rem .5rem;
    }
    .attendance-wrapper .attendance-item {
        grid-column: span 12;
    }
    .attendance-profile {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2.5rem;
        max-width: 100%;
        overflow-y: auto;
        padding: 10px;
    }
    .attendance-profile .profile-wrapper {
        background-color: white;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        border-radius: 28px;
        padding: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        min-width: 20%;
    }
    .profile-wrapper .image-block {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .image-block img {
        width: 90%;
        max-width: 90px;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: #D9D9D9;
    }
    .name-block .username {
        font-size: 24px;
        color: #0092E1;
    }
    .name-block .position {
        font-size: 15px;
        color: #666666;
    }
    .footer-block {
        width: 100%;
    }
    .footer-block > button {
        border-radius: 15px;
        border: 1px solid #0092E1;
        color: #0092E1;
        padding: 8px;
        width: 100%;
        background-color: white;
    }
    .attendance-table {
        padding: 2rem;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        border-radius: 28px;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .attendance-table > .table-header, .attendance-table > .table-body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
    .table-header > div {
        width: 15%;
        color: #0092E1;
        font-size: 18px;
    }
    .table-header .employees-header {
        width: 25%;   
    }
    .table-body {
        background-color: #DDEEF6;
        padding: 10px;
    }
    .table-body > div {
        width: 15%;
        color: #666666;
        font-size: 14px;
    }
    .table-body .employees-column {
        width: 25%;
        text-align: left;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }
    .employees-column > .image {
        width: 100%;
        max-width: 50px;
        aspect-ratio: 1;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .employees-column > .image img {
        width: 100%;
    }
    .table-body .details-column button {
        padding: 3px 18px;
        border-radius: 15px;
        border: 1px solid #0092E1;
        color: #0092E1;
        background-color: white;
    }
    .table-body .check-in-column,
    .table-body .checkout-column {
        font-size: 24px;
    }
    .attendance-item .attendance-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .attendance-header .title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }
    .attendance-header .title span {
        font-size: 18px;
        color: #8A8A8A;
    } 
    .attendance-header .title h1 {
        font-weight: normal;
        font-size: 24px;
        color: #0092E1;
    }
    .attendance-item .date-picker {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .attendance-item .date-picker label {
        color: #0092E1;
    }
    .attendance-item .date-picker input[type="date"] { 
        padding: 3px 15px;
        font-size: 18px;
        border-radius: 15px;
        border: none;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        color: #8A8A8A;
    }
    button {
        cursor: pointer;
        transition: 0.3s all ease-in-out;
    }
    button:hover {
        transform: scale(1.1);
        color: white !important;
        background-color: #0092E1 !important;
    }
</style>