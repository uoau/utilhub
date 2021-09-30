function httpsRedirect() {
    const { location } = window;
    if (location.protocol !== 'https:') {
        location.replace(`https://${location.href.split('//')[1]}`);
    }
}

export {
    httpsRedirect,
};
