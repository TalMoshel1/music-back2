// const { execSync } = require('child_process');
import {execSync} from 'child_process'

function runBuildScript() {
  console.log('Running build script...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('Build script completed successfully.');
  } catch (error) {
    console.error('Error running build script:', error);
    process.exit(1);
  }
}

runBuildScript();