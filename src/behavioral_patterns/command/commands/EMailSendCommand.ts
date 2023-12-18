import {Command} from './Command';

export class EMailSendCommand extends Command {
    notify(): void {
        this.receiver.getNotified('EMail message');
    }
}
