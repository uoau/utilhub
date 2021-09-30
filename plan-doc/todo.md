#### 待开发功能
* 根据分类获取函数 ✅
* 将readme做为首页 ✅
* 指定一套函数命名规则、参数规则
* 页面需要RUN按钮，查看运行结果 ✅
* LOGO ✅
* 详情页换页旧内容清空 ✅
* 完成介绍页
* 整体格式对齐

#### 处理完成的
数组
| 分类 | 函数名 | 备注 | 完成情况|
| --- | --- | --- | --- |
| array | chunkArray | 数组分块 | ✅ |
| array | shuffleArray | 数组乱序 | ✅ |
| array | uniqArray | 数组去重 | ✅ |
| date | formatDate | 日期格式化 | ✅ |
| path | parseUrlQueray | 解析url参数 | ✅ |
| browser | selectFile | 选择文件 | ✅ |

#### 待处理的
| 分类 | 函数名 | 备注 | 完成情况|
| --- | --- | --- | --- |
| type | isString |  |  |
| type | isBoolean |  |  |
| type | isNumber |  |  |
| type | isNull |  |  |
| type | isString |  |  |
| type | isObejct |  |  |
| type | isArray |  |  |
| array | chunk | 将数组切成一捆一捆 |  |
| array |  | 数组去重 |  |
| array |  | 数组去重 |  |
| array |  | 将数组乱序 |  |
| array |  | 数组去重 |  |
| array |  | 数组扁平化 |  |
| array |  | 数组去重 |  |
| object |  | 深拷贝 |  |
| object |  | 参数合并？ |  |
| number |  | 获取随机数 |  |
| dom |  | 获取某个dom的css样式 |  |
| dom |  | 插入html代码 |  |
| dom | getDomSibling | 获取兄弟节点 |  |
| dom | getDomParent | 获取最近的一个父级节点 |  |
| dom | getDomChild | 获取子级节点 |  |
| dom |  | 判断是否有父级节点 |  |
| dom |  | 判断是否有兄弟节点 |  |
| dom |  | 判断是否有子级节点 |  |
| dom |  | 通过dom获取Xpath |  |
| dom |  | 通过Xpath获取dom |  |
| dom |  | 事件委托 |  |
| dom |  | 取消事件委托 |  |
| dom |  | 添加class | 官方已有 |
| dom |  | 删除class | 官方已有 |
| http |  | fetch | 封装fetch |
| number |  | toFixed | 保留几位小数 |
| number |  |  | 金额处理，千分位、保留小数 |
| date |  |  | 日期格式化 |
| date |  |  | 几秒前、几分前、几天前、几年前 |
| dom |  |  | 解析html标签 |
| promise |  |  | promise串联执行 |
| url |  |  | 获取url参数 |
| secret |  |  | 生成uuid |
| secret |  |  | 生成短ID |
| browser |  |  | 浏览器版本 |
| os |  |  | 获取系统版本 |
| file |  |  | 获取文件真实类型 |
| browser |  |  | 全角和半角的转换 |
| regexp |  |  | 判断是否为网络连接 |
| regexp |  |  | 判断是否为邮箱 |
| regexp |  |  | 判断是否为手机号 |
| regexp |  |  | 判断是否为网络连接 |
| http |  | post |  |
| http |  | post |  |
| math |  | 判断URL是http还是https |  |
| math |  | 提取系统目录 |  |
| math |  | 获取数组最大值 |  |
| math |  | 获取数组最大值 |  |

### 备案
删除obj里的key
使用字符串访问属性值    get(obj, 'extra.name');
删除url里的参数并且不刷新
缓动
/**
 * 平滑滚动到页面顶部
 *
 */
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
    }
}


获取cookie
截取字符串并自动加省略号

url 转 Image 对象
Image 对象 转 Base64
capitalize：首字母大写
const capitalize = cached(function (str){
    return str.charAt(0).toUpperCase() + str.slice(1)
})

1. distance：返回两点间的距离
2. httpsRedirect：HTTP 跳转 HTTPS
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};


金钱格式化
export const formatMoney = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

几分钟之前
/**
 * 时间戳转换成什么之前
 *
 * @param {Number} times 时间戳
 * @return {String} 返回结果，timeAgoLabel(1606273724459) 输出：刚刚
 *
 */
export const timeAgoLabel = times => {
  let nowTimes = new Date().getTime()
  let diffSecond = (nowTimes - times) / 1000
  let agoLabel = ''
  if (diffSecond < 60) {
    agoLabel = '刚刚'
  } else if (diffSecond < 60 * 60) {
    agoLabel = Math.floor(diffSecond / 60) + '分钟前'
  } else if (diffSecond < 60 * 60 * 24) {
    agoLabel = Math.floor(diffSecond / 3600) + '小时前'
  } else if (diffSecond < 60 * 60 * 24 * 30) {
    agoLabel = Math.floor(diffSecond / (3600 * 24)) + '天前'
  } else if (diffSecond < 3600 * 24 * 30 * 12) {
    agoLabel = Math.floor(diffSecond / (3600 * 24 * 30)) + '月前'
  } else {
    agoLabel = Math.floor(diffSecond / (3600 * 24 * 30 * 12)) + '年前'
  }
  return agoLabel
}

生成uuid


树处理

数组比对

生成

防抖

节流

lastIndexOf 最后一个

nth 获取数组

下载文件

toFixed 更安全的

uuid

isEmoji

动态载入js css

并发控制

promise 并发控制器


