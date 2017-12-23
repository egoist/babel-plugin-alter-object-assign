
# babel-plugin-alter-object-assign

[![NPM version](https://img.shields.io/npm/v/babel-plugin-alter-object-assign.svg?style=flat)](https://npmjs.com/package/babel-plugin-alter-object-assign) [![NPM downloads](https://img.shields.io/npm/dm/babel-plugin-alter-object-assign.svg?style=flat)](https://npmjs.com/package/babel-plugin-alter-object-assign) [![CircleCI](https://circleci.com/gh/egoist/babel-plugin-alter-object-assign/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/babel-plugin-alter-object-assign/tree/master)  [![codecov](https://codecov.io/gh/egoist/babel-plugin-alter-object-assign/branch/master/graph/badge.svg)](https://codecov.io/gh/egoist/babel-plugin-alter-object-assign)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Install

```bash
yarn add babel-plugin-alter-object-assign
```

## Usage

With `.babelrc`:

```js
{
  "plugins": [
    ["alter-object-assign", "myAssign"]
  ]
}
```

In:

```js
Object.assign({})
```

Out:

```js
myAssign({})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**babel-plugin-alter-object-assign** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/babel-plugin-alter-object-assign/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
