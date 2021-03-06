#!/usr/bin/env node

// const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const program = require('commander');
const { exec } = require('child_process');
// const path = require('path');
const util = require('util');
const execAsync = util.promisify(exec);
const checkWorkspace = require('../src/utlis/checkWorkspace');
// const { getLatestVersion } = require('../src/utlis/getVersions');
// const { versionCompare } = require('../src/utlis');
const webpackBuildConfig = require('../build/webpack.component');
const webpack = require('webpack');


async function build(conf) {
    return new Promise((resolve, reject) => {
        webpack(conf, (err, stats) => {
            if (err || stats.hasErrors()) {
                console.error(err || stats);
                // 在这里处理错误
                return reject(err);
            }
            // 处理完成
            resolve();
        });
    });
}

checkWorkspace(() => {
    program
        .description('build custom fields or blocks')
        .name('ams build')
        .usage('[name]')
        .action(async (name, options) => {
            let spinner;

            try {
                // let components = require(path.join(process.cwd(), './components.json'));
                let components = require('../src/utlis/get-packages')();
                // const publishs = [];
                if (typeof name === 'string') {
                    if (components[name]) {
                        components = { [name]: components[name] };
                        console.log(`building ${name}`);
                    } else if (components[`block-${name}`]) {
                        components = { [`block-${name}`]: components[`block-${name}`] };
                        console.log(`building block-${name}`);
                    } else if (components[`field-${name}`]) {
                        components = { [`field-${name}`]: components[`field-${name}`] };
                        console.log(`building field-${name}`);
                    }
                }
                spinner = ora(`start building`).start();
                // await execAsync(`git pull && npm i`);
                // spinner.succeed('update workspace succeed');

                // // 依此打包
                for (let key in components) {
                    if (components.hasOwnProperty(key)) {
                        const componet = components[key];
                        const componetVersion = `${key}@${componet.version}`;

                        // console.log(pkg, componetVersion);

                        await execAsync(`cd packages/${key} && npm i`);

                        // console.log(webpackBuildConfig(key))
                        await build(webpackBuildConfig(key));

                        spinner.succeed(`build ${componetVersion} succeed`);
                    }
                }
            } catch (e) {
                spinner && spinner.fail('build fail');
                console.log(chalk.red(`ams ERR: ${e}`));
            }
        });

    program.parse(process.argv);
});
