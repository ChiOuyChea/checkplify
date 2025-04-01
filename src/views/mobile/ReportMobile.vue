<template>
  <div class="container">
      <div id="container-header">
          <router-link to="/mobile/" class="action-wrapper">
              <img src="@/assets/back-arrow.png" alt="" class="back-btn">
          </router-link>
          <div class="title">
              Report
          </div>
      </div>
      <div id="report-content">
        <div class="date-picker-block">
          <label for="dateSelection">
            date:
          </label>
          <input type="date" name="dateSelection" id="dateSelection">
        </div>
        <div class="report-table">
          <div class="table-header">
            <div class="date">Date</div>
            <div>Checked-in Time</div>
            <div>Checked-out Time</div>
            <div>Status</div>
          </div>
          <div v-for="(item, index) in tableItems" :key="index" class="table-content" :style="tableBackgroundColor(index)">
            <div class="date">{{ item.date }}</div>
            <div>{{ item.checkInTime }}</div>
            <div>{{ item.checkOutTime }}</div>
            <div>{{ item.status }}</div>
          </div>
        </div>
      </div>
      
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableItems: [
                      { 
                          date: '12-12-2025',
                          checkInTime: '6:10 AM',
                          checkOutTime: '5:10 PM',
                          status: 'Good'
                      },
                      { 
                          date: '12-12-2025',
                          checkInTime: '6:10 AM',
                          checkOutTime: '5:10 PM',
                          status: 'Good'
                      },
                      { 
                          date: '12-12-2025',
                          checkInTime: '6:10 AM',
                          checkOutTime: '5:10 PM',
                          status: 'Good'
                      },
                      { 
                          date: '12-12-2025',
                          checkInTime: '6:10 AM',
                          checkOutTime: '5:10 PM',
                          status: 'Good'
                      },
                      { 
                          date: '12-12-2025',
                          checkInTime: '6:10 AM',
                          checkOutTime: '5:10 PM',
                          status: 'Good'
                      },
                      { 
                          date: '12-12-2025',
                          checkInTime: '6:10 AM',
                          checkOutTime: '5:10 PM',
                          status: 'Good'
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

<style scoped>
  .container {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      font-family: "Poppins", sans-serif;
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
  #report-content {
      padding: 15px 5px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
  }
  #report-content .date-picker-block {
    margin-left: auto;
    color: #0092E1;
    font-size: 16px;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  #report-content .date-picker-block > input {
    padding: 8px 15px;
    border-radius: 15px;
    border: none;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    font-family: inherit;
  }
  #report-content .report-table {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    border-radius: 25px;
    padding: 20px 12px 60px 12px;
  }
  #report-content .table-header, #report-content .table-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
  } 
  #report-content .table-header > div, #report-content .table-content > div {
    width: 20%;
  }
  /* #report-content .report-table .date {
    width: 20%;
  } */
  #report-content .table-header {
    color: #0092E1;
  }
  #report-content .table-content {
    color: #666666;
  }
  #report-content .table-header, #report-content .table-content {
    padding: 15px 5px;
  }
</style>