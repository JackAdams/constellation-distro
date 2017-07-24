Package.describe({
  name: 'babrahams:constellation',
  version: '0.4.10',
  summary: 'A curated set of packages for Constellation',
  git: 'https://github.com/JackAdams/constellation-distro.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
	
  api.versionsFrom('1.0');

  api.use('constellation:console@1.4.5');
  api.use('babrahams:temple@0.4.5');
  api.use('constellation:subscriptions@0.4.5');
  api.use('constellation:session@0.4.5');
  api.use('constellation:autopublish@0.4.4');
  api.use('constellation:tiny@0.4.4');
  api.use('constellation:position@0.4.4');
  // api.use('lai:ddp-inspector@1.1.9');
  api.use('constellation:plugins@0.4.6');
  
  api.imply('constellation:console');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
});
