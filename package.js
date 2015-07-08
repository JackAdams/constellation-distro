Package.describe({
  name: 'babrahams:constellation-distro',
  version: '0.1.0',
  summary: 'A set of packages to get you started with Constellation',
  git: 'https://github.com/JackAdams/constellation-distro.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
	
  api.versionsFrom('1.1');

  api.use('babrahams:constellation@1.0.0');
  api.use('babrahams:temple@0.1.0');
  api.use('babrahams:constellation-subscriptions@0.1.0');
  api.use('babrahams:constellation-session@0.1.0');
  api.use('babrahams:constellation-autopublish@0.1.0');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
});
