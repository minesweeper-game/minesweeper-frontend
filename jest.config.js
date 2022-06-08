const {defaults} = require('jest-config');

module.exports = {
    preset: "jest-expo",
    setupFiles: [
      "<rootDir>/test-setup.js"
    ],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    moduleDirectories: [
      "node_modules",
      __dirname,
    ],
    verbose: true,
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions, 'ts', 'tsx', 'js', 'jsx'
    ],
    transform: {
        "^.+\\.[jt]sx?$": "babel-jest"
    },
    transformIgnorePatterns: [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
    ],
}