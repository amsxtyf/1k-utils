"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[226],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,y=d["".concat(m,".").concat(p)]||d[p]||l[p]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6966:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={title:"createFormatTime"},m=void 0,s={unversionedId:"createFormatTime",id:"createFormatTime",isDocsHomePage:!1,title:"createFormatTime",description:"Types",source:"@site/docs/createFormatTime.md",sourceDirName:".",slug:"/createFormatTime",permalink:"/1k-utils/docs/createFormatTime",tags:[],version:"current",frontMatter:{title:"createFormatTime"},sidebar:"defaultSidebar",previous:{title:"base64ToBlob",permalink:"/1k-utils/docs/base64ToBlob"},next:{title:"deserialze",permalink:"/1k-utils/docs/deserialze"}},u=[{value:"Types",id:"types",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"dayjs",id:"dayjs",children:[],level:4},{value:"other",id:"other",children:[],level:4}],level:2}],l={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"types"},"Types"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function createFormatTime(\n    fn: moment | dayjs,\n    format: 'DD' | 'HH' | 'mm' | 'ss',\n    dataType?: 'unix' | 'default'\n): (time: any | any[], defaultValue?: string) => string\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"dayjs"},"dayjs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import dayjs from 'dayjs'\nimport moment from 'moment'\nimport createFormatTime from '../src/createFormatTime'\n// day\n// ----------------------------------------------------------------------\ncreateFormatTime(dayjs || moment, 'DD')('2020-2-2')\ncreateFormatTime(dayjs || moment, 'DD', 'unix')(dayjs('2020-2-2').unix())\n// => '2020-02-02'\n\n// second\n// ----------------------------------------------------------------------\ncreateFormatTime(dayjs || moment, 'ss')('2020-2-2')\ncreateFormatTime(dayjs || moment, 'ss', 'unix')(dayjs('2020-2-2').unix())\n// => '2020-02-02 00:00:00'\n\n// arr, day\n// ----------------------------------------------------------------------\nconst default = ['2020-2-2', '2020-2-5']\nconst second = ['2020-2-2 00:00:00', '2020-2-5 00:00:00']\nconst unix = [dayjs('2020-2-2').unix(), dayjs('2020-2-5').unix()]\ncreateFormatTime(dayjs || moment, 'DD')(default)\ncreateFormatTime(dayjs || moment, 'DD', 'unix')(unix)\ncreateFormatTime(dayjs || moment, 'DD')(second)\n// => '2020-02-02~2020-02-05'\n\n\n// arr, second\n// ----------------------------------------------------------------------\ncreateFormatTime(dayjs || moment, 'ss')(default)\ncreateFormatTime(dayjs || moment, 'ss', 'unix')(unix)\ncreateFormatTime(dayjs || moment, 'ss')(second)\n// => '2020-02-02 00:00:00~2020-02-05 00:00:00''\n")),(0,o.kt)("h4",{id:"other"},"other"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const formatDay = createFormatTime(dayjs || moment, 'DD')\nformatDay('')\n// => undefined\nformatDay([])\n// => ''\n")))}d.isMDXComponent=!0}}]);