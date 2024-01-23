pipeline {
    agent any

    parameters {
        string(name: 'ENV', defaultValue: 'apiQA', description: 'Environment')
        string(name: 'TAGS', defaultValue: '@api', description: 'Tags')
        string(name: 'BROWSER', defaultValue: 'chrome', description: 'browser type')
        string(name: 'PARALLEL', defaultValue: '1', description: 'PARALLEL browser')
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t play-bdd:local .'
                }
            }
        }

        stage('Run Tests in Docker container') {
            steps {
                script {
                  sh "docker run --rm -e ENV=\"${ENV}\" -e TAGS=\"${TAGS}\" -e BROWSER=\"${BROWSER}\" -e PARALLEL=\"${PARALLEL}\" play-bdd:local"
                }
            }
        }
    }
}
