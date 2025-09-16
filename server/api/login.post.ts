import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password, com = 'tony88', customDomain = '1' } = body;

    const args = [
    '--location',
    'https://tony99sgd.com/postprocv2.php',
    '--header', 'accept: */*',
    '--header', 'content-type: application/x-www-form-urlencoded; charset=UTF-8',
    '--header', 'Cookie: PHPSESSID=218edb1614d4416737c83d8b85656141',
    '--data-urlencode', `Username=${username}`,
    '--data-urlencode', `Password=${password}`,
    '--data-urlencode', `Com=${com}`,
    '--data-urlencode', `CustomDomain=${customDomain}`,
  ];

   const { stdout, stderr } = await execFileAsync('curl', args);
    if (stderr) console.warn('curl stderr:', stderr);
    return stdout;
});
