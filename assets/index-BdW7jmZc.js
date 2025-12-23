(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))p(R);new MutationObserver(R=>{for(const Z of R)if(Z.type==="childList")for(const he of Z.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&p(he)}).observe(document,{childList:!0,subtree:!0});function K(R){const Z={};return R.integrity&&(Z.integrity=R.integrity),R.referrerPolicy&&(Z.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?Z.credentials="include":R.crossOrigin==="anonymous"?Z.credentials="omit":Z.credentials="same-origin",Z}function p(R){if(R.ep)return;R.ep=!0;const Z=K(R);fetch(R.href,Z)}})();var ns={exports:{}},vn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function kh(){if(md)return vn;md=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function K(p,R,Z){var he=null;if(Z!==void 0&&(he=""+Z),R.key!==void 0&&(he=""+R.key),"key"in R){Z={};for(var Re in R)Re!=="key"&&(Z[Re]=R[Re])}else Z=R;return R=Z.ref,{$$typeof:M,type:p,key:he,ref:R!==void 0?R:null,props:Z}}return vn.Fragment=fe,vn.jsx=K,vn.jsxs=K,vn}var hd;function Zh(){return hd||(hd=1,ns.exports=kh()),ns.exports}var Ue=Zh(),is={exports:{}},L={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function Jh(){if(pd)return L;pd=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),ce=Symbol.iterator;function Ze(r){return r===null||typeof r!="object"?null:(r=ce&&r[ce]||r["@@iterator"],typeof r=="function"?r:null)}var Ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,$t={};function Je(r,E,x){this.props=r,this.context=E,this.refs=$t,this.updater=x||Ne}Je.prototype.isReactComponent={},Je.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},Je.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Zt(){}Zt.prototype=Je.prototype;function Ce(r,E,x){this.props=r,this.context=E,this.refs=$t,this.updater=x||Ne}var ut=Ce.prototype=new Zt;ut.constructor=Ce,He(ut,Je.prototype),ut.isPureReactComponent=!0;var Et=Array.isArray;function qe(){}var P={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function Tt(r,E,x){var _=x.ref;return{$$typeof:M,type:r,key:E,ref:_!==void 0?_:null,props:x}}function Ba(r,E){return Tt(r.type,E,r.props)}function At(r){return typeof r=="object"&&r!==null&&r.$$typeof===M}function Be(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(x){return E[x]})}var Sa=/\/+/g;function wt(r,E){return typeof r=="object"&&r!==null&&r.key!=null?Be(""+r.key):E.toString(36)}function bt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(qe,qe):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function g(r,E,x,_,U){var j=typeof r;(j==="undefined"||j==="boolean")&&(r=null);var F=!1;if(r===null)F=!0;else switch(j){case"bigint":case"string":case"number":F=!0;break;case"object":switch(r.$$typeof){case M:case fe:F=!0;break;case W:return F=r._init,g(F(r._payload),E,x,_,U)}}if(F)return U=U(r),F=_===""?"."+wt(r,0):_,Et(U)?(x="",F!=null&&(x=F.replace(Sa,"$&/")+"/"),g(U,E,x,"",function(Ol){return Ol})):U!=null&&(At(U)&&(U=Ba(U,x+(U.key==null||r&&r.key===U.key?"":(""+U.key).replace(Sa,"$&/")+"/")+F)),E.push(U)),1;F=0;var ze=_===""?".":_+":";if(Et(r))for(var pe=0;pe<r.length;pe++)_=r[pe],j=ze+wt(_,pe),F+=g(_,E,x,j,U);else if(pe=Ze(r),typeof pe=="function")for(r=pe.call(r),pe=0;!(_=r.next()).done;)_=_.value,j=ze+wt(_,pe++),F+=g(_,E,x,j,U);else if(j==="object"){if(typeof r.then=="function")return g(bt(r),E,x,_,U);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return F}function A(r,E,x){if(r==null)return r;var _=[],U=0;return g(r,_,"","",function(j){return E.call(x,j,U++)}),_}function z(r){if(r._status===-1){var E=r._result;E=E(),E.then(function(x){(r._status===0||r._status===-1)&&(r._status=1,r._result=x)},function(x){(r._status===0||r._status===-1)&&(r._status=2,r._result=x)}),r._status===-1&&(r._status=0,r._result=E)}if(r._status===1)return r._result.default;throw r._result}var te=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ie={map:A,forEach:function(r,E,x){A(r,function(){E.apply(this,arguments)},x)},count:function(r){var E=0;return A(r,function(){E++}),E},toArray:function(r){return A(r,function(E){return E})||[]},only:function(r){if(!At(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return L.Activity=H,L.Children=ie,L.Component=Je,L.Fragment=K,L.Profiler=R,L.PureComponent=Ce,L.StrictMode=p,L.Suspense=C,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,L.__COMPILER_RUNTIME={__proto__:null,c:function(r){return P.H.useMemoCache(r)}},L.cache=function(r){return function(){return r.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(r,E,x){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var _=He({},r.props),U=r.key;if(E!=null)for(j in E.key!==void 0&&(U=""+E.key),E)!je.call(E,j)||j==="key"||j==="__self"||j==="__source"||j==="ref"&&E.ref===void 0||(_[j]=E[j]);var j=arguments.length-2;if(j===1)_.children=x;else if(1<j){for(var F=Array(j),ze=0;ze<j;ze++)F[ze]=arguments[ze+2];_.children=F}return Tt(r.type,U,_)},L.createContext=function(r){return r={$$typeof:he,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:Z,_context:r},r},L.createElement=function(r,E,x){var _,U={},j=null;if(E!=null)for(_ in E.key!==void 0&&(j=""+E.key),E)je.call(E,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(U[_]=E[_]);var F=arguments.length-2;if(F===1)U.children=x;else if(1<F){for(var ze=Array(F),pe=0;pe<F;pe++)ze[pe]=arguments[pe+2];U.children=ze}if(r&&r.defaultProps)for(_ in F=r.defaultProps,F)U[_]===void 0&&(U[_]=F[_]);return Tt(r,j,U)},L.createRef=function(){return{current:null}},L.forwardRef=function(r){return{$$typeof:Re,render:r}},L.isValidElement=At,L.lazy=function(r){return{$$typeof:W,_payload:{_status:-1,_result:r},_init:z}},L.memo=function(r,E){return{$$typeof:T,type:r,compare:E===void 0?null:E}},L.startTransition=function(r){var E=P.T,x={};P.T=x;try{var _=r(),U=P.S;U!==null&&U(x,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(qe,te)}catch(j){te(j)}finally{E!==null&&x.types!==null&&(E.types=x.types),P.T=E}},L.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},L.use=function(r){return P.H.use(r)},L.useActionState=function(r,E,x){return P.H.useActionState(r,E,x)},L.useCallback=function(r,E){return P.H.useCallback(r,E)},L.useContext=function(r){return P.H.useContext(r)},L.useDebugValue=function(){},L.useDeferredValue=function(r,E){return P.H.useDeferredValue(r,E)},L.useEffect=function(r,E){return P.H.useEffect(r,E)},L.useEffectEvent=function(r){return P.H.useEffectEvent(r)},L.useId=function(){return P.H.useId()},L.useImperativeHandle=function(r,E,x){return P.H.useImperativeHandle(r,E,x)},L.useInsertionEffect=function(r,E){return P.H.useInsertionEffect(r,E)},L.useLayoutEffect=function(r,E){return P.H.useLayoutEffect(r,E)},L.useMemo=function(r,E){return P.H.useMemo(r,E)},L.useOptimistic=function(r,E){return P.H.useOptimistic(r,E)},L.useReducer=function(r,E,x){return P.H.useReducer(r,E,x)},L.useRef=function(r){return P.H.useRef(r)},L.useState=function(r){return P.H.useState(r)},L.useSyncExternalStore=function(r,E,x){return P.H.useSyncExternalStore(r,E,x)},L.useTransition=function(){return P.H.useTransition()},L.version="19.2.0",L}var yd;function rs(){return yd||(yd=1,is.exports=Jh()),is.exports}var Ad=rs(),us={exports:{}},Sn={},os={exports:{}},ss={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function Kh(){return bd||(bd=1,(function(M){function fe(g,A){var z=g.length;g.push(A);e:for(;0<z;){var te=z-1>>>1,ie=g[te];if(0<R(ie,A))g[te]=A,g[z]=ie,z=te;else break e}}function K(g){return g.length===0?null:g[0]}function p(g){if(g.length===0)return null;var A=g[0],z=g.pop();if(z!==A){g[0]=z;e:for(var te=0,ie=g.length,r=ie>>>1;te<r;){var E=2*(te+1)-1,x=g[E],_=E+1,U=g[_];if(0>R(x,z))_<ie&&0>R(U,x)?(g[te]=U,g[_]=z,te=_):(g[te]=x,g[E]=z,te=E);else if(_<ie&&0>R(U,z))g[te]=U,g[_]=z,te=_;else break e}}return A}function R(g,A){var z=g.sortIndex-A.sortIndex;return z!==0?z:g.id-A.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Z=performance;M.unstable_now=function(){return Z.now()}}else{var he=Date,Re=he.now();M.unstable_now=function(){return he.now()-Re}}var C=[],T=[],W=1,H=null,ce=3,Ze=!1,Ne=!1,He=!1,$t=!1,Je=typeof setTimeout=="function"?setTimeout:null,Zt=typeof clearTimeout=="function"?clearTimeout:null,Ce=typeof setImmediate<"u"?setImmediate:null;function ut(g){for(var A=K(T);A!==null;){if(A.callback===null)p(T);else if(A.startTime<=g)p(T),A.sortIndex=A.expirationTime,fe(C,A);else break;A=K(T)}}function Et(g){if(He=!1,ut(g),!Ne)if(K(C)!==null)Ne=!0,qe||(qe=!0,Be());else{var A=K(T);A!==null&&bt(Et,A.startTime-g)}}var qe=!1,P=-1,je=5,Tt=-1;function Ba(){return $t?!0:!(M.unstable_now()-Tt<je)}function At(){if($t=!1,qe){var g=M.unstable_now();Tt=g;var A=!0;try{e:{Ne=!1,He&&(He=!1,Zt(P),P=-1),Ze=!0;var z=ce;try{t:{for(ut(g),H=K(C);H!==null&&!(H.expirationTime>g&&Ba());){var te=H.callback;if(typeof te=="function"){H.callback=null,ce=H.priorityLevel;var ie=te(H.expirationTime<=g);if(g=M.unstable_now(),typeof ie=="function"){H.callback=ie,ut(g),A=!0;break t}H===K(C)&&p(C),ut(g)}else p(C);H=K(C)}if(H!==null)A=!0;else{var r=K(T);r!==null&&bt(Et,r.startTime-g),A=!1}}break e}finally{H=null,ce=z,Ze=!1}A=void 0}}finally{A?Be():qe=!1}}}var Be;if(typeof Ce=="function")Be=function(){Ce(At)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,wt=Sa.port2;Sa.port1.onmessage=At,Be=function(){wt.postMessage(null)}}else Be=function(){Je(At,0)};function bt(g,A){P=Je(function(){g(M.unstable_now())},A)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(g){g.callback=null},M.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<g?Math.floor(1e3/g):5},M.unstable_getCurrentPriorityLevel=function(){return ce},M.unstable_next=function(g){switch(ce){case 1:case 2:case 3:var A=3;break;default:A=ce}var z=ce;ce=A;try{return g()}finally{ce=z}},M.unstable_requestPaint=function(){$t=!0},M.unstable_runWithPriority=function(g,A){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var z=ce;ce=g;try{return A()}finally{ce=z}},M.unstable_scheduleCallback=function(g,A,z){var te=M.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?te+z:te):z=te,g){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=z+ie,g={id:W++,callback:A,priorityLevel:g,startTime:z,expirationTime:ie,sortIndex:-1},z>te?(g.sortIndex=z,fe(T,g),K(C)===null&&g===K(T)&&(He?(Zt(P),P=-1):He=!0,bt(Et,z-te))):(g.sortIndex=ie,fe(C,g),Ne||Ze||(Ne=!0,qe||(qe=!0,Be()))),g},M.unstable_shouldYield=Ba,M.unstable_wrapCallback=function(g){var A=ce;return function(){var z=ce;ce=A;try{return g.apply(this,arguments)}finally{ce=z}}}})(ss)),ss}var gd;function Wh(){return gd||(gd=1,os.exports=Kh()),os.exports}var cs={exports:{}},De={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function Fh(){if(vd)return De;vd=1;var M=rs();function fe(C){var T="https://react.dev/errors/"+C;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)T+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+C+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function K(){}var p={d:{f:K,r:function(){throw Error(fe(522))},D:K,C:K,L:K,m:K,X:K,S:K,M:K},p:0,findDOMNode:null},R=Symbol.for("react.portal");function Z(C,T,W){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:H==null?null:""+H,children:C,containerInfo:T,implementation:W}}var he=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Re(C,T){if(C==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return De.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,De.createPortal=function(C,T){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(fe(299));return Z(C,T,null,W)},De.flushSync=function(C){var T=he.T,W=p.p;try{if(he.T=null,p.p=2,C)return C()}finally{he.T=T,p.p=W,p.d.f()}},De.preconnect=function(C,T){typeof C=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,p.d.C(C,T))},De.prefetchDNS=function(C){typeof C=="string"&&p.d.D(C)},De.preinit=function(C,T){if(typeof C=="string"&&T&&typeof T.as=="string"){var W=T.as,H=Re(W,T.crossOrigin),ce=typeof T.integrity=="string"?T.integrity:void 0,Ze=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;W==="style"?p.d.S(C,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:H,integrity:ce,fetchPriority:Ze}):W==="script"&&p.d.X(C,{crossOrigin:H,integrity:ce,fetchPriority:Ze,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},De.preinitModule=function(C,T){if(typeof C=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var W=Re(T.as,T.crossOrigin);p.d.M(C,{crossOrigin:W,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&p.d.M(C)},De.preload=function(C,T){if(typeof C=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var W=T.as,H=Re(W,T.crossOrigin);p.d.L(C,W,{crossOrigin:H,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},De.preloadModule=function(C,T){if(typeof C=="string")if(T){var W=Re(T.as,T.crossOrigin);p.d.m(C,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:W,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else p.d.m(C)},De.requestFormReset=function(C){p.d.r(C)},De.unstable_batchedUpdates=function(C,T){return C(T)},De.useFormState=function(C,T,W){return he.H.useFormState(C,T,W)},De.useFormStatus=function(){return he.H.useHostTransitionStatus()},De.version="19.2.0",De}var Sd;function Ih(){if(Sd)return cs.exports;Sd=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),cs.exports=Fh(),cs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function ep(){if(Ed)return Sn;Ed=1;var M=Wh(),fe=rs(),K=Ih();function p(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Z(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function he(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Re(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(Z(e)!==e)throw Error(p(188))}function T(e){var t=e.alternate;if(!t){if(t=Z(e),t===null)throw Error(p(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return C(n),e;if(i===l)return C(n),t;i=i.sibling}throw Error(p(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,o=n.child;o;){if(o===a){u=!0,a=n,l=i;break}if(o===l){u=!0,l=n,a=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===a){u=!0,a=i,l=n;break}if(o===l){u=!0,l=i,a=n;break}o=o.sibling}if(!u)throw Error(p(189))}}if(a.alternate!==l)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var H=Object.assign,ce=Symbol.for("react.element"),Ze=Symbol.for("react.transitional.element"),Ne=Symbol.for("react.portal"),He=Symbol.for("react.fragment"),$t=Symbol.for("react.strict_mode"),Je=Symbol.for("react.profiler"),Zt=Symbol.for("react.consumer"),Ce=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Ba=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=At&&e[At]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case He:return"Fragment";case Je:return"Profiler";case $t:return"StrictMode";case Et:return"Suspense";case qe:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ne:return"Portal";case Ce:return e.displayName||"Context";case Zt:return(e._context.displayName||"Context")+".Consumer";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:wt(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return wt(e(t))}catch{}}return null}var bt=Array.isArray,g=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=K.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function r(e){return{current:e}}function E(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function x(e,t){ie++,te[ie]=e.current,e.current=t}var _=r(null),U=r(null),j=r(null),F=r(null);function ze(e,t){switch(x(j,t),x(U,e),x(_,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uf(t),e=Nf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(_),x(_,e)}function pe(){E(_),E(U),E(j)}function Ol(e){e.memoizedState!==null&&x(F,e);var t=_.current,a=Nf(t,e.type);t!==a&&(x(U,e),x(_,a))}function En(e){U.current===e&&(E(_),E(U)),F.current===e&&(E(F),pn._currentValue=z)}var ji,fs;function Ea(e){if(ji===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ji=t&&t[1]||"",fs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ji+e+fs}var Bi=!1;function Yi(e,t){if(!e||Bi)return"";Bi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(y){var h=y}Reflect.construct(e,[],S)}else{try{S.call()}catch(y){h=y}e.call(S.prototype)}}else{try{throw Error()}catch(y){h=y}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(y){if(y&&h&&typeof y.stack=="string")return[y.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var s=u.split(`
`),m=o.split(`
`);for(n=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(l===s.length||n===m.length)for(l=s.length-1,n=m.length-1;1<=l&&0<=n&&s[l]!==m[n];)n--;for(;1<=l&&0<=n;l--,n--)if(s[l]!==m[n]){if(l!==1||n!==1)do if(l--,n--,0>n||s[l]!==m[n]){var b=`
`+s[l].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=l&&0<=n);break}}}finally{Bi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ea(a):""}function xd(e,t){switch(e.tag){case 26:case 27:case 5:return Ea(e.type);case 16:return Ea("Lazy");case 13:return e.child!==t&&t!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return Yi(e.type,!1);case 11:return Yi(e.type.render,!1);case 1:return Yi(e.type,!0);case 31:return Ea("Activity");default:return""}}function ds(e){try{var t="",a=null;do t+=xd(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Qi=Object.prototype.hasOwnProperty,Gi=M.unstable_scheduleCallback,Pi=M.unstable_cancelCallback,Od=M.unstable_shouldYield,Md=M.unstable_requestPaint,Ke=M.unstable_now,_d=M.unstable_getCurrentPriorityLevel,ms=M.unstable_ImmediatePriority,hs=M.unstable_UserBlockingPriority,Tn=M.unstable_NormalPriority,$d=M.unstable_LowPriority,ps=M.unstable_IdlePriority,wd=M.log,Cd=M.unstable_setDisableYieldValue,Ml=null,We=null;function Jt(e){if(typeof wd=="function"&&Cd(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Ml,e)}catch{}}var Fe=Math.clz32?Math.clz32:Hd,Dd=Math.log,Rd=Math.LN2;function Hd(e){return e>>>=0,e===0?32:31-(Dd(e)/Rd|0)|0}var An=256,xn=262144,On=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=Ta(l):(u&=o,u!==0?n=Ta(u):a||(a=o&~e,a!==0&&(n=Ta(a))))):(o=l&~i,o!==0?n=Ta(o):u!==0?n=Ta(u):a||(a=l&~e,a!==0&&(n=Ta(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function _l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function zd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ys(){var e=On;return On<<=1,(On&62914560)===0&&(On=4194304),e}function Vi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ld(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,s=e.expirationTimes,m=e.hiddenUpdates;for(a=u&~a;0<a;){var b=31-Fe(a),S=1<<b;o[b]=0,s[b]=-1;var h=m[b];if(h!==null)for(m[b]=null,b=0;b<h.length;b++){var y=h[b];y!==null&&(y.lane&=-536870913)}a&=~S}l!==0&&bs(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function bs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Fe(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function gs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Fe(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function vs(e,t){var a=t&-t;return a=(a&42)!==0?1:Xi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Xi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ki(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ss(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:ud(e.type))}function Es(e,t){var a=A.p;try{return A.p=e,t()}finally{A.p=a}}var Kt=Math.random().toString(36).slice(2),Oe="__reactFiber$"+Kt,Ye="__reactProps$"+Kt,Ya="__reactContainer$"+Kt,Zi="__reactEvents$"+Kt,Ud="__reactListeners$"+Kt,Nd="__reactHandles$"+Kt,Ts="__reactResources$"+Kt,wl="__reactMarker$"+Kt;function Ji(e){delete e[Oe],delete e[Ye],delete e[Zi],delete e[Ud],delete e[Nd]}function Qa(e){var t=e[Oe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ya]||a[Oe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Pf(e);e!==null;){if(a=e[Oe])return a;e=Pf(e)}return t}e=a,a=e.parentNode}return null}function Ga(e){if(e=e[Oe]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Cl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(p(33))}function Pa(e){var t=e[Ts];return t||(t=e[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ae(e){e[wl]=!0}var As=new Set,xs={};function Aa(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(xs[e]=t,e=0;e<t.length;e++)As.add(t[e])}var qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Os={},Ms={};function jd(e){return Qi.call(Ms,e)?!0:Qi.call(Os,e)?!1:qd.test(e)?Ms[e]=!0:(Os[e]=!0,!1)}function _n(e,t,a){if(jd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function $n(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ct(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _s(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bd(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ki(e){if(!e._valueTracker){var t=_s(e)?"checked":"value";e._valueTracker=Bd(e,t,""+e[t])}}function $s(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=_s(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yd=/[\n"\\]/g;function st(e){return e.replace(Yd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Wi(e,t,a,l,n,i,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ot(t)):e.value!==""+ot(t)&&(e.value=""+ot(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Fi(e,u,ot(t)):a!=null?Fi(e,u,ot(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ot(o):e.removeAttribute("name")}function ws(e,t,a,l,n,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ki(e);return}a=a!=null?""+ot(a):"",t=t!=null?""+ot(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ki(e)}function Fi(e,t,a){t==="number"&&wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ot(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Cs(e,t,a){if(t!=null&&(t=""+ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ot(a):""}function Ds(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(p(92));if(bt(l)){if(1<l.length)throw Error(p(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ot(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ki(e)}function ka(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rs(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Qd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Hs(e,t,a){if(t!=null&&typeof t!="object")throw Error(p(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Rs(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Rs(e,i,t[i])}function Ii(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(e){return Pd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Dt(){}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ja=null;function zs(e){var t=Ga(e);if(t&&(e=t.stateNode)){var a=e[Ye]||null;e:switch(e=t.stateNode,t.type){case"input":if(Wi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ye]||null;if(!n)throw Error(p(90));Wi(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&$s(l)}break e;case"textarea":Cs(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Xa(e,!!a.multiple,t,!1)}}}var au=!1;function Ls(e,t,a){if(au)return e(t,a);au=!0;try{var l=e(t);return l}finally{if(au=!1,(Za!==null||Ja!==null)&&(bi(),Za&&(t=Za,e=Ja,Ja=Za=null,zs(t),e)))for(t=0;t<e.length;t++)zs(e[t])}}function Dl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ye]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(p(231,t,typeof a));return a}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(Rt)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{lu=!1}var Wt=null,nu=null,Dn=null;function Us(){if(Dn)return Dn;var e,t=nu,a=t.length,l,n="value"in Wt?Wt.value:Wt.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Dn=n.slice(e,1<l?1-l:void 0)}function Rn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function Ns(){return!1}function Qe(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hn:Ns,this.isPropagationStopped=Ns,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zn=Qe(xa),Hl=H({},xa,{view:0,detail:0}),Vd=Qe(Hl),iu,uu,zl,Ln=H({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(iu=e.screenX-zl.screenX,uu=e.screenY-zl.screenY):uu=iu=0,zl=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),qs=Qe(Ln),Xd=H({},Ln,{dataTransfer:0}),kd=Qe(Xd),Zd=H({},Hl,{relatedTarget:0}),ou=Qe(Zd),Jd=H({},xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Kd=Qe(Jd),Wd=H({},xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fd=Qe(Wd),Id=H({},xa,{data:0}),js=Qe(Id),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function su(){return lm}var nm=H({},Hl,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?Rn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=Qe(nm),um=H({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bs=Qe(um),om=H({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),sm=Qe(om),cm=H({},xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=Qe(cm),fm=H({},Ln,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Qe(fm),mm=H({},xa,{newState:0,oldState:0}),hm=Qe(mm),pm=[9,13,27,32],cu=Rt&&"CompositionEvent"in window,Ll=null;Rt&&"documentMode"in document&&(Ll=document.documentMode);var ym=Rt&&"TextEvent"in window&&!Ll,Ys=Rt&&(!cu||Ll&&8<Ll&&11>=Ll),Qs=" ",Gs=!1;function Ps(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function bm(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(Gs=!0,Qs);case"textInput":return e=t.data,e===Qs&&Gs?null:e;default:return null}}function gm(e,t){if(Ka)return e==="compositionend"||!cu&&Ps(e,t)?(e=Us(),Dn=nu=Wt=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ys&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function ks(e,t,a,l){Za?Ja?Ja.push(l):Ja=[l]:Za=l,t=xi(t,"onChange"),0<t.length&&(a=new zn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Ul=null,Nl=null;function Sm(e){Cf(e,0)}function Un(e){var t=Cl(e);if($s(t))return e}function Zs(e,t){if(e==="change")return t}var Js=!1;if(Rt){var ru;if(Rt){var fu="oninput"in document;if(!fu){var Ks=document.createElement("div");Ks.setAttribute("oninput","return;"),fu=typeof Ks.oninput=="function"}ru=fu}else ru=!1;Js=ru&&(!document.documentMode||9<document.documentMode)}function Ws(){Ul&&(Ul.detachEvent("onpropertychange",Fs),Nl=Ul=null)}function Fs(e){if(e.propertyName==="value"&&Un(Nl)){var t=[];ks(t,Nl,e,tu(e)),Ls(Sm,t)}}function Em(e,t,a){e==="focusin"?(Ws(),Ul=t,Nl=a,Ul.attachEvent("onpropertychange",Fs)):e==="focusout"&&Ws()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Un(Nl)}function Am(e,t){if(e==="click")return Un(t)}function xm(e,t){if(e==="input"||e==="change")return Un(t)}function Om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Om;function ql(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Qi.call(t,n)||!Ie(e[n],t[n]))return!1}return!0}function Is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var a=Is(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Is(a)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=wn(e.document)}return t}function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Mm=Rt&&"documentMode"in document&&11>=document.documentMode,Wa=null,mu=null,jl=null,hu=!1;function lc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||Wa==null||Wa!==wn(l)||(l=Wa,"selectionStart"in l&&du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jl&&ql(jl,l)||(jl=l,l=xi(mu,"onSelect"),0<l.length&&(t=new zn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Wa)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Fa={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},pu={},nc={};Rt&&(nc=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function Ma(e){if(pu[e])return pu[e];if(!Fa[e])return e;var t=Fa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in nc)return pu[e]=t[a];return e}var ic=Ma("animationend"),uc=Ma("animationiteration"),oc=Ma("animationstart"),_m=Ma("transitionrun"),$m=Ma("transitionstart"),wm=Ma("transitioncancel"),sc=Ma("transitionend"),cc=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function gt(e,t){cc.set(e,t),Aa(t,[e])}var Nn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],Ia=0,bu=0;function qn(){for(var e=Ia,t=bu=Ia=0;t<e;){var a=ct[t];ct[t++]=null;var l=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var i=ct[t];if(ct[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&rc(a,n,i)}}function jn(e,t,a,l){ct[Ia++]=e,ct[Ia++]=t,ct[Ia++]=a,ct[Ia++]=l,bu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function gu(e,t,a,l){return jn(e,t,a,l),Bn(e)}function _a(e,t){return jn(e,null,null,t),Bn(e)}function rc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Fe(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Bn(e){if(50<sn)throw sn=0,$o=null,Error(p(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var el={};function Cm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new Cm(e,t,a,l)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")vu(e)&&(u=1);else if(typeof e=="string")u=Lh(e,a,_.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,a,t,n),e.elementType=Tt,e.lanes=i,e;case He:return $a(a.children,n,i,t);case $t:u=8,n|=24;break;case Je:return e=et(12,a,t,n|2),e.elementType=Je,e.lanes=i,e;case Et:return e=et(13,a,t,n),e.elementType=Et,e.lanes=i,e;case qe:return e=et(19,a,t,n),e.elementType=qe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:u=10;break e;case Zt:u=9;break e;case ut:u=11;break e;case P:u=14;break e;case je:u=16,l=null;break e}u=29,a=Error(p(130,e===null?"null":typeof e,"")),l=null}return t=et(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function $a(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function Su(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function dc(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Eu(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mc=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var a=mc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ds(t)},mc.set(e,t),t)}return{value:e,source:t,stack:ds(t)}}var tl=[],al=0,Qn=null,Bl=0,ft=[],dt=0,Ft=null,xt=1,Ot="";function zt(e,t){tl[al++]=Bl,tl[al++]=Qn,Qn=e,Bl=t}function hc(e,t,a){ft[dt++]=xt,ft[dt++]=Ot,ft[dt++]=Ft,Ft=e;var l=xt;e=Ot;var n=32-Fe(l)-1;l&=~(1<<n),a+=1;var i=32-Fe(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,xt=1<<32-Fe(t)+n|a<<n|l,Ot=i+e}else xt=1<<i|a<<n|l,Ot=e}function Tu(e){e.return!==null&&(zt(e,1),hc(e,1,0))}function Au(e){for(;e===Qn;)Qn=tl[--al],tl[al]=null,Bl=tl[--al],tl[al]=null;for(;e===Ft;)Ft=ft[--dt],ft[dt]=null,Ot=ft[--dt],ft[dt]=null,xt=ft[--dt],ft[dt]=null}function pc(e,t){ft[dt++]=xt,ft[dt++]=Ot,ft[dt++]=Ft,xt=t.id,Ot=t.overflow,Ft=e}var Me=null,oe=null,V=!1,It=null,mt=!1,xu=Error(p(519));function ea(e){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yl(rt(t,e)),xu}function yc(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Oe]=e,t[Ye]=l,a){case"dialog":Y("cancel",t),Y("close",t);break;case"iframe":case"object":case"embed":Y("load",t);break;case"video":case"audio":for(a=0;a<rn.length;a++)Y(rn[a],t);break;case"source":Y("error",t);break;case"img":case"image":case"link":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"input":Y("invalid",t),ws(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Y("invalid",t);break;case"textarea":Y("invalid",t),Ds(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||zf(t.textContent,a)?(l.popover!=null&&(Y("beforetoggle",t),Y("toggle",t)),l.onScroll!=null&&Y("scroll",t),l.onScrollEnd!=null&&Y("scrollend",t),l.onClick!=null&&(t.onclick=Dt),t=!0):t=!1,t||ea(e,!0)}function bc(e){for(Me=e.return;Me;)switch(Me.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:Me=Me.return}}function ll(e){if(e!==Me)return!1;if(!V)return bc(e),V=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Go(e.type,e.memoizedProps)),a=!a),a&&oe&&ea(e),bc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));oe=Gf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));oe=Gf(e)}else t===27?(t=oe,ha(e.type)?(e=Zo,Zo=null,oe=e):oe=t):oe=Me?pt(e.stateNode.nextSibling):null;return!0}function wa(){oe=Me=null,V=!1}function Ou(){var e=It;return e!==null&&(Xe===null?Xe=e:Xe.push.apply(Xe,e),It=null),e}function Yl(e){It===null?It=[e]:It.push(e)}var Mu=r(null),Ca=null,Lt=null;function ta(e,t,a){x(Mu,t._currentValue),t._currentValue=a}function Ut(e){e._currentValue=Mu.current,E(Mu)}function _u(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function $u(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var s=0;s<t.length;s++)if(o.context===t[s]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),_u(i.return,a,e),l||(u=null);break e}i=o.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(p(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),_u(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function nl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(p(387));if(u=u.memoizedProps,u!==null){var o=n.type;Ie(n.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(n===F.current){if(u=n.alternate,u===null)throw Error(p(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(pn):e=[pn])}n=n.return}e!==null&&$u(t,e,a,l),t.flags|=262144}function Gn(e){for(e=e.firstContext;e!==null;){if(!Ie(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){Ca=e,Lt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _e(e){return gc(Ca,e)}function Pn(e,t){return Ca===null&&Da(e),gc(e,t)}function gc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Lt===null){if(e===null)throw Error(p(308));Lt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Lt=Lt.next=t;return a}var Dm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Rm=M.unstable_scheduleCallback,Hm=M.unstable_NormalPriority,ge={$$typeof:Ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new Dm,data:new Map,refCount:0}}function Ql(e){e.refCount--,e.refCount===0&&Rm(Hm,function(){e.controller.abort()})}var Gl=null,Cu=0,il=0,ul=null;function zm(e,t){if(Gl===null){var a=Gl=[];Cu=0,il=zo(),ul={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Cu++,t.then(vc,vc),t}function vc(){if(--Cu===0&&Gl!==null){ul!==null&&(ul.status="fulfilled");var e=Gl;Gl=null,il=0,ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Lm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Sc=g.S;g.S=function(e,t){lf=Ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&zm(e,t),Sc!==null&&Sc(e,t)};var Ra=r(null);function Du(){var e=Ra.current;return e!==null?e:ue.pooledCache}function Vn(e,t){t===null?x(Ra,Ra.current):x(Ra,t.pool)}function Ec(){var e=Du();return e===null?null:{parent:ge._currentValue,pool:e}}var ol=Error(p(460)),Ru=Error(p(474)),Xn=Error(p(542)),kn={then:function(){}};function Tc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ac(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Dt,Dt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Oc(e),e;default:if(typeof t.status=="string")t.then(Dt,Dt);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Oc(e),e}throw za=t,ol}}function Ha(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(za=a,ol):a}}var za=null;function xc(){if(za===null)throw Error(p(459));var e=za;return za=null,e}function Oc(e){if(e===ol||e===Xn)throw Error(p(483))}var sl=null,Pl=0;function Zn(e){var t=Pl;return Pl+=1,sl===null&&(sl=[]),Ac(sl,e,t)}function Vl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Jn(e,t){throw t.$$typeof===ce?Error(p(525)):(e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mc(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function a(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function l(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function n(f,c){return f=Ht(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=67108866,c):d):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function u(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,c,d,v){return c===null||c.tag!==6?(c=Su(d,f.mode,v),c.return=f,c):(c=n(c,d),c.return=f,c)}function s(f,c,d,v){var w=d.type;return w===He?b(f,c,d.props.children,v,d.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===je&&Ha(w)===c.type)?(c=n(c,d.props),Vl(c,d),c.return=f,c):(c=Yn(d.type,d.key,d.props,null,f.mode,v),Vl(c,d),c.return=f,c)}function m(f,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Eu(d,f.mode,v),c.return=f,c):(c=n(c,d.children||[]),c.return=f,c)}function b(f,c,d,v,w){return c===null||c.tag!==7?(c=$a(d,f.mode,v,w),c.return=f,c):(c=n(c,d),c.return=f,c)}function S(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Su(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ze:return d=Yn(c.type,c.key,c.props,null,f.mode,d),Vl(d,c),d.return=f,d;case Ne:return c=Eu(c,f.mode,d),c.return=f,c;case je:return c=Ha(c),S(f,c,d)}if(bt(c)||Be(c))return c=$a(c,f.mode,d,null),c.return=f,c;if(typeof c.then=="function")return S(f,Zn(c),d);if(c.$$typeof===Ce)return S(f,Pn(f,c),d);Jn(f,c)}return null}function h(f,c,d,v){var w=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return w!==null?null:o(f,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ze:return d.key===w?s(f,c,d,v):null;case Ne:return d.key===w?m(f,c,d,v):null;case je:return d=Ha(d),h(f,c,d,v)}if(bt(d)||Be(d))return w!==null?null:b(f,c,d,v,null);if(typeof d.then=="function")return h(f,c,Zn(d),v);if(d.$$typeof===Ce)return h(f,c,Pn(f,d),v);Jn(f,d)}return null}function y(f,c,d,v,w){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(d)||null,o(c,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ze:return f=f.get(v.key===null?d:v.key)||null,s(c,f,v,w);case Ne:return f=f.get(v.key===null?d:v.key)||null,m(c,f,v,w);case je:return v=Ha(v),y(f,c,d,v,w)}if(bt(v)||Be(v))return f=f.get(d)||null,b(c,f,v,w,null);if(typeof v.then=="function")return y(f,c,d,Zn(v),w);if(v.$$typeof===Ce)return y(f,c,d,Pn(c,v),w);Jn(c,v)}return null}function O(f,c,d,v){for(var w=null,X=null,$=c,q=c=0,G=null;$!==null&&q<d.length;q++){$.index>q?(G=$,$=null):G=$.sibling;var k=h(f,$,d[q],v);if(k===null){$===null&&($=G);break}e&&$&&k.alternate===null&&t(f,$),c=i(k,c,q),X===null?w=k:X.sibling=k,X=k,$=G}if(q===d.length)return a(f,$),V&&zt(f,q),w;if($===null){for(;q<d.length;q++)$=S(f,d[q],v),$!==null&&(c=i($,c,q),X===null?w=$:X.sibling=$,X=$);return V&&zt(f,q),w}for($=l($);q<d.length;q++)G=y($,f,q,d[q],v),G!==null&&(e&&G.alternate!==null&&$.delete(G.key===null?q:G.key),c=i(G,c,q),X===null?w=G:X.sibling=G,X=G);return e&&$.forEach(function(va){return t(f,va)}),V&&zt(f,q),w}function D(f,c,d,v){if(d==null)throw Error(p(151));for(var w=null,X=null,$=c,q=c=0,G=null,k=d.next();$!==null&&!k.done;q++,k=d.next()){$.index>q?(G=$,$=null):G=$.sibling;var va=h(f,$,k.value,v);if(va===null){$===null&&($=G);break}e&&$&&va.alternate===null&&t(f,$),c=i(va,c,q),X===null?w=va:X.sibling=va,X=va,$=G}if(k.done)return a(f,$),V&&zt(f,q),w;if($===null){for(;!k.done;q++,k=d.next())k=S(f,k.value,v),k!==null&&(c=i(k,c,q),X===null?w=k:X.sibling=k,X=k);return V&&zt(f,q),w}for($=l($);!k.done;q++,k=d.next())k=y($,f,q,k.value,v),k!==null&&(e&&k.alternate!==null&&$.delete(k.key===null?q:k.key),c=i(k,c,q),X===null?w=k:X.sibling=k,X=k);return e&&$.forEach(function(Xh){return t(f,Xh)}),V&&zt(f,q),w}function ne(f,c,d,v){if(typeof d=="object"&&d!==null&&d.type===He&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ze:e:{for(var w=d.key;c!==null;){if(c.key===w){if(w=d.type,w===He){if(c.tag===7){a(f,c.sibling),v=n(c,d.props.children),v.return=f,f=v;break e}}else if(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===je&&Ha(w)===c.type){a(f,c.sibling),v=n(c,d.props),Vl(v,d),v.return=f,f=v;break e}a(f,c);break}else t(f,c);c=c.sibling}d.type===He?(v=$a(d.props.children,f.mode,v,d.key),v.return=f,f=v):(v=Yn(d.type,d.key,d.props,null,f.mode,v),Vl(v,d),v.return=f,f=v)}return u(f);case Ne:e:{for(w=d.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){a(f,c.sibling),v=n(c,d.children||[]),v.return=f,f=v;break e}else{a(f,c);break}else t(f,c);c=c.sibling}v=Eu(d,f.mode,v),v.return=f,f=v}return u(f);case je:return d=Ha(d),ne(f,c,d,v)}if(bt(d))return O(f,c,d,v);if(Be(d)){if(w=Be(d),typeof w!="function")throw Error(p(150));return d=w.call(d),D(f,c,d,v)}if(typeof d.then=="function")return ne(f,c,Zn(d),v);if(d.$$typeof===Ce)return ne(f,c,Pn(f,d),v);Jn(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,c!==null&&c.tag===6?(a(f,c.sibling),v=n(c,d),v.return=f,f=v):(a(f,c),v=Su(d,f.mode,v),v.return=f,f=v),u(f)):a(f,c)}return function(f,c,d,v){try{Pl=0;var w=ne(f,c,d,v);return sl=null,w}catch($){if($===ol||$===Xn)throw $;var X=et(29,$,null,f.mode);return X.lanes=v,X.return=f,X}finally{}}}var La=Mc(!0),_c=Mc(!1),aa=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(J&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Bn(e),rc(e,null,a),t}return jn(e,l,t,a),Bn(e)}function Xl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,gs(e,a)}}function Lu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Uu=!1;function kl(){if(Uu){var e=ul;if(e!==null)throw e}}function Zl(e,t,a,l){Uu=!1;var n=e.updateQueue;aa=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var s=o,m=s.next;s.next=null,u===null?i=m:u.next=m,u=s;var b=e.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==u&&(o===null?b.firstBaseUpdate=m:o.next=m,b.lastBaseUpdate=s))}if(i!==null){var S=n.baseState;u=0,b=m=s=null,o=i;do{var h=o.lane&-536870913,y=h!==o.lane;if(y?(Q&h)===h:(l&h)===h){h!==0&&h===il&&(Uu=!0),b!==null&&(b=b.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var O=e,D=o;h=t;var ne=a;switch(D.tag){case 1:if(O=D.payload,typeof O=="function"){S=O.call(ne,S,h);break e}S=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=D.payload,h=typeof O=="function"?O.call(ne,S,h):O,h==null)break e;S=H({},S,h);break e;case 2:aa=!0}}h=o.callback,h!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[h]:y.push(h))}else y={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(m=b=y,s=S):b=b.next=y,u|=h;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;y=o,o=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);b===null&&(s=S),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),ca|=u,e.lanes=u,e.memoizedState=S}}function $c(e,t){if(typeof e!="function")throw Error(p(191,e));e.call(t)}function wc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$c(a[e],t)}var cl=r(null),Kn=r(0);function Cc(e,t){e=Vt,x(Kn,e),x(cl,t),Vt=e|t.baseLanes}function Nu(){x(Kn,Vt),x(cl,cl.current)}function qu(){Vt=Kn.current,E(cl),E(Kn)}var tt=r(null),ht=null;function ia(e){var t=e.alternate;x(ye,ye.current&1),x(tt,e),ht===null&&(t===null||cl.current!==null||t.memoizedState!==null)&&(ht=e)}function ju(e){x(ye,ye.current),x(tt,e),ht===null&&(ht=e)}function Dc(e){e.tag===22?(x(ye,ye.current),x(tt,e),ht===null&&(ht=e)):ua()}function ua(){x(ye,ye.current),x(tt,tt.current)}function at(e){E(tt),ht===e&&(ht=null),E(ye)}var ye=r(0);function Wn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xo(a)||ko(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nt=0,N=null,ae=null,ve=null,Fn=!1,rl=!1,Ua=!1,In=0,Jl=0,fl=null,Um=0;function de(){throw Error(p(321))}function Bu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ie(e[a],t[a]))return!1;return!0}function Yu(e,t,a,l,n,i){return Nt=i,N=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,g.H=e===null||e.memoizedState===null?hr:ao,Ua=!1,i=a(l,n),Ua=!1,rl&&(i=Hc(t,a,l,n)),Rc(e),i}function Rc(e){g.H=Fl;var t=ae!==null&&ae.next!==null;if(Nt=0,ve=ae=N=null,Fn=!1,Jl=0,fl=null,t)throw Error(p(300));e===null||Se||(e=e.dependencies,e!==null&&Gn(e)&&(Se=!0))}function Hc(e,t,a,l){N=e;var n=0;do{if(rl&&(fl=null),Jl=0,rl=!1,25<=n)throw Error(p(301));if(n+=1,ve=ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}g.H=pr,i=t(a,l)}while(rl);return i}function Nm(){var e=g.H,t=e.useState()[0];return t=typeof t.then=="function"?Kl(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(N.flags|=1024),t}function Qu(){var e=In!==0;return In=0,e}function Gu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Pu(e){if(Fn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fn=!1}Nt=0,ve=ae=N=null,rl=!1,Jl=In=0,fl=null}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?N.memoizedState=ve=e:ve=ve.next=e,ve}function be(){if(ae===null){var e=N.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ve===null?N.memoizedState:ve.next;if(t!==null)ve=t,ae=e;else{if(e===null)throw N.alternate===null?Error(p(467)):Error(p(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ve===null?N.memoizedState=ve=e:ve=ve.next=e}return ve}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kl(e){var t=Jl;return Jl+=1,fl===null&&(fl=[]),e=Ac(fl,e,t),t=N,(ve===null?t.memoizedState:ve.next)===null&&(t=t.alternate,g.H=t===null||t.memoizedState===null?hr:ao),e}function ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Kl(e);if(e.$$typeof===Ce)return _e(e)}throw Error(p(438,String(e)))}function Vu(e){var t=null,a=N.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=N.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),N.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ba;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=be();return Xu(t,ae,e)}function Xu(e,t,a){var l=e.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=u=null,s=null,m=t,b=!1;do{var S=m.lane&-536870913;if(S!==m.lane?(Q&S)===S:(Nt&S)===S){var h=m.revertLane;if(h===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),S===il&&(b=!0);else if((Nt&h)===h){m=m.next,h===il&&(b=!0);continue}else S={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(o=s=S,u=i):s=s.next=S,N.lanes|=h,ca|=h;S=m.action,Ua&&a(i,S),i=m.hasEagerState?m.eagerState:a(i,S)}else h={lane:S,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(o=s=h,u=i):s=s.next=h,N.lanes|=S,ca|=S;m=m.next}while(m!==null&&m!==t);if(s===null?u=i:s.next=o,!Ie(i,e.memoizedState)&&(Se=!0,b&&(a=ul,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=s,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ku(e){var t=be(),a=t.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Ie(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function zc(e,t,a){var l=N,n=be(),i=V;if(i){if(a===void 0)throw Error(p(407));a=a()}else a=t();var u=!Ie((ae||n).memoizedState,a);if(u&&(n.memoizedState=a,Se=!0),n=n.queue,Ku(Nc.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||ve!==null&&ve.memoizedState.tag&1){if(l.flags|=2048,dl(9,{destroy:void 0},Uc.bind(null,l,n,a,t),null),ue===null)throw Error(p(349));i||(Nt&127)!==0||Lc(l,t,a)}return a}function Lc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=N.updateQueue,t===null?(t=ei(),N.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Uc(e,t,a,l){t.value=a,t.getSnapshot=l,qc(t)&&jc(e)}function Nc(e,t,a){return a(function(){qc(t)&&jc(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ie(e,a)}catch{return!0}}function jc(e){var t=_a(e,2);t!==null&&ke(t,e,2)}function Zu(e){var t=Le();if(typeof e=="function"){var a=e;if(e=a(),Ua){Jt(!0);try{a()}finally{Jt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function Bc(e,t,a,l){return e.baseState=a,Xu(e,ae,typeof l=="function"?l:qt)}function qm(e,t,a,l,n){if(ii(e))throw Error(p(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};g.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Yc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Yc(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=g.T,u={};g.T=u;try{var o=a(n,l),s=g.S;s!==null&&s(u,o),Qc(e,t,o)}catch(m){Ju(e,t,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),g.T=i}}else try{i=a(n,l),Qc(e,t,i)}catch(m){Ju(e,t,m)}}function Qc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Gc(e,t,l)},function(l){return Ju(e,t,l)}):Gc(e,t,a)}function Gc(e,t,a){t.status="fulfilled",t.value=a,Pc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Yc(e,a)))}function Ju(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Pc(t),t=t.next;while(t!==l)}e.action=null}function Pc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vc(e,t){return t}function Xc(e,t){if(V){var a=ue.formState;if(a!==null){e:{var l=N;if(V){if(oe){t:{for(var n=oe,i=mt;n.nodeType!==8;){if(!i){n=null;break t}if(n=pt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){oe=pt(n.nextSibling),l=n.data==="F!";break e}}ea(l)}l=!1}l&&(t=a[0])}}return a=Le(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vc,lastRenderedState:t},a.queue=l,a=fr.bind(null,N,l),l.dispatch=a,l=Zu(!1),i=to.bind(null,N,!1,l.queue),l=Le(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=qm.bind(null,N,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function kc(e){var t=be();return Zc(t,ae,e)}function Zc(e,t,a){if(t=Xu(e,t,Vc)[0],e=ai(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Kl(t)}catch(u){throw u===ol?Xn:u}else l=t;t=be();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(N.flags|=2048,dl(9,{destroy:void 0},jm.bind(null,n,a),null)),[l,i,e]}function jm(e,t){e.action=t}function Jc(e){var t=be(),a=ae;if(a!==null)return Zc(t,a,e);be(),t=t.memoizedState,a=be();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=N.updateQueue,t===null&&(t=ei(),N.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Kc(){return be().memoizedState}function li(e,t,a,l){var n=Le();N.flags|=e,n.memoizedState=dl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ni(e,t,a,l){var n=be();l=l===void 0?null:l;var i=n.memoizedState.inst;ae!==null&&l!==null&&Bu(l,ae.memoizedState.deps)?n.memoizedState=dl(t,i,a,l):(N.flags|=e,n.memoizedState=dl(1|t,i,a,l))}function Wc(e,t){li(8390656,8,e,t)}function Ku(e,t){ni(2048,8,e,t)}function Bm(e){N.flags|=4;var t=N.updateQueue;if(t===null)t=ei(),N.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Fc(e){var t=be().memoizedState;return Bm({ref:t,nextImpl:e}),function(){if((J&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function Ic(e,t){return ni(4,2,e,t)}function er(e,t){return ni(4,4,e,t)}function tr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ar(e,t,a){a=a!=null?a.concat([e]):null,ni(4,4,tr.bind(null,t,e),a)}function Wu(){}function lr(e,t){var a=be();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Bu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function nr(e,t){var a=be();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Bu(t,l[1]))return l[0];if(l=e(),Ua){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[l,t],l}function Fu(e,t,a){return a===void 0||(Nt&1073741824)!==0&&(Q&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=uf(),N.lanes|=e,ca|=e,a)}function ir(e,t,a,l){return Ie(a,t)?a:cl.current!==null?(e=Fu(e,a,l),Ie(e,t)||(Se=!0),e):(Nt&42)===0||(Nt&1073741824)!==0&&(Q&261930)===0?(Se=!0,e.memoizedState=a):(e=uf(),N.lanes|=e,ca|=e,t)}function ur(e,t,a,l,n){var i=A.p;A.p=i!==0&&8>i?i:8;var u=g.T,o={};g.T=o,to(e,!1,t,a);try{var s=n(),m=g.S;if(m!==null&&m(o,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var b=Lm(s,l);Wl(e,t,b,it(e))}else Wl(e,t,l,it(e))}catch(S){Wl(e,t,{then:function(){},status:"rejected",reason:S},it())}finally{A.p=i,u!==null&&o.types!==null&&(u.types=o.types),g.T=u}}function Ym(){}function Iu(e,t,a,l){if(e.tag!==5)throw Error(p(476));var n=or(e).queue;ur(e,n,t,z,a===null?Ym:function(){return sr(e),a(l)})}function or(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sr(e){var t=or(e);t.next===null&&(t=e.alternate.memoizedState),Wl(e,t.next.queue,{},it())}function eo(){return _e(pn)}function cr(){return be().memoizedState}function rr(){return be().memoizedState}function Qm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=la(a);var l=na(t,e,a);l!==null&&(ke(l,t,a),Xl(l,t,a)),t={cache:wu()},e.payload=t;return}t=t.return}}function Gm(e,t,a){var l=it();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ii(e)?dr(t,a):(a=gu(e,t,a,l),a!==null&&(ke(a,e,l),mr(a,t,l)))}function fr(e,t,a){var l=it();Wl(e,t,a,l)}function Wl(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ii(e))dr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,o=i(u,a);if(n.hasEagerState=!0,n.eagerState=o,Ie(o,u))return jn(e,t,n,0),ue===null&&qn(),!1}catch{}finally{}if(a=gu(e,t,n,l),a!==null)return ke(a,e,l),mr(a,t,l),!0}return!1}function to(e,t,a,l){if(l={lane:2,revertLane:zo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ii(e)){if(t)throw Error(p(479))}else t=gu(e,a,l,2),t!==null&&ke(t,e,2)}function ii(e){var t=e.alternate;return e===N||t!==null&&t===N}function dr(e,t){rl=Fn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function mr(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,gs(e,a)}}var Fl={readContext:_e,use:ti,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};Fl.useEffectEvent=de;var hr={readContext:_e,use:ti,useCallback:function(e,t){return Le().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Wc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,li(4194308,4,tr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){li(4,2,e,t)},useMemo:function(e,t){var a=Le();t=t===void 0?null:t;var l=e();if(Ua){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Le();if(a!==void 0){var n=a(t);if(Ua){Jt(!0);try{a(t)}finally{Jt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Gm.bind(null,N,e),[l.memoizedState,e]},useRef:function(e){var t=Le();return e={current:e},t.memoizedState=e},useState:function(e){e=Zu(e);var t=e.queue,a=fr.bind(null,N,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,t){var a=Le();return Fu(a,e,t)},useTransition:function(){var e=Zu(!1);return e=ur.bind(null,N,e.queue,!0,!1),Le().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=N,n=Le();if(V){if(a===void 0)throw Error(p(407));a=a()}else{if(a=t(),ue===null)throw Error(p(349));(Q&127)!==0||Lc(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Wc(Nc.bind(null,l,i,e),[e]),l.flags|=2048,dl(9,{destroy:void 0},Uc.bind(null,l,i,a,t),null),a},useId:function(){var e=Le(),t=ue.identifierPrefix;if(V){var a=Ot,l=xt;a=(l&~(1<<32-Fe(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=In++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Um++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eo,useFormState:Xc,useActionState:Xc,useOptimistic:function(e){var t=Le();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=to.bind(null,N,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vu,useCacheRefresh:function(){return Le().memoizedState=Qm.bind(null,N)},useEffectEvent:function(e){var t=Le(),a={impl:e};return t.memoizedState=a,function(){if((J&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}},ao={readContext:_e,use:ti,useCallback:lr,useContext:_e,useEffect:Ku,useImperativeHandle:ar,useInsertionEffect:Ic,useLayoutEffect:er,useMemo:nr,useReducer:ai,useRef:Kc,useState:function(){return ai(qt)},useDebugValue:Wu,useDeferredValue:function(e,t){var a=be();return ir(a,ae.memoizedState,e,t)},useTransition:function(){var e=ai(qt)[0],t=be().memoizedState;return[typeof e=="boolean"?e:Kl(e),t]},useSyncExternalStore:zc,useId:cr,useHostTransitionStatus:eo,useFormState:kc,useActionState:kc,useOptimistic:function(e,t){var a=be();return Bc(a,ae,e,t)},useMemoCache:Vu,useCacheRefresh:rr};ao.useEffectEvent=Fc;var pr={readContext:_e,use:ti,useCallback:lr,useContext:_e,useEffect:Ku,useImperativeHandle:ar,useInsertionEffect:Ic,useLayoutEffect:er,useMemo:nr,useReducer:ku,useRef:Kc,useState:function(){return ku(qt)},useDebugValue:Wu,useDeferredValue:function(e,t){var a=be();return ae===null?Fu(a,e,t):ir(a,ae.memoizedState,e,t)},useTransition:function(){var e=ku(qt)[0],t=be().memoizedState;return[typeof e=="boolean"?e:Kl(e),t]},useSyncExternalStore:zc,useId:cr,useHostTransitionStatus:eo,useFormState:Jc,useActionState:Jc,useOptimistic:function(e,t){var a=be();return ae!==null?Bc(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:rr};pr.useEffectEvent=Fc;function lo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:H({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var no={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=it(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(ke(t,e,l),Xl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=it(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(ke(t,e,l),Xl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(ke(t,e,a),Xl(t,e,a))}};function yr(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!ql(a,l)||!ql(n,i):!0}function br(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&no.enqueueReplaceState(t,t.state,null)}function Na(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=H({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function gr(e){Nn(e)}function vr(e){console.error(e)}function Sr(e){Nn(e)}function ui(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Er(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function io(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){ui(e,t)},a}function Tr(e){return e=la(e),e.tag=3,e}function Ar(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Er(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Er(t,a,l),typeof n!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Pm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&nl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return ht===null?gi():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===kn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Do(e,l,n)),!1;case 22:return a.flags|=65536,l===kn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Do(e,l,n)),!1}throw Error(p(435,a.tag))}return Do(e,l,n),gi(),!1}if(V)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==xu&&(e=Error(p(422),{cause:l}),Yl(rt(e,a)))):(l!==xu&&(t=Error(p(423),{cause:l}),Yl(rt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=rt(l,a),n=io(e.stateNode,l,n),Lu(e,n),me!==4&&(me=2)),!1;var i=Error(p(520),{cause:l});if(i=rt(i,a),on===null?on=[i]:on.push(i),me!==4&&(me=2),t===null)return!0;l=rt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=io(a.stateNode,l,e),Lu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ra===null||!ra.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Tr(n),Ar(n,e,a,l),Lu(a,n),!1}a=a.return}while(a!==null);return!1}var uo=Error(p(461)),Se=!1;function $e(e,t,a,l){t.child=e===null?_c(t,null,a,l):La(t,e.child,a,l)}function xr(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var o in l)o!=="ref"&&(u[o]=l[o])}else u=l;return Da(t),l=Yu(e,t,a,u,i,n),o=Qu(),e!==null&&!Se?(Gu(e,t,n),jt(e,t,n)):(V&&o&&Tu(t),t.flags|=1,$e(e,t,l,n),t.child)}function Or(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!vu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Mr(e,t,i,l,n)):(e=Yn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!po(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:ql,a(u,l)&&e.ref===t.ref)return jt(e,t,n)}return t.flags|=1,e=Ht(i,l),e.ref=t.ref,e.return=t,t.child=e}function Mr(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(ql(i,l)&&e.ref===t.ref)if(Se=!1,t.pendingProps=l=i,po(e,n))(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,jt(e,t,n)}return oo(e,t,a,l,n)}function _r(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return $r(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vn(t,i!==null?i.cachePool:null),i!==null?Cc(t,i):Nu(),Dc(t);else return l=t.lanes=536870912,$r(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Vn(t,i.cachePool),Cc(t,i),ua(),t.memoizedState=null):(e!==null&&Vn(t,null),Nu(),ua());return $e(e,t,n,a),t.child}function Il(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $r(e,t,a,l,n){var i=Du();return i=i===null?null:{parent:ge._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Vn(t,null),Nu(),Dc(t),e!==null&&nl(e,t,l,!0),t.childLanes=n,null}function oi(e,t){return t=ci({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wr(e,t,a){return La(t,e.child,null,a),e=oi(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Vm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(V){if(l.mode==="hidden")return e=oi(t,l),t.lanes=536870912,Il(null,e);if(ju(t),(e=oe)?(e=Qf(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:xt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=dc(e),a.return=t,t.child=a,Me=t,oe=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return oi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(ju(t),n)if(t.flags&256)t.flags&=-257,t=wr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(p(558));else if(Se||nl(e,t,a,!1),n=(a&e.childLanes)!==0,Se||n){if(l=ue,l!==null&&(u=vs(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,_a(e,u),ke(l,e,u),uo;gi(),t=wr(e,t,a)}else e=i.treeContext,oe=pt(u.nextSibling),Me=t,V=!0,It=null,mt=!1,e!==null&&pc(t,e),t=oi(t,l),t.flags|=4096;return t}return e=Ht(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function si(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(p(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oo(e,t,a,l,n){return Da(t),a=Yu(e,t,a,l,void 0,n),l=Qu(),e!==null&&!Se?(Gu(e,t,n),jt(e,t,n)):(V&&l&&Tu(t),t.flags|=1,$e(e,t,a,n),t.child)}function Cr(e,t,a,l,n,i){return Da(t),t.updateQueue=null,a=Hc(t,l,a,n),Rc(e),l=Qu(),e!==null&&!Se?(Gu(e,t,i),jt(e,t,i)):(V&&l&&Tu(t),t.flags|=1,$e(e,t,a,i),t.child)}function Dr(e,t,a,l,n){if(Da(t),t.stateNode===null){var i=el,u=a.contextType;typeof u=="object"&&u!==null&&(i=_e(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=no,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Hu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?_e(u):el,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(lo(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&no.enqueueReplaceState(i,i.state,null),Zl(t,l,i,n),kl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,s=Na(a,o);i.props=s;var m=i.context,b=a.contextType;u=el,typeof b=="object"&&b!==null&&(u=_e(b));var S=a.getDerivedStateFromProps;b=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||m!==u)&&br(t,i,l,u),aa=!1;var h=t.memoizedState;i.state=h,Zl(t,l,i,n),kl(),m=t.memoizedState,o||h!==m||aa?(typeof S=="function"&&(lo(t,a,S,l),m=t.memoizedState),(s=aa||yr(t,a,s,l,h,m,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=m),i.props=l,i.state=m,i.context=u,l=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,zu(e,t),u=t.memoizedProps,b=Na(a,u),i.props=b,S=t.pendingProps,h=i.context,m=a.contextType,s=el,typeof m=="object"&&m!==null&&(s=_e(m)),o=a.getDerivedStateFromProps,(m=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||h!==s)&&br(t,i,l,s),aa=!1,h=t.memoizedState,i.state=h,Zl(t,l,i,n),kl();var y=t.memoizedState;u!==S||h!==y||aa||e!==null&&e.dependencies!==null&&Gn(e.dependencies)?(typeof o=="function"&&(lo(t,a,o,l),y=t.memoizedState),(b=aa||yr(t,a,b,l,h,y,s)||e!==null&&e.dependencies!==null&&Gn(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),i.props=l,i.state=y,i.context=s,l=b):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,si(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=La(t,e.child,null,n),t.child=La(t,null,a,n)):$e(e,t,a,n),t.memoizedState=i.state,e=t.child):e=jt(e,t,n),e}function Rr(e,t,a,l){return wa(),t.flags|=256,$e(e,t,a,l),t.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function co(e){return{baseLanes:e,cachePool:Ec()}}function ro(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function Hr(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(ye.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(V){if(n?ia(t):ua(),(e=oe)?(e=Qf(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:xt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=dc(e),a.return=t,t.child=a,Me=t,oe=null)):e=null,e===null)throw ea(t);return ko(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(ua(),n=t.mode,o=ci({mode:"hidden",children:o},n),l=$a(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=co(a),l.childLanes=ro(e,u,a),t.memoizedState=so,Il(null,l)):(ia(t),fo(t,o))}var s=e.memoizedState;if(s!==null&&(o=s.dehydrated,o!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=mo(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),o=l.fallback,n=t.mode,l=ci({mode:"visible",children:l.children},n),o=$a(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,La(t,e.child,null,a),l=t.child,l.memoizedState=co(a),l.childLanes=ro(e,u,a),t.memoizedState=so,t=Il(null,l));else if(ia(t),ko(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var m=u.dgst;u=m,l=Error(p(419)),l.stack="",l.digest=u,Yl({value:l,source:null,stack:null}),t=mo(e,t,a)}else if(Se||nl(e,t,a,!1),u=(a&e.childLanes)!==0,Se||u){if(u=ue,u!==null&&(l=vs(u,a),l!==0&&l!==s.retryLane))throw s.retryLane=l,_a(e,l),ke(u,e,l),uo;Xo(o)||gi(),t=mo(e,t,a)}else Xo(o)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,oe=pt(o.nextSibling),Me=t,V=!0,It=null,mt=!1,e!==null&&pc(t,e),t=fo(t,l.children),t.flags|=4096);return t}return n?(ua(),o=l.fallback,n=t.mode,s=e.child,m=s.sibling,l=Ht(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,m!==null?o=Ht(m,o):(o=$a(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,Il(null,l),l=t.child,o=e.child.memoizedState,o===null?o=co(a):(n=o.cachePool,n!==null?(s=ge._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Ec(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=ro(e,u,a),t.memoizedState=so,Il(e.child,l)):(ia(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function fo(e,t){return t=ci({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ci(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mo(e,t,a){return La(t,e.child,null,a),e=fo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zr(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),_u(e.return,t,a)}function ho(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Lr(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=ye.current,o=(u&2)!==0;if(o?(u=u&1|2,t.flags|=128):u&=1,x(ye,u),$e(e,t,l,a),l=V?Bl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zr(e,a,t);else if(e.tag===19)zr(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Wn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ho(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Wn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ho(t,!0,a,null,i,l);break;case"together":ho(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(nl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function po(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gn(e)))}function Xm(e,t,a){switch(t.tag){case 3:ze(t,t.stateNode.containerInfo),ta(t,ge,e.memoizedState.cache),wa();break;case 27:case 5:Ol(t);break;case 4:ze(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ju(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Hr(e,t,a):(ia(t),e=jt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(nl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Lr(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),x(ye,ye.current),l)break;return null;case 22:return t.lanes=0,_r(e,t,a,t.pendingProps);case 24:ta(t,ge,e.memoizedState.cache)}return jt(e,t,a)}function Ur(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!po(e,a)&&(t.flags&128)===0)return Se=!1,Xm(e,t,a);Se=(e.flags&131072)!==0}else Se=!1,V&&(t.flags&1048576)!==0&&hc(t,Bl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ha(t.elementType),t.type=e,typeof e=="function")vu(e)?(l=Na(e,l),t.tag=1,t=Dr(null,t,e,l,a)):(t.tag=0,t=oo(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ut){t.tag=11,t=xr(null,t,e,l,a);break e}else if(n===P){t.tag=14,t=Or(null,t,e,l,a);break e}}throw t=wt(e)||e,Error(p(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Na(l,t.pendingProps),Dr(e,t,l,n,a);case 3:e:{if(ze(t,t.stateNode.containerInfo),e===null)throw Error(p(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,zu(e,t),Zl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ta(t,ge,l),l!==i.cache&&$u(t,[ge],a,!0),kl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Rr(e,t,l,a);break e}else if(l!==n){n=rt(Error(p(424)),t),Yl(n),t=Rr(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=pt(e.firstChild),Me=t,V=!0,It=null,mt=!0,a=_c(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wa(),l===n){t=jt(e,t,a);break e}$e(e,t,l,a)}t=t.child}return t;case 26:return si(e,t),e===null?(a=Zf(t.type,null,t.pendingProps,null))?t.memoizedState=a:V||(a=t.type,e=t.pendingProps,l=Oi(j.current).createElement(a),l[Oe]=t,l[Ye]=e,we(l,a,e),Ae(l),t.stateNode=l):t.memoizedState=Zf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ol(t),e===null&&V&&(l=t.stateNode=Vf(t.type,t.pendingProps,j.current),Me=t,mt=!0,n=oe,ha(t.type)?(Zo=n,oe=pt(l.firstChild)):oe=n),$e(e,t,t.pendingProps.children,a),si(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((n=l=oe)&&(l=Th(l,t.type,t.pendingProps,mt),l!==null?(t.stateNode=l,Me=t,oe=pt(l.firstChild),mt=!1,n=!0):n=!1),n||ea(t)),Ol(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Go(n,i)?l=null:u!==null&&Go(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Yu(e,t,Nm,null,null,a),pn._currentValue=n),si(e,t),$e(e,t,l,a),t.child;case 6:return e===null&&V&&((e=a=oe)&&(a=Ah(a,t.pendingProps,mt),a!==null?(t.stateNode=a,Me=t,oe=null,e=!0):e=!1),e||ea(t)),null;case 13:return Hr(e,t,a);case 4:return ze(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=La(t,null,l,a):$e(e,t,l,a),t.child;case 11:return xr(e,t,t.type,t.pendingProps,a);case 7:return $e(e,t,t.pendingProps,a),t.child;case 8:return $e(e,t,t.pendingProps.children,a),t.child;case 12:return $e(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),$e(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Da(t),n=_e(n),l=l(n),t.flags|=1,$e(e,t,l,a),t.child;case 14:return Or(e,t,t.type,t.pendingProps,a);case 15:return Mr(e,t,t.type,t.pendingProps,a);case 19:return Lr(e,t,a);case 31:return Vm(e,t,a);case 22:return _r(e,t,a,t.pendingProps);case 24:return Da(t),l=_e(ge),e===null?(n=Du(),n===null&&(n=ue,i=wu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Hu(t),ta(t,ge,n)):((e.lanes&a)!==0&&(zu(e,t),Zl(t,null,null,a),kl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,ge,l)):(l=i.cache,ta(t,ge,l),l!==n.cache&&$u(t,[ge],a,!0))),$e(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function Bt(e){e.flags|=4}function yo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(rf())e.flags|=8192;else throw za=kn,Ru}else e.flags&=-16777217}function Nr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!If(t))if(rf())e.flags|=8192;else throw za=kn,Ru}function ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ys():536870912,e.lanes|=t,yl|=t)}function en(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function km(e,t,a){var l=t.pendingProps;switch(Au(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ut(ge),pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(t)?Bt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ou())),se(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Bt(t),i!==null?(se(t),Nr(t,i)):(se(t),yo(t,n,null,l,a))):i?i!==e.memoizedState?(Bt(t),se(t),Nr(t,i)):(se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Bt(t),se(t),yo(t,n,e,l,a)),null;case 27:if(En(t),a=j.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Bt(t);else{if(!l){if(t.stateNode===null)throw Error(p(166));return se(t),null}e=_.current,ll(t)?yc(t):(e=Vf(n,l,a),t.stateNode=e,Bt(t))}return se(t),null;case 5:if(En(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Bt(t);else{if(!l){if(t.stateNode===null)throw Error(p(166));return se(t),null}if(i=_.current,ll(t))yc(t);else{var u=Oi(j.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Oe]=t,i[Ye]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(we(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Bt(t)}}return se(t),yo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Bt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(p(166));if(e=j.current,ll(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Me,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Oe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||zf(e.nodeValue,a)),e||ea(t,!0)}else e=Oi(e).createTextNode(l),e[Oe]=t,t.stateNode=e}return se(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ll(t),a!==null){if(e===null){if(!l)throw Error(p(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[Oe]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),e=!1}else a=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(p(558))}return se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(p(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(p(317));n[Oe]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),n=!1}else n=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ri(t,t.updateQueue),se(t),null);case 4:return pe(),e===null&&qo(t.stateNode.containerInfo),se(t),null;case 10:return Ut(t.type),se(t),null;case 19:if(E(ye),l=t.memoizedState,l===null)return se(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)en(l,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Wn(e),i!==null){for(t.flags|=128,en(l,!1),e=i.updateQueue,t.updateQueue=e,ri(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fc(a,e),a=a.sibling;return x(ye,ye.current&1|2),V&&zt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Ke()>pi&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304)}else{if(!n)if(e=Wn(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ri(t,e),en(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!V)return se(t),null}else 2*Ke()-l.renderingStartTime>pi&&a!==536870912&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ke(),e.sibling=null,a=ye.current,x(ye,n?a&1|2:a&1),V&&zt(t,l.treeForkCount),e):(se(t),null);case 22:case 23:return at(t),qu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),a=t.updateQueue,a!==null&&ri(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&E(Ra),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ut(ge),se(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function Zm(e,t){switch(Au(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ut(ge),pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(p(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(ye),null;case 4:return pe(),null;case 10:return Ut(t.type),null;case 22:case 23:return at(t),qu(),e!==null&&E(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ut(ge),null;case 25:return null;default:return null}}function qr(e,t){switch(Au(t),t.tag){case 3:Ut(ge),pe();break;case 26:case 27:case 5:En(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:E(ye);break;case 10:Ut(t.type);break;case 22:case 23:at(t),qu(),e!==null&&E(Ra);break;case 24:Ut(ge)}}function tn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(o){ee(t,t.return,o)}}function oa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,n=t;var s=a,m=o;try{m()}catch(b){ee(n,s,b)}}}l=l.next}while(l!==i)}}catch(b){ee(t,t.return,b)}}function jr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{wc(t,a)}catch(l){ee(e,e.return,l)}}}function Br(e,t,a){a.props=Na(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ee(e,t,l)}}function an(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ee(e,t,n)}}function Mt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ee(e,t,n)}else a.current=null}function Yr(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ee(e,e.return,n)}}function bo(e,t,a){try{var l=e.stateNode;yh(l,e.type,a,t),l[Ye]=t}catch(n){ee(e,e.return,n)}}function Qr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Dt));else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vo(e,t,a),e=e.sibling;e!==null;)vo(e,t,a),e=e.sibling}function fi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fi(e,t,a),e=e.sibling;e!==null;)fi(e,t,a),e=e.sibling}function Gr(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);we(t,l,a),t[Oe]=e,t[Ye]=a}catch(i){ee(e,e.return,i)}}var Yt=!1,Ee=!1,So=!1,Pr=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Jm(e,t){if(e=e.containerInfo,Yo=Ri,e=ac(e),du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,o=-1,s=-1,m=0,b=0,S=e,h=null;t:for(;;){for(var y;S!==a||n!==0&&S.nodeType!==3||(o=u+n),S!==i||l!==0&&S.nodeType!==3||(s=u+l),S.nodeType===3&&(u+=S.nodeValue.length),(y=S.firstChild)!==null;)h=S,S=y;for(;;){if(S===e)break t;if(h===a&&++m===n&&(o=u),h===i&&++b===l&&(s=u),(y=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=y}a=o===-1||s===-1?null:{start:o,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qo={focusedElem:e,selectionRange:a},Ri=!1,xe=t;xe!==null;)if(t=xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xe=e;else for(;xe!==null;){switch(t=xe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var O=Na(a.type,n);e=l.getSnapshotBeforeUpdate(O,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(D){ee(a,a.return,D)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(p(163))}if(e=t.sibling,e!==null){e.return=t.return,xe=e;break}xe=t.return}}function Vr(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Gt(e,a),l&4&&tn(5,a);break;case 1:if(Gt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ee(a,a.return,u)}else{var n=Na(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ee(a,a.return,u)}}l&64&&jr(a),l&512&&an(a,a.return);break;case 3:if(Gt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{wc(e,t)}catch(u){ee(a,a.return,u)}}break;case 27:t===null&&l&4&&Gr(a);case 26:case 5:Gt(e,a),t===null&&l&4&&Yr(a),l&512&&an(a,a.return);break;case 12:Gt(e,a);break;case 31:Gt(e,a),l&4&&Zr(e,a);break;case 13:Gt(e,a),l&4&&Jr(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nh.bind(null,a),xh(e,a))));break;case 22:if(l=a.memoizedState!==null||Yt,!l){t=t!==null&&t.memoizedState!==null||Ee,n=Yt;var i=Ee;Yt=l,(Ee=t)&&!i?Pt(e,a,(a.subtreeFlags&8772)!==0):Gt(e,a),Yt=n,Ee=i}break;case 30:break;default:Gt(e,a)}}function Xr(e){var t=e.alternate;t!==null&&(e.alternate=null,Xr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ji(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Ge=!1;function Qt(e,t,a){for(a=a.child;a!==null;)kr(e,t,a),a=a.sibling}function kr(e,t,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Ml,a)}catch{}switch(a.tag){case 26:Ee||Mt(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ee||Mt(a,t);var l=re,n=Ge;ha(a.type)&&(re=a.stateNode,Ge=!1),Qt(e,t,a),dn(a.stateNode),re=l,Ge=n;break;case 5:Ee||Mt(a,t);case 6:if(l=re,n=Ge,re=null,Qt(e,t,a),re=l,Ge=n,re!==null)if(Ge)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(i){ee(a,t,i)}else try{re.removeChild(a.stateNode)}catch(i){ee(a,t,i)}break;case 18:re!==null&&(Ge?(e=re,Bf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xl(e)):Bf(re,a.stateNode));break;case 4:l=re,n=Ge,re=a.stateNode.containerInfo,Ge=!0,Qt(e,t,a),re=l,Ge=n;break;case 0:case 11:case 14:case 15:oa(2,a,t),Ee||oa(4,a,t),Qt(e,t,a);break;case 1:Ee||(Mt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Br(a,t,l)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Ee=(l=Ee)||a.memoizedState!==null,Qt(e,t,a),Ee=l;break;default:Qt(e,t,a)}}function Zr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xl(e)}catch(a){ee(t,t.return,a)}}}function Jr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xl(e)}catch(a){ee(t,t.return,a)}}function Km(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Pr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Pr),t;default:throw Error(p(435,e.tag))}}function di(e,t){var a=Km(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=ih.bind(null,e,l);l.then(n,n)}})}function Pe(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(ha(o.type)){re=o.stateNode,Ge=!1;break e}break;case 5:re=o.stateNode,Ge=!1;break e;case 3:case 4:re=o.stateNode.containerInfo,Ge=!0;break e}o=o.return}if(re===null)throw Error(p(160));kr(i,u,n),re=null,Ge=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kr(t,e),t=t.sibling}var vt=null;function Kr(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pe(t,e),Ve(e),l&4&&(oa(3,e,e.return),tn(3,e),oa(5,e,e.return));break;case 1:Pe(t,e),Ve(e),l&512&&(Ee||a===null||Mt(a,a.return)),l&64&&Yt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=vt;if(Pe(t,e),Ve(e),l&512&&(Ee||a===null||Mt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[wl]||i[Oe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),we(i,l,a),i[Oe]=e,Ae(i),l=i;break e;case"link":var u=Wf("link","href",n).get(l+(a.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(o,1);break t}}i=n.createElement(l),we(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Wf("meta","content",n).get(l+(a.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(o,1);break t}}i=n.createElement(l),we(i,l,a),n.head.appendChild(i);break;default:throw Error(p(468,l))}i[Oe]=e,Ae(i),l=i}e.stateNode=l}else Ff(n,e.type,e.stateNode);else e.stateNode=Kf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Ff(n,e.type,e.stateNode):Kf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&bo(e,e.memoizedProps,a.memoizedProps)}break;case 27:Pe(t,e),Ve(e),l&512&&(Ee||a===null||Mt(a,a.return)),a!==null&&l&4&&bo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Pe(t,e),Ve(e),l&512&&(Ee||a===null||Mt(a,a.return)),e.flags&32){n=e.stateNode;try{ka(n,"")}catch(O){ee(e,e.return,O)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,bo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(So=!0);break;case 6:if(Pe(t,e),Ve(e),l&4){if(e.stateNode===null)throw Error(p(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(O){ee(e,e.return,O)}}break;case 3:if($i=null,n=vt,vt=Mi(t.containerInfo),Pe(t,e),vt=n,Ve(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{xl(t.containerInfo)}catch(O){ee(e,e.return,O)}So&&(So=!1,Wr(e));break;case 4:l=vt,vt=Mi(e.stateNode.containerInfo),Pe(t,e),Ve(e),vt=l;break;case 12:Pe(t,e),Ve(e);break;case 31:Pe(t,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,di(e,l)));break;case 13:Pe(t,e),Ve(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hi=Ke()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,di(e,l)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,m=Yt,b=Ee;if(Yt=m||n,Ee=b||s,Pe(t,e),Ee=b,Yt=m,Ve(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Yt||Ee||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=s.stateNode;var S=s.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(O){ee(s,s.return,O)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(O){ee(s,s.return,O)}}}else if(t.tag===18){if(a===null){s=t;try{var y=s.stateNode;n?Yf(y,!0):Yf(s.stateNode,!1)}catch(O){ee(s,s.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,di(e,a))));break;case 19:Pe(t,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,di(e,l)));break;case 30:break;case 21:break;default:Pe(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Qr(l)){a=l;break}l=l.return}if(a==null)throw Error(p(160));switch(a.tag){case 27:var n=a.stateNode,i=go(e);fi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(ka(u,""),a.flags&=-33);var o=go(e);fi(e,o,u);break;case 3:case 4:var s=a.stateNode.containerInfo,m=go(e);vo(e,m,s);break;default:throw Error(p(161))}}catch(b){ee(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Gt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vr(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),qa(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Br(t,t.return,a),qa(t);break;case 27:dn(t.stateNode);case 26:case 5:Mt(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function Pt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Pt(n,i,a),tn(4,i);break;case 1:if(Pt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){ee(l,l.return,m)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)$c(s[n],o)}catch(m){ee(l,l.return,m)}}a&&u&64&&jr(i),an(i,i.return);break;case 27:Gr(i);case 26:case 5:Pt(n,i,a),a&&l===null&&u&4&&Yr(i),an(i,i.return);break;case 12:Pt(n,i,a);break;case 31:Pt(n,i,a),a&&u&4&&Zr(n,i);break;case 13:Pt(n,i,a),a&&u&4&&Jr(n,i);break;case 22:i.memoizedState===null&&Pt(n,i,a),an(i,i.return);break;case 30:break;default:Pt(n,i,a)}t=t.sibling}}function Eo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ql(a))}function To(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e))}function St(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fr(e,t,a,l),t=t.sibling}function Fr(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,l),n&2048&&tn(9,t);break;case 1:St(e,t,a,l);break;case 3:St(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e)));break;case 12:if(n&2048){St(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ee(t,t.return,s)}}else St(e,t,a,l);break;case 31:St(e,t,a,l);break;case 13:St(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?St(e,t,a,l):ln(e,t):i._visibility&2?St(e,t,a,l):(i._visibility|=2,ml(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Eo(u,t);break;case 24:St(e,t,a,l),n&2048&&To(t.alternate,t);break;default:St(e,t,a,l)}}function ml(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,o=a,s=l,m=u.flags;switch(u.tag){case 0:case 11:case 15:ml(i,u,o,s,n),tn(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?ml(i,u,o,s,n):ln(i,u):(b._visibility|=2,ml(i,u,o,s,n)),n&&m&2048&&Eo(u.alternate,u);break;case 24:ml(i,u,o,s,n),n&&m&2048&&To(u.alternate,u);break;default:ml(i,u,o,s,n)}t=t.sibling}}function ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:ln(a,l),n&2048&&Eo(l.alternate,l);break;case 24:ln(a,l),n&2048&&To(l.alternate,l);break;default:ln(a,l)}t=t.sibling}}var nn=8192;function hl(e,t,a){if(e.subtreeFlags&nn)for(e=e.child;e!==null;)Ir(e,t,a),e=e.sibling}function Ir(e,t,a){switch(e.tag){case 26:hl(e,t,a),e.flags&nn&&e.memoizedState!==null&&Uh(a,vt,e.memoizedState,e.memoizedProps);break;case 5:hl(e,t,a);break;case 3:case 4:var l=vt;vt=Mi(e.stateNode.containerInfo),hl(e,t,a),vt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=nn,nn=16777216,hl(e,t,a),nn=l):hl(e,t,a));break;default:hl(e,t,a)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];xe=l,af(l,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&oa(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mi(e)):un(e);break;default:un(e)}}function mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];xe=l,af(l,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),mi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mi(t));break;default:mi(t)}e=e.sibling}}function af(e,t){for(;xe!==null;){var a=xe;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ql(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,xe=l;else e:for(a=e;xe!==null;){l=xe;var n=l.sibling,i=l.return;if(Xr(l),l===a){xe=null;break e}if(n!==null){n.return=i,xe=n;break e}xe=i}}}var Wm={getCacheForType:function(e){var t=_e(ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return _e(ge).controller.signal}},Fm=typeof WeakMap=="function"?WeakMap:Map,J=0,ue=null,B=null,Q=0,I=0,lt=null,sa=!1,pl=!1,Ao=!1,Vt=0,me=0,ca=0,ja=0,xo=0,nt=0,yl=0,on=null,Xe=null,Oo=!1,hi=0,lf=0,pi=1/0,yi=null,ra=null,Te=0,fa=null,bl=null,Xt=0,Mo=0,_o=null,nf=null,sn=0,$o=null;function it(){return(J&2)!==0&&Q!==0?Q&-Q:g.T!==null?zo():Ss()}function uf(){if(nt===0)if((Q&536870912)===0||V){var e=xn;xn<<=1,(xn&3932160)===0&&(xn=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function ke(e,t,a){(e===ue&&(I===2||I===9)||e.cancelPendingCommit!==null)&&(gl(e,0),da(e,Q,nt,!1)),$l(e,a),((J&2)===0||e!==ue)&&(e===ue&&((J&2)===0&&(ja|=a),me===4&&da(e,Q,nt,!1)),_t(e))}function of(e,t,a){if((J&6)!==0)throw Error(p(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||_l(e,t),n=l?th(e,t):Co(e,t,!0),i=l;do{if(n===0){pl&&!l&&da(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Im(a)){n=Co(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var o=e;n=on;var s=o.current.memoizedState.isDehydrated;if(s&&(gl(o,u).flags|=256),u=Co(o,u,!1),u!==2){if(Ao&&!s){o.errorRecoveryDisabledLanes|=i,ja|=i,n=4;break e}i=Xe,Xe=n,i!==null&&(Xe===null?Xe=i:Xe.push.apply(Xe,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){gl(e,0),da(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:da(l,t,nt,!sa);break e;case 2:Xe=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(n=hi+300-Ke(),10<n)){if(da(l,t,nt,!sa),Mn(l,0,!0)!==0)break e;Xt=t,l.timeoutHandle=qf(sf.bind(null,l,a,Xe,yi,Oo,t,nt,ja,yl,sa,i,"Throttled",-0,0),n);break e}sf(l,a,Xe,yi,Oo,t,nt,ja,yl,sa,i,null,-0,0)}}break}while(!0);_t(e)}function sf(e,t,a,l,n,i,u,o,s,m,b,S,h,y){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Dt},Ir(t,i,S);var O=(i&62914560)===i?hi-Ke():(i&4194048)===i?lf-Ke():0;if(O=Nh(S,O),O!==null){Xt=i,e.cancelPendingCommit=O(yf.bind(null,e,t,i,a,l,n,u,o,s,b,S,null,h,y)),da(e,i,u,!m);return}}yf(e,t,i,a,l,n,u,o,s)}function Im(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Ie(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,a,l){t&=~xo,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Fe(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&bs(e,a,t)}function bi(){return(J&6)===0?(cn(0),!1):!0}function wo(){if(B!==null){if(I===0)var e=B.return;else e=B,Lt=Ca=null,Pu(e),sl=null,Pl=0,e=B;for(;e!==null;)qr(e.alternate,e),e=e.return;B=null}}function gl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,vh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xt=0,wo(),ue=e,B=a=Ht(e.current,null),Q=t,I=0,lt=null,sa=!1,pl=_l(e,t),Ao=!1,yl=nt=xo=ja=ca=me=0,Xe=on=null,Oo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Fe(l),i=1<<n;t|=e[n],l&=~i}return Vt=t,qn(),a}function cf(e,t){N=null,g.H=Fl,t===ol||t===Xn?(t=xc(),I=3):t===Ru?(t=xc(),I=4):I=t===uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,B===null&&(me=1,ui(e,rt(t,e.current)))}function rf(){var e=tt.current;return e===null?!0:(Q&4194048)===Q?ht===null:(Q&62914560)===Q||(Q&536870912)!==0?e===ht:!1}function ff(){var e=g.H;return g.H=Fl,e===null?Fl:e}function df(){var e=g.A;return g.A=Wm,e}function gi(){me=4,sa||(Q&4194048)!==Q&&tt.current!==null||(pl=!0),(ca&134217727)===0&&(ja&134217727)===0||ue===null||da(ue,Q,nt,!1)}function Co(e,t,a){var l=J;J|=2;var n=ff(),i=df();(ue!==e||Q!==t)&&(yi=null,gl(e,t)),t=!1;var u=me;e:do try{if(I!==0&&B!==null){var o=B,s=lt;switch(I){case 8:wo(),u=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=I;if(I=0,lt=null,vl(e,o,s,m),a&&pl){u=0;break e}break;default:m=I,I=0,lt=null,vl(e,o,s,m)}}eh(),u=me;break}catch(b){cf(e,b)}while(!0);return t&&e.shellSuspendCounter++,Lt=Ca=null,J=l,g.H=n,g.A=i,B===null&&(ue=null,Q=0,qn()),u}function eh(){for(;B!==null;)mf(B)}function th(e,t){var a=J;J|=2;var l=ff(),n=df();ue!==e||Q!==t?(yi=null,pi=Ke()+500,gl(e,t)):pl=_l(e,t);e:do try{if(I!==0&&B!==null){t=B;var i=lt;t:switch(I){case 1:I=0,lt=null,vl(e,t,i,1);break;case 2:case 9:if(Tc(i)){I=0,lt=null,hf(t);break}t=function(){I!==2&&I!==9||ue!==e||(I=7),_t(e)},i.then(t,t);break e;case 3:I=7;break e;case 4:I=5;break e;case 7:Tc(i)?(I=0,lt=null,hf(t)):(I=0,lt=null,vl(e,t,i,7));break;case 5:var u=null;switch(B.tag){case 26:u=B.memoizedState;case 5:case 27:var o=B;if(u?If(u):o.stateNode.complete){I=0,lt=null;var s=o.sibling;if(s!==null)B=s;else{var m=o.return;m!==null?(B=m,vi(m)):B=null}break t}}I=0,lt=null,vl(e,t,i,5);break;case 6:I=0,lt=null,vl(e,t,i,6);break;case 8:wo(),me=6;break e;default:throw Error(p(462))}}ah();break}catch(b){cf(e,b)}while(!0);return Lt=Ca=null,g.H=l,g.A=n,J=a,B!==null?0:(ue=null,Q=0,qn(),me)}function ah(){for(;B!==null&&!Od();)mf(B)}function mf(e){var t=Ur(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?vi(e):B=t}function hf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Cr(a,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Cr(a,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:Pu(t);default:qr(a,t),t=B=fc(t,Vt),t=Ur(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?vi(e):B=t}function vl(e,t,a,l){Lt=Ca=null,Pu(t),sl=null,Pl=0;var n=t.return;try{if(Pm(e,n,t,a,Q)){me=1,ui(e,rt(a,e.current)),B=null;return}}catch(i){if(n!==null)throw B=n,i;me=1,ui(e,rt(a,e.current)),B=null;return}t.flags&32768?(V||l===1?e=!0:pl||(Q&536870912)!==0?e=!1:(sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),pf(t,e)):vi(t)}function vi(e){var t=e;do{if((t.flags&32768)!==0){pf(t,sa);return}e=t.return;var a=km(t.alternate,t,Vt);if(a!==null){B=a;return}if(t=t.sibling,t!==null){B=t;return}B=t=e}while(t!==null);me===0&&(me=5)}function pf(e,t){do{var a=Zm(e.alternate,e);if(a!==null){a.flags&=32767,B=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){B=e;return}B=e=a}while(e!==null);me=6,B=null}function yf(e,t,a,l,n,i,u,o,s){e.cancelPendingCommit=null;do Si();while(Te!==0);if((J&6)!==0)throw Error(p(327));if(t!==null){if(t===e.current)throw Error(p(177));if(i=t.lanes|t.childLanes,i|=bu,Ld(e,a,i,u,o,s),e===ue&&(B=ue=null,Q=0),bl=t,fa=e,Xt=a,Mo=i,_o=n,nf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uh(Tn,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=g.T,g.T=null,n=A.p,A.p=2,u=J,J|=4;try{Jm(e,t,a)}finally{J=u,A.p=n,g.T=l}}Te=1,bf(),gf(),vf()}}function bf(){if(Te===1){Te=0;var e=fa,t=bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=g.T,g.T=null;var l=A.p;A.p=2;var n=J;J|=4;try{Kr(t,e);var i=Qo,u=ac(e.containerInfo),o=i.focusedElem,s=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&tc(o.ownerDocument.documentElement,o)){if(s!==null&&du(o)){var m=s.start,b=s.end;if(b===void 0&&(b=m),"selectionStart"in o)o.selectionStart=m,o.selectionEnd=Math.min(b,o.value.length);else{var S=o.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var y=h.getSelection(),O=o.textContent.length,D=Math.min(s.start,O),ne=s.end===void 0?D:Math.min(s.end,O);!y.extend&&D>ne&&(u=ne,ne=D,D=u);var f=ec(o,D),c=ec(o,ne);if(f&&c&&(y.rangeCount!==1||y.anchorNode!==f.node||y.anchorOffset!==f.offset||y.focusNode!==c.node||y.focusOffset!==c.offset)){var d=S.createRange();d.setStart(f.node,f.offset),y.removeAllRanges(),D>ne?(y.addRange(d),y.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),y.addRange(d))}}}}for(S=[],y=o;y=y.parentNode;)y.nodeType===1&&S.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<S.length;o++){var v=S[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Ri=!!Yo,Qo=Yo=null}finally{J=n,A.p=l,g.T=a}}e.current=t,Te=2}}function gf(){if(Te===2){Te=0;var e=fa,t=bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=g.T,g.T=null;var l=A.p;A.p=2;var n=J;J|=4;try{Vr(e,t.alternate,t)}finally{J=n,A.p=l,g.T=a}}Te=3}}function vf(){if(Te===4||Te===3){Te=0,Md();var e=fa,t=bl,a=Xt,l=nf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,bl=fa=null,Sf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ra=null),ki(a),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=g.T,n=A.p,A.p=2,g.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var o=l[u];i(o.value,{componentStack:o.stack})}}finally{g.T=t,A.p=n}}(Xt&3)!==0&&Si(),_t(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===$o?sn++:(sn=0,$o=e):sn=0,cn(0)}}function Sf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ql(t)))}function Si(){return bf(),gf(),vf(),Ef()}function Ef(){if(Te!==5)return!1;var e=fa,t=Mo;Mo=0;var a=ki(Xt),l=g.T,n=A.p;try{A.p=32>a?32:a,g.T=null,a=_o,_o=null;var i=fa,u=Xt;if(Te=0,bl=fa=null,Xt=0,(J&6)!==0)throw Error(p(331));var o=J;if(J|=4,tf(i.current),Fr(i,i.current,u,a),J=o,cn(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Ml,i)}catch{}return!0}finally{A.p=n,g.T=l,Sf(e,t)}}function Tf(e,t,a){t=rt(a,t),t=io(e.stateNode,t,2),e=na(e,t,2),e!==null&&($l(e,2),_t(e))}function ee(e,t,a){if(e.tag===3)Tf(e,e,a);else for(;t!==null;){if(t.tag===3){Tf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ra===null||!ra.has(l))){e=rt(a,e),a=Tr(2),l=na(t,a,2),l!==null&&(Ar(a,l,t,e),$l(l,2),_t(l));break}}t=t.return}}function Do(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Fm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Ao=!0,n.add(a),e=lh.bind(null,e,t,a),t.then(e,e))}function lh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ue===e&&(Q&a)===a&&(me===4||me===3&&(Q&62914560)===Q&&300>Ke()-hi?(J&2)===0&&gl(e,0):xo|=a,yl===Q&&(yl=0)),_t(e)}function Af(e,t){t===0&&(t=ys()),e=_a(e,t),e!==null&&($l(e,t),_t(e))}function nh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Af(e,a)}function ih(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(p(314))}l!==null&&l.delete(t),Af(e,a)}function uh(e,t){return Gi(e,t)}var Ei=null,Sl=null,Ro=!1,Ti=!1,Ho=!1,ma=0;function _t(e){e!==Sl&&e.next===null&&(Sl===null?Ei=Sl=e:Sl=Sl.next=e),Ti=!0,Ro||(Ro=!0,sh())}function cn(e,t){if(!Ho&&Ti){Ho=!0;do for(var a=!1,l=Ei;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-Fe(42|e)+1)-1,i&=n&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,_f(l,i))}else i=Q,i=Mn(l,l===ue?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||_l(l,i)||(a=!0,_f(l,i));l=l.next}while(a);Ho=!1}}function oh(){xf()}function xf(){Ti=Ro=!1;var e=0;ma!==0&&gh()&&(e=ma);for(var t=Ke(),a=null,l=Ei;l!==null;){var n=l.next,i=Of(l,t);i===0?(l.next=null,a===null?Ei=n:a.next=n,n===null&&(Sl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ti=!0)),l=n}Te!==0&&Te!==5||cn(e),ma!==0&&(ma=0)}function Of(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Fe(i),o=1<<u,s=n[u];s===-1?((o&a)===0||(o&l)!==0)&&(n[u]=zd(o,t)):s<=t&&(e.expiredLanes|=o),i&=~o}if(t=ue,a=Q,a=Mn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(I===2||I===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Pi(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||_l(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Pi(l),ki(a)){case 2:case 8:a=hs;break;case 32:a=Tn;break;case 268435456:a=ps;break;default:a=Tn}return l=Mf.bind(null,e),a=Gi(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Pi(l),e.callbackPriority=2,e.callbackNode=null,2}function Mf(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Si()&&e.callbackNode!==a)return null;var l=Q;return l=Mn(e,e===ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(of(e,l,t),Of(e,Ke()),e.callbackNode!=null&&e.callbackNode===a?Mf.bind(null,e):null)}function _f(e,t){if(Si())return null;of(e,t,!0)}function sh(){Sh(function(){(J&6)!==0?Gi(ms,oh):xf()})}function zo(){if(ma===0){var e=il;e===0&&(e=An,An<<=1,(An&261888)===0&&(An=256)),ma=e}return ma}function $f(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cn(""+e)}function wf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ch(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=$f((n[Ye]||null).action),u=l.submitter;u&&(t=(t=u[Ye]||null)?$f(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var o=new zn("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ma!==0){var s=u?wf(n,u):new FormData(n);Iu(a,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(o.preventDefault(),s=u?wf(n,u):new FormData(n),Iu(a,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var Lo=0;Lo<yu.length;Lo++){var Uo=yu[Lo],rh=Uo.toLowerCase(),fh=Uo[0].toUpperCase()+Uo.slice(1);gt(rh,"on"+fh)}gt(ic,"onAnimationEnd"),gt(uc,"onAnimationIteration"),gt(oc,"onAnimationStart"),gt("dblclick","onDoubleClick"),gt("focusin","onFocus"),gt("focusout","onBlur"),gt(_m,"onTransitionRun"),gt($m,"onTransitionStart"),gt(wm,"onTransitionCancel"),gt(sc,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rn));function Cf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var o=l[u],s=o.instance,m=o.currentTarget;if(o=o.listener,s!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=m;try{i(n)}catch(b){Nn(b)}n.currentTarget=null,i=s}else for(u=0;u<l.length;u++){if(o=l[u],s=o.instance,m=o.currentTarget,o=o.listener,s!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=m;try{i(n)}catch(b){Nn(b)}n.currentTarget=null,i=s}}}}function Y(e,t){var a=t[Zi];a===void 0&&(a=t[Zi]=new Set);var l=e+"__bubble";a.has(l)||(Df(t,e,2,!1),a.add(l))}function No(e,t,a){var l=0;t&&(l|=4),Df(a,e,l,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[Ai]){e[Ai]=!0,As.forEach(function(a){a!=="selectionchange"&&(dh.has(a)||No(a,!1,e),No(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,No("selectionchange",!1,t))}}function Df(e,t,a,l){switch(ud(t)){case 2:var n=Bh;break;case 8:n=Yh;break;default:n=Io}a=n.bind(null,t,a,e),n=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function jo(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var o=l.stateNode.containerInfo;if(o===n)break;if(u===4)for(u=l.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;o!==null;){if(u=Qa(o),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){l=i=u;continue e}o=o.parentNode}}l=l.return}Ls(function(){var m=i,b=tu(a),S=[];e:{var h=cc.get(e);if(h!==void 0){var y=zn,O=e;switch(e){case"keypress":if(Rn(a)===0)break e;case"keydown":case"keyup":y=im;break;case"focusin":O="focus",y=ou;break;case"focusout":O="blur",y=ou;break;case"beforeblur":case"afterblur":y=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=sm;break;case ic:case uc:case oc:y=Kd;break;case sc:y=rm;break;case"scroll":case"scrollend":y=Vd;break;case"wheel":y=dm;break;case"copy":case"cut":case"paste":y=Fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Bs;break;case"toggle":case"beforetoggle":y=hm}var D=(t&4)!==0,ne=!D&&(e==="scroll"||e==="scrollend"),f=D?h!==null?h+"Capture":null:h;D=[];for(var c=m,d;c!==null;){var v=c;if(d=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||d===null||f===null||(v=Dl(c,f),v!=null&&D.push(fn(c,v,d))),ne)break;c=c.return}0<D.length&&(h=new y(h,O,null,a,b),S.push({event:h,listeners:D}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&a!==eu&&(O=a.relatedTarget||a.fromElement)&&(Qa(O)||O[Ya]))break e;if((y||h)&&(h=b.window===b?b:(h=b.ownerDocument)?h.defaultView||h.parentWindow:window,y?(O=a.relatedTarget||a.toElement,y=m,O=O?Qa(O):null,O!==null&&(ne=Z(O),D=O.tag,O!==ne||D!==5&&D!==27&&D!==6)&&(O=null)):(y=null,O=m),y!==O)){if(D=qs,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(D=Bs,v="onPointerLeave",f="onPointerEnter",c="pointer"),ne=y==null?h:Cl(y),d=O==null?h:Cl(O),h=new D(v,c+"leave",y,a,b),h.target=ne,h.relatedTarget=d,v=null,Qa(b)===m&&(D=new D(f,c+"enter",O,a,b),D.target=d,D.relatedTarget=ne,v=D),ne=v,y&&O)t:{for(D=mh,f=y,c=O,d=0,v=f;v;v=D(v))d++;v=0;for(var w=c;w;w=D(w))v++;for(;0<d-v;)f=D(f),d--;for(;0<v-d;)c=D(c),v--;for(;d--;){if(f===c||c!==null&&f===c.alternate){D=f;break t}f=D(f),c=D(c)}D=null}else D=null;y!==null&&Rf(S,h,y,D,!1),O!==null&&ne!==null&&Rf(S,ne,O,D,!0)}}e:{if(h=m?Cl(m):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var X=Zs;else if(Xs(h))if(Js)X=xm;else{X=Tm;var $=Em}else y=h.nodeName,!y||y.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&Ii(m.elementType)&&(X=Zs):X=Am;if(X&&(X=X(e,m))){ks(S,X,a,b);break e}$&&$(e,h,m),e==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&Fi(h,"number",h.value)}switch($=m?Cl(m):window,e){case"focusin":(Xs($)||$.contentEditable==="true")&&(Wa=$,mu=m,jl=null);break;case"focusout":jl=mu=Wa=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,lc(S,a,b);break;case"selectionchange":if(Mm)break;case"keydown":case"keyup":lc(S,a,b)}var q;if(cu)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Ka?Ps(e,a)&&(G="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(G="onCompositionStart");G&&(Ys&&a.locale!=="ko"&&(Ka||G!=="onCompositionStart"?G==="onCompositionEnd"&&Ka&&(q=Us()):(Wt=b,nu="value"in Wt?Wt.value:Wt.textContent,Ka=!0)),$=xi(m,G),0<$.length&&(G=new js(G,e,null,a,b),S.push({event:G,listeners:$}),q?G.data=q:(q=Vs(a),q!==null&&(G.data=q)))),(q=ym?bm(e,a):gm(e,a))&&(G=xi(m,"onBeforeInput"),0<G.length&&($=new js("onBeforeInput","beforeinput",null,a,b),S.push({event:$,listeners:G}),$.data=q)),ch(S,e,m,a,b)}Cf(S,t)})}function fn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function xi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Dl(e,a),n!=null&&l.unshift(fn(e,n,i)),n=Dl(e,t),n!=null&&l.push(fn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function mh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rf(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var o=a,s=o.alternate,m=o.stateNode;if(o=o.tag,s!==null&&s===l)break;o!==5&&o!==26&&o!==27||m===null||(s=m,n?(m=Dl(a,i),m!=null&&u.unshift(fn(a,m,s))):n||(m=Dl(a,i),m!=null&&u.push(fn(a,m,s)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var hh=/\r\n?/g,ph=/\u0000|\uFFFD/g;function Hf(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(ph,"")}function zf(e,t){return t=Hf(t),Hf(e)===t}function le(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ka(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ka(e,""+l);break;case"className":$n(e,"class",l);break;case"tabIndex":$n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,l);break;case"style":Hs(e,l,i);break;case"data":if(t!=="object"){$n(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&le(e,t,"name",n.name,n,null),le(e,t,"formEncType",n.formEncType,n,null),le(e,t,"formMethod",n.formMethod,n,null),le(e,t,"formTarget",n.formTarget,n,null)):(le(e,t,"encType",n.encType,n,null),le(e,t,"method",n.method,n,null),le(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Dt);break;case"onScroll":l!=null&&Y("scroll",e);break;case"onScrollEnd":l!=null&&Y("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(p(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Cn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Y("beforetoggle",e),Y("toggle",e),_n(e,"popover",l);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":_n(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gd.get(a)||a,_n(e,a,l))}}function Bo(e,t,a,l,n,i){switch(a){case"style":Hs(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(p(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ka(e,l):(typeof l=="number"||typeof l=="bigint")&&ka(e,""+l);break;case"onScroll":l!=null&&Y("scroll",e);break;case"onScrollEnd":l!=null&&Y("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Dt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ye]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):_n(e,a,l)}}}function we(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",e),Y("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:le(e,t,i,u,a,null)}}n&&le(e,t,"srcSet",a.srcSet,a,null),l&&le(e,t,"src",a.src,a,null);return;case"input":Y("invalid",e);var o=i=u=n=null,s=null,m=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":n=b;break;case"type":u=b;break;case"checked":s=b;break;case"defaultChecked":m=b;break;case"value":i=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,t));break;default:le(e,t,l,b,a,null)}}ws(e,i,o,s,m,u,n,!1);return;case"select":Y("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":l=o;default:le(e,t,n,o,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Xa(e,!!l,t,!1):a!=null&&Xa(e,!!l,a,!0);return;case"textarea":Y("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(p(91));break;default:le(e,t,u,o,a,null)}Ds(e,l,n,i);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(l=a[s],l!=null))switch(s){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,t,s,l,a,null)}return;case"dialog":Y("beforetoggle",e),Y("toggle",e),Y("cancel",e),Y("close",e);break;case"iframe":case"object":Y("load",e);break;case"video":case"audio":for(l=0;l<rn.length;l++)Y(rn[l],e);break;case"image":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"embed":case"source":case"link":Y("error",e),Y("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:le(e,t,m,l,a,null)}return;default:if(Ii(t)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Bo(e,t,b,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&le(e,t,o,l,a,null))}function yh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,o=null,s=null,m=null,b=null;for(y in a){var S=a[y];if(a.hasOwnProperty(y)&&S!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":s=S;default:l.hasOwnProperty(y)||le(e,t,y,null,l,S)}}for(var h in l){var y=l[h];if(S=a[h],l.hasOwnProperty(h)&&(y!=null||S!=null))switch(h){case"type":i=y;break;case"name":n=y;break;case"checked":m=y;break;case"defaultChecked":b=y;break;case"value":u=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,t));break;default:y!==S&&le(e,t,h,y,l,S)}}Wi(e,u,o,s,m,b,i,n);return;case"select":y=u=o=h=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":y=s;default:l.hasOwnProperty(i)||le(e,t,i,null,l,s)}for(n in l)if(i=l[n],s=a[n],l.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":h=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==s&&le(e,t,n,i,l,s)}t=o,a=u,l=y,h!=null?Xa(e,!!a,h,!1):!!l!=!!a&&(t!=null?Xa(e,!!a,t,!0):Xa(e,!!a,a?[]:"",!1));return;case"textarea":y=h=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":h=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(p(91));break;default:n!==i&&le(e,t,u,n,l,i)}Cs(e,h,y);return;case"option":for(var O in a)if(h=a[O],a.hasOwnProperty(O)&&h!=null&&!l.hasOwnProperty(O))switch(O){case"selected":e.selected=!1;break;default:le(e,t,O,null,l,h)}for(s in l)if(h=l[s],y=a[s],l.hasOwnProperty(s)&&h!==y&&(h!=null||y!=null))switch(s){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:le(e,t,s,h,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var D in a)h=a[D],a.hasOwnProperty(D)&&h!=null&&!l.hasOwnProperty(D)&&le(e,t,D,null,l,h);for(m in l)if(h=l[m],y=a[m],l.hasOwnProperty(m)&&h!==y&&(h!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(p(137,t));break;default:le(e,t,m,h,l,y)}return;default:if(Ii(t)){for(var ne in a)h=a[ne],a.hasOwnProperty(ne)&&h!==void 0&&!l.hasOwnProperty(ne)&&Bo(e,t,ne,void 0,l,h);for(b in l)h=l[b],y=a[b],!l.hasOwnProperty(b)||h===y||h===void 0&&y===void 0||Bo(e,t,b,h,l,y);return}}for(var f in a)h=a[f],a.hasOwnProperty(f)&&h!=null&&!l.hasOwnProperty(f)&&le(e,t,f,null,l,h);for(S in l)h=l[S],y=a[S],!l.hasOwnProperty(S)||h===y||h==null&&y==null||le(e,t,S,h,l,y)}function Lf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,o=n.duration;if(i&&o&&Lf(u)){for(u=0,o=n.responseEnd,l+=1;l<a.length;l++){var s=a[l],m=s.startTime;if(m>o)break;var b=s.transferSize,S=s.initiatorType;b&&Lf(S)&&(s=s.responseEnd,u+=b*(s<o?1:(o-m)/(s-m)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yo=null,Qo=null;function Oi(e){return e.nodeType===9?e:e.ownerDocument}function Uf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Po=null;function gh(){var e=window.event;return e&&e.type==="popstate"?e===Po?!1:(Po=e,!0):(Po=null,!1)}var qf=typeof setTimeout=="function"?setTimeout:void 0,vh=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(Eh)}:qf;function Eh(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function Bf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),xl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")dn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,dn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,o=i.nodeName;i[wl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&dn(e.ownerDocument.body);a=n}while(a);xl(t)}function Yf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Vo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vo(a),Ji(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Th(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=pt(e.nextSibling),e===null)break}return null}function Ah(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pt(e.nextSibling),e===null))return null;return e}function Qf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pt(e.nextSibling),e===null))return null;return e}function Xo(e){return e.data==="$?"||e.data==="$~"}function ko(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zo=null;function Gf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return pt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vf(e,t,a){switch(t=Oi(a),e){case"html":if(e=t.documentElement,!e)throw Error(p(452));return e;case"head":if(e=t.head,!e)throw Error(p(453));return e;case"body":if(e=t.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function dn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ji(e)}var yt=new Map,Xf=new Set;function Mi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kt=A.d;A.d={f:Oh,r:Mh,D:_h,C:$h,L:wh,m:Ch,X:Rh,S:Dh,M:Hh};function Oh(){var e=kt.f(),t=bi();return e||t}function Mh(e){var t=Ga(e);t!==null&&t.tag===5&&t.type==="form"?sr(t):kt.r(e)}var El=typeof document>"u"?null:document;function kf(e,t,a){var l=El;if(l&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Xf.has(n)||(Xf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),we(t,"link",e),Ae(t),l.head.appendChild(t)))}}function _h(e){kt.D(e),kf("dns-prefetch",e,null)}function $h(e,t){kt.C(e,t),kf("preconnect",e,t)}function wh(e,t,a){kt.L(e,t,a);var l=El;if(l&&e&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+st(a.imageSizes)+'"]')):n+='[href="'+st(e)+'"]';var i=n;switch(t){case"style":i=Tl(e);break;case"script":i=Al(e)}yt.has(i)||(e=H({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(mn(i))||t==="script"&&l.querySelector(hn(i))||(t=l.createElement("link"),we(t,"link",e),Ae(t),l.head.appendChild(t)))}}function Ch(e,t){kt.m(e,t);var a=El;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Al(e)}if(!yt.has(i)&&(e=H({rel:"modulepreload",href:e},t),yt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hn(i)))return}l=a.createElement("link"),we(l,"link",e),Ae(l),a.head.appendChild(l)}}}function Dh(e,t,a){kt.S(e,t,a);var l=El;if(l&&e){var n=Pa(l).hoistableStyles,i=Tl(e);t=t||"default";var u=n.get(i);if(!u){var o={loading:0,preload:null};if(u=l.querySelector(mn(i)))o.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(i))&&Jo(e,a);var s=u=l.createElement("link");Ae(s),we(s,"link",e),s._p=new Promise(function(m,b){s.onload=m,s.onerror=b}),s.addEventListener("load",function(){o.loading|=1}),s.addEventListener("error",function(){o.loading|=2}),o.loading|=4,_i(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:o},n.set(i,u)}}}function Rh(e,t){kt.X(e,t);var a=El;if(a&&e){var l=Pa(a).hoistableScripts,n=Al(e),i=l.get(n);i||(i=a.querySelector(hn(n)),i||(e=H({src:e,async:!0},t),(t=yt.get(n))&&Ko(e,t),i=a.createElement("script"),Ae(i),we(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Hh(e,t){kt.M(e,t);var a=El;if(a&&e){var l=Pa(a).hoistableScripts,n=Al(e),i=l.get(n);i||(i=a.querySelector(hn(n)),i||(e=H({src:e,async:!0,type:"module"},t),(t=yt.get(n))&&Ko(e,t),i=a.createElement("script"),Ae(i),we(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Zf(e,t,a,l){var n=(n=j.current)?Mi(n):null;if(!n)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Pa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var i=Pa(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(mn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),i||zh(n,e,a,u.state))),t&&l===null)throw Error(p(528,""));return u}if(t&&l!==null)throw Error(p(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Al(a),a=Pa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function Tl(e){return'href="'+st(e)+'"'}function mn(e){return'link[rel="stylesheet"]['+e+"]"}function Jf(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function zh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),we(t,"link",a),Ae(t),e.head.appendChild(t))}function Al(e){return'[src="'+st(e)+'"]'}function hn(e){return"script[async]"+e}function Kf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(l)return t.instance=l,Ae(l),l;var n=H({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ae(l),we(l,"style",n),_i(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var i=e.querySelector(mn(n));if(i)return t.state.loading|=4,t.instance=i,Ae(i),i;l=Jf(a),(n=yt.get(n))&&Jo(l,n),i=(e.ownerDocument||e).createElement("link"),Ae(i);var u=i;return u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),we(i,"link",l),t.state.loading|=4,_i(i,a.precedence,e),t.instance=i;case"script":return i=Al(a.src),(n=e.querySelector(hn(i)))?(t.instance=n,Ae(n),n):(l=a,(n=yt.get(i))&&(l=H({},a),Ko(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ae(n),we(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,_i(l,a.precedence,e));return t.instance}function _i(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var o=l[u];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ko(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $i=null;function Wf(e,t,a){if($i===null){var l=new Map,n=$i=new Map;n.set(a,l)}else n=$i,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[wl]||i[Oe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var o=l.get(u);o?o.push(i):l.set(u,[i])}}return l}function Ff(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Lh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function If(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Uh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Tl(l.href),i=t.querySelector(mn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ae(i);return}i=t.ownerDocument||t,l=Jf(l),(n=yt.get(n))&&Jo(l,n),i=i.createElement("link"),Ae(i);var u=i;u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),we(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Wo=0;function Nh(e,t){return e.stylesheets&&e.count===0&&Di(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Di(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Wo===0&&(Wo=62500*bh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Di(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Wo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function wi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Di(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ci=null;function Di(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ci=new Map,t.forEach(qh,e),Ci=null,wi.call(e))}function qh(e,t){if(!(t.state.loading&4)){var a=Ci.get(e);if(a)var l=a.get(null);else{a=new Map,Ci.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=wi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var pn={$$typeof:Ce,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function jh(e,t,a,l,n,i,u,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.hiddenUpdates=Vi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ed(e,t,a,l,n,i,u,o,s,m,b,S){return e=new jh(e,t,a,u,s,m,b,S,o),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=wu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Hu(i),e}function td(e){return e?(e=el,e):el}function ad(e,t,a,l,n,i){n=td(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=na(e,l,t),a!==null&&(ke(a,e,t),Xl(a,e,t))}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Fo(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function nd(e){if(e.tag===13||e.tag===31){var t=_a(e,67108864);t!==null&&ke(t,e,67108864),Fo(e,67108864)}}function id(e){if(e.tag===13||e.tag===31){var t=it();t=Xi(t);var a=_a(e,t);a!==null&&ke(a,e,t),Fo(e,t)}}var Ri=!0;function Bh(e,t,a,l){var n=g.T;g.T=null;var i=A.p;try{A.p=2,Io(e,t,a,l)}finally{A.p=i,g.T=n}}function Yh(e,t,a,l){var n=g.T;g.T=null;var i=A.p;try{A.p=8,Io(e,t,a,l)}finally{A.p=i,g.T=n}}function Io(e,t,a,l){if(Ri){var n=es(l);if(n===null)jo(e,t,l,Hi,a),od(e,l);else if(Gh(n,e,t,a,l))l.stopPropagation();else if(od(e,l),t&4&&-1<Qh.indexOf(e)){for(;n!==null;){var i=Ga(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ta(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var s=1<<31-Fe(u);o.entanglements[1]|=s,u&=~s}_t(i),(J&6)===0&&(pi=Ke()+500,cn(0))}}break;case 31:case 13:o=_a(i,2),o!==null&&ke(o,i,2),bi(),Fo(i,2)}if(i=es(l),i===null&&jo(e,t,l,Hi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else jo(e,t,l,null,a)}}function es(e){return e=tu(e),ts(e)}var Hi=null;function ts(e){if(Hi=null,e=Qa(e),e!==null){var t=Z(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=he(t),e!==null)return e;e=null}else if(a===31){if(e=Re(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hi=e,null}function ud(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_d()){case ms:return 2;case hs:return 8;case Tn:case $d:return 32;case ps:return 268435456;default:return 32}default:return 32}}var as=!1,pa=null,ya=null,ba=null,yn=new Map,bn=new Map,ga=[],Qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function od(e,t){switch(e){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function gn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ga(t),t!==null&&nd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Gh(e,t,a,l,n){switch(t){case"focusin":return pa=gn(pa,e,t,a,l,n),!0;case"dragenter":return ya=gn(ya,e,t,a,l,n),!0;case"mouseover":return ba=gn(ba,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return yn.set(i,gn(yn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,bn.set(i,gn(bn.get(i)||null,e,t,a,l,n)),!0}return!1}function sd(e){var t=Qa(e.target);if(t!==null){var a=Z(t);if(a!==null){if(t=a.tag,t===13){if(t=he(a),t!==null){e.blockedOn=t,Es(e.priority,function(){id(a)});return}}else if(t===31){if(t=Re(a),t!==null){e.blockedOn=t,Es(e.priority,function(){id(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=es(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);eu=l,a.target.dispatchEvent(l),eu=null}else return t=Ga(a),t!==null&&nd(t),e.blockedOn=a,!1;t.shift()}return!0}function cd(e,t,a){zi(e)&&a.delete(t)}function Ph(){as=!1,pa!==null&&zi(pa)&&(pa=null),ya!==null&&zi(ya)&&(ya=null),ba!==null&&zi(ba)&&(ba=null),yn.forEach(cd),bn.forEach(cd)}function Li(e,t){e.blockedOn===t&&(e.blockedOn=null,as||(as=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,Ph)))}var Ui=null;function rd(e){Ui!==e&&(Ui=e,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){Ui===e&&(Ui=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(ts(l||a)===null)continue;break}var i=Ga(a);i!==null&&(e.splice(t,3),t-=3,Iu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function xl(e){function t(s){return Li(s,e)}pa!==null&&Li(pa,e),ya!==null&&Li(ya,e),ba!==null&&Li(ba,e),yn.forEach(t),bn.forEach(t);for(var a=0;a<ga.length;a++){var l=ga[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ga.length&&(a=ga[0],a.blockedOn===null);)sd(a),a.blockedOn===null&&ga.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Ye]||null;if(typeof i=="function")u||rd(a);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Ye]||null)o=u.formAction;else if(ts(n)!==null)continue}else o=u.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),rd(a)}}}function fd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ls(e){this._internalRoot=e}Ni.prototype.render=ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));var a=t.current,l=it();ad(a,l,e,t,null,null)},Ni.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ad(e.current,2,null,e,null,null),bi(),t[Ya]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ss();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ga.length&&t!==0&&t<ga[a].priority;a++);ga.splice(a,0,e),a===0&&sd(e)}};var dd=fe.version;if(dd!=="19.2.0")throw Error(p(527,dd,"19.2.0"));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=T(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var Vh={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{Ml=qi.inject(Vh),We=qi}catch{}}return Sn.createRoot=function(e,t){if(!R(e))throw Error(p(299));var a=!1,l="",n=gr,i=vr,u=Sr;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ed(e,1,!1,null,null,a,l,null,n,i,u,fd),e[Ya]=t.current,qo(e),new ls(t)},Sn.hydrateRoot=function(e,t,a){if(!R(e))throw Error(p(299));var l=!1,n="",i=gr,u=vr,o=Sr,s=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=ed(e,1,!0,t,a??null,l,n,s,i,u,o,fd),t.context=td(null),a=t.current,l=it(),l=Xi(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,$l(t,a),_t(t),e[Ya]=t.current,qo(e),new Ni(t)},Sn.version="19.2.0",Sn}var Td;function tp(){if(Td)return us.exports;Td=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),us.exports=ep(),us.exports}var ap=tp();function lp(){const[M,fe]=Ad.useState(null),K=[{id:1,question:"1. Define Open Source Software and explain its characteristics.",answer:"",codeExample:`
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
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:8888,question:"Mid paper question answers",answer:"",codeExample:`
      
✅ Q1 (a) – Short Questions (1 mark each)

1) What is the main difference between open-source and closed-source software?

Open-source software → Source code is publicly available, can be modified.
Closed-source software → Source code is private; users cannot modify it.


2) Who is the creator of PHP?

👉 Rasmus Lerdorf



3) One difference between MySQL and MySQLi?

MySQL → Older extension, procedural only.
MySQLi → Improved version, supports procedural + object-oriented and prepared statements.




✅ Q1 (b) – MCQs / True-False / Fill blanks (1 mark each)

1) Best defines open-source philosophy
👉 b) Software whose source code is publicly available


2) Open Source Software allows users to modify source code. (True/False)
👉 True


3) The switch statement is used for?

👉 c) Function call (wrong)
Correct answer: Branching / decision making
But from options:
👉 d) String concatenation = WRONG
👉 b) Function call = WRONG
👉 a) Looping = WRONG
Correct option should be Branching, but not in list.
So in exam, choose none OR write branching.


4) Function to execute SQL query in PHP
👉 mysqli_query()


5) Default MySQL port number
👉 a) 3306


6) Most commonly used open-source database with PHP
👉 c) MySQL


7) Function used to create array
👉 b) array()


---------------------------------------------------------------------------


✅ Q2(a) – 2-Mark Questions

1) Write any two advantages of using open-source software in web development.

✔ Free to use
✔ Easy to modify/customize
✔ Large community support
✔ No licensing cost
✔ Secure due to frequent updates


2) Importance of FOSS (Free and Open Source Software)

Promotes collaboration and innovation
Reduces software cost
Provides source code access → easy to modify
No vendor lock-in
Highly customizable


-----------------


✅ Q2(b) – 3-Mark Questions

1) PHP program using conditional + loop to display numbers 1 to 10

<?php
for($i = 1; $i <= 10; $i++){
    if($i % 2 == 0){
        echo "$i is Even <br>";
    } else {
        echo "$i is Odd <br>";
    }
}
?>



2) Process of creating and using user-defined functions in PHP

Steps:

1. Use function keyword
2. Give function name
3. Write logic
4. Call the function

Example:

<?php
function greet($name){
    echo "Hello, $name!";
}

greet("Raj");
?>


---------------------------------------------------------------------------


✅ Q3 – Attempt ANY TWO (5 marks each)

Q3(i) PHP script demonstrating conditional + loops
<?php
for($i = 1; $i <= 15; $i++){
    if($i % 3 == 0){
        echo "$i is divisible by 3<br>";
    } else if($i % 2 == 0){
        echo "$i is even<br>";
    } else {
        echo "$i is odd<br>";
    }
}
?>


Explanation:

Loop prints numbers
Conditions check if number is even, odd, or divisible by 3



Q3(ii) Variable scope in PHP

✔ 1. Local Scope
Declared inside function → used inside only.


✔ 2. Global Scope
Declared outside function → cannot be used inside unless declared global.


✔ 3. Static Scope
Variable keeps its value between function calls.


✔ 4. Super Global Variables
$_GET, $_POST, $_SESSION, $_SERVER — available anywhere.

Examples:

<?php
$globalVar = 10;

function demo(){
    global $globalVar; // access global var
    static $count = 0;
    $count++;
    echo "Global: $globalVar, Count: $count<br>";
}

demo();
demo();
demo();
?>



Q3(iii) Use of associative arrays vs indexed arrays

✔ Indexed Array

Stores data with numeric index
$arr[0] = "Raj"


✔ Associative Array

Stores data with key → value
$emp["name"] = "Raj"


Why associative arrays are better for structured data?

  Easy to understand
  Keys represent meaning
  Better for storing records (employee, product, student data)

Example:

$student = [
  "name" => "Raj",
  "age" => 21,
  "course" => "MCA"
];


---------------------------------------------------------------------------


✅ Q4(a) Employee bonus program (5 Marks)

⭐ Requirement:

Calculate bonus based on ratings.

Example:

Rating = 5 → 20% bonus
Rating = 4 → 15% bonus
Rating = 3 → 10% bonus
Below 3 → No bonus

⭐ Program using conditions + loops

<?php
$employees = [
  ["name" => "Amit", "salary" => 30000, "rating" => 5],
  ["name" => "Raj", "salary" => 25000, "rating" => 3],
  ["name" => "Neha", "salary" => 28000, "rating" => 4]
];

foreach($employees as $emp){
    if($emp["rating"] == 5)
        $bonus = $emp["salary"] * 0.20;
    else if($emp["rating"] == 4)
        $bonus = $emp["salary"] * 0.15;
    else if($emp["rating"] == 3)
        $bonus = $emp["salary"] * 0.10;
    else
        $bonus = 0;

    echo $emp["name"] . " bonus: " . $bonus . "<br>";
}
?>



✅ Q4(b) Fetch sales reports using date ranges

✔ MySQL Date Functions Used

DATE() → extract date
BETWEEN → filter date range
CURDATE() → today
NOW() → current timestamp

⭐ PHP + MySQL program

<?php
$con = mysqli_connect("localhost","root","","shop");

$start = "2025-01-01";
$end = "2025-01-31";

$query = "SELECT * FROM sales
          WHERE date BETWEEN '$start' AND '$end'";

$result = mysqli_query($con, $query);

while($row = mysqli_fetch_assoc($result)){
    echo $row['product'] . " - " . $row['amount'] . "<br>";
}
?>




⭐ OR

Q4(b) Connecting to multiple MySQL databases (5 marks)

Program Structure

<?php

$db1 = mysqli_connect("localhost","root","","students_db");
$db2 = mysqli_connect("localhost","root","","sales_db");

$q1 = mysqli_query($db1, "SELECT * FROM students");
$q2 = mysqli_query($db2, "SELECT * FROM sales");

echo "Student Data:<br>";
while($row = mysqli_fetch_assoc($q1)){
    echo $row['name']."<br>";
}

echo "Sales Data:<br>";
while($row = mysqli_fetch_assoc($q2)){
    echo $row['product']." - ".$row['amount']."<br>";
}

?>



✔ Explanation:

Two DB connections
Two queries
Fetch data from both DBs for analytics
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:31,question:"31. Difference between GET and POST.",answer:"",codeExample:`
✅ Difference between GET and POST (Easy Explanation)

| GET                                     | POST                                  |
| ----------------------------------------| --------------------------------------|
| Sends data in URL                       | Sends data in request body (hidden)   |
| Less secure (data visible in URL)       | More secure (data not visible in URL) |
| Can send small amount of data           | Can send large amount of data         |
| Used for viewing/fetching data          | Used for submitting/inserting data    |
| URL becomes long (has query string)     | URL remains clean                     |
| Can be bookmarked                       | Cannot be bookmarked                  |
| Example URL: page.php?name=Raj&age=20   | No data shown in URL                  |
| Faster (cached by browser)              | Slightly slower                       |
| Good for: search, filters, reading data | Good for: login, forms, payments      |


✅ Simple Example

GET Method

<form method="GET" action="welcome.php">
    Name: <input type="text" name="username">
    <input type="submit">
</form>


➡ Data will appear in URL like:
welcome.php?username=Raj



POST Method

<form method="POST" action="welcome.php">
    Name: <input type="text" name="username">
    <input type="submit">
</form>


➡ Data is sent hidden, not shown in URL.
      
      `},{id:32,question:"32. Explain form handling with PHP.",answer:"",codeExample:`
✅ Form Handling in PHP (Easy Explanation)

Form handling means collecting data from an HTML form and processing it using PHP.

When a user fills a form → clicks submit → data is sent to a PHP script using GET or POST → PHP reads that 
data → shows output or stores in DB.


✅ How Form Handling Works? (Simple Steps)

1. Create an HTML form
2. Choose method → GET or POST
3. Set action → PHP file that will receive form data
4. Use PHP superglobals:
  $_GET[] → to read GET data
  $_POST[] → to read POST data
5. Process or print output


✅ Example: HTML Form + PHP Handling

⭐ Step 1: HTML Form (form.html)

<!DOCTYPE html>
<html>
<body>

<form action="handle.php" method="POST">
    Name: <input type="text" name="username"><br><br>
    Age: <input type="number" name="age"><br><br>
    <input type="submit" value="Submit">
</form>

</body>
</html>



⭐ Step 2: PHP File to Handle Data (handle.php)

<?php
$name = $_POST['username'];   // read name from form
$age  = $_POST['age'];        // read age from form

echo "Your Name is: " . $name . "<br>";
echo "Your Age is: " . $age;
?>



✅ Output

If user enters:

Name: Raj
Age: 20


Then output:

Your Name is: Raj
Your Age is: 20



✅ Important PHP Superglobal Variables

| Variable      | Use                              |
| ------------- | -------------------------------- |
| $_GET[]       | Read form data sent through GET  |
| $_POST[]      | Read form data sent through POST |
| $_REQUEST[]   | Reads both GET + POST data       |



✅ Why POST is preferred for form handling?

More secure
Does not show data in URL
Can send large data
Used for login, registration, payments
      
      `},{id:33,question:"33. What is sanitization & validation?",answer:"",codeExample:`
✅ What is Validation? (Simple Meaning)

Validation means checking whether the user’s input is correct, complete, and acceptable.

✔️ Validation = Is the data valid?
✔️ Ensures rules are followed.


✅ Examples of Validation

Email format must be correct
✔ test@example.com
✘ test@.com


Age must be a number
✔ 25
✘ abc


Password must be at least 8 characters

✔ mypassword123
✘ 1234


⭐ PHP Validation Example

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email!";
}




✅ What is Sanitization? (Simple Meaning)

Sanitization means cleaning the input to remove harmful or unwanted characters.

✔️ Sanitization = Make the data safe.
✔️ Removes special characters that may cause hacking (XSS, SQL injection).

✅ Examples of Sanitization

Remove HTML tags
Input: <script>alert(1)<\/script>
Output: alert(1)

Remove extra spaces
Input: " John "
Output: "John"

Escape harmful symbols
Input: O'Reilly
Output: O'Reilly


⭐ PHP Sanitization Example

$name = filter_var($name, FILTER_SANITIZE_STRING);


🔍 Difference Between Validation & Sanitization (Easy)

| Validation                                        | Sanitization                                                 |
| ------------------------------------------------- | ------------------------------------------------------------ |
| Checks if the data is correct or not              | Cleans the data to make it safe                              |
| Rejects wrong or invalid data                     | Allows data but removes harmful parts                        |
| Ensures data follows rules (format, length, type) | Removes extra spaces, tags, or symbols                       |
| Example: "Is this email format correct?"          | Example: "Remove HTML tags from input"                       |
| Stops form submission if rules fail               | Does not stop submission; just cleans input                  |
| Used for checking correctness                     | Used for security and cleanliness                            |
| Ensures data is meaningful                        | Ensures data cannot be used for hacking (XSS, SQL Injection) |
| Example: Age must be a number                     | Example: Convert "  John " → "John"                          |
| Example: Password must be 8+ chars                | Example: Remove <script> tags                                |
| Helps maintain data quality                       | Helps protect the system from attacks                        |


🎯 Simple Example Combining Both

$email = $_POST['email'];

// Sanitization
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Validation

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid Email!";
} else {
    echo "Valid.";
}


--------------------------------------------------------------

Yes — both are constants in PHP:

✔ FILTER_SANITIZE_EMAIL
✔ FILTER_VALIDATE_EMAIL

✅ What does “constant” mean?

A constant is a value in PHP that:

✔ has a fixed name
✔ has a fixed value
✔ cannot change while the program is running

You cannot modify it like a variable.


🧠 Simple way to remember:

A variable can change → like a water bottle
A constant stays the same → like a solid rock


🔍 Example of a variable:
$x = 10;
$x = 20;   // you changed it


🔍 Example of a constant:

define("PI", 3.14);
echo PI;


You cannot do this:

PI = 4;   // ❌ Error


🧩 So what about PHP filter constants?

FILTER_VALIDATE_EMAIL and FILTER_SANITIZE_EMAIL are predefined constants.

That means PHP has already defined them for you.

Example:

  echo FILTER_VALIDATE_EMAIL;  // prints a number (the constant value)

You cannot change their value.



🎯 Why constants here?

Because PHP uses them as fixed identifiers to tell filter_var() what type of task to perform.

Examples:

  FILTER_VALIDATE_EMAIL → “Validate this as email”
  FILTER_SANITIZE_EMAIL → “Clean this email”

These cannot change, because PHP relies on them.

🧠 Summary

✔ Yes — both are constants.
✔ Constant = a value that cannot be changed.
✔ PHP has many built-in constants for filters.
✔ They help functions like filter_var() know what to do.

If you want, I can explain how constants work internally or show more examples!




✅ What is filter_var()?

filter_var() is a built-in PHP function used to:

✔ Validate data
✔ Sanitize (clean) data

It helps you check if user input is safe and correct format.

🎯 Simple meaning:

Think of filter_var() like a filter machine:
You give it a value (email, number, URL, etc.)
You tell it what type of filter to apply
It returns either:
  ✔ The cleaned value
  ✔ The validated value
  ❌ Or false if invalid

🧩 Syntax

filter_var(value, filter_type);


Example:

filter_var($email, FILTER_VALIDATE_EMAIL);

→ Checks if $email is a valid email format.


🚿 FILTER_SANITIZE_*

Used to clean unwanted characters.

Example:

filter_var($email, FILTER_SANITIZE_EMAIL);

→ Removes illegal characters from email.


✔ FILTER_VALIDATE_*

Used to check format.

Example:

  filter_var($email, FILTER_VALIDATE_EMAIL);

→ Returns email if valid, or false if invalid.


🔍 Examples

1️⃣ Validate an email:
filter_var("test@gmail.com", FILTER_VALIDATE_EMAIL);

✔ Returns: "test@gmail.com"
❌ Returns: false for invalid email.


2️⃣ Sanitize an email:
filter_var("raj!!@gmail.com", FILTER_SANITIZE_EMAIL);

✔ Returns: "raj@gmail.com"
(it cleans the bad characters)


3️⃣ Validate an integer:

filter_var(100, FILTER_VALIDATE_INT);


🧠 Summary

filter_var() = PHP's function to filter, clean, or validate data.

| Purpose  | Example                 | Meaning               |
| -------- | ----------------------- | --------------------- |
| Validate | FILTER_VALIDATE_EMAIL   | Checks if valid email |
| Sanitize | FILTER_SANITIZE_EMAIL   | Cleans email          |

      `},{id:34,question:"34. Explain Sessions with example.",answer:"",codeExample:`
✅ What is a Session in PHP?

A Session is used to store data for a user temporarily (until the browser is closed).


✔ Simple Words:

A session is like a temporary bag given to a user when they visit a website.
You can store values in this bag (like username, user ID) and use them on any page.


✅ Why do we need Sessions?

To remember a user across multiple pages
Used for login system
Used for shopping cart
Used to store data temporarily during browsing


✅ How Sessions Work? (Simple)

1. session_start() creates a session.
2. PHP gives a unique Session ID to the user.
3. You can store data in $_SESSION[].
4. You can access this data on any page.
5. When browser closes → session deletes.



✅ PHP Session Example (Easy & Short)

Page 1: store_session.php

<?php
session_start();  // Start session

$_SESSION['username'] = "Raj";  // Store data
echo "Session data stored!";
?>



Page 2: get_session.php

<?php
session_start();  // Continue same session

echo "Welcome, " . $_SESSION['username'];
?>


Output:

Welcome, Raj


🚫 Destroy Session (Logout)

<?php
session_start();
session_destroy();
echo "Session ended!";
?>


⭐ Summary (Easy Words)

Session = Temporary storage for each user.
Data stays until the user closes the browser or you destroy it.
Used in login, cart, user tracking.
      `},{id:35,question:"35. Explain Cookies with example.",answer:"",codeExample:`
🍪 What Are Cookies?

A Cookie is a small piece of data stored in the user's browser.

✔ Simple Words:

A cookie is like a small note saved in your browser.
Websites use this note to remember you next time you visit.


⭐ Why are Cookies used?

To remember username
To remember preferences (theme, language)
To keep users logged in
To track user activity


🕒 Cookie Life

Cookies can stay:

  For minutes
  For days
  For months
  Even after closing the browser

(depends on expiry time)



🍪 PHP Cookie Example (Easy & Short)

✔ Set a Cookie

<?php
setcookie("username", "Raj", time() + 3600);  
// cookie expires in 1 hour

echo "Cookie set!";
?>


✔ Get (Read) a Cookie

<?php
echo "Hello, " . $_COOKIE['username'];
?>


Output:

Hello, Raj


✔ Delete a Cookie

<?php
setcookie("username", "", time() - 3600);  
echo "Cookie deleted!";
?>
      
      `},{id:36,question:"36. Difference between Session and Cookie.",answer:"",codeExample:`
✅ Difference Between Session and Cookie

| Session                                         | Cookie                                                |
| ------------------------------------------------| ----------------------------------------------------- |
| Stores data on the server                       | Stores data in the client (browser)                   |
| More secure because data is not visible to user | Less secure because data is stored on user's computer |
| Data is lost when browser is closed             | Data can remain for hours/days/months                 |
| Can store large data                            | Can store very small data (4KB)                       |
| Slower compared to cookies                      | Faster because browser accesses data directly         |
| Used for login, cart, sensitive data            | Used for remember-me, preferences, tracking           |
| Needs session_start()                           | Needs setcookie()                                     |
| Identified using Session ID                     | Identified using Cookie name                          |


      
      `},{id:37,question:"37. Explain error reporting in PHP.",answer:"",codeExample:`
✅ What is Error Reporting in PHP?

Error reporting in PHP means showing or hiding errors that happen in a PHP script.
It helps developers find mistakes while writing code.

PHP errors include:

  Syntax errors
  Runtime errors
  Warnings
  Notices



⭐ Why is Error Reporting Needed?

To debug your program
To find mistakes quickly
To avoid showing errors to users on a live website
To maintain security (hide sensitive error info)


🔧 How to Enable and Disable Error Reporting

✔ Enable all errors

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

✔ Hide all errors

<?php
error_reporting(0);
?>


📝 Common Error Levels

| Error Level   | Meaning                                      |
| ------------- | -------------------------------------------- |
| E_ERROR       | Serious errors (script stops)                |
| E_WARNING     | Warning (script continues)                   |
| E_NOTICE      | Minor mistakes (possible undefined variable) |
| E_ALL         | Shows all errors                             |



⭐ Example of Error Reporting

<?php
error_reporting(E_ALL);      // Show all errors
ini_set("display_errors", 1);

echo $name; // Notice: variable not defined
?>


Output:

Notice: Undefined variable: name


📌 Summary (Easy Words)

Error reporting helps you see and fix errors.
error_reporting() controls which errors are shown.
display_errors decides whether errors are shown on screen.
In development → Enable errors.
In live website → Disable errors.


display_errors is a PHP configuration directive (a setting), not a keyword.
      
      `},{id:38,question:"38. Explain custom error handler.",answer:"",codeExample:`
✅ What is a Custom Error Handler in PHP?

A custom error handler allows you to create your own function to handle errors instead of PHP’s default 
error messages.

✔ You decide how the error should be displayed
✔ You can log errors, show friendly messages, or hide sensitive details


⭐ Why use a Custom Error Handler?

To show user-friendly errors
To hide PHP’s internal messages (for security)
To log errors to a file
To create custom error formats
To handle different types of errors differently


🔧 How to Create a Custom Error Handler

Step 1: Create your own function
Step 2: Tell PHP to use it using set_error_handler()

✅ Simple Custom Error Handler Example

<?php

// Step 1: Custom error handling function
function myErrorHandler($error_no, $error_msg) {
    echo "Oops! Something went wrong. <br>";
    echo "Error Details: [$error_no] $error_msg";
}

// Step 2: Set this function as error handler
set_error_handler("myErrorHandler");

// Step 3: Create an error
echo $x;  // $x is not defined → triggers custom handler
?>


⭐ Output

Oops! Something went wrong.
Error Details: [8] Undefined variable: x


🔥 What happened here?

echo $x; created a Notice error
PHP sent the error to your function (myErrorHandler)
Your custom message was displayed instead of PHP's default error


📝 Key Points (Easy Words)

set_error_handler() replaces PHP’s normal error display

Custom handler function receives:
  Error number
  Error message


You can:
  Show friendly messages
  Log errors to file
  Ignore small errors
  Stop script if error is serious
      
      `},{id:39,question:"39. Explain try–catch with example.",answer:"",codeExample:`
✅ What is try–catch in PHP?

try–catch is used to handle exceptions (runtime errors) in PHP.

✔ Code that may cause an error → write inside try
✔ If an error happens → catch block runs
✔ This prevents the program from crashing


⭐ Why use try–catch?

To stop the program from breaking
To show a user-friendly message
To handle errors safely
To write clean, controlled code


🔧 Syntax

try {
    // risky code
}
catch (Exception $e) {
    // what to do if error comes
}


✅ Easy Example

<?php

try {
    $num = 10;
    if ($num == 0) {
        throw new Exception("Number cannot be zero!");
    }

    echo 100 / $num;  // safe
}
catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

?>


⭐ Output
10


If $num = 0, output becomes:

  Error: Number cannot be zero!


✔ Explanation in simple words

try → Check code that may fail
throw new Exception() → Create a custom error
catch → Receives the error and handles it
$e->getMessage() → Shows the error message
      

------------------------------------------------------------------------------


✅ Full Code
<?php

try {
    $num = 10;
    if ($num == 0) {
        throw new Exception("Number cannot be zero!");
    }

    echo 100 / $num;  // safe
}
catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

?>


🔍 Step-by-Step Explanation
1. try { ... }

try block means:

  “Try to run this code.
  If anything goes wrong, jump to the catch block.”

So PHP will watch for errors/exceptions inside this block.


2. $num = 10;

You set $num to 10.


3. if ($num == 0)

You check:

  “Is $num equal to 0?”

If yes → something is wrong (you can’t divide by zero).


4. throw new Exception("Number cannot be zero!");

This line manually creates an error.

throw means:
  👉 Stop code inside try block
  👉 Jump to catch block
  👉 Send an error message

new Exception("...") creates an exception object with a message.

This line runs only if $num == 0.


5. echo 100 / $num;

Since $num = 10, this is safe.

100 ÷ 10 = 10
So output will be:

  10

If $num was 0 → exception would be thrown.


6. catch (Exception $e) { ... }

This block will run only if an exception happens.

$e is the object that contains:

  the error message
  error type
  line number, etc.

Inside catch block:

  echo "Error: " . $e->getMessage();


getMessage() returns the message you wrote:

  Number cannot be zero!


📌 Example Output

Case 1: $num = 10

No error → prints:

  10


Case 2: $num = 0

Exception → prints:

  Error: Number cannot be zero!



🧠 Why use try–catch?

To handle errors safely without crashing the program.


Useful for:

Division by zero
File not found
Database errors
API errors
Invalid user input
      `},{id:40,question:"40. Explain multiple catch blocks.",answer:"",codeExample:`
Multiple Catch Blocks in PHP

A try–catch structure can have multiple catch blocks.
Each catch block handles a different type of exception.
This allows more precise control over error handling.


Why use multiple catch blocks?

  Different exceptions need different responses.
  You can catch specific errors first, general ones last.
  Makes debugging and error messages more accurate.


Example: Multiple Catch Blocks

<?php
try {
    $num = 10 / 0;  // Division by zero → Warning converted to ErrorException
}
catch (DivisionByZeroError $e) {
    echo "Cannot divide by zero.<br>";
}
catch (Error $e) {
    echo "General PHP Error: " . $e->getMessage() . "<br>";
}
catch (Exception $e) {
    echo "Exception occurred: " . $e->getMessage();
}
?>


How this works

1. PHP tries the code in try{}.
2. If division by zero occurs:
  First catch checks for DivisionByZeroError.
3. If not matched, it goes to next catch.
4. Last catch handles any remaining Exception.


Key Points

  Catch blocks run in order (top to bottom).
  Place specific exceptions first, general ones later.
  Only one catch block runs for a given error.
  Helps build cleaner, safer error-handling systems.
      

another example :
catch (InvalidArgumentException $e) {
      echo "Error: ".$e->getMessage()."
";
}
      `},{id:41,question:"41. What is AJAX?",answer:"",codeExample:`
⭐ What is AJAX?

AJAX (Asynchronous JavaScript and XML)
is a technique used in web development that allows a webpage to request data from the server without 
reloading the entire page.


🔥 In simple words:

AJAX = Update part of a webpage without refreshing it.


⭐ Why AJAX is used?

To make web pages faster and more interactive
To load data in the background
To submit forms without refreshing
To update only one section (like chat message, search suggestions)


⭐ Example (Very Simple)

👉 HTML:

<button onclick="loadData()">Get Message</button>
<div id="result"></div>


👉 JavaScript (AJAX request):

function loadData() {
  let xhr = new XMLHttpRequest();     // create request object
  xhr.open("GET", "data.php", true);  // request file
  xhr.onload = function() {
    document.getElementById("result").innerHTML = xhr.responseText;
  };
  xhr.send();
}


👉 PHP (data.php):

echo "Hello, this is AJAX response!";


⭐ Result:

When you click the button:
✔ Data loads from data.php
✔ Only the <div> updates
✔ Page does NOT refresh
      
meaning of Asynchronous:
👉 Asynchronous = Does NOT wait. Keeps running.
------------------------------------------------------------------------------

AJAX is not directly part of PHP — but PHP is used with AJAX
✅ PHP does NOT execute AJAX

  AJAX happens inside the browser, using JavaScript.
  PHP runs on the server, not in the browser.

So how do they work together?

AJAX (JavaScript) sends a request to a PHP file without reloading the webpage.

Simple Flow:

1. User clicks button
2. JavaScript (AJAX) sends request → getData.php
3. PHP runs, processes request (database, logic, etc.)
4. PHP returns result (JSON, text, HTML)
5. AJAX receives response and updates the page dynamically.


✔ Example: AJAX calling PHP
HTML + JavaScript AJAX

<button onclick="loadData()">Load Data</button>
<div id="result"></div>

<script>
function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "data.php", true);

    xhr.onload = function() {
        document.getElementById("result").innerHTML = xhr.responseText;
    };

    xhr.send();
}
<\/script>


PHP file (data.php)

<?php
echo "This data is coming from PHP!";
?>


📌 Key Point

AJAX uses JavaScript to talk to PHP.
PHP cannot do AJAX, but it responds to AJAX.

      `},{id:42,question:"42. Explain AJAX workflow.",answer:"",codeExample:`
✅ AJAX Workflow (How AJAX Works)

AJAX = Asynchronous JavaScript And XML
(It works with PHP, Node, Python, Java — any backend.)

AJAX allows a webpage to send/receive data without reloading the whole page.


🚀 AJAX Workflow – Step-by-Step

1. User performs an action

Example:

  Clicks a button
  Chooses from dropdown
  Types something in search box

👉 JavaScript captures this action.


2. JavaScript creates an AJAX request

JavaScript uses:
  XMLHttpRequest
  or fetch()
  or jQuery $.ajax()
This request is sent to a server-side file (PHP, etc.).


3. AJAX sends data to the server

Example:

fetch("server.php?name=Raj")

This sends a request behind the scenes (asynchronously).


4. Server processes the request

Backend (PHP) receives the request.

Example (server.php):

<?php
$name = $_GET['name'];
echo "Hello $name!";
?>

Server sends back a response (text, JSON, HTML, etc.).


5. AJAX receives server response

JavaScript receives the response without page reload.


6. JavaScript updates the webpage

Example:

document.getElementById("result").innerHTML = response;

Only a small part of the page updates → page does NOT reload.


📌 Summary (Very Short)

| Step | Explanation                        |
| ---- | ---------------------------------- |
| 1    | User triggers an event             |
| 2    | JS creates AJAX request            |
| 3    | Request sent to server (PHP)       |
| 4    | Server processes & sends back data |
| 5    | JS receives response               |
| 6    | Webpage updates without reload     |


✔ Simple Visual Diagram (Text Format)

User Action
     ↓
JavaScript (AJAX request)
     ↓
Server (PHP)
     ↓
Response (JSON/HTML/Text)
     ↓
JavaScript updates webpage




      `},{id:43,question:"43. Write AJAX + PHP example.",answer:"",codeExample:`
✅ AJAX + PHP Example
Goal:

When user clicks a button, AJAX sends data to PHP without reloading the page, and shows the result.

📌 1. HTML + JavaScript (AJAX Code)
<!DOCTYPE html>
<html>
<body>

<input type="text" id="name" placeholder="Enter Name">
<button onclick="sendData()">Send</button>

<p id="result"></p>

<script>
function sendData() {
    let userName = document.getElementById("name").value;

    // Create AJAX object
    let xhr = new XMLHttpRequest();

    // Call PHP file
    xhr.open("POST", "process.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");   //You are telling the server how your data is formatted when you send it.
                                                                                 //example name=Raj, key=value&key2=value2 ...
    // When PHP sends response
    xhr.onload = function() {
        document.getElementById("result").innerHTML = this.responseText;
    };

    // Send data to PHP
    xhr.send("name=" + userName);
}
<\/script>

</body>
</html>



📌 2. PHP File: process.php
<?php
// Read data sent from AJAX
$name = $_POST['name'];

// Send response back to AJAX
echo "Hello, " . $name;
?>



✔ How it works (short):

User enters name → clicks button
JavaScript sends data to PHP using AJAX (POST).
PHP receives data and returns a message.
JavaScript updates the webpage without reload.
      

------------------------------------------------------------------------------


get method example :


<!DOCTYPE html>
<html>
<body>

<input type="text" id="name" placeholder="Enter Name">
<button onclick="sendData()">Send</button>

<p id="result"></p>

<script>
function sendData() {
    let userName = document.getElementById("name").value;

    // Create AJAX object
    let xhr = new XMLHttpRequest();

    // Send data using GET (added in URL)
    xhr.open("GET", "process.php?name=" + encodeURIComponent(userName), true);

    // When PHP sends response
    xhr.onload = function() {
        document.getElementById("result").innerHTML = this.responseText;
    };

    // GET does NOT send body, so no xhr.send(data)
    xhr.send();
}
<\/script>

</body>
</html>



💡 PHP (process.php)
<?php
echo "Hello, " . $_GET['name'];
?>



| Code                                | Means                                      |
| ----------------------------------- | ------------------------------------------ |
| xhr.responseText                    | Directly using the variable name           |
| this.responseText (inside onload)   | Browser automatically sets this to xhr     |


🔍 WHY we don’t write setRequestHeader() in GET?

Because:
✔ GET sends data inside the URL
✔ GET does not send a body
✔ Therefore no content type is needed

Only POST needs this header to describe the body format.

📌 Summary
| Method   | Where Data Goes | Need Request Header?   |
| -------- | --------------- | -----------------------|
| GET      | URL             | ❌ No                 |
| POST     | Request body    | ✅ Yes                |

      `},{id:44,question:"44. Explain exception handling in detail.",answer:"",codeExample:`
✅ Exception Handling in PHP (Detailed Explanation)

Exception Handling is a mechanism in PHP that allows you to detect errors, handle them safely, and 
continue program execution without crashing the script.

Instead of stopping the program when an error happens, PHP throws an Exception object, and you handle it 
using:

try
catch
throw
finally (optional)

⭐ Why Do We Need Exception Handling?

Because errors happen in real projects:

  Database not connected
  File not found
  API request failed
  Wrong user input

Instead of showing a scary error, we can show a safe, user-friendly message.

🔷 Keywords Used in Exception Handling

1️⃣ try block

Code that may cause an error.
PHP watches this block.

try {
    // risky code
}


2️⃣ catch block

Runs only if an exception occurs.
Receives the exception object.

catch (Exception $e) {
    echo $e->getMessage();
}


3️⃣ throw

Used to manually create (throw) an exception.
throw new Exception("Something went wrong");


4️⃣ finally (optional)

Always runs — error or no error.
Used for cleanup (closing DB, files, etc.)

finally {
    echo "Done!";
}


✅ Simple Example of Exception Handling

<?php
try {
    $num = 0;

    if ($num === 0) {
        throw new Exception("Number cannot be zero!");
    }

    echo 10 / $num;
}

catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

finally {
    echo " — Process Finished";
}
?>


Output:

Error: Number cannot be zero! — Process Finished


📌 finally runs even when an error happens.

⭐ How It Works (Simple Explanation)
      
| Part      | Meaning                                  |
| --------- | ---------------------------------------- |
| try       | Code that might break                    |
| throw     | When error happens, throw exception      |
| catch     | Catches exception and shows safe message |
| finally   | Always runs at the end                   |

      `},{id:45,question:"45. How to avoid errors in PHP?",answer:"",codeExample:`
✅ How to Avoid Errors in PHP

Avoiding errors in PHP means writing clean, safe, and predictable code. Below are the best methods:


1. Use Proper Error Reporting (During Development)

Enable errors while developing so you can find mistakes early.

error_reporting(E_ALL);
ini_set("display_errors", 1);

Why?
You can quickly see undefined variables, wrong function names, missing semicolons, etc.


2. Turn Off Error Display in Production

On live servers, errors should not be shown to users.

ini_set("display_errors", 0);

Why?
Showing errors can reveal sensitive information (file paths, queries, etc.).


3. Always Use try–catch Blocks

Wrap risky code inside try–catch to prevent the script from crashing.

try {
    $num = 10 / 0;
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}


4. Validate User Input

Always check if the input is correct before using it.

Example:

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email!";
}


Why?
Avoids type errors, SQL errors, unexpected null values, etc.


5. Sanitize User Input

Remove dangerous characters before using input.

$name = filter_var($name, FILTER_SANITIZE_STRING);

Why?
Prevents HTML/JS and SQL injection issues.


6. Use isset() and empty() Before Accessing Variables

Avoid “undefined index” or “undefined variable” errors.

if (isset($_POST['name'])) {
    echo $_POST['name'];
}


7. Use file_exists() Before Reading Files
if (file_exists("data.txt")) {
    $content = file_get_contents("data.txt");
}


Why?
Prevents file-not-found errors.


8. Use Prepared Statements for Database Queries

Avoid SQL errors and injections.

$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();


9. Check Database Connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


10. Write Comments and Keep Code Clean

Helps avoid logical mistakes and confusion.


11. Use Version Control (Git)

You can recover from mistakes and avoid breaking the project.


12. Test Your Code Regularly

Run small pieces frequently to avoid big failures later.


✅ Simple Summary

| Method              | Why it Avoids Errors          |
| ------------------- | ----------------------------- |
| Error reporting on  | Detect mistakes early         |
| try–catch           | Prevent crashes               |
| Validate input      | Avoid wrong data              |
| Sanitize input      | Avoid unsafe data             |
| Check variables     | Avoid undefined index errors  |
| Prepared statements | Avoid SQL errors              |
| Check file/database | Avoid missing resource errors |

      `},{id:51,question:"51. Explain Classes & Objects with example.",answer:"",codeExample:`
Classes & Objects in PHP

Class

A class is a blueprint/template.
It defines properties (variables) and methods (functions).
It does NOT take memory until an object is created.


Object

An object is created from a class.
It actually stores data and can use class functions.
You can create many objects from one class.


Simple Example
Step-by-step:

1. Create a Class

<?php
class Car {
    public $model;      // property
    public $color;      // property

    public function startEngine() {   // method
        return "Engine Started!";
    }
}
?>


2. Create an Object

<?php
$myCar = new Car();  // object

$myCar->model = "BMW";  
$myCar->color = "Black";

echo $myCar->startEngine();  // calling method
?>


Output:
Engine Started!


Explanation in Easy Words

| Term           | Meaning                              |
| -------------- | ------------------------------------ |
| Class          | Blueprint (design) of something.     |
| Object         | Actual item made from the blueprint. |
| Properties     | Data/variables inside the class.     |
| Methods        | Functions inside the class.          |
| new            | Used to create object from class.    |


Real-Life Analogy

  Class = Mobile Phone Design
  Object = Actual Mobile Phone you use
  Many phones can be created from one design → same like many objects from one class.
      
      `},{id:52,question:"52. Explain Methods in OOP with example.",answer:"",codeExample:`
✅ Methods in OOP (PHP)

Methods are functions written inside a class.
They define the behavior / actions of an object.

A class = blueprint
An object = real thing created from class
A method = function that object can perform

✅ Simple Example
Class with Method

<?php
class Car {

    // Method
    function startEngine() {
        echo "Engine started!";
    }
}

// Create object
$myCar = new Car();

// Call method
$myCar->startEngine();
?>


Output
Engine started!


📝 Explanation

class Car → blueprint of car
function startEngine() → method written inside class
$myCar = new Car() → object created
$myCar->startEngine() → calling the method using object



✅ Methods with Parameters Example

<?php
class Calculator {

    // Method with parameters
    function add($a, $b) {
        return $a + $b;   // returns sum
    }
}

$obj = new Calculator();

echo $obj->add(10, 20);  // passing values
?>


Output
30


⭐ Methods Key Points

| Feature              | Explanation                          |
| -------------------- | ------------------------------------ |
| Defined inside class | Methods are functions within a class |
| Called by object     | $object->methodName()                |
| Can take parameters  | Input values to method               |
| Can return output    | return statement                     |
| Represent behavior   | What the object can do               |

      
      `},{id:53,question:"53. What is Inheritance? Explain with example.",answer:"",codeExample:`
✅ What is Inheritance? (Simple Explanation)

Inheritance allows one class (child) to use the properties and methods of another class (parent).

👉 It helps to reuse code and reduce duplication.


Example in real life:

  A Car is a Vehicle (Child → Parent).
  Car inherits features like engine, wheels, speed.


✅ Simple PHP Inheritance Example


Parent Class (Animal.php)

<?php
class Animal {
    public $name;

    function eat() {
        echo "Animal is eating<br>";
    }
}
?>



Child Class (Dog.php)

<?php
class Dog extends Animal {

    function bark() {
        echo "Dog is barking<br>";
    }
}
?>



Main File (index.php)

<?php
require 'Animal.php';
require 'Dog.php';

$dog = new Dog();
$dog->name = "Tommy";

echo $dog->name . "<br>";
$dog->eat();   // From parent class
$dog->bark();  // From child class
?>



✔ Parent functions reused
✔ Child has extra features
✔ Classes written in separate PHP tags



✅ Types of Inheritance in PHP

PHP supports these:


1. Single Inheritance

✔ One parent → One child

A → B

Example:

Animal → Dog


2. Multilevel Inheritance

✔ Child → becomes parent of another child

A → B → C

Example:

Animal → Dog → BabyDog


3. Hierarchical Inheritance

✔ One parent → multiple children

    A
   / \\
  B   C


Example:

Vehicle → Car, Bike



❌ PHP does NOT support Multiple Inheritance

(One child extending multiple parents)

A + B → C  (NOT allowed in PHP)

But you can use Traits to achieve this behavior.
      
      
      `},{id:54,question:"54. Write example of Constructor & Destructor.",answer:"",codeExample:`
✅ Constructor & Destructor in PHP (Simple Explanation)
Constructor

Special method that runs automatically when object is created.
Used for initialization (ex: assign default values).


Destructor

Special method that runs automatically when object is destroyed.
Used for cleanup (ex: closing file, database connection).



✅ Simple PHP Example

✔ Constructor Example

<?php
class Student {
    public $name;

    // Constructor
    function __construct($studentName) {
        $this->name = $studentName;
        echo "Constructor Called: Student name is $this->name<br>";
    }
}

// Create object
$stu1 = new Student("Raj");
?>


Output
Constructor Called: Student name is Raj



✔ Destructor Example

<?php
class Demo {
    // Destructor
    function __destruct() {
        echo "Destructor Called: Object Deleted";
    }
}

// Create object
$obj = new Demo();

// When script ends, destructor automatically runs
?>


Output
Destructor Called: Object Deleted



💡 Constructor + Destructor Together

<?php
class Person {
    public $name;

    function __construct($n) {
        $this->name = $n;
        echo "Hello $this->name, object created!<br>";
    }

    function __destruct() {
        echo "Goodbye $this->name, object destroyed!";
    }
}

$p = new Person("Mohan");
?>


Output

Hello Mohan, object created!
Goodbye Mohan, object destroyed!


🎯 Key Points   

| Constructor                               | Destructor                          |
| ----------------------------------------- | ----------------------------------- |
| Runs automatically when object is created | Runs automatically when script ends |
| Used for setup                            | Used for cleanup                    |
| __construct()                             | __destruct()                        |
| Can accept parameters                     | Cannot accept parameters            |

      `},{id:55,question:"55. What is Self keyword? What is Parent keyword?",answer:"",codeExample:`
✅ What is self Keyword in PHP?

self = used to access class’s own properties and methods.

Used inside the same class.
Works with static properties/methods.
Used with :: (scope resolution operator).


⭐ Example of self

<?php
class Test {
    public static $name = "Raj";

    public static function showName() {
        echo self::$name; // accessing same class static property
    }
}

Test::showName();
?>


✔ Output:
Raj



✅ What is parent Keyword in PHP?

parent = used to access methods or properties of the parent (base) class.

Used in inheritance.
Used when child wants to use parent class methods.
Used with :: (scope resolution operator).


⭐ Example of parent

<?php
class A {
    public function message() {
        echo "Message from Parent Class A";
    }
}

class B extends A {
    public function show() {
        parent::message(); // calling parent class method
    }
}

$obj = new B();
$obj->show();
?>


✔ Output:

Message from Parent Class A


🔍 Quick Difference: self vs parent

| Keyword      | Used For                                     | Meaning          |
| ------------ | -------------------------------------------- | ---------------- |
| self::       | Access class’s own static methods/properties | “Use same class” |
| parent::     | Access parent class methods/properties       | “Use base class” |



----------------------------------------------------------------------------------


What is static keyword in PHP?

The static keyword is used to create properties (variables) and methods (functions) in a class that belong 
to the class itself, not to any object.

✔ You can access static members without creating an object
✔ Static properties keep their value between function calls
✔ Static methods cannot use $this (because they don’t work with objects)


1. Static Property Example

Static property = shared by all objects.

<?php

class Counter {
    public static $count = 0;  // static property

    public function increase() {
        self::$count++;  // accessing static property
    }
}

$obj1 = new Counter();
$obj1->increase();

$obj2 = new Counter();
$obj2->increase();

echo Counter::$count; // Output: 2
?>


Why result is 2?

Because static $count is shared—both objects increase the same value.


2. Static Method Example

Static method = call directly using class name.

<?php

class MathTool {
    public static function add($a, $b) {
        return $a + $b;
    }
}

echo MathTool::add(5, 3); // Output: 8
?>


✔ No need to create an object
✔ Works directly with class


3. Static inside a function

Static variables remember their value even after function ends.

<?php

function test() {
    static $x = 0;
    $x++;
    echo $x . "<br>";
}

test(); // 1
test(); // 2
test(); // 3
?>


When to use static?

Use static when:
  You want a value shared across all objects
  You want to call a method without creating an object
  You have helper/utility functions (like Math functions)
  You need counters or logs


Important Rules

✓ Access static items with
self::$variable
self::method()

✓ Cannot use $this inside static methods
(because $this is for objects, but static is for class)
      
      `},{id:56,question:"56. Explain Object Cloning with example.",answer:"",codeExample:`
⭐ Object Cloning in PHP

Object Cloning means creating a copy of an existing object.

In PHP, we clone an object using the keyword:


clone


When you clone:

A new object is created.
All properties of the old object are copied.
Both objects become separate copies (changing one does NOT affect the other).


✅ Simple Example
File: obj1.php

<?php

class Student {
    public $name;
    public $course;
}

$student1 = new Student();
$student1->name = "Raj";
$student1->course = "BCA";

$student2 = clone $student1;   // cloning

$student2->name = "Amit";      // change copied object

echo "Student 1: " . $student1->name . "<br>";
echo "Student 2: " . $student2->name;

?>


🎯 Output

Student 1: Raj
Student 2: Amit


Meaning:

  Changing $student2 does not change $student1.
  They are separate objects after cloning.


  
⭐ Using __clone() Method

If you want some extra action during cloning (like resetting values), PHP provides the magic method:

__clone()


Example with __clone()

<?php

class Book {
    public $title;
    public $price;

    public function __clone() {
        // This runs automatically during cloning
        $this->price = 0;  
    }
}

$book1 = new Book();
$book1->title = "PHP Guide";
$book1->price = 500;

$book2 = clone $book1;

echo $book1->price . "<br>";  // 500
echo $book2->price;           // 0 (reset in __clone)

?>


✔ Key Points

| Feature         | Description                                  |
| --------------- | -------------------------------------------- |
| clone keyword   | Creates a copy of object                     |
| __clone()       | Special method that runs during cloning      |
| Separate memory | Cloned object changes do NOT affect original |
| Used for        | Creating duplicate objects safely            |

      
      `},{id:57,question:"57. Explain OOP with MySQL using database class.",answer:"",codeExample:`
✅ OOP with MySQL Using Database Class (Easy Explanation)

OOP with MySQL means:

  We create a Database class
  That class handles connection, insert, update, delete, select
  Then we create an object of that class and use it anywhere.

This makes code clean, reusable, and easy to manage.



✅ Simple Example: Database Class in PHP

📌 database.php
<?php
class Database {
    private $conn;

    // Constructor → Connect to MySQL
    public function __construct($host, $user, $pass, $db) {
        $this->conn = new mysqli($host, $user, $pass, $db);

        if ($this->conn->connect_error) {
            die("Connection Failed: " . $this->conn->connect_error);
        }
    }

    // SELECT data
    public function getData($sql) {
        $result = $this->conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    // INSERT, UPDATE, DELETE
    public function executeQuery($sql) {
        return $this->conn->query($sql);
    }

    // Destructor → Close Database
    public function __destruct() {
        $this->conn->close();
    }
}
?>



✅ Using the Database Class
📌 fetch_users.php

<?php
include "database.php";

$db = new Database("localhost", "root", "", "testdb");

$data = $db->getData("SELECT * FROM users");

foreach ($data as $row) {
    echo $row['name'] . "<br>";
}
?>



📌 insert_user.php

<?php
include "database.php";

$db = new Database("localhost", "root", "", "testdb");

$sql = "INSERT INTO users (name, email) VALUES ('Raj', 'raj@gmail.com')";
$db->executeQuery($sql);

echo "User Inserted Successfully!";
?>


✅ Why Use OOP for Database?

| Feature              | Benefit                        |
| -------------------- | ------------------------------ |
| Reusability          | Same class used for many pages |
| Security             | One place to update queries    |
| Clean Code           | Logic separated from design    |
| Easy Maintenance     | Only one class to modify       |



⭐ Summary (Very Simple)

Create a Database class
Use constructor to connect
Use functions for select and insert/update/delete
Use destructor to close connection
Create an object to use database anywhere
      
      `},{id:58,question:"58. Difference between Class and Object.",answer:"",codeExample:`
✅ Difference between Class and Object
    
| Class                                              | Object                                                 |
| ---------------------------------------------------| -------------------------------------------------------|
| Class is a blueprint / template.                   | Object is a real instance created from a class.        |
| It defines properties and methods.                 | It uses properties and methods of the class.           |
| It does not occupy memory until object is created. | It occupies memory.                                    |
| Class is like a plan of a house.                   | Object is the actual built house.                      |
| You can create many objects from one class.        | Each object is unique but created from the same class. |
| Class is declared using the class keyword.         | Object is created using the new keyword.               |
| Example: class Car { }                             | Example: $c1 = new Car();                              |



✅ Simple Example (Separate PHP tags as you want)

Class

<?php
class Car {
    public $brand;
    public $color;

    public function start() {
        echo "Car is starting...";
    }
}
?>



Object

<?php
$myCar = new Car();        // Creating object
$myCar->brand = "Honda";   // Access property
$myCar->color = "Red";

echo $myCar->brand;        // Output: Honda
$myCar->start();           // Calling method
?>


⭐ Super Easy Explanation

Class = Design / Blueprint
Object = Real thing created from the design
      
      `},{id:59,question:"59. Why OOP is used in PHP?",answer:"",codeExample:`
✅ Why OOP is used in PHP?

(OOP = Object-Oriented Programming)

OOP is used in PHP because it makes coding cleaner, faster, reusable, and easy to manage, especially for 
large projects.


⭐ Main Reasons Why OOP is Used in PHP

1. Reusability of Code

Once you create a class, you can use it many times.
Avoids writing the same code again.
Example: Database class, User class, Email class.


2. Easy to Maintain

Code is organized into classes → easier to update and fix.
You change something in one class, and it affects all objects.


3. Better Organization

Data + functions stay together inside a class.
Makes the project look clean and structured.


4. Security

OOP gives access modifiers:
  public
  private
  protected
Helps hide important data (Encapsulation).


5. Supports Real-World Modeling

Everything can be represented as objects.
Example: Car, Student, Product, Order.


6. Inheritance reduces code

Child classes can use parent class methods.
Less code → faster development.


7. Polymorphism

Same function name but different behavior.
Used in frameworks and large systems.


8. Used in Modern PHP Frameworks

All major frameworks use OOP:

  Laravel
  CodeIgniter
  Symfony
  WordPress (mostly)

So to work professionally, OOP is required.


⭐ Final Short Answer

OOP is used in PHP because it provides code reusability, security, easy maintenance, better structure, 
real-world modeling, inheritance, and is required for modern frameworks.
      
      `},{id:60,question:"60. Explain method overriding and method overloading with example.",answer:"",codeExample:`
✅ Method Overriding (Supported in PHP)

Definition:
When a child class redefines a method of the parent class, using the same name and same parameters.

👉 Used in Inheritance
👉 Runtime Polymorphism


✔ Example of Method Overriding

File: ParentClass.php

<?php
class ParentClass {
    public function showMessage() {
        echo "Message from Parent Class";
    }
}
?>


File: ChildClass.php

<?php
class ChildClass extends ParentClass {
    // Overriding parent method
    public function showMessage() {
        echo "Message from Child Class";
    }
}
?>


File: test.php

<?php
include "ParentClass.php";
include "ChildClass.php";

$obj = new ChildClass();
$obj->showMessage();   // Output: Message from Child Class
?>


✔ Child method replaces Parent method.



❌ Method Overloading (NOT supported like Java)

PHP does NOT support method overloading by same method name with different parameters.

BUT
PHP supports overloading using Magic Methods:

__call() → for calling missing methods
__callStatic() → for missing static methods


✔ PHP Method Overloading Example (Using __call)

File: Test.php

<?php
class Student {
    // Overloading using magic method
    public function __call($name, $arguments) {
        echo "Method: $name | Arguments: ";
        print_r($arguments);
    }
}
?>


File: run.php

<?php
include "Test.php";

$obj = new Student();

$obj->details("Raj");  
$obj->details("Raj", 21);  
?>


Output:

Method: details | Arguments: Array ( [0] => Raj )
Method: details | Arguments: Array ( [0] => Raj [1] => 21 )



✔ Same method name can accept different arguments using __call()
✔ This is PHP style method overloading.



✅ Difference Table

| Feature           | Method Overriding     | Method Overloading                     |
| ----------------- | --------------------- | -------------------------------------- |
| Supported in PHP? | ✔ Yes                 | ✔ Partially (Magic methods)           |
| Used in           | Inheritance           | Same class                             |
| Method name       | Same                  | Same                                   |
| Parameters        | Same                  | Different                              |
| Purpose           | Replace parent method | Handle different argument types/counts |
| Binding           | Runtime               | Runtime                                |



⭐ Quick Summary

Overriding → Child class replaces parent class method.
Overloading → Same method name with different arguments (via __call).  



------------------------------------------------------------------------------


✅ What is __call()?

__call() is a magic method in PHP.

✔ It runs automatically
✔ When you try to call a non-existing method on an object.


Syntax

public function __call($methodName, $arguments) { }


Simple Example

<?php
class Test {
    public function __call($method, $args) {
        echo "Method '$method' does not exist!<br>";
        print_r($args);
    }
}

$obj = new Test();
$obj->hello("Raj", 20); 
?>


Output

Method 'hello' does not exist!
Array ( [0] => Raj [1] => 20 )



✅ What is __callStatic()?

__callStatic() is also a magic method, BUT:

✔ Used for static method calls
✔ Runs when a static non-existing method is called


Syntax

public static function __callStatic($methodName, $arguments) { }


Example

<?php
class Demo {
    public static function __callStatic($method, $args) {
        echo "Static method '$method' not found!<br>";
        print_r($args);
    }
}

Demo::foo(100, 200);
?>


Output

Static method 'foo' not found!
Array ( [0] => 100 [1] => 200 )



🔍 Difference between __call() and __callStatic()

| Feature          | __call()                             | __callStatic()                             |
| ---------------- | -------------------------------------| -------------------------------------------|
| When it is used? | When object calls a missing method   | When class calls a missing static method   |
| Call type        | $obj->method()                       | ClassName::method()                        |
| Static or not?   | Works for non-static methods         | Works for static methods                   |
| Method type      | Called on object instance            | Called on class without creating object    |
| Example          | $obj->hello()                        | Demo::hello()                              |


✅ What is print_r()?

print_r() is a built-in PHP function used to print arrays and objects in a readable format.

Example

<?php
$arr = ["Raj", 25, "PHP"];
print_r($arr);
?>


Output

Array ( [0] => Raj [1] => 25 [2] => PHP )

Used mainly for:

✔ Debugging
✔ Checking object values
✔ Printing array contents


🔥 Final Summary

__call()

  Triggered when calling object method that doesn’t exist
  Example: $obj->abc()


__callStatic()

  Triggered when calling static method that doesn’t exist
  Example: Test::abc()


print_r()

  Displays arrays/objects in readable format
  Used for debugging


-----------------------------------------------------------------------------


✅ Meaning of :: in PHP

:: is called the Scope Resolution Operator.

It is used to access:

  Static methods
  Static properties
  Class constants
  Class methods without creating an object

In your example:

  Demo::foo();

You are calling a static method (or trying to).


🧠 Why is __callStatic() executed?

Because foo() does not exist in the class.


PHP checks:


1️⃣ Does Demo class have a static function named foo()?
❌ No, it doesn’t.


2️⃣ So PHP calls the magic method:

public static function __callStatic($method, $args)


🔍 So this happens:

Demo::foo(100, 200);


PHP runs:

$method = "foo"
$args = [100, 200]


Output:

Static method 'foo' not found!
Array ( [0] => 100 [1] => 200 )


--------------------------

✅ Difference Between :: and -> (Simple Table)

| Operator               | Symbol | Used For                                                | Example       | Meaning                           |
| -----------------------| -------| --------------------------------------------------------| --------------| ----------------------------------|
| Static Access Operator | ::     | Access static methods, static properties, and constants | Demo::test(); | Use class without creating object |
| Object Access Operator | ->     | Access normal (non-static) methods and properties       | $obj->test(); | Requires creating an object first |



📌 More Easy Explanation — Row by Row

| Concept             | ::                     | ->                   |
| ------------------- | -----------------------| ---------------------|
| Need object?        | ❌ No object required  | ✔ Yes, needs object |
| Used in static?     | ✔ Yes                  | ❌ No               |
| Used in non-static? | ❌ No                  | ✔ Yes               |
| Access type         | Class level            | Object level         |
| Example             | Demo::hello()          | $d->hello()          |


📘 Example to Understand Clearly

Using :: (static)

class Test {
    public static function hello() {
        echo "Static Hello!";
    }
}

Test::hello();

Using -> (object)
class Test {
    public function hello() {
        echo "Object Hello!";
    }
}

$obj = new Test();
$obj->hello();
      `},{id:61,question:"61. Explain access modifiers (public/protected/private).",answer:"",codeExample:`
✅ Access Modifiers in PHP (public, protected, private)

Access modifiers define who can access the properties and methods of a class.

1️⃣ public

Accessible from anywhere
  Inside the class
  Outside the class
  In child classes (inheritance)
Most open access.

✔ Example
class Test {
    public $name = "Raj";

    public function showName() {
        echo $this->name;
    }
}

$obj = new Test();
$obj->showName();      // Allowed
echo $obj->name;       // Allowed



2️⃣ protected

Accessible only:

  Inside the class
  Inside child classes

❌ Not accessible from outside the class

✔ Example
class A {
    protected $value = 100;
}

class B extends A {
    public function show() {
        echo $this->value;   // Allowed
    }
}

$obj = new B();
$obj->show();             // Allowed
echo $obj->value;         // ❌ ERROR (outside class)



3️⃣ private

Accessible only:
  Inside the same class
❌ Not accessible in child classes
❌ Not accessible outside

✔ Example

class A {
    private $secret = "Hidden";

    public function showSecret() {
        echo $this->secret;   // Allowed
    }
}

class B extends A {
    public function test() {
        echo $this->secret;   // ❌ ERROR (child class cannot access private)
    }
}

$obj = new A();
$obj->showSecret();          // Allowed
echo $obj->secret;           // ❌ ERROR (outside)



📌 Quick Comparison Table

| Modifier      | Same Class | Child Class | Outside Class |
| ------------- | ---------- | ----------- | ------------- |
| public        | ✔ Yes      | ✔ Yes      | ✔ Yes         |
| protected     | ✔ Yes      | ✔ Yes      | ❌ No         |
| private       | ✔ Yes      | ❌ No      | ❌ No         |


🎯 Simple Real-Life Example

class BankAccount {

    public $name;           // anyone can see your name
    protected $balance;     // only you + bank system
    private $pin;           // only you (class)

    public function __construct($n, $b, $p) {
        $this->name = $n;
        $this->balance = $b;
        $this->pin = $p;
    }

    public function showBalance() {
        echo "Balance: " . $this->balance;
    }
}

$obj = new BankAccount("Raj", 5000, 1234);

echo $obj->name;        // ✔ Allowed
$obj->showBalance();    // ✔ Allowed

echo $obj->balance;     // ❌ Not allowed (protected)
echo $obj->pin;         // ❌ Not allowed (private)
      


-------------------------------------------------------------


“Inside <?php ?> multiple classes are allowed? You earlier said it is not possible?”

✔ Yes — multiple classes CAN exist inside one PHP file.
✔ That is completely allowed and normal.

What I said earlier was something different:


🔥 One class cannot access another class’s private property.

Not "you cannot write multiple classes in one file."
These are two different things.

Let me explain cleanly 👇

✅ 1. Multiple classes inside a single PHP file → ALLOWED

Example:

<?php
class A {}
class B {}
class C {}
?>


✔ 100% valid
✔ No error
✔ Used in many real projects


❌ 2. Child class cannot access parent’s private property

This is the rule that caused confusion.

class A {
    private $secret = "Hidden";
}

class B extends A {
    public function test() {
        echo $this->secret;  // ❌ ERROR (private not accessible)
    }
}


So the error is because of private, not because of multiple classes.


🎯 Why does this work?

$obj = new B();
$obj->showSecret(); // Allowed


Because showSecret() is inside class A, where $secret is private.
Inside the same class, private properties ARE allowed.


🎯 Why does this give error?

class B extends A {
    public function test() {
        echo $this->secret; // ❌ ERROR
    }
}


Because child class B cannot access A’s private property.

Even though both classes are inside one PHP file —
private visibility rules still apply.



✔ Final Summary (Easy)

| Concept                                           | Allowed? | Reason                           |
| ------------------------------------------------- | -------- | -------------------------------- |
| Multiple classes in one PHP file                  | ✔ YES    | PHP supports it                  |
| Access parent’s private property from child       | ❌ NO    | Private = only inside same class |
| Access private property inside its own class      | ✔ YES    | That’s how private works         |
| Access private property from outside using object | ❌ NO    | Not allowed                      |


If you want, I can show you the difference between:

private
protected
public
      
      `},{id:62,question:"62. Write code for simple PHP class.",answer:"",codeExample:`

      ✅ Simple PHP Class Example

<?php

class Car {
    public $brand;     // property
    public $color;     // property

    // Method to set car details
    public function setDetails($brand, $color) {
        $this->brand = $brand;   // using $this to access object property
        $this->color = $color;
    }

    // Method to display car details
    public function showDetails() {
        echo "Brand: " . $this->brand . "<br>";
        echo "Color: " . $this->color;
    }
}

$car1 = new Car();           // creating object
$car1->setDetails("BMW", "Black");
$car1->showDetails();

?>


🔍 Explanation (Easy & Simple)

1. Class

A blueprint/template.
Contains properties (variables) and methods (functions).


2. Object

Created from the class.
Has its own data.


3. Important keywords

$this → used inside class to access object properties.
new → used to create object.
      
      `},{id:63,question:"63. variable like types, type casting, etc..",answer:"",codeExample:`
✅ What is a Variable in PHP?

A variable is used to store data (value) in a program.

📌 In PHP, a variable starts with $

Syntax
$variable_name = value;

Example
$name = "Raj";
$age = 20;


✅ Rules for PHP Variables

Must start with $
Cannot start with a number
Case-sensitive ($name ≠ $Name)
Can contain letters, numbers, _


✅ Types of Variables in PHP (Based on Scope)

1️⃣ Local Variable

Declared inside a function
Used only inside that function

Example
function show() {
    $x = 10;   // local variable
    echo $x;
}
show();


2️⃣ Global Variable

Declared outside a function
To use inside function → use global keyword

Example
$x = 20;   // global variable

function test() {
    global $x;
    echo $x;
}
test();


3️⃣ Static Variable

Value is not destroyed after function ends

Example
function counter() {
    static $count = 0;
    $count++;
    echo $count . "<br>";
}
counter();
counter();
counter();


Output

1
2
3



✅ PHP Data Types (Variable Types)

1️⃣ Integer
$a = 10;

2️⃣ Float (Decimal)
$b = 10.5;

3️⃣ String
$name = "Raj";

4️⃣ Boolean
$isLogin = true;

5️⃣ Array
$colors = array("Red", "Blue", "Green");

6️⃣ NULL
$x = null;


✅ Dynamic Typing in PHP

PHP decides variable type automatically

$x = 10;      // integer
$x = "Raj";   // string




✅ Type Casting in PHP

Changing one data type to another.

Syntax
(type) variable;


🔹 Types of Type Casting

1️⃣ Integer Casting
$x = "10";
$y = (int)$x;
echo $y;

2️⃣ Float Casting
$x = "10.5";
$y = (float)$x;

3️⃣ String Casting
$x = 100;
$y = (string)$x;

4️⃣ Boolean Casting
$x = 1;
$y = (bool)$x;



✅ Type Checking Functions

| Function    | Use             |
| ------------| --------------- |
| is_int()    | checks integer  |
| is_float()  | checks float    |
| is_string() | checks string   |
| is_bool()   | checks boolean  |
| gettype()   | shows data type |

Example
$x = 10;
echo gettype($x);


Output
integer



✅ Variable Variables

Variable name stored inside another variable 😄

Example

$name = "age";
$$name = 20;
echo $age;


Output
20



✅ Constants (Difference from Variable)

Value cannot change

No $ sign

Syntax
define("PI", 3.14);
echo PI;



⭐ Summary (Very Easy Words)

Variable = storage for data
$ is compulsory
PHP supports dynamic typing
Types: int, float, string, boolean, array
Type casting = change data type
Scope types: local, global, static
      
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1.1,question:"1. HTML Page Design your Profile page with following details: - Personal Details - Educational Details - Profile Picture - Link of your workspace directory",answer:"",codeExample:`
<!DOCTYPE html>
<html>
<head>
    <title>My Profile Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f2f2f2;
        }
        .container {
            width: 60%;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px gray;
        }
        h1, h2 {
            text-align: center;
            color: #333;
        }
        img {
            display: block;
            margin: 10px auto;
            border-radius: 50%;
            width: 150px;
            height: 150px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        table, th, td {
            border: 1px solid gray;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        a {
            display: block;
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
            text-decoration: none;
            color: blue;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>My Profile</h1>

    <!-- Profile Picture -->
    <img src="profile.jpg" alt="My Profile Picture">

    <!-- Personal Details -->
    <h2>Personal Details</h2>
    <table>
        <tr>
            <th>Name</th>
            <td>Raj Makwana</td>
        </tr>
        <tr>
            <th>Date of Birth</th>
            <td>01-Jan-2002</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>raj@example.com</td>
        </tr>
        <tr>
            <th>Mobile</th>
            <td>+91 9876543210</td>
        </tr>
    </table>

    <!-- Educational Details -->
    <h2>Educational Details</h2>
    <table>
        <tr>
            <th>Course</th>
            <th>Institute</th>
            <th>Year</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>BCA</td>
            <td>XYZ College</td>
            <td>2023</td>
            <td>First Class</td>
        </tr>
        <tr>
            <td>MCA</td>
            <td>Parul University</td>
            <td>2025</td>
            <td>Pursuing</td>
        </tr>
    </table>

    <!-- Workspace Directory -->
    <a href="http://localhost/workspace/" target="_blank">My Workspace Directory</a>
</div>

</body>
</html>

      
      
      `},{id:2.2,question:"2. Web Page design with CSS Create a general stylesheet to apply on your developed webpages. [ Use CSS class, CSS Groups and CSS tags ]",answer:"",codeExample:`
<!DOCTYPE html>
<html>
<head>
    <title>Web Page with General Stylesheet</title>
    <style>
        /* CSS Tag Selector */
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 20px;
        }

        h1 {
            text-align: center;
            color: darkblue;
        }

        p {
            font-size: 16px;
            color: #333;
        }

        /* CSS Class Selector */
        .box {
            border: 2px solid gray;
            background: white;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
            box-shadow: 0px 0px 5px gray;
        }

        .highlight {
            color: red;
            font-weight: bold;
        }

        /* CSS Group Selector */
        h2, h3, h4 {
            color: darkgreen;
            font-family: Verdana, sans-serif;
        }

        /* CSS ID Selector (optional for uniqueness) */
        #footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: gray;
        }
    </style>
</head>
<body>

    <h1>Welcome to My Web Page</h1>

    <div class="box">
        <h2>About Me</h2>
        <p>Hello, my name is <span class="highlight">Raj Makwana</span>. I am pursuing MCA at Parul University.</p>
    </div>

    <div class="box">
        <h3>My Skills</h3>
        <ul>
            <li>Web Development</li>
            <li>Database Management</li>
            <li>Programming in C, C++, PHP</li>
        </ul>
    </div>

    <div class="box">
        <h4>Contact</h4>
        <p>Email: raj@example.com</p>
        <p>Phone: +91 9876543210</p>
    </div>

    <div id="footer">
        © 2025 My Profile Page
    </div>

</body>
</html>

      
      `},{id:3.3,question:"3. Registration Form Web Develop an online Admission Registration page.",answer:"",codeExample:`
<!DOCTYPE html>
<html>
<head>
    <title>Admission Registration</title>
</head>
<body>
    <h1>Admission Registration Form</h1>
    <form method="post">
        <label>Name:</label>
        <input type="text" name="name" required><br><br>

        <label>Email:</label>
        <input type="email" name="email" required><br><br>

        <label>Phone:</label>
        <input type="text" name="phone" required><br><br>

        <label>Course:</label>
        <select name="course">
            <option>BCA</option>
            <option>B.Sc IT</option>
            <option>B.Tech</option>
            <option>MCA</option>
        </select><br><br>

        <input type="submit" value="Register">
    </form>
    
</body>
</html>
<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    echo "<h1>Registration Successful</h1>";
    echo "Name: " . $_POST['name'] . "<br>";
    echo "Email: " . $_POST['email'] . "<br>";
    echo "Phone: " . $_POST['phone'] . "<br>";
    echo "Course: " . $_POST['course'] . "<br>";
}
?>
      
      `},{id:4.4,question:"4. Type Conversion through Script Write a script to perform all possible type casting and conversion operations in PHP. Design output page in following format. Variable Name Variable Type Converted Type Converted Value",answer:"",codeExample:`
<!DOCTYPE html>
<html>
<head>
    <title>Type Conversion in PHP</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            margin: 20px;
        }
        table {
            width: 80%;
            margin: auto;
            border-collapse: collapse;
            background: white;
        }
        th, td {
            border: 1px solid gray;
            padding: 10px;
            text-align: center;
        }
        th {
            background: darkblue;
            color: white;
        }
    </style>
</head>
<body>

<h2 align="center">Type Conversion in PHP</h2>

<?php
// Define variables
$intVar = 100;       // Integer
$floatVar = 45.67;   // Float
$strVar = "123";     // String
$boolVar = true;     // Boolean

// Array to store test cases
$variables = [
    "intVar"   => $intVar,
    "floatVar" => $floatVar,
    "strVar"   => $strVar,
    "boolVar"  => $boolVar
];

// Function to display conversions
function displayConversion($name, $value, $convertedType, $convertedValue) {
    echo "<tr>
            <td>$name</td>
            <td>" . gettype($value) . "</td>
            <td>$convertedType</td>
            <td>$convertedValue</td>
          </tr>";
}

echo "<table>";
echo "<tr>
        <th>Variable Name</th>
        <th>Variable Type</th>
        <th>Converted Type</th>
        <th>Converted Value</th>
    </tr>";

// Conversion examples
foreach ($variables as $name => $value) {
    // Convert to Integer
    displayConversion($name, $value, "Integer", (int)$value);

    // Convert to Float
    displayConversion($name, $value, "Float", (float)$value);

    // Convert to String
    displayConversion($name, $value, "String", (string)$value);

    // Convert to Boolean
    displayConversion($name, $value, "Boolean", (bool)$value);
}

echo "</table>";
?>

</body>
</html>

      
      
      `},{id:5.5,question:"5. Login and SignUp Page Display Login and SignUp page and redirect to Profile or Registration page accordingly.",answer:"",codeExample:`
signup.php


<?php
$conn = mysqli_connect("localhost", "root", "", "student_db");

if(isset($_POST['signup'])){
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $insert = "INSERT INTO users(username,password) VALUES('$user','$pass')";
    mysqli_query($conn, $insert);
    echo "you acoount has been created";
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Signup Page</title>
    <style>
        body {
            font-family: Arial;
            background: linear-gradient(135deg, #74ebd5, #ACB6E5);
            text-align: center;
            padding-top: 80px;
        }
        form {
            background: white;
            width: 300px;
            margin: auto;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }
        input {
            width: 90%;
            padding: 8px;
            margin: 8px;
        }
        input[type=submit] {
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
        .msg {
            margin-top: 20px;
            color: green;
        }
    </style>
</head>
<body>
    <form method="POST">
        <h2>Sign Up</h2>
        <input type="text" name="username" placeholder="Enter Username" required><br>
        <input type="password" name="password" placeholder="Enter Password" required><br>
        <input type="submit" name="signup" value="Register">
        <div class='msg'>You have account than <a href='login.php'>Login Here</a></div>
    </form>
    
</body>
</html>


<!-- 
CREATE DATABASE student_db;
USE student_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(255)
); 
-->


----------------------------------------------------------------------


login.php

<?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "student_db");

if(isset($_POST['login'])){
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $check = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
    $result = mysqli_query($conn, $check);

    if(mysqli_num_rows($result) > 0){
        $_SESSION['username'] = $user;
        header("Location: profile.php");
    } else {
        echo "<div class='msg'>Invalid Login!</div>";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
    <style>
        body {
            font-family: Arial;
            background: linear-gradient(135deg, #f6d365, #fda085);
            text-align: center;
            padding-top: 80px;
        }
        form {
            background: white;
            width: 300px;
            margin: auto;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }
        input {
            width: 90%;
            padding: 8px;
            margin: 8px;
        }
        input[type=submit] {
            background: #28a745;
            color: white;
            border: none;
            cursor: pointer;
        }
        .msg {
            margin-top: 20px;
            color: red;
        }
    </style>
</head>
<body>
    <form method="POST">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="Enter Username" required><br>
        <input type="password" name="password" placeholder="Enter Password" required><br>
        <input type="submit" name="login" value="Login">
        <p>Don’t have an account? <a href="signup.php">Sign Up</a></p>
    </form>
</body>
</html>


----------------------------------------------------------------------


login.php

<?php
session_start();
session_destroy();
header("Location: login.php");
?>


----------------------------------------------------------------------


profile.php

<?php
session_start();
if(!isset($_SESSION['username'])){
    header("Location: login.php");
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Profile Page</title>
    <style>
        body {
            background: linear-gradient(135deg, #89f7fe, #66a6ff);
            text-align: center;
            padding-top: 100px;
            font-family: Arial;
        }
        .box {
            background: white;
            width: 350px;
            margin: auto;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }
        a {
            text-decoration: none;
            color: white;
            background: #dc3545;
            padding: 8px 15px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="box">
        <h2>Welcome, <?php echo $_SESSION['username']; ?> 🎉</h2>
        <p>You are successfully logged in.</p>
        <a href="logout.php">Logout</a>
    </div>
</body>
</html>


      
      
      `},{id:6.6,question:"6. Student Result Generation System Develop a Student Result Generation System. Provide following facilities: - Students Exam Detail Entry - Marks entry - Result Generation - Marksheet and Result Analysis",answer:"",codeExample:`
student_entry.php


<?php
$conn = mysqli_connect("localhost", "root", "", "student_result");

if(isset($_POST['save'])){
    $name = $_POST['name'];
    $roll = $_POST['roll'];
    $s1 = $_POST['s1'];
    $s2 = $_POST['s2'];
    $s3 = $_POST['s3'];

    mysqli_query($conn, "INSERT INTO students(name, roll_no, subject1, subject2, subject3)
                         VALUES('$name','$roll','$s1','$s2','$s3')");
    echo "<p style='color:green;'>Record Saved!</p>";
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Student Entry</title>
<style>
body{
  font-family:Arial;
  background:#f2f2f2;
  text-align:center;
}
form{
  background:white;
  width:320px;
  margin:auto;
  padding:20px;
  border-radius:10px;
  box-shadow:0 0 10px gray;
}
input{
  margin:5px;
  padding:8px;
  width:90%;
}
input[type=submit]{
  background:#007bff;
  color:white;
  border:none;
  cursor:pointer;
}
</style>
</head>
<body>
<h2>Student Detail Entry</h2>
  <form method="POST">
    <input type="text" name="name" placeholder="Name" required><br>
    <input type="text" name="roll" placeholder="Roll No" required><br>
    <input type="number" name="s1" placeholder="Subject 1 Marks" required><br>
    <input type="number" name="s2" placeholder="Subject 2 Marks" required><br>
    <input type="number" name="s3" placeholder="Subject 3 Marks" required><br>
    <input type="submit" name="save" value="Save">
  </form>
</body>
</html>

<!-- 
CREATE DATABASE student_result;

USE student_result;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    roll_no VARCHAR(20),
    subject1 INT,
    subject2 INT,
    subject3 INT
); 
-->



----------------------------------------------------------------------


maksheet.php

<?php
$conn = mysqli_connect("localhost", "root", "", "student_result");

if(isset($_POST['search'])){
    $roll = $_POST['roll'];
    $res = mysqli_query($conn, "SELECT * FROM students WHERE roll_no='$roll'");
    $row = mysqli_fetch_assoc($res);

    if($row){
        $total = $row['subject1'] + $row['subject2'] + $row['subject3'];
        $avg = $total / 3;
        $result = ($avg >= 35) ? "Pass" : "Fail";
    } else {
        echo "<p style='color:red;'>No Record Found!</p>";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Marksheet</title>
<style>
body{
    font-family:Arial;
    text-align:center;
    background:#e3f2fd;
}
table{
    margin:auto;
    border-collapse:collapse;
    width:60%;
}
th,td{
    border:1px solid gray;
    padding:8px;
}
th{
    background:#007bff;
    color:white;
}
</style>
</head>
<body>
<h2>Student Marksheet</h2>
    <form method="POST">
        <input type="text" name="roll" placeholder="Enter Roll No" required>
        <input type="submit" name="search" value="View Result">
    </form>
<?php if(isset($row)){ ?>
    <table>
        <tr><th>Name</th><td><?= $row['name'] ?></td></tr>
        <tr><th>Roll No</th><td><?= $row['roll_no'] ?></td></tr>
        <tr><th>Subject 1</th><td><?= $row['subject1'] ?></td></tr>
        <tr><th>Subject 2</th><td><?= $row['subject2'] ?></td></tr>
        <tr><th>Subject 3</th><td><?= $row['subject3'] ?></td></tr>
        <tr><th>Total</th><td><?= $total ?></td></tr>
        <tr><th>Average</th><td><?= $avg ?></td></tr>
        <tr><th>Result</th><td style="color:<?= $result=='Pass'?'green':'red' ?>;"><?= $result ?></td></tr>
    </table>
<?php } ?>
</body>
</html>

      
      
      `},{id:7.7,question:"7. Server-side Validations using regular Expression Design online placement registration form. Check for the validity of entered fields using regular expressions.",answer:"",codeExample:`
<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];

    // Regular Expressions
    $namePattern = "/^[A-Za-z ]+$/";
    $emailPattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[A-Za-z]{2,}$/";
    $mobilePattern = "/^[0-9]{10}$/";

    if(!preg_match($namePattern, $name))
        echo "Invalid Name!<br>";
    elseif(!preg_match($emailPattern, $email))
        echo "Invalid Email!<br>";
    elseif(!preg_match($mobilePattern, $mobile))
        echo "Invalid Mobile Number!<br>";
    else
        echo "✅ Registration Successful!";
}
?>
<form method="POST">
    <h3>Placement Registration</h3>
    Name: <input type="text" name="name"><br><br>
    Email: <input type="text" name="email"><br><br>
    Mobile: <input type="text" name="mobile"><br><br>
    <input type="submit" name="submit" value="Register">
</form>

      
      
      `},{id:8.8,question:"8. Sending a Mail Develop a php script to send a mail. [ For Example: Forgot password recovery mail.]",answer:"",codeExample:`
<?php
 $to = "user@example.com";
 $subject = "Password Recovery";
 $message = "Click here to reset your password: https://example.com/reset";
 $headers = "From: noreply@example.com";

 if(mail($to, $subject, $message, $headers))
     echo "Mail Sent Successfully!";
 else
     echo "Mail Sending Failed!";
?> 
      
      `},{id:9.9,question:"9. Menu Driven Program Write a menu driven program to perform various file operations. - Display size of file - Display Last Access, changed, modified time of file - Display details about owner and user of File - Display type of file - Delete a file - Copy a file - Traverse a directory in hierarchy - Remove a directory",answer:"",codeExample:`
<!DOCTYPE html>
<html>
<head>
<title>File Operations</title>
<style>
body{
    font-family:Arial;
    text-align:center;
    background:#f2f2f2;
}
form{
    background:white;
    width:300px;
    margin:auto;
    padding:15px;
    border-radius:10px;
}
input,select{
    margin:5px;
    padding:6px;
    width:90%;
}
input[type=submit]{
    background:#007bff;
    color:white;
    border:none;
}
.result{
    background:#e8f5e9;
    padding:8px;
    margin:10px;
}
</style>
</head>
<body>

<h3>Menu Driven File Operations</h3>
<form method="POST">
  <input type="text" name="filename" placeholder="Enter File/Folder" required><br>
  <select name="choice">
    <option value="size">File Size</option>
    <option value="time">File Time</option>
    <option value="type">File Type</option>
    <option value="delete">Delete File</option>
    <option value="copy">Copy File</option>
    <option value="traverse">Show Directory Files</option>
  </select><br>
  <input type="submit" name="ok" value="OK">
</form>

<?php
if(isset($_POST['ok'])){
  $f = $_POST['filename'];
  $c = $_POST['choice'];
  echo "<div class='result'>";
  switch($c){
    case "size": echo "Size: ".filesize($f)." bytes"; break;
    case "time": echo "Modified: ".date("d-m-Y H:i:s", filemtime($f)); break;
    case "type": echo "Type: ".filetype($f); break;
    case "delete": echo unlink($f)?"File Deleted!":"Delete Failed!"; break;
    case "copy": echo copy($f,"copy_".basename($f))?"File Copied!":"Copy Failed!"; break;
    case "traverse":
      if(is_dir($f)){
        $files=scandir($f);
        foreach($files as $x) if($x!="." && $x!="..") echo "$x<br>";
      } else echo "Not a Directory!";
      break;
  }
  echo "</div>";
}
?>
</body>
</html>

      
      
      `},{id:10.1,question:"10. 13. Image Manipulation Develop a web application to perform PHP image manipulation. Perform following tasks: - Load image - Resize image - Crop image - Merge (watermark) - Output image to browser with format conversion.",answer:"",codeExample:`
index.php 

<!DOCTYPE html>
<html>
<head><title>Image Manipulation</title></head>
<body>
<h2>Image Manipulation</h2>

<form method="POST" action="process.php" enctype="multipart/form-data">
    <input type="file" name="img" required><br><br>
    <input type="submit" value="Process Image">
</form>

</body>
</html>




process.php

<?php
 //LOAD IMAGE
$src = $_FILES['img']['tmp_name'];
$image = imagecreatefromjpeg($src);

// Resize
$resize = imagescale($image, 200, 200);

// Crop
$crop = imagecrop($resize, ["x"=>0,"y"=>0,"width"=>200,"height"=>200]);

// Watermark
$black = imagecolorallocate($crop, 0,0,0);
imagestring($crop, 5, 5, 5, "MK", $black);

// OUTPUT ONLY IMAGE
header("Content-Type: image/png");
imagepng($crop);

// Clean memory
imagedestroy($image);
imagedestroy($resize);
imagedestroy($crop);
?>

      
      `},{id:11.11,question:"11.11 Simple Image Gallery Write a php scipt to design a simple gallery",answer:"",codeExample:`
gallery.php

<!DOCTYPE html>
<html>
<head>
<title>Image Gallery</title>
<style>
body{font-family:Arial;text-align:center;background:#f2f2f2;}
.gallery img{
    width:250px;
    height:250px;
    object-fit:cover;
    margin:10px;
    border-radius:8px;
    box-shadow:0 0 5px gray;
}
</style>
</head>

<body>

<h2>Simple Image Gallery (Using Array)</h2>

<div class="gallery">
<?php
// Array of images
$images = array(
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg"
);

// Display each image
foreach($images as $img){
    echo "<img src='$img'>";
}
?>
</div>

</body>
</html>

      
      `},{id:12.12,question:"12. Error and Exception Handling Develop a web application to perform Error and Exception Handling Operations. Implement proper requirements for demonstration.",answer:"",codeExample:`
<!DOCTYPE html>
<html>
<head>
<title>Error & Exception Handling</title>
<style>
body{font-family:Arial;text-align:center;background:#f2f2f2;padding-top:30px;}
form{background:white;width:300px;margin:auto;padding:15px;border-radius:10px;}
input{width:90%;padding:7px;margin:8px;}
</style>
</head>
<body>

<h2>Error & Exception Handling</h2>

<form method="POST">
    <input type="number" name="num" placeholder="Enter a Number" required>
    <input type="submit" name="ok" value="Check">
</form>

<?php

// ---------------------------
//  Custom Error Handler
// ---------------------------
function myError($no, $msg){
    echo "<p style='color:red;'>Error: $msg</p>";
}
set_error_handler("myError");

// ---------------------------
//  Custom Exception Class
// ---------------------------
class MyException extends Exception{}

// ---------------------------
//  Main Processing
// ---------------------------
if(isset($_POST['ok'])){
    
    try{
        $n = $_POST['num'];

        // Trigger Built-in Error
        if($n < 0){
            trigger_error("Negative numbers not allowed!");
        }

        // Custom Exception
        if($n == 0){
            throw new MyException("Number cannot be Zero");
        }

        echo "<p style='color:green;'>Valid Number: $n</p>";
    
    } catch(MyException $e){
        echo "<p style='color:red;'>Exception: ".$e->getMessage()."</p>";
    }
}

?>

</body>
</html>

      
      `},{id:13.13,question:"13. Dynamic Search Box using AJAX Develop a dynamic search box to find records using php and AJAX. [For Example: Google Search]",answer:"",codeExample:`
fetch.php

<?php

// Sample data (like Google suggestions)
$data = array(
    "apple", "banana", "ball", "cat", "car", 
    "dog", "dell", "elephant", "fish", "google",
    "grapes", "house", "horse", "icecream", "india"
);

$q = strtolower($_GET["q"]);
$output = "";

// Return matching results
if($q != ""){
    foreach($data as $item){
        if(strpos(strtolower($item), $q) !== false){
            $output .= $item . "<br>";
        }
    }
}

echo ($output == "") ? "No results" : $output;
?>



search.php
<!DOCTYPE html>
<html>
<head>
<title>AJAX Search</title>
<style>
body{font-family:Arial;text-align:center;margin-top:40px;}
#result{margin-top:10px;font-size:18px;}
input{padding:8px;width:250px;}
</style>
</head>
<body>

<h2>Dynamic Search Box (AJAX + PHP)</h2>

<input type="text" id="search" placeholder="Type to search..." onkeyup="findData()">
<div id="result"></div>

<script>
function findData(){
    let text = document.getElementById("search").value;

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    ajax.open("GET","fetch.php?q="+text,true);
    ajax.send();
}
<\/script>

</body>
</html>

      `},{id:14.14,question:"14. Event Webpage [Object Oriented Concepts] Develop an online Event webpage. Provide admin to set font-size, color and event label for each event. Create Event class with constructor/Destructor. Use show_event() method to display eventlist.",answer:"",codeExample:`
<!DOCTYPE html>
<html>
<head>
<title>Event Webpage</title>
<style>
body{font-family:Arial;text-align:center;background:#f2f2f2;padding-top:20px;}
form{background:white;width:320px;margin:auto;padding:15px;border-radius:10px;}
input{margin:5px;padding:7px;width:90%;}
input[type=submit]{background:#007bff;color:white;border:none;}
.event-box{margin-top:20px;padding:10px;}
</style>
</head>
<body>

<h2>Online Event Webpage (OOP in PHP)</h2>

<form method="POST">
    <input type="text" name="label" placeholder="Event Name" required><br>
    <input type="number" name="size" placeholder="Font Size (px)" required><br>
    <input type="text" name="color" placeholder="Color (red/blue/#000)" required><br>
    <input type="submit" name="add" value="Add Event">
</form>

<?php

class Event{

    public $label;
    public $size;
    public $color;

    // Constructor
    function __construct($label, $size, $color){
        $this->label = $label;
        $this->size = $size;
        $this->color = $color;
    }

    // Show Event Method
    function show_event(){
        echo "<div class='event-box' 
              style='font-size:$this->size" . "px; color:$this->color;'> 
              📌 $this->label 
              </div>";
    }

    // Destructor
    function __destruct(){
        // For closing messages if needed
    }
}

if(isset($_POST['add'])){
    $ev = new Event($_POST['label'], $_POST['size'], $_POST['color']);
    $ev->show_event();
}
?>

</body>
</html>

      
      `},{id:15.15,question:"15. Object Oriented PHP Web Application Printed on : 09-07-2021 04:44 PM Page 4 of 4 Create a web forum application that has a Member class for forum members containing methods such as createPost(), editProfile(), showProfile(). Create a class called Administrator that is a child of the Member class by adding extra methods such as createForum(), deleteForm() and banMember(). Override login() or logout method of parent class in child class.",answer:"",codeExample:`
<!DOCTYPE html>
<html>
<head>
<title>OOP Forum Application</title>
<style>
body{font-family:Arial;text-align:center;background:#f2f2f2;padding-top:20px;}
.box{background:white;width:350px;margin:auto;padding:15px;border-radius:8px;box-shadow:0 0 10px gray;text-align:left;}
</style>
</head>
<body>

<h2>OOP Forum Application</h2>

<div class="box">
<?php

# ---------------------------
# Member Class (Parent Class)
# ---------------------------
class Member {

    public $name;
    public $email;

    function __construct($name, $email){
        $this->name  = $name;
        $this->email = $email;
    }

    function login(){
        echo "<p>$this->name logged in (Member)</p>";
    }

    function createPost($msg){
        echo "<p>Post Created: $msg</p>";
    }

    function editProfile($newName){
        $this->name = $newName;
        echo "<p>Profile Updated: New Name = $this->name</p>";
    }

    function showProfile(){
        echo "<p>Profile:<br>Name: $this->name<br>Email: $this->email</p>";
    }
}

# --------------------------------------
# Administrator Class (Child of Member)
# --------------------------------------
class Administrator extends Member {

    // Method Overriding (login override)
    function login(){
        echo "<p>$this->name logged in as <b>Administrator</b></p>";
    }

    function createForum(){
        echo "<p>Forum Created Successfully!</p>";
    }

    function deleteForum(){
        echo "<p>Forum Deleted Successfully!</p>";
    }

    function banMember($user){
        echo "<p>Member '$user' has been banned.</p>";
    }
}

# ---------------------------
# Object Testing / Demo
# ---------------------------

echo "<h3>Member Actions</h3>";
$m = new Member("Raj", "raj@example.com");
$m->login();
$m->createPost("Hello, this is my first post!");
$m->editProfile("Raj Makwana");
$m->showProfile();

echo "<hr>";

echo "<h3>Administrator Actions</h3>";
$admin = new Administrator("Admin", "admin@example.com");
$admin->login();          // Overridden method
$admin->createForum();
$admin->deleteForum();
$admin->banMember("Ravi");

?>
</div>

</body>
</html>


      `},{id:16.16,question:"16. PHP MySQL Database Connectivity Create a skeleton of SubjectMIS class and define and implement methods to perform following MySQL functions on stored subject details: - Select, Insert, Delete, Update, Connect, Disconnect",answer:"",codeExample:`
<?php

class SubjectMIS {

    private $conn;

    // -------------------
    // CONNECT
    // -------------------
    function connect(){
        $this->conn = mysqli_connect("localhost","root","","college");
        if($this->conn)
            echo "Connected<br>";
        else
            echo "Connection Failed<br>";
    }

    // -------------------
    // DISCONNECT
    // -------------------
    function disconnect(){
        mysqli_close($this->conn);
        echo "Disconnected<br>";
    }

    // -------------------
    // INSERT SUBJECT
    // -------------------
    function insert($name, $code){
        $q = "INSERT INTO subject(sub_name, sub_code) VALUES('$name','$code')";
        mysqli_query($this->conn, $q);
        echo "Inserted: $name<br>";
    }

    // -------------------
    // SELECT SUBJECTS
    // -------------------
    function select(){
        $q = "SELECT * FROM subject";
        $res = mysqli_query($this->conn, $q);

        echo "<b>Subject List:</b><br>";
        while($row = mysqli_fetch_assoc($res)){
            echo $row['id']." - ".$row['sub_name']." (".$row['sub_code'].")<br>";
        }
    }

    // -------------------
    // UPDATE SUBJECT
    // -------------------
    function update($id, $name){
        $q = "UPDATE subject SET sub_name='$name' WHERE id=$id";
        mysqli_query($this->conn, $q);
        echo "Updated ID $id<br>";
    }

    // -------------------
    // DELETE SUBJECT
    // -------------------
    function delete($id){
        $q = "DELETE FROM subject WHERE id=$id";
        mysqli_query($this->conn, $q);
        echo "Deleted ID $id<br>";
    }
}

# -----------------------------------------
# TESTING THE CLASS (Demo)
# -----------------------------------------

$mis = new SubjectMIS();

$mis->connect();

$mis->insert("Mathematics", "M101");
$mis->insert("Physics", "P102");

$mis->select();

$mis->update(1, "Advanced Maths");

$mis->delete(2);

$mis->disconnect();

?>

      
      `},{id:17.17,question:"17. Cricket Application using Interface Define an interface for Cricket Game Activities. Implement this interface in a class. Write necessary class and member function definitions for a cricket player object. The program should accept details from user (player_code, name, runs, innings_played, no_of_times_out). The program should contain following menu. a) Enter details of players. b) Display average runs of a single player. c) Average runs of all players. d) Display the list of players in sorted order as per runs",answer:"",codeExample:`
<!DOCTYPE html>
<html>
<head>
<title>Cricket Application</title>
<style>
body{font-family:Arial;text-align:center;background:#f2f2f2;padding-top:20px;}
.box{background:white;width:450px;margin:auto;padding:15px;border-radius:8px;box-shadow:0 0 10px gray;text-align:left;}
</style>
</head>
<body>

<h2>Cricket Application using Interface</h2>

<div class="box">
<?php

# -------------------------------------
# 1. Interface
# -------------------------------------
interface CricketActivities {
    public function avgRuns();
    public function showPlayer();
}

# -------------------------------------
# 2. Player Class implementing Interface
# -------------------------------------
class Player implements CricketActivities {

    public $code, $name, $runs, $innings, $out;

    function __construct($c,$n,$r,$i,$o){
        $this->code = $c;
        $this->name = $n;
        $this->runs = $r;
        $this->innings = $i;
        $this->out = $o;
    }

    // Calculate Average Runs
    public function avgRuns(){
        if($this->out == 0)
            return $this->runs;  // Not out → average = total runs
        return $this->runs / $this->out;
    }

    // Display Player Details
    public function showPlayer(){
        echo "Code: $this->code, Name: $this->name, Runs: $this->runs, Avg: ".round($this->avgRuns(),2)."<br>";
    }
}

# -------------------------------------
# Data Storage (array of objects)
# -------------------------------------
$players = [];

# -------------------------------------
# Menu System (Simple Demo)
# -------------------------------------

echo "<h3>Menu:</h3>";
echo "a) Enter Player Details<br>";
echo "b) Average Runs of Single Player<br>";
echo "c) Average of All Players<br>";
echo "d) Players Sorted by Runs<br><br>";

# ----------- (A) Enter Player Details ----------
$p1 = new Player(1, "Virat", 12000, 250, 220);
$p2 = new Player(2, "Rohit", 10000, 230, 200);
$p3 = new Player(3, "Dhoni", 10500, 280, 180);

$players = [$p1, $p2, $p3];

echo "<b>(a) Player Details Entered Successfully!</b><br><br>";

# ----------- (B) Avg of one player --------------
echo "<b>(b) Average Runs of Single Player (Virat):</b><br>";
echo $p1->avgRuns()."<br><br>";

# ----------- (C) Avg of all players -------------
echo "<b>(c) Average Runs of All Players:</b><br>";
$total = 0;
foreach($players as $p){
    $total += $p->avgRuns();
}
echo round($total / count($players),2)."<br><br>";

# ----------- (D) Sort players by runs -----------
echo "<b>(d) Sorted Players by Runs:</b><br>";
usort($players, function($a,$b){
    return $b->runs - $a->runs;     // descending order
});
foreach($players as $p){
    $p->showPlayer();
}

?>
</div>
</body>
</html>

      
      `},{id:1,question:"",answer:"",codeExample:""}],p=R=>{fe(M===R?null:R)};return Ue.jsxs("div",{className:"app-container",children:[Ue.jsx("h1",{children:"PHP Interview Questions"}),Ue.jsx("div",{className:"questions-container",children:K.map(R=>Ue.jsxs("div",{className:"question-item",children:[Ue.jsx("button",{className:`question-button ${M===R.id?"active":""}`,onClick:()=>p(R.id),children:R.question}),M===R.id&&Ue.jsxs("div",{className:"answer-container",children:[Ue.jsxs("div",{className:"answer",children:[Ue.jsx("h3",{children:"Answer:"}),Ue.jsx("p",{children:R.answer})]}),R.codeExample&&Ue.jsxs("div",{className:"code-example",children:[Ue.jsx("h3",{children:"Code Example:"}),Ue.jsx("pre",{children:Ue.jsx("code",{children:R.codeExample})})]})]})]},R.id))})]})}ap.createRoot(document.getElementById("root")).render(Ue.jsx(Ad.StrictMode,{children:Ue.jsx(lp,{})}));
