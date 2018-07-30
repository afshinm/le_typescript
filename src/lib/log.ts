export enum LogLevel {
    Info = "info",
}

export class Log {
    public level: LogLevel;

    constructor(level: LogLevel) {
        this.level = level;
    }

    public stringify(): string {
        return this.level;
    }
}
