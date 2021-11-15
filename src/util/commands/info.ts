import Command from '../Command';
import { CommandReturnInfo } from '../data/CommandReturnInfo';

export default class InfoCommand extends Command {
  constructor() {
    super('info', '[command]');
  }

  run(args: string[], inputPath: string): CommandReturnInfo {
    return {
      output: `hi this is ${this.name}`,
      path: inputPath,
    };
  }
}
