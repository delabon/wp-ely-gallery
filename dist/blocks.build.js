!function(e){function t(l){if(n[l])return n[l].exports;var a=n[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function l(e,t){var n="ely-"+(new Date).getTime();if(""!==e){document.querySelectorAll("#"+e).length>1&&t({uid:n})}else t({uid:n})}t.f=l,n.d(t,"e",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"b",function(){return s});var a=(Object.assign,function(){return wp.element.createElement("svg",{className:"dashicon",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24"},wp.element.createElement("path",{d:"M19.5 12c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-18 0l4-5.96 2.48 1.96 2.52-4 1.853 2.964c-1.271 1.303-1.977 3.089-1.827 5.036h-9.026zm10.82 4h-14.82v-18h22v7.501c-.623-.261-1.297-.422-2-.476v-5.025h-18v14h11.502c.312.749.765 1.424 1.318 2zm-9.32-11c-.828 0-1.5-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5z"}))}),i=function(){return wp.element.createElement("svg",{className:"dashicon",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},wp.element.createElement("path",{d:"M2 0c-1.104 0-2 .896-2 2v15c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-15c0-1.104-.896-2-2-2h-20zm20 14h-20v-12h20v12zm-6.599 7c0 1.6 1.744 2.625 2.599 3h-12c.938-.333 2.599-1.317 2.599-3h6.802z"}))},r=function(){return wp.element.createElement("svg",{className:"dashicon",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},wp.element.createElement("path",{d:"M5 3.461c0 .978.001 16.224 0 17.213-.002 2.214 3.508 3.326 7.014 3.326 3.495 0 6.986-1.105 6.986-3.326v-17.213c0-2.348-3.371-3.461-6.805-3.461-3.563 0-7.195 1.199-7.195 3.461zm7-1.461c.276 0 .5.223.5.5 0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-.277.224-.5.5-.5zm0 20c-.552 0-1-.448-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .552-.448 1-1 1zm5-3h-10v-15h10v15z"}))},o=function(){return wp.element.createElement("svg",{className:"dashicon",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},wp.element.createElement("path",{d:"M24 5c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14zm-3 14h-18v-14h18v14zm1.5-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"}))},s=function(){return wp.element.createElement("svg",{className:"dashicon",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},wp.element.createElement("path",{d:"M9 12c0-.552.448-1 1.001-1s.999.448.999 1-.446 1-.999 1-1.001-.448-1.001-1zm6.2 0l-1.7 2.6-1.3-1.6-3.2 4h10l-3.8-5zm8.8-5v14h-20v-3h-4v-15h21v4h3zm-20 9v-9h15v-2h-17v11h2zm18-7h-16v10h16v-10z"}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2)},function(e,t,n){"use strict";var l=n(0),a=n(3),__=wp.i18n.__;(0,wp.blocks.registerBlockType)("ely/blocks",{title:__("Ely Gallery","ely"),icon:l.b,category:"common",keywords:[__("gallery","ely"),__("image","ely"),__("ely","ely")],supports:{html:!1},edit:a.a,save:function(){return null}})},function(e,t,n){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(0),o=n(4),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),u=wp.blockEditor,m=u.InspectorControls,c=u.MediaUpload,p=wp.components,d=p.Button,f=p.SelectControl,g=p.TextControl,h=wp.element,w=h.Fragment,b=h.Component,__=wp.i18n.__,v=wp,y=v.apiFetch,E=wp.url.addQueryArgs,z=function(e){function t(){var e;l(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return o.state={images:[],upload_dir:[],design:o.props.attributes.design,loading:!0},o.loadImages=o.loadImages.bind(o),o.renderStyle=o.renderStyle.bind(o),o}return i(t,e),s(t,[{key:"componentDidMount",value:function(){Object(r.f)(this.props.attributes.uid,this.props.setAttributes),this.loadImages()}},{key:"componentDidUpdate",value:function(e){e.attributes.ids!==this.props.attributes.ids&&this.loadImages()}},{key:"loadImages",value:function(){var e=this,t=this.props.attributes,n=t.ids;t.design;y({path:E("/ely/v1/images",{ids:n})}).then(function(t){var n=t.images;!1===n[0]&&(n=[]),e.setState({images:n,upload_dir:t.upload_dir,loading:!1})}).catch(function(){e.setState({images:[],upload_dir:[],loading:!1})})}},{key:"renderStyle",value:function(){var e=this.props.attributes,t=e.uid,n=e.fontSize;return"\n            #"+t+".gallery-fg{\n                font-size: "+e.mobileFontSize+"px;\n            }\n            \n            @media all and (min-width: 768px) {\n                #"+t+".gallery-fg{\n                    font-size: "+e.tabletFontSize+"px;\n                }\n            }\n\n            @media all and (min-width: 992px) {\n                #"+t+".gallery-fg{\n                    font-size: "+n+"px;\n                }\n            }\n        "}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,l=t.setAttributes,a=t.isSelected;if(this.state.loading)return __("Loadding","ely");var i=this.state.images.map(function(t){var n=e.state.upload_dir.baseurl+"/"+t.file;return wp.element.createElement("div",{class:"item-fg"},wp.element.createElement("img",{src:n,alt:t.caption}),t.caption&&wp.element.createElement("div",{class:"caption"},t.caption),wp.element.createElement("a",{href:"#"}))});return[a&&wp.element.createElement(m,null,wp.element.createElement("hr",null),wp.element.createElement("div",{className:"fancyg-alert"},__("This is only a preview. The complete design is on the frontend.","ely")),wp.element.createElement(f,{label:__("Design","ely"),value:n.design,options:[{label:__("Grid","ely"),value:"grid"},{label:ELY_PARAMS.is_free?__("Justified (Premium)","ely"):__("Justified","ely"),value:"justified"},{label:ELY_PARAMS.is_free?__("Fullwidth (Premium)","ely"):__("Fullwidth","ely"),value:"fullwidth"},{label:ELY_PARAMS.is_free?__("Masonry (Premium)","ely"):__("Masonry","ely"),value:"masonry"}],onChange:function(t){l({design:t}),e.setState({design:t})}}),"justified"===n.design&&wp.element.createElement(g,{label:__("Row Height (px)","ely"),value:n.rowHeight,onChange:function(e){return l({rowHeight:e})}}),wp.element.createElement(o.a,{design:this.state.design,attributes:n,setAttributes:l})),wp.element.createElement(w,null,"grid"===n.design&&wp.element.createElement(w,null,wp.element.createElement(c,{gallery:!0,multiple:!0,className:"ely-uploader",onSelect:function(e){return l({ids:e.map(function(e){return e.id}).join(",")})},type:"image",value:n.ids.split(","),render:function(e){return wp.element.createElement(d,{className:n.imageID?"":"button-ely-upload",onClick:e.open},wp.element.createElement(r.e,null))}}),wp.element.createElement("style",null,this.renderStyle()),wp.element.createElement("div",{id:n.uid,"data-id":n.uid,class:"gallery-fg size-fullsize-fg fg_gallery_started","data-design":n.design,"data-desktop":n.columns,"data-tablet":n.tabletColumns,"data-mobile":n.mobileColumns,"data-rowheight":n.rowHeight},i)),"grid"!==n.design&&wp.element.createElement("div",{className:"ely-upgrade-notice"},"Please upgrade in order to use the other awesome designs.",wp.element.createElement("br",null),wp.element.createElement("a",{target:"_blank",href:"https://www.templatemonster.com/wordpress-plugins/ely-gutenberg-gallery-block-wordpress-plugin-83566.html"},"Upgrade Now")))]}}]),t}(b);t.a=z},function(e,t,n){"use strict";function l(e,t,n){var l={columns:n};return e.tabletColumns>n&&(l.tabletColumns=n),e.mobileColumns>l.tabletColumns&&(l.mobileColumns=l.tabletColumns),t(l)}function a(e,t,n){var l={tabletColumns:n};return e.mobileColumns>n&&(l.mobileColumns=n),t(l)}var i=n(0),r=wp.components,o=r.RangeControl,s=r.PanelBody,u=r.TabPanel,m=wp.element.Fragment,__=wp.i18n.__,c=function(e){var t=e.attributes,n=e.setAttributes;return wp.element.createElement(s,{title:__("Responsive Settings","ely"),initialOpen:!0},wp.element.createElement(u,{className:"fancyg-tabs",activeClass:"fancyg-tab-active",onSelect:function(e){return n({currentTab:e})},tabs:[{name:"desktop",title:wp.element.createElement(i.a,null),className:"fancyg-tab tab-1"},{name:"tablet",title:wp.element.createElement(i.d,null),className:"fancyg-tab tab-2"},{name:"mobile",title:wp.element.createElement(i.c,null),className:"fancyg-tab tab-3"}]},function(e){return"mobile"===e.name?wp.element.createElement(m,null,"fullwidth"===t.design||"justified"===t.design?null:wp.element.createElement(o,{label:__("Mobile Columns","ely"),value:t.mobileColumns,min:1,max:t.tabletColumns,step:1,onChange:function(e){return n({mobileColumns:e})}}),wp.element.createElement(o,{label:__("Mobile Font Size","ely"),value:t.mobileFontSize,min:1,max:100,step:1,onChange:function(e){return n({mobileFontSize:e})}})):"tablet"===e.name?wp.element.createElement(m,null,"fullwidth"===t.design||"justified"===t.design?null:wp.element.createElement(o,{label:__("Tablet Columns","ely"),value:t.tabletColumns,min:1,max:t.columns,step:1,onChange:function(e){return a(t,n,e)}}),wp.element.createElement(o,{label:__("Tablet Font Size","ely"),value:t.tabletFontSize,min:1,max:100,step:1,onChange:function(e){return n({tabletFontSize:e})}})):wp.element.createElement(m,null,"fullwidth"===t.design||"justified"===t.design?null:wp.element.createElement(o,{label:__("Desktop Columns","ely"),value:t.columns,min:1,max:t.maxColumns?t.maxColumns:5,step:1,onChange:function(e){return l(t,n,e)}}),wp.element.createElement(o,{label:__("Desktop Font Size","ely"),value:t.fontSize,min:1,max:100,step:1,onChange:function(e){return n({fontSize:e})}}))}))};t.a=c}]);