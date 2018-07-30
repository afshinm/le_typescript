export enum LogLevel {
    Info = "info",
}

export class Log {
    public level: LogLevel;
    public message: string;

    constructor(level: LogLevel, message: string) {
        this.level = level;
        this.message = message;
    }

    public stringify(): string {
        return `[${this.level}] ${this.message}`;
    }
}
