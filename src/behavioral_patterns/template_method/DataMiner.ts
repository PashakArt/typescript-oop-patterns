import * as fs from 'fs';

/**
 * Abstract class defines steps of algorithm and contains template method containing calls to those steps.
 * Steps can be either abstract or contain implementation.
 */
export abstract class DataMiner {
    mine(path: string) {
        const file = this.openFile(path);

        const parsedData = this.parseFile(file);

        const isCorrectData = this.analyzeData(parsedData);

        this.sendReport(isCorrectData);
    }

    openFile(path: string): Buffer {
        return fs.readFileSync(path);
    }

    abstract parseFile(file: Buffer): string;

    /**
     * Emulate data analysis
     */
    analyzeData(rawData: string): boolean {
        return rawData.includes('a');
    }

    sendReport(isCorrectData: boolean): void {
        // send analized data
    }
}
