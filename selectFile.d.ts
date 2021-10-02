/**
 * @name 使用 js 直接选择文件
 * @param {object} options 配置
 * @param {string} options.accept 接受的文件类型
 * @param {boolean} options.multiple 是否可多选文件
 * @param {string} options.capture 设备信息，主要用于移动设备
 */
export function selectFile(options: {
    accept: string,
    multiple: boolean,
    capture: any,
}): Promise<Array>
