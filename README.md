# image-js

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

 November 9th, 2018 
 -------------------- 
  Development Stage: Alpha  
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

   Pi Bluetooth Library
   -------------------- 
 * The noble library is used to read bluetooth signals.
 * (https://github.com/sandeepmistry/noble)
 
 * Pi GPIO Library
   ---------------
 * The onoff library is used to access the GPIO ports on the Raspberry Pi.
 * https://github.com/fivdi/onoff
 
 forever-service
===============

Make provisioning node script as a service simple. 

We love nodejs for server development. But, It is surprising to find that there is no standard tool to provision script as a service. Forever kind of tools comes close but they only demonize the process and not provision as service; which can be automatically started on reboots. To make matter worse, each OS and Linux distro has its own unique way of provisioning the services correctly.

Goals
-----
1. Make an universal service installer across various Linux distros and other OS.
2. Automatically configure other useful things such as Logrotation scripts, port monitoring scripts etc.
3. Graceful shutdown of services as default behaviour.

Platform Used
-------------------
* Raspbian


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
