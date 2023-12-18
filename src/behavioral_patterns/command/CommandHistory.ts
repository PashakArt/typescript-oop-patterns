import {Command} from './commands/Command';

export class CommandHistory {
    private history: Command[] = [];

    getHistory() {
        return this.history;
    }

    add(command: Command) {
        this.history.push(command);
    }

    remove() {
        this.history.pop();
    }
}
