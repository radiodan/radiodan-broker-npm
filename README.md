radiodan-broker for NPM
===

This is a super-simple wrapper to make installing pre-compiled binaries of the [radiodan-broker](https://github.com/radiodan/broker) easier via NPM.

Install
---

**NB:** You'll also need to install the zeromq library bindings (4.x) using your platforms installer.

Use NPM to install `radiodan-broker`.

### Global system installation:

    sudo npm install -g radiodan-broker

The broker will be available on your system by running the command:

    radiodan-broker

## Local project installation:

    npm install --save radiodan-broker

The broker will be available in your project:

    ./node_modules/.bin/radiodan-broker


Supported platforms
---

The NPM package uses an `install` hook script to symlink the correct broker binary for your CPU architecture.

Currently supported:

- OS X
- ARM7 (Raspberry Pi 2)
