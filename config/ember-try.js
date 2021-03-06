/* jshint node:true */
module.exports = {
  scenarios: [
    {
      name: 'Ember 1.12.1',
      dependencies: {
        'ember': '1.12.1'
      }
    },
    {
      name: 'Ember 1.13.13',
      dependencies: {
        'ember': '1.13.13'
      }
    },
    {
      name: 'Ember 2.4.6',
      dependencies: {
        'ember': '2.4.6'
      }
    },
    {
      name: 'Ember 2.8.1',
      dependencies: {
        'ember': '2.8.1'
      }
    },
    {
      name: 'Ember Canary',
      allowedToFail: true,
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    },
    {
      name: 'Ember Beta',
      allowedToFail: true,
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'Ember Release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    }
  ]
};
