
<p align = "center" style="font-size: 32px;font-weight:bold;">
    UtilHub
</p>
<p align = "center">
    <strong>
        <a href="https://rapier.rs">Website</a> | <a href="https://rapier.rs/docs/">Npm</a> | <a href="https://rapier.rs/docs/">Github</a>
    </strong>
</p>

### 介绍
utilhub是一个大而全的工具函数库，维护团队会每周新增常用的工具函数，工具函数涵盖各个方面，比如
* 最基本的类型，isString
* Promise里经常用到的流程，sleep
* Dom操作相关，scrollSlowlyTo
* 文件操作，getFile
* 各行各类，应有尽有

### 为什么选择utilhub

* 🌊 海量：1000+ 海量的工具函数，涵盖各种场景(文件、浏览器、DOM...)
* 💪🏻 强壮：每个函数都有完整测试用例，代码覆盖率100%
* 🐴 升级：不断更新，这不是一个固定库，而是进化的库
* 💡 智能提示：每个函数皆有d.ts和jsdoc，保证引入后有最健全的智能提示
* 🍳 精简：每个函数皆可独立引入，按需引入
* 🤩 兼容：Babel护航
* ✅ 查询：提供优质文档，方便查询与引入
* 👌 规范：易用性，参数统一，让你写代码如德芙一样丝滑
* 👍🏻 性能：超快
* 🍓 全场景：浏览器、Node、小程序，只要你能用js你就能用上

### 安装
```
npm i utilhub -S-D
```

### 使用示例
esmodel 用法
``` js
import { sleep } from 'utilhub/sleep';

(async() => {
    await sleep(1000);
})();
```

commenjs 用法
``` js
const { sleep } = require('utilhub/sleep');

(async() => {
    await sleep(1000);
})();
```

### 更多工具函数
更多工具函数请通过网站查询。

### 升级
因为utilhub会不断升级，在你使用新的api时，请抱住你的库是最新的。
```
npm i
```

### 如何贡献代码
1. 方式一
   直接往issues 提供代码片段，我们将会进行整理后上传到项目库


2. 方式二
   克隆项目，拉取master分支，readme

