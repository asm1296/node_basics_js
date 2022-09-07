const { Nokia3310,SamsungGalaxy } = require('./MobileClasses');

var myFirstMobile = new Nokia3310(1);
console.log(myFirstMobile.noOfCamera);
myFirstMobile.takePictures();

var mySecondMobile = new SamsungGalaxy(2,true);
console.log(mySecondMobile.noOfCamera);
mySecondMobile.takePictures();
mySecondMobile.calling();
mySecondMobile.unlockScreen();