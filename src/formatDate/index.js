function formatDate(time, format = 'yyyy-MM-dd hh:mm:ss') {
    if (!time) return null;
    let value = time;
    if (typeof value === 'number') {
        if (String(time).length < 10) {
            value = new Date().getTime();
        } else if (String(time).length === 10) {
            value = time * 1000;
        }
    }
    const date = new Date(value);
    const map = {
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        q: Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(),
    };
    return format.replace(/(y+|M+|d+|h+|m+|s+|q+|S+)/g, (all, tt) => {
        const t = tt.length > 1 ? tt[0] : tt;
        let v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = `0${v}`;
                v = v.substr(v.length - 2);
            }
            return v;
        } if (t === 'y') {
            return (String(date.getFullYear())).substr(4 - all.length);
        }
        return all;
    });
}

export {
    formatDate,
};
