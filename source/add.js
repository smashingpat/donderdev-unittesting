export const add = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error();
    }
    return a + b
};
