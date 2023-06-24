oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g vmdeploy
$ vmdeploy COMMAND
running command...
$ vmdeploy (--version)
vmdeploy/0.0.0 darwin-arm64 node-v16.19.0
$ vmdeploy --help [COMMAND]
USAGE
  $ vmdeploy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vmdeploy hello PERSON`](#vmdeploy-hello-person)
* [`vmdeploy hello world`](#vmdeploy-hello-world)
* [`vmdeploy help [COMMANDS]`](#vmdeploy-help-commands)
* [`vmdeploy plugins`](#vmdeploy-plugins)
* [`vmdeploy plugins:install PLUGIN...`](#vmdeploy-pluginsinstall-plugin)
* [`vmdeploy plugins:inspect PLUGIN...`](#vmdeploy-pluginsinspect-plugin)
* [`vmdeploy plugins:install PLUGIN...`](#vmdeploy-pluginsinstall-plugin-1)
* [`vmdeploy plugins:link PLUGIN`](#vmdeploy-pluginslink-plugin)
* [`vmdeploy plugins:uninstall PLUGIN...`](#vmdeploy-pluginsuninstall-plugin)
* [`vmdeploy plugins:uninstall PLUGIN...`](#vmdeploy-pluginsuninstall-plugin-1)
* [`vmdeploy plugins:uninstall PLUGIN...`](#vmdeploy-pluginsuninstall-plugin-2)
* [`vmdeploy plugins update`](#vmdeploy-plugins-update)

## `vmdeploy hello PERSON`

Say hello

```
USAGE
  $ vmdeploy hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/tush-tr/vmdeploy/blob/v0.0.0/dist/commands/hello/index.ts)_

## `vmdeploy hello world`

Say hello world

```
USAGE
  $ vmdeploy hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ vmdeploy hello world
  hello world! (./src/commands/hello/world.ts)
```

## `vmdeploy help [COMMANDS]`

Display help for vmdeploy.

```
USAGE
  $ vmdeploy help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for vmdeploy.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `vmdeploy plugins`

List installed plugins.

```
USAGE
  $ vmdeploy plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ vmdeploy plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `vmdeploy plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ vmdeploy plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ vmdeploy plugins add

EXAMPLES
  $ vmdeploy plugins:install myplugin 

  $ vmdeploy plugins:install https://github.com/someuser/someplugin

  $ vmdeploy plugins:install someuser/someplugin
```

## `vmdeploy plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ vmdeploy plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ vmdeploy plugins:inspect myplugin
```

## `vmdeploy plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ vmdeploy plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ vmdeploy plugins add

EXAMPLES
  $ vmdeploy plugins:install myplugin 

  $ vmdeploy plugins:install https://github.com/someuser/someplugin

  $ vmdeploy plugins:install someuser/someplugin
```

## `vmdeploy plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ vmdeploy plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ vmdeploy plugins:link myplugin
```

## `vmdeploy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ vmdeploy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ vmdeploy plugins unlink
  $ vmdeploy plugins remove
```

## `vmdeploy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ vmdeploy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ vmdeploy plugins unlink
  $ vmdeploy plugins remove
```

## `vmdeploy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ vmdeploy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ vmdeploy plugins unlink
  $ vmdeploy plugins remove
```

## `vmdeploy plugins update`

Update installed plugins.

```
USAGE
  $ vmdeploy plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
