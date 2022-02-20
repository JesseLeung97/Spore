const { InfectedLogger, ConverterLogger } = require("src/Utility/Logger");
const Errors = require("src/Utility/Errors.json");

test("Infected log test", () => {
    const logger = new InfectedLogger();
    const loggerOutput = logger.LoopAndAnimationTimeConflict();
    console.log("logger: ", loggerOutput)
    const correctOutput = Errors["Infected"]["LoopAndAnimationTimeConflict"];
    console.log("output: ",correctOutput);

    expect(loggerOutput).toEqual(correctOutput);

});