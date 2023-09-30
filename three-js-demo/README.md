### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

### `npm run build`

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# GITHUB PAGES

npx create-react-app my-app --template typescript
cd my-app
npm install gh-pages --save-dev

{
  "name": "my-app",
  "version": "0.1.0",
  "homepage": "https://coder92.github.io/github-pages-demo/three-js-demo",
  "private": true
}

"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build"
}
npm run deploy
npm run deploy -- -m "Deploy React app to GitHub Pages"



# Material UI React Lib
npm install @mui/material @emotion/react @emotion/styled
"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0",
  "react-dom": "^17.0.0 || ^18.0.0"
},
npm install @fontsource/roboto
npm install @mui/icons-material

npm i react-router-dom
npm i react-redux
npm i @ant-design/icons
npm i prop-types

npm install --save-dev typescript
npx tsc --init


npm i @reduxjs/toolkit
npm i framer-motion

npm install \

redux \

react-redux \

redux-thunk \

redux-devtools-extension


npm install three @types/three @react-three/fiber
npm i @react-three/drei 