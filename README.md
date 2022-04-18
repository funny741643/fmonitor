# PerformanceObserver()

使用给定的观察者callback生成一个新的PerformanceObserver对象。当通过 observe() 方法注册的条目类型的性能条目事件被记录下来时，调用该观察者回调。

```
var observer = new PerformanceObserver(callback);
```

callback: 观察的性能事件被记录时调用 `PerformanceObserverCallback`回调。调用回调时，其第一个参数是**性能观察条目列表**，第二个参数是观察者对象。

## PerformanceObserver.observe()

性能监测对象的observe()方法用于观察传入的参数中指定的性能条目类型的集合。当记录一个指定类型的性能条目时，性能监测对象的回调函数将会被调用。

```
observer.observe(options)
```

option: 一个只装单个键值对的对象，该键值对的键名规定为entryTypes。entryTypes的取值要求如下：

* entryTypes的值：一个放字符串的数组，字符串的有效值取值为性能条目类型。如果其中的某个字符串取的值无效，浏览器会自动忽略它。
* 若未传入options实参，或传入的options实参为空数组，会抛出TypeError。

## PeformanceObserver.disconnect()

用于阻止性能观察者接收任何性能条目事件

# back-forward cache(bfcache)

## 概念

bfcache也可称为往返缓存，可以在用户使用浏览器的后退和前进按钮时加快页面的转换速度。这个缓存不仅保存页面数据，还保存DOM和JS的状态，实际上是整个页面都保存在内存里。如果页面位于bfcache中，那么再次打开该页面就不会触发onload事件。

## pageshow事件

pageshow事件在页面呈现的时候触发，类似于onload事件，但是onload事件是在文档加载完毕的时候触发，如果页面是从浏览器缓存中读取时不会触发；pageshow事件则是每次加载页面时都触发。

## pagehide事件

该事件会在用户离开页面时触发。离开页面有多种方式。如点击一个跳转链接，刷新页面，提交表单，关闭浏览器等。pagehide 事件与 unload 事件 unload类似，但是如果离开页面时页面进入了缓存则不会触发 unload 事件, 同理，unload 事件触发后无法缓存页面。

## persisted属性

pageshow 事件和 pagehide 事件的 event 对象还包含一个名为 persisted 的布尔值属性。对于 pageshow 事件，如果页面是从 bfcache 中加载的，则这个属性的值为true；否则，这个属性的值为false。对于 pagehide 事件，退出页面之后，如果页面被保存在 bfcache 中，则这个属性的值为true；否则，这个属性的值为false。

## meta标签，清除页面

```
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

# DOMContentLoaded, load事件

当纯HTML被完全加载以及解析时， DOMContentLoaded事件会被触发，不用等待css, img, iframe加载完。

当整个页面及所有依赖资源如样式表和图片都已完成加载时， 将触发load 事件

# MutationObserver.MutationObserver()

## 概念

DOM规范中的MutationObserver()构造函数-是MutationObserver接口内容的一部分--创建并返回一个新的观察器，它会在触发指定DOM事件时，调用指定的回调函数。

MutationObserver 对 DOM 的观察不会立即启动；而必须先调用 observe() 方法来确定，要监听哪一部分的 DOM 以及要响应哪些更改。

## 示例

```
var targetNode = document.querySelector("#someElement");
var observerOptions = {
  childList: true,  // 观察目标子节点的变化，是否有添加或者删除
  attributes: true, // 观察属性变动
  subtree: true     // 观察后代节点，默认为 false
}

var observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);
```

1. 获取目标节点树targetNode
2. 设定观察者选项observerOptions
3. 指定callback进行observer实例化。
4. 使用observe()对指定的DOM节点进行观察
5. 从现在开始直到调用 disconnect() ，每次以 targetNode 为根节点的 DOM 树添加或移除元素时，以及这些元素的任意属性改变时，callback() 都会被调用。

在来看下callback函数

```
function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    switch(mutation.type) {
      case 'childList':
        /* 从树上添加或移除一个或更多的子节点；参见 mutation.addedNodes 与
           mutation.removedNodes */
        break;
      case 'attributes':
        /* mutation.target 中某节点的一个属性值被更改；该属性名称在 mutation.attributeName 中，
           该属性之前的值为 mutation.oldValue */
        break;
    }
  });
}
```

callback是一个回调函数。每当被指定的节点或子树以及配置项有Dom变动时会被调用。回调函数拥有两个参数：
1. 描述所有被触发改动的 MutationRecord 对象数组
2. 调用该函数的MutationObserver 对象。

## MutationRecord

每个MutationRecord都代表一个独立的DOM变化

[MutationRecord对象属性列表参考](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationRecord)

# 浏览器视口

![](https://www.runoob.com/wp-content/uploads/2021/10/L0hUTUw15byA5Y-R5paH5qGjL2ltYWdlcy9Dc3NCb3hNb2RlbC5wbmc.png)