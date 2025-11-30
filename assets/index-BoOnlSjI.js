(function(){const re=document.createElement("link").relList;if(re&&re.supports&&re.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))y(U);new MutationObserver(U=>{for(const J of U)if(J.type==="childList")for(const he of J.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&y(he)}).observe(document,{childList:!0,subtree:!0});function k(U){const J={};return U.integrity&&(J.integrity=U.integrity),U.referrerPolicy&&(J.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?J.credentials="include":U.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function y(U){if(U.ep)return;U.ep=!0;const J=k(U);fetch(U.href,J)}})();var lo={exports:{}},gn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Kh(){if(md)return gn;md=1;var D=Symbol.for("react.transitional.element"),re=Symbol.for("react.fragment");function k(y,U,J){var he=null;if(J!==void 0&&(he=""+J),U.key!==void 0&&(he=""+U.key),"key"in U){J={};for(var Ue in U)Ue!=="key"&&(J[Ue]=U[Ue])}else J=U;return U=J.ref,{$$typeof:D,type:y,key:he,ref:U!==void 0?U:null,props:J}}return gn.Fragment=re,gn.jsx=k,gn.jsxs=k,gn}var hd;function Jh(){return hd||(hd=1,lo.exports=Kh()),lo.exports}var qe=Jh(),no={exports:{}},N={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function Wh(){if(yd)return N;yd=1;var D=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Ue=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),fe=Symbol.iterator;function Je(s){return s===null||typeof s!="object"?null:(s=fe&&s[fe]||s["@@iterator"],typeof s=="function"?s:null)}var we={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Le=Object.assign,xt={};function We(s,E,O){this.props=s,this.context=E,this.refs=xt,this.updater=O||we}We.prototype.isReactComponent={},We.prototype.setState=function(s,E){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,E,"setState")},We.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Jt(){}Jt.prototype=We.prototype;function Ce(s,E,O){this.props=s,this.context=E,this.refs=xt,this.updater=O||we}var it=Ce.prototype=new Jt;it.constructor=Ce,Le(it,We.prototype),it.isPureReactComponent=!0;var Et=Array.isArray;function Be(){}var X={H:null,A:null,T:null,S:null},Qe=Object.prototype.hasOwnProperty;function Tt(s,E,O){var _=O.ref;return{$$typeof:D,type:s,key:E,ref:_!==void 0?_:null,props:O}}function ja(s,E){return Tt(s.type,E,s.props)}function At(s){return typeof s=="object"&&s!==null&&s.$$typeof===D}function je(s){var E={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(O){return E[O]})}var ba=/\/+/g;function zt(s,E){return typeof s=="object"&&s!==null&&s.key!=null?je(""+s.key):E.toString(36)}function vt(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(Be,Be):(s.status="pending",s.then(function(E){s.status==="pending"&&(s.status="fulfilled",s.value=E)},function(E){s.status==="pending"&&(s.status="rejected",s.reason=E)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function S(s,E,O,_,q){var Q=typeof s;(Q==="undefined"||Q==="boolean")&&(s=null);var P=!1;if(s===null)P=!0;else switch(Q){case"bigint":case"string":case"number":P=!0;break;case"object":switch(s.$$typeof){case D:case re:P=!0;break;case F:return P=s._init,S(P(s._payload),E,O,_,q)}}if(P)return q=q(s),P=_===""?"."+zt(s,0):_,Et(q)?(O="",P!=null&&(O=P.replace(ba,"$&/")+"/"),S(q,E,O,"",function(Ml){return Ml})):q!=null&&(At(q)&&(q=ja(q,O+(q.key==null||s&&s.key===q.key?"":(""+q.key).replace(ba,"$&/")+"/")+P)),E.push(q)),1;P=0;var He=_===""?".":_+":";if(Et(s))for(var ye=0;ye<s.length;ye++)_=s[ye],Q=He+zt(_,ye),P+=S(_,E,O,Q,q);else if(ye=Je(s),typeof ye=="function")for(s=ye.call(s),ye=0;!(_=s.next()).done;)_=_.value,Q=He+zt(_,ye++),P+=S(_,E,O,Q,q);else if(Q==="object"){if(typeof s.then=="function")return S(vt(s),E,O,_,q);throw E=String(s),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return P}function A(s,E,O){if(s==null)return s;var _=[],q=0;return S(s,_,"","",function(Q){return E.call(O,Q,q++)}),_}function H(s){if(s._status===-1){var E=s._result;E=E(),E.then(function(O){(s._status===0||s._status===-1)&&(s._status=1,s._result=O)},function(O){(s._status===0||s._status===-1)&&(s._status=2,s._result=O)}),s._status===-1&&(s._status=0,s._result=E)}if(s._status===1)return s._result.default;throw s._result}var te=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},ue={map:A,forEach:function(s,E,O){A(s,function(){E.apply(this,arguments)},O)},count:function(s){var E=0;return A(s,function(){E++}),E},toArray:function(s){return A(s,function(E){return E})||[]},only:function(s){if(!At(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return N.Activity=L,N.Children=ue,N.Component=We,N.Fragment=k,N.Profiler=U,N.PureComponent=Ce,N.StrictMode=y,N.Suspense=C,N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,N.__COMPILER_RUNTIME={__proto__:null,c:function(s){return X.H.useMemoCache(s)}},N.cache=function(s){return function(){return s.apply(null,arguments)}},N.cacheSignal=function(){return null},N.cloneElement=function(s,E,O){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var _=Le({},s.props),q=s.key;if(E!=null)for(Q in E.key!==void 0&&(q=""+E.key),E)!Qe.call(E,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&E.ref===void 0||(_[Q]=E[Q]);var Q=arguments.length-2;if(Q===1)_.children=O;else if(1<Q){for(var P=Array(Q),He=0;He<Q;He++)P[He]=arguments[He+2];_.children=P}return Tt(s.type,q,_)},N.createContext=function(s){return s={$$typeof:he,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:J,_context:s},s},N.createElement=function(s,E,O){var _,q={},Q=null;if(E!=null)for(_ in E.key!==void 0&&(Q=""+E.key),E)Qe.call(E,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(q[_]=E[_]);var P=arguments.length-2;if(P===1)q.children=O;else if(1<P){for(var He=Array(P),ye=0;ye<P;ye++)He[ye]=arguments[ye+2];q.children=He}if(s&&s.defaultProps)for(_ in P=s.defaultProps,P)q[_]===void 0&&(q[_]=P[_]);return Tt(s,Q,q)},N.createRef=function(){return{current:null}},N.forwardRef=function(s){return{$$typeof:Ue,render:s}},N.isValidElement=At,N.lazy=function(s){return{$$typeof:F,_payload:{_status:-1,_result:s},_init:H}},N.memo=function(s,E){return{$$typeof:T,type:s,compare:E===void 0?null:E}},N.startTransition=function(s){var E=X.T,O={};X.T=O;try{var _=s(),q=X.S;q!==null&&q(O,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(Be,te)}catch(Q){te(Q)}finally{E!==null&&O.types!==null&&(E.types=O.types),X.T=E}},N.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},N.use=function(s){return X.H.use(s)},N.useActionState=function(s,E,O){return X.H.useActionState(s,E,O)},N.useCallback=function(s,E){return X.H.useCallback(s,E)},N.useContext=function(s){return X.H.useContext(s)},N.useDebugValue=function(){},N.useDeferredValue=function(s,E){return X.H.useDeferredValue(s,E)},N.useEffect=function(s,E){return X.H.useEffect(s,E)},N.useEffectEvent=function(s){return X.H.useEffectEvent(s)},N.useId=function(){return X.H.useId()},N.useImperativeHandle=function(s,E,O){return X.H.useImperativeHandle(s,E,O)},N.useInsertionEffect=function(s,E){return X.H.useInsertionEffect(s,E)},N.useLayoutEffect=function(s,E){return X.H.useLayoutEffect(s,E)},N.useMemo=function(s,E){return X.H.useMemo(s,E)},N.useOptimistic=function(s,E){return X.H.useOptimistic(s,E)},N.useReducer=function(s,E,O){return X.H.useReducer(s,E,O)},N.useRef=function(s){return X.H.useRef(s)},N.useState=function(s){return X.H.useState(s)},N.useSyncExternalStore=function(s,E,O){return X.H.useSyncExternalStore(s,E,O)},N.useTransition=function(){return X.H.useTransition()},N.version="19.2.0",N}var pd;function fo(){return pd||(pd=1,no.exports=Wh()),no.exports}var Ad=fo(),uo={exports:{}},bn={},io={exports:{}},co={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function kh(){return vd||(vd=1,(function(D){function re(S,A){var H=S.length;S.push(A);e:for(;0<H;){var te=H-1>>>1,ue=S[te];if(0<U(ue,A))S[te]=A,S[H]=ue,H=te;else break e}}function k(S){return S.length===0?null:S[0]}function y(S){if(S.length===0)return null;var A=S[0],H=S.pop();if(H!==A){S[0]=H;e:for(var te=0,ue=S.length,s=ue>>>1;te<s;){var E=2*(te+1)-1,O=S[E],_=E+1,q=S[_];if(0>U(O,H))_<ue&&0>U(q,O)?(S[te]=q,S[_]=H,te=_):(S[te]=O,S[E]=H,te=E);else if(_<ue&&0>U(q,H))S[te]=q,S[_]=H,te=_;else break e}}return A}function U(S,A){var H=S.sortIndex-A.sortIndex;return H!==0?H:S.id-A.id}if(D.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;D.unstable_now=function(){return J.now()}}else{var he=Date,Ue=he.now();D.unstable_now=function(){return he.now()-Ue}}var C=[],T=[],F=1,L=null,fe=3,Je=!1,we=!1,Le=!1,xt=!1,We=typeof setTimeout=="function"?setTimeout:null,Jt=typeof clearTimeout=="function"?clearTimeout:null,Ce=typeof setImmediate<"u"?setImmediate:null;function it(S){for(var A=k(T);A!==null;){if(A.callback===null)y(T);else if(A.startTime<=S)y(T),A.sortIndex=A.expirationTime,re(C,A);else break;A=k(T)}}function Et(S){if(Le=!1,it(S),!we)if(k(C)!==null)we=!0,Be||(Be=!0,je());else{var A=k(T);A!==null&&vt(Et,A.startTime-S)}}var Be=!1,X=-1,Qe=5,Tt=-1;function ja(){return xt?!0:!(D.unstable_now()-Tt<Qe)}function At(){if(xt=!1,Be){var S=D.unstable_now();Tt=S;var A=!0;try{e:{we=!1,Le&&(Le=!1,Jt(X),X=-1),Je=!0;var H=fe;try{t:{for(it(S),L=k(C);L!==null&&!(L.expirationTime>S&&ja());){var te=L.callback;if(typeof te=="function"){L.callback=null,fe=L.priorityLevel;var ue=te(L.expirationTime<=S);if(S=D.unstable_now(),typeof ue=="function"){L.callback=ue,it(S),A=!0;break t}L===k(C)&&y(C),it(S)}else y(C);L=k(C)}if(L!==null)A=!0;else{var s=k(T);s!==null&&vt(Et,s.startTime-S),A=!1}}break e}finally{L=null,fe=H,Je=!1}A=void 0}}finally{A?je():Be=!1}}}var je;if(typeof Ce=="function")je=function(){Ce(At)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,zt=ba.port2;ba.port1.onmessage=At,je=function(){zt.postMessage(null)}}else je=function(){We(At,0)};function vt(S,A){X=We(function(){S(D.unstable_now())},A)}D.unstable_IdlePriority=5,D.unstable_ImmediatePriority=1,D.unstable_LowPriority=4,D.unstable_NormalPriority=3,D.unstable_Profiling=null,D.unstable_UserBlockingPriority=2,D.unstable_cancelCallback=function(S){S.callback=null},D.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<S?Math.floor(1e3/S):5},D.unstable_getCurrentPriorityLevel=function(){return fe},D.unstable_next=function(S){switch(fe){case 1:case 2:case 3:var A=3;break;default:A=fe}var H=fe;fe=A;try{return S()}finally{fe=H}},D.unstable_requestPaint=function(){xt=!0},D.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var H=fe;fe=S;try{return A()}finally{fe=H}},D.unstable_scheduleCallback=function(S,A,H){var te=D.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?te+H:te):H=te,S){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=H+ue,S={id:F++,callback:A,priorityLevel:S,startTime:H,expirationTime:ue,sortIndex:-1},H>te?(S.sortIndex=H,re(T,S),k(C)===null&&S===k(T)&&(Le?(Jt(X),X=-1):Le=!0,vt(Et,H-te))):(S.sortIndex=ue,re(C,S),we||Je||(we=!0,Be||(Be=!0,je()))),S},D.unstable_shouldYield=ja,D.unstable_wrapCallback=function(S){var A=fe;return function(){var H=fe;fe=A;try{return S.apply(this,arguments)}finally{fe=H}}}})(co)),co}var Sd;function Fh(){return Sd||(Sd=1,io.exports=kh()),io.exports}var oo={exports:{}},Re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function Ph(){if(gd)return Re;gd=1;var D=fo();function re(C){var T="https://react.dev/errors/"+C;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)T+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+C+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(){}var y={d:{f:k,r:function(){throw Error(re(522))},D:k,C:k,L:k,m:k,X:k,S:k,M:k},p:0,findDOMNode:null},U=Symbol.for("react.portal");function J(C,T,F){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:L==null?null:""+L,children:C,containerInfo:T,implementation:F}}var he=D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ue(C,T){if(C==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,Re.createPortal=function(C,T){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(re(299));return J(C,T,null,F)},Re.flushSync=function(C){var T=he.T,F=y.p;try{if(he.T=null,y.p=2,C)return C()}finally{he.T=T,y.p=F,y.d.f()}},Re.preconnect=function(C,T){typeof C=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,y.d.C(C,T))},Re.prefetchDNS=function(C){typeof C=="string"&&y.d.D(C)},Re.preinit=function(C,T){if(typeof C=="string"&&T&&typeof T.as=="string"){var F=T.as,L=Ue(F,T.crossOrigin),fe=typeof T.integrity=="string"?T.integrity:void 0,Je=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;F==="style"?y.d.S(C,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:L,integrity:fe,fetchPriority:Je}):F==="script"&&y.d.X(C,{crossOrigin:L,integrity:fe,fetchPriority:Je,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Re.preinitModule=function(C,T){if(typeof C=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var F=Ue(T.as,T.crossOrigin);y.d.M(C,{crossOrigin:F,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&y.d.M(C)},Re.preload=function(C,T){if(typeof C=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var F=T.as,L=Ue(F,T.crossOrigin);y.d.L(C,F,{crossOrigin:L,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Re.preloadModule=function(C,T){if(typeof C=="string")if(T){var F=Ue(T.as,T.crossOrigin);y.d.m(C,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:F,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else y.d.m(C)},Re.requestFormReset=function(C){y.d.r(C)},Re.unstable_batchedUpdates=function(C,T){return C(T)},Re.useFormState=function(C,T,F){return he.H.useFormState(C,T,F)},Re.useFormStatus=function(){return he.H.useHostTransitionStatus()},Re.version="19.2.0",Re}var bd;function Ih(){if(bd)return oo.exports;bd=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(re){console.error(re)}}return D(),oo.exports=Ph(),oo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function ey(){if(Ed)return bn;Ed=1;var D=Fh(),re=fo(),k=Ih();function y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function he(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ue(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(J(e)!==e)throw Error(y(188))}function T(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(y(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var u=n.alternate;if(u===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===a)return C(n),e;if(u===l)return C(n),t;u=u.sibling}throw Error(y(188))}if(a.return!==l.return)a=n,l=u;else{for(var i=!1,c=n.child;c;){if(c===a){i=!0,a=n,l=u;break}if(c===l){i=!0,l=n,a=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===a){i=!0,a=u,l=n;break}if(c===l){i=!0,l=u,a=n;break}c=c.sibling}if(!i)throw Error(y(189))}}if(a.alternate!==l)throw Error(y(190))}if(a.tag!==3)throw Error(y(188));return a.stateNode.current===a?e:t}function F(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=F(e),t!==null)return t;e=e.sibling}return null}var L=Object.assign,fe=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),we=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),xt=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Jt=Symbol.for("react.consumer"),Ce=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),ja=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=At&&e[At]||e["@@iterator"],typeof e=="function"?e:null)}var ba=Symbol.for("react.client.reference");function zt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ba?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Le:return"Fragment";case We:return"Profiler";case xt:return"StrictMode";case Et:return"Suspense";case Be:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case we:return"Portal";case Ce:return e.displayName||"Context";case Jt:return(e._context.displayName||"Context")+".Consumer";case it:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:zt(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return zt(e(t))}catch{}}return null}var vt=Array.isArray,S=re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},te=[],ue=-1;function s(e){return{current:e}}function E(e){0>ue||(e.current=te[ue],te[ue]=null,ue--)}function O(e,t){ue++,te[ue]=e.current,e.current=t}var _=s(null),q=s(null),Q=s(null),P=s(null);function He(e,t){switch(O(Q,t),O(q,e),O(_,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qr(t),e=wr(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(_),O(_,e)}function ye(){E(_),E(q),E(Q)}function Ml(e){e.memoizedState!==null&&O(P,e);var t=_.current,a=wr(t,e.type);t!==a&&(O(q,e),O(_,a))}function En(e){q.current===e&&(E(_),E(q)),P.current===e&&(E(P),yn._currentValue=H)}var Qu,so;function Ea(e){if(Qu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Qu=t&&t[1]||"",so=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qu+e+so}var ju=!1;function Yu(e,t){if(!e||ju)return"";ju=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(p){var h=p}Reflect.construct(e,[],b)}else{try{b.call()}catch(p){h=p}e.call(b.prototype)}}else{try{throw Error()}catch(p){h=p}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var o=i.split(`
`),m=c.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===m.length)for(l=o.length-1,n=m.length-1;1<=l&&0<=n&&o[l]!==m[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==m[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==m[n]){var v=`
`+o[l].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=l&&0<=n);break}}}finally{ju=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ea(a):""}function Od(e,t){switch(e.tag){case 26:case 27:case 5:return Ea(e.type);case 16:return Ea("Lazy");case 13:return e.child!==t&&t!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return Yu(e.type,!1);case 11:return Yu(e.type.render,!1);case 1:return Yu(e.type,!0);case 31:return Ea("Activity");default:return""}}function ro(e){try{var t="",a=null;do t+=Od(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var $u=Object.prototype.hasOwnProperty,Gu=D.unstable_scheduleCallback,Xu=D.unstable_cancelCallback,Md=D.unstable_shouldYield,Dd=D.unstable_requestPaint,ke=D.unstable_now,_d=D.unstable_getCurrentPriorityLevel,mo=D.unstable_ImmediatePriority,ho=D.unstable_UserBlockingPriority,Tn=D.unstable_NormalPriority,xd=D.unstable_LowPriority,yo=D.unstable_IdlePriority,zd=D.log,Cd=D.unstable_setDisableYieldValue,Dl=null,Fe=null;function Wt(e){if(typeof zd=="function"&&Cd(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(Dl,e)}catch{}}var Pe=Math.clz32?Math.clz32:Ld,Rd=Math.log,Ud=Math.LN2;function Ld(e){return e>>>=0,e===0?32:31-(Rd(e)/Ud|0)|0}var An=256,On=262144,Mn=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~u,l!==0?n=Ta(l):(i&=c,i!==0?n=Ta(i):a||(a=c&~e,a!==0&&(n=Ta(a))))):(c=l&~u,c!==0?n=Ta(c):i!==0?n=Ta(i):a||(a=l&~e,a!==0&&(n=Ta(a)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:n}function _l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function po(){var e=Mn;return Mn<<=1,(Mn&62914560)===0&&(Mn=4194304),e}function Vu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nd(e,t,a,l,n,u){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,o=e.expirationTimes,m=e.hiddenUpdates;for(a=i&~a;0<a;){var v=31-Pe(a),b=1<<v;c[v]=0,o[v]=-1;var h=m[v];if(h!==null)for(m[v]=null,v=0;v<h.length;v++){var p=h[v];p!==null&&(p.lane&=-536870913)}a&=~b}l!==0&&vo(e,l,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function vo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Pe(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function So(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Pe(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function go(e,t){var a=t&-t;return a=(a&42)!==0?1:Zu(a),(a&(e.suspendedLanes|t))!==0?0:a}function Zu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ku(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bo(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:id(e.type))}function Eo(e,t){var a=A.p;try{return A.p=e,t()}finally{A.p=a}}var kt=Math.random().toString(36).slice(2),Me="__reactFiber$"+kt,Ye="__reactProps$"+kt,Ya="__reactContainer$"+kt,Ju="__reactEvents$"+kt,qd="__reactListeners$"+kt,wd="__reactHandles$"+kt,To="__reactResources$"+kt,zl="__reactMarker$"+kt;function Wu(e){delete e[Me],delete e[Ye],delete e[Ju],delete e[qd],delete e[wd]}function $a(e){var t=e[Me];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ya]||a[Me]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xr(e);e!==null;){if(a=e[Me])return a;e=Xr(e)}return t}e=a,a=e.parentNode}return null}function Ga(e){if(e=e[Me]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Cl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(y(33))}function Xa(e){var t=e[To];return t||(t=e[To]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ae(e){e[zl]=!0}var Ao=new Set,Oo={};function Aa(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Oo[e]=t,e=0;e<t.length;e++)Ao.add(t[e])}var Bd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mo={},Do={};function Qd(e){return $u.call(Do,e)?!0:$u.call(Mo,e)?!1:Bd.test(e)?Do[e]=!0:(Mo[e]=!0,!1)}function _n(e,t,a){if(Qd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function xn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ct(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _o(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jd(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,u=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ku(e){if(!e._valueTracker){var t=_o(e)?"checked":"value";e._valueTracker=jd(e,t,""+e[t])}}function xo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=_o(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yd=/[\n"\\]/g;function ot(e){return e.replace(Yd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fu(e,t,a,l,n,u,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Pu(e,i,ct(t)):a!=null?Pu(e,i,ct(a)):l!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ct(c):e.removeAttribute("name")}function zo(e,t,a,l,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ku(e);return}a=a!=null?""+ct(a):"",t=t!=null?""+ct(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),ku(e)}function Pu(e,t,a){t==="number"&&zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ct(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Co(e,t,a){if(t!=null&&(t=""+ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ct(a):""}function Ro(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(y(92));if(vt(l)){if(1<l.length)throw Error(y(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ct(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ku(e)}function Ka(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var $d=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||$d.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Lo(e,t,a){if(t!=null&&typeof t!="object")throw Error(y(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Uo(e,n,l)}else for(var u in t)t.hasOwnProperty(u)&&Uo(e,u,t[u])}function Iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(e){return Xd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var ei=null;function ti(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Wa=null;function Ho(e){var t=Ga(e);if(t&&(e=t.stateNode)){var a=e[Ye]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ye]||null;if(!n)throw Error(y(90));Fu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&xo(l)}break e;case"textarea":Co(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var ai=!1;function No(e,t,a){if(ai)return e(t,a);ai=!0;try{var l=e(t);return l}finally{if(ai=!1,(Ja!==null||Wa!==null)&&(vu(),Ja&&(t=Ja,e=Wa,Wa=Ja=null,Ho(t),e)))for(t=0;t<e.length;t++)Ho(e[t])}}function Rl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ye]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(y(231,t,typeof a));return a}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),li=!1;if(Ut)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){li=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{li=!1}var Ft=null,ni=null,Rn=null;function qo(){if(Rn)return Rn;var e,t=ni,a=t.length,l,n="value"in Ft?Ft.value:Ft.textContent,u=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(l=1;l<=i&&t[a-l]===n[u-l];l++);return Rn=n.slice(e,1<l?1-l:void 0)}function Un(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function wo(){return!1}function $e(e){function t(a,l,n,u,i){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ln:wo,this.isPropagationStopped=wo,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=$e(Oa),Ll=L({},Oa,{view:0,detail:0}),Vd=$e(Ll),ui,ii,Hl,Nn=L({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hl&&(Hl&&e.type==="mousemove"?(ui=e.screenX-Hl.screenX,ii=e.screenY-Hl.screenY):ii=ui=0,Hl=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),Bo=$e(Nn),Zd=L({},Nn,{dataTransfer:0}),Kd=$e(Zd),Jd=L({},Ll,{relatedTarget:0}),ci=$e(Jd),Wd=L({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=$e(Wd),Fd=L({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=$e(Fd),Id=L({},Oa,{data:0}),Qo=$e(Id),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function oi(){return lm}var nm=L({},Ll,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Un(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?Un(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Un(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=$e(nm),im=L({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jo=$e(im),cm=L({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),om=$e(cm),fm=L({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),sm=$e(fm),rm=L({},Nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=$e(rm),mm=L({},Oa,{newState:0,oldState:0}),hm=$e(mm),ym=[9,13,27,32],fi=Ut&&"CompositionEvent"in window,Nl=null;Ut&&"documentMode"in document&&(Nl=document.documentMode);var pm=Ut&&"TextEvent"in window&&!Nl,Yo=Ut&&(!fi||Nl&&8<Nl&&11>=Nl),$o=" ",Go=!1;function Xo(e,t){switch(e){case"keyup":return ym.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ka=!1;function vm(e,t){switch(e){case"compositionend":return Vo(t);case"keypress":return t.which!==32?null:(Go=!0,$o);case"textInput":return e=t.data,e===$o&&Go?null:e;default:return null}}function Sm(e,t){if(ka)return e==="compositionend"||!fi&&Xo(e,t)?(e=qo(),Rn=ni=Ft=null,ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yo&&t.locale!=="ko"?null:t.data;default:return null}}var gm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gm[e.type]:t==="textarea"}function Ko(e,t,a,l){Ja?Wa?Wa.push(l):Wa=[l]:Ja=l,t=Ou(t,"onChange"),0<t.length&&(a=new Hn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ql=null,wl=null;function bm(e){Cr(e,0)}function qn(e){var t=Cl(e);if(xo(t))return e}function Jo(e,t){if(e==="change")return t}var Wo=!1;if(Ut){var si;if(Ut){var ri="oninput"in document;if(!ri){var ko=document.createElement("div");ko.setAttribute("oninput","return;"),ri=typeof ko.oninput=="function"}si=ri}else si=!1;Wo=si&&(!document.documentMode||9<document.documentMode)}function Fo(){ql&&(ql.detachEvent("onpropertychange",Po),wl=ql=null)}function Po(e){if(e.propertyName==="value"&&qn(wl)){var t=[];Ko(t,wl,e,ti(e)),No(bm,t)}}function Em(e,t,a){e==="focusin"?(Fo(),ql=t,wl=a,ql.attachEvent("onpropertychange",Po)):e==="focusout"&&Fo()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qn(wl)}function Am(e,t){if(e==="click")return qn(t)}function Om(e,t){if(e==="input"||e==="change")return qn(t)}function Mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Mm;function Bl(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!$u.call(t,n)||!Ie(e[n],t[n]))return!1}return!0}function Io(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ef(e,t){var a=Io(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Io(a)}}function tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function af(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=zn(e.document)}return t}function di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Dm=Ut&&"documentMode"in document&&11>=document.documentMode,Fa=null,mi=null,Ql=null,hi=!1;function lf(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hi||Fa==null||Fa!==zn(l)||(l=Fa,"selectionStart"in l&&di(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&Bl(Ql,l)||(Ql=l,l=Ou(mi,"onSelect"),0<l.length&&(t=new Hn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Fa)))}function Ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Pa={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},yi={},nf={};Ut&&(nf=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function Da(e){if(yi[e])return yi[e];if(!Pa[e])return e;var t=Pa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in nf)return yi[e]=t[a];return e}var uf=Da("animationend"),cf=Da("animationiteration"),of=Da("animationstart"),_m=Da("transitionrun"),xm=Da("transitionstart"),zm=Da("transitioncancel"),ff=Da("transitionend"),sf=new Map,pi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pi.push("scrollEnd");function St(e,t){sf.set(e,t),Aa(t,[e])}var wn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ft=[],Ia=0,vi=0;function Bn(){for(var e=Ia,t=vi=Ia=0;t<e;){var a=ft[t];ft[t++]=null;var l=ft[t];ft[t++]=null;var n=ft[t];ft[t++]=null;var u=ft[t];if(ft[t++]=null,l!==null&&n!==null){var i=l.pending;i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n}u!==0&&rf(a,n,u)}}function Qn(e,t,a,l){ft[Ia++]=e,ft[Ia++]=t,ft[Ia++]=a,ft[Ia++]=l,vi|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Si(e,t,a,l){return Qn(e,t,a,l),jn(e)}function _a(e,t){return Qn(e,null,null,t),jn(e)}function rf(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,u=e.return;u!==null;)u.childLanes|=a,l=u.alternate,l!==null&&(l.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-Pe(a),e=u.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),u):null}function jn(e){if(50<on)throw on=0,_c=null,Error(y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var el={};function Cm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new Cm(e,t,a,l)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function df(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yn(e,t,a,l,n,u){var i=0;if(l=e,typeof e=="function")gi(e)&&(i=1);else if(typeof e=="string")i=Nh(e,a,_.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,a,t,n),e.elementType=Tt,e.lanes=u,e;case Le:return xa(a.children,n,u,t);case xt:i=8,n|=24;break;case We:return e=et(12,a,t,n|2),e.elementType=We,e.lanes=u,e;case Et:return e=et(13,a,t,n),e.elementType=Et,e.lanes=u,e;case Be:return e=et(19,a,t,n),e.elementType=Be,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:i=10;break e;case Jt:i=9;break e;case it:i=11;break e;case X:i=14;break e;case Qe:i=16,l=null;break e}i=29,a=Error(y(130,e===null?"null":typeof e,"")),l=null}return t=et(i,a,t,n),t.elementType=e,t.type=l,t.lanes=u,t}function xa(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function bi(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function mf(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Ei(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hf=new WeakMap;function st(e,t){if(typeof e=="object"&&e!==null){var a=hf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ro(t)},hf.set(e,t),t)}return{value:e,source:t,stack:ro(t)}}var tl=[],al=0,$n=null,jl=0,rt=[],dt=0,Pt=null,Ot=1,Mt="";function Ht(e,t){tl[al++]=jl,tl[al++]=$n,$n=e,jl=t}function yf(e,t,a){rt[dt++]=Ot,rt[dt++]=Mt,rt[dt++]=Pt,Pt=e;var l=Ot;e=Mt;var n=32-Pe(l)-1;l&=~(1<<n),a+=1;var u=32-Pe(t)+n;if(30<u){var i=n-n%5;u=(l&(1<<i)-1).toString(32),l>>=i,n-=i,Ot=1<<32-Pe(t)+n|a<<n|l,Mt=u+e}else Ot=1<<u|a<<n|l,Mt=e}function Ti(e){e.return!==null&&(Ht(e,1),yf(e,1,0))}function Ai(e){for(;e===$n;)$n=tl[--al],tl[al]=null,jl=tl[--al],tl[al]=null;for(;e===Pt;)Pt=rt[--dt],rt[dt]=null,Mt=rt[--dt],rt[dt]=null,Ot=rt[--dt],rt[dt]=null}function pf(e,t){rt[dt++]=Ot,rt[dt++]=Mt,rt[dt++]=Pt,Ot=t.id,Mt=t.overflow,Pt=e}var De=null,ce=null,V=!1,It=null,mt=!1,Oi=Error(y(519));function ea(e){var t=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yl(st(t,e)),Oi}function vf(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Me]=e,t[Ye]=l,a){case"dialog":Y("cancel",t),Y("close",t);break;case"iframe":case"object":case"embed":Y("load",t);break;case"video":case"audio":for(a=0;a<sn.length;a++)Y(sn[a],t);break;case"source":Y("error",t);break;case"img":case"image":case"link":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"input":Y("invalid",t),zo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Y("invalid",t);break;case"textarea":Y("invalid",t),Ro(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Hr(t.textContent,a)?(l.popover!=null&&(Y("beforetoggle",t),Y("toggle",t)),l.onScroll!=null&&Y("scroll",t),l.onScrollEnd!=null&&Y("scrollend",t),l.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||ea(e,!0)}function Sf(e){for(De=e.return;De;)switch(De.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:De=De.return}}function ll(e){if(e!==De)return!1;if(!V)return Sf(e),V=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$c(e.type,e.memoizedProps)),a=!a),a&&ce&&ea(e),Sf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));ce=Gr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));ce=Gr(e)}else t===27?(t=ce,ha(e.type)?(e=Kc,Kc=null,ce=e):ce=t):ce=De?yt(e.stateNode.nextSibling):null;return!0}function za(){ce=De=null,V=!1}function Mi(){var e=It;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),It=null),e}function Yl(e){It===null?It=[e]:It.push(e)}var Di=s(null),Ca=null,Nt=null;function ta(e,t,a){O(Di,t._currentValue),t._currentValue=a}function qt(e){e._currentValue=Di.current,E(Di)}function _i(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function xi(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var c=u;u=n;for(var o=0;o<t.length;o++)if(c.context===t[o]){u.lanes|=a,c=u.alternate,c!==null&&(c.lanes|=a),_i(u.return,a,e),l||(i=null);break e}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(y(341));i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),_i(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function nl(e,t,a,l){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(y(387));if(i=i.memoizedProps,i!==null){var c=n.type;Ie(n.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(n===P.current){if(i=n.alternate,i===null)throw Error(y(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(yn):e=[yn])}n=n.return}e!==null&&xi(t,e,a,l),t.flags|=262144}function Gn(e){for(e=e.firstContext;e!==null;){if(!Ie(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){Ca=e,Nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _e(e){return gf(Ca,e)}function Xn(e,t){return Ca===null&&Ra(e),gf(e,t)}function gf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Nt===null){if(e===null)throw Error(y(308));Nt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nt=Nt.next=t;return a}var Rm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Um=D.unstable_scheduleCallback,Lm=D.unstable_NormalPriority,Se={$$typeof:Ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zi(){return{controller:new Rm,data:new Map,refCount:0}}function $l(e){e.refCount--,e.refCount===0&&Um(Lm,function(){e.controller.abort()})}var Gl=null,Ci=0,ul=0,il=null;function Hm(e,t){if(Gl===null){var a=Gl=[];Ci=0,ul=Lc(),il={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ci++,t.then(bf,bf),t}function bf(){if(--Ci===0&&Gl!==null){il!==null&&(il.status="fulfilled");var e=Gl;Gl=null,ul=0,il=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ef=S.S;S.S=function(e,t){nr=ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hm(e,t),Ef!==null&&Ef(e,t)};var Ua=s(null);function Ri(){var e=Ua.current;return e!==null?e:ie.pooledCache}function Vn(e,t){t===null?O(Ua,Ua.current):O(Ua,t.pool)}function Tf(){var e=Ri();return e===null?null:{parent:Se._currentValue,pool:e}}var cl=Error(y(460)),Ui=Error(y(474)),Zn=Error(y(542)),Kn={then:function(){}};function Af(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Of(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Rt,Rt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Df(e),e;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(e=ie,e!==null&&100<e.shellSuspendCounter)throw Error(y(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Df(e),e}throw Ha=t,cl}}function La(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,cl):a}}var Ha=null;function Mf(){if(Ha===null)throw Error(y(459));var e=Ha;return Ha=null,e}function Df(e){if(e===cl||e===Zn)throw Error(y(483))}var ol=null,Xl=0;function Jn(e){var t=Xl;return Xl+=1,ol===null&&(ol=[]),Of(ol,e,t)}function Vl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wn(e,t){throw t.$$typeof===fe?Error(y(525)):(e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _f(e){function t(r,f){if(e){var d=r.deletions;d===null?(r.deletions=[f],r.flags|=16):d.push(f)}}function a(r,f){if(!e)return null;for(;f!==null;)t(r,f),f=f.sibling;return null}function l(r){for(var f=new Map;r!==null;)r.key!==null?f.set(r.key,r):f.set(r.index,r),r=r.sibling;return f}function n(r,f){return r=Lt(r,f),r.index=0,r.sibling=null,r}function u(r,f,d){return r.index=d,e?(d=r.alternate,d!==null?(d=d.index,d<f?(r.flags|=67108866,f):d):(r.flags|=67108866,f)):(r.flags|=1048576,f)}function i(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,f,d,g){return f===null||f.tag!==6?(f=bi(d,r.mode,g),f.return=r,f):(f=n(f,d),f.return=r,f)}function o(r,f,d,g){var z=d.type;return z===Le?v(r,f,d.props.children,g,d.key):f!==null&&(f.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Qe&&La(z)===f.type)?(f=n(f,d.props),Vl(f,d),f.return=r,f):(f=Yn(d.type,d.key,d.props,null,r.mode,g),Vl(f,d),f.return=r,f)}function m(r,f,d,g){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=Ei(d,r.mode,g),f.return=r,f):(f=n(f,d.children||[]),f.return=r,f)}function v(r,f,d,g,z){return f===null||f.tag!==7?(f=xa(d,r.mode,g,z),f.return=r,f):(f=n(f,d),f.return=r,f)}function b(r,f,d){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=bi(""+f,r.mode,d),f.return=r,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:return d=Yn(f.type,f.key,f.props,null,r.mode,d),Vl(d,f),d.return=r,d;case we:return f=Ei(f,r.mode,d),f.return=r,f;case Qe:return f=La(f),b(r,f,d)}if(vt(f)||je(f))return f=xa(f,r.mode,d,null),f.return=r,f;if(typeof f.then=="function")return b(r,Jn(f),d);if(f.$$typeof===Ce)return b(r,Xn(r,f),d);Wn(r,f)}return null}function h(r,f,d,g){var z=f!==null?f.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return z!==null?null:c(r,f,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Je:return d.key===z?o(r,f,d,g):null;case we:return d.key===z?m(r,f,d,g):null;case Qe:return d=La(d),h(r,f,d,g)}if(vt(d)||je(d))return z!==null?null:v(r,f,d,g,null);if(typeof d.then=="function")return h(r,f,Jn(d),g);if(d.$$typeof===Ce)return h(r,f,Xn(r,d),g);Wn(r,d)}return null}function p(r,f,d,g,z){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return r=r.get(d)||null,c(f,r,""+g,z);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Je:return r=r.get(g.key===null?d:g.key)||null,o(f,r,g,z);case we:return r=r.get(g.key===null?d:g.key)||null,m(f,r,g,z);case Qe:return g=La(g),p(r,f,d,g,z)}if(vt(g)||je(g))return r=r.get(d)||null,v(f,r,g,z,null);if(typeof g.then=="function")return p(r,f,d,Jn(g),z);if(g.$$typeof===Ce)return p(r,f,d,Xn(f,g),z);Wn(f,g)}return null}function M(r,f,d,g){for(var z=null,Z=null,x=f,B=f=0,G=null;x!==null&&B<d.length;B++){x.index>B?(G=x,x=null):G=x.sibling;var K=h(r,x,d[B],g);if(K===null){x===null&&(x=G);break}e&&x&&K.alternate===null&&t(r,x),f=u(K,f,B),Z===null?z=K:Z.sibling=K,Z=K,x=G}if(B===d.length)return a(r,x),V&&Ht(r,B),z;if(x===null){for(;B<d.length;B++)x=b(r,d[B],g),x!==null&&(f=u(x,f,B),Z===null?z=x:Z.sibling=x,Z=x);return V&&Ht(r,B),z}for(x=l(x);B<d.length;B++)G=p(x,r,B,d[B],g),G!==null&&(e&&G.alternate!==null&&x.delete(G.key===null?B:G.key),f=u(G,f,B),Z===null?z=G:Z.sibling=G,Z=G);return e&&x.forEach(function(ga){return t(r,ga)}),V&&Ht(r,B),z}function R(r,f,d,g){if(d==null)throw Error(y(151));for(var z=null,Z=null,x=f,B=f=0,G=null,K=d.next();x!==null&&!K.done;B++,K=d.next()){x.index>B?(G=x,x=null):G=x.sibling;var ga=h(r,x,K.value,g);if(ga===null){x===null&&(x=G);break}e&&x&&ga.alternate===null&&t(r,x),f=u(ga,f,B),Z===null?z=ga:Z.sibling=ga,Z=ga,x=G}if(K.done)return a(r,x),V&&Ht(r,B),z;if(x===null){for(;!K.done;B++,K=d.next())K=b(r,K.value,g),K!==null&&(f=u(K,f,B),Z===null?z=K:Z.sibling=K,Z=K);return V&&Ht(r,B),z}for(x=l(x);!K.done;B++,K=d.next())K=p(x,r,B,K.value,g),K!==null&&(e&&K.alternate!==null&&x.delete(K.key===null?B:K.key),f=u(K,f,B),Z===null?z=K:Z.sibling=K,Z=K);return e&&x.forEach(function(Zh){return t(r,Zh)}),V&&Ht(r,B),z}function ne(r,f,d,g){if(typeof d=="object"&&d!==null&&d.type===Le&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Je:e:{for(var z=d.key;f!==null;){if(f.key===z){if(z=d.type,z===Le){if(f.tag===7){a(r,f.sibling),g=n(f,d.props.children),g.return=r,r=g;break e}}else if(f.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Qe&&La(z)===f.type){a(r,f.sibling),g=n(f,d.props),Vl(g,d),g.return=r,r=g;break e}a(r,f);break}else t(r,f);f=f.sibling}d.type===Le?(g=xa(d.props.children,r.mode,g,d.key),g.return=r,r=g):(g=Yn(d.type,d.key,d.props,null,r.mode,g),Vl(g,d),g.return=r,r=g)}return i(r);case we:e:{for(z=d.key;f!==null;){if(f.key===z)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){a(r,f.sibling),g=n(f,d.children||[]),g.return=r,r=g;break e}else{a(r,f);break}else t(r,f);f=f.sibling}g=Ei(d,r.mode,g),g.return=r,r=g}return i(r);case Qe:return d=La(d),ne(r,f,d,g)}if(vt(d))return M(r,f,d,g);if(je(d)){if(z=je(d),typeof z!="function")throw Error(y(150));return d=z.call(d),R(r,f,d,g)}if(typeof d.then=="function")return ne(r,f,Jn(d),g);if(d.$$typeof===Ce)return ne(r,f,Xn(r,d),g);Wn(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,f!==null&&f.tag===6?(a(r,f.sibling),g=n(f,d),g.return=r,r=g):(a(r,f),g=bi(d,r.mode,g),g.return=r,r=g),i(r)):a(r,f)}return function(r,f,d,g){try{Xl=0;var z=ne(r,f,d,g);return ol=null,z}catch(x){if(x===cl||x===Zn)throw x;var Z=et(29,x,null,r.mode);return Z.lanes=g,Z.return=r,Z}finally{}}}var Na=_f(!0),xf=_f(!1),aa=!1;function Li(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(W&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=jn(e),rf(e,null,a),t}return Qn(e,l,t,a),jn(e)}function Zl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,So(e,a)}}function Ni(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,a=a.next}while(a!==null);u===null?n=u=t:u=u.next=t}else n=u=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var qi=!1;function Kl(){if(qi){var e=il;if(e!==null)throw e}}function Jl(e,t,a,l){qi=!1;var n=e.updateQueue;aa=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var o=c,m=o.next;o.next=null,i===null?u=m:i.next=m,i=o;var v=e.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==i&&(c===null?v.firstBaseUpdate=m:c.next=m,v.lastBaseUpdate=o))}if(u!==null){var b=n.baseState;i=0,v=m=o=null,c=u;do{var h=c.lane&-536870913,p=h!==c.lane;if(p?($&h)===h:(l&h)===h){h!==0&&h===ul&&(qi=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var M=e,R=c;h=t;var ne=a;switch(R.tag){case 1:if(M=R.payload,typeof M=="function"){b=M.call(ne,b,h);break e}b=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=R.payload,h=typeof M=="function"?M.call(ne,b,h):M,h==null)break e;b=L({},b,h);break e;case 2:aa=!0}}h=c.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[h]:p.push(h))}else p={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(m=v=p,o=b):v=v.next=p,i|=h;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;p=c,c=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);v===null&&(o=b),n.baseState=o,n.firstBaseUpdate=m,n.lastBaseUpdate=v,u===null&&(n.shared.lanes=0),fa|=i,e.lanes=i,e.memoizedState=b}}function zf(e,t){if(typeof e!="function")throw Error(y(191,e));e.call(t)}function Cf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)zf(a[e],t)}var fl=s(null),kn=s(0);function Rf(e,t){e=Vt,O(kn,e),O(fl,t),Vt=e|t.baseLanes}function wi(){O(kn,Vt),O(fl,fl.current)}function Bi(){Vt=kn.current,E(fl),E(kn)}var tt=s(null),ht=null;function ua(e){var t=e.alternate;O(pe,pe.current&1),O(tt,e),ht===null&&(t===null||fl.current!==null||t.memoizedState!==null)&&(ht=e)}function Qi(e){O(pe,pe.current),O(tt,e),ht===null&&(ht=e)}function Uf(e){e.tag===22?(O(pe,pe.current),O(tt,e),ht===null&&(ht=e)):ia()}function ia(){O(pe,pe.current),O(tt,tt.current)}function at(e){E(tt),ht===e&&(ht=null),E(pe)}var pe=s(0);function Fn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vc(a)||Zc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wt=0,w=null,ae=null,ge=null,Pn=!1,sl=!1,qa=!1,In=0,Wl=0,rl=null,qm=0;function de(){throw Error(y(321))}function ji(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ie(e[a],t[a]))return!1;return!0}function Yi(e,t,a,l,n,u){return wt=u,w=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?ys:ac,qa=!1,u=a(l,n),qa=!1,sl&&(u=Hf(t,a,l,n)),Lf(e),u}function Lf(e){S.H=Pl;var t=ae!==null&&ae.next!==null;if(wt=0,ge=ae=w=null,Pn=!1,Wl=0,rl=null,t)throw Error(y(300));e===null||be||(e=e.dependencies,e!==null&&Gn(e)&&(be=!0))}function Hf(e,t,a,l){w=e;var n=0;do{if(sl&&(rl=null),Wl=0,sl=!1,25<=n)throw Error(y(301));if(n+=1,ge=ae=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}S.H=ps,u=t(a,l)}while(sl);return u}function wm(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?kl(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(w.flags|=1024),t}function $i(){var e=In!==0;return In=0,e}function Gi(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xi(e){if(Pn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pn=!1}wt=0,ge=ae=w=null,sl=!1,Wl=In=0,rl=null}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?w.memoizedState=ge=e:ge=ge.next=e,ge}function ve(){if(ae===null){var e=w.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ge===null?w.memoizedState:ge.next;if(t!==null)ge=t,ae=e;else{if(e===null)throw w.alternate===null?Error(y(467)):Error(y(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ge===null?w.memoizedState=ge=e:ge=ge.next=e}return ge}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kl(e){var t=Wl;return Wl+=1,rl===null&&(rl=[]),e=Of(rl,e,t),t=w,(ge===null?t.memoizedState:ge.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?ys:ac),e}function tu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return kl(e);if(e.$$typeof===Ce)return _e(e)}throw Error(y(438,String(e)))}function Vi(e){var t=null,a=w.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=w.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=eu(),w.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ja;return t.index++,a}function Bt(e,t){return typeof t=="function"?t(e):t}function au(e){var t=ve();return Zi(t,ae,e)}function Zi(e,t,a){var l=e.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=a;var n=e.baseQueue,u=l.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,l.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var c=i=null,o=null,m=t,v=!1;do{var b=m.lane&-536870913;if(b!==m.lane?($&b)===b:(wt&b)===b){var h=m.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===ul&&(v=!0);else if((wt&h)===h){m=m.next,h===ul&&(v=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(c=o=b,i=u):o=o.next=b,w.lanes|=h,fa|=h;b=m.action,qa&&a(u,b),u=m.hasEagerState?m.eagerState:a(u,b)}else h={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(c=o=h,i=u):o=o.next=h,w.lanes|=b,fa|=b;m=m.next}while(m!==null&&m!==t);if(o===null?i=u:o.next=c,!Ie(u,e.memoizedState)&&(be=!0,v&&(a=il,a!==null)))throw a;e.memoizedState=u,e.baseState=i,e.baseQueue=o,l.lastRenderedState=u}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ki(e){var t=ve(),a=t.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,u=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);Ie(u,t.memoizedState)||(be=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,l]}function Nf(e,t,a){var l=w,n=ve(),u=V;if(u){if(a===void 0)throw Error(y(407));a=a()}else a=t();var i=!Ie((ae||n).memoizedState,a);if(i&&(n.memoizedState=a,be=!0),n=n.queue,ki(Bf.bind(null,l,n,e),[e]),n.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(l.flags|=2048,dl(9,{destroy:void 0},wf.bind(null,l,n,a,t),null),ie===null)throw Error(y(349));u||(wt&127)!==0||qf(l,t,a)}return a}function qf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=w.updateQueue,t===null?(t=eu(),w.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function wf(e,t,a,l){t.value=a,t.getSnapshot=l,Qf(t)&&jf(e)}function Bf(e,t,a){return a(function(){Qf(t)&&jf(e)})}function Qf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ie(e,a)}catch{return!0}}function jf(e){var t=_a(e,2);t!==null&&Ke(t,e,2)}function Ji(e){var t=Ne();if(typeof e=="function"){var a=e;if(e=a(),qa){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:e},t}function Yf(e,t,a,l){return e.baseState=a,Zi(e,ae,typeof l=="function"?l:Bt)}function Bm(e,t,a,l,n){if(uu(e))throw Error(y(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};S.T!==null?a(!0):u.isTransition=!1,l(u),a=t.pending,a===null?(u.next=t.pending=u,$f(t,u)):(u.next=a.next,t.pending=a.next=u)}}function $f(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var u=S.T,i={};S.T=i;try{var c=a(n,l),o=S.S;o!==null&&o(i,c),Gf(e,t,c)}catch(m){Wi(e,t,m)}finally{u!==null&&i.types!==null&&(u.types=i.types),S.T=u}}else try{u=a(n,l),Gf(e,t,u)}catch(m){Wi(e,t,m)}}function Gf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Xf(e,t,l)},function(l){return Wi(e,t,l)}):Xf(e,t,a)}function Xf(e,t,a){t.status="fulfilled",t.value=a,Vf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,$f(e,a)))}function Wi(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Vf(t),t=t.next;while(t!==l)}e.action=null}function Vf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zf(e,t){return t}function Kf(e,t){if(V){var a=ie.formState;if(a!==null){e:{var l=w;if(V){if(ce){t:{for(var n=ce,u=mt;n.nodeType!==8;){if(!u){n=null;break t}if(n=yt(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){ce=yt(n.nextSibling),l=n.data==="F!";break e}}ea(l)}l=!1}l&&(t=a[0])}}return a=Ne(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zf,lastRenderedState:t},a.queue=l,a=ds.bind(null,w,l),l.dispatch=a,l=Ji(!1),u=tc.bind(null,w,!1,l.queue),l=Ne(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Bm.bind(null,w,n,u,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Jf(e){var t=ve();return Wf(t,ae,e)}function Wf(e,t,a){if(t=Zi(e,t,Zf)[0],e=au(Bt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=kl(t)}catch(i){throw i===cl?Zn:i}else l=t;t=ve();var n=t.queue,u=n.dispatch;return a!==t.memoizedState&&(w.flags|=2048,dl(9,{destroy:void 0},Qm.bind(null,n,a),null)),[l,u,e]}function Qm(e,t){e.action=t}function kf(e){var t=ve(),a=ae;if(a!==null)return Wf(t,a,e);ve(),t=t.memoizedState,a=ve();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=w.updateQueue,t===null&&(t=eu(),w.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ff(){return ve().memoizedState}function lu(e,t,a,l){var n=Ne();w.flags|=e,n.memoizedState=dl(1|t,{destroy:void 0},a,l===void 0?null:l)}function nu(e,t,a,l){var n=ve();l=l===void 0?null:l;var u=n.memoizedState.inst;ae!==null&&l!==null&&ji(l,ae.memoizedState.deps)?n.memoizedState=dl(t,u,a,l):(w.flags|=e,n.memoizedState=dl(1|t,u,a,l))}function Pf(e,t){lu(8390656,8,e,t)}function ki(e,t){nu(2048,8,e,t)}function jm(e){w.flags|=4;var t=w.updateQueue;if(t===null)t=eu(),w.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function If(e){var t=ve().memoizedState;return jm({ref:t,nextImpl:e}),function(){if((W&2)!==0)throw Error(y(440));return t.impl.apply(void 0,arguments)}}function es(e,t){return nu(4,2,e,t)}function ts(e,t){return nu(4,4,e,t)}function as(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ls(e,t,a){a=a!=null?a.concat([e]):null,nu(4,4,as.bind(null,t,e),a)}function Fi(){}function ns(e,t){var a=ve();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ji(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function us(e,t){var a=ve();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ji(t,l[1]))return l[0];if(l=e(),qa){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l}function Pi(e,t,a){return a===void 0||(wt&1073741824)!==0&&($&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ir(),w.lanes|=e,fa|=e,a)}function is(e,t,a,l){return Ie(a,t)?a:fl.current!==null?(e=Pi(e,a,l),Ie(e,t)||(be=!0),e):(wt&42)===0||(wt&1073741824)!==0&&($&261930)===0?(be=!0,e.memoizedState=a):(e=ir(),w.lanes|=e,fa|=e,t)}function cs(e,t,a,l,n){var u=A.p;A.p=u!==0&&8>u?u:8;var i=S.T,c={};S.T=c,tc(e,!1,t,a);try{var o=n(),m=S.S;if(m!==null&&m(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var v=Nm(o,l);Fl(e,t,v,ut(e))}else Fl(e,t,l,ut(e))}catch(b){Fl(e,t,{then:function(){},status:"rejected",reason:b},ut())}finally{A.p=u,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function Ym(){}function Ii(e,t,a,l){if(e.tag!==5)throw Error(y(476));var n=os(e).queue;cs(e,n,t,H,a===null?Ym:function(){return fs(e),a(l)})}function os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:H},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fs(e){var t=os(e);t.next===null&&(t=e.alternate.memoizedState),Fl(e,t.next.queue,{},ut())}function ec(){return _e(yn)}function ss(){return ve().memoizedState}function rs(){return ve().memoizedState}function $m(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ut();e=la(a);var l=na(t,e,a);l!==null&&(Ke(l,t,a),Zl(l,t,a)),t={cache:zi()},e.payload=t;return}t=t.return}}function Gm(e,t,a){var l=ut();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(e)?ms(t,a):(a=Si(e,t,a,l),a!==null&&(Ke(a,e,l),hs(a,t,l)))}function ds(e,t,a){var l=ut();Fl(e,t,a,l)}function Fl(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(uu(e))ms(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,a);if(n.hasEagerState=!0,n.eagerState=c,Ie(c,i))return Qn(e,t,n,0),ie===null&&Bn(),!1}catch{}finally{}if(a=Si(e,t,n,l),a!==null)return Ke(a,e,l),hs(a,t,l),!0}return!1}function tc(e,t,a,l){if(l={lane:2,revertLane:Lc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},uu(e)){if(t)throw Error(y(479))}else t=Si(e,a,l,2),t!==null&&Ke(t,e,2)}function uu(e){var t=e.alternate;return e===w||t!==null&&t===w}function ms(e,t){sl=Pn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function hs(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,So(e,a)}}var Pl={readContext:_e,use:tu,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};Pl.useEffectEvent=de;var ys={readContext:_e,use:tu,useCallback:function(e,t){return Ne().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Pf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,lu(4194308,4,as.bind(null,t,e),a)},useLayoutEffect:function(e,t){return lu(4194308,4,e,t)},useInsertionEffect:function(e,t){lu(4,2,e,t)},useMemo:function(e,t){var a=Ne();t=t===void 0?null:t;var l=e();if(qa){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ne();if(a!==void 0){var n=a(t);if(qa){Wt(!0);try{a(t)}finally{Wt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Gm.bind(null,w,e),[l.memoizedState,e]},useRef:function(e){var t=Ne();return e={current:e},t.memoizedState=e},useState:function(e){e=Ji(e);var t=e.queue,a=ds.bind(null,w,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Fi,useDeferredValue:function(e,t){var a=Ne();return Pi(a,e,t)},useTransition:function(){var e=Ji(!1);return e=cs.bind(null,w,e.queue,!0,!1),Ne().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=w,n=Ne();if(V){if(a===void 0)throw Error(y(407));a=a()}else{if(a=t(),ie===null)throw Error(y(349));($&127)!==0||qf(l,t,a)}n.memoizedState=a;var u={value:a,getSnapshot:t};return n.queue=u,Pf(Bf.bind(null,l,u,e),[e]),l.flags|=2048,dl(9,{destroy:void 0},wf.bind(null,l,u,a,t),null),a},useId:function(){var e=Ne(),t=ie.identifierPrefix;if(V){var a=Mt,l=Ot;a=(l&~(1<<32-Pe(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=In++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=qm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:Kf,useActionState:Kf,useOptimistic:function(e){var t=Ne();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tc.bind(null,w,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vi,useCacheRefresh:function(){return Ne().memoizedState=$m.bind(null,w)},useEffectEvent:function(e){var t=Ne(),a={impl:e};return t.memoizedState=a,function(){if((W&2)!==0)throw Error(y(440));return a.impl.apply(void 0,arguments)}}},ac={readContext:_e,use:tu,useCallback:ns,useContext:_e,useEffect:ki,useImperativeHandle:ls,useInsertionEffect:es,useLayoutEffect:ts,useMemo:us,useReducer:au,useRef:Ff,useState:function(){return au(Bt)},useDebugValue:Fi,useDeferredValue:function(e,t){var a=ve();return is(a,ae.memoizedState,e,t)},useTransition:function(){var e=au(Bt)[0],t=ve().memoizedState;return[typeof e=="boolean"?e:kl(e),t]},useSyncExternalStore:Nf,useId:ss,useHostTransitionStatus:ec,useFormState:Jf,useActionState:Jf,useOptimistic:function(e,t){var a=ve();return Yf(a,ae,e,t)},useMemoCache:Vi,useCacheRefresh:rs};ac.useEffectEvent=If;var ps={readContext:_e,use:tu,useCallback:ns,useContext:_e,useEffect:ki,useImperativeHandle:ls,useInsertionEffect:es,useLayoutEffect:ts,useMemo:us,useReducer:Ki,useRef:Ff,useState:function(){return Ki(Bt)},useDebugValue:Fi,useDeferredValue:function(e,t){var a=ve();return ae===null?Pi(a,e,t):is(a,ae.memoizedState,e,t)},useTransition:function(){var e=Ki(Bt)[0],t=ve().memoizedState;return[typeof e=="boolean"?e:kl(e),t]},useSyncExternalStore:Nf,useId:ss,useHostTransitionStatus:ec,useFormState:kf,useActionState:kf,useOptimistic:function(e,t){var a=ve();return ae!==null?Yf(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vi,useCacheRefresh:rs};ps.useEffectEvent=If;function lc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:L({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ut(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Ke(t,e,l),Zl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ut(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Ke(t,e,l),Zl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ut(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(Ke(t,e,a),Zl(t,e,a))}};function vs(e,t,a,l,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,i):t.prototype&&t.prototype.isPureReactComponent?!Bl(a,l)||!Bl(n,u):!0}function Ss(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&nc.enqueueReplaceState(t,t.state,null)}function wa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=L({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function gs(e){wn(e)}function bs(e){console.error(e)}function Es(e){wn(e)}function iu(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ts(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uc(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){iu(e,t)},a}function As(e){return e=la(e),e.tag=3,e}function Os(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var u=l.value;e.payload=function(){return n(u)},e.callback=function(){Ts(t,a,l)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Ts(t,a,l),typeof n!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Xm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&nl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return ht===null?Su():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Kn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Cc(e,l,n)),!1;case 22:return a.flags|=65536,l===Kn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Cc(e,l,n)),!1}throw Error(y(435,a.tag))}return Cc(e,l,n),Su(),!1}if(V)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Oi&&(e=Error(y(422),{cause:l}),Yl(st(e,a)))):(l!==Oi&&(t=Error(y(423),{cause:l}),Yl(st(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=st(l,a),n=uc(e.stateNode,l,n),Ni(e,n),me!==4&&(me=2)),!1;var u=Error(y(520),{cause:l});if(u=st(u,a),cn===null?cn=[u]:cn.push(u),me!==4&&(me=2),t===null)return!0;l=st(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=uc(a.stateNode,l,e),Ni(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(sa===null||!sa.has(u))))return a.flags|=65536,n&=-n,a.lanes|=n,n=As(n),Os(n,e,a,l),Ni(a,n),!1}a=a.return}while(a!==null);return!1}var ic=Error(y(461)),be=!1;function xe(e,t,a,l){t.child=e===null?xf(t,null,a,l):Na(t,e.child,a,l)}function Ms(e,t,a,l,n){a=a.render;var u=t.ref;if("ref"in l){var i={};for(var c in l)c!=="ref"&&(i[c]=l[c])}else i=l;return Ra(t),l=Yi(e,t,a,i,u,n),c=$i(),e!==null&&!be?(Gi(e,t,n),Qt(e,t,n)):(V&&c&&Ti(t),t.flags|=1,xe(e,t,l,n),t.child)}function Ds(e,t,a,l,n){if(e===null){var u=a.type;return typeof u=="function"&&!gi(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,_s(e,t,u,l,n)):(e=Yn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!hc(e,n)){var i=u.memoizedProps;if(a=a.compare,a=a!==null?a:Bl,a(i,l)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=Lt(u,l),e.ref=t.ref,e.return=t,t.child=e}function _s(e,t,a,l,n){if(e!==null){var u=e.memoizedProps;if(Bl(u,l)&&e.ref===t.ref)if(be=!1,t.pendingProps=l=u,hc(e,n))(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return cc(e,t,a,l,n)}function xs(e,t,a,l){var n=l.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~u}else l=0,t.child=null;return zs(e,t,u,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vn(t,u!==null?u.cachePool:null),u!==null?Rf(t,u):wi(),Uf(t);else return l=t.lanes=536870912,zs(e,t,u!==null?u.baseLanes|a:a,a,l)}else u!==null?(Vn(t,u.cachePool),Rf(t,u),ia(),t.memoizedState=null):(e!==null&&Vn(t,null),wi(),ia());return xe(e,t,n,a),t.child}function Il(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zs(e,t,a,l,n){var u=Ri();return u=u===null?null:{parent:Se._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&Vn(t,null),wi(),Uf(t),e!==null&&nl(e,t,l,!0),t.childLanes=n,null}function cu(e,t){return t=fu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Cs(e,t,a){return Na(t,e.child,null,a),e=cu(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Vm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(V){if(l.mode==="hidden")return e=cu(t,l),t.lanes=536870912,Il(null,e);if(Qi(t),(e=ce)?(e=$r(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Ot,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},a=mf(e),a.return=t,t.child=a,De=t,ce=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return cu(t,l)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(Qi(t),n)if(t.flags&256)t.flags&=-257,t=Cs(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(y(558));else if(be||nl(e,t,a,!1),n=(a&e.childLanes)!==0,be||n){if(l=ie,l!==null&&(i=go(l,a),i!==0&&i!==u.retryLane))throw u.retryLane=i,_a(e,i),Ke(l,e,i),ic;Su(),t=Cs(e,t,a)}else e=u.treeContext,ce=yt(i.nextSibling),De=t,V=!0,It=null,mt=!1,e!==null&&pf(t,e),t=cu(t,l),t.flags|=4096;return t}return e=Lt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ou(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(y(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function cc(e,t,a,l,n){return Ra(t),a=Yi(e,t,a,l,void 0,n),l=$i(),e!==null&&!be?(Gi(e,t,n),Qt(e,t,n)):(V&&l&&Ti(t),t.flags|=1,xe(e,t,a,n),t.child)}function Rs(e,t,a,l,n,u){return Ra(t),t.updateQueue=null,a=Hf(t,l,a,n),Lf(e),l=$i(),e!==null&&!be?(Gi(e,t,u),Qt(e,t,u)):(V&&l&&Ti(t),t.flags|=1,xe(e,t,a,u),t.child)}function Us(e,t,a,l,n){if(Ra(t),t.stateNode===null){var u=el,i=a.contextType;typeof i=="object"&&i!==null&&(u=_e(i)),u=new a(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=nc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},Li(t),i=a.contextType,u.context=typeof i=="object"&&i!==null?_e(i):el,u.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(lc(t,a,i,l),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&nc.enqueueReplaceState(u,u.state,null),Jl(t,l,u,n),Kl(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var c=t.memoizedProps,o=wa(a,c);u.props=o;var m=u.context,v=a.contextType;i=el,typeof v=="object"&&v!==null&&(i=_e(v));var b=a.getDerivedStateFromProps;v=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,v||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||m!==i)&&Ss(t,u,l,i),aa=!1;var h=t.memoizedState;u.state=h,Jl(t,l,u,n),Kl(),m=t.memoizedState,c||h!==m||aa?(typeof b=="function"&&(lc(t,a,b,l),m=t.memoizedState),(o=aa||vs(t,a,o,l,h,m,i))?(v||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=m),u.props=l,u.state=m,u.context=i,l=o):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,Hi(e,t),i=t.memoizedProps,v=wa(a,i),u.props=v,b=t.pendingProps,h=u.context,m=a.contextType,o=el,typeof m=="object"&&m!==null&&(o=_e(m)),c=a.getDerivedStateFromProps,(m=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==b||h!==o)&&Ss(t,u,l,o),aa=!1,h=t.memoizedState,u.state=h,Jl(t,l,u,n),Kl();var p=t.memoizedState;i!==b||h!==p||aa||e!==null&&e.dependencies!==null&&Gn(e.dependencies)?(typeof c=="function"&&(lc(t,a,c,l),p=t.memoizedState),(v=aa||vs(t,a,v,l,h,p,o)||e!==null&&e.dependencies!==null&&Gn(e.dependencies))?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,p,o),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,p,o)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=p),u.props=l,u.state=p,u.context=o,l=v):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,ou(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=Na(t,e.child,null,n),t.child=Na(t,null,a,n)):xe(e,t,a,n),t.memoizedState=u.state,e=t.child):e=Qt(e,t,n),e}function Ls(e,t,a,l){return za(),t.flags|=256,xe(e,t,a,l),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fc(e){return{baseLanes:e,cachePool:Tf()}}function sc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function Hs(e,t,a){var l=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(pe.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(V){if(n?ua(t):ia(),(e=ce)?(e=$r(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Ot,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},a=mf(e),a.return=t,t.child=a,De=t,ce=null)):e=null,e===null)throw ea(t);return Zc(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(ia(),n=t.mode,c=fu({mode:"hidden",children:c},n),l=xa(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=fc(a),l.childLanes=sc(e,i,a),t.memoizedState=oc,Il(null,l)):(ua(t),rc(t,c))}var o=e.memoizedState;if(o!==null&&(c=o.dehydrated,c!==null)){if(u)t.flags&256?(ua(t),t.flags&=-257,t=dc(e,t,a)):t.memoizedState!==null?(ia(),t.child=e.child,t.flags|=128,t=null):(ia(),c=l.fallback,n=t.mode,l=fu({mode:"visible",children:l.children},n),c=xa(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,Na(t,e.child,null,a),l=t.child,l.memoizedState=fc(a),l.childLanes=sc(e,i,a),t.memoizedState=oc,t=Il(null,l));else if(ua(t),Zc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,l=Error(y(419)),l.stack="",l.digest=i,Yl({value:l,source:null,stack:null}),t=dc(e,t,a)}else if(be||nl(e,t,a,!1),i=(a&e.childLanes)!==0,be||i){if(i=ie,i!==null&&(l=go(i,a),l!==0&&l!==o.retryLane))throw o.retryLane=l,_a(e,l),Ke(i,e,l),ic;Vc(c)||Su(),t=dc(e,t,a)}else Vc(c)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,ce=yt(c.nextSibling),De=t,V=!0,It=null,mt=!1,e!==null&&pf(t,e),t=rc(t,l.children),t.flags|=4096);return t}return n?(ia(),c=l.fallback,n=t.mode,o=e.child,m=o.sibling,l=Lt(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,m!==null?c=Lt(m,c):(c=xa(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,Il(null,l),l=t.child,c=e.child.memoizedState,c===null?c=fc(a):(n=c.cachePool,n!==null?(o=Se._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Tf(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=sc(e,i,a),t.memoizedState=oc,Il(e.child,l)):(ua(t),a=e.child,e=a.sibling,a=Lt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function rc(e,t){return t=fu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fu(e,t){return e=et(22,e,null,t),e.lanes=0,e}function dc(e,t,a){return Na(t,e.child,null,a),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ns(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),_i(e.return,t,a)}function mc(e,t,a,l,n,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n,i.treeForkCount=u)}function qs(e,t,a){var l=t.pendingProps,n=l.revealOrder,u=l.tail;l=l.children;var i=pe.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,O(pe,i),xe(e,t,l,a),l=V?jl:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ns(e,a,t);else if(e.tag===19)Ns(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Fn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),mc(t,!1,n,a,u,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Fn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}mc(t,!0,a,null,u,l);break;case"together":mc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Qt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(nl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,a=Lt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Lt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function hc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gn(e)))}function Zm(e,t,a){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),ta(t,Se,e.memoizedState.cache),za();break;case 27:case 5:Ml(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qi(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Hs(e,t,a):(ua(t),e=Qt(e,t,a),e!==null?e.sibling:null);ua(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(nl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return qs(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),O(pe,pe.current),l)break;return null;case 22:return t.lanes=0,xs(e,t,a,t.pendingProps);case 24:ta(t,Se,e.memoizedState.cache)}return Qt(e,t,a)}function ws(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!hc(e,a)&&(t.flags&128)===0)return be=!1,Zm(e,t,a);be=(e.flags&131072)!==0}else be=!1,V&&(t.flags&1048576)!==0&&yf(t,jl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=La(t.elementType),t.type=e,typeof e=="function")gi(e)?(l=wa(e,l),t.tag=1,t=Us(null,t,e,l,a)):(t.tag=0,t=cc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===it){t.tag=11,t=Ms(null,t,e,l,a);break e}else if(n===X){t.tag=14,t=Ds(null,t,e,l,a);break e}}throw t=zt(e)||e,Error(y(306,t,""))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=wa(l,t.pendingProps),Us(e,t,l,n,a);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(y(387));l=t.pendingProps;var u=t.memoizedState;n=u.element,Hi(e,t),Jl(t,l,null,a);var i=t.memoizedState;if(l=i.cache,ta(t,Se,l),l!==u.cache&&xi(t,[Se],a,!0),Kl(),l=i.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Ls(e,t,l,a);break e}else if(l!==n){n=st(Error(y(424)),t),Yl(n),t=Ls(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ce=yt(e.firstChild),De=t,V=!0,It=null,mt=!0,a=xf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(za(),l===n){t=Qt(e,t,a);break e}xe(e,t,l,a)}t=t.child}return t;case 26:return ou(e,t),e===null?(a=Jr(t.type,null,t.pendingProps,null))?t.memoizedState=a:V||(a=t.type,e=t.pendingProps,l=Mu(Q.current).createElement(a),l[Me]=t,l[Ye]=e,ze(l,a,e),Ae(l),t.stateNode=l):t.memoizedState=Jr(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ml(t),e===null&&V&&(l=t.stateNode=Vr(t.type,t.pendingProps,Q.current),De=t,mt=!0,n=ce,ha(t.type)?(Kc=n,ce=yt(l.firstChild)):ce=n),xe(e,t,t.pendingProps.children,a),ou(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((n=l=ce)&&(l=Th(l,t.type,t.pendingProps,mt),l!==null?(t.stateNode=l,De=t,ce=yt(l.firstChild),mt=!1,n=!0):n=!1),n||ea(t)),Ml(t),n=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,l=u.children,$c(n,u)?l=null:i!==null&&$c(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Yi(e,t,wm,null,null,a),yn._currentValue=n),ou(e,t),xe(e,t,l,a),t.child;case 6:return e===null&&V&&((e=a=ce)&&(a=Ah(a,t.pendingProps,mt),a!==null?(t.stateNode=a,De=t,ce=null,e=!0):e=!1),e||ea(t)),null;case 13:return Hs(e,t,a);case 4:return He(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Na(t,null,l,a):xe(e,t,l,a),t.child;case 11:return Ms(e,t,t.type,t.pendingProps,a);case 7:return xe(e,t,t.pendingProps,a),t.child;case 8:return xe(e,t,t.pendingProps.children,a),t.child;case 12:return xe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),xe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ra(t),n=_e(n),l=l(n),t.flags|=1,xe(e,t,l,a),t.child;case 14:return Ds(e,t,t.type,t.pendingProps,a);case 15:return _s(e,t,t.type,t.pendingProps,a);case 19:return qs(e,t,a);case 31:return Vm(e,t,a);case 22:return xs(e,t,a,t.pendingProps);case 24:return Ra(t),l=_e(Se),e===null?(n=Ri(),n===null&&(n=ie,u=zi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=a),n=u),t.memoizedState={parent:l,cache:n},Li(t),ta(t,Se,n)):((e.lanes&a)!==0&&(Hi(e,t),Jl(t,null,null,a),Kl()),n=e.memoizedState,u=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,Se,l)):(l=u.cache,ta(t,Se,l),l!==n.cache&&xi(t,[Se],a,!0))),xe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(y(156,t.tag))}function jt(e){e.flags|=4}function yc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(sr())e.flags|=8192;else throw Ha=Kn,Ui}else e.flags&=-16777217}function Bs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ir(t))if(sr())e.flags|=8192;else throw Ha=Kn,Ui}function su(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?po():536870912,e.lanes|=t,pl|=t)}function en(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Km(e,t,a){var l=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return oe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),qt(Se),ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(t)?jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mi())),oe(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(jt(t),u!==null?(oe(t),Bs(t,u)):(oe(t),yc(t,n,null,l,a))):u?u!==e.memoizedState?(jt(t),oe(t),Bs(t,u)):(oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&jt(t),oe(t),yc(t,n,e,l,a)),null;case 27:if(En(t),a=Q.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(!l){if(t.stateNode===null)throw Error(y(166));return oe(t),null}e=_.current,ll(t)?vf(t):(e=Vr(n,l,a),t.stateNode=e,jt(t))}return oe(t),null;case 5:if(En(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(!l){if(t.stateNode===null)throw Error(y(166));return oe(t),null}if(u=_.current,ll(t))vf(t);else{var i=Mu(Q.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?i.createElement(n,{is:l.is}):i.createElement(n)}}u[Me]=t,u[Ye]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(ze(u,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&jt(t)}}return oe(t),yc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(y(166));if(e=Q.current,ll(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=De,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Me]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Hr(e.nodeValue,a)),e||ea(t,!0)}else e=Mu(e).createTextNode(l),e[Me]=t,t.stateNode=e}return oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ll(t),a!==null){if(e===null){if(!l)throw Error(y(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(557));e[Me]=t}else za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),e=!1}else a=Mi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(y(558))}return oe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(y(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(y(317));n[Me]=t}else za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),n=!1}else n=Mi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),su(t,t.updateQueue),oe(t),null);case 4:return ye(),e===null&&wc(t.stateNode.containerInfo),oe(t),null;case 10:return qt(t.type),oe(t),null;case 19:if(E(pe),l=t.memoizedState,l===null)return oe(t),null;if(n=(t.flags&128)!==0,u=l.rendering,u===null)if(n)en(l,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Fn(e),u!==null){for(t.flags|=128,en(l,!1),e=u.updateQueue,t.updateQueue=e,su(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)df(a,e),a=a.sibling;return O(pe,pe.current&1|2),V&&Ht(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ke()>yu&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304)}else{if(!n)if(e=Fn(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,su(t,e),en(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!V)return oe(t),null}else 2*ke()-l.renderingStartTime>yu&&a!==536870912&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(e=l.last,e!==null?e.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ke(),e.sibling=null,a=pe.current,O(pe,n?a&1|2:a&1),V&&Ht(t,l.treeForkCount),e):(oe(t),null);case 22:case 23:return at(t),Bi(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),a=t.updateQueue,a!==null&&su(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&E(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(Se),oe(t),null;case 25:return null;case 30:return null}throw Error(y(156,t.tag))}function Jm(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(Se),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(y(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(pe),null;case 4:return ye(),null;case 10:return qt(t.type),null;case 22:case 23:return at(t),Bi(),e!==null&&E(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(Se),null;case 25:return null;default:return null}}function Qs(e,t){switch(Ai(t),t.tag){case 3:qt(Se),ye();break;case 26:case 27:case 5:En(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:E(pe);break;case 10:qt(t.type);break;case 22:case 23:at(t),Bi(),e!==null&&E(Ua);break;case 24:qt(Se)}}function tn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var u=a.create,i=a.inst;l=u(),i.destroy=l}a=a.next}while(a!==n)}}catch(c){ee(t,t.return,c)}}function ca(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var u=n.next;l=u;do{if((l.tag&e)===e){var i=l.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var o=a,m=c;try{m()}catch(v){ee(n,o,v)}}}l=l.next}while(l!==u)}}catch(v){ee(t,t.return,v)}}function js(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Cf(t,a)}catch(l){ee(e,e.return,l)}}}function Ys(e,t,a){a.props=wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ee(e,t,l)}}function an(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ee(e,t,n)}}function Dt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ee(e,t,n)}else a.current=null}function $s(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ee(e,e.return,n)}}function pc(e,t,a){try{var l=e.stateNode;ph(l,e.type,a,t),l[Ye]=t}catch(n){ee(e,e.return,n)}}function Gs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Rt));else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Sc(e,t,a),e=e.sibling;e!==null;)Sc(e,t,a),e=e.sibling}function ru(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ru(e,t,a),e=e.sibling;e!==null;)ru(e,t,a),e=e.sibling}function Xs(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ze(t,l,a),t[Me]=e,t[Ye]=a}catch(u){ee(e,e.return,u)}}var Yt=!1,Ee=!1,gc=!1,Vs=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Wm(e,t){if(e=e.containerInfo,jc=Uu,e=af(e),di(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var i=0,c=-1,o=-1,m=0,v=0,b=e,h=null;t:for(;;){for(var p;b!==a||n!==0&&b.nodeType!==3||(c=i+n),b!==u||l!==0&&b.nodeType!==3||(o=i+l),b.nodeType===3&&(i+=b.nodeValue.length),(p=b.firstChild)!==null;)h=b,b=p;for(;;){if(b===e)break t;if(h===a&&++m===n&&(c=i),h===u&&++v===l&&(o=i),(p=b.nextSibling)!==null)break;b=h,h=b.parentNode}b=p}a=c===-1||o===-1?null:{start:c,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:e,selectionRange:a},Uu=!1,Oe=t;Oe!==null;)if(t=Oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Oe=e;else for(;Oe!==null;){switch(t=Oe,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,n=u.memoizedProps,u=u.memoizedState,l=a.stateNode;try{var M=wa(a.type,n);e=l.getSnapshotBeforeUpdate(M,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(R){ee(a,a.return,R)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(y(163))}if(e=t.sibling,e!==null){e.return=t.return,Oe=e;break}Oe=t.return}}function Zs(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Gt(e,a),l&4&&tn(5,a);break;case 1:if(Gt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){ee(a,a.return,i)}else{var n=wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ee(a,a.return,i)}}l&64&&js(a),l&512&&an(a,a.return);break;case 3:if(Gt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Cf(e,t)}catch(i){ee(a,a.return,i)}}break;case 27:t===null&&l&4&&Xs(a);case 26:case 5:Gt(e,a),t===null&&l&4&&$s(a),l&512&&an(a,a.return);break;case 12:Gt(e,a);break;case 31:Gt(e,a),l&4&&Ws(e,a);break;case 13:Gt(e,a),l&4&&ks(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nh.bind(null,a),Oh(e,a))));break;case 22:if(l=a.memoizedState!==null||Yt,!l){t=t!==null&&t.memoizedState!==null||Ee,n=Yt;var u=Ee;Yt=l,(Ee=t)&&!u?Xt(e,a,(a.subtreeFlags&8772)!==0):Gt(e,a),Yt=n,Ee=u}break;case 30:break;default:Gt(e,a)}}function Ks(e){var t=e.alternate;t!==null&&(e.alternate=null,Ks(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var se=null,Ge=!1;function $t(e,t,a){for(a=a.child;a!==null;)Js(e,t,a),a=a.sibling}function Js(e,t,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:Ee||Dt(a,t),$t(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ee||Dt(a,t);var l=se,n=Ge;ha(a.type)&&(se=a.stateNode,Ge=!1),$t(e,t,a),dn(a.stateNode),se=l,Ge=n;break;case 5:Ee||Dt(a,t);case 6:if(l=se,n=Ge,se=null,$t(e,t,a),se=l,Ge=n,se!==null)if(Ge)try{(se.nodeType===9?se.body:se.nodeName==="HTML"?se.ownerDocument.body:se).removeChild(a.stateNode)}catch(u){ee(a,t,u)}else try{se.removeChild(a.stateNode)}catch(u){ee(a,t,u)}break;case 18:se!==null&&(Ge?(e=se,jr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ol(e)):jr(se,a.stateNode));break;case 4:l=se,n=Ge,se=a.stateNode.containerInfo,Ge=!0,$t(e,t,a),se=l,Ge=n;break;case 0:case 11:case 14:case 15:ca(2,a,t),Ee||ca(4,a,t),$t(e,t,a);break;case 1:Ee||(Dt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ys(a,t,l)),$t(e,t,a);break;case 21:$t(e,t,a);break;case 22:Ee=(l=Ee)||a.memoizedState!==null,$t(e,t,a),Ee=l;break;default:$t(e,t,a)}}function Ws(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ol(e)}catch(a){ee(t,t.return,a)}}}function ks(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ol(e)}catch(a){ee(t,t.return,a)}}function km(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vs),t;default:throw Error(y(435,e.tag))}}function du(e,t){var a=km(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=uh.bind(null,e,l);l.then(n,n)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],u=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(ha(c.type)){se=c.stateNode,Ge=!1;break e}break;case 5:se=c.stateNode,Ge=!1;break e;case 3:case 4:se=c.stateNode.containerInfo,Ge=!0;break e}c=c.return}if(se===null)throw Error(y(160));Js(u,i,n),se=null,Ge=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fs(t,e),t=t.sibling}var gt=null;function Fs(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),Ve(e),l&4&&(ca(3,e,e.return),tn(3,e),ca(5,e,e.return));break;case 1:Xe(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),l&64&&Yt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=gt;if(Xe(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),l&4){var u=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":u=n.getElementsByTagName("title")[0],(!u||u[zl]||u[Me]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(l),n.head.insertBefore(u,n.querySelector("head > title"))),ze(u,l,a),u[Me]=e,Ae(u),l=u;break e;case"link":var i=Fr("link","href",n).get(l+(a.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(l),ze(u,l,a),n.head.appendChild(u);break;case"meta":if(i=Fr("meta","content",n).get(l+(a.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(c,1);break t}}u=n.createElement(l),ze(u,l,a),n.head.appendChild(u);break;default:throw Error(y(468,l))}u[Me]=e,Ae(u),l=u}e.stateNode=l}else Pr(n,e.type,e.stateNode);else e.stateNode=kr(n,l,e.memoizedProps);else u!==l?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,l===null?Pr(n,e.type,e.stateNode):kr(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&pc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),a!==null&&l&4&&pc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),e.flags&32){n=e.stateNode;try{Ka(n,"")}catch(M){ee(e,e.return,M)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,pc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(gc=!0);break;case 6:if(Xe(t,e),Ve(e),l&4){if(e.stateNode===null)throw Error(y(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(M){ee(e,e.return,M)}}break;case 3:if(xu=null,n=gt,gt=Du(t.containerInfo),Xe(t,e),gt=n,Ve(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ol(t.containerInfo)}catch(M){ee(e,e.return,M)}gc&&(gc=!1,Ps(e));break;case 4:l=gt,gt=Du(e.stateNode.containerInfo),Xe(t,e),Ve(e),gt=l;break;case 12:Xe(t,e),Ve(e);break;case 31:Xe(t,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 13:Xe(t,e),Ve(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hu=ke()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 22:n=e.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,m=Yt,v=Ee;if(Yt=m||n,Ee=v||o,Xe(t,e),Ee=v,Yt=m,Ve(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||o||Yt||Ee||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){o=a=t;try{if(u=o.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=o.stateNode;var b=o.memoizedProps.style,h=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(M){ee(o,o.return,M)}}}else if(t.tag===6){if(a===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(M){ee(o,o.return,M)}}}else if(t.tag===18){if(a===null){o=t;try{var p=o.stateNode;n?Yr(p,!0):Yr(o.stateNode,!1)}catch(M){ee(o,o.return,M)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,du(e,a))));break;case 19:Xe(t,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 30:break;case 21:break;default:Xe(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Gs(l)){a=l;break}l=l.return}if(a==null)throw Error(y(160));switch(a.tag){case 27:var n=a.stateNode,u=vc(e);ru(e,u,n);break;case 5:var i=a.stateNode;a.flags&32&&(Ka(i,""),a.flags&=-33);var c=vc(e);ru(e,c,i);break;case 3:case 4:var o=a.stateNode.containerInfo,m=vc(e);Sc(e,m,o);break;default:throw Error(y(161))}}catch(v){ee(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ps(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ps(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Gt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zs(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ba(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ys(t,t.return,a),Ba(t);break;case 27:dn(t.stateNode);case 26:case 5:Dt(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:Xt(n,u,a),tn(4,u);break;case 1:if(Xt(n,u,a),l=u,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){ee(l,l.return,m)}if(l=u,n=l.updateQueue,n!==null){var c=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)zf(o[n],c)}catch(m){ee(l,l.return,m)}}a&&i&64&&js(u),an(u,u.return);break;case 27:Xs(u);case 26:case 5:Xt(n,u,a),a&&l===null&&i&4&&$s(u),an(u,u.return);break;case 12:Xt(n,u,a);break;case 31:Xt(n,u,a),a&&i&4&&Ws(n,u);break;case 13:Xt(n,u,a),a&&i&4&&ks(n,u);break;case 22:u.memoizedState===null&&Xt(n,u,a),an(u,u.return);break;case 30:break;default:Xt(n,u,a)}t=t.sibling}}function bc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$l(a))}function Ec(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e))}function bt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Is(e,t,a,l),t=t.sibling}function Is(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,a,l),n&2048&&tn(9,t);break;case 1:bt(e,t,a,l);break;case 3:bt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e)));break;case 12:if(n&2048){bt(e,t,a,l),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ee(t,t.return,o)}}else bt(e,t,a,l);break;case 31:bt(e,t,a,l);break;case 13:bt(e,t,a,l);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?bt(e,t,a,l):ln(e,t):u._visibility&2?bt(e,t,a,l):(u._visibility|=2,ml(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&bc(i,t);break;case 24:bt(e,t,a,l),n&2048&&Ec(t.alternate,t);break;default:bt(e,t,a,l)}}function ml(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,c=a,o=l,m=i.flags;switch(i.tag){case 0:case 11:case 15:ml(u,i,c,o,n),tn(8,i);break;case 23:break;case 22:var v=i.stateNode;i.memoizedState!==null?v._visibility&2?ml(u,i,c,o,n):ln(u,i):(v._visibility|=2,ml(u,i,c,o,n)),n&&m&2048&&bc(i.alternate,i);break;case 24:ml(u,i,c,o,n),n&&m&2048&&Ec(i.alternate,i);break;default:ml(u,i,c,o,n)}t=t.sibling}}function ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:ln(a,l),n&2048&&bc(l.alternate,l);break;case 24:ln(a,l),n&2048&&Ec(l.alternate,l);break;default:ln(a,l)}t=t.sibling}}var nn=8192;function hl(e,t,a){if(e.subtreeFlags&nn)for(e=e.child;e!==null;)er(e,t,a),e=e.sibling}function er(e,t,a){switch(e.tag){case 26:hl(e,t,a),e.flags&nn&&e.memoizedState!==null&&qh(a,gt,e.memoizedState,e.memoizedProps);break;case 5:hl(e,t,a);break;case 3:case 4:var l=gt;gt=Du(e.stateNode.containerInfo),hl(e,t,a),gt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=nn,nn=16777216,hl(e,t,a),nn=l):hl(e,t,a));break;default:hl(e,t,a)}}function tr(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Oe=l,lr(l,e)}tr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ar(e),e=e.sibling}function ar(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&ca(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mu(e)):un(e);break;default:un(e)}}function mu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Oe=l,lr(l,e)}tr(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),mu(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mu(t));break;default:mu(t)}e=e.sibling}}function lr(e,t){for(;Oe!==null;){var a=Oe;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$l(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Oe=l;else e:for(a=e;Oe!==null;){l=Oe;var n=l.sibling,u=l.return;if(Ks(l),l===a){Oe=null;break e}if(n!==null){n.return=u,Oe=n;break e}Oe=u}}}var Fm={getCacheForType:function(e){var t=_e(Se),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return _e(Se).controller.signal}},Pm=typeof WeakMap=="function"?WeakMap:Map,W=0,ie=null,j=null,$=0,I=0,lt=null,oa=!1,yl=!1,Tc=!1,Vt=0,me=0,fa=0,Qa=0,Ac=0,nt=0,pl=0,cn=null,Ze=null,Oc=!1,hu=0,nr=0,yu=1/0,pu=null,sa=null,Te=0,ra=null,vl=null,Zt=0,Mc=0,Dc=null,ur=null,on=0,_c=null;function ut(){return(W&2)!==0&&$!==0?$&-$:S.T!==null?Lc():bo()}function ir(){if(nt===0)if(($&536870912)===0||V){var e=On;On<<=1,(On&3932160)===0&&(On=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Ke(e,t,a){(e===ie&&(I===2||I===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),da(e,$,nt,!1)),xl(e,a),((W&2)===0||e!==ie)&&(e===ie&&((W&2)===0&&(Qa|=a),me===4&&da(e,$,nt,!1)),_t(e))}function cr(e,t,a){if((W&6)!==0)throw Error(y(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||_l(e,t),n=l?th(e,t):zc(e,t,!0),u=l;do{if(n===0){yl&&!l&&da(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Im(a)){n=zc(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var c=e;n=cn;var o=c.current.memoizedState.isDehydrated;if(o&&(Sl(c,i).flags|=256),i=zc(c,i,!1),i!==2){if(Tc&&!o){c.errorRecoveryDisabledLanes|=u,Qa|=u,n=4;break e}u=Ze,Ze=n,u!==null&&(Ze===null?Ze=u:Ze.push.apply(Ze,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Sl(e,0),da(e,t,0,!0);break}e:{switch(l=e,u=n,u){case 0:case 1:throw Error(y(345));case 4:if((t&4194048)!==t)break;case 6:da(l,t,nt,!oa);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(y(329))}if((t&62914560)===t&&(n=hu+300-ke(),10<n)){if(da(l,t,nt,!oa),Dn(l,0,!0)!==0)break e;Zt=t,l.timeoutHandle=Br(or.bind(null,l,a,Ze,pu,Oc,t,nt,Qa,pl,oa,u,"Throttled",-0,0),n);break e}or(l,a,Ze,pu,Oc,t,nt,Qa,pl,oa,u,null,-0,0)}}break}while(!0);_t(e)}function or(e,t,a,l,n,u,i,c,o,m,v,b,h,p){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},er(t,u,b);var M=(u&62914560)===u?hu-ke():(u&4194048)===u?nr-ke():0;if(M=wh(b,M),M!==null){Zt=u,e.cancelPendingCommit=M(pr.bind(null,e,t,u,a,l,n,i,c,o,v,b,null,h,p)),da(e,u,i,!m);return}}pr(e,t,u,a,l,n,i,c,o)}function Im(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],u=n.getSnapshot;n=n.value;try{if(!Ie(u(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,a,l){t&=~Ac,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var u=31-Pe(n),i=1<<u;l[u]=-1,n&=~i}a!==0&&vo(e,a,t)}function vu(){return(W&6)===0?(fn(0),!1):!0}function xc(){if(j!==null){if(I===0)var e=j.return;else e=j,Nt=Ca=null,Xi(e),ol=null,Xl=0,e=j;for(;e!==null;)Qs(e.alternate,e),e=e.return;j=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zt=0,xc(),ie=e,j=a=Lt(e.current,null),$=t,I=0,lt=null,oa=!1,yl=_l(e,t),Tc=!1,pl=nt=Ac=Qa=fa=me=0,Ze=cn=null,Oc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Pe(l),u=1<<n;t|=e[n],l&=~u}return Vt=t,Bn(),a}function fr(e,t){w=null,S.H=Pl,t===cl||t===Zn?(t=Mf(),I=3):t===Ui?(t=Mf(),I=4):I=t===ic?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,j===null&&(me=1,iu(e,st(t,e.current)))}function sr(){var e=tt.current;return e===null?!0:($&4194048)===$?ht===null:($&62914560)===$||($&536870912)!==0?e===ht:!1}function rr(){var e=S.H;return S.H=Pl,e===null?Pl:e}function dr(){var e=S.A;return S.A=Fm,e}function Su(){me=4,oa||($&4194048)!==$&&tt.current!==null||(yl=!0),(fa&134217727)===0&&(Qa&134217727)===0||ie===null||da(ie,$,nt,!1)}function zc(e,t,a){var l=W;W|=2;var n=rr(),u=dr();(ie!==e||$!==t)&&(pu=null,Sl(e,t)),t=!1;var i=me;e:do try{if(I!==0&&j!==null){var c=j,o=lt;switch(I){case 8:xc(),i=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=I;if(I=0,lt=null,gl(e,c,o,m),a&&yl){i=0;break e}break;default:m=I,I=0,lt=null,gl(e,c,o,m)}}eh(),i=me;break}catch(v){fr(e,v)}while(!0);return t&&e.shellSuspendCounter++,Nt=Ca=null,W=l,S.H=n,S.A=u,j===null&&(ie=null,$=0,Bn()),i}function eh(){for(;j!==null;)mr(j)}function th(e,t){var a=W;W|=2;var l=rr(),n=dr();ie!==e||$!==t?(pu=null,yu=ke()+500,Sl(e,t)):yl=_l(e,t);e:do try{if(I!==0&&j!==null){t=j;var u=lt;t:switch(I){case 1:I=0,lt=null,gl(e,t,u,1);break;case 2:case 9:if(Af(u)){I=0,lt=null,hr(t);break}t=function(){I!==2&&I!==9||ie!==e||(I=7),_t(e)},u.then(t,t);break e;case 3:I=7;break e;case 4:I=5;break e;case 7:Af(u)?(I=0,lt=null,hr(t)):(I=0,lt=null,gl(e,t,u,7));break;case 5:var i=null;switch(j.tag){case 26:i=j.memoizedState;case 5:case 27:var c=j;if(i?Ir(i):c.stateNode.complete){I=0,lt=null;var o=c.sibling;if(o!==null)j=o;else{var m=c.return;m!==null?(j=m,gu(m)):j=null}break t}}I=0,lt=null,gl(e,t,u,5);break;case 6:I=0,lt=null,gl(e,t,u,6);break;case 8:xc(),me=6;break e;default:throw Error(y(462))}}ah();break}catch(v){fr(e,v)}while(!0);return Nt=Ca=null,S.H=l,S.A=n,W=a,j!==null?0:(ie=null,$=0,Bn(),me)}function ah(){for(;j!==null&&!Md();)mr(j)}function mr(e){var t=ws(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?gu(e):j=t}function hr(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Rs(a,t,t.pendingProps,t.type,void 0,$);break;case 11:t=Rs(a,t,t.pendingProps,t.type.render,t.ref,$);break;case 5:Xi(t);default:Qs(a,t),t=j=df(t,Vt),t=ws(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?gu(e):j=t}function gl(e,t,a,l){Nt=Ca=null,Xi(t),ol=null,Xl=0;var n=t.return;try{if(Xm(e,n,t,a,$)){me=1,iu(e,st(a,e.current)),j=null;return}}catch(u){if(n!==null)throw j=n,u;me=1,iu(e,st(a,e.current)),j=null;return}t.flags&32768?(V||l===1?e=!0:yl||($&536870912)!==0?e=!1:(oa=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),yr(t,e)):gu(t)}function gu(e){var t=e;do{if((t.flags&32768)!==0){yr(t,oa);return}e=t.return;var a=Km(t.alternate,t,Vt);if(a!==null){j=a;return}if(t=t.sibling,t!==null){j=t;return}j=t=e}while(t!==null);me===0&&(me=5)}function yr(e,t){do{var a=Jm(e.alternate,e);if(a!==null){a.flags&=32767,j=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){j=e;return}j=e=a}while(e!==null);me=6,j=null}function pr(e,t,a,l,n,u,i,c,o){e.cancelPendingCommit=null;do bu();while(Te!==0);if((W&6)!==0)throw Error(y(327));if(t!==null){if(t===e.current)throw Error(y(177));if(u=t.lanes|t.childLanes,u|=vi,Nd(e,a,u,i,c,o),e===ie&&(j=ie=null,$=0),vl=t,ra=e,Zt=a,Mc=u,Dc=n,ur=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ih(Tn,function(){return Er(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=S.T,S.T=null,n=A.p,A.p=2,i=W,W|=4;try{Wm(e,t,a)}finally{W=i,A.p=n,S.T=l}}Te=1,vr(),Sr(),gr()}}function vr(){if(Te===1){Te=0;var e=ra,t=vl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var l=A.p;A.p=2;var n=W;W|=4;try{Fs(t,e);var u=Yc,i=af(e.containerInfo),c=u.focusedElem,o=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&tf(c.ownerDocument.documentElement,c)){if(o!==null&&di(c)){var m=o.start,v=o.end;if(v===void 0&&(v=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(v,c.value.length);else{var b=c.ownerDocument||document,h=b&&b.defaultView||window;if(h.getSelection){var p=h.getSelection(),M=c.textContent.length,R=Math.min(o.start,M),ne=o.end===void 0?R:Math.min(o.end,M);!p.extend&&R>ne&&(i=ne,ne=R,R=i);var r=ef(c,R),f=ef(c,ne);if(r&&f&&(p.rangeCount!==1||p.anchorNode!==r.node||p.anchorOffset!==r.offset||p.focusNode!==f.node||p.focusOffset!==f.offset)){var d=b.createRange();d.setStart(r.node,r.offset),p.removeAllRanges(),R>ne?(p.addRange(d),p.extend(f.node,f.offset)):(d.setEnd(f.node,f.offset),p.addRange(d))}}}}for(b=[],p=c;p=p.parentNode;)p.nodeType===1&&b.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var g=b[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Uu=!!jc,Yc=jc=null}finally{W=n,A.p=l,S.T=a}}e.current=t,Te=2}}function Sr(){if(Te===2){Te=0;var e=ra,t=vl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var l=A.p;A.p=2;var n=W;W|=4;try{Zs(e,t.alternate,t)}finally{W=n,A.p=l,S.T=a}}Te=3}}function gr(){if(Te===4||Te===3){Te=0,Dd();var e=ra,t=vl,a=Zt,l=ur;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,vl=ra=null,br(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(sa=null),Ku(a),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=S.T,n=A.p,A.p=2,S.T=null;try{for(var u=e.onRecoverableError,i=0;i<l.length;i++){var c=l[i];u(c.value,{componentStack:c.stack})}}finally{S.T=t,A.p=n}}(Zt&3)!==0&&bu(),_t(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===_c?on++:(on=0,_c=e):on=0,fn(0)}}function br(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$l(t)))}function bu(){return vr(),Sr(),gr(),Er()}function Er(){if(Te!==5)return!1;var e=ra,t=Mc;Mc=0;var a=Ku(Zt),l=S.T,n=A.p;try{A.p=32>a?32:a,S.T=null,a=Dc,Dc=null;var u=ra,i=Zt;if(Te=0,vl=ra=null,Zt=0,(W&6)!==0)throw Error(y(331));var c=W;if(W|=4,ar(u.current),Is(u,u.current,i,a),W=c,fn(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Dl,u)}catch{}return!0}finally{A.p=n,S.T=l,br(e,t)}}function Tr(e,t,a){t=st(a,t),t=uc(e.stateNode,t,2),e=na(e,t,2),e!==null&&(xl(e,2),_t(e))}function ee(e,t,a){if(e.tag===3)Tr(e,e,a);else for(;t!==null;){if(t.tag===3){Tr(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(sa===null||!sa.has(l))){e=st(a,e),a=As(2),l=na(t,a,2),l!==null&&(Os(a,l,t,e),xl(l,2),_t(l));break}}t=t.return}}function Cc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Pm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Tc=!0,n.add(a),e=lh.bind(null,e,t,a),t.then(e,e))}function lh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ie===e&&($&a)===a&&(me===4||me===3&&($&62914560)===$&&300>ke()-hu?(W&2)===0&&Sl(e,0):Ac|=a,pl===$&&(pl=0)),_t(e)}function Ar(e,t){t===0&&(t=po()),e=_a(e,t),e!==null&&(xl(e,t),_t(e))}function nh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ar(e,a)}function uh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(y(314))}l!==null&&l.delete(t),Ar(e,a)}function ih(e,t){return Gu(e,t)}var Eu=null,bl=null,Rc=!1,Tu=!1,Uc=!1,ma=0;function _t(e){e!==bl&&e.next===null&&(bl===null?Eu=bl=e:bl=bl.next=e),Tu=!0,Rc||(Rc=!0,oh())}function fn(e,t){if(!Uc&&Tu){Uc=!0;do for(var a=!1,l=Eu;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var u=0;else{var i=l.suspendedLanes,c=l.pingedLanes;u=(1<<31-Pe(42|e)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,_r(l,u))}else u=$,u=Dn(l,l===ie?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||_l(l,u)||(a=!0,_r(l,u));l=l.next}while(a);Uc=!1}}function ch(){Or()}function Or(){Tu=Rc=!1;var e=0;ma!==0&&Sh()&&(e=ma);for(var t=ke(),a=null,l=Eu;l!==null;){var n=l.next,u=Mr(l,t);u===0?(l.next=null,a===null?Eu=n:a.next=n,n===null&&(bl=a)):(a=l,(e!==0||(u&3)!==0)&&(Tu=!0)),l=n}Te!==0&&Te!==5||fn(e),ma!==0&&(ma=0)}function Mr(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-Pe(u),c=1<<i,o=n[i];o===-1?((c&a)===0||(c&l)!==0)&&(n[i]=Hd(c,t)):o<=t&&(e.expiredLanes|=c),u&=~c}if(t=ie,a=$,a=Dn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(I===2||I===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Xu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||_l(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Xu(l),Ku(a)){case 2:case 8:a=ho;break;case 32:a=Tn;break;case 268435456:a=yo;break;default:a=Tn}return l=Dr.bind(null,e),a=Gu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Xu(l),e.callbackPriority=2,e.callbackNode=null,2}function Dr(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bu()&&e.callbackNode!==a)return null;var l=$;return l=Dn(e,e===ie?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(cr(e,l,t),Mr(e,ke()),e.callbackNode!=null&&e.callbackNode===a?Dr.bind(null,e):null)}function _r(e,t){if(bu())return null;cr(e,t,!0)}function oh(){bh(function(){(W&6)!==0?Gu(mo,ch):Or()})}function Lc(){if(ma===0){var e=ul;e===0&&(e=An,An<<=1,(An&261888)===0&&(An=256)),ma=e}return ma}function xr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cn(""+e)}function zr(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function fh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var u=xr((n[Ye]||null).action),i=l.submitter;i&&(t=(t=i[Ye]||null)?xr(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new Hn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ma!==0){var o=i?zr(n,i):new FormData(n);Ii(a,{pending:!0,data:o,method:n.method,action:u},null,o)}}else typeof u=="function"&&(c.preventDefault(),o=i?zr(n,i):new FormData(n),Ii(a,{pending:!0,data:o,method:n.method,action:u},u,o))},currentTarget:n}]})}}for(var Hc=0;Hc<pi.length;Hc++){var Nc=pi[Hc],sh=Nc.toLowerCase(),rh=Nc[0].toUpperCase()+Nc.slice(1);St(sh,"on"+rh)}St(uf,"onAnimationEnd"),St(cf,"onAnimationIteration"),St(of,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(_m,"onTransitionRun"),St(xm,"onTransitionStart"),St(zm,"onTransitionCancel"),St(ff,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sn));function Cr(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var i=l.length-1;0<=i;i--){var c=l[i],o=c.instance,m=c.currentTarget;if(c=c.listener,o!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(v){wn(v)}n.currentTarget=null,u=o}else for(i=0;i<l.length;i++){if(c=l[i],o=c.instance,m=c.currentTarget,c=c.listener,o!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(v){wn(v)}n.currentTarget=null,u=o}}}}function Y(e,t){var a=t[Ju];a===void 0&&(a=t[Ju]=new Set);var l=e+"__bubble";a.has(l)||(Rr(t,e,2,!1),a.add(l))}function qc(e,t,a){var l=0;t&&(l|=4),Rr(a,e,l,t)}var Au="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[Au]){e[Au]=!0,Ao.forEach(function(a){a!=="selectionchange"&&(dh.has(a)||qc(a,!1,e),qc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Au]||(t[Au]=!0,qc("selectionchange",!1,t))}}function Rr(e,t,a,l){switch(id(t)){case 2:var n=jh;break;case 8:n=Yh;break;default:n=Pc}a=n.bind(null,t,a,e),n=void 0,!li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Bc(e,t,a,l,n){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var c=l.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=l.return;i!==null;){var o=i.tag;if((o===3||o===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=$a(c),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){l=u=i;continue e}c=c.parentNode}}l=l.return}No(function(){var m=u,v=ti(a),b=[];e:{var h=sf.get(e);if(h!==void 0){var p=Hn,M=e;switch(e){case"keypress":if(Un(a)===0)break e;case"keydown":case"keyup":p=um;break;case"focusin":M="focus",p=ci;break;case"focusout":M="blur",p=ci;break;case"beforeblur":case"afterblur":p=ci;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=om;break;case uf:case cf:case of:p=kd;break;case ff:p=sm;break;case"scroll":case"scrollend":p=Vd;break;case"wheel":p=dm;break;case"copy":case"cut":case"paste":p=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jo;break;case"toggle":case"beforetoggle":p=hm}var R=(t&4)!==0,ne=!R&&(e==="scroll"||e==="scrollend"),r=R?h!==null?h+"Capture":null:h;R=[];for(var f=m,d;f!==null;){var g=f;if(d=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||d===null||r===null||(g=Rl(f,r),g!=null&&R.push(rn(f,g,d))),ne)break;f=f.return}0<R.length&&(h=new p(h,M,null,a,v),b.push({event:h,listeners:R}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&a!==ei&&(M=a.relatedTarget||a.fromElement)&&($a(M)||M[Ya]))break e;if((p||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,p?(M=a.relatedTarget||a.toElement,p=m,M=M?$a(M):null,M!==null&&(ne=J(M),R=M.tag,M!==ne||R!==5&&R!==27&&R!==6)&&(M=null)):(p=null,M=m),p!==M)){if(R=Bo,g="onMouseLeave",r="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(R=jo,g="onPointerLeave",r="onPointerEnter",f="pointer"),ne=p==null?h:Cl(p),d=M==null?h:Cl(M),h=new R(g,f+"leave",p,a,v),h.target=ne,h.relatedTarget=d,g=null,$a(v)===m&&(R=new R(r,f+"enter",M,a,v),R.target=d,R.relatedTarget=ne,g=R),ne=g,p&&M)t:{for(R=mh,r=p,f=M,d=0,g=r;g;g=R(g))d++;g=0;for(var z=f;z;z=R(z))g++;for(;0<d-g;)r=R(r),d--;for(;0<g-d;)f=R(f),g--;for(;d--;){if(r===f||f!==null&&r===f.alternate){R=r;break t}r=R(r),f=R(f)}R=null}else R=null;p!==null&&Ur(b,h,p,R,!1),M!==null&&ne!==null&&Ur(b,ne,M,R,!0)}}e:{if(h=m?Cl(m):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var Z=Jo;else if(Zo(h))if(Wo)Z=Om;else{Z=Tm;var x=Em}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&Iu(m.elementType)&&(Z=Jo):Z=Am;if(Z&&(Z=Z(e,m))){Ko(b,Z,a,v);break e}x&&x(e,h,m),e==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&Pu(h,"number",h.value)}switch(x=m?Cl(m):window,e){case"focusin":(Zo(x)||x.contentEditable==="true")&&(Fa=x,mi=m,Ql=null);break;case"focusout":Ql=mi=Fa=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,lf(b,a,v);break;case"selectionchange":if(Dm)break;case"keydown":case"keyup":lf(b,a,v)}var B;if(fi)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else ka?Xo(e,a)&&(G="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(G="onCompositionStart");G&&(Yo&&a.locale!=="ko"&&(ka||G!=="onCompositionStart"?G==="onCompositionEnd"&&ka&&(B=qo()):(Ft=v,ni="value"in Ft?Ft.value:Ft.textContent,ka=!0)),x=Ou(m,G),0<x.length&&(G=new Qo(G,e,null,a,v),b.push({event:G,listeners:x}),B?G.data=B:(B=Vo(a),B!==null&&(G.data=B)))),(B=pm?vm(e,a):Sm(e,a))&&(G=Ou(m,"onBeforeInput"),0<G.length&&(x=new Qo("onBeforeInput","beforeinput",null,a,v),b.push({event:x,listeners:G}),x.data=B)),fh(b,e,m,a,v)}Cr(b,t)})}function rn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ou(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Rl(e,a),n!=null&&l.unshift(rn(e,n,u)),n=Rl(e,t),n!=null&&l.push(rn(e,n,u))),e.tag===3)return l;e=e.return}return[]}function mh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ur(e,t,a,l,n){for(var u=t._reactName,i=[];a!==null&&a!==l;){var c=a,o=c.alternate,m=c.stateNode;if(c=c.tag,o!==null&&o===l)break;c!==5&&c!==26&&c!==27||m===null||(o=m,n?(m=Rl(a,u),m!=null&&i.unshift(rn(a,m,o))):n||(m=Rl(a,u),m!=null&&i.push(rn(a,m,o)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var hh=/\r\n?/g,yh=/\u0000|\uFFFD/g;function Lr(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(yh,"")}function Hr(e,t){return t=Lr(t),Lr(e)===t}function le(e,t,a,l,n,u){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ka(e,""+l);break;case"className":xn(e,"class",l);break;case"tabIndex":xn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xn(e,a,l);break;case"style":Lo(e,l,u);break;case"data":if(t!=="object"){xn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&le(e,t,"name",n.name,n,null),le(e,t,"formEncType",n.formEncType,n,null),le(e,t,"formMethod",n.formMethod,n,null),le(e,t,"formTarget",n.formTarget,n,null)):(le(e,t,"encType",n.encType,n,null),le(e,t,"method",n.method,n,null),le(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Rt);break;case"onScroll":l!=null&&Y("scroll",e);break;case"onScrollEnd":l!=null&&Y("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(y(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Cn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Y("beforetoggle",e),Y("toggle",e),_n(e,"popover",l);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":_n(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gd.get(a)||a,_n(e,a,l))}}function Qc(e,t,a,l,n,u){switch(a){case"style":Lo(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(y(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&Ka(e,""+l);break;case"onScroll":l!=null&&Y("scroll",e);break;case"onScrollEnd":l!=null&&Y("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),u=e[Ye]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof l=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):_n(e,a,l)}}}function ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",e),Y("load",e);var l=!1,n=!1,u;for(u in a)if(a.hasOwnProperty(u)){var i=a[u];if(i!=null)switch(u){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:le(e,t,u,i,a,null)}}n&&le(e,t,"srcSet",a.srcSet,a,null),l&&le(e,t,"src",a.src,a,null);return;case"input":Y("invalid",e);var c=u=i=n=null,o=null,m=null;for(l in a)if(a.hasOwnProperty(l)){var v=a[l];if(v!=null)switch(l){case"name":n=v;break;case"type":i=v;break;case"checked":o=v;break;case"defaultChecked":m=v;break;case"value":u=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(y(137,t));break;default:le(e,t,l,v,a,null)}}zo(e,u,c,o,m,i,n,!1);return;case"select":Y("invalid",e),l=i=u=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":l=c;default:le(e,t,n,c,a,null)}t=u,a=i,e.multiple=!!l,t!=null?Za(e,!!l,t,!1):a!=null&&Za(e,!!l,a,!0);return;case"textarea":Y("invalid",e),u=n=l=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(y(91));break;default:le(e,t,i,c,a,null)}Ro(e,l,n,u);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(l=a[o],l!=null))switch(o){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,t,o,l,a,null)}return;case"dialog":Y("beforetoggle",e),Y("toggle",e),Y("cancel",e),Y("close",e);break;case"iframe":case"object":Y("load",e);break;case"video":case"audio":for(l=0;l<sn.length;l++)Y(sn[l],e);break;case"image":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"embed":case"source":case"link":Y("error",e),Y("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:le(e,t,m,l,a,null)}return;default:if(Iu(t)){for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!==void 0&&Qc(e,t,v,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&le(e,t,c,l,a,null))}function ph(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,o=null,m=null,v=null;for(p in a){var b=a[p];if(a.hasOwnProperty(p)&&b!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=b;default:l.hasOwnProperty(p)||le(e,t,p,null,l,b)}}for(var h in l){var p=l[h];if(b=a[h],l.hasOwnProperty(h)&&(p!=null||b!=null))switch(h){case"type":u=p;break;case"name":n=p;break;case"checked":m=p;break;case"defaultChecked":v=p;break;case"value":i=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(y(137,t));break;default:p!==b&&le(e,t,h,p,l,b)}}Fu(e,i,c,o,m,v,u,n);return;case"select":p=i=c=h=null;for(u in a)if(o=a[u],a.hasOwnProperty(u)&&o!=null)switch(u){case"value":break;case"multiple":p=o;default:l.hasOwnProperty(u)||le(e,t,u,null,l,o)}for(n in l)if(u=l[n],o=a[n],l.hasOwnProperty(n)&&(u!=null||o!=null))switch(n){case"value":h=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==o&&le(e,t,n,u,l,o)}t=c,a=i,l=p,h!=null?Za(e,!!a,h,!1):!!l!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":p=h=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:le(e,t,c,null,l,n)}for(i in l)if(n=l[i],u=a[i],l.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":h=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(y(91));break;default:n!==u&&le(e,t,i,n,l,u)}Co(e,h,p);return;case"option":for(var M in a)if(h=a[M],a.hasOwnProperty(M)&&h!=null&&!l.hasOwnProperty(M))switch(M){case"selected":e.selected=!1;break;default:le(e,t,M,null,l,h)}for(o in l)if(h=l[o],p=a[o],l.hasOwnProperty(o)&&h!==p&&(h!=null||p!=null))switch(o){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:le(e,t,o,h,l,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in a)h=a[R],a.hasOwnProperty(R)&&h!=null&&!l.hasOwnProperty(R)&&le(e,t,R,null,l,h);for(m in l)if(h=l[m],p=a[m],l.hasOwnProperty(m)&&h!==p&&(h!=null||p!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,t));break;default:le(e,t,m,h,l,p)}return;default:if(Iu(t)){for(var ne in a)h=a[ne],a.hasOwnProperty(ne)&&h!==void 0&&!l.hasOwnProperty(ne)&&Qc(e,t,ne,void 0,l,h);for(v in l)h=l[v],p=a[v],!l.hasOwnProperty(v)||h===p||h===void 0&&p===void 0||Qc(e,t,v,h,l,p);return}}for(var r in a)h=a[r],a.hasOwnProperty(r)&&h!=null&&!l.hasOwnProperty(r)&&le(e,t,r,null,l,h);for(b in l)h=l[b],p=a[b],!l.hasOwnProperty(b)||h===p||h==null&&p==null||le(e,t,b,h,l,p)}function Nr(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&Nr(i)){for(i=0,c=n.responseEnd,l+=1;l<a.length;l++){var o=a[l],m=o.startTime;if(m>c)break;var v=o.transferSize,b=o.initiatorType;v&&Nr(b)&&(o=o.responseEnd,i+=v*(o<c?1:(c-m)/(o-m)))}if(--l,t+=8*(u+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jc=null,Yc=null;function Mu(e){return e.nodeType===9?e:e.ownerDocument}function qr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wr(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gc=null;function Sh(){var e=window.event;return e&&e.type==="popstate"?e===Gc?!1:(Gc=e,!0):(Gc=null,!1)}var Br=typeof setTimeout=="function"?setTimeout:void 0,gh=typeof clearTimeout=="function"?clearTimeout:void 0,Qr=typeof Promise=="function"?Promise:void 0,bh=typeof queueMicrotask=="function"?queueMicrotask:typeof Qr<"u"?function(e){return Qr.resolve(null).then(e).catch(Eh)}:Br;function Eh(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function jr(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ol(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")dn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,dn(a);for(var u=a.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[zl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=i}}else a==="body"&&dn(e.ownerDocument.body);a=n}while(a);Ol(t)}function Yr(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xc(a),Wu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Th(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=yt(e.nextSibling),e===null)break}return null}function Ah(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yt(e.nextSibling),e===null))return null;return e}function $r(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=yt(e.nextSibling),e===null))return null;return e}function Vc(e){return e.data==="$?"||e.data==="$~"}function Zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Oh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Kc=null;function Gr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return yt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vr(e,t,a){switch(t=Mu(a),e){case"html":if(e=t.documentElement,!e)throw Error(y(452));return e;case"head":if(e=t.head,!e)throw Error(y(453));return e;case"body":if(e=t.body,!e)throw Error(y(454));return e;default:throw Error(y(451))}}function dn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wu(e)}var pt=new Map,Zr=new Set;function Du(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=A.d;A.d={f:Mh,r:Dh,D:_h,C:xh,L:zh,m:Ch,X:Uh,S:Rh,M:Lh};function Mh(){var e=Kt.f(),t=vu();return e||t}function Dh(e){var t=Ga(e);t!==null&&t.tag===5&&t.type==="form"?fs(t):Kt.r(e)}var El=typeof document>"u"?null:document;function Kr(e,t,a){var l=El;if(l&&typeof t=="string"&&t){var n=ot(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Zr.has(n)||(Zr.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),ze(t,"link",e),Ae(t),l.head.appendChild(t)))}}function _h(e){Kt.D(e),Kr("dns-prefetch",e,null)}function xh(e,t){Kt.C(e,t),Kr("preconnect",e,t)}function zh(e,t,a){Kt.L(e,t,a);var l=El;if(l&&e&&t){var n='link[rel="preload"][as="'+ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ot(a.imageSizes)+'"]')):n+='[href="'+ot(e)+'"]';var u=n;switch(t){case"style":u=Tl(e);break;case"script":u=Al(e)}pt.has(u)||(e=L({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),pt.set(u,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(mn(u))||t==="script"&&l.querySelector(hn(u))||(t=l.createElement("link"),ze(t,"link",e),Ae(t),l.head.appendChild(t)))}}function Ch(e,t){Kt.m(e,t);var a=El;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ot(l)+'"][href="'+ot(e)+'"]',u=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Al(e)}if(!pt.has(u)&&(e=L({rel:"modulepreload",href:e},t),pt.set(u,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hn(u)))return}l=a.createElement("link"),ze(l,"link",e),Ae(l),a.head.appendChild(l)}}}function Rh(e,t,a){Kt.S(e,t,a);var l=El;if(l&&e){var n=Xa(l).hoistableStyles,u=Tl(e);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=l.querySelector(mn(u)))c.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":t},a),(a=pt.get(u))&&Jc(e,a);var o=i=l.createElement("link");Ae(o),ze(o,"link",e),o._p=new Promise(function(m,v){o.onload=m,o.onerror=v}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,_u(i,t,l)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Uh(e,t){Kt.X(e,t);var a=El;if(a&&e){var l=Xa(a).hoistableScripts,n=Al(e),u=l.get(n);u||(u=a.querySelector(hn(n)),u||(e=L({src:e,async:!0},t),(t=pt.get(n))&&Wc(e,t),u=a.createElement("script"),Ae(u),ze(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function Lh(e,t){Kt.M(e,t);var a=El;if(a&&e){var l=Xa(a).hoistableScripts,n=Al(e),u=l.get(n);u||(u=a.querySelector(hn(n)),u||(e=L({src:e,async:!0,type:"module"},t),(t=pt.get(n))&&Wc(e,t),u=a.createElement("script"),Ae(u),ze(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function Jr(e,t,a,l){var n=(n=Q.current)?Du(n):null;if(!n)throw Error(y(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Xa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var u=Xa(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(mn(e)))&&!u._p&&(i.instance=u,i.state.loading=5),pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pt.set(e,a),u||Hh(n,e,a,i.state))),t&&l===null)throw Error(y(528,""));return i}if(t&&l!==null)throw Error(y(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Al(a),a=Xa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,e))}}function Tl(e){return'href="'+ot(e)+'"'}function mn(e){return'link[rel="stylesheet"]['+e+"]"}function Wr(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function Hh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ze(t,"link",a),Ae(t),e.head.appendChild(t))}function Al(e){return'[src="'+ot(e)+'"]'}function hn(e){return"script[async]"+e}function kr(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ot(a.href)+'"]');if(l)return t.instance=l,Ae(l),l;var n=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ae(l),ze(l,"style",n),_u(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var u=e.querySelector(mn(n));if(u)return t.state.loading|=4,t.instance=u,Ae(u),u;l=Wr(a),(n=pt.get(n))&&Jc(l,n),u=(e.ownerDocument||e).createElement("link"),Ae(u);var i=u;return i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),ze(u,"link",l),t.state.loading|=4,_u(u,a.precedence,e),t.instance=u;case"script":return u=Al(a.src),(n=e.querySelector(hn(u)))?(t.instance=n,Ae(n),n):(l=a,(n=pt.get(u))&&(l=L({},a),Wc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ae(n),ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(y(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,_u(l,a.precedence,e));return t.instance}function _u(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,u=n,i=0;i<l.length;i++){var c=l[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xu=null;function Fr(e,t,a){if(xu===null){var l=new Map,n=xu=new Map;n.set(a,l)}else n=xu,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var u=a[n];if(!(u[zl]||u[Me]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var c=l.get(i);c?c.push(u):l.set(i,[u])}}return l}function Pr(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Nh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ir(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Tl(l.href),u=t.querySelector(mn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zu.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Ae(u);return}u=t.ownerDocument||t,l=Wr(l),(n=pt.get(n))&&Jc(l,n),u=u.createElement("link"),Ae(u);var i=u;i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),ze(u,"link",l),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=zu.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var kc=0;function wh(e,t){return e.stylesheets&&e.count===0&&Ru(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ru(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&kc===0&&(kc=62500*vh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ru(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>kc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function zu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cu=null;function Ru(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cu=new Map,t.forEach(Bh,e),Cu=null,zu.call(e))}function Bh(e,t){if(!(t.state.loading&4)){var a=Cu.get(e);if(a)var l=a.get(null);else{a=new Map,Cu.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),l=i)}l&&a.set(null,l)}n=t.instance,i=n.getAttribute("data-precedence"),u=a.get(i)||l,u===l&&a.set(null,n),a.set(i,n),this.count++,l=zu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var yn={$$typeof:Ce,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Qh(e,t,a,l,n,u,i,c,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.hiddenUpdates=Vu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ed(e,t,a,l,n,u,i,c,o,m,v,b){return e=new Qh(e,t,a,i,o,m,v,b,c),t=1,u===!0&&(t|=24),u=et(3,null,null,t),e.current=u,u.stateNode=e,t=zi(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:a,cache:t},Li(u),e}function td(e){return e?(e=el,e):el}function ad(e,t,a,l,n,u){n=td(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},u=u===void 0?null:u,u!==null&&(l.callback=u),a=na(e,l,t),a!==null&&(Ke(a,e,t),Zl(a,e,t))}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Fc(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function nd(e){if(e.tag===13||e.tag===31){var t=_a(e,67108864);t!==null&&Ke(t,e,67108864),Fc(e,67108864)}}function ud(e){if(e.tag===13||e.tag===31){var t=ut();t=Zu(t);var a=_a(e,t);a!==null&&Ke(a,e,t),Fc(e,t)}}var Uu=!0;function jh(e,t,a,l){var n=S.T;S.T=null;var u=A.p;try{A.p=2,Pc(e,t,a,l)}finally{A.p=u,S.T=n}}function Yh(e,t,a,l){var n=S.T;S.T=null;var u=A.p;try{A.p=8,Pc(e,t,a,l)}finally{A.p=u,S.T=n}}function Pc(e,t,a,l){if(Uu){var n=Ic(l);if(n===null)Bc(e,t,l,Lu,a),cd(e,l);else if(Gh(n,e,t,a,l))l.stopPropagation();else if(cd(e,l),t&4&&-1<$h.indexOf(e)){for(;n!==null;){var u=Ga(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Ta(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var o=1<<31-Pe(i);c.entanglements[1]|=o,i&=~o}_t(u),(W&6)===0&&(yu=ke()+500,fn(0))}}break;case 31:case 13:c=_a(u,2),c!==null&&Ke(c,u,2),vu(),Fc(u,2)}if(u=Ic(l),u===null&&Bc(e,t,l,Lu,a),u===n)break;n=u}n!==null&&l.stopPropagation()}else Bc(e,t,l,null,a)}}function Ic(e){return e=ti(e),eo(e)}var Lu=null;function eo(e){if(Lu=null,e=$a(e),e!==null){var t=J(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=he(t),e!==null)return e;e=null}else if(a===31){if(e=Ue(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Lu=e,null}function id(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_d()){case mo:return 2;case ho:return 8;case Tn:case xd:return 32;case yo:return 268435456;default:return 32}default:return 32}}var to=!1,ya=null,pa=null,va=null,pn=new Map,vn=new Map,Sa=[],$h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(t.pointerId)}}function Sn(e,t,a,l,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Ga(t),t!==null&&nd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Gh(e,t,a,l,n){switch(t){case"focusin":return ya=Sn(ya,e,t,a,l,n),!0;case"dragenter":return pa=Sn(pa,e,t,a,l,n),!0;case"mouseover":return va=Sn(va,e,t,a,l,n),!0;case"pointerover":var u=n.pointerId;return pn.set(u,Sn(pn.get(u)||null,e,t,a,l,n)),!0;case"gotpointercapture":return u=n.pointerId,vn.set(u,Sn(vn.get(u)||null,e,t,a,l,n)),!0}return!1}function od(e){var t=$a(e.target);if(t!==null){var a=J(t);if(a!==null){if(t=a.tag,t===13){if(t=he(a),t!==null){e.blockedOn=t,Eo(e.priority,function(){ud(a)});return}}else if(t===31){if(t=Ue(a),t!==null){e.blockedOn=t,Eo(e.priority,function(){ud(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ic(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ei=l,a.target.dispatchEvent(l),ei=null}else return t=Ga(a),t!==null&&nd(t),e.blockedOn=a,!1;t.shift()}return!0}function fd(e,t,a){Hu(e)&&a.delete(t)}function Xh(){to=!1,ya!==null&&Hu(ya)&&(ya=null),pa!==null&&Hu(pa)&&(pa=null),va!==null&&Hu(va)&&(va=null),pn.forEach(fd),vn.forEach(fd)}function Nu(e,t){e.blockedOn===t&&(e.blockedOn=null,to||(to=!0,D.unstable_scheduleCallback(D.unstable_NormalPriority,Xh)))}var qu=null;function sd(e){qu!==e&&(qu=e,D.unstable_scheduleCallback(D.unstable_NormalPriority,function(){qu===e&&(qu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(eo(l||a)===null)continue;break}var u=Ga(a);u!==null&&(e.splice(t,3),t-=3,Ii(u,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ol(e){function t(o){return Nu(o,e)}ya!==null&&Nu(ya,e),pa!==null&&Nu(pa,e),va!==null&&Nu(va,e),pn.forEach(t),vn.forEach(t);for(var a=0;a<Sa.length;a++){var l=Sa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)od(a),a.blockedOn===null&&Sa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],u=a[l+1],i=n[Ye]||null;if(typeof u=="function")i||sd(a);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Ye]||null)c=i.formAction;else if(eo(n)!==null)continue}else c=i.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),sd(a)}}}function rd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ao(e){this._internalRoot=e}wu.prototype.render=ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));var a=t.current,l=ut();ad(a,l,e,t,null,null)},wu.prototype.unmount=ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ad(e.current,2,null,e,null,null),vu(),t[Ya]=null}};function wu(e){this._internalRoot=e}wu.prototype.unstable_scheduleHydration=function(e){if(e){var t=bo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Sa.length&&t!==0&&t<Sa[a].priority;a++);Sa.splice(a,0,e),a===0&&od(e)}};var dd=re.version;if(dd!=="19.2.0")throw Error(y(527,dd,"19.2.0"));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=T(t),e=e!==null?F(e):null,e=e===null?null:e.stateNode,e};var Vh={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{Dl=Bu.inject(Vh),Fe=Bu}catch{}}return bn.createRoot=function(e,t){if(!U(e))throw Error(y(299));var a=!1,l="",n=gs,u=bs,i=Es;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ed(e,1,!1,null,null,a,l,null,n,u,i,rd),e[Ya]=t.current,wc(e),new ao(t)},bn.hydrateRoot=function(e,t,a){if(!U(e))throw Error(y(299));var l=!1,n="",u=gs,i=bs,c=Es,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),t=ed(e,1,!0,t,a??null,l,n,o,u,i,c,rd),t.context=td(null),a=t.current,l=ut(),l=Zu(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,xl(t,a),_t(t),e[Ya]=t.current,wc(e),new wu(t)},bn.version="19.2.0",bn}var Td;function ty(){if(Td)return uo.exports;Td=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(re){console.error(re)}}return D(),uo.exports=ey(),uo.exports}var ay=ty();function ly(){const[D,re]=Ad.useState(null),k=[{id:1,question:"1. Define Open Source Software and explain its characteristics.",answer:"",codeExample:`
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
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1.1,question:"1. HTML Page Design your Profile page with following details: - Personal Details - Educational Details - Profile Picture - Link of your workspace directory",answer:"",codeExample:`
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
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],y=U=>{re(D===U?null:U)};return qe.jsxs("div",{className:"app-container",children:[qe.jsx("h1",{children:"PHP Interview Questions"}),qe.jsx("div",{className:"questions-container",children:k.map(U=>qe.jsxs("div",{className:"question-item",children:[qe.jsx("button",{className:`question-button ${D===U.id?"active":""}`,onClick:()=>y(U.id),children:U.question}),D===U.id&&qe.jsxs("div",{className:"answer-container",children:[qe.jsxs("div",{className:"answer",children:[qe.jsx("h3",{children:"Answer:"}),qe.jsx("p",{children:U.answer})]}),U.codeExample&&qe.jsxs("div",{className:"code-example",children:[qe.jsx("h3",{children:"Code Example:"}),qe.jsx("pre",{children:qe.jsx("code",{children:U.codeExample})})]})]})]},U.id))})]})}ay.createRoot(document.getElementById("root")).render(qe.jsx(Ad.StrictMode,{children:qe.jsx(ly,{})}));
