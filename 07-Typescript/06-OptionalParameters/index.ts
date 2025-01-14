// function proclaim(status?: string) {
//   console.log(`I'm ${status || 'not ready...'}`);
// }

// proclaim();
// proclaim('ready?');
// proclaim('ready!');

function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}



proclaim();
proclaim('ready?');
proclaim('ready!', 3);