## Previous requirements

The following installation steps are to be done on your computer or the dedicated android phone through [Termux](https://termux.dev/en/) (more doc to come) 

### 1. install git 
(not mendatory but convenient to get updates.)

on cmd try ```git``` to check if installed

On termux : ```pkg install git```

To run secure server, you need open-ssl.  
On termux : ```pkg install openssl-tool```

<details>
  <summary>Installing git on MacOS </summary>
Download homebrew > ]https://brew.sh/ if not done 
( on command ```brew``` to test if installed )

Might get some time to install

```brew install git```
  
</details>

### 2. install node.js 

(tested on node 22lts )
( on cmd try ```node -v``` to check if installed)

if not : 
On termux : ```pkg install nodejs-lts```

<details>
  <summary>Install node otherwise</summary>
<a href="https://nodejs.org/en/download">Node installation</a>

The code has been tested on node version 22.16.0 LTS and node version 12.13.0 (LTS)
</details>

## SETUP SERVER
Then get the zombitron code: 

Either you download the code in zip, either (if you downloaded git earlier) you do that on cmd
``` git clone --recursive https://github.com/zombitron/zombitron-example.git ```

When you have the new folder, enter it in your cmd ([JIC](https://gomakethings.com/navigating-the-file-system-with-terminal/)) and hit
```npm install```

at this stage, you will be asked a few information for setup: 

### Start stop the Zombitron
Then you can run 
```
npm run start
```
to start 

and ``` control + c ``` to stop 

## ON SMARTPHONE OR TABLET 
The cmd line should display the available interfaces you can connect you devices to :)

## IOS < 13 
On IOS < 13 you need to install the certificate

Go to https://[YOUR-LOCAL-IP]:[port]/certificate

Accept 

Then settings > general > install certificate

Then settings > general > information > Certificate setup
and tick the one(s) corresponding tio your IP

## Options
### Secure Context
if you want to run on a secure context (which you want if you need IMU sensors and use not super old phones),
You will need to activate https and to generate certificates (certificates are mandatory for IOS devices < IOS13) 
```
npm run setsecureserver
```

Whenever you change your ip address, you will need to regenerate the certificates.

NB: if you installed git, it cames with openssl which you need at this stage, but if you dit not install git, you need to install openssl now. 
(https://openssl.org/)

### Enabling OSC  (optional)
```
npm run set-osc
```
