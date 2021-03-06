# The Marco Polo Project: George Levine
![build status][travis-image]


>a low-cost, wearable navigational tool for the blind

As an acessability advocate, programmer, and student,
I was driven to help visually impared students quickly and independently find any classroom within campus academic buildings. The Center for Student Accomodations at Manhattanville College in Purchase, NY was overwhelmed with travel aid requests and was in need of either hiring additional aides or finding an alternative solution to the issue at hand. I was knowledgable about bluetooth low energy beacons. I led the hardware and software development to build a working navigational aid prototype that incorporated varying hardware systems, programming languages, and communication protocols. Final testing was conducted by a visually impared student. The system is accurate within approximately 1 meter radius of any programmed classroom.

# Hardware

Beacon
--------------------
Hardware: Arduino IDE Adafruit Feather nRF52 Bluefruit LE\
Function: Bluetooth LE Output Broadcast\
Bootloader: s132 6.1.1 r0, Level 0 (Release)\
Programmer: Arduino as ISP

Wearable
----------------
Hardware: Raspberry Pi 3 Model B+\
Functon: Gateway Reciever\
OS: Raspian 4.14.79-v7+\
Memory: SanDisk Class 10 micro-SD card (16GB)

Feedback
----------------
Hardware: Mini Motor Disk\
Function: Mechanical User Alert 
Location: Afixed to Wearable Reciever GPIO pin 17\
Size: 10mm diameter, 2.7mm thick\
Current draw: 5V @ 100mA\
Weight: 0.9 gram

## Installation – (Windows, Linux Only)

Clone Git Repository


```Bash
git clone https://github.com/georgelevine/marcopolo.git
```
Now switch your working directory\
Check whether node.js and npm package manager are installed.
```
node -v
```
```
npm -v
```
If not installed, download and run the node installer https://nodejs.org/en/download  
A system restart may be necessary.

# Prerequisites
### noble `npm install noble`
 Function: Enables Raspberry Pi to read surrounding bluetooth signals.
 See [[noble]](https://github.com/noble/noble) for installation help.

### onoff `npm install onoff`
 Function: GPIO access for Raspberry Pi.

### node-beacon-scanner 
Included in repository node_module\
Function: Parses the Bluetooth beacon packet data.

---------------------------------
# Optional
### forever-service
Function: enables app.js to run on startup
# Flashing Sketch

Environment: Arduino IDE (https://www.arduino.cc/en/Main/Software)  
Add `https://www.adafruit.com/package_adafruit_index.json` as an Additional Board Manager URL





# Contributors

Developers: George Levine, Brandon Neff, Zach Rowell

Faculty Advisor:  Austin Purves, Ph.D.

Affilation: Manhattanville College

### Credits

A special thanks to [@cruepprich](https://github.com/cruepprich/gateOpener)

You showed us that bluetooth low energy has pratical applications, and that the raspberry pi can indeed have an interface to control bluetooth and GPIO pins.

### License

[MIT](./LICENSE)

[travis-image]: https://img.shields.io/travis/image-js/image-js/master.svg?style=flat-square
