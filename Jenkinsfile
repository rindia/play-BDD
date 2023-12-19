pipeline {
    agent any

    parameters {
        string(name: 'ENV', defaultValue: 'apiQA', description: 'Environment')
        string(name: 'TAGS', defaultValue: '@api', description: 'Tags')
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                   docker build -t play-bdd:local .
                }
            }
        }

        stage('Run Tests in Docker conatiner') {
            steps {
                script {
                  docker run --rm play-bdd:local -e ENV=${ENV} -e TAGS=${TAGS}
                }
            }
        }
    }
}
