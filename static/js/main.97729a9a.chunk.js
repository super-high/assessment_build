(this.webpackJsonpassessment=this.webpackJsonpassessment||[]).push([[19],{129:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(46),r=c.n(s),l=(c(75),c(76),c(131)),o=c(130),i=c(13),u=c(3),d=c(28),b=c(10),j=c(4),f=c(5),p=c.n(f),x=c(11),m=c.n(x),h=c(1),O=function(e){var t=e.icon,c=e.name,a=e.link;return Object(h.jsx)("a",{href:a,target:"_blank",children:Object(h.jsxs)("button",{className:"cursor-pointer flex items-center justify-center gap-3 py-2 ",children:[Object(h.jsx)("img",{src:t,alt:"".concat(c," icon"),className:"hover:scale-125 duration-100 transform"}),Object(h.jsx)("p",{className:"text-gray-400",children:c})]})})},g=function(e){var t=e.children,c=e.onClick,a=e.className,n=e.type,s=e.disabled;return Object(h.jsx)("button",{className:"".concat("nevative"===n?"bg-gray-400 text-app-black":"bg-app-red text-gray-50"," px-8 py-2 rounded-md  font-bold uppercase text-xl duration-100 hover:scale-105 transform ").concat(a," ").concat(s?"opacity-60 cursor-not-allowed":""),onClick:function(){c()},children:t})},w=c(47),v=function(){return Object(h.jsxs)("footer",{className:"flex flex-col pt-8 pb-4 px-4 relative gap-6 z-0",children:[Object(h.jsxs)("div",{className:"flex justify-center sm:justify-end px-2 sm:px-8",children:[Object(h.jsx)("div",{className:"bg-gray-400 w-32 h-32 sm:w-44 sm:h-44 lg:w-60  lg:h-60 rounded-full absolute transform left-0 sm:left-1/4  bottom-0 -translate-x-1/2 md:-translate-x-full  translate-y-1/2"}),Object(h.jsxs)("div",{className:"flex gap-2 sm:gap-6 justify-around w-full sm:w-max xs:flex-row flex-col",children:[Object(h.jsx)(O,{icon:"/assets/icon/ico_discord.svg",name:"Join Discord",link:"https://discord.gg/ftWxVrWXxT"}),Object(h.jsx)(O,{icon:"/assets/icon/ico_twitter.svg",name:"Join Twitter",link:"https://twitter.com/nftbooking"})]})]}),Object(h.jsxs)("p",{className:"text-center text-sm text-gray-400",children:["\xa9 ",(new Date).getFullYear()," NFTBOOKING"]})]})},y=Object(a.createContext)(),k=function(e){var t=e.children,c=Object(a.useState)(!1),n=Object(j.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)(""),o=Object(j.a)(l,2),i=o[0],u=o[1],d=Object(a.useState)(null),b=Object(j.a)(d,2),f=b[0],p=b[1],x=Object(a.useState)(null),m=Object(j.a)(x,2),O=m[0],g=m[1],w=Object(a.useState)(!1),v=Object(j.a)(w,2),k=v[0],N=v[1],S=Object(a.useState)(null),C=Object(j.a)(S,2),_=C[0],B=C[1];return Object(h.jsx)(y.Provider,{value:{loading:s,setLoading:r,status:i,setStatus:u,onBoard:f,setOnBoard:p,web3:O,setWeb3:g,connected:k,setConnected:N,walletAddress:_,setWalletAddress:B},children:t})},N="NFT BOOKS",S="https://rinkeby.infura.io/",C=parseInt("4"),_=[{walletName:"metamask",preferred:!0},{walletName:"trust",preferred:!0,rpcUrl:S},{walletName:"authereum",preferred:!0},{walletName:"walletConnect",infuraKey:"6770ac79174745188246d9365bf9a443",preferred:!0},{walletName:"opera"},{walletName:"operaTouch"},{walletName:"torus"},{walletName:"trezor",appUrl:"http://127.0.0.1",email:"morio211106@gmail.com",rpcUrl:S},{walletName:"ledger",rpcUrl:S},{walletName:"lattice",rpcUrl:S,appName:N},{walletName:"cobovault",rpcUrl:S,appName:N}],B=C,F=function(){var e=Object(b.a)(p.a.mark((function e(){var t,a,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window){e.next=10;break}return e.next=3,Promise.all([c.e(0),c.e(1),c.e(4),c.e(6),c.e(22)]).then(c.t.bind(null,2487,7));case 3:return t=e.sent,a=t.default,n=new a.providers.HttpProvider(S,{timeout:1e4}),s=new a(window.ethereum||n),e.abrupt("return",s);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window){e.next=9;break}return e.next=3,Promise.all([c.e(24),c.e(40)]).then(c.bind(null,2488));case 3:return t=e.sent,a=t.default,n=a({dappId:"db751b1d-65ea-4f8a-a132-69866bafc679",networkId:C,darkMode:!0,walletSelect:{wallets:_}}),e.abrupt("return",n);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(a.useContext)(y);Object(a.useEffect)((function(){e.setWeb3(window.__web3||null),e.setOnBoard(window.__onBoard||null),e.setWalletAddress(window.__walletAddress||null),e.setConnected(window.__connected||!1)}),[]),Object(a.useEffect)((function(){window.__web3=e.web3}),[e.web3]),Object(a.useEffect)((function(){window.__onBoard=e.onBoard}),[e.onBoard]),Object(a.useEffect)((function(){window.__walletAddress=e.walletAddress}),[e.walletAddress]),Object(a.useEffect)((function(){window.__connected=e.connected}),[e.connected]),Object(a.useEffect)((function(){e.web3&&function t(){e.walletAddress||(e.web3&&e.web3.currentProvider&&e.web3.currentProvider.selectedAddress&&e.web3.currentProvider.selectedAddress.length>0?e.setWalletAddress(e.web3.currentProvider.selectedAddress):setTimeout(t,100))}()}),[e.web3,e.walletAddress]),Object(a.useEffect)((function(){var t=function(){var t=Object(b.a)(p.a.mark((function t(){var c,a,n,s,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F();case 2:return c=t.sent,t.next=5,A();case 5:return a=t.sent,t.next=8,null===c||void 0===c?void 0:c.eth.getChainId();case 8:return n=t.sent,t.next=11,null===c||void 0===c?void 0:c.eth.getAccounts();case 11:s=t.sent,e.setWeb3(c),e.setOnBoard(a),r=localStorage.getItem("rg_connect"),void 0===s||null!==r&&"true"!==r||(s[0]&&n===B&&e.setConnected(!0),e.setWalletAddress(s[0]));case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();"undefined"!==typeof window&&window.ethereum&&(window.ethereum.on("disconnect",n),window.ethereum.on("accountsChanged",n)),t()}),[]);var t,c=function(){var t=Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e.onBoard){t.next=11;break}return t.next=3,e.onBoard.walletSelect();case 3:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.t0=e,t.next=8,e.onBoard.walletCheck();case 8:t.t1=t.sent,t.t0.setConnected.call(t.t0,t.t1),localStorage.setItem("rg_connect","true");case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){null!=e.onBoard&&e.onBoard.walletReset(),e.setWalletAddress(null),e.setConnected(!1),localStorage.setItem("rg_connect","false")},s=function(){var t=Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.connected){t.next=5;break}return t.next=3,c();case 3:t.next=6;break;case 5:n();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsx)("nav",{className:"container w-full",children:Object(h.jsxs)("div",{className:" justify-between flex ",children:[Object(h.jsxs)(i.b,{to:"/",className:"flex gap-2 justify-center items-center",children:[Object(h.jsx)("img",{src:"/assets/icon/logo.png",alt:"app logo",className:"w-16"}),Object(h.jsx)("p",{className:"text-xl font-bold text-gray-400 uppercase",children:"Assessment Test"})]}),e.connected&&e.walletAddress?Object(h.jsxs)("div",{className:"btn-connect flex items-center justify-between rounded-full px-4 sm:px-8 sm:py-1 border-app-black shadow-lg border-2 text-gray-400 font-bold hover:scale-105 transform bg-app-black-light border-r-2 border-b-2",children:[Object(h.jsx)("span",{className:"mr-2",children:(t=e.walletAddress,t.slice(0,5)+"..."+t.slice(-4))}),Object(h.jsx)("span",{className:"cursor-pointer flex-shrink-0",onClick:s,children:Object(h.jsx)("img",{src:"/assets/icon/ico_close.png",alt:"close icon",className:"w-4"})})]}):Object(h.jsx)("button",{id:"btn-wallet-connect",className:"btn-connect cursor-pointer rounded-full px-4 sm:px-8 sm:py-1 border-app-black shadow-lg border-2 text-gray-400 font-bold hover:scale-105 transform bg-app-black-light border-r-2 border-b-2",onClick:s,children:Object(h.jsx)("span",{className:"text-secondary tracking-wider font-recoleta-bold",children:"Connect"})})]})})},P=function(){return Object(h.jsx)("header",{className:"px-8 py-4 flex items-center justify-center z-10",children:Object(h.jsx)(E,{})})},T=function(e){var t=e.title,c=e.children;return Object(h.jsxs)("div",{className:"flex flex-col min-h-screen overflow-hidden bg-app-black",children:[Object(h.jsx)(w.a,{children:Object(h.jsx)("title",{children:t})}),Object(h.jsx)(P,{}),Object(h.jsx)("main",{className:"bg-slate-400 flex-1 z-10",children:Object(h.jsx)("div",{className:"container mx-auto py-4",children:c})}),Object(h.jsx)(v,{}),Object(h.jsx)("div",{className:"bg-app-red bg-opacity-70 rounded-full w-full md:w-500 h-500 absolute z-0 top-0 left-0 -translate-x-1/3 -translate-y-1/3 transform"}),Object(h.jsx)("div",{className:"bg-gray-400 rounded-full h-32 w-32 absolute right-10 top-10 z-0"}),Object(h.jsx)("div",{className:"bg-app-red rounded-full h-12 w-12 absolute right-5 top-44"})]})},U=c(29),I=c.n(U),z=function(){return Object(h.jsx)("div",{className:"bg-app-black bg-opacity-70 top-0 bottom-0 left-0 h-screen w-screen fixed flex items-center justify-center",children:Object(h.jsxs)("div",{className:"bg-white rounded-lg px-8 py-2 flex flex-col items-center z-50",children:[Object(h.jsx)(I.a,{}),Object(h.jsx)("p",{className:"text-center",children:"Loading..."})]})})},W=c(30),q=c.n(W).a.create({headers:{"Content-Type":"application/json; charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"X-Requested-With"},timeout:1e4}),L=c(14),V=c(15),R=function(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(u.f)(),l=e.id,o=e.title,i=e.description,d=e.author,b=e.price,f=e.email,p=e.phone,x=e.cover_image,m=e.remove;return Object(h.jsxs)("div",{className:"shadow-2xl flex flex-col bg-app-black relative",onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[Object(h.jsx)("img",{src:x,alt:"".concat(o," cover")}),Object(h.jsxs)("div",{className:"flex flex-col px-4 py-3 text-gray-300 h-full",children:[Object(h.jsx)("p",{className:"uppercase font-bold  text-xl",children:o}),Object(h.jsx)("p",{className:"flex-1 text-gray-500",children:i}),Object(h.jsxs)("div",{className:"flex justify-between",children:[Object(h.jsxs)("div",{className:"flex flex-col",children:[Object(h.jsxs)("div",{className:"flex gap-1 items-center",children:[Object(h.jsx)(V.a,{icon:L.d}),Object(h.jsx)("p",{className:"",children:d})]}),Object(h.jsxs)("div",{className:"flex gap-1 items-center",children:[Object(h.jsx)(V.a,{icon:L.c}),Object(h.jsx)("p",{children:f})]}),Object(h.jsxs)("div",{className:"flex gap-1 items-center",children:[Object(h.jsx)(V.a,{icon:L.e}),Object(h.jsx)("p",{children:p})]})]}),Object(h.jsxs)("div",{className:"flex gap-1 items-center mt-2",children:[Object(h.jsx)(V.a,{icon:L.a,size:"3x"}),Object(h.jsx)("p",{className:"text-4xl font-bold",children:b})]})]})]}),n&&Object(h.jsxs)("div",{className:"absolute top-0 left-0 w-full h-full bg-app-black bg-opacity-70 flex items-center justify-center gap-4",children:[Object(h.jsx)("div",{className:"p-6 bg-blue-600 rounded-full cursor-pointer",onClick:function(){r("/manage",{state:{type:"edit",id:l,book:e}})},children:Object(h.jsx)(V.a,{icon:L.b,size:"2x",color:"#FFFFFF",className:"transform hover:scale-125 duration-100"})}),Object(h.jsx)("div",{className:"p-6 bg-app-red rounded-full cursor-pointer",onClick:function(){return m(l)},children:Object(h.jsx)(V.a,{icon:L.f,size:"2x",color:"#FFFFFF",className:"transform hover:scale-125 duration-100"})})]})]})},D=function(e){var t=e.title,c=e.desc,a=e.count,n=e.icon;return Object(h.jsxs)("div",{className:"border border-app-black-dark bg-gray-300 px-6  flex",children:[Object(h.jsxs)("div",{className:"w-2/3 space-y-4 py-4",children:[Object(h.jsx)("p",{className:"uppercase text-gray-600 text-xl font-extrabold",children:t}),Object(h.jsx)("p",{className:"text-xs text-gray-800",children:c})]}),Object(h.jsxs)("div",{className:"w-1/3 relative flex items-end justify-start",children:[Object(h.jsx)("img",{src:"/assets/icon/".concat(n),alt:t,className:"absolute w-12 md:w-2/3 top-2 right-0"}),Object(h.jsx)("div",{className:"w-20 h-20 bg-app-red flex items-center justify-center",children:Object(h.jsx)("p",{className:"text-gray-200 text-4xl font-bold z-20",children:a})})]})]})},H=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(j.a)(s,2),l=r[0],o=r[1],i=Object(u.f)(),f=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),"http://localhost:5000/api/v1/books/",e.next=4,q({method:"get",url:"http://localhost:5000/api/v1/books/"}).then((function(e){o(e.data),n(!1)})).catch((function(e){console.log(e),n(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"http://localhost:5000/api/v1/books/",m.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){var e=Object(b.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConfirmed){e.next=3;break}return e.next=3,q({method:"delete",url:"http://localhost:5000/api/v1/books/"+"/".concat(t)}).then((function(e){m.a.fire({title:"Success!",text:"New Book deleted successfully.",icon:"success"}),f()})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[]),Object(h.jsx)(T,{title:"Home Page",children:Object(h.jsxs)("div",{className:"bg-app-black-dark bg-opacity-75 shadow-2xl rounded-md w-full min-h-screen z-10 flex flex-col relative",children:[c&&Object(h.jsx)(z,{}),Object(h.jsx)("div",{className:"bg-app-black-light h-24 rounded-t-xl flex items-center justify-end px-8",children:Object(h.jsx)(g,{onClick:function(){i("/manage",{state:{type:"edit",id:2}})},children:"Create"})}),Object(h.jsx)("div",{className:"bg-app-red flex-1 grid sm:grid-cols-2 lg:grid-cols-3 md:px-8 px-2 gap-1 sm:gap-2 md:gap-3 lg:gap-6 pt-6 pb-72 md:pb-32 lg:pb-16",children:l.map((function(e,t){return Object(a.createElement)(R,Object(d.a)(Object(d.a)({},e),{},{key:t,remove:x}))}))}),Object(h.jsxs)("div",{className:"flex-col md:flex-row flex gap-4 justify-between transform translate-y-12 absolute bottom-20 w-10/12 mx-auto left-1/2 -translate-x-1/2 z-20",children:[Object(h.jsx)(D,{title:"New Books",desc:"Newly published this month/week",icon:"ico_bestseller.svg",count:8}),Object(h.jsx)(D,{title:"Best Seller",desc:"Sold more than 1000 this month",icon:"ico_new.svg",count:6}),Object(h.jsx)(D,{title:"Top Likes",desc:"Likes from more than 1000 people",icon:"ico_toplikes.svg",count:12})]}),Object(h.jsx)("div",{className:"bg-gray-400 rounded-b-xl h-24"})]})})},J=c(50),M=function(e){var t=e.value,c=e.setValue,n=e.className,s=e.label,r=e.type,l=e.require,o=Object(a.useState)(!1),i=Object(j.a)(o,2),u=i[0],d=i[1];return Object(h.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[Object(h.jsx)("label",{className:"text-white text-sm",children:s}),Object(h.jsx)("input",{value:t,type:r||"text",onChange:function(e){l&&d(0===e.target.value.length),c(e.target.value)},className:"".concat(n," rounded-md bg-gray-400 px-4 py-2 text-app-black w-full outline-none focus:bg-app-red focus:text-white font-bold")}),u&&Object(h.jsx)("p",{className:"text-app-red text-sm",children:"This field is require"})]})},K=c(104),Y=c(30),X=function(){var e=Object(b.a)(p.a.mark((function e(t){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinFileToIPFS",c={},(a=new K).append("file",t[0]),e.next=6,Y.post("https://api.pinata.cloud/pinning/pinFileToIPFS",a,{headers:{"Content-Type":"multipart/form-data; boundary= ".concat(a._boundary),pinata_api_key:"3b17a92a4c9dda4d5b35",pinata_secret_api_key:"2aa79534fd7847dfcc8887bae753c6848ed6b98bac8c49c5a011acfd9eb92f8c"}}).then((function(e){c={success:!0,imageUri:"https://growth.mypinata.cloud/ipfs/"+e.data.IpfsHash,timestamp:e.data.Timestamp}})).catch((function(e){c={success:!1,error:e}}));case 6:return e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(u.e)().state,t=Object(a.createRef)(),c=Object(a.useState)(!1),n=Object(j.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)(!1),o=Object(j.a)(l,2),d=o[0],f=o[1],x=Object(a.useState)(""),O=Object(j.a)(x,2),w=O[0],v=O[1],y=Object(a.useState)(""),k=Object(j.a)(y,2),N=k[0],S=k[1],C=Object(a.useState)(""),_=Object(j.a)(C,2),B=_[0],F=_[1],A=Object(a.useState)(0),E=Object(j.a)(A,2),P=E[0],U=E[1],I=Object(a.useState)(""),W=Object(j.a)(I,2),L=W[0],V=W[1],R=Object(a.useState)(""),D=Object(j.a)(R,2),H=D[0],K=D[1],Y=Object(a.useState)(),G=Object(j.a)(Y,2),Q=G[0],Z=G[1],$=Object(a.useState)(),ee=Object(j.a)($,2),te=ee[0],ce=ee[1],ae=Object(a.useState)(!1),ne=Object(j.a)(ae,2),se=ne[0],re=ne[1],le=Object(a.useState)(),oe=Object(j.a)(le,2),ie=oe[0],ue=oe[1],de=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,X(Q);case 3:!0===(t=e.sent).success?(m.a.fire({title:"Success!",text:"File Uploaded successfully.",icon:"success",footer:'<a href="'.concat(t.imageUri,'" target="_blank" className="underline">View on IPFS</a>')}),ue(t.imageUri)):m.a.fire({title:"Error!",text:"File Uploading Failed",icon:"error"}),r(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var t=Object(b.a)(p.a.mark((function t(){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(se){t.next=3;break}return m.a.fire({title:"Error!",text:"Please input all required values",icon:"error"}),t.abrupt("return");case 3:if("edit"===e.type&&("edit"===e.type||te)){t.next=10;break}if(Q){t.next=7;break}return m.a.fire({title:"Error!",text:"Please Select book cover image and upload it",icon:"error"}),t.abrupt("return");case 7:if(ie){t.next=10;break}return m.a.fire({title:"Error!",text:"Please Upload book cover image",icon:"error"}),t.abrupt("return");case 10:if(c="http://localhost:5000/api/v1/books/",a={title:w,description:N,email:L,phone:H,cover_image:ie||te,author:B,price:P},f(!0),"edit"!==e.type){t.next=18;break}return t.next=16,q({method:"put",url:c+"/".concat(e.book.id),data:a}).then((function(e){je(),f(!1),m.a.fire({title:"Success!",text:"New Book created successfully.",icon:"success"})})).catch((function(e){console.log(e),f(!1)}));case 16:t.next=20;break;case 18:return t.next=20,q({method:"post",url:c,data:a}).then((function(e){je(),f(!1),m.a.fire({title:"Success!",text:"New Book created successfully.",icon:"success"})})).catch((function(e){console.log(e),f(!1)}));case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),je=function(){Z(null),ue(void 0),v(""),S(""),V(""),K(""),F(""),U(0)};return Object(a.useEffect)((function(){"edit"===e.type&&(v(e.book.title),S(e.book.description),F(e.book.author),U(e.book.price),V(e.book.email),K(e.book.phone),ce(e.book.cover_image))}),[]),Object(a.useEffect)((function(){if(ue(void 0),Q&&Q.length>0){var t=URL.createObjectURL(new Blob(Q));ce(t)}else"edit"!==e.type&&ce(null),Z(null)}),[Q,e.type]),Object(a.useEffect)((function(){re(0!==w.length&&0!==(null===N||void 0===N?void 0:N.length)&&void 0!==P&&P>0)}),[w,N,B,P]),Object(h.jsxs)(T,{title:"book manage",children:[Object(h.jsxs)("div",{className:"bg-app-black-dark rounded-lg flex flex-col p-8 bg-opacity-80 shadow-xl",children:[Object(h.jsxs)("div",{className:"flex flex-col sm:flex-row gap-8",children:[Object(h.jsxs)("div",{className:"w-full sm:w-1/2 flex items-center justify-center sm:mx-12 relative",children:[Object(h.jsx)("div",{className:"py-12 sm:py-0 rounded-lg bg-app-red flex items-center justify-center w-full h-full flex-col cursor-pointer",onClick:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.click()},children:te?Object(h.jsx)("img",{src:te,alt:"cover"}):Object(h.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[Object(h.jsx)("img",{src:"/assets/icon/ico_book.png",alt:"book icon",className:"w-20 "}),Object(h.jsx)("p",{className:"text-center text-white text-xs",children:"select book cover image"})]})}),Q&&!ie&&Object(h.jsx)("div",{className:"bg-app-black bg-opacity-50 w-full absolute bottom-0 top-0 flex items-center justify-center py-4",children:s?Object(h.jsx)(J.ScaleLoader,{color:"#ffffff"}):Object(h.jsx)(g,{onClick:de,className:" hover:animate-bounce",children:"Upload"})}),ie&&Object(h.jsx)("img",{src:"/assets/icon/ico_check.png",alt:"check",className:"w-12 absolute right-5 top-5"})]}),Object(h.jsxs)("div",{className:"w-full sm:w-1/2 flex flex-col gap-3",children:[Object(h.jsx)(M,{require:!0,value:w,setValue:v,label:"Book Title *"}),Object(h.jsx)(M,{require:!0,value:N,setValue:S,label:"Book Description *"}),Object(h.jsx)(M,{require:!0,value:B,setValue:F,label:"Book Author *"}),Object(h.jsx)(M,{require:!0,value:P,setValue:U,label:"Price *",type:"number"}),Object(h.jsx)(M,{require:!0,value:L,setValue:V,label:"Contact Email"}),Object(h.jsx)(M,{require:!0,value:H,setValue:K,label:"Contact Phone"}),Object(h.jsx)("input",{className:"hidden",ref:t,type:"file",accept:"image/*",onChange:function(e){return Z(e.target.files)}})]})]}),Object(h.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-end mt-12 gap-4",children:[Object(h.jsx)(g,{onClick:be,disabled:!se,className:"sm:w-max w-full",children:"edit"===e.type?"Update Book":"Create New Book"}),Object(h.jsx)(i.b,{to:"/",className:"sm:w-max w-full",children:Object(h.jsx)(g,{onClick:function(){},type:"nevative",className:"sm:w-max w-full",children:"Cancel"})})]})]}),d&&Object(h.jsx)(z,{})]})},Q=Object(o.a)((function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(i.a,{children:Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{path:"/",element:Object(h.jsx)(H,{})}),Object(h.jsx)(u.a,{path:"/manage",element:Object(h.jsx)(G,{})})]})})})}));c(127).config();var Z=function(){return Object(h.jsx)(l.a,{children:Object(h.jsx)(k,{children:Object(h.jsx)(a.Suspense,{children:Object(h.jsx)(Q,{})})})})},$=function(e){e&&e instanceof Function&&c.e(100).then(c.bind(null,2489)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(Z,{})})),$()},75:function(e,t,c){},76:function(e,t,c){}},[[129,20,28]]]);
//# sourceMappingURL=main.97729a9a.chunk.js.map