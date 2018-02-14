To run application [Docker](http://docker.io/) is required.
To start application run following command:

```
docker-compose up
```

It may take while as it needs to download docker images. This will create app containers (web, db, adminer) and it will setup Postgres database.
Application should be available on address `http://localhost:3000`

To add new data to database you have 2 options.
1. Login to Adminer (http://localhost:8080) using data: 

```
system:PostgresSQL
server:db
username:properties-app
password:properties-app
database:properties-app
```


2. Using [Postman](https://www.getpostman.com/) with collection that I have provided which calls `POST /api/properties` endpoint (You need to imported them) .
Collection file:
```
Properties App.postman_collection.json
```

To run test use command (application need to be stoped as test are using [supertest](https://www.npmjs.com/package/supertest) to test api calls):
```
npm test
```

This will run test for frontend and for backend.
