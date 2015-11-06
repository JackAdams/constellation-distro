Package.describe({
  name: 'babrahams:constellation',
  version: '0.1.12',
  summary: 'A curated set of packages for Constellation',
  git: 'https://github.com/JackAdams/constellation-distro.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
	
  api.versionsFrom('1.0');

  api.use('constellation:console@1.3.0');
  api.use('babrahams:temple@0.3.6');
  api.use('constellation:subscriptions@0.3.4');
  api.use('constellation:session@0.3.5');
  api.use('constellation:autopublish@0.3.8');
  api.use('constellation:tiny@0.3.4');
  api.use('constellation:position@0.3.5');
  api.use('lai:ddp-inspector@1.1.7');
  api.use('constellation:plugins@0.1.4');
  
  api.imply('constellation:console');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
});
