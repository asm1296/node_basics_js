class Mobile {
    constructor(){
        this.isHavingMemoryCard = true;
        this.bluetooth = 'BT3.0';
    }

    calling(){
        console.log("call to any number using mobile.");
    }
    messaging(){
        console.log("can send text messages");
    }
}

class Nokia3310 extends Mobile{
    constructor(camera){
        super();
        this.noOfCamera = camera;
    }

    takePictures(){
        console.log(`We can take pictures using ${this.noOfCamera} camera`);
    }
}

class SamsungGalaxy extends Nokia3310{
    constructor(camera,fingerprintsensor){
        super(camera);
        this.fingerPrintSensor = fingerprintsensor;
    }

    unlockScreen(){
        console.log("We can unlock screen using FingerPrint");
    }
}

module.exports ={
    Nokia3310,
    SamsungGalaxy
}