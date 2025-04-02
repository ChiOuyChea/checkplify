<template>
  <div class="Account-wrapper">
    <div class="title" style="color: #0092E1">
      <h1>Account Information</h1>
    </div>
    <div class="form-container">
        <div class="txt-container">
          <div class="txt-row">
            <label for="">First Name</label>
            <input type="text" id="" v-model="firstName" placeholder="Enter your first name">
          </div>
          <div class="txt-row">
            <label for="">Last Name</label>
            <input type="text" id="" v-model="lastName" placeholder="Enter your last name">
          </div>
          <div class="txt-row">
            <label for="">Email</label>
            <div class="txt-verify">
              <input type="email" id="" v-model="email" placeholder="user@example.com" class="txtInput">
              <label for="" class="verify">Not verified</label>
            </div>

          </div>
          <div class="txt-row">
            <label for="">Phone Number</label>
            <div class="txt-verify">
            <input type="text" id="" v-model="phoneNumber" placeholder="Phone Number" class="txtInput">
            <label for="" class="verify">Not verified</label>
            </div>
          </div>
          <div class="txt-row">
            <label for="">Date of birth</label>
            <input type="date" id="" v-model="dob">
          </div>

        </div>
      <br>
      <div class="txt-row">
        <label for="">Bio</label>
        <textarea name="" id="" v-model="bio" placeholder="Write your bio"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dob: "",
      bio: "",
      editMode: false,
    };
  },

};
</script>

<style>
    .Account-wrapper {
      font-family: "Poppins", sans-serif;
      gap: 2rem;
      padding: 2rem;
    }

    .form-container{
      margin-top: 2rem;
      width: 100%;
      max-width: 1298px;
      background-color:rgb(0, 146, 225,0.1);
      padding: 2rem 3.2rem;
      border-radius: 12px;
      color: #0092E1;
    }

    .txt-container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .txt-row {
      display: flex;
      flex-direction: column;
    }

    .txt-row input{
      height:45px;
      padding:1.3rem;
      outline:none;
      border: solid 1px rgb(0, 146, 225);
      border-radius: 6px;
      font-size: 16px;
      width: 100%;
      max-width: 573px;
    }

    .txt-row textarea{
      width: 100%;
      max-width: 1186px;
      height: 179px;
      border-radius: 12px;
      padding:1.3rem;
      font-size: 16px;
      outline: none;
      border: solid 1px rgb(0, 146, 225);
    }

    .txt-verify{
      display: inline-block;
      position: relative;
    }

    .txt-verify .txtInput{
      padding-right:7rem;
    }

    .verify{
      position: absolute;
      right: 35px;
      top: 50%;
      transform: translateY(-50%);
    }
    @media (max-width: 1600px) {
      .txt-row input{
        height:45px;
        width: 100%;
        max-width: 473px;
      }

      .verify{
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    @media (max-width: 1400px){
      .verify{
        position: absolute;
        right: 30px;
        top: 50%;
      }
    }

    @media (max-width: 1200px){
      .verify{
        font-size: 14px;
      }
    }

    @media (max-width: 750px){
      .txt-row input{
        font-size: 15px;
      }
    }
</style>