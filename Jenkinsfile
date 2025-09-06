pipeline {
  agent any

  stages {
    stage('Build and Deploy') {
      steps {
        sh '''
          echo "Hello from EMS Service."
          rm -rf /home/shirasao-ems-api/htdocs/ems-api.shirasao.com/*
          cp -r /root/.jenkins/workspace/ems-api.shirasao.com/* /home/shirasao-ems-api/htdocs/ems-api.shirasao.com/
          cd /home/shirasao-ems-api/htdocs/ems-api.shirasao.com/
          npm i
          ./node_modules/.bin/pm2 restart index.js || ./node_modules/.bin/pm2 start index.js --name "ems-api"
        '''
      }
    }
  }
}