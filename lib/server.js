//Importamos Controller
const ExplorerController = require("./controllers/ExplorerController");
//usando objeto express
const express = require("express");
// App de Express
const app = express();
// Puerto en que vamos a ver nuestra app: localhost:3000
app.use(express.json());
const port = 3000;
app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

//Send explorers in function of mission value.
app.get("/v1/explorers/:mission", (request, response) => {
    //console.log(`API Explorers GET request ${new Date()}`)
    //console.log(`Getting explorer with mission ${request.params.mission}`)
    //if you are using postman body use const 'mission = request.body.mission;' otherwise use the next line:
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission)
    response.json(explorersInMission);
});
app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmount = ExplorerController.getExplorersAmountByMission(mission);
    response.status(200).json({mission: mission, quantity: explorersAmount});

});
app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersName = ExplorerController.getExplorersUsernamesByMission(mission);
    response.status(200).json({mission: mission, explorersName: explorersName});
})
app.get("/v1/fizzbuzz/:score", (request, response) => {
    const number = request.params.score;
    const trick = ExplorerController.getValidationValue(number);
    response.status(200).json({number: number, trick: trick});
});
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});