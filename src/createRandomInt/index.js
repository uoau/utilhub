function createRandomInt(min, max) {
    const random = min + Math.floor(Math.random() * (max - min + 1));
    return random;
}

export {
    createRandomInt,
};
