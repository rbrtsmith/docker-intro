#A very simple 'Hello world' Node App running in a Docker container

##Get Started  
First download Docker if you don't have it installed locally [https://www.docker.com/products/docker](https://www.docker.com/products/docker).

Run the following commands to create a Docker image and run it inside of a Docker container.
*  `docker build -t nodeapp .`
*  `docker run -i -p 8000:8000 -t nodeapp /bin/bash`

Then visit [http://localhost:8000/](http://localhost:8000/) on your machine.
