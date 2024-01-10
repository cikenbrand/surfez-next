module.exports = {
  apps : [{
    name: 'surfez-next',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: ''
    }
  }]
};
