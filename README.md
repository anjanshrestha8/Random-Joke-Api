# Random Joke API

A simple Node.js application that provides random jokes through an API. This project uses Express.js for building the server and is documented using Swagger. It is deployed on Vercel for easy access.

## Features

- Provides random jokes through a REST API.
- Swagger documentation for easy API exploration.
- Deployed on Vercel for live use.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/anjanshrestha8/Random-Joke-Api.git

2. **Navigate to the project directory**:

   ```bash
   cd Random-Joke-Api
3.**Install the dependencies**
  
   ```bash
    npm install
  ```
### Run Application 

  ```bash
        npm start
  ```

### Random Joke API

- It is a project that provides three API for the random jokes where
- ```/jokes```: API provides all the Jokes stored
- ```/joke```: Second API provide single joke at a time randomly
- ```/add-joke```: Last API can be used to add the jokes in the storage


### Swagger UI 

-- I used Swagger UI in my project to provide a API documentation which may help other developers to access my API easily without any issue regading the API
You can access the Swagger UI docs on the URL below after stating the server

```localhost:8000/docs```


### EJS 
-- I have implemented EJS(Embedded javascript) for the User Interface ESJ is used in this project because EJS allows you to generate dynamic HTML content by embedding JavaScript code within your HTML templates.
