export enum LogLevel {
    Info = "info",
    Error = "error",
    Log = "log",
    Warning = "warn",
}

export class Log {
    public level: LogLevel;
    public message: string;

    constructor(level: LogLevel, message: string) {
        this.level = level;
        this.message = message;
    }

    /**
     * Converts the Log object to string
     */
    public stringify(): string {
        return `[${this.level}] ${this.message}`;
    }
}
