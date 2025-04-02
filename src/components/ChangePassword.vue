<script setup>

</script>

<template>
  <div class="Account-wrapper">
    <div class="title" style="color: #0092E1">
      <h1>Change Password</h1>
    </div>
    <div class="form-container">
      <div class="txt-container">
        <div class="txt-row">
          <label for="">Old Password</label>
          <input type="text" id="" v-model="oldPass" placeholder="Old password">
        </div>
        <div class="txt-row">
          <label for="">New Password</label>
          <input type="text" id="" v-model="newPass" placeholder="New password">
        </div>
        <div class="txt-row">
          <label for="">Confirm Password</label>
          <input type="text" id="" v-model="confirmPass" placeholder="Confirm Password">
        </div>
        <div class="btn-save">
            <button>Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .Account-wrapper {
    padding: 2rem;
  }

.form-container{
  margin-top: 2rem;
  width: 100%;
  max-width: 1000px;
  background-color:rgb(0, 146, 225,0.1);
  padding: 1rem 3.2rem;
  border-radius: 12px;
  color: #0092E1;
  height: 540px;
}

    .txt-row{
      margin-top: 1.2rem;
      gap: 0.7rem;
    }

    .txt-row input{
      width: 100%;
      max-width: 1000px;
    }

    .txt-container {
      display: flex;
      flex-direction: column;
    }

    .btn-save button{
      background: white;
      color:#0092E1;
      border:solid 1px #0092E1;
      width: 100%;
      max-width: 125px;
      height: 37px;
      border-radius: 16px;
      font-size: 18px;
      transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
      cursor: pointer;
    }

    .btn-save{
        margin-top: 2rem;
        display: flex;
        align-items: center;
      justify-content: flex-end;
    }
  .btn-save button:hover{
    background: #0092E1;
    color: white;
    transform: scale(1.05);
  }
</style>