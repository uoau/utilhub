function selectFile(options) {
    return new Promise((resolve) => {
        const defaultOptions = {
            accept: '*',
            multiple: false,
            capture: '',
        };
        const { accept, multiple, capture } = { ...defaultOptions, ...(options || {}) };
        // Create a input element.
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = accept;
        input.capture = capture;
        input.multiple = multiple;
        input.addEventListener('change', () => {
            resolve(Array.prototype.slice.call(input.files) || []);
        });
        // click it
        setTimeout(() => {
            const event = new MouseEvent('click');
            input.dispatchEvent(event);
        }, 0);
    });
}

export {
    selectFile,
};
