(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(270)),c={},l={unversionedId:"smart-contracts/test/AffiliateToken",id:"version-0.3.4/smart-contracts/test/AffiliateToken",isDocsHomePage:!1,title:"AffiliateToken",description:"Functions",source:"@site/versioned_docs/version-0.3.4/smart-contracts/test/AffiliateToken.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/AffiliateToken",permalink:"/yearn-devdocs/v2/0.3.4/smart-contracts/test/AffiliateToken",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.4/smart-contracts/test/AffiliateToken.md",version:"0.3.4",frontMatter:{},sidebar:"version-0.3.4/mySidebar",previous:{title:"Registry.vy",permalink:"/yearn-devdocs/v2/0.3.4/smart-contracts/registry"},next:{title:"TestGuestList",permalink:"/yearn-devdocs/v2/0.3.4/smart-contracts/test/TestGuestList"}},o=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"_getChainId",id:"_getchainid",children:[]},{value:"setAffiliate",id:"setaffiliate",children:[]},{value:"acceptAffiliate",id:"acceptaffiliate",children:[]},{value:"_shareValue",id:"_sharevalue",children:[]},{value:"pricePerShare",id:"pricepershare",children:[]},{value:"_sharesForValue",id:"_sharesforvalue",children:[]},{value:"deposit",id:"deposit",children:[]},{value:"deposit",id:"deposit-1",children:[]},{value:"withdraw",id:"withdraw",children:[]},{value:"withdraw",id:"withdraw-1",children:[]},{value:"migrate",id:"migrate",children:[]},{value:"migrate",id:"migrate-1",children:[]},{value:"migrate",id:"migrate-2",children:[]},{value:"permit",id:"permit",children:[]}]}],b={toc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),Object(i.b)("h3",{id:"_getchainid"},"_getChainId"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function _getChainId(\n  ) internal returns (uint256)\n")),Object(i.b)("h3",{id:"setaffiliate"},"setAffiliate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function setAffiliate(\n  ) external\n")),Object(i.b)("h3",{id:"acceptaffiliate"},"acceptAffiliate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function acceptAffiliate(\n  ) external\n")),Object(i.b)("h3",{id:"_sharevalue"},"_shareValue"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function _shareValue(\n  ) internal returns (uint256)\n")),Object(i.b)("h3",{id:"pricepershare"},"pricePerShare"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function pricePerShare(\n  ) external returns (uint256)\n")),Object(i.b)("h3",{id:"_sharesforvalue"},"_sharesForValue"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function _sharesForValue(\n  ) internal returns (uint256)\n")),Object(i.b)("h3",{id:"deposit"},"deposit"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external returns (uint256)\n")),Object(i.b)("h3",{id:"deposit-1"},"deposit"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) public returns (uint256 deposited)\n")),Object(i.b)("h3",{id:"withdraw"},"withdraw"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),Object(i.b)("h3",{id:"withdraw-1"},"withdraw"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) public returns (uint256)\n")),Object(i.b)("h3",{id:"migrate"},"migrate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),Object(i.b)("h3",{id:"migrate-1"},"migrate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),Object(i.b)("h3",{id:"migrate-2"},"migrate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),Object(i.b)("h3",{id:"permit"},"permit"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function permit(\n    address owner,\n    address spender,\n    uint256 amount,\n    uint256 deadline,\n    uint8 v,\n    bytes32 r,\n    bytes32 s\n  ) external\n")),Object(i.b)("p",null,"Triggers an approval from owner to spends"),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"owner")),Object(i.b)("td",{parentName:"tr",align:"left"},"address"),Object(i.b)("td",{parentName:"tr",align:"left"},"The address to approve from")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"spender")),Object(i.b)("td",{parentName:"tr",align:"left"},"address"),Object(i.b)("td",{parentName:"tr",align:"left"},"The address to be approved")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"amount")),Object(i.b)("td",{parentName:"tr",align:"left"},"uint256"),Object(i.b)("td",{parentName:"tr",align:"left"},"The number of tokens that are approved (2^256-1 means infinite)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"deadline")),Object(i.b)("td",{parentName:"tr",align:"left"},"uint256"),Object(i.b)("td",{parentName:"tr",align:"left"},"The time at which to expire the signature")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"v")),Object(i.b)("td",{parentName:"tr",align:"left"},"uint8"),Object(i.b)("td",{parentName:"tr",align:"left"},"The recovery byte of the signature")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"r")),Object(i.b)("td",{parentName:"tr",align:"left"},"bytes32"),Object(i.b)("td",{parentName:"tr",align:"left"},"Half of the ECDSA signature pair")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"s")),Object(i.b)("td",{parentName:"tr",align:"left"},"bytes32"),Object(i.b)("td",{parentName:"tr",align:"left"},"Half of the ECDSA signature pair")))))}s.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);