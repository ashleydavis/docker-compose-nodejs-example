# docker-compose-nodejs-example

An example of Nodejs and Mongodb servers built using Docker Compose

Created with the help of this tutorial: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

And my previous docker example: https://github.com/ashleydavis/docker-compose-basic-example

## To run the Node.js server on your dev pc:

Clone or download this repo, open a command line, change to the repo directory, then install dependencies:

    > npm install

Now run the server:

    > npm start

Now navigate your browser to http://127.0.0.1:3000/ to view the app.

## Building and running the Docker image in the Vagrant VM

Ensure you have VirtualBox and Vagrant installed.

Bring the VM up:

    > vagrant up

Or run the batch file to record the log to a file:

    > up.bat

This starts an Ubuntu VM, installs Docker and Docker Compose, then automatically runs `docker-compose up` to start the system.

At the end you should be able to browse to http://localhost:3000 on your **dev workstation** and see the web page it produces.