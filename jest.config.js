module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: "config/svelte/svelte.config.js"
      }
    ],
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "svelte"
  ],
  setupFilesAfterEnv: ["<rootDir>/config/jest/jest-dom.ts"]
};