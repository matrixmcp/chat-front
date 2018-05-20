import openSocket from 'socket.io-client';
import { API_ROOT } from '../__data__/constatnts'

let socket;
if (process.env.NODE_ENV === 'production'){
   socket = openSocket(`${API_ROOT}:5000`);
}
else {
    socket = openSocket('http://localhost:5000');
}

export function subscribeToMessage(cb) {
    socket.on('message', message => cb(null, message));
}

export function sendToMessage(name, text, datetime) {
    socket.emit('message', { name, text, datetime });
}
