import Command from '../Command';
import { CommandReturnInfo } from '../CommandReturnInfo';

export default class CurlCommand extends Command {
  constructor() {
    super(`asd
    asdasd
    asd
    asd
    asd
    `, 'curl');
  }

  run(args: string[], inputPath: string): CommandReturnInfo {
    this._commandParser.args = args;
    const method = this._commandParser.option('request').alias('-X').value;
    return {
      output: `method is ${method}`,
      path: inputPath,
    };
  }
}
