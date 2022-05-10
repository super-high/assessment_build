/*! For license information please see 1.f44577f8.chunk.js.LICENSE.txt */
(this.webpackJsonpassessment=this.webpackJsonpassessment||[]).push([[1],{1452:function(e,r,t){var n=t(140).default,i="Impossible case. Please create issue.",a="The tweak was out of range or the resulted private key is invalid",o="The tweak was out of range or equal to zero",u="Unknow error on context randomization",c="Private Key is invalid",s="Public Key could not be parsed",f="Public Key serialization error",l="The sum of the public keys is not valid",h="Signature could not be parsed",p="The nonce generation function failed, or the private key was invalid",d="Public key could not be recover",y="Scalar was invalid (zero or overflow)";function v(e,r){if(!e)throw new Error(r)}function w(e,r,t){if(v(r instanceof Uint8Array,"Expected ".concat(e," to be an Uint8Array")),void 0!==t)if(Array.isArray(t)){var n=t.join(", "),i="Expected ".concat(e," to be an Uint8Array with length [").concat(n,"]");v(t.includes(r.length),i)}else{var a="Expected ".concat(e," to be an Uint8Array with length ").concat(t);v(r.length===t,a)}}function g(e){v("Boolean"===m(e),"Expected compressed to be a Boolean")}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return new Uint8Array(e)},r=arguments.length>1?arguments[1]:void 0;return"function"===typeof e&&(e=e(r)),w("output",e,r),e}function m(e){return Object.prototype.toString.call(e).slice(8,-1)}e.exports=function(e){return{contextRandomize:function(r){if(v(null===r||r instanceof Uint8Array,"Expected seed to be an Uint8Array or null"),null!==r&&w("seed",r,32),1===e.contextRandomize(r))throw new Error(u)},privateKeyVerify:function(r){return w("private key",r,32),0===e.privateKeyVerify(r)},privateKeyNegate:function(r){switch(w("private key",r,32),e.privateKeyNegate(r)){case 0:return r;case 1:throw new Error(i)}},privateKeyTweakAdd:function(r,t){switch(w("private key",r,32),w("tweak",t,32),e.privateKeyTweakAdd(r,t)){case 0:return r;case 1:throw new Error(a)}},privateKeyTweakMul:function(r,t){switch(w("private key",r,32),w("tweak",t,32),e.privateKeyTweakMul(r,t)){case 0:return r;case 1:throw new Error(o)}},publicKeyVerify:function(r){return w("public key",r,[33,65]),0===e.publicKeyVerify(r)},publicKeyCreate:function(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;switch(w("private key",r,32),g(t),n=b(n,t?33:65),e.publicKeyCreate(n,r)){case 0:return n;case 1:throw new Error(c);case 2:throw new Error(f)}},publicKeyConvert:function(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;switch(w("public key",r,[33,65]),g(t),n=b(n,t?33:65),e.publicKeyConvert(n,r)){case 0:return n;case 1:throw new Error(s);case 2:throw new Error(f)}},publicKeyNegate:function(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;switch(w("public key",r,[33,65]),g(t),n=b(n,t?33:65),e.publicKeyNegate(n,r)){case 0:return n;case 1:throw new Error(s);case 2:throw new Error(i);case 3:throw new Error(f)}},publicKeyCombine:function(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2?arguments[2]:void 0;v(Array.isArray(r),"Expected public keys to be an Array"),v(r.length>0,"Expected public keys array will have more than zero items");var a,o=n(r);try{for(o.s();!(a=o.n()).done;){var u=a.value;w("public key",u,[33,65])}}catch(c){o.e(c)}finally{o.f()}switch(g(t),i=b(i,t?33:65),e.publicKeyCombine(i,r)){case 0:return i;case 1:throw new Error(s);case 2:throw new Error(l);case 3:throw new Error(f)}},publicKeyTweakAdd:function(r,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3?arguments[3]:void 0;switch(w("public key",r,[33,65]),w("tweak",t,32),g(n),i=b(i,n?33:65),e.publicKeyTweakAdd(i,r,t)){case 0:return i;case 1:throw new Error(s);case 2:throw new Error(a)}},publicKeyTweakMul:function(r,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3?arguments[3]:void 0;switch(w("public key",r,[33,65]),w("tweak",t,32),g(n),i=b(i,n?33:65),e.publicKeyTweakMul(i,r,t)){case 0:return i;case 1:throw new Error(s);case 2:throw new Error(o)}},signatureNormalize:function(r){switch(w("signature",r,64),e.signatureNormalize(r)){case 0:return r;case 1:throw new Error(h)}},signatureExport:function(r,t){w("signature",r,64);var n={output:t=b(t,72),outputlen:72};switch(e.signatureExport(n,r)){case 0:return t.slice(0,n.outputlen);case 1:throw new Error(h);case 2:throw new Error(i)}},signatureImport:function(r,t){switch(w("signature",r),t=b(t,64),e.signatureImport(t,r)){case 0:return t;case 1:throw new Error(h);case 2:throw new Error(i)}},ecdsaSign:function(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;w("message",r,32),w("private key",t,32),v("Object"===m(n),"Expected options to be an Object"),void 0!==n.data&&w("options.data",n.data),void 0!==n.noncefn&&v("Function"===m(n.noncefn),"Expected options.noncefn to be a Function");var o={signature:a=b(a,64),recid:null};switch(e.ecdsaSign(o,r,t,n.data,n.noncefn)){case 0:return o;case 1:throw new Error(p);case 2:throw new Error(i)}},ecdsaVerify:function(r,t,n){switch(w("signature",r,64),w("message",t,32),w("public key",n,[33,65]),e.ecdsaVerify(r,t,n)){case 0:return!0;case 3:return!1;case 1:throw new Error(h);case 2:throw new Error(s)}},ecdsaRecover:function(r,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4?arguments[4]:void 0;switch(w("signature",r,64),v("Number"===m(t)&&t>=0&&t<=3,"Expected recovery id to be a Number within interval [0, 3]"),w("message",n,32),g(a),o=b(o,a?33:65),e.ecdsaRecover(o,r,t,n)){case 0:return o;case 1:throw new Error(h);case 2:throw new Error(d);case 3:throw new Error(i)}},ecdh:function(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;switch(w("public key",r,[33,65]),w("private key",t,32),v("Object"===m(n),"Expected options to be an Object"),void 0!==n.data&&w("options.data",n.data),void 0!==n.hashfn?(v("Function"===m(n.hashfn),"Expected options.hashfn to be a Function"),void 0!==n.xbuf&&w("options.xbuf",n.xbuf,32),void 0!==n.ybuf&&w("options.ybuf",n.ybuf,32),w("output",i)):i=b(i,32),e.ecdh(i,r,t,n.data,n.hashfn,n.xbuf,n.ybuf)){case 0:return i;case 1:throw new Error(s);case 2:throw new Error(y)}}}}},1453:function(e,r,t){var n=new(0,t(180).ec)("secp256k1"),i=n.curve,a=i.n.constructor;function o(e){var r=e[0];switch(r){case 2:case 3:return 33!==e.length?null:function(e,r){var t=new a(r);if(t.cmp(i.p)>=0)return null;var o=(t=t.toRed(i.red)).redSqr().redIMul(t).redIAdd(i.b).redSqrt();return 3===e!==o.isOdd()&&(o=o.redNeg()),n.keyPair({pub:{x:t,y:o}})}(r,e.subarray(1,33));case 4:case 6:case 7:return 65!==e.length?null:function(e,r,t){var o=new a(r),u=new a(t);if(o.cmp(i.p)>=0||u.cmp(i.p)>=0)return null;if(o=o.toRed(i.red),u=u.toRed(i.red),(6===e||7===e)&&u.isOdd()!==(7===e))return null;var c=o.redSqr().redIMul(o);return u.redSqr().redISub(c.redIAdd(i.b)).isZero()?n.keyPair({pub:{x:o,y:u}}):null}(r,e.subarray(1,33),e.subarray(33,65));default:return null}}function u(e,r){for(var t=r.encode(null,33===e.length),n=0;n<e.length;++n)e[n]=t[n]}e.exports={contextRandomize:function(){return 0},privateKeyVerify:function(e){var r=new a(e);return r.cmp(i.n)<0&&!r.isZero()?0:1},privateKeyNegate:function(e){var r=new a(e),t=i.n.sub(r).umod(i.n).toArrayLike(Uint8Array,"be",32);return e.set(t),0},privateKeyTweakAdd:function(e,r){var t=new a(r);if(t.cmp(i.n)>=0)return 1;if(t.iadd(new a(e)),t.cmp(i.n)>=0&&t.isub(i.n),t.isZero())return 1;var n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},privateKeyTweakMul:function(e,r){var t=new a(r);if(t.cmp(i.n)>=0||t.isZero())return 1;t.imul(new a(e)),t.cmp(i.n)>=0&&(t=t.umod(i.n));var n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},publicKeyVerify:function(e){return null===o(e)?1:0},publicKeyCreate:function(e,r){var t=new a(r);return t.cmp(i.n)>=0||t.isZero()?1:(u(e,n.keyFromPrivate(r).getPublic()),0)},publicKeyConvert:function(e,r){var t=o(r);return null===t?1:(u(e,t.getPublic()),0)},publicKeyNegate:function(e,r){var t=o(r);if(null===t)return 1;var n=t.getPublic();return n.y=n.y.redNeg(),u(e,n),0},publicKeyCombine:function(e,r){for(var t=new Array(r.length),n=0;n<r.length;++n)if(t[n]=o(r[n]),null===t[n])return 1;for(var i=t[0].getPublic(),a=1;a<t.length;++a)i=i.add(t[a].pub);return i.isInfinity()?2:(u(e,i),0)},publicKeyTweakAdd:function(e,r,t){var n=o(r);if(null===n)return 1;if((t=new a(t)).cmp(i.n)>=0)return 2;var c=n.getPublic().add(i.g.mul(t));return c.isInfinity()?2:(u(e,c),0)},publicKeyTweakMul:function(e,r,t){var n=o(r);return null===n?1:(t=new a(t)).cmp(i.n)>=0||t.isZero()?2:(u(e,n.getPublic().mul(t)),0)},signatureNormalize:function(e){var r=new a(e.subarray(0,32)),t=new a(e.subarray(32,64));return r.cmp(i.n)>=0||t.cmp(i.n)>=0?1:(1===t.cmp(n.nh)&&e.set(i.n.sub(t).toArrayLike(Uint8Array,"be",32),32),0)},signatureExport:function(e,r){var t=r.subarray(0,32),n=r.subarray(32,64);if(new a(t).cmp(i.n)>=0)return 1;if(new a(n).cmp(i.n)>=0)return 1;var o=e.output,u=o.subarray(4,37);u[0]=0,u.set(t,1);for(var c=33,s=0;c>1&&0===u[s]&&!(128&u[s+1]);--c,++s);if(128&(u=u.subarray(s))[0])return 1;if(c>1&&0===u[0]&&!(128&u[1]))return 1;var f=o.subarray(39,72);f[0]=0,f.set(n,1);for(var l=33,h=0;l>1&&0===f[h]&&!(128&f[h+1]);--l,++h);return 128&(f=f.subarray(h))[0]||l>1&&0===f[0]&&!(128&f[1])?1:(e.outputlen=6+c+l,o[0]=48,o[1]=e.outputlen-2,o[2]=2,o[3]=u.length,o.set(u,4),o[4+c]=2,o[5+c]=f.length,o.set(f,6+c),0)},signatureImport:function(e,r){if(r.length<8)return 1;if(r.length>72)return 1;if(48!==r[0])return 1;if(r[1]!==r.length-2)return 1;if(2!==r[2])return 1;var t=r[3];if(0===t)return 1;if(5+t>=r.length)return 1;if(2!==r[4+t])return 1;var n=r[5+t];if(0===n)return 1;if(6+t+n!==r.length)return 1;if(128&r[4])return 1;if(t>1&&0===r[4]&&!(128&r[5]))return 1;if(128&r[t+6])return 1;if(n>1&&0===r[t+6]&&!(128&r[t+7]))return 1;var o=r.subarray(4,4+t);if(33===o.length&&0===o[0]&&(o=o.subarray(1)),o.length>32)return 1;var u=r.subarray(6+t);if(33===u.length&&0===u[0]&&(u=u.slice(1)),u.length>32)throw new Error("S length is too long");var c=new a(o);c.cmp(i.n)>=0&&(c=new a(0));var s=new a(r.subarray(6+t));return s.cmp(i.n)>=0&&(s=new a(0)),e.set(c.toArrayLike(Uint8Array,"be",32),0),e.set(s.toArrayLike(Uint8Array,"be",32),32),0},ecdsaSign:function(e,r,t,o,u){if(u){var c=u;u=function(e){var n=c(r,t,null,o,e);if(!(n instanceof Uint8Array&&32===n.length))throw new Error("This is the way");return new a(n)}}var s,f=new a(t);if(f.cmp(i.n)>=0||f.isZero())return 1;try{s=n.sign(r,t,{canonical:!0,k:u,pers:o})}catch(l){return 1}return e.signature.set(s.r.toArrayLike(Uint8Array,"be",32),0),e.signature.set(s.s.toArrayLike(Uint8Array,"be",32),32),e.recid=s.recoveryParam,0},ecdsaVerify:function(e,r,t){var u={r:e.subarray(0,32),s:e.subarray(32,64)},c=new a(u.r),s=new a(u.s);if(c.cmp(i.n)>=0||s.cmp(i.n)>=0)return 1;if(1===s.cmp(n.nh)||c.isZero()||s.isZero())return 3;var f=o(t);if(null===f)return 2;var l=f.getPublic();return n.verify(r,u,l)?0:3},ecdsaRecover:function(e,r,t,o){var c,s={r:r.slice(0,32),s:r.slice(32,64)},f=new a(s.r),l=new a(s.s);if(f.cmp(i.n)>=0||l.cmp(i.n)>=0)return 1;if(f.isZero()||l.isZero())return 2;try{c=n.recoverPubKey(o,s,t)}catch(h){return 2}return u(e,c),0},ecdh:function(e,r,t,u,c,s,f){var l=o(r);if(null===l)return 1;var h=new a(t);if(h.cmp(i.n)>=0||h.isZero())return 2;var p=l.getPublic().mul(h);if(void 0===c)for(var d=p.encode(null,!0),y=n.hash().update(d).digest(),v=0;v<32;++v)e[v]=y[v];else{s||(s=new Uint8Array(32));for(var w=p.getX().toArray("be",32),g=0;g<32;++g)s[g]=w[g];f||(f=new Uint8Array(32));for(var b=p.getY().toArray("be",32),m=0;m<32;++m)f[m]=b[m];var E=c(s,f,u);if(!(E instanceof Uint8Array&&E.length===e.length))return 2;e.set(E)}return 0}}},1454:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(207);r.getRandomBytes=function(e){return new Promise((function(r,t){n(e,(function(e,n){e?t(e):r(n)}))}))},r.getRandomBytesSync=function(e){return n(e)}},1455:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.createHashFunction=function(r){return function(t){var n=r();return n.update(t),e.from(n.digest())}}}).call(this,t(51).Buffer)},194:function(e,r,t){"use strict";(function(r){var n=t(33);function i(e,r){if(e===r)return 0;for(var t=e.length,n=r.length,i=0,a=Math.min(t,n);i<a;++i)if(e[i]!==r[i]){t=e[i],n=r[i];break}return t<n?-1:n<t?1:0}function a(e){return r.Buffer&&"function"===typeof r.Buffer.isBuffer?r.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var o=t(189),u=Object.prototype.hasOwnProperty,c=Array.prototype.slice,s="foo"===function(){}.name;function f(e){return Object.prototype.toString.call(e)}function l(e){return!a(e)&&("function"===typeof r.ArrayBuffer&&("function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var h=e.exports=g,p=/\s*function\s+([^\(\s]*)\s*/;function d(e){if(o.isFunction(e)){if(s)return e.name;var r=e.toString().match(p);return r&&r[1]}}function y(e,r){return"string"===typeof e?e.length<r?e:e.slice(0,r):e}function v(e){if(s||!o.isFunction(e))return o.inspect(e);var r=d(e);return"[Function"+(r?": "+r:"")+"]"}function w(e,r,t,n,i){throw new h.AssertionError({message:t,actual:e,expected:r,operator:n,stackStartFunction:i})}function g(e,r){e||w(e,!0,r,"==",h.ok)}function b(e,r,t,n){if(e===r)return!0;if(a(e)&&a(r))return 0===i(e,r);if(o.isDate(e)&&o.isDate(r))return e.getTime()===r.getTime();if(o.isRegExp(e)&&o.isRegExp(r))return e.source===r.source&&e.global===r.global&&e.multiline===r.multiline&&e.lastIndex===r.lastIndex&&e.ignoreCase===r.ignoreCase;if(null!==e&&"object"===typeof e||null!==r&&"object"===typeof r){if(l(e)&&l(r)&&f(e)===f(r)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===i(new Uint8Array(e.buffer),new Uint8Array(r.buffer));if(a(e)!==a(r))return!1;var u=(n=n||{actual:[],expected:[]}).actual.indexOf(e);return-1!==u&&u===n.expected.indexOf(r)||(n.actual.push(e),n.expected.push(r),function(e,r,t,n){if(null===e||void 0===e||null===r||void 0===r)return!1;if(o.isPrimitive(e)||o.isPrimitive(r))return e===r;if(t&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(r))return!1;var i=m(e),a=m(r);if(i&&!a||!i&&a)return!1;if(i)return b(e=c.call(e),r=c.call(r),t);var u,s,f=x(e),l=x(r);if(f.length!==l.length)return!1;for(f.sort(),l.sort(),s=f.length-1;s>=0;s--)if(f[s]!==l[s])return!1;for(s=f.length-1;s>=0;s--)if(!b(e[u=f[s]],r[u],t,n))return!1;return!0}(e,r,t,n))}return t?e===r:e==r}function m(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function E(e,r){if(!e||!r)return!1;if("[object RegExp]"==Object.prototype.toString.call(r))return r.test(e);try{if(e instanceof r)return!0}catch(t){}return!Error.isPrototypeOf(r)&&!0===r.call({},e)}function k(e,r,t,n){var i;if("function"!==typeof r)throw new TypeError('"block" argument must be a function');"string"===typeof t&&(n=t,t=null),i=function(e){var r;try{e()}catch(t){r=t}return r}(r),n=(t&&t.name?" ("+t.name+").":".")+(n?" "+n:"."),e&&!i&&w(i,t,"Missing expected exception"+n);var a="string"===typeof n,u=!e&&i&&!t;if((!e&&o.isError(i)&&a&&E(i,t)||u)&&w(i,t,"Got unwanted exception"+n),e&&i&&t&&!E(i,t)||!e&&i)throw i}h.AssertionError=function(e){var r;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=y(v((r=this).actual),128)+" "+r.operator+" "+y(v(r.expected),128),this.generatedMessage=!0);var t=e.stackStartFunction||w;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var i=n.stack,a=d(t),o=i.indexOf("\n"+a);if(o>=0){var u=i.indexOf("\n",o+1);i=i.substring(u+1)}this.stack=i}}},o.inherits(h.AssertionError,Error),h.fail=w,h.ok=g,h.equal=function(e,r,t){e!=r&&w(e,r,t,"==",h.equal)},h.notEqual=function(e,r,t){e==r&&w(e,r,t,"!=",h.notEqual)},h.deepEqual=function(e,r,t){b(e,r,!1)||w(e,r,t,"deepEqual",h.deepEqual)},h.deepStrictEqual=function(e,r,t){b(e,r,!0)||w(e,r,t,"deepStrictEqual",h.deepStrictEqual)},h.notDeepEqual=function(e,r,t){b(e,r,!1)&&w(e,r,t,"notDeepEqual",h.notDeepEqual)},h.notDeepStrictEqual=function e(r,t,n){b(r,t,!0)&&w(r,t,n,"notDeepStrictEqual",e)},h.strictEqual=function(e,r,t){e!==r&&w(e,r,t,"===",h.strictEqual)},h.notStrictEqual=function(e,r,t){e===r&&w(e,r,t,"!==",h.notStrictEqual)},h.throws=function(e,r,t){k(!0,e,r,t)},h.doesNotThrow=function(e,r,t){k(!1,e,r,t)},h.ifError=function(e){if(e)throw e},h.strict=n((function e(r,t){r||w(r,!0,t,"==",e)}),h,{equal:h.strictEqual,deepEqual:h.deepStrictEqual,notEqual:h.notStrictEqual,notDeepEqual:h.notDeepStrictEqual}),h.strict.strict=h.strict;var x=Object.keys||function(e){var r=[];for(var t in e)u.call(e,t)&&r.push(t);return r}}).call(this,t(19))},229:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.getLength=r.decode=r.encode=void 0;var i=n(t(205));function a(e,r){if("0"===e[0]&&"0"===e[1])throw new Error("invalid RLP: extra zeros");return parseInt(e,r)}function o(r,t){if(r<56)return e.from([r+t]);var n=s(r),i=s(t+55+n.length/2);return e.from(i+n,"hex")}function u(r){var t,n,i,o,c,s=[],f=r[0];if(f<=127)return{data:r.slice(0,1),remainder:r.slice(1)};if(f<=183){if(t=f-127,i=128===f?e.from([]):r.slice(1,t),2===t&&i[0]<128)throw new Error("invalid rlp encoding: byte must be less 0x80");return{data:i,remainder:r.slice(t)}}if(f<=191){if(n=f-182,r.length-1<n)throw new Error("invalid RLP: not enough bytes for string length");if((t=a(r.slice(1,n).toString("hex"),16))<=55)throw new Error("invalid RLP: expected string length to be greater than 55");if((i=r.slice(n,t+n)).length<t)throw new Error("invalid RLP: not enough bytes for string");return{data:i,remainder:r.slice(t+n)}}if(f<=247){for(t=f-191,o=r.slice(1,t);o.length;)c=u(o),s.push(c.data),o=c.remainder;return{data:s,remainder:r.slice(t)}}var l=(n=f-246)+(t=a(r.slice(1,n).toString("hex"),16));if(l>r.length)throw new Error("invalid rlp: total length is larger than the data");if(0===(o=r.slice(n,l)).length)throw new Error("invalid rlp, List has a invalid length");for(;o.length;)c=u(o),s.push(c.data),o=c.remainder;return{data:s,remainder:r.slice(l)}}function c(e){return"0x"===e.slice(0,2)}function s(e){if(e<0)throw new Error("Invalid integer as argument, must be unsigned!");var r=e.toString(16);return r.length%2?"0"+r:r}function f(r){if(!e.isBuffer(r)){if("string"===typeof r)return c(r)?e.from((t="string"!==typeof(n=r)?n:c(n)?n.slice(2):n).length%2?"0"+t:t,"hex"):e.from(r);if("number"===typeof r||"bigint"===typeof r)return r?function(r){var t=s(r);return e.from(t,"hex")}(r):e.from([]);if(null===r||void 0===r)return e.from([]);if(r instanceof Uint8Array)return e.from(r);if(i.default.isBN(r))return e.from(r.toArray());throw new Error("invalid type")}var t,n;return r}r.encode=function r(t){if(Array.isArray(t)){for(var n=[],i=0;i<t.length;i++)n.push(r(t[i]));var a=e.concat(n);return e.concat([o(a.length,192),a])}var u=f(t);return 1===u.length&&u[0]<128?u:e.concat([o(u.length,128),u])},r.decode=function(r,t){if(void 0===t&&(t=!1),!r||0===r.length)return e.from([]);var n=u(f(r));if(t)return n;if(0!==n.remainder.length)throw new Error("invalid remainder");return n.data},r.getLength=function(r){if(!r||0===r.length)return e.from([]);var t=f(r),n=t[0];if(n<=127)return t.length;if(n<=183)return n-127;if(n<=191)return n-182;if(n<=247)return n-191;var i=n-246;return i+a(t.slice(1,i).toString("hex"),16)}}).call(this,t(51).Buffer)},297:function(e,r,t){"use strict";var n=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(i,a){function o(e){try{c(n.next(e))}catch(r){a(r)}}function u(e){try{c(n.throw(e))}catch(r){a(r)}}function c(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,u)}c((n=n.apply(e,r||[])).next())}))},i=this&&this.__generator||function(e,r){var t,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=r.call(e,o)}catch(u){a=[6,u],n=0}finally{t=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(r,"__esModule",{value:!0});var a=t(441),o=t(1454);r.createPrivateKey=function(){return n(this,void 0,void 0,(function(){var e;return i(this,(function(r){switch(r.label){case 0:return[4,o.getRandomBytes(32)];case 1:return e=r.sent(),a.privateKeyVerify(e)?[2,e]:[3,0];case 2:return[2]}}))}))},r.createPrivateKeySync=function(){for(;;){var e=o.getRandomBytesSync(32);if(a.privateKeyVerify(e))return e}},function(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}(t(441))},317:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1455),i=t(628);r.keccak224=n.createHashFunction((function(){return i("keccak224")})),r.keccak256=n.createHashFunction((function(){return i("keccak256")})),r.keccak384=n.createHashFunction((function(){return i("keccak384")})),r.keccak512=n.createHashFunction((function(){return i("keccak512")}))},441:function(e,r,t){e.exports=t(1452)(t(1453))}}]);
//# sourceMappingURL=1.f44577f8.chunk.js.map