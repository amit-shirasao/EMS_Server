pipeline {
  agent any

  stages {
    stage('Build and Deploy') {
      steps {
        sh 'echo "Hello from EMS Service."'
        sh 'npm i'
        sh 'npm run prod'
      }
    }   
  }
}