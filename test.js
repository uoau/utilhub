import { EventEmitter } from './src/EventEmitter';
import { chunkArray } from './src/chunkArray';

const e = new EventEmitter();

e.on('close', () => {

});

e.emit('close', 123, 123, 444);

chunkArray();
