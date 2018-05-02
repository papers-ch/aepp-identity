pipeline {
    agent {
        docker { image 'beevelop/cordova:v8.0.0' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm run build:android'
            }
        }
    }
}