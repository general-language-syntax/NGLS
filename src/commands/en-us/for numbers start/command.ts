import { ICommand } from "../../../command";

export interface ICommandArgs {
    end: string;
    name: string;
    start: string;
}

export class Command implements ICommand<ICommandArgs> {
    public render(args: ICommandArgs) {
        const { end, name, start } = args;

        return {
            lines: [
                [`for numbers start : ${name} number ${start} ${end}`],
            ],
        };
    }
}
