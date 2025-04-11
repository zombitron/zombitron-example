## Previous requirements
### install git 
( on cmd try ```git``` to check if installed)
Download homebrew > [link](https://brew.sh/)
Might get some time to install

```brew install git```

### install node.js 
( on cmd try ```node -v``` to check if installed)
[Node js](https://nodejs.org/en/download)

```
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.14.0".
nvm current # Should print "v22.14.0".

# Verify npm version:
npm -v # Should print "10.9.2".
```
### install openssl
(on cmd try ```openssl``` to check if installed)

## SETUP SERVER
then : on cmd
```
git clone -–recursive https://github.com/clararigaud/zombitron-turner.git 
cd zombitron-turner
zombitron-turner > npm install
```
at this stage, if you want to run on a local server, connect to local network

then get your local ip :

```
> ifconfig
```

```
zombitron-turner > node set-ip [YOUR-LOCAL-IP]
```
### Secure Context
if you want to run on a secure context (which you want if you need IMU sensors and use not super old phones)
```
zombitron-turner > node set-https true
```

create a certificate
```
zombitron-turner > mkdir zombitron/server/certs
zombitron-turner > openssl genrsa -out zombitron/server/certs/server.key 2048
openssl req -new -x509 -sha256 -key  zombitron/server/certs/server.key -out  zombitron/server/certs/server.crt -days 365 -subj /CN=[YOUR-LOCAL-IP]
```

Then you can run 
```
zombitron-turner > node index.js
```


## ON SMARTPHONE OR TABLET 
Go to http (or https)//[--YOUR_IP--]:[--YOUR PORT--]/

## IOS < 13 
On IOS < 13 you need to install the certificate 
Go to https://[YOUR-LOCAL-IP]:[port]/certificate
Accept 
Then settings > general > install certificate
