import openSocket from 'socket.io-client';
import { API_ROOT } from '../__data__/constatnts'

let socket;
socket = openSocket(`${API_ROOT}:5000`);



export function subscribeToMessage(cb) {
    socket.on('message', message => cb(null, message));
}

export function sendToMessage(name, text, datetime) {
    socket.emit('message', { name, text, datetime });
}
