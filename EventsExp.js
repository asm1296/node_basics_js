const Events = require('events');

const EventEmitter = new Events.EventEmitter;

EventEmitter.addListener('Delhi',(token)=>{
    console.log(`Flight ${token.flight} for ${token.destination} is arrived at Terminal. Please make a queue at Gate 8 with your Boarding Pass`);
})

EventEmitter.addListener('Hyderabad',(token)=>{
    console.log(`Flight ${token.flight} for ${token.destination} is arrived at Terminal. Please make a queue at Gate 8 with your Boarding Pass`);
})

EventEmitter.addListener('Kolkata',(token)=>{
    console.log(`Flight ${token.flight} for ${token.destination} is arrived at Terminal. Please make a queue at Gate 8 with your Boarding Pass`);
})

EventEmitter.emit('Hyderabad',{flight:'F0986C',destination:'Hyderabad'});
EventEmitter.emit('Delhi',{flight:'F9054D',destination:'Delhi'});

class FlightDestination extends Events.EventEmitter{
    constructor(flight,destination){
        super();
        this.flightNo=flight;
        this.destination=destination;
    }
}

let Chennai = new FlightDestination('C7007D','Chennai');
let Bangalore = new FlightDestination('B0018M','Bangalore');
let flights = [Chennai,Bangalore];

flights.forEach(flight=>{
    flight.on('OnBoarding',()=>{
        console.log(`Flight ${flight.flightNo} for ${flight.destination} is arrived at Terminal. Please make a queue at Gate 8 with your Boarding Pass`);
    })
})

Chennai.emit('OnBoarding');
Bangalore.emit('OnBoarding');