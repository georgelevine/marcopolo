/**
 
November 9th, 2018 

 * Development Stage: Alpha  
 * Script Name and Description: app.js is our implementation of a proximity-based feedback mechanism.
 * Developed for PHY.4000-Electronics Prototyping at Manhattanville College

 * Developers:  Brandon Neff, Zach Rowell, Alegria Haro, George Levine
 
 * Supervisor:  Austin Purves, Ph.D.
				Assistant Professor, Chair
				Physics Department
				Manhattanville College
				
 * Forked Source From (GitHub): https://github.com/cruepprich/gateOpener/blob/master/gate.js
 * License: GNU General Public License, version 3 (GPLv3)

   Pi Bluetooth Library
   -------------------- 
 * The noble library is used to read bluetooth signals.
 * (https://github.com/sandeepmistry/noble)
 *
 * Pi GPIO Library
   ---------------
 * The onoff library is used to access the GPIO ports on the Raspberry Pi.
 * https://github.com/fivdi/onoff
 
 **/


var RSSI_THRESHOLD    = -91
var EXIT_GRACE_PERIOD = 3000; // milliseconds

var inRange = [];

var gpio = require('onoff').Gpio
  , noble = require('noble')
  , led = new gpio(17, 'out')
  , remote = new gpio(17,'out')
  , iv
  , t1 = new Date().getTime()
  , t2
  , diff
  , scanInterval = 1
  , beaconConnected = false
  , gateState = 'STOPPED' //MOVING,STOPPED
  , ledState;


//Sends signal to switch the relay on for one second.
//This in effect simulates pressing the button on the
//activates GPIO 
function pressButton() {
  //press button for n seconds
  remote.writeSync(1);
  setTimeout(function() {
    remote.writeSync(0);
  }, 1000);

}


//Set the gateState to MOVING. This prevents the vibration motor
//being acivated when already moving.
//The gate moves about 7 seconds. After that time the
//state is set back to STOPPED so that the vibration motor can be
//activated again.
function activateGate() {
  gateState = 'MOVING';
  pressButton();
 // console.log('STATUS', gateState);
  //wait until gate is open
  setTimeout(function() {
    gateState = 'STOPPED';
 // Line 77 was tested as an alternate grace period between alerts for when peripheral.rssi < RSSI_THRESHOLD
//  }, 3500); 7000 seems to work well and acts like a buffer. 
    }, 7000);
}


//Main noble listener. When a BLE is detected we check if it is 
//within an acceptable range. The we check whether we have detected
//it previously. If not, we check if it is our beacon (Marco_4)
//and activate the vibration motor.
noble.on('discover', function(peripheral) {
  if (peripheral.rssi < RSSI_THRESHOLD) {
//ignore
    console.log('Ignoring...' , peripheral.uuid + ' (RSSI:' + peripheral.rssi + ') ' + ' – ' + gateState + ' – ' + peripheral.advertisement.localName);
    return;
  }

  var id = peripheral.id;
  var entered = !inRange[id]; //checks if this id has been seen

  //if this is a new id, check if it is our beacon and activate the vibration motor
  if (entered) {
    inRange[id] = {
      peripheral: peripheral
    };

    //our beacon has the localName Marco_4
    //if it is detected activate the vibration motor
    if (peripheral.advertisement.localName == 'Marco_4') {
      console.log('Found...' +  peripheral.advertisement.localName + '  ' + peripheral.id + ' detected (RSSI: '+ peripheral.rssi + ')' + ' – ' + gateState + '– on ' + new Date());
      
      //If the gate is not already moving, activate it
      if (gateState == 'STOPPED') {
        activateGate();
      }  
    }
  }

  //record the current time of when this beacon has been seen
  inRange[id].lastSeen = Date.now();
});


//periodically check if the beacon is no longer of consequence
setInterval(function() {

  //loop through all the beacons that we saw recently
  for (var id in inRange) {

    //if we have not seen it for more than two seconds, we delete it
    if (inRange[id].lastSeen < (Date.now() - EXIT_GRACE_PERIOD)) {
      delete inRange[id];
    }
  }
}, EXIT_GRACE_PERIOD / 2);


//Check bluetooth state. If powered on then start scanning
noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning([], true);
  } else {
    noble.stopScanning();
  }
});
