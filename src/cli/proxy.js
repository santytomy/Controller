const BaseCLIHandler = require('./base-cli-handler')

class Proxy extends BaseCLIHandler {
  constructor() {
    super()

    this.commandDefinitions = [
      { name: 'command', defaultOption: true, description: 'add, remove, update, list', group: 'command', },
      { name: 'username', alias: 'u', type: String, description: 'Proxy username', group: ['add', 'update'] },
      { name: 'password', alias: 'p', type: String, description: 'Proxy password', group: ['add', 'update'] },
      { name: 'host', alias: 's', type: String, description: 'Proxy host address', group: ['add', 'update', 'remove'] },
      { name: 'rsa-key', alias: 'k', type: String, description: 'Proxy RSA key', group: ['add', 'update'] },
      { name: 'port', alias: 'o', type: Number, description: 'Proxy port', group: ['add', 'update'] },
    ]
  }

  run(args) {
    const proxyCommand = this.parseCommandLineArgs(this.commandDefinitions, { argv: args.argv })

    switch (proxyCommand.command.command) {
      case 'help':
        return this.help(
          [
            {
              header: 'Usage',
              content: '$ fog-controller proxy <command> <options>'
            },
            {
              header: 'Command List',
              content: [
                { name: 'add', summary: 'Display help information about Git.' },
                { name: 'update', summary: 'Record changes to the repository.' },
                { name: 'remove', summary: 'Print the version.' },
              ],
            },
            {
              header: 'add',
              optionList: this.commandDefinitions,
              group: ['add'],
            },
            {
              header: 'remove',
              optionList: this.commandDefinitions,
              group: ['remove'],
            },
            {
              header: 'update',
              optionList: this.commandDefinitions,
              group: ['update'],
            },
          ]
        )
    }
  }
}

module.exports = new Proxy()