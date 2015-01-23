Package.describe({
  name: '3stack:bootstrap-dropup',
  version: '0.1.0',
  summary: 'Makes bootstrap drop-downs open upwards if there\'s not enough room.',
  git: 'https://github.com/3stack-software/meteor-bootstrap-dropup',
  documentation: 'README.md'
});


Package.onUse(function(api){
  api.versionsFrom('METEOR@0.9.2');

  api.use('jquery', 'client');
  api.use('underscore', 'client');

  api.addFiles('dropup.js', 'client');
});
