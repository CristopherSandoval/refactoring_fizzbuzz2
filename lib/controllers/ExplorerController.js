const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const missionExplorers = ExplorerService.filterByMission(explorers, mission);
        return missionExplorers;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const missionExplorersUsername = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return missionExplorersUsername;
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const missionExplorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return missionExplorersAmount;
    }
    static getValidationValue(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;