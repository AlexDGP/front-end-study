# npm

## What is npm?

npm(node package manager) is nodejs default package manage tool.

website:https://www.npmjs.com/

## npm commands

| Command                                                     | Description                                                  |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| npm init [--yes(-y)]                                        | initialize and generate configuration file: package.json     |
| npm i(install) <package1>[ <package2> <package3> ...]       | install one or more core dependencies                        |
| npm i -D(--save-dev) <package1>[ <package2> <package3> ...] | install one or more developing dependencies                  |
| npm i(install)                                              | install all the dependencies                                 |
| npm uninstall <package1>[ <package2> <package3> ...]        | uninstall one or more dependencies                           |
| npm uninstall -g <package1>[ <package2> <package3> ...]     | uninstall one or more global dependencies                    |
| npm list                                                    | list all dependencies(include core dependencies and developing dependencies) |
| npm list -g                                                 | list all global dependencies                                 |
| npm config get prefix                                       | get global dependencies path                                 |
| npm config set prefix <address>                             | set global dependencies path                                 |

## npm server(registry)

- **get npm registry: npm config get registry**

  npm official registry:https://registry.npmjs.org/

  npm taobao registry:https://registry.npm.taobao.org/

- **set npm registry: npm set registry <registryURL>**

  set npm registry to taobao registry: npm set registry https://registry.npm.taobao.org/

## Properties in package.json

| Properties in package.json          | Description                                                  |
| ----------------------------------- | ------------------------------------------------------------ |
| name                                | package name                                                 |
| version                             | package version                                              |
| description                         | package description                                          |
| homepage                            | package homepage website                                     |
| repository                          | type of code repository(such as git or svn)                  |
| main                                | the entrance of package, when using require('<packageName>'),process will load the package. |
| "scripts" : { "<key>" : "<value>" } | script commands, by using command: `npm run <key>`, to run <value> command |
| keywords                            | package keywords                                             |
| author                              | package author                                               |
| contributors                        | package contributors                                         |
| license                             | package license                                              |
| dependencies                        | package core license                                         |
| devDependencies                     | package license                                              |

## Version

- `version` Must match `version` exactly
- `>version` Must be greater than `version`
- `>=version` etc
- `<version`
- `<=version`
- `~version` "Approximately equivalent to version" See [semver](https://github.com/npm/node-semver#versions)
- `^version` "Compatible with version" See [semver](https://github.com/npm/node-semver#versions)
- `1.2.x` 1.2.0, 1.2.1, etc., but not 1.3.0
- `http://...` See 'URLs as Dependencies' below
- `*` Matches any version
- `""` (just an empty string) Same as `*`
- `version1 - version2` Same as `>=version1 <=version2`.
- `range1 || range2` Passes if either range1 or range2 are satisfied.
- `git...` See 'Git URLs as Dependencies' below
- `user/repo` See 'GitHub URLs' below
- `tag` A specific version tagged and published as `tag` See [`npm dist-tag`](https://docs.npmjs.com/cli/v8/commands/npm-dist-tag)
- `path/path/path` See [Local Paths](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#local-paths) below

## publish package

| Command                 | Description                       |
| ----------------------- | --------------------------------- |
| npm login               | login npm server                  |
| npm publish             | publish package to npm server     |
| npm unpublish <package> | unpublish package from npm server |
