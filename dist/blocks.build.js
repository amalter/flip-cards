!function(e){function t(l){if(n[l])return n[l].exports;var c=n[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=wp.blockEditor},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2)},function(e,t,n){"use strict";var l=n(3),c=(n.n(l),n(4));n.n(c),n(5),n(6)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(0),__=(n.n(l),wp.i18n.__),c=["cgb/block-flip-card"],r=[["cgb/block-flip-card",{placeholder:"Card"}]];(0,wp.blocks.registerBlockType)("cgb/block-flip-cards",{title:__("Flip Cards Block"),icon:"update",category:"layout widgets",keywords:[__("flip"),__("card")],edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("h2",null,"Flip Cards"),wp.element.createElement(l.InnerBlocks,{allowedBlocks:c,template:r}))},save:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement(l.InnerBlocks.Content,null))}})},function(e,t,n){"use strict";var l=n(0),__=(n.n(l),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/block-flip-card",{title:__("Flip Card"),icon:"welcome-add-page",parent:["cgb/block-flip-cards"],category:"layout widgets",keywords:[__("flip"),__("card"),__("Add card")],edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("h2",null,"Card"),wp.element.createElement("div",{class:"flip-card-content"},wp.element.createElement(l.InnerBlocks,null)))},save:function(e){return wp.element.createElement("div",{className:"flip-cards_card"},wp.element.createElement(l.InnerBlocks.Content,null))}})}]);