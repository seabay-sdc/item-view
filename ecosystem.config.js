module.exports = {
  apps: [{
    name: 'seabay',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-59-156-36.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/seabay.pem',
      ref: 'origin/master',
      repo: 'https://github.com/baebay/item-view.git',
      path: '/home/ubuntu/seabay',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
//pm2 deploy ecosystem.config.js production