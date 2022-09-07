const { TravelWebsiteBus, TravelWebsiteTrain } = require('./TravelWebsite');

const user1 = new TravelWebsiteBus('akshaymane','Mumbai','Pune','Luxury');
user1.on('Standard',(details)=>{
    console.log(`Hello ${details.User}, Standard Bus booking for journey ${details.From} - ${details.To} is ${details.action} `)
})

user1.on('Luxury',(details)=>{
    console.log(`Hello ${details.User}, Luxury Bus booking for journey ${details.From} - ${details.To} is ${details.action} `)
})

user1.busBook();

const user2 = new TravelWebsiteTrain('avinashj','Mumbai','Bangalore','Udyan Exp','3 AC');
user2.on('Udyan Exp',(details)=>{
    console.log(`Hello ${details.User}, Train booking (${details.Tier}) for journey ${details.From} - ${details.To} is ${details.action} `)
})

user2.on('Rajdhani Exp',(details)=>{
    console.log(`Hello ${details.User}, Train booking (${details.Tier}) for journey ${details.From} - ${details.To} is ${details.action} `)
})

user2.cancelTrainBook();