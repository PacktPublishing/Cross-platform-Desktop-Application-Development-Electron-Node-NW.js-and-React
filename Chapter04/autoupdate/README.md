This example relates to section "Deployment and updates" of chapter 4

Available NPM commands:
- `npm start` - runs the application
- `npm run build` - build the application
- `npm run dev` - build automatically on source changes
- `npm run pack` - create unpacked project directory. Useful for testing
- `npm run dist` - packages the application
- `npm run start:server` - start release server

Installing dependencies
```
npm install
```

How to use:

1. make a release
```
npm run build
npm run dist
```

2. start the release server
```
npm run start:server
```

3. find and launcher the released app from `./dist` folder to install it on your OS

4. iterate package version
```
npm version patch
```

5. launch earlier installed app and observe it requests for update


Tested with:
- npm v.5.2.0
- node v.8.1.1
- nw v.0.23.6-sdk
- Ubuntu 16.04 LTS, Windows 10, macOS Sierra 10.12



