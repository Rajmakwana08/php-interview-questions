(function(){const re=document.createElement("link").relList;if(re&&re.supports&&re.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))h(R);new MutationObserver(R=>{for(const $ of R)if($.type==="childList")for(const ye of $.addedNodes)ye.tagName==="LINK"&&ye.rel==="modulepreload"&&h(ye)}).observe(document,{childList:!0,subtree:!0});function F(R){const $={};return R.integrity&&($.integrity=R.integrity),R.referrerPolicy&&($.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?$.credentials="include":R.crossOrigin==="anonymous"?$.credentials="omit":$.credentials="same-origin",$}function h(R){if(R.ep)return;R.ep=!0;const $=F(R);fetch(R.href,$)}})();var lf={exports:{}},gn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Jy(){if(md)return gn;md=1;var D=Symbol.for("react.transitional.element"),re=Symbol.for("react.fragment");function F(h,R,$){var ye=null;if($!==void 0&&(ye=""+$),R.key!==void 0&&(ye=""+R.key),"key"in R){$={};for(var Re in R)Re!=="key"&&($[Re]=R[Re])}else $=R;return R=$.ref,{$$typeof:D,type:h,key:ye,ref:R!==void 0?R:null,props:$}}return gn.Fragment=re,gn.jsx=F,gn.jsxs=F,gn}var yd;function $y(){return yd||(yd=1,lf.exports=Jy()),lf.exports}var qe=$y(),nf={exports:{}},N={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function Wy(){if(hd)return N;hd=1;var D=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),ye=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),se=Symbol.iterator;function $e(o){return o===null||typeof o!="object"?null:(o=se&&o[se]||o["@@iterator"],typeof o=="function"?o:null)}var Be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,_t={};function We(o,E,M){this.props=o,this.context=E,this.refs=_t,this.updater=M||Be}We.prototype.isReactComponent={},We.prototype.setState=function(o,E){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,E,"setState")},We.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function $t(){}$t.prototype=We.prototype;function Ce(o,E,M){this.props=o,this.context=E,this.refs=_t,this.updater=M||Be}var it=Ce.prototype=new $t;it.constructor=Ce,He(it,We.prototype),it.isPureReactComponent=!0;var Et=Array.isArray;function Qe(){}var Z={H:null,A:null,T:null,S:null},Ye=Object.prototype.hasOwnProperty;function Tt(o,E,M){var z=M.ref;return{$$typeof:D,type:o,key:E,ref:z!==void 0?z:null,props:M}}function ja(o,E){return Tt(o.type,E,o.props)}function At(o){return typeof o=="object"&&o!==null&&o.$$typeof===D}function je(o){var E={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(M){return E[M]})}var ba=/\/+/g;function Ut(o,E){return typeof o=="object"&&o!==null&&o.key!=null?je(""+o.key):E.toString(36)}function pt(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(Qe,Qe):(o.status="pending",o.then(function(E){o.status==="pending"&&(o.status="fulfilled",o.value=E)},function(E){o.status==="pending"&&(o.status="rejected",o.reason=E)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function S(o,E,M,z,q){var Y=typeof o;(Y==="undefined"||Y==="boolean")&&(o=null);var I=!1;if(o===null)I=!0;else switch(Y){case"bigint":case"string":case"number":I=!0;break;case"object":switch(o.$$typeof){case D:case re:I=!0;break;case k:return I=o._init,S(I(o._payload),E,M,z,q)}}if(I)return q=q(o),I=z===""?"."+Ut(o,0):z,Et(q)?(M="",I!=null&&(M=I.replace(ba,"$&/")+"/"),S(q,E,M,"",function(Ol){return Ol})):q!=null&&(At(q)&&(q=ja(q,M+(q.key==null||o&&o.key===q.key?"":(""+q.key).replace(ba,"$&/")+"/")+I)),E.push(q)),1;I=0;var Le=z===""?".":z+":";if(Et(o))for(var he=0;he<o.length;he++)z=o[he],Y=Le+Ut(z,he),I+=S(z,E,M,Y,q);else if(he=$e(o),typeof he=="function")for(o=he.call(o),he=0;!(z=o.next()).done;)z=z.value,Y=Le+Ut(z,he++),I+=S(z,E,M,Y,q);else if(Y==="object"){if(typeof o.then=="function")return S(pt(o),E,M,z,q);throw E=String(o),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return I}function A(o,E,M){if(o==null)return o;var z=[],q=0;return S(o,z,"","",function(Y){return E.call(M,Y,q++)}),z}function L(o){if(o._status===-1){var E=o._result;E=E(),E.then(function(M){(o._status===0||o._status===-1)&&(o._status=1,o._result=M)},function(M){(o._status===0||o._status===-1)&&(o._status=2,o._result=M)}),o._status===-1&&(o._status=0,o._result=E)}if(o._status===1)return o._result.default;throw o._result}var te=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},ue={map:A,forEach:function(o,E,M){A(o,function(){E.apply(this,arguments)},M)},count:function(o){var E=0;return A(o,function(){E++}),E},toArray:function(o){return A(o,function(E){return E})||[]},only:function(o){if(!At(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return N.Activity=H,N.Children=ue,N.Component=We,N.Fragment=F,N.Profiler=R,N.PureComponent=Ce,N.StrictMode=h,N.Suspense=C,N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,N.__COMPILER_RUNTIME={__proto__:null,c:function(o){return Z.H.useMemoCache(o)}},N.cache=function(o){return function(){return o.apply(null,arguments)}},N.cacheSignal=function(){return null},N.cloneElement=function(o,E,M){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var z=He({},o.props),q=o.key;if(E!=null)for(Y in E.key!==void 0&&(q=""+E.key),E)!Ye.call(E,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&E.ref===void 0||(z[Y]=E[Y]);var Y=arguments.length-2;if(Y===1)z.children=M;else if(1<Y){for(var I=Array(Y),Le=0;Le<Y;Le++)I[Le]=arguments[Le+2];z.children=I}return Tt(o.type,q,z)},N.createContext=function(o){return o={$$typeof:ye,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:$,_context:o},o},N.createElement=function(o,E,M){var z,q={},Y=null;if(E!=null)for(z in E.key!==void 0&&(Y=""+E.key),E)Ye.call(E,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(q[z]=E[z]);var I=arguments.length-2;if(I===1)q.children=M;else if(1<I){for(var Le=Array(I),he=0;he<I;he++)Le[he]=arguments[he+2];q.children=Le}if(o&&o.defaultProps)for(z in I=o.defaultProps,I)q[z]===void 0&&(q[z]=I[z]);return Tt(o,Y,q)},N.createRef=function(){return{current:null}},N.forwardRef=function(o){return{$$typeof:Re,render:o}},N.isValidElement=At,N.lazy=function(o){return{$$typeof:k,_payload:{_status:-1,_result:o},_init:L}},N.memo=function(o,E){return{$$typeof:T,type:o,compare:E===void 0?null:E}},N.startTransition=function(o){var E=Z.T,M={};Z.T=M;try{var z=o(),q=Z.S;q!==null&&q(M,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Qe,te)}catch(Y){te(Y)}finally{E!==null&&M.types!==null&&(E.types=M.types),Z.T=E}},N.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},N.use=function(o){return Z.H.use(o)},N.useActionState=function(o,E,M){return Z.H.useActionState(o,E,M)},N.useCallback=function(o,E){return Z.H.useCallback(o,E)},N.useContext=function(o){return Z.H.useContext(o)},N.useDebugValue=function(){},N.useDeferredValue=function(o,E){return Z.H.useDeferredValue(o,E)},N.useEffect=function(o,E){return Z.H.useEffect(o,E)},N.useEffectEvent=function(o){return Z.H.useEffectEvent(o)},N.useId=function(){return Z.H.useId()},N.useImperativeHandle=function(o,E,M){return Z.H.useImperativeHandle(o,E,M)},N.useInsertionEffect=function(o,E){return Z.H.useInsertionEffect(o,E)},N.useLayoutEffect=function(o,E){return Z.H.useLayoutEffect(o,E)},N.useMemo=function(o,E){return Z.H.useMemo(o,E)},N.useOptimistic=function(o,E){return Z.H.useOptimistic(o,E)},N.useReducer=function(o,E,M){return Z.H.useReducer(o,E,M)},N.useRef=function(o){return Z.H.useRef(o)},N.useState=function(o){return Z.H.useState(o)},N.useSyncExternalStore=function(o,E,M){return Z.H.useSyncExternalStore(o,E,M)},N.useTransition=function(){return Z.H.useTransition()},N.version="19.2.0",N}var vd;function of(){return vd||(vd=1,nf.exports=Wy()),nf.exports}var Ad=of(),uf={exports:{}},bn={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function Fy(){return pd||(pd=1,(function(D){function re(S,A){var L=S.length;S.push(A);e:for(;0<L;){var te=L-1>>>1,ue=S[te];if(0<R(ue,A))S[te]=A,S[L]=ue,L=te;else break e}}function F(S){return S.length===0?null:S[0]}function h(S){if(S.length===0)return null;var A=S[0],L=S.pop();if(L!==A){S[0]=L;e:for(var te=0,ue=S.length,o=ue>>>1;te<o;){var E=2*(te+1)-1,M=S[E],z=E+1,q=S[z];if(0>R(M,L))z<ue&&0>R(q,M)?(S[te]=q,S[z]=L,te=z):(S[te]=M,S[E]=L,te=E);else if(z<ue&&0>R(q,L))S[te]=q,S[z]=L,te=z;else break e}}return A}function R(S,A){var L=S.sortIndex-A.sortIndex;return L!==0?L:S.id-A.id}if(D.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var $=performance;D.unstable_now=function(){return $.now()}}else{var ye=Date,Re=ye.now();D.unstable_now=function(){return ye.now()-Re}}var C=[],T=[],k=1,H=null,se=3,$e=!1,Be=!1,He=!1,_t=!1,We=typeof setTimeout=="function"?setTimeout:null,$t=typeof clearTimeout=="function"?clearTimeout:null,Ce=typeof setImmediate<"u"?setImmediate:null;function it(S){for(var A=F(T);A!==null;){if(A.callback===null)h(T);else if(A.startTime<=S)h(T),A.sortIndex=A.expirationTime,re(C,A);else break;A=F(T)}}function Et(S){if(He=!1,it(S),!Be)if(F(C)!==null)Be=!0,Qe||(Qe=!0,je());else{var A=F(T);A!==null&&pt(Et,A.startTime-S)}}var Qe=!1,Z=-1,Ye=5,Tt=-1;function ja(){return _t?!0:!(D.unstable_now()-Tt<Ye)}function At(){if(_t=!1,Qe){var S=D.unstable_now();Tt=S;var A=!0;try{e:{Be=!1,He&&(He=!1,$t(Z),Z=-1),$e=!0;var L=se;try{t:{for(it(S),H=F(C);H!==null&&!(H.expirationTime>S&&ja());){var te=H.callback;if(typeof te=="function"){H.callback=null,se=H.priorityLevel;var ue=te(H.expirationTime<=S);if(S=D.unstable_now(),typeof ue=="function"){H.callback=ue,it(S),A=!0;break t}H===F(C)&&h(C),it(S)}else h(C);H=F(C)}if(H!==null)A=!0;else{var o=F(T);o!==null&&pt(Et,o.startTime-S),A=!1}}break e}finally{H=null,se=L,$e=!1}A=void 0}}finally{A?je():Qe=!1}}}var je;if(typeof Ce=="function")je=function(){Ce(At)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,Ut=ba.port2;ba.port1.onmessage=At,je=function(){Ut.postMessage(null)}}else je=function(){We(At,0)};function pt(S,A){Z=We(function(){S(D.unstable_now())},A)}D.unstable_IdlePriority=5,D.unstable_ImmediatePriority=1,D.unstable_LowPriority=4,D.unstable_NormalPriority=3,D.unstable_Profiling=null,D.unstable_UserBlockingPriority=2,D.unstable_cancelCallback=function(S){S.callback=null},D.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ye=0<S?Math.floor(1e3/S):5},D.unstable_getCurrentPriorityLevel=function(){return se},D.unstable_next=function(S){switch(se){case 1:case 2:case 3:var A=3;break;default:A=se}var L=se;se=A;try{return S()}finally{se=L}},D.unstable_requestPaint=function(){_t=!0},D.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var L=se;se=S;try{return A()}finally{se=L}},D.unstable_scheduleCallback=function(S,A,L){var te=D.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?te+L:te):L=te,S){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=L+ue,S={id:k++,callback:A,priorityLevel:S,startTime:L,expirationTime:ue,sortIndex:-1},L>te?(S.sortIndex=L,re(T,S),F(C)===null&&S===F(T)&&(He?($t(Z),Z=-1):He=!0,pt(Et,L-te))):(S.sortIndex=ue,re(C,S),Be||$e||(Be=!0,Qe||(Qe=!0,je()))),S},D.unstable_shouldYield=ja,D.unstable_wrapCallback=function(S){var A=se;return function(){var L=se;se=A;try{return S.apply(this,arguments)}finally{se=L}}}})(ff)),ff}var Sd;function ky(){return Sd||(Sd=1,cf.exports=Fy()),cf.exports}var sf={exports:{}},xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function Iy(){if(gd)return xe;gd=1;var D=of();function re(C){var T="https://react.dev/errors/"+C;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)T+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+C+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(){}var h={d:{f:F,r:function(){throw Error(re(522))},D:F,C:F,L:F,m:F,X:F,S:F,M:F},p:0,findDOMNode:null},R=Symbol.for("react.portal");function $(C,T,k){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:H==null?null:""+H,children:C,containerInfo:T,implementation:k}}var ye=D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Re(C,T){if(C==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,xe.createPortal=function(C,T){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(re(299));return $(C,T,null,k)},xe.flushSync=function(C){var T=ye.T,k=h.p;try{if(ye.T=null,h.p=2,C)return C()}finally{ye.T=T,h.p=k,h.d.f()}},xe.preconnect=function(C,T){typeof C=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,h.d.C(C,T))},xe.prefetchDNS=function(C){typeof C=="string"&&h.d.D(C)},xe.preinit=function(C,T){if(typeof C=="string"&&T&&typeof T.as=="string"){var k=T.as,H=Re(k,T.crossOrigin),se=typeof T.integrity=="string"?T.integrity:void 0,$e=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;k==="style"?h.d.S(C,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:H,integrity:se,fetchPriority:$e}):k==="script"&&h.d.X(C,{crossOrigin:H,integrity:se,fetchPriority:$e,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},xe.preinitModule=function(C,T){if(typeof C=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var k=Re(T.as,T.crossOrigin);h.d.M(C,{crossOrigin:k,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&h.d.M(C)},xe.preload=function(C,T){if(typeof C=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var k=T.as,H=Re(k,T.crossOrigin);h.d.L(C,k,{crossOrigin:H,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},xe.preloadModule=function(C,T){if(typeof C=="string")if(T){var k=Re(T.as,T.crossOrigin);h.d.m(C,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:k,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else h.d.m(C)},xe.requestFormReset=function(C){h.d.r(C)},xe.unstable_batchedUpdates=function(C,T){return C(T)},xe.useFormState=function(C,T,k){return ye.H.useFormState(C,T,k)},xe.useFormStatus=function(){return ye.H.useHostTransitionStatus()},xe.version="19.2.0",xe}var bd;function Py(){if(bd)return sf.exports;bd=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(re){console.error(re)}}return D(),sf.exports=Iy(),sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function eh(){if(Ed)return bn;Ed=1;var D=ky(),re=of(),F=Py();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function ye(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Re(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if($(e)!==e)throw Error(h(188))}function T(e){var t=e.alternate;if(!t){if(t=$(e),t===null)throw Error(h(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var u=n.alternate;if(u===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===a)return C(n),e;if(u===l)return C(n),t;u=u.sibling}throw Error(h(188))}if(a.return!==l.return)a=n,l=u;else{for(var i=!1,c=n.child;c;){if(c===a){i=!0,a=n,l=u;break}if(c===l){i=!0,l=n,a=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===a){i=!0,a=u,l=n;break}if(c===l){i=!0,l=u,a=n;break}c=c.sibling}if(!i)throw Error(h(189))}}if(a.alternate!==l)throw Error(h(190))}if(a.tag!==3)throw Error(h(188));return a.stateNode.current===a?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var H=Object.assign,se=Symbol.for("react.element"),$e=Symbol.for("react.transitional.element"),Be=Symbol.for("react.portal"),He=Symbol.for("react.fragment"),_t=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),$t=Symbol.for("react.consumer"),Ce=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),ja=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=At&&e[At]||e["@@iterator"],typeof e=="function"?e:null)}var ba=Symbol.for("react.client.reference");function Ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ba?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case He:return"Fragment";case We:return"Profiler";case _t:return"StrictMode";case Et:return"Suspense";case Qe:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Be:return"Portal";case Ce:return e.displayName||"Context";case $t:return(e._context.displayName||"Context")+".Consumer";case it:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Ut(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return Ut(e(t))}catch{}}return null}var pt=Array.isArray,S=re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},te=[],ue=-1;function o(e){return{current:e}}function E(e){0>ue||(e.current=te[ue],te[ue]=null,ue--)}function M(e,t){ue++,te[ue]=e.current,e.current=t}var z=o(null),q=o(null),Y=o(null),I=o(null);function Le(e,t){switch(M(Y,t),M(q,e),M(z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qr(t),e=Br(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(z),M(z,e)}function he(){E(z),E(q),E(Y)}function Ol(e){e.memoizedState!==null&&M(I,e);var t=z.current,a=Br(t,e.type);t!==a&&(M(q,e),M(z,a))}function En(e){q.current===e&&(E(z),E(q)),I.current===e&&(E(I),hn._currentValue=L)}var Yu,rf;function Ea(e){if(Yu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Yu=t&&t[1]||"",rf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yu+e+rf}var ju=!1;function wu(e,t){if(!e||ju)return"";ju=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(v){var y=v}Reflect.construct(e,[],b)}else{try{b.call()}catch(v){y=v}e.call(b.prototype)}}else{try{throw Error()}catch(v){y=v}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(v){if(v&&y&&typeof v.stack=="string")return[v.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),m=c.split(`
`);for(n=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(l===f.length||n===m.length)for(l=f.length-1,n=m.length-1;1<=l&&0<=n&&f[l]!==m[n];)n--;for(;1<=l&&0<=n;l--,n--)if(f[l]!==m[n]){if(l!==1||n!==1)do if(l--,n--,0>n||f[l]!==m[n]){var p=`
`+f[l].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=l&&0<=n);break}}}finally{ju=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ea(a):""}function Md(e,t){switch(e.tag){case 26:case 27:case 5:return Ea(e.type);case 16:return Ea("Lazy");case 13:return e.child!==t&&t!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return wu(e.type,!1);case 11:return wu(e.type.render,!1);case 1:return wu(e.type,!0);case 31:return Ea("Activity");default:return""}}function df(e){try{var t="",a=null;do t+=Md(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Gu=Object.prototype.hasOwnProperty,Xu=D.unstable_scheduleCallback,Zu=D.unstable_cancelCallback,Od=D.unstable_shouldYield,Dd=D.unstable_requestPaint,Fe=D.unstable_now,zd=D.unstable_getCurrentPriorityLevel,mf=D.unstable_ImmediatePriority,yf=D.unstable_UserBlockingPriority,Tn=D.unstable_NormalPriority,_d=D.unstable_LowPriority,hf=D.unstable_IdlePriority,Ud=D.log,Cd=D.unstable_setDisableYieldValue,Dl=null,ke=null;function Wt(e){if(typeof Ud=="function"&&Cd(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(Dl,e)}catch{}}var Ie=Math.clz32?Math.clz32:Hd,xd=Math.log,Rd=Math.LN2;function Hd(e){return e>>>=0,e===0?32:31-(xd(e)/Rd|0)|0}var An=256,Mn=262144,On=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~u,l!==0?n=Ta(l):(i&=c,i!==0?n=Ta(i):a||(a=c&~e,a!==0&&(n=Ta(a))))):(c=l&~u,c!==0?n=Ta(c):i!==0?n=Ta(i):a||(a=l&~e,a!==0&&(n=Ta(a)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:n}function zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ld(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(){var e=On;return On<<=1,(On&62914560)===0&&(On=4194304),e}function Vu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nd(e,t,a,l,n,u){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,m=e.hiddenUpdates;for(a=i&~a;0<a;){var p=31-Ie(a),b=1<<p;c[p]=0,f[p]=-1;var y=m[p];if(y!==null)for(m[p]=null,p=0;p<y.length;p++){var v=y[p];v!==null&&(v.lane&=-536870913)}a&=~b}l!==0&&pf(e,l,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function pf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ie(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Sf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ie(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function gf(e,t){var a=t&-t;return a=(a&42)!==0?1:Ku(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ku(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ju(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bf(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:id(e.type))}function Ef(e,t){var a=A.p;try{return A.p=e,t()}finally{A.p=a}}var Ft=Math.random().toString(36).slice(2),Oe="__reactFiber$"+Ft,we="__reactProps$"+Ft,wa="__reactContainer$"+Ft,$u="__reactEvents$"+Ft,qd="__reactListeners$"+Ft,Bd="__reactHandles$"+Ft,Tf="__reactResources$"+Ft,Ul="__reactMarker$"+Ft;function Wu(e){delete e[Oe],delete e[we],delete e[$u],delete e[qd],delete e[Bd]}function Ga(e){var t=e[Oe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[wa]||a[Oe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Zr(e);e!==null;){if(a=e[Oe])return a;e=Zr(e)}return t}e=a,a=e.parentNode}return null}function Xa(e){if(e=e[Oe]||e[wa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Cl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Za(e){var t=e[Tf];return t||(t=e[Tf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ae(e){e[Ul]=!0}var Af=new Set,Mf={};function Aa(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Mf[e]=t,e=0;e<t.length;e++)Af.add(t[e])}var Qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Of={},Df={};function Yd(e){return Gu.call(Df,e)?!0:Gu.call(Of,e)?!1:Qd.test(e)?Df[e]=!0:(Of[e]=!0,!1)}function zn(e,t,a){if(Yd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function _n(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ct(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jd(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,u=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fu(e){if(!e._valueTracker){var t=zf(e)?"checked":"value";e._valueTracker=jd(e,t,""+e[t])}}function _f(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=zf(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Un(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wd=/[\n"\\]/g;function ft(e){return e.replace(wd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ku(e,t,a,l,n,u,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Iu(e,i,ct(t)):a!=null?Iu(e,i,ct(a)):l!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ct(c):e.removeAttribute("name")}function Uf(e,t,a,l,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Fu(e);return}a=a!=null?""+ct(a):"",t=t!=null?""+ct(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Fu(e)}function Iu(e,t,a){t==="number"&&Un(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ka(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ct(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Cf(e,t,a){if(t!=null&&(t=""+ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ct(a):""}function xf(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(h(92));if(pt(l)){if(1<l.length)throw Error(h(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ct(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Fu(e)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Gd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rf(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Gd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Hf(e,t,a){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Rf(e,n,l)}else for(var u in t)t.hasOwnProperty(u)&&Rf(e,u,t[u])}function Pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(e){return Zd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xt(){}var ei=null;function ti(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Wa=null;function Lf(e){var t=Xa(e);if(t&&(e=t.stateNode)){var a=e[we]||null;e:switch(e=t.stateNode,t.type){case"input":if(ku(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[we]||null;if(!n)throw Error(h(90));ku(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&_f(l)}break e;case"textarea":Cf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ka(e,!!a.multiple,t,!1)}}}var ai=!1;function Nf(e,t,a){if(ai)return e(t,a);ai=!0;try{var l=e(t);return l}finally{if(ai=!1,($a!==null||Wa!==null)&&(pu(),$a&&(t=$a,e=Wa,Wa=$a=null,Lf(t),e)))for(t=0;t<e.length;t++)Lf(e[t])}}function xl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[we]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(h(231,t,typeof a));return a}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),li=!1;if(Rt)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){li=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{li=!1}var kt=null,ni=null,xn=null;function qf(){if(xn)return xn;var e,t=ni,a=t.length,l,n="value"in kt?kt.value:kt.textContent,u=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(l=1;l<=i&&t[a-l]===n[u-l];l++);return xn=n.slice(e,1<l?1-l:void 0)}function Rn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function Bf(){return!1}function Ge(e){function t(a,l,n,u,i){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Hn:Bf,this.isPropagationStopped=Bf,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Ge(Ma),Hl=H({},Ma,{view:0,detail:0}),Vd=Ge(Hl),ui,ii,Ll,Nn=H({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ll&&(Ll&&e.type==="mousemove"?(ui=e.screenX-Ll.screenX,ii=e.screenY-Ll.screenY):ii=ui=0,Ll=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),Qf=Ge(Nn),Kd=H({},Nn,{dataTransfer:0}),Jd=Ge(Kd),$d=H({},Hl,{relatedTarget:0}),ci=Ge($d),Wd=H({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=Ge(Wd),kd=H({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Id=Ge(kd),Pd=H({},Ma,{data:0}),Yf=Ge(Pd),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function fi(){return lm}var nm=H({},Hl,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(e){return e.type==="keypress"?Rn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=Ge(nm),im=H({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=Ge(im),cm=H({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),fm=Ge(cm),sm=H({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),om=Ge(sm),rm=H({},Nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Ge(rm),mm=H({},Ma,{newState:0,oldState:0}),ym=Ge(mm),hm=[9,13,27,32],si=Rt&&"CompositionEvent"in window,Nl=null;Rt&&"documentMode"in document&&(Nl=document.documentMode);var vm=Rt&&"TextEvent"in window&&!Nl,wf=Rt&&(!si||Nl&&8<Nl&&11>=Nl),Gf=" ",Xf=!1;function Zf(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function pm(e,t){switch(e){case"compositionend":return Vf(t);case"keypress":return t.which!==32?null:(Xf=!0,Gf);case"textInput":return e=t.data,e===Gf&&Xf?null:e;default:return null}}function Sm(e,t){if(Fa)return e==="compositionend"||!si&&Zf(e,t)?(e=qf(),xn=ni=kt=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wf&&t.locale!=="ko"?null:t.data;default:return null}}var gm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gm[e.type]:t==="textarea"}function Jf(e,t,a,l){$a?Wa?Wa.push(l):Wa=[l]:$a=l,t=Mu(t,"onChange"),0<t.length&&(a=new Ln("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ql=null,Bl=null;function bm(e){Cr(e,0)}function qn(e){var t=Cl(e);if(_f(t))return e}function $f(e,t){if(e==="change")return t}var Wf=!1;if(Rt){var oi;if(Rt){var ri="oninput"in document;if(!ri){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),ri=typeof Ff.oninput=="function"}oi=ri}else oi=!1;Wf=oi&&(!document.documentMode||9<document.documentMode)}function kf(){ql&&(ql.detachEvent("onpropertychange",If),Bl=ql=null)}function If(e){if(e.propertyName==="value"&&qn(Bl)){var t=[];Jf(t,Bl,e,ti(e)),Nf(bm,t)}}function Em(e,t,a){e==="focusin"?(kf(),ql=t,Bl=a,ql.attachEvent("onpropertychange",If)):e==="focusout"&&kf()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qn(Bl)}function Am(e,t){if(e==="click")return qn(t)}function Mm(e,t){if(e==="input"||e==="change")return qn(t)}function Om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:Om;function Ql(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Gu.call(t,n)||!Pe(e[n],t[n]))return!1}return!0}function Pf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function es(e,t){var a=Pf(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pf(a)}}function ts(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ts(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function as(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Un(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Un(e.document)}return t}function di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Dm=Rt&&"documentMode"in document&&11>=document.documentMode,ka=null,mi=null,Yl=null,yi=!1;function ls(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yi||ka==null||ka!==Un(l)||(l=ka,"selectionStart"in l&&di(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yl&&Ql(Yl,l)||(Yl=l,l=Mu(mi,"onSelect"),0<l.length&&(t=new Ln("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ka)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ia={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},hi={},ns={};Rt&&(ns=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function Da(e){if(hi[e])return hi[e];if(!Ia[e])return e;var t=Ia[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ns)return hi[e]=t[a];return e}var us=Da("animationend"),is=Da("animationiteration"),cs=Da("animationstart"),zm=Da("transitionrun"),_m=Da("transitionstart"),Um=Da("transitioncancel"),fs=Da("transitionend"),ss=new Map,vi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vi.push("scrollEnd");function St(e,t){ss.set(e,t),Aa(t,[e])}var Bn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},st=[],Pa=0,pi=0;function Qn(){for(var e=Pa,t=pi=Pa=0;t<e;){var a=st[t];st[t++]=null;var l=st[t];st[t++]=null;var n=st[t];st[t++]=null;var u=st[t];if(st[t++]=null,l!==null&&n!==null){var i=l.pending;i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n}u!==0&&os(a,n,u)}}function Yn(e,t,a,l){st[Pa++]=e,st[Pa++]=t,st[Pa++]=a,st[Pa++]=l,pi|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Si(e,t,a,l){return Yn(e,t,a,l),jn(e)}function za(e,t){return Yn(e,null,null,t),jn(e)}function os(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,u=e.return;u!==null;)u.childLanes|=a,l=u.alternate,l!==null&&(l.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-Ie(a),e=u.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),u):null}function jn(e){if(50<fn)throw fn=0,zc=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var el={};function Cm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new Cm(e,t,a,l)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function rs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wn(e,t,a,l,n,u){var i=0;if(l=e,typeof e=="function")gi(e)&&(i=1);else if(typeof e=="string")i=Ny(e,a,z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,a,t,n),e.elementType=Tt,e.lanes=u,e;case He:return _a(a.children,n,u,t);case _t:i=8,n|=24;break;case We:return e=et(12,a,t,n|2),e.elementType=We,e.lanes=u,e;case Et:return e=et(13,a,t,n),e.elementType=Et,e.lanes=u,e;case Qe:return e=et(19,a,t,n),e.elementType=Qe,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:i=10;break e;case $t:i=9;break e;case it:i=11;break e;case Z:i=14;break e;case Ye:i=16,l=null;break e}i=29,a=Error(h(130,e===null?"null":typeof e,"")),l=null}return t=et(i,a,t,n),t.elementType=e,t.type=l,t.lanes=u,t}function _a(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function bi(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function ds(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Ei(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ms=new WeakMap;function ot(e,t){if(typeof e=="object"&&e!==null){var a=ms.get(e);return a!==void 0?a:(t={value:e,source:t,stack:df(t)},ms.set(e,t),t)}return{value:e,source:t,stack:df(t)}}var tl=[],al=0,Gn=null,jl=0,rt=[],dt=0,It=null,Mt=1,Ot="";function Lt(e,t){tl[al++]=jl,tl[al++]=Gn,Gn=e,jl=t}function ys(e,t,a){rt[dt++]=Mt,rt[dt++]=Ot,rt[dt++]=It,It=e;var l=Mt;e=Ot;var n=32-Ie(l)-1;l&=~(1<<n),a+=1;var u=32-Ie(t)+n;if(30<u){var i=n-n%5;u=(l&(1<<i)-1).toString(32),l>>=i,n-=i,Mt=1<<32-Ie(t)+n|a<<n|l,Ot=u+e}else Mt=1<<u|a<<n|l,Ot=e}function Ti(e){e.return!==null&&(Lt(e,1),ys(e,1,0))}function Ai(e){for(;e===Gn;)Gn=tl[--al],tl[al]=null,jl=tl[--al],tl[al]=null;for(;e===It;)It=rt[--dt],rt[dt]=null,Ot=rt[--dt],rt[dt]=null,Mt=rt[--dt],rt[dt]=null}function hs(e,t){rt[dt++]=Mt,rt[dt++]=Ot,rt[dt++]=It,Mt=t.id,Ot=t.overflow,It=e}var De=null,ce=null,V=!1,Pt=null,mt=!1,Mi=Error(h(519));function ea(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wl(ot(t,e)),Mi}function vs(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Oe]=e,t[we]=l,a){case"dialog":w("cancel",t),w("close",t);break;case"iframe":case"object":case"embed":w("load",t);break;case"video":case"audio":for(a=0;a<on.length;a++)w(on[a],t);break;case"source":w("error",t);break;case"img":case"image":case"link":w("error",t),w("load",t);break;case"details":w("toggle",t);break;case"input":w("invalid",t),Uf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":w("invalid",t);break;case"textarea":w("invalid",t),xf(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Lr(t.textContent,a)?(l.popover!=null&&(w("beforetoggle",t),w("toggle",t)),l.onScroll!=null&&w("scroll",t),l.onScrollEnd!=null&&w("scrollend",t),l.onClick!=null&&(t.onclick=xt),t=!0):t=!1,t||ea(e,!0)}function ps(e){for(De=e.return;De;)switch(De.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:De=De.return}}function ll(e){if(e!==De)return!1;if(!V)return ps(e),V=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gc(e.type,e.memoizedProps)),a=!a),a&&ce&&ea(e),ps(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ce=Xr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ce=Xr(e)}else t===27?(t=ce,ya(e.type)?(e=Jc,Jc=null,ce=e):ce=t):ce=De?ht(e.stateNode.nextSibling):null;return!0}function Ua(){ce=De=null,V=!1}function Oi(){var e=Pt;return e!==null&&(Ke===null?Ke=e:Ke.push.apply(Ke,e),Pt=null),e}function wl(e){Pt===null?Pt=[e]:Pt.push(e)}var Di=o(null),Ca=null,Nt=null;function ta(e,t,a){M(Di,t._currentValue),t._currentValue=a}function qt(e){e._currentValue=Di.current,E(Di)}function zi(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function _i(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var c=u;u=n;for(var f=0;f<t.length;f++)if(c.context===t[f]){u.lanes|=a,c=u.alternate,c!==null&&(c.lanes|=a),zi(u.return,a,e),l||(i=null);break e}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(h(341));i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),zi(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function nl(e,t,a,l){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(h(387));if(i=i.memoizedProps,i!==null){var c=n.type;Pe(n.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(n===I.current){if(i=n.alternate,i===null)throw Error(h(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(hn):e=[hn])}n=n.return}e!==null&&_i(t,e,a,l),t.flags|=262144}function Xn(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xa(e){Ca=e,Nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ze(e){return Ss(Ca,e)}function Zn(e,t){return Ca===null&&xa(e),Ss(e,t)}function Ss(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Nt===null){if(e===null)throw Error(h(308));Nt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nt=Nt.next=t;return a}var xm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Rm=D.unstable_scheduleCallback,Hm=D.unstable_NormalPriority,Se={$$typeof:Ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ui(){return{controller:new xm,data:new Map,refCount:0}}function Gl(e){e.refCount--,e.refCount===0&&Rm(Hm,function(){e.controller.abort()})}var Xl=null,Ci=0,ul=0,il=null;function Lm(e,t){if(Xl===null){var a=Xl=[];Ci=0,ul=Hc(),il={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ci++,t.then(gs,gs),t}function gs(){if(--Ci===0&&Xl!==null){il!==null&&(il.status="fulfilled");var e=Xl;Xl=null,ul=0,il=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var bs=S.S;S.S=function(e,t){nr=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lm(e,t),bs!==null&&bs(e,t)};var Ra=o(null);function xi(){var e=Ra.current;return e!==null?e:ie.pooledCache}function Vn(e,t){t===null?M(Ra,Ra.current):M(Ra,t.pool)}function Es(){var e=xi();return e===null?null:{parent:Se._currentValue,pool:e}}var cl=Error(h(460)),Ri=Error(h(474)),Kn=Error(h(542)),Jn={then:function(){}};function Ts(e){return e=e.status,e==="fulfilled"||e==="rejected"}function As(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(xt,xt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Os(e),e;default:if(typeof t.status=="string")t.then(xt,xt);else{if(e=ie,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Os(e),e}throw La=t,cl}}function Ha(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(La=a,cl):a}}var La=null;function Ms(){if(La===null)throw Error(h(459));var e=La;return La=null,e}function Os(e){if(e===cl||e===Kn)throw Error(h(483))}var fl=null,Zl=0;function $n(e){var t=Zl;return Zl+=1,fl===null&&(fl=[]),As(fl,e,t)}function Vl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wn(e,t){throw t.$$typeof===se?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ds(e){function t(r,s){if(e){var d=r.deletions;d===null?(r.deletions=[s],r.flags|=16):d.push(s)}}function a(r,s){if(!e)return null;for(;s!==null;)t(r,s),s=s.sibling;return null}function l(r){for(var s=new Map;r!==null;)r.key!==null?s.set(r.key,r):s.set(r.index,r),r=r.sibling;return s}function n(r,s){return r=Ht(r,s),r.index=0,r.sibling=null,r}function u(r,s,d){return r.index=d,e?(d=r.alternate,d!==null?(d=d.index,d<s?(r.flags|=67108866,s):d):(r.flags|=67108866,s)):(r.flags|=1048576,s)}function i(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,s,d,g){return s===null||s.tag!==6?(s=bi(d,r.mode,g),s.return=r,s):(s=n(s,d),s.return=r,s)}function f(r,s,d,g){var U=d.type;return U===He?p(r,s,d.props.children,g,d.key):s!==null&&(s.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ye&&Ha(U)===s.type)?(s=n(s,d.props),Vl(s,d),s.return=r,s):(s=wn(d.type,d.key,d.props,null,r.mode,g),Vl(s,d),s.return=r,s)}function m(r,s,d,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Ei(d,r.mode,g),s.return=r,s):(s=n(s,d.children||[]),s.return=r,s)}function p(r,s,d,g,U){return s===null||s.tag!==7?(s=_a(d,r.mode,g,U),s.return=r,s):(s=n(s,d),s.return=r,s)}function b(r,s,d){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=bi(""+s,r.mode,d),s.return=r,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case $e:return d=wn(s.type,s.key,s.props,null,r.mode,d),Vl(d,s),d.return=r,d;case Be:return s=Ei(s,r.mode,d),s.return=r,s;case Ye:return s=Ha(s),b(r,s,d)}if(pt(s)||je(s))return s=_a(s,r.mode,d,null),s.return=r,s;if(typeof s.then=="function")return b(r,$n(s),d);if(s.$$typeof===Ce)return b(r,Zn(r,s),d);Wn(r,s)}return null}function y(r,s,d,g){var U=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return U!==null?null:c(r,s,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $e:return d.key===U?f(r,s,d,g):null;case Be:return d.key===U?m(r,s,d,g):null;case Ye:return d=Ha(d),y(r,s,d,g)}if(pt(d)||je(d))return U!==null?null:p(r,s,d,g,null);if(typeof d.then=="function")return y(r,s,$n(d),g);if(d.$$typeof===Ce)return y(r,s,Zn(r,d),g);Wn(r,d)}return null}function v(r,s,d,g,U){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return r=r.get(d)||null,c(s,r,""+g,U);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $e:return r=r.get(g.key===null?d:g.key)||null,f(s,r,g,U);case Be:return r=r.get(g.key===null?d:g.key)||null,m(s,r,g,U);case Ye:return g=Ha(g),v(r,s,d,g,U)}if(pt(g)||je(g))return r=r.get(d)||null,p(s,r,g,U,null);if(typeof g.then=="function")return v(r,s,d,$n(g),U);if(g.$$typeof===Ce)return v(r,s,d,Zn(s,g),U);Wn(s,g)}return null}function O(r,s,d,g){for(var U=null,K=null,_=s,Q=s=0,X=null;_!==null&&Q<d.length;Q++){_.index>Q?(X=_,_=null):X=_.sibling;var J=y(r,_,d[Q],g);if(J===null){_===null&&(_=X);break}e&&_&&J.alternate===null&&t(r,_),s=u(J,s,Q),K===null?U=J:K.sibling=J,K=J,_=X}if(Q===d.length)return a(r,_),V&&Lt(r,Q),U;if(_===null){for(;Q<d.length;Q++)_=b(r,d[Q],g),_!==null&&(s=u(_,s,Q),K===null?U=_:K.sibling=_,K=_);return V&&Lt(r,Q),U}for(_=l(_);Q<d.length;Q++)X=v(_,r,Q,d[Q],g),X!==null&&(e&&X.alternate!==null&&_.delete(X.key===null?Q:X.key),s=u(X,s,Q),K===null?U=X:K.sibling=X,K=X);return e&&_.forEach(function(ga){return t(r,ga)}),V&&Lt(r,Q),U}function x(r,s,d,g){if(d==null)throw Error(h(151));for(var U=null,K=null,_=s,Q=s=0,X=null,J=d.next();_!==null&&!J.done;Q++,J=d.next()){_.index>Q?(X=_,_=null):X=_.sibling;var ga=y(r,_,J.value,g);if(ga===null){_===null&&(_=X);break}e&&_&&ga.alternate===null&&t(r,_),s=u(ga,s,Q),K===null?U=ga:K.sibling=ga,K=ga,_=X}if(J.done)return a(r,_),V&&Lt(r,Q),U;if(_===null){for(;!J.done;Q++,J=d.next())J=b(r,J.value,g),J!==null&&(s=u(J,s,Q),K===null?U=J:K.sibling=J,K=J);return V&&Lt(r,Q),U}for(_=l(_);!J.done;Q++,J=d.next())J=v(_,r,Q,J.value,g),J!==null&&(e&&J.alternate!==null&&_.delete(J.key===null?Q:J.key),s=u(J,s,Q),K===null?U=J:K.sibling=J,K=J);return e&&_.forEach(function(Ky){return t(r,Ky)}),V&&Lt(r,Q),U}function ne(r,s,d,g){if(typeof d=="object"&&d!==null&&d.type===He&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case $e:e:{for(var U=d.key;s!==null;){if(s.key===U){if(U=d.type,U===He){if(s.tag===7){a(r,s.sibling),g=n(s,d.props.children),g.return=r,r=g;break e}}else if(s.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ye&&Ha(U)===s.type){a(r,s.sibling),g=n(s,d.props),Vl(g,d),g.return=r,r=g;break e}a(r,s);break}else t(r,s);s=s.sibling}d.type===He?(g=_a(d.props.children,r.mode,g,d.key),g.return=r,r=g):(g=wn(d.type,d.key,d.props,null,r.mode,g),Vl(g,d),g.return=r,r=g)}return i(r);case Be:e:{for(U=d.key;s!==null;){if(s.key===U)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){a(r,s.sibling),g=n(s,d.children||[]),g.return=r,r=g;break e}else{a(r,s);break}else t(r,s);s=s.sibling}g=Ei(d,r.mode,g),g.return=r,r=g}return i(r);case Ye:return d=Ha(d),ne(r,s,d,g)}if(pt(d))return O(r,s,d,g);if(je(d)){if(U=je(d),typeof U!="function")throw Error(h(150));return d=U.call(d),x(r,s,d,g)}if(typeof d.then=="function")return ne(r,s,$n(d),g);if(d.$$typeof===Ce)return ne(r,s,Zn(r,d),g);Wn(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,s!==null&&s.tag===6?(a(r,s.sibling),g=n(s,d),g.return=r,r=g):(a(r,s),g=bi(d,r.mode,g),g.return=r,r=g),i(r)):a(r,s)}return function(r,s,d,g){try{Zl=0;var U=ne(r,s,d,g);return fl=null,U}catch(_){if(_===cl||_===Kn)throw _;var K=et(29,_,null,r.mode);return K.lanes=g,K.return=r,K}finally{}}}var Na=Ds(!0),zs=Ds(!1),aa=!1;function Hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Li(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(W&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=jn(e),os(e,null,a),t}return Yn(e,l,t,a),jn(e)}function Kl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Sf(e,a)}}function Ni(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,a=a.next}while(a!==null);u===null?n=u=t:u=u.next=t}else n=u=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var qi=!1;function Jl(){if(qi){var e=il;if(e!==null)throw e}}function $l(e,t,a,l){qi=!1;var n=e.updateQueue;aa=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,m=f.next;f.next=null,i===null?u=m:i.next=m,i=f;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==i&&(c===null?p.firstBaseUpdate=m:c.next=m,p.lastBaseUpdate=f))}if(u!==null){var b=n.baseState;i=0,p=m=f=null,c=u;do{var y=c.lane&-536870913,v=y!==c.lane;if(v?(G&y)===y:(l&y)===y){y!==0&&y===ul&&(qi=!0),p!==null&&(p=p.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var O=e,x=c;y=t;var ne=a;switch(x.tag){case 1:if(O=x.payload,typeof O=="function"){b=O.call(ne,b,y);break e}b=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=x.payload,y=typeof O=="function"?O.call(ne,b,y):O,y==null)break e;b=H({},b,y);break e;case 2:aa=!0}}y=c.callback,y!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[y]:v.push(y))}else v={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(m=p=v,f=b):p=p.next=v,i|=y;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;v=c,c=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);p===null&&(f=b),n.baseState=f,n.firstBaseUpdate=m,n.lastBaseUpdate=p,u===null&&(n.shared.lanes=0),sa|=i,e.lanes=i,e.memoizedState=b}}function _s(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Us(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_s(a[e],t)}var sl=o(null),Fn=o(0);function Cs(e,t){e=Vt,M(Fn,e),M(sl,t),Vt=e|t.baseLanes}function Bi(){M(Fn,Vt),M(sl,sl.current)}function Qi(){Vt=Fn.current,E(sl),E(Fn)}var tt=o(null),yt=null;function ua(e){var t=e.alternate;M(ve,ve.current&1),M(tt,e),yt===null&&(t===null||sl.current!==null||t.memoizedState!==null)&&(yt=e)}function Yi(e){M(ve,ve.current),M(tt,e),yt===null&&(yt=e)}function xs(e){e.tag===22?(M(ve,ve.current),M(tt,e),yt===null&&(yt=e)):ia()}function ia(){M(ve,ve.current),M(tt,tt.current)}function at(e){E(tt),yt===e&&(yt=null),E(ve)}var ve=o(0);function kn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vc(a)||Kc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bt=0,B=null,ae=null,ge=null,In=!1,ol=!1,qa=!1,Pn=0,Wl=0,rl=null,qm=0;function de(){throw Error(h(321))}function ji(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Pe(e[a],t[a]))return!1;return!0}function wi(e,t,a,l,n,u){return Bt=u,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?ho:ac,qa=!1,u=a(l,n),qa=!1,ol&&(u=Hs(t,a,l,n)),Rs(e),u}function Rs(e){S.H=Il;var t=ae!==null&&ae.next!==null;if(Bt=0,ge=ae=B=null,In=!1,Wl=0,rl=null,t)throw Error(h(300));e===null||be||(e=e.dependencies,e!==null&&Xn(e)&&(be=!0))}function Hs(e,t,a,l){B=e;var n=0;do{if(ol&&(rl=null),Wl=0,ol=!1,25<=n)throw Error(h(301));if(n+=1,ge=ae=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}S.H=vo,u=t(a,l)}while(ol);return u}function Bm(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(B.flags|=1024),t}function Gi(){var e=Pn!==0;return Pn=0,e}function Xi(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Zi(e){if(In){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}In=!1}Bt=0,ge=ae=B=null,ol=!1,Wl=Pn=0,rl=null}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?B.memoizedState=ge=e:ge=ge.next=e,ge}function pe(){if(ae===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ge===null?B.memoizedState:ge.next;if(t!==null)ge=t,ae=e;else{if(e===null)throw B.alternate===null?Error(h(467)):Error(h(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ge===null?B.memoizedState=ge=e:ge=ge.next=e}return ge}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Wl;return Wl+=1,rl===null&&(rl=[]),e=As(rl,e,t),t=B,(ge===null?t.memoizedState:ge.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?ho:ac),e}function tu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===Ce)return ze(e)}throw Error(h(438,String(e)))}function Vi(e){var t=null,a=B.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=B.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=eu(),B.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ja;return t.index++,a}function Qt(e,t){return typeof t=="function"?t(e):t}function au(e){var t=pe();return Ki(t,ae,e)}function Ki(e,t,a){var l=e.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=a;var n=e.baseQueue,u=l.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,l.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var c=i=null,f=null,m=t,p=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(G&b)===b:(Bt&b)===b){var y=m.revertLane;if(y===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===ul&&(p=!0);else if((Bt&y)===y){m=m.next,y===ul&&(p=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=b,i=u):f=f.next=b,B.lanes|=y,sa|=y;b=m.action,qa&&a(u,b),u=m.hasEagerState?m.eagerState:a(u,b)}else y={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=y,i=u):f=f.next=y,B.lanes|=b,sa|=b;m=m.next}while(m!==null&&m!==t);if(f===null?i=u:f.next=c,!Pe(u,e.memoizedState)&&(be=!0,p&&(a=il,a!==null)))throw a;e.memoizedState=u,e.baseState=i,e.baseQueue=f,l.lastRenderedState=u}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ji(e){var t=pe(),a=t.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,u=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);Pe(u,t.memoizedState)||(be=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,l]}function Ls(e,t,a){var l=B,n=pe(),u=V;if(u){if(a===void 0)throw Error(h(407));a=a()}else a=t();var i=!Pe((ae||n).memoizedState,a);if(i&&(n.memoizedState=a,be=!0),n=n.queue,Fi(Bs.bind(null,l,n,e),[e]),n.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(l.flags|=2048,dl(9,{destroy:void 0},qs.bind(null,l,n,a,t),null),ie===null)throw Error(h(349));u||(Bt&127)!==0||Ns(l,t,a)}return a}function Ns(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=B.updateQueue,t===null?(t=eu(),B.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function qs(e,t,a,l){t.value=a,t.getSnapshot=l,Qs(t)&&Ys(e)}function Bs(e,t,a){return a(function(){Qs(t)&&Ys(e)})}function Qs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Pe(e,a)}catch{return!0}}function Ys(e){var t=za(e,2);t!==null&&Je(t,e,2)}function $i(e){var t=Ne();if(typeof e=="function"){var a=e;if(e=a(),qa){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},t}function js(e,t,a,l){return e.baseState=a,Ki(e,ae,typeof l=="function"?l:Qt)}function Qm(e,t,a,l,n){if(uu(e))throw Error(h(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};S.T!==null?a(!0):u.isTransition=!1,l(u),a=t.pending,a===null?(u.next=t.pending=u,ws(t,u)):(u.next=a.next,t.pending=a.next=u)}}function ws(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var u=S.T,i={};S.T=i;try{var c=a(n,l),f=S.S;f!==null&&f(i,c),Gs(e,t,c)}catch(m){Wi(e,t,m)}finally{u!==null&&i.types!==null&&(u.types=i.types),S.T=u}}else try{u=a(n,l),Gs(e,t,u)}catch(m){Wi(e,t,m)}}function Gs(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Xs(e,t,l)},function(l){return Wi(e,t,l)}):Xs(e,t,a)}function Xs(e,t,a){t.status="fulfilled",t.value=a,Zs(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ws(e,a)))}function Wi(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Zs(t),t=t.next;while(t!==l)}e.action=null}function Zs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vs(e,t){return t}function Ks(e,t){if(V){var a=ie.formState;if(a!==null){e:{var l=B;if(V){if(ce){t:{for(var n=ce,u=mt;n.nodeType!==8;){if(!u){n=null;break t}if(n=ht(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){ce=ht(n.nextSibling),l=n.data==="F!";break e}}ea(l)}l=!1}l&&(t=a[0])}}return a=Ne(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:t},a.queue=l,a=ro.bind(null,B,l),l.dispatch=a,l=$i(!1),u=tc.bind(null,B,!1,l.queue),l=Ne(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Qm.bind(null,B,n,u,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Js(e){var t=pe();return $s(t,ae,e)}function $s(e,t,a){if(t=Ki(e,t,Vs)[0],e=au(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Fl(t)}catch(i){throw i===cl?Kn:i}else l=t;t=pe();var n=t.queue,u=n.dispatch;return a!==t.memoizedState&&(B.flags|=2048,dl(9,{destroy:void 0},Ym.bind(null,n,a),null)),[l,u,e]}function Ym(e,t){e.action=t}function Ws(e){var t=pe(),a=ae;if(a!==null)return $s(t,a,e);pe(),t=t.memoizedState,a=pe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=B.updateQueue,t===null&&(t=eu(),B.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Fs(){return pe().memoizedState}function lu(e,t,a,l){var n=Ne();B.flags|=e,n.memoizedState=dl(1|t,{destroy:void 0},a,l===void 0?null:l)}function nu(e,t,a,l){var n=pe();l=l===void 0?null:l;var u=n.memoizedState.inst;ae!==null&&l!==null&&ji(l,ae.memoizedState.deps)?n.memoizedState=dl(t,u,a,l):(B.flags|=e,n.memoizedState=dl(1|t,u,a,l))}function ks(e,t){lu(8390656,8,e,t)}function Fi(e,t){nu(2048,8,e,t)}function jm(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=eu(),B.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Is(e){var t=pe().memoizedState;return jm({ref:t,nextImpl:e}),function(){if((W&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function Ps(e,t){return nu(4,2,e,t)}function eo(e,t){return nu(4,4,e,t)}function to(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ao(e,t,a){a=a!=null?a.concat([e]):null,nu(4,4,to.bind(null,t,e),a)}function ki(){}function lo(e,t){var a=pe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ji(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function no(e,t){var a=pe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ji(t,l[1]))return l[0];if(l=e(),qa){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l}function Ii(e,t,a){return a===void 0||(Bt&1073741824)!==0&&(G&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ir(),B.lanes|=e,sa|=e,a)}function uo(e,t,a,l){return Pe(a,t)?a:sl.current!==null?(e=Ii(e,a,l),Pe(e,t)||(be=!0),e):(Bt&42)===0||(Bt&1073741824)!==0&&(G&261930)===0?(be=!0,e.memoizedState=a):(e=ir(),B.lanes|=e,sa|=e,t)}function io(e,t,a,l,n){var u=A.p;A.p=u!==0&&8>u?u:8;var i=S.T,c={};S.T=c,tc(e,!1,t,a);try{var f=n(),m=S.S;if(m!==null&&m(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var p=Nm(f,l);kl(e,t,p,ut(e))}else kl(e,t,l,ut(e))}catch(b){kl(e,t,{then:function(){},status:"rejected",reason:b},ut())}finally{A.p=u,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function wm(){}function Pi(e,t,a,l){if(e.tag!==5)throw Error(h(476));var n=co(e).queue;io(e,n,t,L,a===null?wm:function(){return fo(e),a(l)})}function co(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:L},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fo(e){var t=co(e);t.next===null&&(t=e.alternate.memoizedState),kl(e,t.next.queue,{},ut())}function ec(){return ze(hn)}function so(){return pe().memoizedState}function oo(){return pe().memoizedState}function Gm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ut();e=la(a);var l=na(t,e,a);l!==null&&(Je(l,t,a),Kl(l,t,a)),t={cache:Ui()},e.payload=t;return}t=t.return}}function Xm(e,t,a){var l=ut();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(e)?mo(t,a):(a=Si(e,t,a,l),a!==null&&(Je(a,e,l),yo(a,t,l)))}function ro(e,t,a){var l=ut();kl(e,t,a,l)}function kl(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(uu(e))mo(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,a);if(n.hasEagerState=!0,n.eagerState=c,Pe(c,i))return Yn(e,t,n,0),ie===null&&Qn(),!1}catch{}finally{}if(a=Si(e,t,n,l),a!==null)return Je(a,e,l),yo(a,t,l),!0}return!1}function tc(e,t,a,l){if(l={lane:2,revertLane:Hc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},uu(e)){if(t)throw Error(h(479))}else t=Si(e,a,l,2),t!==null&&Je(t,e,2)}function uu(e){var t=e.alternate;return e===B||t!==null&&t===B}function mo(e,t){ol=In=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function yo(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Sf(e,a)}}var Il={readContext:ze,use:tu,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};Il.useEffectEvent=de;var ho={readContext:ze,use:tu,useCallback:function(e,t){return Ne().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:ks,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,lu(4194308,4,to.bind(null,t,e),a)},useLayoutEffect:function(e,t){return lu(4194308,4,e,t)},useInsertionEffect:function(e,t){lu(4,2,e,t)},useMemo:function(e,t){var a=Ne();t=t===void 0?null:t;var l=e();if(qa){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ne();if(a!==void 0){var n=a(t);if(qa){Wt(!0);try{a(t)}finally{Wt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Xm.bind(null,B,e),[l.memoizedState,e]},useRef:function(e){var t=Ne();return e={current:e},t.memoizedState=e},useState:function(e){e=$i(e);var t=e.queue,a=ro.bind(null,B,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ki,useDeferredValue:function(e,t){var a=Ne();return Ii(a,e,t)},useTransition:function(){var e=$i(!1);return e=io.bind(null,B,e.queue,!0,!1),Ne().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=B,n=Ne();if(V){if(a===void 0)throw Error(h(407));a=a()}else{if(a=t(),ie===null)throw Error(h(349));(G&127)!==0||Ns(l,t,a)}n.memoizedState=a;var u={value:a,getSnapshot:t};return n.queue=u,ks(Bs.bind(null,l,u,e),[e]),l.flags|=2048,dl(9,{destroy:void 0},qs.bind(null,l,u,a,t),null),a},useId:function(){var e=Ne(),t=ie.identifierPrefix;if(V){var a=Ot,l=Mt;a=(l&~(1<<32-Ie(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Pn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=qm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:Ks,useActionState:Ks,useOptimistic:function(e){var t=Ne();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tc.bind(null,B,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vi,useCacheRefresh:function(){return Ne().memoizedState=Gm.bind(null,B)},useEffectEvent:function(e){var t=Ne(),a={impl:e};return t.memoizedState=a,function(){if((W&2)!==0)throw Error(h(440));return a.impl.apply(void 0,arguments)}}},ac={readContext:ze,use:tu,useCallback:lo,useContext:ze,useEffect:Fi,useImperativeHandle:ao,useInsertionEffect:Ps,useLayoutEffect:eo,useMemo:no,useReducer:au,useRef:Fs,useState:function(){return au(Qt)},useDebugValue:ki,useDeferredValue:function(e,t){var a=pe();return uo(a,ae.memoizedState,e,t)},useTransition:function(){var e=au(Qt)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Ls,useId:so,useHostTransitionStatus:ec,useFormState:Js,useActionState:Js,useOptimistic:function(e,t){var a=pe();return js(a,ae,e,t)},useMemoCache:Vi,useCacheRefresh:oo};ac.useEffectEvent=Is;var vo={readContext:ze,use:tu,useCallback:lo,useContext:ze,useEffect:Fi,useImperativeHandle:ao,useInsertionEffect:Ps,useLayoutEffect:eo,useMemo:no,useReducer:Ji,useRef:Fs,useState:function(){return Ji(Qt)},useDebugValue:ki,useDeferredValue:function(e,t){var a=pe();return ae===null?Ii(a,e,t):uo(a,ae.memoizedState,e,t)},useTransition:function(){var e=Ji(Qt)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Ls,useId:so,useHostTransitionStatus:ec,useFormState:Ws,useActionState:Ws,useOptimistic:function(e,t){var a=pe();return ae!==null?js(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vi,useCacheRefresh:oo};vo.useEffectEvent=Is;function lc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:H({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ut(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Je(t,e,l),Kl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ut(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Je(t,e,l),Kl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ut(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(Je(t,e,a),Kl(t,e,a))}};function po(e,t,a,l,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,i):t.prototype&&t.prototype.isPureReactComponent?!Ql(a,l)||!Ql(n,u):!0}function So(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&nc.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=H({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function go(e){Bn(e)}function bo(e){console.error(e)}function Eo(e){Bn(e)}function iu(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function To(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uc(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){iu(e,t)},a}function Ao(e){return e=la(e),e.tag=3,e}function Mo(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var u=l.value;e.payload=function(){return n(u)},e.callback=function(){To(t,a,l)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){To(t,a,l),typeof n!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Zm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&nl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return yt===null?Su():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Jn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Cc(e,l,n)),!1;case 22:return a.flags|=65536,l===Jn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Cc(e,l,n)),!1}throw Error(h(435,a.tag))}return Cc(e,l,n),Su(),!1}if(V)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Mi&&(e=Error(h(422),{cause:l}),wl(ot(e,a)))):(l!==Mi&&(t=Error(h(423),{cause:l}),wl(ot(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ot(l,a),n=uc(e.stateNode,l,n),Ni(e,n),me!==4&&(me=2)),!1;var u=Error(h(520),{cause:l});if(u=ot(u,a),cn===null?cn=[u]:cn.push(u),me!==4&&(me=2),t===null)return!0;l=ot(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=uc(a.stateNode,l,e),Ni(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(oa===null||!oa.has(u))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ao(n),Mo(n,e,a,l),Ni(a,n),!1}a=a.return}while(a!==null);return!1}var ic=Error(h(461)),be=!1;function _e(e,t,a,l){t.child=e===null?zs(t,null,a,l):Na(t,e.child,a,l)}function Oo(e,t,a,l,n){a=a.render;var u=t.ref;if("ref"in l){var i={};for(var c in l)c!=="ref"&&(i[c]=l[c])}else i=l;return xa(t),l=wi(e,t,a,i,u,n),c=Gi(),e!==null&&!be?(Xi(e,t,n),Yt(e,t,n)):(V&&c&&Ti(t),t.flags|=1,_e(e,t,l,n),t.child)}function Do(e,t,a,l,n){if(e===null){var u=a.type;return typeof u=="function"&&!gi(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,zo(e,t,u,l,n)):(e=wn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!yc(e,n)){var i=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ql,a(i,l)&&e.ref===t.ref)return Yt(e,t,n)}return t.flags|=1,e=Ht(u,l),e.ref=t.ref,e.return=t,t.child=e}function zo(e,t,a,l,n){if(e!==null){var u=e.memoizedProps;if(Ql(u,l)&&e.ref===t.ref)if(be=!1,t.pendingProps=l=u,yc(e,n))(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,Yt(e,t,n)}return cc(e,t,a,l,n)}function _o(e,t,a,l){var n=l.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~u}else l=0,t.child=null;return Uo(e,t,u,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vn(t,u!==null?u.cachePool:null),u!==null?Cs(t,u):Bi(),xs(t);else return l=t.lanes=536870912,Uo(e,t,u!==null?u.baseLanes|a:a,a,l)}else u!==null?(Vn(t,u.cachePool),Cs(t,u),ia(),t.memoizedState=null):(e!==null&&Vn(t,null),Bi(),ia());return _e(e,t,n,a),t.child}function Pl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uo(e,t,a,l,n){var u=xi();return u=u===null?null:{parent:Se._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&Vn(t,null),Bi(),xs(t),e!==null&&nl(e,t,l,!0),t.childLanes=n,null}function cu(e,t){return t=su({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Co(e,t,a){return Na(t,e.child,null,a),e=cu(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Vm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(V){if(l.mode==="hidden")return e=cu(t,l),t.lanes=536870912,Pl(null,e);if(Yi(t),(e=ce)?(e=Gr(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:It!==null?{id:Mt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=ds(e),a.return=t,t.child=a,De=t,ce=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return cu(t,l)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(Yi(t),n)if(t.flags&256)t.flags&=-257,t=Co(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(be||nl(e,t,a,!1),n=(a&e.childLanes)!==0,be||n){if(l=ie,l!==null&&(i=gf(l,a),i!==0&&i!==u.retryLane))throw u.retryLane=i,za(e,i),Je(l,e,i),ic;Su(),t=Co(e,t,a)}else e=u.treeContext,ce=ht(i.nextSibling),De=t,V=!0,Pt=null,mt=!1,e!==null&&hs(t,e),t=cu(t,l),t.flags|=4096;return t}return e=Ht(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fu(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(h(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function cc(e,t,a,l,n){return xa(t),a=wi(e,t,a,l,void 0,n),l=Gi(),e!==null&&!be?(Xi(e,t,n),Yt(e,t,n)):(V&&l&&Ti(t),t.flags|=1,_e(e,t,a,n),t.child)}function xo(e,t,a,l,n,u){return xa(t),t.updateQueue=null,a=Hs(t,l,a,n),Rs(e),l=Gi(),e!==null&&!be?(Xi(e,t,u),Yt(e,t,u)):(V&&l&&Ti(t),t.flags|=1,_e(e,t,a,u),t.child)}function Ro(e,t,a,l,n){if(xa(t),t.stateNode===null){var u=el,i=a.contextType;typeof i=="object"&&i!==null&&(u=ze(i)),u=new a(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=nc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},Hi(t),i=a.contextType,u.context=typeof i=="object"&&i!==null?ze(i):el,u.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(lc(t,a,i,l),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&nc.enqueueReplaceState(u,u.state,null),$l(t,l,u,n),Jl(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var c=t.memoizedProps,f=Ba(a,c);u.props=f;var m=u.context,p=a.contextType;i=el,typeof p=="object"&&p!==null&&(i=ze(p));var b=a.getDerivedStateFromProps;p=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,p||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||m!==i)&&So(t,u,l,i),aa=!1;var y=t.memoizedState;u.state=y,$l(t,l,u,n),Jl(),m=t.memoizedState,c||y!==m||aa?(typeof b=="function"&&(lc(t,a,b,l),m=t.memoizedState),(f=aa||po(t,a,f,l,y,m,i))?(p||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=m),u.props=l,u.state=m,u.context=i,l=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,Li(e,t),i=t.memoizedProps,p=Ba(a,i),u.props=p,b=t.pendingProps,y=u.context,m=a.contextType,f=el,typeof m=="object"&&m!==null&&(f=ze(m)),c=a.getDerivedStateFromProps,(m=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==b||y!==f)&&So(t,u,l,f),aa=!1,y=t.memoizedState,u.state=y,$l(t,l,u,n),Jl();var v=t.memoizedState;i!==b||y!==v||aa||e!==null&&e.dependencies!==null&&Xn(e.dependencies)?(typeof c=="function"&&(lc(t,a,c,l),v=t.memoizedState),(p=aa||po(t,a,p,l,y,v,f)||e!==null&&e.dependencies!==null&&Xn(e.dependencies))?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,v,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,v,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),u.props=l,u.state=v,u.context=f,l=p):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,fu(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=Na(t,e.child,null,n),t.child=Na(t,null,a,n)):_e(e,t,a,n),t.memoizedState=u.state,e=t.child):e=Yt(e,t,n),e}function Ho(e,t,a,l){return Ua(),t.flags|=256,_e(e,t,a,l),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(e){return{baseLanes:e,cachePool:Es()}}function oc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function Lo(e,t,a){var l=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(ve.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(V){if(n?ua(t):ia(),(e=ce)?(e=Gr(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:It!==null?{id:Mt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=ds(e),a.return=t,t.child=a,De=t,ce=null)):e=null,e===null)throw ea(t);return Kc(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(ia(),n=t.mode,c=su({mode:"hidden",children:c},n),l=_a(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=sc(a),l.childLanes=oc(e,i,a),t.memoizedState=fc,Pl(null,l)):(ua(t),rc(t,c))}var f=e.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(u)t.flags&256?(ua(t),t.flags&=-257,t=dc(e,t,a)):t.memoizedState!==null?(ia(),t.child=e.child,t.flags|=128,t=null):(ia(),c=l.fallback,n=t.mode,l=su({mode:"visible",children:l.children},n),c=_a(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,Na(t,e.child,null,a),l=t.child,l.memoizedState=sc(a),l.childLanes=oc(e,i,a),t.memoizedState=fc,t=Pl(null,l));else if(ua(t),Kc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,l=Error(h(419)),l.stack="",l.digest=i,wl({value:l,source:null,stack:null}),t=dc(e,t,a)}else if(be||nl(e,t,a,!1),i=(a&e.childLanes)!==0,be||i){if(i=ie,i!==null&&(l=gf(i,a),l!==0&&l!==f.retryLane))throw f.retryLane=l,za(e,l),Je(i,e,l),ic;Vc(c)||Su(),t=dc(e,t,a)}else Vc(c)?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,ce=ht(c.nextSibling),De=t,V=!0,Pt=null,mt=!1,e!==null&&hs(t,e),t=rc(t,l.children),t.flags|=4096);return t}return n?(ia(),c=l.fallback,n=t.mode,f=e.child,m=f.sibling,l=Ht(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,m!==null?c=Ht(m,c):(c=_a(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,Pl(null,l),l=t.child,c=e.child.memoizedState,c===null?c=sc(a):(n=c.cachePool,n!==null?(f=Se._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Es(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=oc(e,i,a),t.memoizedState=fc,Pl(e.child,l)):(ua(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function rc(e,t){return t=su({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function su(e,t){return e=et(22,e,null,t),e.lanes=0,e}function dc(e,t,a){return Na(t,e.child,null,a),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function No(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),zi(e.return,t,a)}function mc(e,t,a,l,n,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n,i.treeForkCount=u)}function qo(e,t,a){var l=t.pendingProps,n=l.revealOrder,u=l.tail;l=l.children;var i=ve.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,M(ve,i),_e(e,t,l,a),l=V?jl:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&No(e,a,t);else if(e.tag===19)No(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&kn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),mc(t,!1,n,a,u,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&kn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}mc(t,!0,a,null,u,l);break;case"together":mc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Yt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(nl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function yc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xn(e)))}function Km(e,t,a){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),ta(t,Se,e.memoizedState.cache),Ua();break;case 27:case 5:Ol(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yi(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Lo(e,t,a):(ua(t),e=Yt(e,t,a),e!==null?e.sibling:null);ua(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(nl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return qo(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),M(ve,ve.current),l)break;return null;case 22:return t.lanes=0,_o(e,t,a,t.pendingProps);case 24:ta(t,Se,e.memoizedState.cache)}return Yt(e,t,a)}function Bo(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!yc(e,a)&&(t.flags&128)===0)return be=!1,Km(e,t,a);be=(e.flags&131072)!==0}else be=!1,V&&(t.flags&1048576)!==0&&ys(t,jl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ha(t.elementType),t.type=e,typeof e=="function")gi(e)?(l=Ba(e,l),t.tag=1,t=Ro(null,t,e,l,a)):(t.tag=0,t=cc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===it){t.tag=11,t=Oo(null,t,e,l,a);break e}else if(n===Z){t.tag=14,t=Do(null,t,e,l,a);break e}}throw t=Ut(e)||e,Error(h(306,t,""))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ba(l,t.pendingProps),Ro(e,t,l,n,a);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(h(387));l=t.pendingProps;var u=t.memoizedState;n=u.element,Li(e,t),$l(t,l,null,a);var i=t.memoizedState;if(l=i.cache,ta(t,Se,l),l!==u.cache&&_i(t,[Se],a,!0),Jl(),l=i.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Ho(e,t,l,a);break e}else if(l!==n){n=ot(Error(h(424)),t),wl(n),t=Ho(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ce=ht(e.firstChild),De=t,V=!0,Pt=null,mt=!0,a=zs(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ua(),l===n){t=Yt(e,t,a);break e}_e(e,t,l,a)}t=t.child}return t;case 26:return fu(e,t),e===null?(a=$r(t.type,null,t.pendingProps,null))?t.memoizedState=a:V||(a=t.type,e=t.pendingProps,l=Ou(Y.current).createElement(a),l[Oe]=t,l[we]=e,Ue(l,a,e),Ae(l),t.stateNode=l):t.memoizedState=$r(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ol(t),e===null&&V&&(l=t.stateNode=Vr(t.type,t.pendingProps,Y.current),De=t,mt=!0,n=ce,ya(t.type)?(Jc=n,ce=ht(l.firstChild)):ce=n),_e(e,t,t.pendingProps.children,a),fu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((n=l=ce)&&(l=Ty(l,t.type,t.pendingProps,mt),l!==null?(t.stateNode=l,De=t,ce=ht(l.firstChild),mt=!1,n=!0):n=!1),n||ea(t)),Ol(t),n=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,l=u.children,Gc(n,u)?l=null:i!==null&&Gc(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=wi(e,t,Bm,null,null,a),hn._currentValue=n),fu(e,t),_e(e,t,l,a),t.child;case 6:return e===null&&V&&((e=a=ce)&&(a=Ay(a,t.pendingProps,mt),a!==null?(t.stateNode=a,De=t,ce=null,e=!0):e=!1),e||ea(t)),null;case 13:return Lo(e,t,a);case 4:return Le(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Na(t,null,l,a):_e(e,t,l,a),t.child;case 11:return Oo(e,t,t.type,t.pendingProps,a);case 7:return _e(e,t,t.pendingProps,a),t.child;case 8:return _e(e,t,t.pendingProps.children,a),t.child;case 12:return _e(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),_e(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,xa(t),n=ze(n),l=l(n),t.flags|=1,_e(e,t,l,a),t.child;case 14:return Do(e,t,t.type,t.pendingProps,a);case 15:return zo(e,t,t.type,t.pendingProps,a);case 19:return qo(e,t,a);case 31:return Vm(e,t,a);case 22:return _o(e,t,a,t.pendingProps);case 24:return xa(t),l=ze(Se),e===null?(n=xi(),n===null&&(n=ie,u=Ui(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=a),n=u),t.memoizedState={parent:l,cache:n},Hi(t),ta(t,Se,n)):((e.lanes&a)!==0&&(Li(e,t),$l(t,null,null,a),Jl()),n=e.memoizedState,u=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,Se,l)):(l=u.cache,ta(t,Se,l),l!==n.cache&&_i(t,[Se],a,!0))),_e(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function jt(e){e.flags|=4}function hc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(or())e.flags|=8192;else throw La=Jn,Ri}else e.flags&=-16777217}function Qo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pr(t))if(or())e.flags|=8192;else throw La=Jn,Ri}function ou(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vf():536870912,e.lanes|=t,vl|=t)}function en(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Jm(e,t,a){var l=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return fe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),qt(Se),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(t)?jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oi())),fe(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(jt(t),u!==null?(fe(t),Qo(t,u)):(fe(t),hc(t,n,null,l,a))):u?u!==e.memoizedState?(jt(t),fe(t),Qo(t,u)):(fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&jt(t),fe(t),hc(t,n,e,l,a)),null;case 27:if(En(t),a=Y.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(!l){if(t.stateNode===null)throw Error(h(166));return fe(t),null}e=z.current,ll(t)?vs(t):(e=Vr(n,l,a),t.stateNode=e,jt(t))}return fe(t),null;case 5:if(En(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(!l){if(t.stateNode===null)throw Error(h(166));return fe(t),null}if(u=z.current,ll(t))vs(t);else{var i=Ou(Y.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?i.createElement(n,{is:l.is}):i.createElement(n)}}u[Oe]=t,u[we]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(Ue(u,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&jt(t)}}return fe(t),hc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(h(166));if(e=Y.current,ll(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=De,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Oe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Lr(e.nodeValue,a)),e||ea(t,!0)}else e=Ou(e).createTextNode(l),e[Oe]=t,t.stateNode=e}return fe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ll(t),a!==null){if(e===null){if(!l)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[Oe]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),e=!1}else a=Oi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(h(558))}return fe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(h(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[Oe]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),n=!1}else n=Oi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ou(t,t.updateQueue),fe(t),null);case 4:return he(),e===null&&Bc(t.stateNode.containerInfo),fe(t),null;case 10:return qt(t.type),fe(t),null;case 19:if(E(ve),l=t.memoizedState,l===null)return fe(t),null;if(n=(t.flags&128)!==0,u=l.rendering,u===null)if(n)en(l,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=kn(e),u!==null){for(t.flags|=128,en(l,!1),e=u.updateQueue,t.updateQueue=e,ou(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)rs(a,e),a=a.sibling;return M(ve,ve.current&1|2),V&&Lt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Fe()>hu&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304)}else{if(!n)if(e=kn(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ou(t,e),en(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!V)return fe(t),null}else 2*Fe()-l.renderingStartTime>hu&&a!==536870912&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(e=l.last,e!==null?e.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,a=ve.current,M(ve,n?a&1|2:a&1),V&&Lt(t,l.treeForkCount),e):(fe(t),null);case 22:case 23:return at(t),Qi(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),a=t.updateQueue,a!==null&&ou(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&E(Ra),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(Se),fe(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function $m(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(Se),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(h(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(ve),null;case 4:return he(),null;case 10:return qt(t.type),null;case 22:case 23:return at(t),Qi(),e!==null&&E(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(Se),null;case 25:return null;default:return null}}function Yo(e,t){switch(Ai(t),t.tag){case 3:qt(Se),he();break;case 26:case 27:case 5:En(t);break;case 4:he();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:E(ve);break;case 10:qt(t.type);break;case 22:case 23:at(t),Qi(),e!==null&&E(Ra);break;case 24:qt(Se)}}function tn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var u=a.create,i=a.inst;l=u(),i.destroy=l}a=a.next}while(a!==n)}}catch(c){ee(t,t.return,c)}}function ca(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var u=n.next;l=u;do{if((l.tag&e)===e){var i=l.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var f=a,m=c;try{m()}catch(p){ee(n,f,p)}}}l=l.next}while(l!==u)}}catch(p){ee(t,t.return,p)}}function jo(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Us(t,a)}catch(l){ee(e,e.return,l)}}}function wo(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ee(e,t,l)}}function an(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ee(e,t,n)}}function Dt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ee(e,t,n)}else a.current=null}function Go(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ee(e,e.return,n)}}function vc(e,t,a){try{var l=e.stateNode;vy(l,e.type,a,t),l[we]=t}catch(n){ee(e,e.return,n)}}function Xo(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xo(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=xt));else if(l!==4&&(l===27&&ya(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Sc(e,t,a),e=e.sibling;e!==null;)Sc(e,t,a),e=e.sibling}function ru(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ru(e,t,a),e=e.sibling;e!==null;)ru(e,t,a),e=e.sibling}function Zo(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ue(t,l,a),t[Oe]=e,t[we]=a}catch(u){ee(e,e.return,u)}}var wt=!1,Ee=!1,gc=!1,Vo=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Wm(e,t){if(e=e.containerInfo,jc=Ru,e=as(e),di(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var i=0,c=-1,f=-1,m=0,p=0,b=e,y=null;t:for(;;){for(var v;b!==a||n!==0&&b.nodeType!==3||(c=i+n),b!==u||l!==0&&b.nodeType!==3||(f=i+l),b.nodeType===3&&(i+=b.nodeValue.length),(v=b.firstChild)!==null;)y=b,b=v;for(;;){if(b===e)break t;if(y===a&&++m===n&&(c=i),y===u&&++p===l&&(f=i),(v=b.nextSibling)!==null)break;b=y,y=b.parentNode}b=v}a=c===-1||f===-1?null:{start:c,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(wc={focusedElem:e,selectionRange:a},Ru=!1,Me=t;Me!==null;)if(t=Me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Me=e;else for(;Me!==null;){switch(t=Me,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,n=u.memoizedProps,u=u.memoizedState,l=a.stateNode;try{var O=Ba(a.type,n);e=l.getSnapshotBeforeUpdate(O,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(x){ee(a,a.return,x)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Zc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Me=e;break}Me=t.return}}function Ko(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Xt(e,a),l&4&&tn(5,a);break;case 1:if(Xt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){ee(a,a.return,i)}else{var n=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ee(a,a.return,i)}}l&64&&jo(a),l&512&&an(a,a.return);break;case 3:if(Xt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Us(e,t)}catch(i){ee(a,a.return,i)}}break;case 27:t===null&&l&4&&Zo(a);case 26:case 5:Xt(e,a),t===null&&l&4&&Go(a),l&512&&an(a,a.return);break;case 12:Xt(e,a);break;case 31:Xt(e,a),l&4&&Wo(e,a);break;case 13:Xt(e,a),l&4&&Fo(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ny.bind(null,a),My(e,a))));break;case 22:if(l=a.memoizedState!==null||wt,!l){t=t!==null&&t.memoizedState!==null||Ee,n=wt;var u=Ee;wt=l,(Ee=t)&&!u?Zt(e,a,(a.subtreeFlags&8772)!==0):Xt(e,a),wt=n,Ee=u}break;case 30:break;default:Xt(e,a)}}function Jo(e){var t=e.alternate;t!==null&&(e.alternate=null,Jo(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var oe=null,Xe=!1;function Gt(e,t,a){for(a=a.child;a!==null;)$o(e,t,a),a=a.sibling}function $o(e,t,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:Ee||Dt(a,t),Gt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ee||Dt(a,t);var l=oe,n=Xe;ya(a.type)&&(oe=a.stateNode,Xe=!1),Gt(e,t,a),dn(a.stateNode),oe=l,Xe=n;break;case 5:Ee||Dt(a,t);case 6:if(l=oe,n=Xe,oe=null,Gt(e,t,a),oe=l,Xe=n,oe!==null)if(Xe)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(a.stateNode)}catch(u){ee(a,t,u)}else try{oe.removeChild(a.stateNode)}catch(u){ee(a,t,u)}break;case 18:oe!==null&&(Xe?(e=oe,jr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ml(e)):jr(oe,a.stateNode));break;case 4:l=oe,n=Xe,oe=a.stateNode.containerInfo,Xe=!0,Gt(e,t,a),oe=l,Xe=n;break;case 0:case 11:case 14:case 15:ca(2,a,t),Ee||ca(4,a,t),Gt(e,t,a);break;case 1:Ee||(Dt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&wo(a,t,l)),Gt(e,t,a);break;case 21:Gt(e,t,a);break;case 22:Ee=(l=Ee)||a.memoizedState!==null,Gt(e,t,a),Ee=l;break;default:Gt(e,t,a)}}function Wo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ml(e)}catch(a){ee(t,t.return,a)}}}function Fo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(a){ee(t,t.return,a)}}function Fm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vo),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vo),t;default:throw Error(h(435,e.tag))}}function du(e,t){var a=Fm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=uy.bind(null,e,l);l.then(n,n)}})}function Ze(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],u=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(ya(c.type)){oe=c.stateNode,Xe=!1;break e}break;case 5:oe=c.stateNode,Xe=!1;break e;case 3:case 4:oe=c.stateNode.containerInfo,Xe=!0;break e}c=c.return}if(oe===null)throw Error(h(160));$o(u,i,n),oe=null,Xe=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ko(t,e),t=t.sibling}var gt=null;function ko(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ze(t,e),Ve(e),l&4&&(ca(3,e,e.return),tn(3,e),ca(5,e,e.return));break;case 1:Ze(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),l&64&&wt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=gt;if(Ze(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),l&4){var u=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ul]||u[Oe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(l),n.head.insertBefore(u,n.querySelector("head > title"))),Ue(u,l,a),u[Oe]=e,Ae(u),l=u;break e;case"link":var i=kr("link","href",n).get(l+(a.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(l),Ue(u,l,a),n.head.appendChild(u);break;case"meta":if(i=kr("meta","content",n).get(l+(a.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(c,1);break t}}u=n.createElement(l),Ue(u,l,a),n.head.appendChild(u);break;default:throw Error(h(468,l))}u[Oe]=e,Ae(u),l=u}e.stateNode=l}else Ir(n,e.type,e.stateNode);else e.stateNode=Fr(n,l,e.memoizedProps);else u!==l?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,l===null?Ir(n,e.type,e.stateNode):Fr(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&vc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ze(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),a!==null&&l&4&&vc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ze(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),e.flags&32){n=e.stateNode;try{Ja(n,"")}catch(O){ee(e,e.return,O)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,vc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(gc=!0);break;case 6:if(Ze(t,e),Ve(e),l&4){if(e.stateNode===null)throw Error(h(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(O){ee(e,e.return,O)}}break;case 3:if(_u=null,n=gt,gt=Du(t.containerInfo),Ze(t,e),gt=n,Ve(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ml(t.containerInfo)}catch(O){ee(e,e.return,O)}gc&&(gc=!1,Io(e));break;case 4:l=gt,gt=Du(e.stateNode.containerInfo),Ze(t,e),Ve(e),gt=l;break;case 12:Ze(t,e),Ve(e);break;case 31:Ze(t,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 13:Ze(t,e),Ve(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yu=Fe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 22:n=e.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,m=wt,p=Ee;if(wt=m||n,Ee=p||f,Ze(t,e),Ee=p,wt=m,Ve(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||f||wt||Ee||Qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){f=a=t;try{if(u=f.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var b=f.memoizedProps.style,y=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(O){ee(f,f.return,O)}}}else if(t.tag===6){if(a===null){f=t;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(O){ee(f,f.return,O)}}}else if(t.tag===18){if(a===null){f=t;try{var v=f.stateNode;n?wr(v,!0):wr(f.stateNode,!1)}catch(O){ee(f,f.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,du(e,a))));break;case 19:Ze(t,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 30:break;case 21:break;default:Ze(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Xo(l)){a=l;break}l=l.return}if(a==null)throw Error(h(160));switch(a.tag){case 27:var n=a.stateNode,u=pc(e);ru(e,u,n);break;case 5:var i=a.stateNode;a.flags&32&&(Ja(i,""),a.flags&=-33);var c=pc(e);ru(e,c,i);break;case 3:case 4:var f=a.stateNode.containerInfo,m=pc(e);Sc(e,m,f);break;default:throw Error(h(161))}}catch(p){ee(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Io(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Io(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ko(e,t.alternate,t),t=t.sibling}function Qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Qa(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&wo(t,t.return,a),Qa(t);break;case 27:dn(t.stateNode);case 26:case 5:Dt(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}e=e.sibling}}function Zt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:Zt(n,u,a),tn(4,u);break;case 1:if(Zt(n,u,a),l=u,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){ee(l,l.return,m)}if(l=u,n=l.updateQueue,n!==null){var c=l.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)_s(f[n],c)}catch(m){ee(l,l.return,m)}}a&&i&64&&jo(u),an(u,u.return);break;case 27:Zo(u);case 26:case 5:Zt(n,u,a),a&&l===null&&i&4&&Go(u),an(u,u.return);break;case 12:Zt(n,u,a);break;case 31:Zt(n,u,a),a&&i&4&&Wo(n,u);break;case 13:Zt(n,u,a),a&&i&4&&Fo(n,u);break;case 22:u.memoizedState===null&&Zt(n,u,a),an(u,u.return);break;case 30:break;default:Zt(n,u,a)}t=t.sibling}}function bc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Gl(a))}function Ec(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e))}function bt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Po(e,t,a,l),t=t.sibling}function Po(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,a,l),n&2048&&tn(9,t);break;case 1:bt(e,t,a,l);break;case 3:bt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e)));break;case 12:if(n&2048){bt(e,t,a,l),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){ee(t,t.return,f)}}else bt(e,t,a,l);break;case 31:bt(e,t,a,l);break;case 13:bt(e,t,a,l);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?bt(e,t,a,l):ln(e,t):u._visibility&2?bt(e,t,a,l):(u._visibility|=2,ml(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&bc(i,t);break;case 24:bt(e,t,a,l),n&2048&&Ec(t.alternate,t);break;default:bt(e,t,a,l)}}function ml(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,c=a,f=l,m=i.flags;switch(i.tag){case 0:case 11:case 15:ml(u,i,c,f,n),tn(8,i);break;case 23:break;case 22:var p=i.stateNode;i.memoizedState!==null?p._visibility&2?ml(u,i,c,f,n):ln(u,i):(p._visibility|=2,ml(u,i,c,f,n)),n&&m&2048&&bc(i.alternate,i);break;case 24:ml(u,i,c,f,n),n&&m&2048&&Ec(i.alternate,i);break;default:ml(u,i,c,f,n)}t=t.sibling}}function ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:ln(a,l),n&2048&&bc(l.alternate,l);break;case 24:ln(a,l),n&2048&&Ec(l.alternate,l);break;default:ln(a,l)}t=t.sibling}}var nn=8192;function yl(e,t,a){if(e.subtreeFlags&nn)for(e=e.child;e!==null;)er(e,t,a),e=e.sibling}function er(e,t,a){switch(e.tag){case 26:yl(e,t,a),e.flags&nn&&e.memoizedState!==null&&qy(a,gt,e.memoizedState,e.memoizedProps);break;case 5:yl(e,t,a);break;case 3:case 4:var l=gt;gt=Du(e.stateNode.containerInfo),yl(e,t,a),gt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=nn,nn=16777216,yl(e,t,a),nn=l):yl(e,t,a));break;default:yl(e,t,a)}}function tr(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Me=l,lr(l,e)}tr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ar(e),e=e.sibling}function ar(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&ca(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mu(e)):un(e);break;default:un(e)}}function mu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Me=l,lr(l,e)}tr(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),mu(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mu(t));break;default:mu(t)}e=e.sibling}}function lr(e,t){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Gl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Me=l;else e:for(a=e;Me!==null;){l=Me;var n=l.sibling,u=l.return;if(Jo(l),l===a){Me=null;break e}if(n!==null){n.return=u,Me=n;break e}Me=u}}}var km={getCacheForType:function(e){var t=ze(Se),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ze(Se).controller.signal}},Im=typeof WeakMap=="function"?WeakMap:Map,W=0,ie=null,j=null,G=0,P=0,lt=null,fa=!1,hl=!1,Tc=!1,Vt=0,me=0,sa=0,Ya=0,Ac=0,nt=0,vl=0,cn=null,Ke=null,Mc=!1,yu=0,nr=0,hu=1/0,vu=null,oa=null,Te=0,ra=null,pl=null,Kt=0,Oc=0,Dc=null,ur=null,fn=0,zc=null;function ut(){return(W&2)!==0&&G!==0?G&-G:S.T!==null?Hc():bf()}function ir(){if(nt===0)if((G&536870912)===0||V){var e=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Je(e,t,a){(e===ie&&(P===2||P===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),da(e,G,nt,!1)),_l(e,a),((W&2)===0||e!==ie)&&(e===ie&&((W&2)===0&&(Ya|=a),me===4&&da(e,G,nt,!1)),zt(e))}function cr(e,t,a){if((W&6)!==0)throw Error(h(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||zl(e,t),n=l?ty(e,t):Uc(e,t,!0),u=l;do{if(n===0){hl&&!l&&da(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Pm(a)){n=Uc(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var c=e;n=cn;var f=c.current.memoizedState.isDehydrated;if(f&&(Sl(c,i).flags|=256),i=Uc(c,i,!1),i!==2){if(Tc&&!f){c.errorRecoveryDisabledLanes|=u,Ya|=u,n=4;break e}u=Ke,Ke=n,u!==null&&(Ke===null?Ke=u:Ke.push.apply(Ke,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Sl(e,0),da(e,t,0,!0);break}e:{switch(l=e,u=n,u){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:da(l,t,nt,!fa);break e;case 2:Ke=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(n=yu+300-Fe(),10<n)){if(da(l,t,nt,!fa),Dn(l,0,!0)!==0)break e;Kt=t,l.timeoutHandle=Qr(fr.bind(null,l,a,Ke,vu,Mc,t,nt,Ya,vl,fa,u,"Throttled",-0,0),n);break e}fr(l,a,Ke,vu,Mc,t,nt,Ya,vl,fa,u,null,-0,0)}}break}while(!0);zt(e)}function fr(e,t,a,l,n,u,i,c,f,m,p,b,y,v){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xt},er(t,u,b);var O=(u&62914560)===u?yu-Fe():(u&4194048)===u?nr-Fe():0;if(O=By(b,O),O!==null){Kt=u,e.cancelPendingCommit=O(vr.bind(null,e,t,u,a,l,n,i,c,f,p,b,null,y,v)),da(e,u,i,!m);return}}vr(e,t,u,a,l,n,i,c,f)}function Pm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],u=n.getSnapshot;n=n.value;try{if(!Pe(u(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,a,l){t&=~Ac,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var u=31-Ie(n),i=1<<u;l[u]=-1,n&=~i}a!==0&&pf(e,a,t)}function pu(){return(W&6)===0?(sn(0),!1):!0}function _c(){if(j!==null){if(P===0)var e=j.return;else e=j,Nt=Ca=null,Zi(e),fl=null,Zl=0,e=j;for(;e!==null;)Yo(e.alternate,e),e=e.return;j=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Kt=0,_c(),ie=e,j=a=Ht(e.current,null),G=t,P=0,lt=null,fa=!1,hl=zl(e,t),Tc=!1,vl=nt=Ac=Ya=sa=me=0,Ke=cn=null,Mc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Ie(l),u=1<<n;t|=e[n],l&=~u}return Vt=t,Qn(),a}function sr(e,t){B=null,S.H=Il,t===cl||t===Kn?(t=Ms(),P=3):t===Ri?(t=Ms(),P=4):P=t===ic?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,j===null&&(me=1,iu(e,ot(t,e.current)))}function or(){var e=tt.current;return e===null?!0:(G&4194048)===G?yt===null:(G&62914560)===G||(G&536870912)!==0?e===yt:!1}function rr(){var e=S.H;return S.H=Il,e===null?Il:e}function dr(){var e=S.A;return S.A=km,e}function Su(){me=4,fa||(G&4194048)!==G&&tt.current!==null||(hl=!0),(sa&134217727)===0&&(Ya&134217727)===0||ie===null||da(ie,G,nt,!1)}function Uc(e,t,a){var l=W;W|=2;var n=rr(),u=dr();(ie!==e||G!==t)&&(vu=null,Sl(e,t)),t=!1;var i=me;e:do try{if(P!==0&&j!==null){var c=j,f=lt;switch(P){case 8:_c(),i=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=P;if(P=0,lt=null,gl(e,c,f,m),a&&hl){i=0;break e}break;default:m=P,P=0,lt=null,gl(e,c,f,m)}}ey(),i=me;break}catch(p){sr(e,p)}while(!0);return t&&e.shellSuspendCounter++,Nt=Ca=null,W=l,S.H=n,S.A=u,j===null&&(ie=null,G=0,Qn()),i}function ey(){for(;j!==null;)mr(j)}function ty(e,t){var a=W;W|=2;var l=rr(),n=dr();ie!==e||G!==t?(vu=null,hu=Fe()+500,Sl(e,t)):hl=zl(e,t);e:do try{if(P!==0&&j!==null){t=j;var u=lt;t:switch(P){case 1:P=0,lt=null,gl(e,t,u,1);break;case 2:case 9:if(Ts(u)){P=0,lt=null,yr(t);break}t=function(){P!==2&&P!==9||ie!==e||(P=7),zt(e)},u.then(t,t);break e;case 3:P=7;break e;case 4:P=5;break e;case 7:Ts(u)?(P=0,lt=null,yr(t)):(P=0,lt=null,gl(e,t,u,7));break;case 5:var i=null;switch(j.tag){case 26:i=j.memoizedState;case 5:case 27:var c=j;if(i?Pr(i):c.stateNode.complete){P=0,lt=null;var f=c.sibling;if(f!==null)j=f;else{var m=c.return;m!==null?(j=m,gu(m)):j=null}break t}}P=0,lt=null,gl(e,t,u,5);break;case 6:P=0,lt=null,gl(e,t,u,6);break;case 8:_c(),me=6;break e;default:throw Error(h(462))}}ay();break}catch(p){sr(e,p)}while(!0);return Nt=Ca=null,S.H=l,S.A=n,W=a,j!==null?0:(ie=null,G=0,Qn(),me)}function ay(){for(;j!==null&&!Od();)mr(j)}function mr(e){var t=Bo(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?gu(e):j=t}function yr(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=xo(a,t,t.pendingProps,t.type,void 0,G);break;case 11:t=xo(a,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:Zi(t);default:Yo(a,t),t=j=rs(t,Vt),t=Bo(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?gu(e):j=t}function gl(e,t,a,l){Nt=Ca=null,Zi(t),fl=null,Zl=0;var n=t.return;try{if(Zm(e,n,t,a,G)){me=1,iu(e,ot(a,e.current)),j=null;return}}catch(u){if(n!==null)throw j=n,u;me=1,iu(e,ot(a,e.current)),j=null;return}t.flags&32768?(V||l===1?e=!0:hl||(G&536870912)!==0?e=!1:(fa=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),hr(t,e)):gu(t)}function gu(e){var t=e;do{if((t.flags&32768)!==0){hr(t,fa);return}e=t.return;var a=Jm(t.alternate,t,Vt);if(a!==null){j=a;return}if(t=t.sibling,t!==null){j=t;return}j=t=e}while(t!==null);me===0&&(me=5)}function hr(e,t){do{var a=$m(e.alternate,e);if(a!==null){a.flags&=32767,j=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){j=e;return}j=e=a}while(e!==null);me=6,j=null}function vr(e,t,a,l,n,u,i,c,f){e.cancelPendingCommit=null;do bu();while(Te!==0);if((W&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(u=t.lanes|t.childLanes,u|=pi,Nd(e,a,u,i,c,f),e===ie&&(j=ie=null,G=0),pl=t,ra=e,Kt=a,Oc=u,Dc=n,ur=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iy(Tn,function(){return Er(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=S.T,S.T=null,n=A.p,A.p=2,i=W,W|=4;try{Wm(e,t,a)}finally{W=i,A.p=n,S.T=l}}Te=1,pr(),Sr(),gr()}}function pr(){if(Te===1){Te=0;var e=ra,t=pl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var l=A.p;A.p=2;var n=W;W|=4;try{ko(t,e);var u=wc,i=as(e.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&ts(c.ownerDocument.documentElement,c)){if(f!==null&&di(c)){var m=f.start,p=f.end;if(p===void 0&&(p=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(p,c.value.length);else{var b=c.ownerDocument||document,y=b&&b.defaultView||window;if(y.getSelection){var v=y.getSelection(),O=c.textContent.length,x=Math.min(f.start,O),ne=f.end===void 0?x:Math.min(f.end,O);!v.extend&&x>ne&&(i=ne,ne=x,x=i);var r=es(c,x),s=es(c,ne);if(r&&s&&(v.rangeCount!==1||v.anchorNode!==r.node||v.anchorOffset!==r.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)){var d=b.createRange();d.setStart(r.node,r.offset),v.removeAllRanges(),x>ne?(v.addRange(d),v.extend(s.node,s.offset)):(d.setEnd(s.node,s.offset),v.addRange(d))}}}}for(b=[],v=c;v=v.parentNode;)v.nodeType===1&&b.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var g=b[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Ru=!!jc,wc=jc=null}finally{W=n,A.p=l,S.T=a}}e.current=t,Te=2}}function Sr(){if(Te===2){Te=0;var e=ra,t=pl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var l=A.p;A.p=2;var n=W;W|=4;try{Ko(e,t.alternate,t)}finally{W=n,A.p=l,S.T=a}}Te=3}}function gr(){if(Te===4||Te===3){Te=0,Dd();var e=ra,t=pl,a=Kt,l=ur;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,pl=ra=null,br(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(oa=null),Ju(a),t=t.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=S.T,n=A.p,A.p=2,S.T=null;try{for(var u=e.onRecoverableError,i=0;i<l.length;i++){var c=l[i];u(c.value,{componentStack:c.stack})}}finally{S.T=t,A.p=n}}(Kt&3)!==0&&bu(),zt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===zc?fn++:(fn=0,zc=e):fn=0,sn(0)}}function br(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Gl(t)))}function bu(){return pr(),Sr(),gr(),Er()}function Er(){if(Te!==5)return!1;var e=ra,t=Oc;Oc=0;var a=Ju(Kt),l=S.T,n=A.p;try{A.p=32>a?32:a,S.T=null,a=Dc,Dc=null;var u=ra,i=Kt;if(Te=0,pl=ra=null,Kt=0,(W&6)!==0)throw Error(h(331));var c=W;if(W|=4,ar(u.current),Po(u,u.current,i,a),W=c,sn(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Dl,u)}catch{}return!0}finally{A.p=n,S.T=l,br(e,t)}}function Tr(e,t,a){t=ot(a,t),t=uc(e.stateNode,t,2),e=na(e,t,2),e!==null&&(_l(e,2),zt(e))}function ee(e,t,a){if(e.tag===3)Tr(e,e,a);else for(;t!==null;){if(t.tag===3){Tr(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(oa===null||!oa.has(l))){e=ot(a,e),a=Ao(2),l=na(t,a,2),l!==null&&(Mo(a,l,t,e),_l(l,2),zt(l));break}}t=t.return}}function Cc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Im;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Tc=!0,n.add(a),e=ly.bind(null,e,t,a),t.then(e,e))}function ly(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ie===e&&(G&a)===a&&(me===4||me===3&&(G&62914560)===G&&300>Fe()-yu?(W&2)===0&&Sl(e,0):Ac|=a,vl===G&&(vl=0)),zt(e)}function Ar(e,t){t===0&&(t=vf()),e=za(e,t),e!==null&&(_l(e,t),zt(e))}function ny(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ar(e,a)}function uy(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(h(314))}l!==null&&l.delete(t),Ar(e,a)}function iy(e,t){return Xu(e,t)}var Eu=null,bl=null,xc=!1,Tu=!1,Rc=!1,ma=0;function zt(e){e!==bl&&e.next===null&&(bl===null?Eu=bl=e:bl=bl.next=e),Tu=!0,xc||(xc=!0,fy())}function sn(e,t){if(!Rc&&Tu){Rc=!0;do for(var a=!1,l=Eu;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var u=0;else{var i=l.suspendedLanes,c=l.pingedLanes;u=(1<<31-Ie(42|e)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,zr(l,u))}else u=G,u=Dn(l,l===ie?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||zl(l,u)||(a=!0,zr(l,u));l=l.next}while(a);Rc=!1}}function cy(){Mr()}function Mr(){Tu=xc=!1;var e=0;ma!==0&&Sy()&&(e=ma);for(var t=Fe(),a=null,l=Eu;l!==null;){var n=l.next,u=Or(l,t);u===0?(l.next=null,a===null?Eu=n:a.next=n,n===null&&(bl=a)):(a=l,(e!==0||(u&3)!==0)&&(Tu=!0)),l=n}Te!==0&&Te!==5||sn(e),ma!==0&&(ma=0)}function Or(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-Ie(u),c=1<<i,f=n[i];f===-1?((c&a)===0||(c&l)!==0)&&(n[i]=Ld(c,t)):f<=t&&(e.expiredLanes|=c),u&=~c}if(t=ie,a=G,a=Dn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(P===2||P===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Zu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Zu(l),Ju(a)){case 2:case 8:a=yf;break;case 32:a=Tn;break;case 268435456:a=hf;break;default:a=Tn}return l=Dr.bind(null,e),a=Xu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Zu(l),e.callbackPriority=2,e.callbackNode=null,2}function Dr(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bu()&&e.callbackNode!==a)return null;var l=G;return l=Dn(e,e===ie?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(cr(e,l,t),Or(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?Dr.bind(null,e):null)}function zr(e,t){if(bu())return null;cr(e,t,!0)}function fy(){by(function(){(W&6)!==0?Xu(mf,cy):Mr()})}function Hc(){if(ma===0){var e=ul;e===0&&(e=An,An<<=1,(An&261888)===0&&(An=256)),ma=e}return ma}function _r(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cn(""+e)}function Ur(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function sy(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var u=_r((n[we]||null).action),i=l.submitter;i&&(t=(t=i[we]||null)?_r(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new Ln("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ma!==0){var f=i?Ur(n,i):new FormData(n);Pi(a,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?Ur(n,i):new FormData(n),Pi(a,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var Lc=0;Lc<vi.length;Lc++){var Nc=vi[Lc],oy=Nc.toLowerCase(),ry=Nc[0].toUpperCase()+Nc.slice(1);St(oy,"on"+ry)}St(us,"onAnimationEnd"),St(is,"onAnimationIteration"),St(cs,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(zm,"onTransitionRun"),St(_m,"onTransitionStart"),St(Um,"onTransitionCancel"),St(fs,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var on="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(on));function Cr(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var i=l.length-1;0<=i;i--){var c=l[i],f=c.instance,m=c.currentTarget;if(c=c.listener,f!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(p){Bn(p)}n.currentTarget=null,u=f}else for(i=0;i<l.length;i++){if(c=l[i],f=c.instance,m=c.currentTarget,c=c.listener,f!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(p){Bn(p)}n.currentTarget=null,u=f}}}}function w(e,t){var a=t[$u];a===void 0&&(a=t[$u]=new Set);var l=e+"__bubble";a.has(l)||(xr(t,e,2,!1),a.add(l))}function qc(e,t,a){var l=0;t&&(l|=4),xr(a,e,l,t)}var Au="_reactListening"+Math.random().toString(36).slice(2);function Bc(e){if(!e[Au]){e[Au]=!0,Af.forEach(function(a){a!=="selectionchange"&&(dy.has(a)||qc(a,!1,e),qc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Au]||(t[Au]=!0,qc("selectionchange",!1,t))}}function xr(e,t,a,l){switch(id(t)){case 2:var n=jy;break;case 8:n=wy;break;default:n=Ic}a=n.bind(null,t,a,e),n=void 0,!li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Qc(e,t,a,l,n){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var c=l.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=l.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Ga(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){l=u=i;continue e}c=c.parentNode}}l=l.return}Nf(function(){var m=u,p=ti(a),b=[];e:{var y=ss.get(e);if(y!==void 0){var v=Ln,O=e;switch(e){case"keypress":if(Rn(a)===0)break e;case"keydown":case"keyup":v=um;break;case"focusin":O="focus",v=ci;break;case"focusout":O="blur",v=ci;break;case"beforeblur":case"afterblur":v=ci;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fm;break;case us:case is:case cs:v=Fd;break;case fs:v=om;break;case"scroll":case"scrollend":v=Vd;break;case"wheel":v=dm;break;case"copy":case"cut":case"paste":v=Id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jf;break;case"toggle":case"beforetoggle":v=ym}var x=(t&4)!==0,ne=!x&&(e==="scroll"||e==="scrollend"),r=x?y!==null?y+"Capture":null:y;x=[];for(var s=m,d;s!==null;){var g=s;if(d=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||d===null||r===null||(g=xl(s,r),g!=null&&x.push(rn(s,g,d))),ne)break;s=s.return}0<x.length&&(y=new v(y,O,null,a,p),b.push({event:y,listeners:x}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",y&&a!==ei&&(O=a.relatedTarget||a.fromElement)&&(Ga(O)||O[wa]))break e;if((v||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,v?(O=a.relatedTarget||a.toElement,v=m,O=O?Ga(O):null,O!==null&&(ne=$(O),x=O.tag,O!==ne||x!==5&&x!==27&&x!==6)&&(O=null)):(v=null,O=m),v!==O)){if(x=Qf,g="onMouseLeave",r="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(x=jf,g="onPointerLeave",r="onPointerEnter",s="pointer"),ne=v==null?y:Cl(v),d=O==null?y:Cl(O),y=new x(g,s+"leave",v,a,p),y.target=ne,y.relatedTarget=d,g=null,Ga(p)===m&&(x=new x(r,s+"enter",O,a,p),x.target=d,x.relatedTarget=ne,g=x),ne=g,v&&O)t:{for(x=my,r=v,s=O,d=0,g=r;g;g=x(g))d++;g=0;for(var U=s;U;U=x(U))g++;for(;0<d-g;)r=x(r),d--;for(;0<g-d;)s=x(s),g--;for(;d--;){if(r===s||s!==null&&r===s.alternate){x=r;break t}r=x(r),s=x(s)}x=null}else x=null;v!==null&&Rr(b,y,v,x,!1),O!==null&&ne!==null&&Rr(b,ne,O,x,!0)}}e:{if(y=m?Cl(m):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var K=$f;else if(Kf(y))if(Wf)K=Mm;else{K=Tm;var _=Em}else v=y.nodeName,!v||v.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?m&&Pu(m.elementType)&&(K=$f):K=Am;if(K&&(K=K(e,m))){Jf(b,K,a,p);break e}_&&_(e,y,m),e==="focusout"&&m&&y.type==="number"&&m.memoizedProps.value!=null&&Iu(y,"number",y.value)}switch(_=m?Cl(m):window,e){case"focusin":(Kf(_)||_.contentEditable==="true")&&(ka=_,mi=m,Yl=null);break;case"focusout":Yl=mi=ka=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,ls(b,a,p);break;case"selectionchange":if(Dm)break;case"keydown":case"keyup":ls(b,a,p)}var Q;if(si)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Fa?Zf(e,a)&&(X="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(wf&&a.locale!=="ko"&&(Fa||X!=="onCompositionStart"?X==="onCompositionEnd"&&Fa&&(Q=qf()):(kt=p,ni="value"in kt?kt.value:kt.textContent,Fa=!0)),_=Mu(m,X),0<_.length&&(X=new Yf(X,e,null,a,p),b.push({event:X,listeners:_}),Q?X.data=Q:(Q=Vf(a),Q!==null&&(X.data=Q)))),(Q=vm?pm(e,a):Sm(e,a))&&(X=Mu(m,"onBeforeInput"),0<X.length&&(_=new Yf("onBeforeInput","beforeinput",null,a,p),b.push({event:_,listeners:X}),_.data=Q)),sy(b,e,m,a,p)}Cr(b,t)})}function rn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Mu(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=xl(e,a),n!=null&&l.unshift(rn(e,n,u)),n=xl(e,t),n!=null&&l.push(rn(e,n,u))),e.tag===3)return l;e=e.return}return[]}function my(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rr(e,t,a,l,n){for(var u=t._reactName,i=[];a!==null&&a!==l;){var c=a,f=c.alternate,m=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||m===null||(f=m,n?(m=xl(a,u),m!=null&&i.unshift(rn(a,m,f))):n||(m=xl(a,u),m!=null&&i.push(rn(a,m,f)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var yy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function Hr(e){return(typeof e=="string"?e:""+e).replace(yy,`
`).replace(hy,"")}function Lr(e,t){return t=Hr(t),Hr(e)===t}function le(e,t,a,l,n,u){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ja(e,""+l);break;case"className":_n(e,"class",l);break;case"tabIndex":_n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(e,a,l);break;case"style":Hf(e,l,u);break;case"data":if(t!=="object"){_n(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&le(e,t,"name",n.name,n,null),le(e,t,"formEncType",n.formEncType,n,null),le(e,t,"formMethod",n.formMethod,n,null),le(e,t,"formTarget",n.formTarget,n,null)):(le(e,t,"encType",n.encType,n,null),le(e,t,"method",n.method,n,null),le(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=xt);break;case"onScroll":l!=null&&w("scroll",e);break;case"onScrollEnd":l!=null&&w("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Cn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":w("beforetoggle",e),w("toggle",e),zn(e,"popover",l);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xd.get(a)||a,zn(e,a,l))}}function Yc(e,t,a,l,n,u){switch(a){case"style":Hf(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&Ja(e,""+l);break;case"onScroll":l!=null&&w("scroll",e);break;case"onScrollEnd":l!=null&&w("scrollend",e);break;case"onClick":l!=null&&(e.onclick=xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),u=e[we]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof l=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):zn(e,a,l)}}}function Ue(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":w("error",e),w("load",e);var l=!1,n=!1,u;for(u in a)if(a.hasOwnProperty(u)){var i=a[u];if(i!=null)switch(u){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:le(e,t,u,i,a,null)}}n&&le(e,t,"srcSet",a.srcSet,a,null),l&&le(e,t,"src",a.src,a,null);return;case"input":w("invalid",e);var c=u=i=n=null,f=null,m=null;for(l in a)if(a.hasOwnProperty(l)){var p=a[l];if(p!=null)switch(l){case"name":n=p;break;case"type":i=p;break;case"checked":f=p;break;case"defaultChecked":m=p;break;case"value":u=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:le(e,t,l,p,a,null)}}Uf(e,u,c,f,m,i,n,!1);return;case"select":w("invalid",e),l=i=u=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":l=c;default:le(e,t,n,c,a,null)}t=u,a=i,e.multiple=!!l,t!=null?Ka(e,!!l,t,!1):a!=null&&Ka(e,!!l,a,!0);return;case"textarea":w("invalid",e),u=n=l=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:le(e,t,i,c,a,null)}xf(e,l,n,u);return;case"option":for(f in a)if(a.hasOwnProperty(f)&&(l=a[f],l!=null))switch(f){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,t,f,l,a,null)}return;case"dialog":w("beforetoggle",e),w("toggle",e),w("cancel",e),w("close",e);break;case"iframe":case"object":w("load",e);break;case"video":case"audio":for(l=0;l<on.length;l++)w(on[l],e);break;case"image":w("error",e),w("load",e);break;case"details":w("toggle",e);break;case"embed":case"source":case"link":w("error",e),w("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:le(e,t,m,l,a,null)}return;default:if(Pu(t)){for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!==void 0&&Yc(e,t,p,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&le(e,t,c,l,a,null))}function vy(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,f=null,m=null,p=null;for(v in a){var b=a[v];if(a.hasOwnProperty(v)&&b!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":f=b;default:l.hasOwnProperty(v)||le(e,t,v,null,l,b)}}for(var y in l){var v=l[y];if(b=a[y],l.hasOwnProperty(y)&&(v!=null||b!=null))switch(y){case"type":u=v;break;case"name":n=v;break;case"checked":m=v;break;case"defaultChecked":p=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:v!==b&&le(e,t,y,v,l,b)}}ku(e,i,c,f,m,p,u,n);return;case"select":v=i=c=y=null;for(u in a)if(f=a[u],a.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":v=f;default:l.hasOwnProperty(u)||le(e,t,u,null,l,f)}for(n in l)if(u=l[n],f=a[n],l.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":y=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&le(e,t,n,u,l,f)}t=c,a=i,l=v,y!=null?Ka(e,!!a,y,!1):!!l!=!!a&&(t!=null?Ka(e,!!a,t,!0):Ka(e,!!a,a?[]:"",!1));return;case"textarea":v=y=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:le(e,t,c,null,l,n)}for(i in l)if(n=l[i],u=a[i],l.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":y=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==u&&le(e,t,i,n,l,u)}Cf(e,y,v);return;case"option":for(var O in a)if(y=a[O],a.hasOwnProperty(O)&&y!=null&&!l.hasOwnProperty(O))switch(O){case"selected":e.selected=!1;break;default:le(e,t,O,null,l,y)}for(f in l)if(y=l[f],v=a[f],l.hasOwnProperty(f)&&y!==v&&(y!=null||v!=null))switch(f){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:le(e,t,f,y,l,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in a)y=a[x],a.hasOwnProperty(x)&&y!=null&&!l.hasOwnProperty(x)&&le(e,t,x,null,l,y);for(m in l)if(y=l[m],v=a[m],l.hasOwnProperty(m)&&y!==v&&(y!=null||v!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:le(e,t,m,y,l,v)}return;default:if(Pu(t)){for(var ne in a)y=a[ne],a.hasOwnProperty(ne)&&y!==void 0&&!l.hasOwnProperty(ne)&&Yc(e,t,ne,void 0,l,y);for(p in l)y=l[p],v=a[p],!l.hasOwnProperty(p)||y===v||y===void 0&&v===void 0||Yc(e,t,p,y,l,v);return}}for(var r in a)y=a[r],a.hasOwnProperty(r)&&y!=null&&!l.hasOwnProperty(r)&&le(e,t,r,null,l,y);for(b in l)y=l[b],v=a[b],!l.hasOwnProperty(b)||y===v||y==null&&v==null||le(e,t,b,y,l,v)}function Nr(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function py(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&Nr(i)){for(i=0,c=n.responseEnd,l+=1;l<a.length;l++){var f=a[l],m=f.startTime;if(m>c)break;var p=f.transferSize,b=f.initiatorType;p&&Nr(b)&&(f=f.responseEnd,i+=p*(f<c?1:(c-m)/(f-m)))}if(--l,t+=8*(u+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jc=null,wc=null;function Ou(e){return e.nodeType===9?e:e.ownerDocument}function qr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Br(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xc=null;function Sy(){var e=window.event;return e&&e.type==="popstate"?e===Xc?!1:(Xc=e,!0):(Xc=null,!1)}var Qr=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,Yr=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof Yr<"u"?function(e){return Yr.resolve(null).then(e).catch(Ey)}:Qr;function Ey(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function jr(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ml(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")dn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,dn(a);for(var u=a.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Ul]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=i}}else a==="body"&&dn(e.ownerDocument.body);a=n}while(a);Ml(t)}function wr(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Zc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zc(a),Wu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ty(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ul])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=ht(e.nextSibling),e===null)break}return null}function Ay(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ht(e.nextSibling),e===null))return null;return e}function Gr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ht(e.nextSibling),e===null))return null;return e}function Vc(e){return e.data==="$?"||e.data==="$~"}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function My(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jc=null;function Xr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Zr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vr(e,t,a){switch(t=Ou(a),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function dn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wu(e)}var vt=new Map,Kr=new Set;function Du(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=A.d;A.d={f:Oy,r:Dy,D:zy,C:_y,L:Uy,m:Cy,X:Ry,S:xy,M:Hy};function Oy(){var e=Jt.f(),t=pu();return e||t}function Dy(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?fo(t):Jt.r(e)}var El=typeof document>"u"?null:document;function Jr(e,t,a){var l=El;if(l&&typeof t=="string"&&t){var n=ft(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Kr.has(n)||(Kr.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ue(t,"link",e),Ae(t),l.head.appendChild(t)))}}function zy(e){Jt.D(e),Jr("dns-prefetch",e,null)}function _y(e,t){Jt.C(e,t),Jr("preconnect",e,t)}function Uy(e,t,a){Jt.L(e,t,a);var l=El;if(l&&e&&t){var n='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ft(a.imageSizes)+'"]')):n+='[href="'+ft(e)+'"]';var u=n;switch(t){case"style":u=Tl(e);break;case"script":u=Al(e)}vt.has(u)||(e=H({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),vt.set(u,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(mn(u))||t==="script"&&l.querySelector(yn(u))||(t=l.createElement("link"),Ue(t,"link",e),Ae(t),l.head.appendChild(t)))}}function Cy(e,t){Jt.m(e,t);var a=El;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ft(l)+'"][href="'+ft(e)+'"]',u=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Al(e)}if(!vt.has(u)&&(e=H({rel:"modulepreload",href:e},t),vt.set(u,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yn(u)))return}l=a.createElement("link"),Ue(l,"link",e),Ae(l),a.head.appendChild(l)}}}function xy(e,t,a){Jt.S(e,t,a);var l=El;if(l&&e){var n=Za(l).hoistableStyles,u=Tl(e);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=l.querySelector(mn(u)))c.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":t},a),(a=vt.get(u))&&$c(e,a);var f=i=l.createElement("link");Ae(f),Ue(f,"link",e),f._p=new Promise(function(m,p){f.onload=m,f.onerror=p}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,zu(i,t,l)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Ry(e,t){Jt.X(e,t);var a=El;if(a&&e){var l=Za(a).hoistableScripts,n=Al(e),u=l.get(n);u||(u=a.querySelector(yn(n)),u||(e=H({src:e,async:!0},t),(t=vt.get(n))&&Wc(e,t),u=a.createElement("script"),Ae(u),Ue(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function Hy(e,t){Jt.M(e,t);var a=El;if(a&&e){var l=Za(a).hoistableScripts,n=Al(e),u=l.get(n);u||(u=a.querySelector(yn(n)),u||(e=H({src:e,async:!0,type:"module"},t),(t=vt.get(n))&&Wc(e,t),u=a.createElement("script"),Ae(u),Ue(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function $r(e,t,a,l){var n=(n=Y.current)?Du(n):null;if(!n)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Za(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var u=Za(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(mn(e)))&&!u._p&&(i.instance=u,i.state.loading=5),vt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(e,a),u||Ly(n,e,a,i.state))),t&&l===null)throw Error(h(528,""));return i}if(t&&l!==null)throw Error(h(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Al(a),a=Za(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Tl(e){return'href="'+ft(e)+'"'}function mn(e){return'link[rel="stylesheet"]['+e+"]"}function Wr(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function Ly(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ue(t,"link",a),Ae(t),e.head.appendChild(t))}function Al(e){return'[src="'+ft(e)+'"]'}function yn(e){return"script[async]"+e}function Fr(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ft(a.href)+'"]');if(l)return t.instance=l,Ae(l),l;var n=H({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ae(l),Ue(l,"style",n),zu(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var u=e.querySelector(mn(n));if(u)return t.state.loading|=4,t.instance=u,Ae(u),u;l=Wr(a),(n=vt.get(n))&&$c(l,n),u=(e.ownerDocument||e).createElement("link"),Ae(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ue(u,"link",l),t.state.loading|=4,zu(u,a.precedence,e),t.instance=u;case"script":return u=Al(a.src),(n=e.querySelector(yn(u)))?(t.instance=n,Ae(n),n):(l=a,(n=vt.get(u))&&(l=H({},a),Wc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ae(n),Ue(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,zu(l,a.precedence,e));return t.instance}function zu(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,u=n,i=0;i<l.length;i++){var c=l[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _u=null;function kr(e,t,a){if(_u===null){var l=new Map,n=_u=new Map;n.set(a,l)}else n=_u,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var u=a[n];if(!(u[Ul]||u[Oe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var c=l.get(i);c?c.push(u):l.set(i,[u])}}return l}function Ir(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ny(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pr(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qy(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Tl(l.href),u=t.querySelector(mn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Uu.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Ae(u);return}u=t.ownerDocument||t,l=Wr(l),(n=vt.get(n))&&$c(l,n),u=u.createElement("link"),Ae(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ue(u,"link",l),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Uu.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Fc=0;function By(e,t){return e.stylesheets&&e.count===0&&xu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&xu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Fc===0&&(Fc=62500*py());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Fc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cu=null;function xu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cu=new Map,t.forEach(Qy,e),Cu=null,Uu.call(e))}function Qy(e,t){if(!(t.state.loading&4)){var a=Cu.get(e);if(a)var l=a.get(null);else{a=new Map,Cu.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),l=i)}l&&a.set(null,l)}n=t.instance,i=n.getAttribute("data-precedence"),u=a.get(i)||l,u===l&&a.set(null,n),a.set(i,n),this.count++,l=Uu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var hn={$$typeof:Ce,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function Yy(e,t,a,l,n,u,i,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.hiddenUpdates=Vu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ed(e,t,a,l,n,u,i,c,f,m,p,b){return e=new Yy(e,t,a,i,f,m,p,b,c),t=1,u===!0&&(t|=24),u=et(3,null,null,t),e.current=u,u.stateNode=e,t=Ui(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:a,cache:t},Hi(u),e}function td(e){return e?(e=el,e):el}function ad(e,t,a,l,n,u){n=td(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},u=u===void 0?null:u,u!==null&&(l.callback=u),a=na(e,l,t),a!==null&&(Je(a,e,t),Kl(a,e,t))}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function kc(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function nd(e){if(e.tag===13||e.tag===31){var t=za(e,67108864);t!==null&&Je(t,e,67108864),kc(e,67108864)}}function ud(e){if(e.tag===13||e.tag===31){var t=ut();t=Ku(t);var a=za(e,t);a!==null&&Je(a,e,t),kc(e,t)}}var Ru=!0;function jy(e,t,a,l){var n=S.T;S.T=null;var u=A.p;try{A.p=2,Ic(e,t,a,l)}finally{A.p=u,S.T=n}}function wy(e,t,a,l){var n=S.T;S.T=null;var u=A.p;try{A.p=8,Ic(e,t,a,l)}finally{A.p=u,S.T=n}}function Ic(e,t,a,l){if(Ru){var n=Pc(l);if(n===null)Qc(e,t,l,Hu,a),cd(e,l);else if(Xy(n,e,t,a,l))l.stopPropagation();else if(cd(e,l),t&4&&-1<Gy.indexOf(e)){for(;n!==null;){var u=Xa(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Ta(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Ie(i);c.entanglements[1]|=f,i&=~f}zt(u),(W&6)===0&&(hu=Fe()+500,sn(0))}}break;case 31:case 13:c=za(u,2),c!==null&&Je(c,u,2),pu(),kc(u,2)}if(u=Pc(l),u===null&&Qc(e,t,l,Hu,a),u===n)break;n=u}n!==null&&l.stopPropagation()}else Qc(e,t,l,null,a)}}function Pc(e){return e=ti(e),ef(e)}var Hu=null;function ef(e){if(Hu=null,e=Ga(e),e!==null){var t=$(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=ye(t),e!==null)return e;e=null}else if(a===31){if(e=Re(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hu=e,null}function id(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zd()){case mf:return 2;case yf:return 8;case Tn:case _d:return 32;case hf:return 268435456;default:return 32}default:return 32}}var tf=!1,ha=null,va=null,pa=null,vn=new Map,pn=new Map,Sa=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(t.pointerId)}}function Sn(e,t,a,l,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Xa(t),t!==null&&nd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Xy(e,t,a,l,n){switch(t){case"focusin":return ha=Sn(ha,e,t,a,l,n),!0;case"dragenter":return va=Sn(va,e,t,a,l,n),!0;case"mouseover":return pa=Sn(pa,e,t,a,l,n),!0;case"pointerover":var u=n.pointerId;return vn.set(u,Sn(vn.get(u)||null,e,t,a,l,n)),!0;case"gotpointercapture":return u=n.pointerId,pn.set(u,Sn(pn.get(u)||null,e,t,a,l,n)),!0}return!1}function fd(e){var t=Ga(e.target);if(t!==null){var a=$(t);if(a!==null){if(t=a.tag,t===13){if(t=ye(a),t!==null){e.blockedOn=t,Ef(e.priority,function(){ud(a)});return}}else if(t===31){if(t=Re(a),t!==null){e.blockedOn=t,Ef(e.priority,function(){ud(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Pc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ei=l,a.target.dispatchEvent(l),ei=null}else return t=Xa(a),t!==null&&nd(t),e.blockedOn=a,!1;t.shift()}return!0}function sd(e,t,a){Lu(e)&&a.delete(t)}function Zy(){tf=!1,ha!==null&&Lu(ha)&&(ha=null),va!==null&&Lu(va)&&(va=null),pa!==null&&Lu(pa)&&(pa=null),vn.forEach(sd),pn.forEach(sd)}function Nu(e,t){e.blockedOn===t&&(e.blockedOn=null,tf||(tf=!0,D.unstable_scheduleCallback(D.unstable_NormalPriority,Zy)))}var qu=null;function od(e){qu!==e&&(qu=e,D.unstable_scheduleCallback(D.unstable_NormalPriority,function(){qu===e&&(qu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(ef(l||a)===null)continue;break}var u=Xa(a);u!==null&&(e.splice(t,3),t-=3,Pi(u,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ml(e){function t(f){return Nu(f,e)}ha!==null&&Nu(ha,e),va!==null&&Nu(va,e),pa!==null&&Nu(pa,e),vn.forEach(t),pn.forEach(t);for(var a=0;a<Sa.length;a++){var l=Sa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)fd(a),a.blockedOn===null&&Sa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],u=a[l+1],i=n[we]||null;if(typeof u=="function")i||od(a);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[we]||null)c=i.formAction;else if(ef(n)!==null)continue}else c=i.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),od(a)}}}function rd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function af(e){this._internalRoot=e}Bu.prototype.render=af.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var a=t.current,l=ut();ad(a,l,e,t,null,null)},Bu.prototype.unmount=af.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ad(e.current,2,null,e,null,null),pu(),t[wa]=null}};function Bu(e){this._internalRoot=e}Bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=bf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Sa.length&&t!==0&&t<Sa[a].priority;a++);Sa.splice(a,0,e),a===0&&fd(e)}};var dd=re.version;if(dd!=="19.2.0")throw Error(h(527,dd,"19.2.0"));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=T(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var Vy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Dl=Qu.inject(Vy),ke=Qu}catch{}}return bn.createRoot=function(e,t){if(!R(e))throw Error(h(299));var a=!1,l="",n=go,u=bo,i=Eo;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ed(e,1,!1,null,null,a,l,null,n,u,i,rd),e[wa]=t.current,Bc(e),new af(t)},bn.hydrateRoot=function(e,t,a){if(!R(e))throw Error(h(299));var l=!1,n="",u=go,i=bo,c=Eo,f=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=ed(e,1,!0,t,a??null,l,n,f,u,i,c,rd),t.context=td(null),a=t.current,l=ut(),l=Ku(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,_l(t,a),zt(t),e[wa]=t.current,Bc(e),new Bu(t)},bn.version="19.2.0",bn}var Td;function th(){if(Td)return uf.exports;Td=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(re){console.error(re)}}return D(),uf.exports=eh(),uf.exports}var ah=th();function lh(){const[D,re]=Ad.useState(null),F=[{id:1,question:"1. Define Open Source Software and explain its characteristics.",answer:"",codeExample:`
🧩 Definition: Open Source Software (OSS)

Open Source Software means software whose source code is freely available to the public.
Anyone can view, modify, and distribute the code according to their needs.

💡 In short:
Open Source Software = Free to use + Free to modify + Free to share

⚙️ Characteristics of Open Source Software

| Characteristic           | Explanation                                                                             |
| -------------------------| ----------------------------------------------------------------------------------------|
| 1️⃣ Free Availability    | The software can be downloaded and used freely without paying any license fee.          |
| 2️⃣ Source Code Access   | The source code is open, so users can study how it works and make improvements.         |
| 3️⃣ Modifiable           | Users can edit or modify the code to suit their own requirements.                       |
| 4️⃣ Community Support    | A large community of developers helps in updating, fixing bugs, and improving features. |
| 5️⃣ Platform Independent | Most open-source software runs on multiple operating systems (Windows, Linux, Mac).     |
| 6️⃣ Regular Updates      | Because many developers contribute, the software is frequently updated and improved.    |
| 7️⃣ Transparency         | Since the code is visible to all, there is no hidden functionality or security risk.    |


💡 Examples of Open Source Software

  Operating Systems: Linux, Ubuntu
  Web Servers: Apache, Nginx
  Databases: MySQL, PostgreSQL
  Programming Languages: PHP, Python


✅ In short:

Open Source Software allows users to freely use, modify, and share programs — encouraging collaboration, innovation, and transparency.


      `},{id:2,question:"2. Explain advantages and disadvantages of OSS.",answer:"",codeExample:`
🟢 Advantages of Open Source Software

Free to use – You don’t have to pay money to use it.
Open code – You can see and change the code as you like.
Community help – Many people around the world help fix problems.
Secure – Because many people check the code, errors are found quickly.
Flexible – You can modify it to fit your needs.
No company control – You are not dependent on one company for updates.



🔴 Disadvantages of Open Source Software

Less official support – No company help; you must depend on online forums.
Need technical knowledge – You must know how to install or change the code.
Compatibility problems – May not work well with other paid software.
Too many updates – Frequent updates can sometimes cause small issues.
Security risk if old – If you don’t update it, hackers can find weaknesses.



💡 In short:

Good: Free, flexible, safe, and community-supported
Bad: Needs skill, no official help, and may have small issues

      `},{id:3,question:"3. Differentiate between Open Source and Closed Source Software.",answer:"",codeExample:`
| Open Source Software (OSS)                         | Closed Source Software (CSS)                              |
| ---------------------------------------------------| ----------------------------------------------------------|
| The source code is open and available to everyone. | The source code is hidden and not shared with users.      |
| Free to use and modify by anyone.                  | Not free — you need to buy a license to use it.           |
| Users can change or improve the software.          | Only the company that created it can change the software. |
| Has community support (users help each other).     | Has official support from the company.                    |
| More flexible and customizable.                    | Less flexible; you must use it as it is.                  |
| Example: Linux, Apache, MySQL, PHP                 | Example: Windows, MS Office, Adobe Photoshop              |


💡 In short:

Open Source → Free, editable, community-based
Closed Source → Paid, private, company-controlled

      `},{id:4,question:"4. Explain FOSS with its key features.",answer:"",codeExample:`
🧩 FOSS – Free and Open Source Software

Definition:
FOSS means Free and Open Source Software.
It is software that is free to use, copy, modify, and share, and its source code is available to everyone.
It combines the ideas of Free Software (freedom to use) and Open Source Software (transparency of code).



🔑 Key Features of FOSS:

Free to Use – Anyone can download and use it without paying money.
Open Source Code – The source code is visible to all users.
Freedom to Modify – Users can change or improve the software.
Free Distribution – You can share it with others freely.
Community Support – Large groups of developers help in fixing bugs and adding features.
Transparency – Everyone can see how the software works.
Security – Open review of code makes it more secure.



💡 Examples:

Linux
Apache Web Server
Mozilla Firefox
MySQL`},{id:5,question:"5. Explain the LAMP stack and its importance in open-source web development.",answer:"",codeExample:`
💻 LAMP Stack

Definition:
The LAMP stack is a group of open-source software used together to build and run dynamic websites and web applications.
The word LAMP stands for:

L → Linux (Operating System)
A → Apache (Web Server)
M → MySQL (Database)
P → PHP (Programming Language)


⚙️ How It Works:

Linux – Acts as the base operating system where everything runs.
Apache – Handles web requests and delivers web pages to users.
MySQL – Stores and manages website data (like user info, posts, etc.).
PHP – Processes the logic of the website and connects the web pages to the database.



🌟 Importance of LAMP in Open-Source Web Development:

Completely Free – All components are open-source and free to use.
Cross-Platform – Works on many systems (not only Linux).
Flexible and Customizable – Developers can modify code as needed.
Strong Community Support – Many developers contribute and share solutions.
Secure and Reliable – Used by millions of websites worldwide.
Easy to Develop and Deploy – Simple setup for hosting web apps.



💡 Example Use:

A PHP-based website (like WordPress) runs on a LAMP stack:
The code is written in PHP
Data is stored in MySQL
The website runs on Apache
The system is hosted on Linux

      `},{id:6,question:"6. What are Open Source Licenses? Give examples.",answer:"",codeExample:`
💡 What are Open Source Licenses?

An Open Source License is a legal permission that tells users how they can use, share, and modify open-source software.
It protects both the developer’s rights and the user’s freedom to use the software.


⚙️ Why Licenses Are Important

They allow others to use your software legally.
They set rules for copying, changing, or distributing the software.
They protect developers from misuse or false ownership claims.


🧩 Types of Open Source Licenses

There are mainly two types:

Permissive License – Very flexible

    Allows anyone to use, modify, and distribute freely.
    Even closed-source projects can use it.
    💬 Example: MIT License, Apache License 2.0, BSD License


Copyleft License – Must stay open

    Anyone who modifies and shares the software must keep it open-source.
    💬 Example: GNU General Public License (GPL), Mozilla Public License



🧠 Examples of Popular Open Source Licenses

| License Name                     | Description                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------- |
| MIT License                      | Very simple and allows almost any use with credit to the author.              |
| GNU GPL                          | Requires any modified version to also remain open source.                     |
| Apache License 2.0               | Allows commercial use and modification, includes patent protection.           |
| BSD License                      | Similar to MIT, very permissive and simple.                                   |
| Mozilla Public License (MPL)     | Allows combining open and closed code, but modified MPL files must stay open. |



💬 Example in real life:

Linux uses the GNU GPL License.
Apache Web Server uses the Apache License 2.0.
React.js uses the MIT License.

      `},{id:7,question:"7. Explain how community collaboration supports OSS success.",answer:"",codeExample:`
💡 How Community Collaboration Supports Open Source Software (OSS) Success

Community collaboration means that many developers, users, and organizations work together to improve open-source software.
This teamwork is the main reason why OSS grows fast and becomes successful.


⚙️ How the Community Helps OSS

🧑‍💻 Continuous Improvement
  Developers around the world find and fix bugs, add new features, and improve performance.


🧩 Knowledge Sharing
  Users share ideas, tutorials, and solutions that help others learn and use the software easily.


🛠️ Faster Problem Solving
  When many people test and review code, issues are found and solved quickly.


🌍 Global Support
  A large, diverse community ensures the software works on many systems and languages.


💡 Innovation
  Different developers bring creative ideas that make the software better and more useful.


🏆 Trust and Quality
  Open collaboration makes the code transparent — anyone can check its quality and security.



📘 Example

The Linux operating system and Python language succeed because thousands of contributors keep improving them together.
      `},{id:8,question:"8. List any five examples of OSS with their uses.",answer:"",codeExample:`
💻 Five Examples of Open Source Software (OSS) and Their Uses

| Software Name   | Type / Category            | Main Use                                                           |
| ----------------| -------------------------- | ------------------------------------------------------------------ |
| Linux           | Operating System           | Used to run computers, servers, and mobile devices (like Android). |
| Apache          | Web Server                 | Used to host and manage websites on the internet.                  |
| MySQL           | Database Management System | Used to store and manage data for websites and applications.       |
| Mozilla Firefox | Web Browser                | Used to browse the internet safely and quickly.                    |
| LibreOffice     | Office Suite               | Used to create documents, spreadsheets, and presentations.         |

      
✅ In short:
These open-source tools are free, customizable, and widely used in web development, education, and businesses.
      `},{id:9,question:"9. Compare FOSS and proprietary software in detail.",answer:"",codeExample:`
💻 Comparison between FOSS and Proprietary Software

| Basis         | FOSS (Free and Open Source Software)                                              | Proprietary Software                                                         |
| --------------| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Meaning       | Software that is free to use, modify, and share. Source code is open to everyone. | Software owned by a company or individual. Source code is hidden from users. |
| Source Code   | Available to all users.                                                           | Kept secret and not shared.                                                  |
| Cost          | Usually free of cost.                                                             | Usually paid or requires a license.                                          |
| Customization | Can be modified or improved by anyone.                                            | Cannot be modified without permission.                                       |
| Support       | Community support through forums and online groups.                               | Official support provided by the company.                                    |
| Security      | High — anyone can find and fix security bugs quickly.                             | Depends on the company; users must wait for updates.                         |
| Examples      | Linux, MySQL, Apache, Firefox, LibreOffice                                        | Windows, MS Office, Adobe Photoshop, Oracle DB                               |



✅ In short:

FOSS gives freedom, flexibility, and transparency.
Proprietary software gives professional support and polished features, but less control to users.
      `},{id:10,question:"10. Why is transparency a major strength of OSS?",answer:"",codeExample:`
💡 Why Transparency is a Major Strength of OSS

Transparency means that the source code of Open Source Software (OSS) is visible to everyone.
Anyone can see how the software works, how data is handled, and how security is implemented.


⚙️ Why it’s Important


Security – Many developers can check the code for bugs or vulnerabilities, making it safer.
Trust – Users can verify that there is no hidden malicious code or spyware.
Improvement – Developers can understand the code and suggest improvements or add new features.
Learning – Students and programmers can study real-world code to learn programming and best practices.
Accountability – Everyone can see changes, so developers are more careful and responsible.


💬 In short:

Transparency in OSS ensures that the software is secure, trustworthy, and continuously improving, making it one of its biggest strengths.

      `},{id:11,question:"11. Explain the basic structure and syntax of a PHP script.",answer:"",codeExample:`
💻 Basic Structure of a PHP Script

PHP Code Block
  PHP code is written inside <?php ... ?> tags.
  The server executes PHP code and returns HTML to the browser.

Statements
  Each statement ends with a semicolon ;.

Comments
  Use // for single-line comments.
  Use /* ... */ for multi-line comments.



⚙️ Basic Syntax

<?php
// Single-line comment
/*
   Multi-line comment
*/

// Output text to the browser
echo "Hello, World!";

// Declare a variable
$name = "Raj";

// Use the variable
echo "Welcome, " . $name;
?>



🧠 Explanation

  1. <?php ... ?> → PHP code starts and ends here.
  2. echo → Prints output to the browser.
  3. $name → Variable declaration (all variables start with $).
  4. . → Concatenation operator (used to join strings).
  5. Comments → Explain the code and are ignored during execution.



💡 In short:

Start tag: <?php
End tag: ?>
Statements: End with ;
Comments: // or /* ... */
Output: Use echo or print
Variables: Start with $
      
      `},{id:12,question:"12. What are the main features of PHP?",answer:"",codeExample:`
💻 Main Features of PHP


Open Source – PHP is free to use and modify.

Server-Side Scripting – Runs on the server and generates HTML for browsers.

Platform Independent – Works on Windows, Linux, macOS, etc.

Easy to Learn – Simple syntax, especially for people familiar with C or Java.

Fast Execution – PHP scripts are executed on the server quickly.

Supports Databases – Works with MySQL, PostgreSQL, Oracle, and many others.

Dynamic Content – Can generate dynamic web pages based on user input.

Embedded in HTML – PHP code can be written directly inside HTML.

Supports Sessions and Cookies – Useful for creating login systems and tracking users.

Object-Oriented Programming (OOP) – Supports classes, objects, inheritance, etc.

      `},{id:13,question:"13. Difference between variable and constant.",answer:"",codeExample:`
| Basis        | Variable                                                                              | Constant                                                                |
| -------------| --------------------------------------------------------------------------------------| ----------------------------------------------------------------------- |
| Definition   | A variable is a container that stores data which can change during program execution. | A constant is a name for a value that cannot change once it is defined. |
| Syntax       | Starts with $ symbol, e.g., $name = "Raj";                                            | Defined using define() or const, e.g., define("PI", 3.14);              |
| Value Change | Value can change anytime in the script.                                               | Value cannot be changed after declaration.                              |
| Memory       | Memory allocated can vary as value changes.                                           | Memory is fixed as value is constant.                                   |
| Use          | Used for data that may vary during execution.                                         | Used for fixed values like PI, database constants, or configuration.    |


⚡ Example in PHP

<?php
// Variable
$name = "Raj";
$name = "Meera"; // value changed

// Constant
define("PI", 3.14);
// PI = 3.15; // ❌ Error: Cannot change constant

echo $name; // Outputs: Meera
echo PI;   // Outputs: 3.14
?>


💡 In short:

Variable → changeable value
Constant → fixed value

`},{id:14,question:"14. Explain different data types with examples.",answer:"",codeExample:`
💻 PHP Data Types

PHP variables can store different types of data. These are the main types:

| Data Type          | Description                                                                              | Example                                        | 
| -------------------| -----------------------------------------------------------------------------------------| -----------------------------------------------|
| 1️⃣ Integer        | Whole numbers without decimal points.                                                    | $age = 22;                                     |
| 2️⃣ Float / Double | Numbers with decimal points.                                                             | $price = 99.99;                                |
| 3️⃣ String         | Sequence of characters (text).                                                           | $name = "Raj";                                 |
| 4️⃣ Boolean        | True or False value.                                                                     | $isStudent = true;                             |
| 5️⃣ Array          | Collection of multiple values stored in a single variable.                               | $fruits = array("Apple","Mango","Banana");     |
| 6️⃣ Object         | Stores data as properties and methods (OOP).                                             | $car = new Car();                              |
| 7️⃣ NULL           | Represents a variable with no value.                                                     | $x = NULL;                                     |
| 8️⃣ Resource       | Special variable holding a reference to an external resource (like database connection). | $conn = mysqli_connect("localhost","root",""); |



⚡ Example in PHP

<?php
$age = 22;               // Integer
$price = 99.99;          // Float
$name = "Raj";           // String
$isStudent = true;       // Boolean
$fruits = array("Apple","Mango","Banana"); // Array
$x = NULL;               // NULL

echo $name;              // Output: Raj
echo $age + $price;      // Output: 121.99
?>




💡 In short:

  Integer, Float → Numbers
  String → Text
  Boolean → True/False
  Array → List of values
  Object → Contains data & functions
  NULL → No value
  Resource → External references
      `},{id:15,question:"15. Write short note on Operators in PHP.",answer:"",codeExample:`
⚙️ Operators in PHP

Definition:
Operators are symbols used to perform operations on variables and values (like addition, comparison, etc.).

🧮 Types of Operators in PHP

| Type                              | Description                                       | Example                                                                                | 
| ----------------------------------| --------------------------------------------------| ---------------------------------------------------------------------------------------|
| 1️⃣ Arithmetic Operators          | Used to perform mathematical operations.          | + , - , * , / , % <br> Example: $sum = $a + $b;                                        | 
| 2️⃣ Assignment Operators          | Used to assign values to variables.               | = , += , -= , *= , /= , .= <br> Example: $x += 5;                                      | 
| 3️⃣ Comparison Operators          | Used to compare two values.                       | == , != , > , < , >= , <= <br> Example: if($a == $b)                                   | 
| 4️⃣ Logical Operators             | Used to combine conditions.                       | && ,                                                                                   |
| 5️⃣ String Operators              | Used to combine or join strings.                  | . (concatenation) <br> Example: $full = $fname . $lname;                               | 
| 6️⃣ Increment/Decrement Operators | Used to increase or decrease variable value by 1. | ++ , -- <br> Example: $x++;                                                            | 
| 7️⃣ Ternary Operator              | Short form of if-else.                            | condition ? value1 : value2; <br> Example: $result = ($age >= 18) ? "Adult" : "Minor"; | 


💡 In short:

Operators help PHP perform calculations, comparisons, and logic in programs easily.

      `},{id:16,question:"16. Explain Conditional Statements with examples.",answer:"",codeExample:`
💡 Conditional Statements in PHP

Definition:
Conditional statements are used to make decisions in PHP programs.
They allow the program to execute different blocks of code depending on whether a condition is true or false.


🔹 1. if Statement

The if statement runs a block of code only when the condition is true.

Syntax:

if (condition) {
    // code to be executed if condition is true
}


Example:

<?php
$age = 20;
if ($age >= 18) {
    echo "You are an adult.";
}
?>



🔹 2. if...else Statement

Used when you want to run one block if true and another block if false.

Syntax:

if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}


Example:

<?php
$age = 15;
if ($age >= 18) {
    echo "Adult";
} else {
    echo "Minor";
}
?>



🔹 3. if...elseif...else Statement

Used when there are multiple conditions to check.

Syntax:

if (condition1) {
    // code if condition1 is true
} elseif (condition2) {
    // code if condition2 is true
} else {
    // code if none of the above are true
}


Example:

<?php
$marks = 75;
if ($marks >= 90) {
    echo "Grade A";
} elseif ($marks >= 60) {
    echo "Grade B";
} else {
    echo "Grade C";
}
?>



🔹 4. switch Statement

Used when you need to test many possible values of a single variable.
It’s easier to read than writing many if...elseif statements.

Syntax:

switch (variable) {
    case value1:
        // code to run if variable == value1
        break;

    case value2:
        // code to run if variable == value2
        break;

    default:
        // code if no cases match
}


Example:

<?php
$day = "Mon";
switch ($day) {
    case "Mon":
        echo "Start of the week";
        break;
    case "Fri":
        echo "Weekend coming soon";
        break;
    default:
        echo "Midweek day";
}
?>



🔹 5. Ternary Operator

A short form of if...else, written in a single line.

Syntax:

(condition) ? value_if_true : value_if_false;


Example:

<?php
$age = 18;
echo ($age >= 18) ? "Adult" : "Minor";
?>



🧠 In short:

if → single condition
if...else → two outcomes
if...elseif...else → multiple conditions
switch → many possible cases
?: (ternary) → short one-line condition
      
      
      `},{id:17,question:"17. Differentiate between for, while, and do-while loops.",answer:"",codeExample:`
🔁 Loops in PHP

Definition:
Loops are used to repeat a block of code multiple times until a condition becomes false.



🔹 1. for Loop

Use:
When the number of iterations (repeats) is known in advance.

Syntax:

for (initialization; condition; increment/decrement) {
    // code to be executed
}


Example:

<?php
for ($i = 1; $i <= 5; $i++) {
    echo "Number: $i <br>";
}
?>


Explanation:

Starts with $i = 1
Repeats until $i <= 5
Increases $i by 1 each time



🔹 2. while Loop

Use:
When the number of iterations is not known and depends on a condition.

Syntax:

while (condition) {
    // code to be executed
}


Example:

<?php
$i = 1;
while ($i <= 5) {
    echo "Number: $i <br>";
    $i++;
}
?>


Explanation:

Checks condition before running the loop.
If condition is false initially, the loop will not run.



🔹 3. do...while Loop

Use:
When you want the loop to run at least once, even if the condition is false.

Syntax:

do {
    // code to be executed
} while (condition);


Example:

<?php
$i = 1;
do {
    echo "Number: $i <br>";
    $i++;
} while ($i <= 5);
?>


Explanation:

Executes the code first, then checks the condition.
Ensures the loop runs at least once.



📊 Difference Summary

| Basis               | for Loop                              | while Loop                            | do...while Loop             |
| --------------------| ------------------------------------- | ------------------------------------- | ----------------------------|
| Condition Check     | At the beginning                      | At the beginning                      | At the end                  |
| Execution Guarantee | May not execute if condition is false | May not execute if condition is false | Executes at least once      |
| Best Used When      | Number of iterations is known         | Number of iterations is unknown       | Code must run at least once |
| Syntax              | for(init; cond; inc)                  | while(cond)                           | do{ }while(cond)            |



💡 In short:

for → use when you know how many times to loop
while → use when you don’t know how many times
do...while → runs at least once before checking
      
      `},{id:18,question:"18. Explain Array types and functions in PHP.",answer:"",codeExample:`
🧩 What is an Array in PHP?

An array is a collection of multiple values stored in a single variable.
It helps to store and manage a list of related data items.

Example:

<?php
$fruits = array("Apple", "Banana", "Mango");
echo $fruits[0]; // Output: Apple
?>


🔹 Types of Arrays in PHP

There are three main types of arrays:



1️⃣ Indexed Array

Stores values with numeric indexes (starting from 0).
Used for simple lists like names, numbers, etc.

Example:

<?php
$colors = array("Red", "Green", "Blue");
echo $colors[1]; // Output: Green
?>



2️⃣ Associative Array

Uses named keys (strings) instead of numbers.
Used when you want to store data with a meaningful key.

Example:

<?php
$student = array("name" => "Raj", "age" => 20, "city" => "Surat");
echo $student["name"]; // Output: Raj
?>



3️⃣ Multidimensional Array

An array that contains one or more arrays inside it.
Used for storing table-like (matrix) or complex data.

Example:

<?php
$students = array(
    array("Raj", 20, "Surat"),
    array("Jatin", 21, "Ahmedabad"),
    array("Milan", 19, "Vadodara")
);

echo $students[1][0]; // Output: Jatin
?>




🔹 Common Array Functions in PHP

Here are some useful array functions with examples 👇

1. count()

Counts total elements in an array.

<?php
$numbers = array(10, 20, 30);
echo count($numbers); // Output: 3
?>

2. array_push()

Adds one or more elements at the end of an array.

<?php
$fruits = array("Apple", "Banana");
array_push($fruits, "Mango");
print_r($fruits);
// Output: Array ( [0] => Apple [1] => Banana [2] => Mango )
?>

3. array_pop()

Removes the last element from an array.

<?php
$fruits = array("Apple", "Banana", "Mango");
array_pop($fruits);
print_r($fruits);
// Output: Array ( [0] => Apple [1] => Banana )
?>

4. array_merge()

Combines two or more arrays.

<?php
$a = array("Red", "Green");
$b = array("Blue", "Yellow");
$c = array_merge($a, $b);
print_r($c);
// Output: Array ( [0] => Red [1] => Green [2] => Blue [3] => Yellow )
?>

5. sort()

Sorts an array in ascending order.

<?php
$numbers = array(3, 1, 2);
sort($numbers);
print_r($numbers); // Output: Array ( [0] => 1 [1] => 2 [2] => 3 )
?>

6. array_reverse()

Reverses the order of elements in an array.

<?php
$letters = array("A", "B", "C");
print_r(array_reverse($letters));
// Output: Array ( [0] => C [1] => B [2] => A )
?>

7. in_array()

Checks if a value exists in an array.

<?php
$fruits = array("Apple", "Banana", "Mango");
if (in_array("Mango", $fruits)) {
    echo "Mango found!";
}
?>



🧠 Summary

| Type             | Description                | Example                      |
| -----------------| -------------------------- | -----------------------------|
| Indexed          | Uses numeric indexes       | $arr = ["A", "B", "C"];      |
| Associative      | Uses named keys            | $arr = ["name"=>"Raj"];      |
| Multidimensional | Array inside another array | $arr = [ ["A",1], ["B",2] ]; |



⚙️ Summary Table:

| Language           | Can store mixed datatypes in array? | Example                     |
| ------------------ | ----------------------------------- | --------------------------- |
| C / C++ / Java     | ❌ No                               | Only same datatype         |
| Python             | ✅ Yes                              | [1, "Raj", 3.5]            |
| PHP                | ✅ Yes                              | array("Raj", 20, "Surat")  |

      
      `},{id:19,question:"19. Write a PHP program using switch case for weekday messages. AND Application: Write a PHP script to display numbers 1 to 10 using a loop.",answer:"",codeExample:`
✅ 1️⃣ PHP Program using Switch Case for Weekday Messages

👉 Program:

<?php
$day = 3; // You can change the number (1 to 7)

switch ($day) {
    case 1:
        echo "Today is Monday!";
        break;
    case 2:
        echo "Today is Tuesday!";
        break;
    case 3:
        echo "Today is Wednesday!";
        break;
    case 4:
        echo "Today is Thursday!";
        break;
    case 5:
        echo "Today is Friday!";
        break;
    case 6:
        echo "Today is Saturday!";
        break;
    case 7:
        echo "Today is Sunday!";
        break;
    default:
        echo "Invalid day number!";
}
?>


👉 Output (if $day = 3):

Today is Wednesday!




✅ 2️⃣ PHP Script to Display Numbers 1 to 10 Using a Loop

👉 Program:

<?php
for ($i = 1; $i <= 10; $i++) {
    echo $i . "<br>"; // Displays each number on a new line
}
?>


👉 Output:

1
2
3
4
5
6
7
8
9
10
  
      `},{id:20,question:"20. Explain MySQL data types in detail with examples.",answer:"",codeExample:`
🧠 MySQL Data Types

MySQL data types define what kind of values can be stored in a table column (numbers, text, dates, etc.).
They are mainly divided into four types:


1️⃣ Numeric Data Types

Used to store numbers (integer or decimal).

| Data Type     | Description                            | Example                        |
| --------------| -------------------------------------- | -------------------------------|
| INT           | Whole numbers (no decimal).            | age INT = 25                   |
| TINYINT       | Small whole numbers (-128 to 127).     | flag TINYINT = 1               |
| SMALLINT      | Medium-sized numbers.                  | marks SMALLINT = 1500          |
| BIGINT        | Very large numbers.                    | population BIGINT = 9876543210 |
| FLOAT         | Decimal numbers (less precision).      | price FLOAT = 45.67            |
| DOUBLE        | Decimal numbers (more precision).      | distance DOUBLE = 12.3456      |
| DECIMAL(p, q) | Exact decimal values (good for money). | salary DECIMAL(8,2) = 12345.67 |



2️⃣ String (Character) Data Types

Used to store text or characters.

| Data Type  | Description                                        | Example                                       |
| -----------| -------------------------------------------------- | ----------------------------------------------|
| CHAR(n)    | Fixed-length string. Always stores n characters.   | gender CHAR(1) = 'M'                          |
| VARCHAR(n) | Variable-length string.                            | name VARCHAR(50) = 'Amit Sharma'              |
| TEXT       | Long text data.                                    | description TEXT = 'This is a long message.'  |
| ENUM       | One value from a predefined list.                  | status ENUM('Active','Inactive') = 'Active'   |
| SET        | Multiple values from a predefined list.            | colors SET('Red','Green','Blue') = 'Red,Blue' |



3️⃣ Date and Time Data Types

Used to store dates and times.

| Data Type | Description                                                  | Example                                     |
| ----------| -------------------------------------------------------------| --------------------------------------------|
| DATE      | Stores date in YYYY-MM-DD format.                            | dob DATE = '2000-05-15'                     |
| TIME      | Stores time in HH:MM:SS.                                     | login_time TIME = '09:30:00'                |
| DATETIME  | Stores both date and time.                                   | created_at DATETIME = '2025-10-27 14:45:00' |
| TIMESTAMP | Automatically updates with current time when record changes. | last_update TIMESTAMP                       |
| YEAR      | Stores year (4 digits).                                      | join_year YEAR = 2025                       |



4️⃣ Binary Data Types

Used to store binary (non-text) data like images, files, etc.

| Data Type    | Description                                     | Example           |
| -------------| ----------------------------------------------- | ------------------|
| BLOB         | Binary Large Object (used for files or images). | photo BLOB        |
| BINARY(n)    | Fixed-length binary data.                       | code BINARY(8)    |
| VARBINARY(n) | Variable-length binary data.                    | key VARBINARY(16) |



🧾 Example SQL Table:

CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    dob DATE,
    marks DECIMAL(5,2),
    status ENUM('Pass','Fail'),
    photo BLOB
);



      `},{id:21,question:"21. Differentiate between MySQL and MySQLi.",answer:"",codeExample:`
🧠 Difference Between MySQL and MySQLi

| MySQL                                                                 | MySQLi                                                                |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------|
| Old version of PHP extension used to connect PHP with MySQL database. | Improved (new) version of MySQL extension with more features.         |
| Supports only procedural (function-based) programming.                | Supports both procedural and object-oriented programming.             |
| Does not support prepared statements (less secure).                   | Supports prepared statements (more secure, prevents SQL injection).   |
| Slower and deprecated (no longer used in newer PHP versions).         | Faster and actively supported by PHP.                                 |
| Example:<br> mysql_connect("localhost", "root", "", "test");          | Example:<br> $conn = mysqli_connect("localhost", "root", "", "test"); |
| Cannot handle multiple queries at once.                               | Can handle multiple queries in one call.                              |
| Less error handling.                                                  | Better error reporting and debugging.                                 |
| MySQL = My Structured Query Language                                  | MySQLi = MySQL Improved                                               |
| ❌ Does not support transactions (commit/rollback).                   | ✅ Supports transactions for safer, grouped SQL execution.           | 



✅ Example (MySQLi Procedural Style)

<?php
$conn = mysqli_connect("localhost", "root", "", "school");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully!";
mysqli_close($conn);
?>



🧩 In Short:

MySQLi = MySQL Improved
It is more secure, faster, and recommended for all modern PHP projects. ✅
      
    `},{id:22,question:"22. List and explain any five MySQL string functions.",answer:"",codeExample:`
🧠 Five MySQL String Functions

| Function                          | Description                                          | Example & Output                                            |
| ----------------------------------| ---------------------------------------------------- | ------------------------------------------------------------|
| 1️⃣ CONCAT(str1, str2, …)         | Joins (combines) two or more strings together.       | SELECT CONCAT('Hello', ' ', 'World'); → Output: Hello World |
| 2️⃣ LENGTH(str)                   | Returns the number of characters in a string.        | SELECT LENGTH('Apple'); → Output: 5                         |
| 3️⃣ LOWER(str)                    | Converts all characters in a string to lowercase.    | SELECT LOWER('WELCOME'); → Output: welcome                  |
| 4️⃣ UPPER(str)                    | Converts all characters in a string to uppercase.    | SELECT UPPER('good morning'); → Output: GOOD MORNING        |
| 5️⃣ SUBSTRING(str, start, length) | Extracts a part of a string from the given position. | SELECT SUBSTRING('Database, 1, 4); → Output: Data           |


✅ Bonus Function (for practice)

| Function  | Description                                       | Example & Output                                |
| ----------| ------------------------------------------------- | ------------------------------------------------|
| TRIM(str) | Removes extra spaces from both sides of a string. | SELECT TRIM('   Hello   '); → Output: Hello     |


      `},{id:23,question:"23. List and explain any five MySQL date and time functions.",answer:"",codeExample:`
🧠 Five MySQL Date and Time Functions

| Function                      | Description                                      | Example & Output                                                        |
| ------------------------------| -------------------------------------------------| ------------------------------------------------------------------------|
| 1️⃣ NOW()                     | Returns the current date and time of the system. | SELECT NOW(); → Output: 2025-10-27 17:30:45                             |
| 2️⃣ CURDATE()                 | Returns the current date only (no time).         | SELECT CURDATE(); → Output: 2025-10-27                                  |
| 3️⃣ CURTIME()                 | Returns the current time only (no date).         | SELECT CURTIME(); → Output: 17:30:45                                    |
| 4️⃣ DATE_FORMAT(date, format) | Formats the date in a specific style.            | SELECT DATE_FORMAT('2025-10-27', '%d-%M-%Y'); → Output: 27-October-2025 |
| 5️⃣ DATEDIFF(date1, date2)    | Finds the difference between two dates in days.  | SELECT DATEDIFF('2025-12-31', '2025-10-27'); → Output: 65               |



✅ Bonus Function (for practice)

| Function      | Description                      | Example & Output                               |
| --------------| ---------------------------------| -----------------------------------------------|
| DAYNAME(date) | Returns the name of the weekday. | SELECT DAYNAME('2025-10-27'); → Output: Monday |



🧾 Example Query:
SELECT NOW(), CURDATE(), CURTIME(),
       DATE_FORMAT(NOW(), '%W, %D %M %Y') AS formatted_date,
       DATEDIFF('2025-12-31', CURDATE()) AS days_left;
      `},{id:24,question:"24. Explain CHAR, VARCHAR, and TEXT data types.",answer:"",codeExample:`
🧠 1️⃣ CHAR Data Type

Used for: Fixed-length strings.
It always reserves the same amount of space, even if the text is shorter.
Maximum size: 255 characters.
Faster for fixed-size data (like codes, IDs, etc.).

👉 Example:

CREATE TABLE student (
    gender CHAR(1)   -- stores exactly 1 character like 'M' or 'F'
);


If you insert: 'A' → stored as 'A ' (adds spaces to make it fixed length).



🧠 2️⃣ VARCHAR Data Type

Used for: Variable-length strings.
It uses only as much space as needed for the text.
Maximum size: 65,535 characters (depends on row size).
More flexible and commonly used for names, emails, etc.

👉 Example:

CREATE TABLE employee (
    name VARCHAR(50)  -- can store names up to 50 characters
);


If you insert: 'Amit' → stored as 'Amit' (no extra spaces).



🧠 3️⃣ TEXT Data Type

Used for: Storing large text (paragraphs, descriptions, articles, etc.).
Cannot have a default value.
Maximum size: 65,535 characters.

👉 Example:

CREATE TABLE article (
    content TEXT   -- can store long text or paragraphs
);



📊 Quick Comparison

| Type       | Length Type           | Used For                                    | Example                    |
| -----------| --------------------- | ------------------------------------------- | -------------------------- |
| CHAR(n)    | Fixed length          | Short, fixed-size data (e.g., gender, code) | 'M'                        |
| VARCHAR(n) | Variable length       | Normal text data (e.g., names, emails)      | 'Rahul'                    |
| TEXT       | Large variable length | Long text (e.g., article, description)      | 'This is a long message'   |




🧠 Quick Comparison Table

| Feature       | CHAR                    | VARCHAR                | TEXT                           |
| ------------- | ----------------------- | ---------------------- | ------------------------------ |
| Type          | Fixed-length            | Variable-length        | Long text                      |
| Storage       | Always uses full size   | Uses only needed space | Stored separately (large data) |
| Max Length    | 255                     | 65,535                 | 65,535 bytes                   |
| Padding       | Adds spaces             | No padding             | No padding                     |  // this mean to show bottom
| Default Value | Allowed                 | Allowed                | Not allowed                    |
| Best For      | Codes, short fixed text | Names, addresses       | Descriptions, articles         |


----------------------
🔹 CHAR → Has padding

If you define:

name CHAR(10)


and you insert 'Raj',
MySQL stores it as 'Raj ' (with 7 spaces added to make it 10 characters long).

✅ That’s called padding.



🔹 VARCHAR → No padding

If you define:

name VARCHAR(10)


and you insert 'Raj',
MySQL stores exactly 'Raj' (3 characters, no extra spaces).

✅ It does not add spaces — that’s what “no padding” means.
It still allows spaces inside your text (like 'Raj mk'), but it doesn’t auto-fill extra ones at the end.


      `},{id:25,question:"25. Write a PHP code to connect and disconnect from a MySQL database.",answer:"",codeExample:`
✅ PHP Code: Connect and Disconnect from MySQL Database


<?php

// Step 1: Database connection details
$servername = "localhost";  // Server name
$username = "root";         // Database username
$password = "";             // Database password
$database = "school";       // Database name


// Step 2: Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);


// Step 3: Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "✅ Connected successfully!<br>";


// Step 4: Close the connection
mysqli_close($conn);
echo "❌ Disconnected successfully!";
?>



🧠 Explanation (Easy Words):

mysqli_connect() → Used to connect PHP with MySQL.
mysqli_connect_error() → Shows error if connection fails.
mysqli_close() → Closes (disconnects) the connection.
echo → Prints message on screen.



🧾 Output:
✅ Connected successfully!
❌ Disconnected successfully!
      
      `},{id:26,question:"26. Explain ADDDATE, DATEDIFF, and DATE_FORMAT functions with examples.",answer:"",codeExample:`
🧠 1️⃣ ADDDATE() Function

👉 Use:
Used to add or subtract days from a given date.

✅ Syntax:

ADDDATE(date, number_of_days)


✅ Example:

SELECT ADDDATE('2025-10-27', 10);


➡️ Output:
2025-11-06


👉 (It adds 10 days to the given date.)

To subtract days:

SELECT ADDDATE('2025-10-27', -5);


➡️ Output: 2025-10-22

---------------------------------------------

🧠 2️⃣ DATEDIFF() Function

👉 Use:
Used to find the number of days between two dates.
(It subtracts the second date from the first date.)

✅ Syntax:

DATEDIFF(date1, date2)


✅ Example:

SELECT DATEDIFF('2025-12-31', '2025-10-27');


➡️ Output: 65
👉 (There are 65 days between Oct 27 and Dec 31.)

---------------------------------------------

🧠 3️⃣ DATE_FORMAT() Function

👉 Use:
Used to change the display format of a date.

✅ Syntax:

DATE_FORMAT(date, format)


✅ Example:

SELECT DATE_FORMAT('2025-10-27', '%d-%M-%Y');


➡️ Output: 27-October-2025



📅 Common Format Codes:

| Code | Meaning              | Example Output |
| ---- | -------------------- | -------------- |
| %d   | Day (01–31)          | 27             |
| %m   | Month number (01–12) | 10             |
| %M   | Month name           | October        |
| %Y   | Year (4 digits)      | 2025           |
| %W   | Day name             | Monday         |


✅ Summary

| Function      | Use                              | Example                              | Output          |
| --------------| -------------------------------- | -------------------------------------| ----------------|
| ADDDATE()     | Add or subtract days from a date | ADDDATE('2025-10-27', 5)             | 2025-11-01      |
| DATEDIFF()    | Find days between two dates      | DATEDIFF('2025-12-31','2025-10-27')  | 65              |
| DATE_FORMAT() | Change date format               | DATE_FORMAT('2025-10-27','%d-%M-%Y') | 27-October-2025 |

    
      `},{id:27,question:"27. What is Prepared Statement and how does it prevent SQL injection?",answer:"",codeExample:`
🧠 What is a Prepared Statement?

A Prepared Statement is a secure way to run SQL queries in PHP (especially when taking user input).
It allows you to write an SQL query once, and then execute it many times with different values.

✅ It helps avoid SQL injection attacks — a common hacking method that changes your SQL query using user input.

🔐 How It Works

  Step 1: SQL query is sent to the database with placeholders instead of actual data.
  Step 2: The database compiles and checks the query structure.
  Step 3: The actual values are safely added later — not directly in the query.

👉 This prevents hackers from injecting harmful SQL code.

✅ Example (PHP – MySQLi Prepared Statement)


<?php
// Connect to database
$conn = new mysqli("localhost", "root", "", "school");

// Step 1: Prepare the SQL query (with ? placeholder)
$stmt = $conn->prepare("SELECT * FROM students WHERE name = ?");

// Step 2: Bind parameter (s = string)
$stmt->bind_param("s", $student_name);

// Step 3: Set value and execute
$student_name = "Amit";
$stmt->execute();

// Step 4: Get results
$result = $stmt->get_result();

while ($row = $result->fetch_assoc()) {
    echo $row['name'] . "<br>";
}

// Close connection
$stmt->close();
$conn->close();
?>


output:
If the table students inside the school database contains a record where the name column has the value Amit, then the output will be:

Amit


If there are multiple rows with the name Amit, it will print each one on a new line:

Amit
Amit
Amit


If no record exists with that name, then there will be no output (blank screen).




💡 How It Prevents SQL Injection

🔴 Without Prepared Statement (Unsafe):

$name = $_GET['name'];
$query = "SELECT * FROM students WHERE name = '$name'";


If user enters:
Amit' OR '1'='1 → it becomes:

SELECT * FROM students WHERE name = 'Amit' OR '1'='1';


➡️ This returns all records — a successful SQL injection attack!

🟢 With Prepared Statement (Safe):

$stmt = $conn->prepare("SELECT * FROM students WHERE name = ?");
$stmt->bind_param("s", $name);
$stmt->execute();


Here, the input is treated as data, not as SQL code,
so injection does not work ✅


🧾 In Short:

| Prepared Statement                     | Prevents SQL Injection Because        |
| ---------------------------------------| ------------------------------------- |
| SQL query and data are sent separately | User input can’t modify SQL structure |
| Uses placeholders (?) for values       | Database treats values as plain text  |
| Supported by MySQLi and PDO            | Secure and efficient                  |


-----------------------------------------------------------------------------------------

🧩 Meaning of -> in PHP

The -> (arrow) is used to access a property or call a method of an object in PHP’s object-oriented programming (OOP).

💡 In simple words:

It connects an object to its function or variable.



🧠 Example from your code:
    $conn = new mysqli("localhost", "root", "", "school");


Here,
$conn is an object of the mysqli class (used for MySQL connections).

Now, look at:

    $stmt = $conn->prepare("SELECT * FROM students WHERE name = ?");



👉 ->prepare() means

  “Call the prepare() function of the object $conn.”

So $conn->prepare() = “use the prepare method from the $conn object”.



✅ Step-by-step explanation of your code:

$conn = new mysqli("localhost", "root", "", "school");
  ➡ Creates a new MySQL connection object.


$stmt = $conn->prepare("SELECT * FROM students WHERE name = ?");
  ➡ Uses that object’s prepare() method to prepare a query.


$stmt->bind_param("s", $student_name);
  ➡ Uses the statement object’s method bind_param() to safely attach data.


$stmt->execute();
  ➡ Executes the prepared statement.


$result = $stmt->get_result();  
  ➡ Fetches the query result.


$row = $result->fetch_assoc();
  ➡ Fetches each row as an associative array (like ['name' => 'Amit']).


🧩 Think of it like:

| Code                     | Meaning                                  |
| ------------------------ | ---------------------------------------- |
| $conn->prepare()         | Call prepare() using connection object   |
| $stmt->execute()         | Call execute() using statement object    |
| $result->fetch_assoc()   | Call fetch_assoc() using result object   |


✅ Summary:

-> = Access methods or properties of an object.
It’s used in Object-Oriented PHP.
Example:

    $object->method() = calls a method
    $object->property = accesses a variable inside the object


------------------------------------------------------------------------

What is injection?

Injection is a class of security attack where an attacker sends malicious input that the application treats as code or commands. 
Instead of treating the input as plain data, the system executes it, which lets the attacker change behavior, read or destroy data, run commands, etc.

The most common type people mean by “injection” is SQL Injection, but there are others (XSS, Command Injection, LDAP injection, etc.).

SQL Injection (explained simply)

What it does: Attacker inserts SQL code into input fields (like login, search) so the database runs that injected SQL.

Why it’s bad: It can let attackers read private data, modify or delete data, bypass login checks, or even drop tables.



Unsafe example (vulnerable):

    // BAD — vulnerable to SQL injection
    $name = $_GET['name'];
    $query = "SELECT * FROM users WHERE name = '$name'";
    $result = mysqli_query($conn, $query);


If name = A' OR '1'='1, the query becomes:


    SELECT * FROM users WHERE name = 'A' OR '1'='1';

— that returns all rows.
      
      `},{id:28,question:"28. explain Using transactions and stored procedures in MySQL ",answer:"",codeExample:`
🧠 1️⃣ Transactions in MySQL
🔹 Meaning:

A transaction is a group of one or more SQL statements that are executed together as a single unit.
If one statement fails, the whole transaction is rolled back — so your database stays safe and correct.

🔹 Main Properties (ACID):

| Property            | Meaning                                                  |
| ------------------- | -------------------------------------------------------- |
| A – Atomicity       | All statements run completely or not at all.             |
| C – Consistency     | Database remains valid before and after the transaction. |
| I – Isolation       | Each transaction runs separately from others.            |
| D – Durability      | Once committed, data is saved permanently.               |



✅ Syntax:

START TRANSACTION;

-- your SQL queries
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

COMMIT;   -- to save changes permanently
-- or use ROLLBACK; to undo if something goes wrong



💡 Example:

Imagine transferring ₹500 from Account 1 to Account 2.

START TRANSACTION;

UPDATE account SET balance = balance - 500 WHERE acc_id = 101;
UPDATE account SET balance = balance + 500 WHERE acc_id = 102;

COMMIT;



👉 If one update fails, you can use ROLLBACK; to cancel the entire transaction.


START TRANSACTION;

UPDATE account SET balance = balance - 500 WHERE acc_id = 101;
UPDATE account SET balance = balance + 500 WHERE acc_id = 102;

-- If no errors
COMMIT;

-- If any error occurs, revert back
ROLLBACK;


----------------------------------------------------------------------------------------------

🧠 2️⃣ Stored Procedures in MySQL
🔹 Meaning:

A stored procedure is a set of SQL statements saved in the database with a name.
You can call it whenever you want — like a function in programming.

It helps reuse code, reduce errors, and improve performance.


✅ Syntax:

DELIMITER $$

CREATE PROCEDURE procedure_name()
BEGIN
   -- SQL statements
END $$

DELIMITER ;



🧾 Example:

DELIMITER $$

CREATE PROCEDURE GetStudents()
BEGIN
   SELECT * FROM students;
END $$

DELIMITER ;

-- Call the procedure
CALL GetStudents();



💡 Example with Parameters:

DELIMITER $$

CREATE PROCEDURE GetStudentByID(IN student_id INT)
BEGIN
   SELECT * FROM students WHERE id = student_id;
END $$

DELIMITER ;

-- Call it
CALL GetStudentByID(5);



🧩 In Short:

| Feature  | Transaction                               | Stored Procedure                  |
| ---------| ----------------------------------------- | --------------------------------- |
| Meaning  | Group of SQL queries executed together    | Predefined SQL code stored in DB  |
| Use      | Maintain data accuracy                    | Reuse logic and simplify code     |
| Commands | START TRANSACTION, COMMIT, ROLLBACK       | CREATE PROCEDURE, CALL            |
| Benefit  | Prevents data errors                      | Saves time and reduces repetition |

      
      `},{id:29,question:"29. Explain advantages of MySQLi over MySQL.",answer:"",codeExample:`
🧠 MySQLi (MySQL Improved)

MySQLi is an improved version of the old MySQL extension.
It offers better performance, more features, and stronger security.

🌟 Advantages of MySQLi over MySQL


🔹 1️⃣ Supports Both Object-Oriented and Procedural Styles

MySQL → Only procedural (function-based).
MySQLi → You can use both object-oriented and procedural code.

✅ Example:

Procedural:

$conn = mysqli_connect("localhost", "root", "", "school");


Object-Oriented:

$conn = new mysqli("localhost", "root", "", "school");



🔹 2️⃣ Supports Prepared Statements

MySQLi allows prepared statements — which help prevent SQL injection attacks.
MySQL does not support them.

✅ Example:

$stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();



🔹 3️⃣ Supports Transactions

MySQLi allows transactions using BEGIN, COMMIT, and ROLLBACK commands.
MySQL does not support this feature directly.

✅ Example:

$conn->begin_transaction();
$conn->query("UPDATE accounts SET balance = balance - 500 WHERE id = 1");
$conn->query("UPDATE accounts SET balance = balance + 500 WHERE id = 2");
$conn->commit();



🔹 4️⃣ Supports Multiple Queries

You can run more than one SQL statement at the same time using MySQLi.
MySQL does not allow that.

✅ Example:

mysqli_multi_query($conn, "SELECT * FROM students; SELECT * FROM teachers;");



🔹 5️⃣ Improved Error Handling

MySQLi provides detailed error reporting and exception handling.
Easier to debug and find problems.

✅ Example:

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



🔹 6️⃣ Supports Object-Oriented Features

MySQLi supports OOP features like constructors, destructors, and methods.
Makes code cleaner and reusable.



🔹 7️⃣ Better Performance and Security

MySQLi uses newer APIs, better memory management, and modern encryption.
It’s faster and more secure than the old MySQL extension.



🧩 In Short:

| Feature             | MySQL           | MySQLi                       |
| ------------------- | --------------- | ---------------------------- |
| API Type            | Only Procedural | Procedural + Object-Oriented |
| Prepared Statements | ❌ No           | ✅ Yes                      |
| Transactions        | ❌ No           | ✅ Yes                      |
| Multiple Queries    | ❌ No           | ✅ Yes                      |
| Error Handling      | Basic           | Advanced                     |
| Performance         | Slower          | Faster                       |
| Security            | Low             | High                         |



✅ Conclusion:
👉 MySQLi is the modern, secure, and powerful version of MySQL.
It is recommended to always use MySQLi (or PDO) for PHP database connections today.
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],h=R=>{re(D===R?null:R)};return qe.jsxs("div",{className:"app-container",children:[qe.jsx("h1",{children:"PHP Interview Questions"}),qe.jsx("div",{className:"questions-container",children:F.map(R=>qe.jsxs("div",{className:"question-item",children:[qe.jsx("button",{className:`question-button ${D===R.id?"active":""}`,onClick:()=>h(R.id),children:R.question}),D===R.id&&qe.jsxs("div",{className:"answer-container",children:[qe.jsxs("div",{className:"answer",children:[qe.jsx("h3",{children:"Answer:"}),qe.jsx("p",{children:R.answer})]}),R.codeExample&&qe.jsxs("div",{className:"code-example",children:[qe.jsx("h3",{children:"Code Example:"}),qe.jsx("pre",{children:qe.jsx("code",{children:R.codeExample})})]})]})]},R.id))})]})}ah.createRoot(document.getElementById("root")).render(qe.jsx(Ad.StrictMode,{children:qe.jsx(lh,{})}));
