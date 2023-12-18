import {Command} from './Command';

export class SmsSendCommand extends Command {
    notify(): void {
        this.receiver.getNotified('Sms message');
    }
}
