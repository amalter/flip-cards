!function(e){function t(c){if(n[c])return n[c].exports;var r=n[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:c})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=wp.blockEditor},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2)},function(e,t,n){"use strict";var c=n(3),r=(n.n(c),n(4));n.n(r),n(5),n(6),n(7),n(8)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var c=n(0),__=(n.n(c),wp.i18n.__),r=["cgb/flip-card"];(0,wp.blocks.registerBlockType)("cgb/block-flip-cards",{title:__("Flip Cards Block"),icon:"update",category:"layout widgets",keywords:[__("flip"),__("card")],edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("h2",null,"Flip Cards Block"),wp.element.createElement(c.InnerBlocks,{allowedBlocks:r}))},save:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement(c.InnerBlocks.Content,null))}})},function(e,t,n){"use strict";var c=n(0),__=(n.n(c),wp.i18n.__),r=["cgb/front-card","cgb/back-card"],l=[["cgb/front-card",{placeholder:"Front"}],["cgb/back-card",{placeholder:"Back"}]];(0,wp.blocks.registerBlockType)("cgb/flip-card",{title:__("Flip Card"),icon:"update",parent:["cgb/block-flip-cards"],category:"layout widgets",keywords:[__("flip"),__("card")],edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("h3",null,"Card"),wp.element.createElement(c.InnerBlocks,{allowedBlocks:r,template:l,templateLock:"all"}))},save:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement(c.InnerBlocks.Content,null))}})},function(e,t,n){"use strict";var c=n(0),__=(n.n(c),wp.i18n.__),r=["core/image","core/heading","core/paragraph"],l=[["core/image"],["core/heading",{placeholder:"Card Title"}],["core/paragraph",{placeholder:"Summary"}]];(0,wp.blocks.registerBlockType)("cgb/front-card",{title:__("Front Side"),icon:"welcome-add-page",parent:["cgb/flip-card"],category:"layout widgets",keywords:[__("front"),__("flip"),__("card"),__("Add card")],edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("h4",null,"Front side"),wp.element.createElement(c.InnerBlocks,{allowedBlocks:r,template:l,templateLock:"false"}))},save:function(e){return wp.element.createElement("div",{className:"flip-card_front"},wp.element.createElement(c.InnerBlocks.Content,null))}})},function(e,t,n){"use strict";var c=n(0),__=(n.n(c),wp.i18n.__),r=["core/image","core/heading","core/paragraph"],l=[["core/paragraph",{placeholder:"Back side content"}]];(0,wp.blocks.registerBlockType)("cgb/back-card",{title:__("Back Side"),icon:"welcome-add-page",parent:["cgb/flip-card"],category:"layout widgets",keywords:[__("back"),__("flip"),__("card"),__("Add card")],edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("h4",null,"Back side"),wp.element.createElement(c.InnerBlocks,{allowedBlocks:r,template:l,templateLock:"false"}))},save:function(e){return wp.element.createElement("div",{className:"flip-card_back"},wp.element.createElement(c.InnerBlocks.Content,null))}})}]);