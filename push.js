var push = require('web-push');


let vapidKeys =  {
    publicKey: 'BGR1zcq3kd8lWO4HkrH5aAYsCV50K191i6BMv0SMmoE5-gHS145rPYcnIC0ee05KBd0RJppiQGM1ZdCOMSZMqaE',
    privateKey: 'Z1yJ9kIZPF5zc1PIJmJtPzdLM_5URREyJe3xNEaVcYU'
  };

push.setVapidDetails('mailto:bdemirer70@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/dwWAt5zOEyY:APA91bENB_r5kMOa4CcLFS0jnhnSPCLMRC2nsq3BqeabjP18XNPUKGrxcTted7AZfQ6rblFyQWfv-9uNSCuOe_nxSJ6d7YKUDmMzvTjVOwLOnqAt5aoHh96xu9erUZtr6ctuZcyvrylQ",
    "expirationTime":null,
    "keys":{"p256dh":"BDazjmscq8xw4FPAdOgzptflK5QyGkItqnXQQrn8TrOHQCtoR6Kjo-8eqwFovXBRh_2fzmqpzTTZoM9E7Si9fuc",
    "auth":"7oOujWqxTaWtI4U2r0dHlg"}};

push.sendNotification(sub, 'test message')