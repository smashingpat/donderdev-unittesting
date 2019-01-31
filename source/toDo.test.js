import createTodo from './todo.js';


jest.mock('./random.js', () => {
    let count = 0;
    return () => {
        count += 0.001;
        return count;
    }
})

describe('createTodo', () => {
    it('should create a todo', () => {
        const todoItem = createTodo();

        expect(todoItem).toMatchSnapshot();
    });

    it('should create a todo with text as the argument', () => {
        const result = createTodo('write a test')
        expect(result.text).toBe('write a test');
    });

    it('should create a random id', () => {
        const result = createTodo('write a test');
        const result2 = createTodo('write another test');

        expect(result.id).not.toBe(result2.id);
    });
});