let printTicket = function() {
    console.log('Source-Mumbai, Destination-Hyderabad, FlightTime-13:20PM');
}   // Anonymous function

let successBooking = function(afterSuccess){
    afterSuccess();
}   // passing function as Arguments

successBooking(printTicket);

