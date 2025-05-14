pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/Jaswanth-3174/Login-and-Signup-Page.git', branch: 'main'
            }
        }

        stage('List Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Archive HTML Site') {
            steps {
                archiveArtifacts artifacts: '**/*.html, **/*.css, **/*.js', fingerprint: true
            }
        }
    }
}
