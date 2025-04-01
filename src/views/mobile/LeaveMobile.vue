<template>
    <div class="container">
        <div id="container-header">
            <router-link to="/mobile/" class="action-wrapper">
                <img src="@/assets/back-arrow.png" alt="" class="back-btn">
            </router-link>
            <div class="title">
                Request Leave
            </div>
        </div>
        <form id="leave-content">
            <div class="item-wrapper">
                <label for="title">Title:</label>
                <input type="text" id="title">
            </div>
            <div class="item-wrapper">
                <label for="duration">Duration:</label>
                <input type="text" id="duration">
            </div>
            <div class="item-wrapper">
                <label for="reason">Reason:</label>
                <textarea id="reason"></textarea>
            </div>
            <div class="item-wrapper">
                <input type="submit" value="Submit">
            </div>
        </form>
    </div>
</template>

<script>
export default {

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
    #leave-content {
        padding: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
    }
    #leave-content .item-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
    }
    #leave-content .item-wrapper input, #leave-content .item-wrapper textarea {
        width: 100%;
        padding: 10px 15px;
        border: none;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        border-radius: 5px;
        font-size: 16px;
        font-family: inherit;
    }
    #leave-content .item-wrapper input:focus, #leave-content .item-wrapper textarea:focus { 
        outline: none;
    }
    #leave-content .item-wrapper textarea {
        min-height: 200px;
        max-width: 100%;
    }
    #leave-content .item-wrapper input[type="submit"] {
        width: auto;
        border-radius: 10px;
        background-color: #0092E1;
        color: white;
        margin-left: auto;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
    #leave-content .item-wrapper input[type="submit"]:hover {
        transform: scale(1.1);
    }
</style>