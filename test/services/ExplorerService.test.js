const Reader =  require("./../../lib/utils/Reader");
const ExplorerService =  require("./../../lib/services/ExplorerService");

describe("ExplorerService class test", () => {
    test("filterByMission function return a list of object that contain a specified property value", () => {
        //arrange and act
        const explorers = Reader.readJsonFile("explorers.json");
        const nodeExplorers = ExplorerService.filterByMission(explorers,"node");
        //assert
        for(let i = 0; i < nodeExplorers.length; i++){
            expect(nodeExplorers[i].mission).toEqual("node");
        }
    });
    test("getAmountOfExplorersByMission function return the number of objects inside an list that contain a specified property value", () => {
        //arrange and act
        const explorers = Reader.readJsonFile("explorers.json");
        const nodeExplorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers,"node");
        //assert
        expect(typeof nodeExplorersAmount).toBe("number");
    });
    test("getExplorersUsernamesByMission function return a list of username property value from a list of objects that contain a especified property value", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const nodeExplorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        //assert
        //Expected is setting as Woopa because all the explorers have the same base name 
        const expected = /Woopa/; // /[A-Za-z0-9]/
        for(let i = 0; i < nodeExplorersUsernames.length; i++){
            expect(nodeExplorersUsernames[i]).toEqual(expect.stringMatching(expected));
        }
    });
});