pipeline {
    agent {
        docker { image 'beevelop/cordova:latest' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm run build:android'
            }
        }
    }
}