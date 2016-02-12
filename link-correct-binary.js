
var fs = require('fs');
var join = require('path').join;

var ARM_ARCH_MATCHER = /CPU architecture[ ]*:[ ]*([0-9])/i;

if (process.platform === 'darwin') {
  link('osx');
}

if (process.arch === 'arm') {
  var arch = armArch();
  if (arch === 7) {
    link('arm7');
  }
}

console.error('Broker is not pre-compiled for your platform :-(');
fail();

function link(version) {
  var name = 'broker-' + version;
  console.log('Linking broker binary for ', name);
  var target = join(__dirname, 'binaries', name);
  var link = join(__dirname, 'broker');
  fs.symlinkSync(target, link);
  ok();
}

function fail() {
  process.exit(1);
}

function ok() {
  process.exit(0);
}

function armArch() {
  var contents = fs.readFileSync('/proc/cpuinfo', {
    encoding: 'utf8'
  });
  return contents ? parseArch(contents) : null;
}

function parseArch(contents) {
  var matches = ARM_ARCH_MATCHER.exec(contents);
  if (matches && matches[1]) {
    return isNaN(parseInt(matches[1])) ? null : parseInt(matches[1]);
  }
}
