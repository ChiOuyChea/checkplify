<template lang="">
        <form>
       <div class="logIn-Form">
           <div class="logIn-Page">
            <div class="title">
                Hello!<br>Welcome to SU1
            </div>
            <div class="logIn-text">
                Log In
            </div>
            <br><br>
            <div class="txt-Container">
                <div class="email">
                    <label style="font-weight:bold;color:#0092E1;margin-left:8px;font-size:20px">Email</label> 
                    <input type="text" placeholder="Enter your email">
                </div>

                <div class="password">
                    <label style="font-weight:bold;color:#0092E1;margin-left:8px;font-size:20px">Password</label> 
                    <input type="password" placeholder="Enter your password">
                </div>
                <div class="forget-password" style="">
                <a href="">Forget password?</a>
            </div>
            <div class="btn-log">
                <button>Login</button>
            </div>
            <div class="create-account" style="">
                <label>no have account?</label>
                <router-link to="/signin">Create Account</router-link>
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

        }
    },
}
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
    font-family: "Poppins", sans-serif;
}

form .logIn-Form {
    width: 50%;
    height: 800px;
    background-color: white;
  
}

form .logIn-Page {
    padding: 72px 54px;
}

.title {
    color: #0092E1;
    text-align: left;
    font-size: 40px;
    font-family: "Instrument Sans", sans-serif;
    font-weight: bold;
}

.logIn-text {
    font-size: 58px;
    font-family: "Instrument Sans", sans-serif;
    font-weight: bold;
    text-align: left;
    color: #008EC2;
    margin-top: 40px;
}

.txt-Container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 20px 36px;
}

.email {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
}

.email input[type="text"] {
    padding: 2px 36px;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid #0092E1;
    /* box-shadow: 1px 1px 6px 0px hsla(0, 0%, 0%, 0.295); */
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
    height: 45px;
}

.email input:focus {
    outline: none;
}

.email input::placeholder {
    font-family: "Gurajada", sans-serif;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.253);
}

.password {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
}

.password input[type="password"] {
    padding: 2px 36px;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid #0092E1;
    /* box-shadow: 1px 1px 6px 0px hsla(0, 0%, 0%, 0.295); */
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
    height: 45px;
}

.password input:focus {
    outline: none;
}

.password input::placeholder {
    font-family: "Gurajada", sans-serif;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.253);
}

.forget-password {
    text-align: left;
    margin-left: 5px;
    margin-top: -20px;
}

.forget-password a {
    text-decoration: none;
    font-family: "Gurajada", sans-serif;
    font-size: 20px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.541);
}

.forget-password a:hover {
    color: #0092E1;
}

.btn-log {
    display: flex;
    align-items: start;
    margin-top: -23px;
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
    transition: transform 0.6s ease-in-out, box-shadow 0.3s ease-in-out,background-color 0.6s ease-in;
    cursor: pointer;
}

.btn-log button:hover{
    background-color: darkblue;
    transform: scale(1.05); /* Expands the button */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Adds a shadow effect */
}

.create-account {
    display: flex;
    align-items: center;
    text-align: left;
    margin-left: 5px;
    margin-top: -20px;
    gap: 0.5rem;
    font-family: "Gurajada", sans-serif;
    font-size: 22px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.541);
}

.create-account a{
    font-family: "Instrument Sans",sans-serif;
    color:#0092E1 ;
    text-decoration: none;
    font-size: 14px;
    
}

.create-account a:hover{
    text-decoration: underline;
    
}

</style>
