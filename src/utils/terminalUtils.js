const { exec } = require('child_process');

async function executeCommand(command, options = {}) {

    return new Promise((resolve, reject) => {
        exec(command, options, (error, stdout, stderr) => {
            if (error) {
                reject({ error, stderr });
            }
            resolve({ stdout, stderr });
        }
        );
    }
    );
}

module.exports = {
    executeCommand
};