# ReactJS Frontend

## Introduction
A very simple ReactJS frontend that connects to an ExpressJS API. This is a single page that displays random images of dogs pulled from the backend API. 

## Necessary Packages
- NPM
- Node

## Run Application
This application can be run standalone by running the command: *npm start*

## File Explanations
- Dockerfile - build a minimal docker image out of this application
- src/App.js - the main file that ReactJS will point to
- src/Image.js - this file handles the api call and parses the json to extract the image url