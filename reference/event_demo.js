const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter{}

//Init object
const mtEmitter = new MyEmitter()

//Event Listener
mtEmitter.on('event',() => console.log('Event Fired!'))

//Init Event
mtEmitter.emit('event')
