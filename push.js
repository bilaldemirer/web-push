var push = require('web-push');


let vapidKeys =  {
    publicKey: 'BGR1zcq3kd8lWO4HkrH5aAYsCV50K191i6BMv0SMmoE5-gHS145rPYcnIC0ee05KBd0RJppiQGM1ZdCOMSZMqaE',
    privateKey: 'Z1yJ9kIZPF5zc1PIJmJtPzdLM_5URREyJe3xNEaVcYU'
  };

push.setVapidDetails('mailto:bdemirer70@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')