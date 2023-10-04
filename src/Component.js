const { Terminal } = require('xterm');
const { fit } = require('xterm/lib/addons/fit');
const { AttachAddon } = require('xterm-addon-attach');

class Component {
  constructor() {
    this.terminal = new Terminal();
    this.terminal.loadAddon(fit);
  }

  attachTo(webSocket) {
    const attachAddon = new AttachAddon(webSocket);
    this.terminal.open(document.getElementById('terminal-container'));
    this.terminal.loadAddon(attachAddon);
  }
}

module.exports = Component;
