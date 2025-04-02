<template>
  <div class="Report-wrapper">
    <div class="check-Table">
      <div class="table-col">
        <div class="txtBox">
          <span class="txtBox-header">ID</span>
          <input type="text" class="txtBox-body">
        </div>
        <div class="txtBox">
          <span class="txtBox-header">Position</span>
          <input type="text" class="txtBox-body">
        </div>
        <div class="txtBox">
          <span class="txtBox-header">Time</span>
          <input type="text" class="txtBox-body">
        </div>
        <div class="txtBox">
          <span class="txtBox-header">Phone Number</span>
          <input type="text" class="txtBox-body">
        </div>
        <div class="txtBox">
          <span class="txtBox-header">Professor Name</span>
          <input type="text" class="txtBox-body">
        </div>
        <div class="txtBox">
          <span class="txtBox-header">OverTime</span>
          <input type="text" class="txtBox-body">
        </div>
      </div>
    </div>

    <div class="table-container">
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Date</th>
          <th>Time</th>
          <th>Hours</th>
          <th>Overtime</th>
          <th>Extra Time</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="txtTotal-container">
      <h1>Total</h1>
      <div class="receipt-container">
        <label for="">Working hours without overtime</label>
        <div class="total-header">
          <label>Total</label>
          <span>12.9</span>
        </div>
        <hr>
        <br>
        <div class="total-body">
          <label>Total</label>
          <span>12.9</span>
        </div>
        <div class="total-body">
          <label>Total</label>
          <span>12.9</span>
        </div>
        <br>
        <hr>
        <div class="total-bottom">
          <label>Total</label>
          <span>12.9</span>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
</script>

<style>

.Report-wrapper {
  padding: 0 20px;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.table-col{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;
  width: 100%;
}

.table-col .txtBox{
  width: 100%;
  max-width: 250px;
}

.check-Table {
    background-color: #D9D9D9;
    display: inline-block;
    padding: 8px;
    width: 100%;
    max-width: 1440px;
}

.txtBox{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
}


.txtBox-header{
  background-color: white;
  width: 100%;
  max-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  border-radius: 3px;
  color: #0092E1;
}

.txtBox-body{
  width: 250px;
  border: none;
  height: 35px;
  border-radius: 3px;
}

.table-container{
  background-color: #FFFFFF;
  box-shadow: 4px 4px 4px 0 rgb(0, 0, 0,0.25);
  border-radius: 20px;
  padding: 12px;
  width: 100%;
  max-width: 1440px;
}

table {
  width: 100%;
  max-width: 1440px;
  border-collapse: collapse;
  border: none;
}


th, td {
  border-bottom: 2px solid black; /* Horizontal line */
  border-right: 2px solid black;
  padding: 8px;
  text-align: center;
  height: 35px;
}

th:last-child, td:last-child {
  border-right: none;
}

tr:last-child td {
  border-bottom: none;
}

.receipt-container{
  margin-top: 16px;
  width: 100%;
  max-width: 308px;
  height: 290px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 4px 4px 0 rgb(0, 0, 0,0.25);
  font-size: 18px;
}

.total-header {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.total-bottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
}

@media (max-width: 950px){
  .table-col{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;

  }

}
</style>