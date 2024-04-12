## Worker Management Backend

This backend application serves as the core of a Worker Management System, designed to manage worker information effectively. Built using NestJS, a progressive Node.js framework, the system utilizes MongoDB for persistent storage. The application provides API endpoints for adding, retrieving, and updating worker information.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed. The project also requires a MongoDB database connection. Create a mongoDB database and get your connection string

## Installation

Clone the repository and install its dependencies.

```bash
$ npm install
```

Go to the db.module.ts and insert your mongodb connection string

```js
imports: [MongooseModule.forRoot('mongodb connection string')];
```

## Running the app

```bash
# development
$ npm start

# watch mode
$ npm start:dev

# production mode
$ npm start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Overview

The Workers Controller handles requests related to worker operations. Here are the endpoints provided by the controller:

- **Post** /workers/add
- **GET** /workers/get
- **PUT** /workers/:id

## Sample Payload

When making a post request, your data should look like this

```js
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "broughtByLvl1": "5f7e1d3b2cdfb74a",
  "supervisor": true,
  "superCommission": true,
  "street": "123 Elm St",
  "city": "Springfield",
  "iban": "D05170648489890"
}
```

## Sample response

The API saves the data in the database and responds with this:

```js
{
  "status": "success",
  "message": "Worker successfully added",
  "data": {
    "_id": "5fc3ab3e3112d2001749e8c6",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "broughtByLvl1": "5f7e1d3b2c8a9e281cdfb74a",
    "supervisor": true,
    "superCommission": true,
    "street": "123 Elm St",
    "city": "Springfield",
    "iban": "DE12500105170648489890",
    "__v": 0
  }
}
```
