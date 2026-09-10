const nextJest = require('next/jest');

// Runs tests through Next's SWC transform, replacing the babel-jest
// pickup of the removed .babelrc.
const createJestConfig = nextJest({ dir: './' });

module.exports = createJestConfig({
    testEnvironment: 'node',
});
