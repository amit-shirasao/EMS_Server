pipeline {
  agent any

  stages {
    stage('Build and Deploy') {
      steps {
        sh 'echo "Hello from EMS Service."'
        sh 'rm -rf /home/shirasao-ems-api/htdocs/ems-api.shirasao.com/*'
        sh 'cp -r /root/.jenkins/workspace/ems-api.shirasao.com/* /home/shirasao-ems-api/htdocs/ems-api.shirasao.com/'
        sh 'cd /home/shirasao-ems-api/htdocs/ems-api.shirasao.com/'
        sh 'npm i'
        sh 'pm2 restart index.js || pm2 start index.js --name "ems-api"'
      }
    }   
  }
}