module.exports = {
  apps: [{
    name: 'simple-server',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-152-49-16.compute-1.amazonaws.com',
      key: '~/.ssh/AWS.pem',
      ref: 'origin/master',
      repo: 'git@github.com:omariwallace/simple-server.git',
      path: '/home/ubuntu/simple-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
