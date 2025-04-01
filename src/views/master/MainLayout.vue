<template lang="">

    <div class="main-container">
        <div class="left-container">       
            <div class="logo-container">
                <img src="@/assets/logo.png" class="logo" style="width:50px;">
            <label style="font-size:42px;">Checkplify</label>
            </div>
            <div class="Left-menu-container">
                <div class="db-container">
                    <router-link to="/dashboard">DashBoard</router-link>
                </div>
                <div class="rp-container">
                    <router-link to="/report">Report</router-link>
                </div>
                <div class="att-container">
                    <router-link to="/attendance">Attendance</router-link>
                </div>
                <div class="st-container" @mouseenter="SetdropdownVisible = true" @mouseleave="SetdropdownVisible = false" >
                    <label >Setting</label>
                    <transition name="fade">
                        <div class="set-dropdown" v-show="SetdropdownVisible">
                            <ul>
                                <li><router-link to="/AccountInformation">Account Information</router-link></li>
                                <li><router-link>Change Password</router-link></li>
                                <li><router-link>Notification</router-link></li>
                                <li><router-link>Personalization</router-link></li>
                                <li><router-link>Security and Privacy</router-link></li>
                            </ul>
                        </div>
                    </transition>
                </div>
            </div>
        </div>

        <div id="right-container">
            <div class="right-container">
                <div class="search-container">
                    <div class="txt-search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search">
                    </div>
                </div>
                <div class="profile-container" @click="toggleDropdown">
                    <i class="fa-solid fa-user"></i>    
                    <div class="profile-dropdown" >
                        <router-link to="" >My Profile
                            <i class="fa-solid fa-angle-down" :class="{'rotate': ProfiledropdownVisible, 'rotate-back': !ProfiledropdownVisible}" style="background-color:white;font-size:30px;"></i>
                        </router-link>
                        <transition name="fade">
                            <div class="dropdown" v-show="ProfiledropdownVisible">
                                <ul>
                                    <li>
                                        <router-link to="/edit-profile">Edit Profile</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/login">Log out</router-link>
                                    </li>
                                </ul>    
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="link-container">
                <router-view></router-view>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            ProfiledropdownVisible: false,
            SetdropdownVisible: false
        };
    },
    methods: {
        toggleDropdown() {
            this.ProfiledropdownVisible = !this.ProfiledropdownVisible;
        },
        toggleSetdrop(){
          this.SetdropdownVisible = !this.SetdropdownVisible;
        }
    }
};
</script>
<style>
.logo-container {
    display: flex;
    align-items: center;
    margin-top: 36px;
    gap: 1rem;
}


.main-container {
    display: flex;
}

.left-container{
    width: 100%;
    max-width: 350px;
}

.main-container .left-container {
    background-color: #0092E1;
    color: white;
    /* height: 100%; */
    min-height: 100vh;
    padding: 20px;
}

.logo-container > label {
    font-family: 'Poppins', sans-serif;
}

.main-container .right-container {
    background-color: white;
    width: 100%;
  display: flex;
    /* height: 100%; */
}

.Left-menu-container {
    padding: 20px 40px;
    margin-top: 50px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;

}

.icon {
    width: 30px;
}

.st-container{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.st-container:hover .set-dropdown {
  display: block;
  transition: all ease 0.3s;
}


.st-container .set-dropdown ul{
  margin-top: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}

.st-container .set-dropdown ul li{

}

.st-container .set-dropdown ul li a{
  background-image:none;
  background-color:white;
  color:#0092E1 ;
  font-size: 14px;
  width: 220px;
  border-radius: 8px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

}

.st-container .set-dropdown ul li a:hover{
    background-image:none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.st-container label{
    color: white;
    font-size: 24px;
    font-family: "Poppins", sans-serif;
    transition: background-color 0.7s ease, transform 0.6s ease-in-out;
    background-size: 30px;
    display: flex;
    align-items: center;
    padding: 2px 50px;
    background-position: 10px;
}

.st-container label:hover{
  background-color: white;
  color: #0092E1;
  transform: scale(1.2);
  width: 250px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 50px;
  background-position: 10px;
}

.st-container .set-dropdown ul li a:hover{
  background-color: #f0f0f0;
}

.Left-menu-container a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    font-family: "Poppins", sans-serif;
    transition: background-color 0.7s ease, transform 0.6s ease-in-out;
    background-size: 30px;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 2px 50px;
    background-position: 10px;

}

.Left-menu-container a:hover {
    background-color: white;
    color: #0092E1;
    transform: scale(1.2);
    border-radius: 4px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 50px;
    background-position: 10px;

}

.Left-menu-container .db-container a {
    background-image: url('@/assets/dashboard.png');
    background-repeat: no-repeat;
    display: inline-block;
    width: 230px;
}

.Left-menu-container .db-container a:hover {
    background-image: url('@/assets/dbBlue.png');
    background-repeat: no-repeat;
}

.Left-menu-container .rp-container a {
    background-image: url('@/assets/rp.png');
    background-repeat: no-repeat;
    width: 230px;
}

.Left-menu-container .rp-container a:hover {
    background-image: url('@/assets/rpBlue.png');
    background-repeat: no-repeat;
    display: inline-block;
}

.Left-menu-container .att-container a {
    background-image: url('@/assets/att.png');
    background-repeat: no-repeat;
    width: 230px;
}

.Left-menu-container .att-container a:hover {
    background-image: url('@/assets/attBlue.png');
    background-repeat: no-repeat;
    display: inline-block;
}

.Left-menu-container .st-container label {
    background-image: url('@/assets/set.png');
    background-repeat: no-repeat;
    width: 230px;
}

.Left-menu-container .st-container label:hover {
    background-image: url('@/assets/setBlue.png');
    background-repeat: no-repeat;
    display: inline-block;
}

#right-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding: 36px 26px;   
}


.right-container, .link-container {
    width: 100%;
    /* height: 100vh; */
    /* padding: 36px 26px; */

}

.right-container .profile-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    margin-left: auto;

}

.profile-container{
    display: flex;
    gap: 1rem;
   
}

.right-container a {
    color: black;
    background-color: transparent;
    text-decoration: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
}

.profile-container i {
    border-radius: 50%;
    background-color: #CBCBCB;
    padding: 15px;
    font-size: 20px;
    margin-left: auto;
}

.profile-dropdown{
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
}




.profile-dropdown ul{
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;

}

.profile-dropdown ul li{
    position: relative;
    background-color: #F4F6FA;  
    top: 15px;
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    
}

.profile-dropdown ul li a{
    font-size: 18px;
}

.profile-dropdown ul li a:hover{
    color: #0092E1;
}

.search-container .txt-search {
    display: flex;
    align-items: flex-start;
    position: relative;
}

.txt-search i {
    position: absolute;
    font-size: 20px;
    left: 20px;
    top: 15px;
}

.txt-search input {
    border: none;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.151);
    background-color: #4e4e4e0c;
    width: 450px;
    font-size: 16px;
    border-radius: 6px;
    padding: 16px 50px;
}

.txt-search input:focus {
    outline: none;
}

.rotate {
  transform: rotate(180deg);
  transition: transform 0.2s ease-in-out;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


.rotate-back {
  transform: rotate(0deg);
  transition: transform 0.2s ease-in-out;
}



/* .link-container {
    width: 100%;
    height: 100%;
} */
</style>