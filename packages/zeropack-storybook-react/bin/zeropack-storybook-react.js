#!/usr/bin/env node

const path = require('path');
const { exec } = require('child_process');
let binPath = 'node ' + path.resolve(require.resolve('@storybook/react'), '..', '..', 'server', 'index.js');
binPath = binPath + ' -p 9001 -c ' + path.resolve(require.resolve('../storybook-config/config.js'), '..')
let sbServer = exec(binPath);
console.log(binPath);
sbServer.stdout.pipe(process.stdout);
sbServer.stderr.pipe(process.stderr);
