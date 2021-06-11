# simple-mern-app

## Introduction
This is a simple MERN stack implemented for the purpose of integrating multiple dependant Helm Charts. All Images and Charts implemented are for ***development*** environments ONLY! A ***production*** environment must be setup with the use of Ingress instead of ***kubectl port-forward***.

## Integrations
This application can be integrated with the following:
- Jenkins (CI) --> Jenkinsfile
- ArgoCD (CD) --> simple-mern-app-frontend Helm Chart
    - Or any CD tool that can implement Helm Charts as configuration
