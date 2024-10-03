const fs = require('fs');
const path = require('path');
const logsDir = path.join(process.cwd(), 'Logs');

function createLogs() {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created');
  } else {
    console.log('Logs directory already exists');
  }
  
  process.chdir(logsDir);
  
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(`Created file: ${fileName}`);
  }
}

createLogs();
