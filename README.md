# Marco Polo Proximity Detection System
![build status][travis-image]


> An ulta low-cost, wearable navigational tool for the blind

As an acessability advocate, programmer, and student,
I was driven to help visually impared students quickly and independently find any classroom within campus academic buildings. The Center for Student Accomodations at Manhattanville College in Purchase, NY was overwhelmed with travel aid requests and was in need of either hiring additional aides or finding an alternative solution to the issue at hand. I was knowledgable about bluetooth low energy beacons. I led the hardware and software development to build a working navigational aid prototype that incorporated varying hardware systems, programming languages, and communication protocols. Final testing was conducted by a visually impared student. The system is accurate within a 1 meter radius of any programmed classroom. 

Components
==============

Bluetooth Beacon
--------------------
Hardware: Arduino IDE Adafruit Feather nRF52 Bluefruit LE

Bootloader: s132 6.1.1 r0, Level 0 (Release) 

Programmer: Arduino as ISP

Wearable Reciever
----------------
Hardware: Raspberry Pi 3 Model B+

OS: Raspian 4.14.79-v7+ 

Memory: SanDisk Class 10 micro-SD card (16GB)

Vibration Feedback 
----------------
Hardware: Mini Motor Disk 

Location: Wearable Reciever GPIO pin 17

Size: 10mm diameter, 2.7mm thick

Current draw: 5V @ 100mA

Weight: 0.9 gram


Dependencies
=============

 noble
 -------------------- 
 Function: Enables Raspberry Pi to read surrounding bluetooth signals.
 
 onoff
 -------------
 Function: Library to access the GPIO ports on the Raspberry Pi.

 
forever-Service
----------------
Function: ensures node (app.js) runs on startup.

node-beacon-scanner
------------------
Function: Parses the Bluetooth beacon packet data according to the iBeacon protocol. 
Configuration: iBeacon


Contributors
=======================
Developers: George Levine, Brandon Neff, Zach Rowell

Faculty Advisor:  Austin Purves, Ph.D.

Funding : Manhattanville College
 
# License
[MIT](./LICENSE)

[travis-image]: https://img.shields.io/travis/image-js/image-js/master.svg?style=flat-square
