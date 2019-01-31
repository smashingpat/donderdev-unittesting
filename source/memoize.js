const memoize = (a) => {
    return (...args) => {
        return a(...args);
    }
};

export default memoize;