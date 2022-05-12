const Reader =  require("./../../lib/utils/Reader");
const FizzbuzzService =  require("../../lib/services/FizzbuzzService");

describe("FizzbuzzService class test", () => {
    test("1. applyValidationInExplorer function apply a validation over 'score' property and add a new property 'trick' in function of 'score' value", () => {
        //arrange and act
        const explorers = Reader.readJsonFile("explorers.json");
        for(let i = 0; i < explorers.length; i++){
            FizzbuzzService.applyValidationInExplorer(explorers[i]);
        }
        //assert
        for(let i = 0; i < explorers.length; i++){
            expect(explorers[i].hasOwnProperty("trick")).toBeTruthy();
        }
        for(let i = 0; i < explorers.length; i++){
            if(explorers[i].score % 3 === 0 && explorers[i].score % 5 === 0){
                expect(explorers[i].trick).toBe("FIZZBUZZ");
            } else if(explorers[i].score % 3 === 0){
                expect(explorers[i].trick).toBe("FIZZ");
            }
            else if(explorers[i].score % 5 === 0){
                expect(explorers[i].trick).toBe("BUZZ");
            } else{
                expect(typeof explorers[i].trick).toBe("number");
            }
        }
        
    });
    test("2. applyValidationInNumber function returns 'FIZZ', 'BUZZ', 'FIZZBUZZ' or the number received in function of the number value solving the FizzBuzz problem", () => {
        //arrange and act
        const trick1 = FizzbuzzService.applyValidationInNumber(1);
        const trick3 = FizzbuzzService.applyValidationInNumber(3);
        const trick5 = FizzbuzzService.applyValidationInNumber(5);
        const trick15 = FizzbuzzService.applyValidationInNumber(15);
        //asserts
        expect(trick1).toBe(1);
        expect(trick3).toBe("FIZZ");
        expect(trick5).toBe("BUZZ");
        expect(trick15).toBe("FIZZBUZZ");
    });
});