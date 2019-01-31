import random from './random';

export default function createTodo(text = '') {
    return {
        id: Math.ceil(random() * 1e10),
        status: true,
        text,
    }
}