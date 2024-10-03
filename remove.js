const fs = require('fs');
const path = require('path');
const logsDir = path.join(process.cwd(), 'Logs');

function removeLogs() {
  if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);
    
    files.forEach(file => {
      const filePath = path.join(logsDir, file);
      fs.unlinkSync(filePath);
      console.log(`Deleted file: ${file}`);
    });
    
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed');
  } else {
    console.log('Logs directory does not exist.');
  }
}

removeLogs();
