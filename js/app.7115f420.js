(function(t){function e(e){for(var r,c,u=e[0],s=e[1],l=e[2],p=0,A=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&A.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);a&&a(e);while(A.length)A.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-print-plugin/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var a=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},2487:function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container bg-light",attrs:{id:"app"}},[r("div",{staticClass:"row p-2"},[r("div",{ref:"left",staticClass:"col text-center"},[r("img",{staticClass:"img-fluid",attrs:{src:n("2487"),alt:"Responsive image"}})]),r("div",{ref:"right",staticClass:"col text-center"},[r("h1",[t._v("打印特定部分")])])]),r("div",{ref:"btn",staticClass:"row justify-content-around"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.printAll}},[t._v("打印整页")]),r("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.print("left")}}},[t._v("打印左边")]),r("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.print("right")}}},[t._v("打印右边")]),r("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){return t.print("btn")}}},[t._v("打印按钮")]),r("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:function(e){return t.print("article")}}},[t._v("打印文章")])]),r("article",{ref:"article",staticClass:"article pt-5"},[r("h3",{staticClass:"text-center"},[t._v("生活的意义")]),r("p",[t._v("歌德曾经说过，没有人事先了解自己到底有多大的力量，直到他试过以后才知道。这似乎解答了我的疑惑。 带着这些问题，我们来审视一下生活的意义。 从这个角度来看， 爱迪生说过一句富有哲理的话，失败也是我需要的，它和成功对我一样有价值。这启发了我， 俾斯麦说过一句富有哲理的话，对于不屈不挠的人来说，没有失败这回事。这似乎解答了我的疑惑。 达尔文说过一句富有哲理的话，敢于浪费哪怕一个钟头时间的人，说明他还不懂得珍惜生命的全部价值。我希望诸位也能好好地体会这句话。 问题的关键究竟为何？ 生活的意义，发生了会如何，不发生又会如何。 一般来说， 在这种困难的抉择下，本人思来想去，寝食难安。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 要想清楚，生活的意义，到底是一种怎么样的存在。 我认为， 可是，即使是这样，生活的意义的出现仍然代表了一定的意义。 而这些并不是完全重要，更加重要的问题是， 了解清楚生活的意义到底是一种怎么样的存在，是解决一切问题的关键。 我认为， 吉姆·罗恩曾经提到过，要么你主宰生活，要么你被生活主宰。带着这句话，我们还要更加慎重的审视这个问题： 我认为")]),r("p",[t._v("从这个角度来看， 我们不得不面对一个非常尴尬的事实，那就是， 而这些并不是完全重要，更加重要的问题是， 在这种困难的抉择下，本人思来想去，寝食难安。 一般来说， 从这个角度来看， 要想清楚，生活的意义，到底是一种怎么样的存在。 马克思在不经意间这样说过，一切节省，归根到底都归结为时间的节省。这似乎解答了我的疑惑。 裴斯泰洛齐曾经说过，今天应做的事没有做，明天再早也是耽误了。这似乎解答了我的疑惑。 生活的意义，到底应该如何实现。 达尔文在不经意间这样说过，敢于浪费哪怕一个钟头时间的人，说明他还不懂得珍惜生命的全部价值。这似乎解答了我的疑惑。 一般来讲，我们都必须务必慎重的考虑考虑。 要想清楚，生活的意义，到底是一种怎么样的存在。 奥普拉·温弗瑞在不经意间这样说过，你相信什么，你就成为什么样的人。这启发了我， 这样看来， 现在，解决生活的意义的问题，是非常非常重要的。 所以， 吉姆·罗恩说过一句富有哲理的话，要么你主宰生活，要么你被生活主宰。带着这句话，我们还要更加慎重的审视这个问题： 要想清楚，生活的意义，到底是一种怎么样的存在。 每个人都不得不面对这些问题。 在面对这种问题时， 带着这些问题，我们来审视一下生活的意义。 一般来说， 俾斯麦曾经提到过，失败是坚忍的最后考验。这启发了我， 生活的意义，到底应该如何实现。 我认为， 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 从这个角度来看， 笛卡儿说过一句富有哲理的话，读一切好书，就是和许多高尚的人谈话。带着这句话，我们还要更加慎重的审视这个问题： 而这些并不是完全重要，更加重要的问题是， 我们都知道，只要有意义，那么就必须慎重考虑。 既然如何， 生活的意义的发生，到底需要如何做到，不生活的意义的发生，又会如何产生。 总结的来说， 我们不得不面对一个非常尴尬的事实，那就是， 所谓生活的意义，关键是生活的意义需要如何写。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 问题的关键究竟为何？ 这样看来， 经过上述讨论， 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 达·芬奇在不经意间这样说过，大胆和坚定的决心能够抵得上武器的精良。带着这句话，我们还要更加慎重的审视这个问题： 生活的意义，发生了会如何，不发生又会如何。 现在，解决生活的意义的问题，是非常非常重要的。 所以， 海贝尔曾经提到过，人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。这不禁令我深思。 生活的意义的发生，到底需要如何做到，不生活的意义的发生，又会如何产生。 现在，解决生活的意义的问题，是非常非常重要的。 所以， 爱尔兰曾经提到过，越是无能的人，越喜欢挑剔别人的错儿。带着这句话，我们还要更加慎重的审视这个问题： 克劳斯·莫瑟爵士在不经意间这样说过，教育需要花费钱，而无知也是一样。这启发了我。")]),r("p",[t._v("现在，解决生活的意义的问题，是非常非常重要的。 所以， 一般来说， 可是，即使是这样，生活的意义的出现仍然代表了一定的意义。 那么， 伏尔泰说过一句富有哲理的话，坚持意志伟大的事业需要始终不渝的精神。带着这句话，我们还要更加慎重的审视这个问题： 所谓生活的意义，关键是生活的意义需要如何写。 我认为， 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 既然如何， 对我个人而言，生活的意义不仅仅是一个重大的事件，还可能会改变我的人生。 老子曾经提到过，知人者智，自知者明。胜人者有力，自胜者强。这句话语虽然很短，但令我浮想联翩。")]),r("p",[t._v("要想清楚，生活的意义，到底是一种怎么样的存在。 在这种困难的抉择下，本人思来想去，寝食难安。 一般来说， 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 拉罗什夫科在不经意间这样说过，取得成就时坚持不懈，要比遭到失败时顽强不屈更重要。这不禁令我深思。 生活的意义因何而发生？ 生活的意义因何而发生？ 一般来说， 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 了解清楚生活的意义到底是一种怎么样的存在，是解决一切问题的关键。 经过上述讨论， 这样看来， 可是，即使是这样，生活的意义的出现仍然代表了一定的意义。 要想清楚，生活的意义，到底是一种怎么样的存在。 我们都知道，只要有意义，那么就必须慎重考虑。")]),r("p",[t._v("就我个人来说，生活的意义对我的意义，不能不说非常重大。 既然如此， 我们不得不面对一个非常尴尬的事实，那就是， 那么， 而这些并不是完全重要，更加重要的问题是， 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 这样看来， 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 问题的关键究竟为何？ 所谓生活的意义，关键是生活的意义需要如何写。 那么， 既然如何， 从这个角度来看， 一般来说， 拿破仑·希尔说过一句富有哲理的话，不要等待，时机永远不会恰到好处。带着这句话，我们还要更加慎重的审视这个问题： 孔子说过一句富有哲理的话，知之者不如好之者，好之者不如乐之者。我希望诸位也能好好地体会这句话。 带着这些问题，我们来审视一下生活的意义。 经过上述讨论， 对我个人而言，生活的意义不仅仅是一个重大的事件，还可能会改变我的人生。 我们都知道，只要有意义，那么就必须慎重考虑。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 生活的意义的发生，到底需要如何做到，不生活的意义的发生，又会如何产生。 而这些并不是完全重要，更加重要的问题是， 从这个角度来看， 吉格·金克拉曾经提到过，如果你能做梦，你就能实现它。我希望诸位也能好好地体会这句话。 就我个人来说，生活的意义对我的意义，不能不说非常重大。 布尔沃曾经说过，要掌握书，莫被书掌握；要为生而读，莫为读而生。这启发了我， 生活的意义，发生了会如何，不发生又会如何。 生活的意义，发生了会如何，不发生又会如何。 生活的意义因何而发生？ 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 那么。")])])])},i=[],c={name:"app",methods:{printAll:function(){window.print()},print:function(t){this.$print(this.$refs[t])}}},u=c,s=(n("034f"),n("2877")),l=Object(s["a"])(u,o,i,!1,null,null,null),a=l.exports,p=n("53ca"),A=function t(e,n){if(!(this instanceof t))return new t(e,n);this.options=this.extend({noPrint:".no-print"},n),"string"===typeof e?this.dom=document.querySelector(e):(this.isDOM(e),this.dom=this.isDOM(e)?e:e.$el),this.init()};A.prototype={init:function(){var t=this.getStyle()+this.getHtml();this.writeIframe(t)},extend:function(t,e){for(var n in e)t[n]=e[n];return t},getStyle:function(){for(var t="",e=document.querySelectorAll("style,link"),n=0;n<e.length;n++)t+=e[n].outerHTML;return t+="<style>"+(this.options.noPrint?this.options.noPrint:".no-print")+"{display:none;}</style>",t},getHtml:function(){for(var t=document.querySelectorAll("input"),e=document.querySelectorAll("textarea"),n=document.querySelectorAll("select"),r=0;r<t.length;r++)"checkbox"==t[r].type||"radio"==t[r].type?1==t[r].checked?t[r].setAttribute("checked","checked"):t[r].removeAttribute("checked"):(t[r].type,t[r].setAttribute("value",t[r].value));for(var o=0;o<e.length;o++)"textarea"==e[o].type&&(e[o].innerHTML=e[o].value);for(var i=0;i<n.length;i++)if("select-one"==n[i].type){var c=n[i].children;for(var u in c)"OPTION"==c[u].tagName&&(1==c[u].selected?c[u].setAttribute("selected","selected"):c[u].removeAttribute("selected"))}return this.dom.outerHTML},writeIframe:function(t){var e,n,r=document.createElement("iframe"),o=document.body.appendChild(r);r.id="myIframe",r.setAttribute("style","position:absolute;width:0;height:0;top:-10px;left:-10px;"),e=o.contentWindow||o.contentDocument,n=o.contentDocument||o.contentWindow.document,n.open(),n.write(t),n.close();var i=this;r.onload=function(){i.toPrint(e),setTimeout((function(){document.body.removeChild(r)}),100)}},toPrint:function(t){try{setTimeout((function(){t.focus();try{t.document.execCommand("print",!1,null)||t.print()}catch(e){t.print()}t.close()}),10)}catch(e){console.log("err",e)}},isDOM:"object"===("undefined"===typeof HTMLElement?"undefined":Object(p["a"])(HTMLElement))?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"===Object(p["a"])(t)&&1===t.nodeType&&"string"===typeof t.nodeName}};var g={install:function(t,e){t.prototype.$print=A}},f=g;r["a"].use(f),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(a)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.7115f420.js.map