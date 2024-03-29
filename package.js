Package.describe({
  name: 'babrahams:constellation',
  version: '0.4.17',
  summary: 'A curated set of packages for Constellation',
  git: 'https://github.com/JackAdams/constellation-distro.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function (api) {
	
  api.versionsFrom(['1.8.2', '2.3']);

  api.use('constellation:console@1.4.11');
  api.use('babrahams:temple@0.5.4');
  api.use('constellation:subscriptions@0.4.11');
  api.use('constellation:session@0.4.11');
  api.use('constellation:autopublish@0.4.11');
  api.use('constellation:tiny@0.4.11');
  api.use('constellation:position@0.4.12');
  // api.use('lai:ddp-inspector@1.1.9');
  api.use('constellation:plugins@0.4.13');
  
  api.imply('constellation:console');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
});
