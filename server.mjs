import { createConsoleApp } from '@wingconsole/app';

const server = await createConsoleApp({
  wingfile: 'index.w',
});

console.log(`Server is running on http://localhost:${server.port}.`);
