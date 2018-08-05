import openSocket from 'socket.io-client';
import { API_ROOT } from '../__data__/constatnts'

let socket;
socket = openSocket(`${API_ROOT}`);

export function subscribeToMessagesHistory(cb) {
    socket.on('messagesHistory', messages => cb(null, messages));
}

export function subscribeToMessage(cb) {
    socket.on('message', message => cb(null, message));
}

export function sendToMessage(userName, text) {
    socket.emit('message', { userName, text });
}
