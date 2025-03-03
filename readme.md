git clone zombitron-example


## SETUP SERVER
1. Edit ``setup.json`` with your ip and port

To know your IP : in the terminal > ifconfig

If you need secure environemet: 
```
https: true
```
And you will need to generate a certificate: 

Generating certificate: 
```
mkdir zombitron/server/certs 
openssl genrsa -out zombitron/server/certs/server.key 2048
````

Installing dependencies: 
npm install

run:  node index.js


## ON SMARTPHONE OR TABLET 
Go to http ( or https)//[--YOUR_IP--]:[--YOUR PORT--]/

On IOS < 13 co to certificate to install and verify it