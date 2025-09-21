const EventEmitter = require("events");

const emitter = new EventEmitter();

// Listener
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit event
emitter.emit("greet", "Hassan");
