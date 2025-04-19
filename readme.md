## Previous requirements

The following installation steps are to be done on your computer or the dedicated android phone through [Termux](https://termux.dev/en/) (more doc to come) 

### 1. install git 
(not mendatory but convenient to get updates.)

on cmd try ```git``` to check if installed
<details>
  <summary>Installing git on IOS </summary>
Download homebrew > ]https://brew.sh/ if not done 
( on command ```brew``` to test if installed )

Might get some time to install

```brew install git```
  
</details>

### 2. install node.js 
( on cmd try ```node -v``` to check if installed)

if not : 

<details>
  <summary>Install node</summary>
<a href="https://nodejs.org/en/download">Node installation</a>

The code has been tested on node version 16 and node version 12. 
You should at most use node 16 if you don't want to be adventurous yet.
</details>

## SETUP SERVER
Then get the zombitron code: 

Either you download the code in zip, either (if you downloaded git earlier) you do that on cmd
``` git clone --recursive https://github.com/zombitron/zombitron-example.git ```

When you have the new folder, enter it in your cmd ([JIC](https://gomakethings.com/navigating-the-file-system-with-terminal/)) and hit
```npm install```

at this stage, if you want to run on a local server, connect to local network

### Secure Context
if you want to run on a secure context (which you want if you need IMU sensors and use not super old phones),
You will need to activate https and to generate certificaes (certificates are mandatory for IOS devices < IOS13) 
```
npm run set-https true
```

or
```
npm run set-https false // if your want to deactivate it
``` 
Create a certificate
```
npm run makecerts
```

NB: if you installed git, it cames with openssl which you need at this stage, but if you dit not install git, you need to install openssl now. 
(https://openssl.org/)

### Enabling OSC  (optional)
```
node set-osc [yourip] [theOSCport]
```

### Start stop the Zombitron
Then you can run 
```
npm run start
```
to start 

and ``` control + c ``` to stop 

## ON SMARTPHONE OR TABLET 
The cmd line should display the avalaible interfaces you can connect you devices to :)

## IOS < 13 
On IOS < 13 you need to install the certificate

Go to https://[YOUR-LOCAL-IP]:[port]/certificate

Accept 

Then settings > general > install certificate
