A set of packages to get you started with [Constellation](https://atmospherejs.com/constellation/console) (an extensible dev console for Meteor).

Clone this repo into the `/packages` directory (in the root folder of your Meteor project), then:

`meteor add babrahams:constellation-distro`

This distro includes the constellation base functionality:

- console for inserting, updating, removing documents in Mongo collections (one tab for each collection)
- tab with an actions log and undo/redo for any changes to documents made through the Constellation console
- account tab for the current signed in user
- fullscreen switch
- config tab for hiding and showing any tabs in the console

It also includes packages for the following optional extra tabs:

- "Temple" - a tab that gives you a visual look behind the scenes at your app's data contexts
- a tab that shows the current subscriptions and the parameters used when subscribing
- autopublish switch
- a tab where you can manipulate `Session` keys and values (along with other ReactiveDict instances in the global scope)

Notes: 

1. This package just includes other packages, so it's not on atmosphere.
2. Once this package is cloned into your project, open the `package.js` file and remove any of the optional tabs if you're never going to use them. For example, to remove the subscriptions tab from the console, just delete this line and hit save:
```
api.use('constellation:subscriptions@0.1.0');
```
3. You can achieve the same effect as cloning this distro package into your app by adding packages from atmosphere (which will also give you an easy and flexible add and remove workflow from the command line). The following command:
```
meteor add constellation:console constellation:subscriptions constellation:autopublish constellation:session babrahams:temple
```
would achieve an identical result to cloning this package into your app's `/packages` directory. Which really does call into question the purpose of this repo ... :-p