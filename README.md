# 🌐 The Digital Orchard // React UI Ecosystem

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-6.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Deployment](https://img.shields.io/badge/Hosted-GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)

## ⚡ Overview
Unlike a traditional static portfolio, this project is engineered as an active "Digital Garden." It documents thoughts, technical experiments, and structural layout protocols in their natural state. Built entirely in React, the architecture prioritizes seamless component transitions, rigorous state management, and secure asynchronous data handling.

## 🚀 Core System Features
This project was developed to demonstrate advanced frontend engineering capabilities beyond basic component rendering:

* **Live Telemetry & Lifecycle Hooks (`useEffect`):** The home dashboard features a real-time system clock and simulated network ping, demonstrating proper component mounting, interval execution, and memory leak prevention via cleanup functions.
* **Persistent Browser Memory (`localStorage`):** The Architectural Library page allows users to save reading materials directly to their browser's local storage. This state persists across hard page refreshes, showcasing robust data handling.
* **Advanced State & Form Validation (`useState`):** The secure communications hub (Contact page) utilizes dynamic state objects to track user input live. It features a custom Regular Expression (Regex) engine to validate email coordinates and character limits *before* permitting transmission.
* **Asynchronous Micro-Interactions:** The Project Detail page features a simulated server boot-up sequence (`setTimeout`), demonstrating how to handle asynchronous layout shifts and conditional UI rendering without blocking the main thread.
* **Immersive Routing Transitions:** Implemented pure CSS keyframe animations bounded to React Router view components, ensuring every page navigation fades and slides effortlessly into the viewport.

## 🛠️ Technical Architecture
* **Framework:** React.js
* **Routing:** `react-router-dom` (Multi-page SPA structure)
* **Styling Engine:** Bootstrap 5 (Grid structural foundation) + Custom CSS Variables.
* **Hosting Pipeline:** Automated compilation via `gh-pages`.

---

## ⚙️ Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

#### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**\
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. 

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

* [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
* [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
* [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
* [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
* [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
* [`npm run build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
