# Nightscout 2

## Description

Nightscout 2 (real name TBD) is a React based client designed to replace the UI associated with the current [nightscout/cgm-remote-monitor](https://github.com/nightscout/cgm-remote-monitor) project. The project will attempt to improve on the usability of the current UI while also making the code more accessable for collaboration from developers familiar with React.js.

The project relies heavily on the amazing work done by countless contributors to the Nightscout projects. It also build on top of the [CoreUI React project](https://coreui.io/react/).

## Requirements

For development, you will need Node.js and npm to get started.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

Placeholder

    $ git clone https://github.com/ORG/PROJECT.git
    $ cd PROJECT
    $ npm install

### Configure app

Placeholder

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull
