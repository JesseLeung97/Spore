//----- Configuration -----//
//----- Types -----//
//----- Components -----//
//----- Outside Libraries -----//

test("Gravity force initialization and calculation test", () => {
    const { Gravity } = require("src/Forces/Gravity");
    const mass = 0.2;
    const duration = 10;
    const timeElapsed = 3;
    const timeInstant = 5;

    const expectNormalizedTime = (timeInstant % duration) / duration;
    const expectInstantaneousForce = (9.81);
    const expectVelocity = (9.81 * timeElapsed) / mass;

    const gravityForce = new Gravity(mass, duration);
    const normalizedTime = gravityForce.normalizeTime(timeInstant, duration);
    const instantaneousForce = gravityForce.instantaneousForceStrength(normalizedTime);
    const velocity = gravityForce.applyForce(timeElapsed, timeInstant);

    expect(normalizedTime).toEqual(expectNormalizedTime);
    expect(instantaneousForce).toEqual(expectInstantaneousForce);
    expect(velocity).toEqual(expectVelocity);
});