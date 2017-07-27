That is the complete RSS Aggregator application developed in chapters 7-8

Available NPM commands:
- `npm start` - runs the application
- `npm run build` - build the application
- `npm run dev` - build automatically on source changes
- `npm lint` - run liner tool (tslint) according to coding style configuration in ./tslint.json
- `npm test` - run unit-tests

Unit-testing:

Here we use Jest testing framework. We set it up in `package.json` like:
```
  "jest": {
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "./jest-preprocessor.js"
    },
    "testRegex": "/app/ts/.*\\.spec\\.(ts|tsx)$"
  }
```
In addition we provide transformation script `./jest-preprocessor.js` that helps Jest understanding specs written in TypeScript

Installing dependencies
```
npm install
```

Tested with:
- npm v.5.2.0
- node v.8.1.1
- nw v.0.23.6-sdk
- Ubuntu 16.04 LTS, Windows 10, macOS Sierra 10.12



