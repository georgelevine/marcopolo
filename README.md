# Marco Polo
![NPM version][npm-image]
![build status][travis-image]


> Indoor Navigation For The Blind

As an acessability advocate, programmer, and student,
I was driven to help visually impared students quickly and independently find any classroom within campus academic buildings. The Center for Student Accomodations at Manhattanville College in Purchase, NY was overwhelmed with travel aid requests and was in need of either hiring additional aides or finding an alternative solution to the issue at hand. I was knowledgable about bluetooth low energy beacons. I led the hardware and software development to build a working navigational aid prototype that incorporated varying hardware systems, programming languages, and communication protocols. Final testing was conducted by a visually impared student. The system is accurate within a 1 meter radius of any programmed classroom. 

Components
==============

Bluetooth Transmitter
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


   Reciever Bluetooth Library
   -------------------- 
   
   # ![noble](https://github.com/noble/noble/blob/master/assets/noble-logo.png)

 * The noble library is used to read bluetooth signals.
 * (https://github.com/sandeepmistry/noble)
 
 * Reciever GPIO Library
   ---------------
 * The onoff library is used to access the GPIO ports on the Raspberry Pi.
 * https://github.com/fivdi/onoff
 
 forever-service
===============

Make node (app.js) run on startup.


Prerequisite
------------
forever must be installed globally using 

```npm install -g forever```

Install
-------
```npm install -g forever-service```

Usage
-----
```
$ forever-service --help

forever-service version 0.x.x


  Usage: forever-service [options] [command]

  Commands:

    install [options] [service]
       Install node script (defaults to app.js in current directory) as service via forever
    
    
    
    delete [service]
       Delete all provisioned files for the service, will stop service if running before delete
    

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

Install new service
-------------------
```
$ forever-service install --help

forever-service version 0.x.x


  Usage: install [options] [service]

  Options:

    -h, --help                         output usage information
    -s, --script [script]              Script to run as service e.g. app.js, defaults to app.js

    -e --envVars [vars]                Environment Variables for the script
                                       e.g. -e "PORT=80 ENV=prod FOO=bar"

    -o --scriptOptions " [options]"    Command line options for the script

    --minUptime [value]                Minimum uptime (millis) for a script to not be considered "spinning", default 5000
                                       
    --spinSleepTime [value]            Time to wait (millis) between launches of a spinning script., default 2000
                                       
    --noGracefulShutdown               Disable graceful shutdown
                                       
    -t --forceKillWaitTime [waittime]  Time to wait in milliseconds before force killing; after failed graceful stop
                                       defaults to 5000 ms, after which entire process tree is forcibly terminated
                                       
    -f --foreverOptions " [options]"   Extra command line options for forever
                                       e.g. -f " --watchDirectory /your/watch/directory -w -c /custom/cli" etc..
                                       NOTE: a mandatory space is required after double quotes, if begining with -
                                       
    --start                            Start service after provisioning
                                       
    --nologrotate                      Do not generate logrotate script
                                       
    --logrotateFrequency [frequency]   Frequency of logrotation
                                       valid values are daily, weekly, monthly, "size 100k" etc, default daily
                                       
    --logrotateMax [value]             Maximum logrotated files to retain, default 10 (logrotate parameter)
                                       
    --logrotateDateExt                 Archive old versions of log files adding a daily extension like YYYYMMDD instead of simply adding a number

    --logrotateCompress                Enable compression for logrotate

    -p --foreverPath                   Path for forever cli e.g. /usr/local/bin,
                                       by default forever cli is searched in system Path variable

    -u --applyUlimits                  Apply increased ulimits in supported environment

    -r --runAsUser [user]              *Experimental* Run service as a specific user, defaults to root (No ubuntu support yet)
```

Delete service
--------------
```
$ forever-service delete --help

forever-service version 0.x.x


  Usage: delete [options] [service]

  Options:

    -h, --help  output usage information
```
Examples
--------
* Provision a service 'test' with app.js script in current directory

```
$ sudo forever-service install test
```
On Amazon Linux, This command will setup initd script and provision service using chkconfig,
Create logrotate scripts



* Provision a service 'test' with main.js script in current directory

```
$ sudo forever-service install test --script main.js
```



* Custom options for forever 

```
$ sudo forever-service install test -f " --watchDirectory /your/watch/directory -w"
```




* Command line parameters for the script

```
$ sudo forever-service install test --script main.js -o " param1 param2"
```



* Delete service

```
$ sudo forever-service delete test
```
This command will stop service if running, clean up all provisioned files and service




* Get list of running services (Remember all forever command line options are available since we use forever internally)
```
$ sudo forever list
```
Development Information
 -------------------- 

  Script Name and Description: app.js is our implementation of a proximity-based feedback mechanism.
  Developed for PHY.4000-Electronics Prototyping at Manhattanville College
  Developers:  Brandon Neff, Zach Rowell, Alegria Haro, George Levine
 
  Faculty Advisor:  Austin Purves, Ph.D.
				Assistant Professor, Chair
				Physics Department
				Manhattanville College		

 
Revised by George Levine on January 2, 2019

 * Source Script Info: app.js is our implementation of a proximity-based feedback mechanism.
 * Developed for PHY.4000-Electronics Prototyping at Manhattanville College

 * Developers:  Brandon Neff, Zach Rowell, Alegria Haro, George Levine
 
 * Supervisor:  Austin Purves, Ph.D.
				Assistant Professor, Chair
				Physics Department
				Manhattanville College
				
 * Forked Source From (GitHub): https://github.com/cruepprich/gateOpener/blob/master/gate.js
 * License: GNU General Public License, version 3 (GPLv3)
 
## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/image-js.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/image-js/image-js/master.svg?style=flat-square
