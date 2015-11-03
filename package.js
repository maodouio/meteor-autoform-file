Package.describe({
  name: "maodouio:autoform-file",
  summary: "File upload for AutoForm",
  description: "File upload for AutoForm",
  version: "1.0.5",
  git: "http://github.com/maodouio/meteor-autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'check',
    'coffeescript',
    'underscore',
    'reactive-var',
    'templating',
    'less@1.0.0 || 2.5.0',
    'aldeed:autoform@5.5.1',
    'fortawesome:fontawesome@4.4.0',
    'cfs:ui'
  ]);

  api.addFiles('lib/client/autoform-file.html', 'client');
  api.addFiles('lib/client/autoform-file.less', 'client');
  api.addFiles('lib/client/autoform-file.coffee', 'client');
  api.addFiles('lib/server/publish.coffee', 'server');
});
