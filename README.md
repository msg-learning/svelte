# Svelte demo project

## Setup

```bash
npx degit sveltejs/template --force .
node scripts/setupTypeScript.js
npm install
```


## Router


## Testing

Unit testing can be achieved by paring ts-jest with @testing-library/svelte

```bash
npm install --save-exact --save-dev @testing-library/svelte jest  ts-jest @types/jest svelte-jester @testing-library/jest-dom
npx ts-jest config:init
npm test
```