const events = require('events');


class TravelWebsite extends events.EventEmitter{
    constructor(username){
        super();
        this.username = username;
    }

    userLogin(){
        console.log(`Login Successful ${this.username}`);
    }
}

class TravelWebsiteBus extends TravelWebsite{
    constructor(username,source,destination,busType){
        super(username);
        this.source = source;
        this.destination = destination;
        this.busType = busType;
    }

    busBook(){
        this.emit(this.busType,{User:this.username,From:this.source,To:this.destination,action:'Successful'});
    }
    cancelBusBook(){
        this.emit(this.busType,{User:this.username,From:this.source,To:this.destination,action:'Cancelled'});
    }
}

class TravelWebsiteTrain extends TravelWebsite{
    constructor(username,source,destination,trainName,tier){
        super(username);
        this.source = source;
        this.destination = destination;
        this.trainName = trainName;
        this.tier = tier;
    }

    trainBook(){
        this.emit(this.trainName,{User:this.username,From:this.source,To:this.destination,Tier:this.tier,action:'Successful'});
    }

    cancelTrainBook(){
        this.emit(this.trainName,{User:this.username,From:this.source,To:this.destination,Tier:this.tier,action:'Cancelled'})
    }
}

module.exports = {
    TravelWebsiteBus,
    TravelWebsiteTrain
}