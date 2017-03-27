# css-draw

Awesome icon for modern webapps drawed by css.

## Base icons

* circle
* rect
* trangle
* leftArrow
* rightArrow
* plus
* minus
* heart
* solidHeart
* navLeft
* navRight
* close
* rectCircle
* envelope
* pencil
* glass
* search
* asterisk

## Usage

* html
```html
<i data-icon='circle' class="css-icon"></i>
```

* javascript
```js
cssDraw.render();
```

## API

* `render`
* `extend`


* `npm install`
* `npm run dev`

## 中文说明
提供一种更为高效便捷的 webapp 图形动画处理解决方案。

* 矢量图标
* 矢量图标动画处理

当前主流的图标解决方案主要有：
* png 图标
* 字体类解决方案

存在的问题：
* png 图标
 	* 不同尺寸需准备不同大小的图片
	* 增加 http 请求数目(base64 可以弥补这个问题，但需要相应的工具处理)
	* 可定制性差，png 图标一般由 UI 给出，FE 不能做进一步的处理，如更改颜色，增加动画
* 字体类解决方案
	* 体积过大，影响页面加载性能
	* 加工难度大，无论是制作还是二次加工字体库成本都比较大
	* 难以做到按需加载
	* 大小受字体类型的影响，精度有误差

目前探索的替代方案，纯 css 图标解决方案 css-draw.js。

优点：
* 轻量级
* 简单性
* 上手成本低
* 加工处理简单
* 按需引用
* css 动画效果

如何使用？
示例：
1.动态渲染
`
<i data-icon='solidHeart' class="css-icon"></i>
`
上诉方式需引入 css-draw.js 文件在客户端进行动态渲染。
2.静态渲染

样式控制：
通过 css 可控制图标大小以及颜色。
`
.css-icon {
      font-size: 14px;
      color: #000000;
}
`
