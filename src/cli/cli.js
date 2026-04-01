#!/usr/bin/env node

const { Command } = require('commander');
const { getDistroInfo } = require("../agent/system");

const program = new Command();

program
    .name('agent-cli')
    .version('1.0.0')
    .description('A CLI for managing the agent server');

const os = program
    .command("os")
    .description("Commands related to the operating system");

os.command("info")
    .action(async () => {
        console.log("Listing machine info...");
        console.log(await getDistroInfo());
    });


program.parse(process.argv);