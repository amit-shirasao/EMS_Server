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
          npm run build
        '''
      }
    }
  }
}