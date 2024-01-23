pipeline {
    agent any

    parameters {
        choice(name: 'ENV', choices: ['apiQA', 'webQA'], description: 'Environment')
        string(name: 'TAGS', defaultValue: '@api', description: 'Tags')
        choice(name: 'BROWSER', choices: ['chrome', 'firefox', 'webkit'], description: 'Browser type')
        string(name: 'PARALLEL', defaultValue: '1', description: 'Parallel browsers')
        choice(name: 'LAUNCH', choices: ['BDD-playwright api', 'BDD-playwright web'], description: 'Execution launch name in report')
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
                  sh "docker run --rm -e ENV=\"${ENV}\" -e TAGS=\"${TAGS}\" -e BROWSER=\"${BROWSER}\" -e PARALLEL=\"${PARALLEL}\" -e LAUNCH=\"${LAUNCH}\" play-bdd:local"
                }
            }
        }
    }
}
