//----- Configuration -----//
const Errors = require("src/Utility/Errors.json");
//----- Types -----//
//----- Components -----//
const { InfectedLogger, ConverterLogger } = require("src/Utility/Logger");
//----- Outside Libraries -----//


// test("Infected log test", () => {
//     const logger = new InfectedLogger();
//     const loggerOutput = logger.LoopAndAnimationTimeConflict();
//     console.log("logger: ", loggerOutput)
//     const correctOutput = Errors["Infected"]["LoopAndAnimationTimeConflict"];
//     console.log("output: ",correctOutput);

//     expect(loggerOutput).toEqual(correctOutput);

// });