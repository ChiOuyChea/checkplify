<template lang="">
    <form>
   <div class="SignIn-Form">
       <div class="SignIn-Page">
        <div class="lbBack">
            <router-link to="/login">Back</router-link>
        </div>
        <div class="title">
            Sign in
        </div>
        <br>
        <div class="txt-Container">
            <div class="txt-info">
                <label style="font-weight:bold;color:#0092E1;margin-left:8px;font-size:20px">Email</label> 
                <input type="text" placeholder="Enter your email">
                <label style="font-weight:bold;color:#0092E1;margin-left:8px;font-size:20px">Password</label> 
                <input type="password" placeholder="Enter your password">
                <label style="font-weight:bold;color:#0092E1;margin-left:8px;font-size:20px">Confirm Password</label> 
                <input type="password" placeholder="Confirm Password">
                <label style="font-weight:bold;color:#0092E1;margin-left:8px;font-size:20px">Phone</label> 
                <input type="text" placeholder="Phone Number" v-model="numberInput" @input="numOnly" >
        </div>
        
        <div class="btn-log">
            <button>Create account</button>
        </div>
        

        </div>
        
       </div>
       
   </div>

</form>

</template>

<script>
export default {
    mounted() {
        // document.body.style.backgroundColor = "green"
        document.body.style.backgroundColor = "white"
    },
    data() {
        return {
            numberInput: ""
        }
    },
    methods: {
        numOnly() {
            this.numberInput = this.numberInput.replace(/[^0-9]/g, '');
        }
    }
};

</script>

<style scoped>
form {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1200px;
    height: 800px;
    background-color: #D9D9D9;
    box-shadow: 1px 1px 6px 0px hsla(0, 0%, 0%, 0.295);

}

form .SignIn-Form {
    width: 50%;
    height: 800px;
    background-color: white;
}

.lbBack {
    position:absolute;
    color: black;
    margin-top: -70px;
    margin-left: -30px;
    font-size: 20px;
    
}

.lbBack a{
    text-decoration: none;
    color: #0092E1;
}

.SignIn-Page{
    padding: 112px 74px;
}

.title {
    color: #0092E1;
    text-align: left;
    font-size: 45px;
    font-family: "Instrument Sans", sans-serif;
    font-weight: bold;
}


.txt-Container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 20px 36px;
}

.txt-info {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.2rem;
}

.txt-info input{
    margin-top: -15px;
}

.txt-info input[type="text"] {
    padding: 2px 36px;
    box-sizing: border-box;
    font-size: 18px;
    border: 1px solid #0092E1;
    /* box-shadow: 1px 1px 6px 0px hsla(0, 0%, 0%, 0.295); */
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
    height: 45px;
}

.txt-info input:focus {
    outline: none;
}

.txt-info input::placeholder {
    font-family: "Gurajada", sans-serif;
    font-size: 28px;
    color: rgba(0, 0, 0, 0.253);
}



.txt-info input[type="password"] {
    padding: 2px 36px;
    box-sizing: border-box;
    font-size: 18px;
    border: 1px solid #0092E1;
    /* box-shadow: 1px 1px 6px 0px hsla(0, 0%, 0%, 0.295); */
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
    height: 45px;
}



.forget-password {
    text-align: left;
    margin-left: 5px;
    margin-top: -20px;
}

.forget-password a {
    text-decoration: none;
    font-family: "Gurajada", sans-serif;
    font-size: 24px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.541);
}

.forget-password a:hover {
    color: #0092E1;
}

.btn-log {
    display: flex;
    align-items: start;

}

.btn-log button {
    color: white;
    background-color: #0092E1;
    border: none;
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
    height: 45px;
    font-size: 18px;
    transition: transform 0.6s ease, box-shadow 0.3s ease, background-color 0.6s ease;
    cursor: pointer;
}

.btn-log button:hover {
    background-color: darkblue;
    transform: scale(1.05);
    /* Expands the button */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    /* Adds a shadow effect */
}

.create-account {
    display: flex;
    align-items: center;
    text-align: left;
    margin-left: 5px;
    margin-top: -20px;
    gap: 0.5rem;
    font-family: "Gurajada", sans-serif;
    font-size: 24px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.541);
}

.create-account a {
    font-family: "Instrument Sans", sans-serif;
    color: #0092E1;
    text-decoration: none;
    font-size: 16px
}

.create-account a:hover {
    text-decoration: underline;
}
</style>
