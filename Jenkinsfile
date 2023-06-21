pipeline {
  agent any
  tools { nodejs "nodejs-15" }
  stages {
    stage('Install') {
      steps {
        sh 'node --version'
        sh 'npm --version'
        sh 'npm ci'
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

    stage('Build and Deploy to QA') {
      when {
        branch 'master'
      }
      steps {
        sh 'npm run build-qa'
        s3Upload(
          consoleLogLevel: 'INFO',
          dontWaitForConcurrentBuildCompletion: false,
          entries: [[
            bucket: 'qa.proofbot.tillit.world',
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

    stage('Build and Deploy to Staging') {
      when {
        branch 'master'
      }
      steps {
        sh 'npm run build-staging'
        s3Upload(
          consoleLogLevel: 'INFO',
          dontWaitForConcurrentBuildCompletion: false,
          entries: [[
            bucket: 'staging.proofbot.tillit.world',
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
