pipeline {
    agent {
        docker { image 'beevelop/cordova:v8.0.0' }
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'apt-get update && apt-get install -y python build-essential'
		sh 'npm install'
            }
        }
	stage('Test') {
            steps {
                sh 'npm run lint'
                sh 'npm run unit'
                /* sh 'npm run e2e' */
            }
        }
	stage('Native Build') {
            steps {
                sh 'npm run gen:cordova-resources'
		sh 'npm run build:android'
            }
        }
    }
}