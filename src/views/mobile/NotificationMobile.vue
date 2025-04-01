<template>
    <div class="container">
        <div id="container-header">
            <router-link to="/mobile/" class="action-wrapper">
                <img src="@/assets/back-arrow.png" alt="" class="back-btn">
            </router-link>
            <div class="title">
                Notification
            </div>
        </div>
        <div id="notification-content">
            <div v-for="(notification, parentIndex) in notificationItems" :key="parentIndex" class="notification-wrapper">
                <div class="notification-date">
                    {{ notification.date }}
                </div>
                <div v-for="(item, index) in notification.notification" :key="index" class="notification-item" :class="{'read' : item.read}">
                    <div class="image-block">
                        <img src="@/assets/bell.png" alt="">
                    </div>
                    <div class="content">
                        <p>
                            {{ item.content }}
                        </p>
                        <span class="duration">
                            {{ item.duration }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          notificationItems: [
                        { 
                            date: 'Today',
                            notification: [
                                {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis placeat ducimus fugiat veniam, aperiam fuga exercitationem',
                                    duration: '1 hour ago',
                                    read: false,
                                },
                                {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis placeat ducimus fugiat veniam, aperiam fuga exercitationem',
                                    duration: '1 hour ago',
                                    read: false,
                                },
                                {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis placeat ducimus fugiat veniam, aperiam fuga exercitationem',
                                    duration: '1 hour ago',
                                    read: false,
                                },
                                {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis placeat ducimus fugiat veniam, aperiam fuga exercitationem',
                                    duration: '1 hour ago',
                                    read: false,
                                },
                                {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis placeat ducimus fugiat veniam, aperiam fuga exercitationem',
                                    duration: '1 hour ago',
                                    read: false,
                                },
                            ]
                        },
                        { 
                            date: '12-12-2025',
                            notification: [
                                {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis placeat ducimus fugiat veniam, aperiam fuga exercitationem',
                                    duration: '1 hour ago',
                                    read: true,
                                },
                                {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis placeat ducimus fugiat veniam, aperiam fuga exercitationem',
                                    duration: '1 hour ago',
                                    read: true,
                                },
                                {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis placeat ducimus fugiat veniam, aperiam fuga exercitationem',
                                    duration: '1 hour ago',
                                    read: true,
                                },
                                {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis placeat ducimus fugiat veniam, aperiam fuga exercitationem',
                                    duration: '1 hour ago',
                                    read: true,
                                },
                                {
                                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis placeat ducimus fugiat veniam, aperiam fuga exercitationem',
                                    duration: '1 hour ago',
                                    read: true,
                                },
                            ]
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
        position: sticky;
        top: 0;
    }
    #container-header .action-wrapper img {
        width: 50%;
        max-width: 30px;
    }
    #container-header .title {
        margin: 0 auto;
        font-weight: 600;
    }
    #notification-content {
        padding: 15px 5px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
        color: #666666;
        font-size: 12px;
    }
    .notification-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        /* gap: 1rem; */
    }
    .notification-wrapper .notification-date {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    .notification-wrapper .notification-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* padding: 15px; */
        background-color: #DDEEF6;
    }
    .notification-wrapper .notification-item.read {
        background-color: white;
    }
    .notification-wrapper .notification-item > .image-block {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }
    .notification-wrapper .notification-item > .image-block > img { 
        width: 25px;
    }
    .notification-wrapper .notification-item .content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        padding: 15px;
    }
    .notification-wrapper .notification-item p {
        text-align: left;
        padding: 0;
    }
    .notification-wrapper .notification-item .duration { 
        font-size: 8px;
        display: block;
    }
  </style>