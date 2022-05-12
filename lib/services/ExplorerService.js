class ExplorerService{
    static filterByMission(explorers, mission){
        const nodeExplorers = explorers.filter(explorer => explorer.mission === mission);
        return nodeExplorers;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = explorers.filter(explorer => explorer.mission === mission).length;
        return explorersByMission;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = explorers.filter(explorer => explorer.mission === mission);
        const explorersUsernamesByMission = explorersByMission.map(explorer => explorer.name);
        return explorersUsernamesByMission;
    }
}

module.exports = ExplorerService;