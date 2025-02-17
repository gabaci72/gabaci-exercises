// function proclaim(status?: string) {
//   console.log(`I'm ${status || 'not ready...'}`);
// }
// proclaim();
// proclaim('ready?');
// proclaim('ready!');
function proclaim(status, repeat) {
    if (status === void 0) { status = 'not ready...'; }
    if (repeat === void 0) { repeat = 1; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm ".concat(status));
    }
}
proclaim();
proclaim('ready?');
proclaim('ready!', 3);
