## Previous requirements
- installing git ( on cmd try ```git``` to check if installed)
    On mac OS > [installer](https://sourceforge.net/projects/git-osx-installer/)
    Other alternatives such as homebrew see [git website](https://git-scm.com/downloads/mac)

- installing node js ( on cmd try ```node -v``` to check if installed)
    [Node js](https://nodejs.org/en/download)

- installing openssl ( on cmd try ```openssl``` to check if installed)

## SETUP SERVER
then : on cmd
```
git clone -–recursive https://github.com/zombitron/zombitron-example.git 
cd zombitron-example
zombitron-example > npm install
```
at this stage, if you want to run on a local server, connect to local network

then get your local ip :

```
> ifconfig
```

```
zombitron-example > node set-ip [YOUR-LOCAL-IP]
```
### Secure Context
if you want to run on a secure context (which you want if you need IMU sensors and use not super old phones)
```
zombitron-example > node set-https true
```

create a certificate
```
zombitron-example > mkdir zombitron/server/certs
zombitron-example > openssl genrsa -out zombitron/server/certs/server.key 2048
openssl req -new -x509 -sha256 -key  zombitron/server/certs/server.key -out  zombitron/server/certs/server.crt -days 365 -subj /CN=[YOUR-LOCAL-IP]
```

Then you can run 
```
zombitron-example > node index.js
```


## ON SMARTPHONE OR TABLET 
Go to http (or https)//[--YOUR_IP--]:[--YOUR PORT--]/

## IOS < 13 
On IOS < 13 you need to install the certificate 
Go to https://[YOUR-LOCAL-IP]:[port]/certificate
Accept 
Then settings > general > install certificate
