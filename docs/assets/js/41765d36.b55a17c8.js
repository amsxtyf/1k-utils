"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[615],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=s(n),f=o,g=y["".concat(i,".").concat(f)]||y[f]||p[f]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return y}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],c={title:"storage"},i=void 0,s={unversionedId:"storage",id:"storage",isDocsHomePage:!1,title:"storage",description:"Types",source:"@site/docs/storage.md",sourceDirName:".",slug:"/storage",permalink:"/1k-utils/docs/storage",tags:[],version:"current",frontMatter:{title:"storage"},sidebar:"defaultSidebar",previous:{title:"serialize",permalink:"/1k-utils/docs/serialize"}},u=[{value:"Types",id:"types",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],p={toc:u};function y(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Storage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"storage(key: 'local' | 'session'): Actions\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Actions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function get( key: string ) => value\n\nfunction set( key: string, newVal: any, before: ( oldval: any, newVal: any ) => newVal ) => newVal\n\nfunction remove( key: string ) => value\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const _storage = storage('local' | 'session')\n_storage.set('key', { key: '111' })\n// => { key: '111' }\n_storage.get('key')\n// => { key: '111' }\n_storage.remove('key')\n// => { key: '111' }\nstorage('local').set('key', '2', (oldVal, newVal) => {\n    return {\n        ...oldVal,\n        key2: newVal\n    }\n})\n// => { key: '111', key2: '2' }\n")))}y.isMDXComponent=!0}}]);