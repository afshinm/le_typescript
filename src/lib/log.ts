export enum LogLevel {
    Info = "info",
    Error = "error",
    Log = "log",
    Warning = "warn",
}

export class Log {
    public readonly level: LogLevel;
    public readonly message: string;

    constructor(level: LogLevel, message: string) {
        this.level = level;
        this.message = message;
    }

    /**
     * Converts the Log object to string
     */
    public stringify = () => `[${this.level}] ${this.message}`;
}
