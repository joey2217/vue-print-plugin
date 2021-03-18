import Vue from 'vue'

class Print {
  dom: HTMLElement
  constructor(dom) {
    if (dom instanceof HTMLElement) {
      this.dom = dom
    } else if (dom instanceof Vue) {
      this.dom = dom.$el
    } else if (typeof dom === 'string') {
      this.dom = document.querySelector(dom)
    } else {
      // TODO
    }
    this.init()
  }
  init() {
    var style = this.getStyle()
    var html = this.dom.outerHTML
    var content = style + html
    this.iframePrint(content)
  }
  // 获取link 和 style
  getStyle() {
    var styleString = ''
    var styles = document.querySelectorAll('style,link')
    styles.forEach(function (style) {
      styleString += style.outerHTML
    })
    return styleString
  }
  // 通过 iframe 打印
  iframePrint(content) {
    var iframe = document.createElement('iframe')
    iframe.setAttribute('style', 'position:absolute;width:0;height:0;top:-100%;left:-100%;')
    var el = document.body.appendChild(iframe)
    var _window = el.contentWindow
    var _document = el.contentDocument || el.contentWindow.document
    _document.open()
    _document.write(content)
    _document.close()
    iframe.onload = function () {
      _window.print()
    }
  }
}


export default {
  install: function (Vue) {
    // 4. 添加实例方法
    Vue.prototype.$print = (dom) => new Print(dom)
  }
}
