#A very simple 'Hello world' Node App running in a Docker container

##Dependencies
* [Docker](https://www.docker.com/products/docker)

##Get Started  
1.  `git clone git@github.com:rbrtsmith/docker-intro.git`
2.  `docker build -t nodeapp .`
3.  `docker run -i -p 8000:8000 -t nodeapp /bin/bash`
4.  visit [http://localhost:8000/](http://localhost:8000/).
