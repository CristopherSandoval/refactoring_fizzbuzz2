class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        const score = explorer.score;
        if(score % 3 === 0 && score % 5 === 0){
            explorer.trick = "FIZZBUZZ";
        } else if(score % 5 === 0){
            explorer.trick = "BUZZ";
        } else if(score % 3 === 0){
            explorer.trick = "FIZZ";
        } else {
            explorer.trick = explorer.score;
        }
    }
    static applyValidationInNumber(number){
        if(number % 3 === 0 && number % 5 === 0){
            return "FIZZBUZZ";
        } else if(number % 5 === 0){
            return "BUZZ";
        } else if(number % 3 === 0){
            return "FIZZ";
        } else {
            return number;
        }
    }
}
module.exports = FizzbuzzService;