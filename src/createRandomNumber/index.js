function createRandomNumber(start, end) {
    const random = start + Math.floor(Math.random() * (end - start + 1));
    return random;
}

export {
    createRandomNumber,
};
