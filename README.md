# helloWorld

## Overview

I wrote this app just to learn how to deploy a node.js app with mySQL to google cloud platform.  All this app does is show an HTML page and when you click the `get message` button it fetchses all the *worlds* from the helloworld_db and prints a message `Hello world.name` for every world in the worlds table.  

A few things to note.  The DB connection info is stored in the `.env` file to test using local DB so that file **should NOT** be saved in source conrol (make sure it is in .gitignore).  The server side/GCP (Google Cloud Platform) DB connection info is stored in the env section of the `app.yaml` file so that should also **NOT** be stored in source control (i.e. git -- make sure you add `*.yaml` to .gitignore).

* NOTE: To connect mySQL Workbench to the GCP SQL Datastore you have to get the public IP from the connection instance info on the GCP SQL Dashboard service.  You also have to authorize your IP address to be able to access that DB (use whatsmyip.org to get your IP address).