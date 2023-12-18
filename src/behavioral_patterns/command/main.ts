import {CommandHistory} from './CommandHistory';
import {Notifier} from './Notifier';
import {Receiver} from './Receiver';
import {EMailSendCommand} from './commands/EMailSendCommand';

function main() {
    const receiver = new Receiver();
    const notifier = new Notifier();
    const commandHistory = new CommandHistory();

    const emailCommand = new EMailSendCommand(receiver);

    notifier.notify(emailCommand);
    commandHistory.add(emailCommand);
}

main();
