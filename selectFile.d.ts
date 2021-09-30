/**
 * @param {object} options
 * @param {string} options.accept Optional file types
 * @param {boolean} options.multiple Select multiple files
 * @param {string} options.capture The device
 * @name selectFile
 */
export function selectFile(options: {
    accept: string,
    multiple: boolean,
    capture: any,
}): Promise<srray>
