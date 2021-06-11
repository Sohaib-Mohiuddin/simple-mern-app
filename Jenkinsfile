def backend_build_push
def frontend_build_push

pipeline {
    environment {
        DOCKERHUB_REPO = 'sohaibm'
        BACKEND_IMAGE_NAME = 'simple-mern-app-backend'
        FRONTEND_IMAGE_NAME = 'simple-mern-app-frontend'
        BACKEND_VERSION = '1.0'
        FRONTEND_VERSION = '1.0'
    }
    
    agent any
    
    stages {
        stage('Build Backend Image') {
            echo 'Building Backend Image'
            script {
                backend_build_push = docker.build("${DOCKERHUB_REPO}/${BACKEND_IMAGE_NAME}:${BACKEND_VERSION}", 'backend/.')
            }
            echo 'Building Backend Image - Complete'
        }
        stage('Build Frontend Image') {
            echo 'Building Frontend Image'
            script {
                frontend_build_push = docker.build("${DOCKERHUB_REPO}/${FRONTEND_IMAGE_NAME}:${FRONTEND_VERSION}", 'frontend/.')
            }
            echo 'Building Frontend Image - Complete'
        }
        stage('Push Backend Image to DockerHub') {
            echo 'Pushing Backend Image'
            script {
                docker.withRegistry('', 'DockerHub') {
                    backend_build_push.push()
                }
            }
            echo 'Pushing Backend Image - Complete'
        }
        stage('Push Frontend Image to DockerHub') {
            echo 'Pushing Frontend Image'
            script {
                docker.withRegistry('', 'DockerHub') {
                    frontend_build_push.push()
                }
            }
            echo 'Pushing Frontend Image - Complete'
        }
        stage('Prune Dangling Images/Containers') {
            echo 'Pruning Containers'
            sh "docker container prune -f"
            echo 'Pruning Images'
            sh "docker image prune -f"
            echo 'Pruning - Complete'
        }
    }
}