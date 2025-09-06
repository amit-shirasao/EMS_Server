pipeline {
  agent any

  stages {
    stage('Build and Deploy') {
      steps {
        sh 'echo "Hello from EMS Service."'
        sh 'rm -rf /home/shirasao-ems-api/htdocs/ems-api.shirasao.com/*'
        sh 'cp -r /root/.jenkins/workspace/ems-api.shirasao.com/* /home/shirasao-ems-api/htdocs/ems-api.shirasao.com/'
        sh 'npm i'
        sh 'npm run prod'
      }
    }   
  }
}