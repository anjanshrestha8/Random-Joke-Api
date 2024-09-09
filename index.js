const express = require("express");
const app = express();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const PORT = 8080;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node JS API Project Random Joke API",
    },
    servers: [
      {
        url: "http://localhost:8080/",
      },
    ],
  },
  apis: ["./index.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const jokes = [
  {
    id: 1,
    joke: "Why don’t graveyards ever get overcrowded? People are dying to get in.",
  },
  {
    id: 2,
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  },
  {
    id: 3,
    joke: "My grandfather said my generation relies too much on technology. So I unplugged his life support.",
  },
  {
    id: 4,
    joke: "I have a stepladder because my real ladder left when I was a kid.",
  },
  {
    id: 5,
    joke: "Dark humor is like food. Not everyone gets it.",
  },
  {
    id: 6,
    joke: "Why don’t skeletons fight each other? They don’t have the guts.",
  },
  {
    id: 7,
    joke: "I was going to tell a dead baby joke, but I decided to abort.",
  },
  {
    id: 8,
    joke: "Why don’t cannibals eat clowns? Because they taste funny.",
  },
  {
    id: 9,
    joke: "The doctor gave me some cream for my skin rash. He said I was a sight for psoriasis.",
  },
  {
    id: 10,
    joke: "What did the Titanic say as it sank? I’m nominating all passengers for the Ice Bucket Challenge.",
  },
];

app.use(express.json());

/**
 * @swagger
 * /jokes:
 *  get:
 *    summary: This api is to get all the jokes
 *    description: This api is to get all the jokes
 *    responses:
 *        200:
 *            description: To get jokes
 */
app.get("/jokes", (request, response) => {
  response.send(jokes);
});

/**
 * @swagger
 * /joke:
 *  get:
 *    summary: This api gives us single joke at a time
 *    description: This api gives us one joke at a time
 *    responses:
 *      200:
 *         description: Single jokes
 */

app.get("/joke", (request, response) => {
  let joke = jokes[Math.floor(Math.random() * jokes.length)];

  response.send(joke);
});
app.post("/add", (request, response) => {
  const newJokes = { id: jokes.length + 1, naya: request.body.joke };
  jokes.push(newJokes);
  response.send(newJokes);
});

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING AT:", PORT);
});
