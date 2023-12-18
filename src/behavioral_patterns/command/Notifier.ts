import {Command} from './commands/Command';

export class Notifier {
    notify(command: Command) {
        command.notify();
    }
}
