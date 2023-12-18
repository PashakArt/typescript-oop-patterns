import {Command} from './Command';

export class PushSendCommand extends Command {
    notify(): void {
        this.receiver.getNotified('Push message');
    }
}
