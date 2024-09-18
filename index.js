const express = require("express");
const app = express();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const PORT = 8000;
let status = "Server is running.....";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node JS API Project Random Joke API",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./index.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/random-jokes", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const jokes = [
  {
    setup: "Why don’t graveyards ever get overcrowded?",
    punchline: "Because people are dying to get in.",
  },
  {
    setup: "Why don't skeletons play music at parties?",
    punchline: "Because they don't have the guts.",
  },
  {
    setup: "I told my wife she was drawing her eyebrows too high.",
    punchline: "She looked surprised.",
  },
  {
    setup: "Why don’t cannibals eat clowns?",
    punchline: "Because they taste funny.",
  },
  {
    setup: "I have a joke about death, but…",
    punchline: "It’s over everyone’s head.",
  },
  {
    setup: "Why did the old man fall into the well?",
    punchline: "Because he couldn’t see that well.",
  },
  {
    setup: "My grandfather said my generation relies too much on technology.",
    punchline: "So I unplugged his life support.",
  },
  {
    setup: "The cemetery is such a popular place.",
    punchline: "People are just dying to get there.",
  },
  {
    setup: "Why don’t orphans play hide and seek?",
    punchline: "Because good luck finding them.",
  },
  {
    setup: "Dark humor is like food.",
    punchline: "Not everyone gets it.",
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static("public"));
/**
 * @swagger
 * /jokes:
 *  get:
 *    summary: This api is to get all the jokes
 *    description: This api is to get all the jokes
 *    responses:
 *        200:
 *            description: To get jokes
 *             content:
 *                application/json:

 */
app.get("/jokes", (request, response) => {
  response.render("jokes", {
    message: {
      state: status,
      jokes: jokes,
    },
  });
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
  console.log(joke);

  response.render("index", {
    message: {
      setup: joke.setup,
      punchline: joke.punchline,
      state: status,
    },
  });
});

/**
 * @swagger
 * /add:
 *    post:
 *      summary: This route help us to post jokes
 *      description: This route update the array of jokes
 *      responses:
 *        200:
 *          description: This is a post route
 */
app.post("/add-joke", (request, response) => {
  const newJoke = {
    setup: request.body.setup,
    punchline: request.body.punchline,
  };
  console.log(newJoke);
  jokes.push(newJoke);
  response.redirect("jokes");
});
app.get("/add", (request, response) => {
  response.render("addJoke");
});
app.get("/", (request, response) => {
  response.render("index", {
    message: {
      state: status,
    },
  });
});

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING AT:", PORT);
});
