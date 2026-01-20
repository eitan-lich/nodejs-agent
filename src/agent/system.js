const pkg = require("../../package.json");
const { executeCommand } = require("../utils/terminalUtils");
const { LINUX_COMMANDS } = require("../constants/linuxCommands");

function getAgentVersion() {
    return pkg.version;
}

async function getDiskSpace() {
    try {
        const { stdout } = await executeCommand(LINUX_COMMANDS.GET_DISK_SPACE);
        return stdout;
    } catch (error) {
        throw new Error(`Failed to get disk space: ${error.message}`);
    }
}

async function getDistroInfo() {
    try {
        const { stdout } = await executeCommand(LINUX_COMMANDS.GET_DISTRO_INFO);
        return stdout;
    }
    catch (error) {
        throw new Error(`Failed to get distro info: ${error.message}`);
    }
}

async function listProcesses() {
    try {
        const { stdout } = await executeCommand(LINUX_COMMANDS.LIST_PROCESSES);
        return stdout;
    }
    catch (error) {
        throw new Error(`Failed to list processes: ${error.message}`);
    }
}

async function getEnvVariables() {
    try {
        return process.env;
    } catch (error) {
        throw new Error(`Failed to get environment variables: ${error.message}`);
    }
}

module.exports = {
    getAgentVersion,
    getDiskSpace,
    getDistroInfo,
    listProcesses,
    getEnvVariables
}