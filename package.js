Package.describe({
  summary: "Upload and manage files easily with AutoForm and CollectionFS",
  name: 'maodouio:autoform-file',
  version: "1.0.4",
  git: "http://github.com/maodouio/autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use(
    [
    'coffeescript',
    'underscore',
    'templating',
    'less@2.5.1',
    'aldeed:autoform@5.7.1'
    ],
    'client');

  api.add_files('lib/client/autoform-file.html', 'client');
  api.add_files('lib/client/autoform-file.less', 'client');
  api.add_files('lib/client/autoform-file.coffee', 'client');
});
