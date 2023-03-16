pipeline {
  agent any
  tools { nodejs "nodejs-13" }
  stages {
    stage('Build') {
      steps {
        sh 'node --version'
        sh 'npm --version'
        sh 'npm install'
        script {
          if (env.BRANCH_NAME == "release") {
            sh 'npm run build-prod'
            env.BUCKET_NAME = 'proofbot.tillit.world'
          } else if(env.BRANCH_NAME == "qa") {
            sh 'npm run build-qa'
            env.BUCKET_NAME = 'qa.proofbot.tillit.world'
          } else if (env.BRANCH_NAME == "staging") {
            sh 'npm run build-staging'
            env.BUCKET_NAME = 'staging.proofbot.tillit.world'
          } else {
            sh 'npm run build'
          }
        }
      }
    }
    stage('Test') {
      steps {
        sh 'echo test-step'
      }
    }
    stage('Analysis') {
      steps {
        sh 'echo analysis-step'
      }
    }
    stage('Deploy') {
      when {
        anyOf {
          branch 'qa'
          branch 'staging'
          branch 'release'
        }
      }
      steps {
        s3Upload(
          consoleLogLevel: 'INFO',
          dontWaitForConcurrentBuildCompletion: false,
          entries: [[
            bucket: env.BUCKET_NAME,
            excludedFile: '',
            flatten: false,
            gzipFiles: false,
            keepForever: false,
            managedArtifacts: false,
            noUploadOnFailure: true,
            selectedRegion: 'ap-south-1',
            showDirectlyInBrowser: false,
            sourceFile: 'dist/Tiilit-Proofbot/**',
            storageClass: 'STANDARD',
            uploadFromSlave: false,
            useServerSideEncryption: false
          ]],
          pluginFailureResultConstraint: 'FAILURE',
          profileName: 'tracified-admin-frontend-jenkins-deployer',
          userMetadata: [],
          dontSetBuildResultOnFailure: false
        )
      }
    }
  }
  post {
    always {
      echo 'Process finished'
      discordSend(
        description: "tillit-proofbot - ${currentBuild.currentResult}",
        footer: "#${env.BUILD_ID} ${currentBuild.getBuildCauses()[0].shortDescription}",
        link: env.BUILD_URL,
        result: currentBuild.currentResult,
        title: JOB_NAME,
        webhookURL: env.DISCORD_BUILD
      )
      deleteDir()
    }
  }
}
