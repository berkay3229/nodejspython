const { spawn } = require('child_process');

const pythonProcess = spawn('python', ['path/to/script.py']);

pythonProcess.stdout.on('data', (data) => {
  console.log(`Python betiğinin çıktısı: ${data}`);
});

pythonProcess.stderr.on('data', (data) => {
  console.error(`Python betiğinde hata: ${data}`);
});