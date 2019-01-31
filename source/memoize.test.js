import memoize from './memoize';

describe('Memoize function', () => {
    it('should the handler', () => {
        const handler = jest.fn();
        const memoizedHandler = memoize(handler);

        memoizedHandler();

        expect(handler).toBeCalled();
    });

    it('should use the arguments passed', () => {
        const handler = jest.fn();
        const memoizedHandler = memoize(handler);

        memoizedHandler(1, 2);

        expect(handler).toBeCalledWith(1, 2);
    });

    it('should use the handler and return its value', () => {
        const handler = jest.fn(() => "test value");
        const memoizedHandler = memoize(handler);

        const result = memoizedHandler();

        expect(result).toBe("test value");
    })
})
