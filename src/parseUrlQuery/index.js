function parseUrlQuery(url) {
    const dealUrl = (url || globalThis.location.href);
    const search = dealUrl.substring(dealUrl.lastIndexOf('?') + 1);
    return search.split('&').reduce((obj, item) => {
        const res = obj;
        const arr = item.split('=');
        const key = arr[0];
        const value = arr[1];
        res[key] = value;
        return res;
    }, {});
}

export {
    parseUrlQuery,
};
