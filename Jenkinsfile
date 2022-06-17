pipeline {
   agent { any { image 'mcr.microsoft.com/playwright:v1.22.0-focal' } }
   stages {
      stage('e2e-tests') {
         steps {
            bat 'npm install'
            bat 'npm run test'
         }
      }
   }
}
