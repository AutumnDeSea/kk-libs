// 读取运行命令的参数
const minimist = require('minimist');
const rawArgs = process.argv.slice(2);
const args = minimist(rawArgs);
const path = require('path');
// 美化
const figlet = require('figlet');
const versionStr = figlet.textSync('KK Lib');
// 美化
const Printer = require('@darkobits/lolcatjs');
let rootDir = path.resolve(__dirname, '../');
const ora = require('ora');
if (args.p) {
  rootDir = rootDir + '/packages/' + args.p;
  const _version = require(rootDir + '/package.json').name;
  console.log(
    Printer.fromString(`${_version} test cases \n${versionStr}`)
  );
}
const jestArgs = ['--runInBand', '--rootDir', rootDir];
const spinner = ora(`\n ⏰ ===> running: jest ${jestArgs.join(' ')}`);
spinner.start();
require('jest').run(jestArgs);
spinner.stop();
