### Build client, server, worker ###
$ docker build -t Dockerfile.dev .

### Run client, server, worker ###
$ docker run -it -p 3000:3000 [ IMAGE ]

### Run docker-compose ###
$ docker-compose up