var et=Object.create,Me=Object.defineProperty,tt=Object.getPrototypeOf,nt=Object.prototype.hasOwnProperty,rt=Object.getOwnPropertyNames,it=Object.getOwnPropertyDescriptor;var te=Object.assign,at=r=>Me(r,"__esModule",{value:!0});var ot=(r,a)=>()=>(a||(a={exports:{}},r(a.exports,a)),a.exports);var st=(r,a,h)=>{if(a&&typeof a=="object"||typeof a=="function")for(let d of rt(a))!nt.call(r,d)&&d!=="default"&&Me(r,d,{get:()=>a[d],enumerable:!(h=it(a,d))||h.enumerable});return r},ft=r=>st(at(Me(r!=null?et(tt(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var Te=(r,a,h)=>new Promise((d,F)=>{var A=O=>{try{_(h.next(O))}catch(q){F(q)}},k=O=>{try{_(h.throw(O))}catch(q){F(q)}},_=O=>O.done?d(O.value):Promise.resolve(O.value).then(A,k);_((h=h.apply(r,a)).next())});var Be=ot((He,Re)=>{(function(r){"use strict";var a=r.setTimeout,h=r.clearTimeout,d=r.XMLHttpRequest,F=r.XDomainRequest,A=r.ActiveXObject,k=r.EventSource,_=r.document,O=r.Promise,q=r.fetch,ce=r.Response,C=r.TextDecoder,D=r.TextEncoder,J=r.AbortController;if(typeof window!="undefined"&&typeof _!="undefined"&&!("readyState"in _)&&_.body==null&&(_.readyState="loading",window.addEventListener("load",function(e){_.readyState="complete"},!1)),d==null&&A!=null&&(d=function(){return new A("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function n(){}return n.prototype=e,new n}),Date.now||(Date.now=function(){return new Date().getTime()}),J==null){var N=q;q=function(e,n){var i=n.signal;return N(e,{headers:n.headers,credentials:n.credentials,cache:n.cache}).then(function(t){var u=t.body.getReader();return i._reader=u,i._aborted&&i._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return u}}}})},J=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function ne(){this.bitsNeeded=0,this.codePoint=0}ne.prototype.decode=function(e){function n(E,y,l){if(l===1)return E>=128>>y&&E<<y<=2047;if(l===2)return E>=2048>>y&&E<<y<=55295||E>=57344>>y&&E<<y<=65535;if(l===3)return E>=65536>>y&&E<<y<=1114111;throw new Error}function i(E,y){if(E===6*1)return y>>6>15?3:y>31?2:1;if(E===6*2)return y>15?3:2;if(E===6*3)return 3;throw new Error}for(var t=65533,u="",f=this.bitsNeeded,v=this.codePoint,w=0;w<e.length;w+=1){var p=e[w];f!==0&&(p<128||p>191||!n(v<<6|p&63,f-6,i(f,v)))&&(f=0,v=t,u+=String.fromCharCode(v)),f===0?(p>=0&&p<=127?(f=0,v=p):p>=192&&p<=223?(f=6*1,v=p&31):p>=224&&p<=239?(f=6*2,v=p&15):p>=240&&p<=247?(f=6*3,v=p&7):(f=0,v=t),f!==0&&!n(v,f,i(f,v))&&(f=0,v=t)):(f-=6,v=v<<6|p&63),f===0&&(v<=65535?u+=String.fromCharCode(v):(u+=String.fromCharCode(55296+(v-65535-1>>10)),u+=String.fromCharCode(56320+(v-65535-1&1023))))}return this.bitsNeeded=f,this.codePoint=v,u};var De=function(){try{return new C().decode(new D().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(C==null||D==null||!De())&&(C=ne);var L=function(){};function S(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=L,this.onload=L,this.onerror=L,this.onreadystatechange=L,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=L}S.prototype.open=function(e,n){this._abort(!0);var i=this,t=this._xhr,u=1,f=0;this._abort=function(l){i._sendTimeout!==0&&(h(i._sendTimeout),i._sendTimeout=0),(u===1||u===2||u===3)&&(u=4,t.onload=L,t.onerror=L,t.onabort=L,t.onprogress=L,t.onreadystatechange=L,t.abort(),f!==0&&(h(f),f=0),l||(i.readyState=4,i.onabort(null),i.onreadystatechange())),u=0};var v=function(){if(u===1){var l=0,b="",W=void 0;if("contentType"in t)l=200,b="OK",W=t.contentType;else try{l=t.status,b=t.statusText,W=t.getResponseHeader("Content-Type")}catch(ge){l=0,b="",W=void 0}l!==0&&(u=2,i.readyState=2,i.status=l,i.statusText=b,i._contentType=W,i.onreadystatechange())}},w=function(){if(v(),u===2||u===3){u=3;var l="";try{l=t.responseText}catch(b){}i.readyState=3,i.responseText=l,i.onprogress()}},p=function(l,b){if((b==null||b.preventDefault==null)&&(b={preventDefault:L}),w(),u===1||u===2||u===3){if(u=4,f!==0&&(h(f),f=0),i.readyState=4,l==="load")i.onload(b);else if(l==="error")i.onerror(b);else if(l==="abort")i.onabort(b);else throw new TypeError;i.onreadystatechange()}},E=function(l){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&p(t.responseText===""?"error":"load",l):t.readyState===3?"onprogress"in t||w():t.readyState===2&&v())},y=function(){f=a(function(){y()},500),t.readyState===3&&w()};"onload"in t&&(t.onload=function(l){p("load",l)}),"onerror"in t&&(t.onerror=function(l){p("error",l)}),"onabort"in t&&(t.onabort=function(l){p("abort",l)}),"onprogress"in t&&(t.onprogress=w),"onreadystatechange"in t&&(t.onreadystatechange=function(l){E(l)}),("contentType"in t||!("ontimeout"in d.prototype))&&(n+=(n.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,n,!0),"readyState"in t&&(f=a(function(){y()},0))},S.prototype.abort=function(){this._abort(!1)},S.prototype.getResponseHeader=function(e){return this._contentType},S.prototype.setRequestHeader=function(e,n){var i=this._xhr;"setRequestHeader"in i&&i.setRequestHeader(e,n)},S.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},S.prototype.send=function(){if((!("ontimeout"in d.prototype)||!("sendAsBinary"in d.prototype)&&!("mozAnon"in d.prototype))&&_!=null&&_.readyState!=null&&_.readyState!=="complete"){var e=this;e._sendTimeout=a(function(){e._sendTimeout=0,e.send()},4);return}var n=this._xhr;"withCredentials"in n&&(n.withCredentials=this.withCredentials);try{n.send(void 0)}catch(i){throw i}};function ue(e){return e.replace(/[A-Z]/g,function(n){return String.fromCharCode(n.charCodeAt(0)+32)})}function le(e){for(var n=Object.create(null),i=e.split(`\r
`),t=0;t<i.length;t+=1){var u=i[t],f=u.split(": "),v=f.shift(),w=f.join(": ");n[ue(v)]=w}this._map=n}le.prototype.get=function(e){return this._map[ue(e)]},d!=null&&d.HEADERS_RECEIVED==null&&(d.HEADERS_RECEIVED=2);function P(){}P.prototype.open=function(e,n,i,t,u,f,v){e.open("GET",u);var w=0;e.onprogress=function(){var E=e.responseText,y=E.slice(w);w+=y.length,i(y)},e.onerror=function(E){E.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===d.HEADERS_RECEIVED){var E=e.status,y=e.statusText,l=e.getResponseHeader("Content-Type"),b=e.getAllResponseHeaders();n(E,y,l,new le(b))}},e.withCredentials=f;for(var p in v)Object.prototype.hasOwnProperty.call(v,p)&&e.setRequestHeader(p,v[p]);return e.send(),e};function ve(e){this._headers=e}ve.prototype.get=function(e){return this._headers.get(e)};function he(){}he.prototype.open=function(e,n,i,t,u,f,v){var w=null,p=new J,E=p.signal,y=new C;return q(u,{headers:v,credentials:f?"include":"same-origin",signal:E,cache:"no-store"}).then(function(l){return w=l.body.getReader(),n(l.status,l.statusText,l.headers.get("Content-Type"),new ve(l.headers)),new O(function(b,W){var ge=function(){w.read().then(function($){if($.done)b(void 0);else{var j=y.decode($.value,{stream:!0});i(j),ge()}}).catch(function($){W($)})};ge()})}).catch(function(l){if(l.name!=="AbortError")return l}).then(function(l){t(l)}),{abort:function(){w!=null&&w.cancel(),p.abort()}}};function re(){this._listeners=Object.create(null)}function me(e){a(function(){throw e},0)}re.prototype.dispatchEvent=function(e){e.target=this;var n=this._listeners[e.type];if(n!=null)for(var i=n.length,t=0;t<i;t+=1){var u=n[t];try{typeof u.handleEvent=="function"?u.handleEvent(e):u.call(this,e)}catch(f){me(f)}}},re.prototype.addEventListener=function(e,n){e=String(e);var i=this._listeners,t=i[e];t==null&&(t=[],i[e]=t);for(var u=!1,f=0;f<t.length;f+=1)t[f]===n&&(u=!0);u||t.push(n)},re.prototype.removeEventListener=function(e,n){e=String(e);var i=this._listeners,t=i[e];if(t!=null){for(var u=[],f=0;f<t.length;f+=1)t[f]!==n&&u.push(t[f]);u.length===0?delete i[e]:i[e]=u}};function ee(e){this.type=e,this.target=void 0}function we(e,n){ee.call(this,e),this.data=n.data,this.lastEventId=n.lastEventId}we.prototype=Object.create(ee.prototype);function ae(e,n){ee.call(this,e),this.status=n.status,this.statusText=n.statusText,this.headers=n.headers}ae.prototype=Object.create(ee.prototype);function o(e,n){ee.call(this,e),this.error=n.error}o.prototype=Object.create(ee.prototype);var s=-1,c=0,g=1,T=2,R=-1,m=0,V=1,pe=2,Ge=3,Xe=/^text\/event\-stream(;.*)?$/i,qe=1e3,Je=18e6,Ne=function(e,n){var i=e==null?n:parseInt(e,10);return i!==i&&(i=n),xe(i)},xe=function(e){return Math.min(Math.max(e,qe),Je)},oe=function(e,n,i){try{typeof n=="function"&&n.call(e,i)}catch(t){me(t)}};function z(e,n){re.call(this),n=n||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,Ye(this,e,n)}function ze(){return d!=null&&"withCredentials"in d.prototype||F==null?new d:new F}var We=q!=null&&ce!=null&&"body"in ce.prototype;function Ye(e,n,i){n=String(n);var t=Boolean(i.withCredentials),u=i.lastEventIdQueryParameterName||"lastEventId",f=xe(1e3),v=Ne(i.heartbeatTimeout,45e3),w="",p=f,E=!1,y=0,l=i.headers||{},b=i.Transport,W=We&&b==null?void 0:new S(b!=null?new b:ze()),ge=b!=null&&typeof b!="string"?new b:W==null?new he:new P,$=void 0,j=0,X=s,se="",be="",Y="",Se="",U=m,Fe=0,ie=0,Qe=function(x,I,K,G){if(X===c)if(x===200&&K!=null&&Xe.test(K)){X=g,E=Date.now(),p=f,e.readyState=g;var B=new ae("open",{status:x,statusText:I,headers:G});e.dispatchEvent(B),oe(e,e.onopen,B)}else{var M="";x!==200?(I&&(I=I.replace(/\s+/g," ")),M="EventSource's response has a status "+x+" "+I+" that is not 200. Aborting the connection."):M="EventSource's response has a Content-Type specifying an unsupported type: "+(K==null?"-":K.replace(/\s+/g," "))+". Aborting the connection.",_e();var B=new ae("error",{status:x,statusText:I,headers:G});e.dispatchEvent(B),oe(e,e.onerror,B),console.error(M)}},Ze=function(x){if(X===g){for(var I=-1,K=0;K<x.length;K+=1){var G=x.charCodeAt(K);(G===`
`.charCodeAt(0)||G==="\r".charCodeAt(0))&&(I=K)}var B=(I!==-1?Se:"")+x.slice(0,I+1);Se=(I===-1?Se:"")+x.slice(I+1),x!==""&&(E=Date.now(),y+=x.length);for(var M=0;M<B.length;M+=1){var G=B.charCodeAt(M);if(U===R&&G===`
`.charCodeAt(0))U=m;else if(U===R&&(U=m),G==="\r".charCodeAt(0)||G===`
`.charCodeAt(0)){if(U!==m){U===V&&(ie=M+1);var Q=B.slice(Fe,ie-1),Z=B.slice(ie+(ie<M&&B.charCodeAt(ie)===" ".charCodeAt(0)?1:0),M);Q==="data"?(se+=`
`,se+=Z):Q==="id"?be=Z:Q==="event"?Y=Z:Q==="retry"?(f=Ne(Z,f),p=f):Q==="heartbeatTimeout"&&(v=Ne(Z,v),j!==0&&(h(j),j=a(function(){Ee()},v)))}if(U===m){if(se!==""){w=be,Y===""&&(Y="message");var fe=new we(Y,{data:se.slice(1),lastEventId:be});if(e.dispatchEvent(fe),Y==="open"?oe(e,e.onopen,fe):Y==="message"?oe(e,e.onmessage,fe):Y==="error"&&oe(e,e.onerror,fe),X===T)return}se="",Y=""}U=G==="\r".charCodeAt(0)?R:m}else U===m&&(Fe=M,U=V),U===V?G===":".charCodeAt(0)&&(ie=M+1,U=pe):U===pe&&(U=Ge)}}},Le=function(x){if(X===g||X===c)X=s,j!==0&&(h(j),j=0),j=a(function(){Ee()},p),p=xe(Math.min(f*16,p*2)),e.readyState=c;else if(X===T&&x!=null){console.error(x);var I=new o("error",{error:x});e.dispatchEvent(I),oe(e,e.onerror,I)}},_e=function(){X=T,$!=null&&($.abort(),$=void 0),j!==0&&(h(j),j=0),e.readyState=T},Ee=function(){if(j=0,X!==s){if(!E&&$!=null)Le(new Error("No activity within "+v+" milliseconds. "+(X===c?"No response received.":y+" chars received.")+" Reconnecting.")),$!=null&&($.abort(),$=void 0);else{var x=Math.max((E||Date.now())+v-Date.now(),1);E=!1,j=a(function(){Ee()},x)}return}E=!1,y=0,j=a(function(){Ee()},v),X=c,se="",Y="",be=w,Se="",Fe=0,ie=0,U=m;var I=n;if(n.slice(0,5)!=="data:"&&n.slice(0,5)!=="blob:"&&w!==""){var K=n.indexOf("?");I=K===-1?n:n.slice(0,K+1)+n.slice(K+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(Z,fe){return fe===u?"":Z}),I+=(n.indexOf("?")===-1?"?":"&")+u+"="+encodeURIComponent(w)}var G=e.withCredentials,B={};B.Accept="text/event-stream";var M=e.headers;if(M!=null)for(var Q in M)Object.prototype.hasOwnProperty.call(M,Q)&&(B[Q]=M[Q]);try{$=ge.open(W,Qe,Ze,Le,I,G,B)}catch(Z){throw _e(),Z}};e.url=n,e.readyState=c,e.withCredentials=t,e.headers=l,e._close=_e,Ee()}z.prototype=Object.create(re.prototype),z.prototype.CONNECTING=c,z.prototype.OPEN=g,z.prototype.CLOSED=T,z.prototype.close=function(){this._close()},z.CONNECTING=c,z.OPEN=g,z.CLOSED=T,z.prototype.withCredentials=void 0;var ke=k;d!=null&&(k==null||!("withCredentials"in k.prototype))&&(ke=z),function(e){if(typeof Re=="object"&&typeof Re.exports=="object"){var n=e(He);n!==void 0&&(Re.exports=n)}else typeof define=="function"&&define.amd?define(["exports"],e):e(r)}(function(e){e.EventSourcePolyfill=z,e.NativeEventSource=k,e.EventSource=ke})})(typeof globalThis=="undefined"?typeof window!="undefined"?window:typeof self!="undefined"?self:He:globalThis)});function Ve(r){this.message=r}Ve.prototype=new Error,Ve.prototype.name="InvalidCharacterError";var Pe=typeof window!="undefined"&&window.atob&&window.atob.bind(window)||function(r){var a=String(r).replace(/=+$/,"");if(a.length%4==1)throw new Ve("'atob' failed: The string to be decoded is not correctly encoded.");for(var h,d,F=0,A=0,k="";d=a.charAt(A++);~d&&(h=F%4?64*h+d:d,F++%4)?k+=String.fromCharCode(255&h>>(-2*F&6)):0)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d);return k};function dt(r){var a=r.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:a+="==";break;case 3:a+="=";break;default:throw"Illegal base64url string!"}try{return function(h){return decodeURIComponent(Pe(h).replace(/(.)/g,function(d,F){var A=F.charCodeAt(0).toString(16).toUpperCase();return A.length<2&&(A="0"+A),"%"+A}))}(a)}catch(h){return Pe(a)}}function Ce(r){this.message=r}function ct(r,a){if(typeof r!="string")throw new Ce("Invalid token specified");var h=(a=a||{}).header===!0?0:1;try{return JSON.parse(dt(r.split(".")[h]))}catch(d){throw new Ce("Invalid token specified: "+d.message)}}Ce.prototype=new Error,Ce.prototype.name="InvalidTokenError";var je=ct;function Ue(r){return{all:r=r||new Map,on:function(a,h){var d=r.get(a);d&&d.push(h)||r.set(a,[h])},off:function(a,h){var d=r.get(a);d&&d.splice(d.indexOf(h)>>>0,1)},emit:function(a,h){(r.get(a)||[]).slice().map(function(d){d(h)}),(r.get("*")||[]).slice().map(function(d){d(a,h)})}}}var Ke=ft(Be());var H;(function(r){r.READY="ready",r.CONNECTED="connected",r.DISCONNECTED="disconnected",r.CHANGED="changed",r.ERROR="error"})(H||(H={}));var $e={debug:!1,baseUrl:"https://config.ff.harness.io/api/1.0",eventUrl:"https://events.ff.harness.io/api/1.0",streamEnabled:!0,allAttributesPrivate:!1,privateAttributeNames:[]},de=(r,...a)=>console.error(`[FF-SDK] ${r}`,...a),Ie=30*1e3;var ut="1.4.8",lt=500,Ae=globalThis.fetch,vt=Ke.EventSourcePolyfill,ye=!!globalThis.Proxy,Oe=r=>{let{value:a}=r;try{switch(r.kind.toLowerCase()){case"int":case"number":a=Number(a);break;case"boolean":a=a.toString().toLowerCase()==="true";break;case"json":a=JSON.parse(a);break}}catch(h){de(h)}return a},ht=(r,a,h)=>{let d,F,A,k,_,O=!0,q=()=>{O=!1},ce=()=>{O=!0},C=[],D=Ue(),J=te(te({},$e),h),N=(o,...s)=>{J.debug&&console.debug(`[FF-SDK] ${o}`,...s)},ne=o=>{if(O){let s=Date.now();s-o.lastAccessed>lt&&(o.count++,o.lastAccessed=s)}};globalThis.onbeforeunload=()=>{C.length&&globalThis.localStorage&&(q(),globalThis.localStorage.HARNESS_FF_METRICS=JSON.stringify(C),ce())};let De=(o,s)=>Te(void 0,null,function*(){return(yield(yield Ae(`${s.baseUrl}/client/auth`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:o,target:a})})).json()).authToken}),L=()=>{if(C.length){N("Sending metrics...",{metrics:C,evaluations:S});let o={metricsData:C.map(s=>({timestamp:Date.now(),count:s.count,metricsType:"FFMETRICS",attributes:[{key:"featureIdentifier",value:s.featureIdentifier},{key:"featureName",value:s.featureIdentifier},{key:"variationIdentifier",value:s.variationIdentifier},{key:"target",value:a.identifier},{key:"SDK_NAME",value:"JavaScript"},{key:"SDK_LANGUAGE",value:"JavaScript"},{key:"SDK_TYPE",value:"client"},{key:"SDK_VERSION",value:ut}]}))};Ae(`${J.eventUrl}/metrics/${d}?cluster=${F}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`},body:JSON.stringify(o)}).then(()=>{C=[]}).catch(s=>{N(s)}).finally(()=>{_=window.setTimeout(L,Ie)})}else _=window.setTimeout(L,Ie)},S={},ue=o=>{N("Sending event for",o.flag),ye?D.emit(H.CHANGED,new Proxy(o,{get(s,c){var g;if(s.hasOwnProperty(c)&&c==="value"){let T=s.flag,R=o.value,m=C.find(V=>V.featureIdentifier===T&&V.featureValue===R);m?(ne(m),m.variationIdentifier=((g=S[T])==null?void 0:g.identifier)||""):C.push({featureIdentifier:T,featureValue:String(R),variationIdentifier:S[T].identifier||"",count:O?1:0,lastAccessed:Date.now()}),N("Metrics event: Flag",c,"has been read with value via stream update",R)}return c==="value"?Oe(o):o[c]}})):D.emit(H.CHANGED,{deleted:o.deleted,flag:o.flag,value:Oe(o)})},le=function(){return ye?new Proxy({},{get(o,s){var g,T,R;let c=o[s];if(o.hasOwnProperty(s)){let m=o[s],V=C.find(pe=>pe.featureIdentifier===s&&m===pe.featureValue);V?(V.variationIdentifier=((g=S[s])==null?void 0:g.identifier)||"",ne(V)):C.push({featureIdentifier:s,featureValue:m,variationIdentifier:((T=S[s])==null?void 0:T.identifier)||"",count:O?1:0,lastAccessed:Date.now()}),N("Metrics event: Flag:",s,"has been read with value:",m,"variationIdentifier:",(R=S[s])==null?void 0:R.identifier)}return c}}):{}},P=le();De(r,J).then(o=>{k=o;let s=je(o);if(N("Authenticated",s),globalThis.localStorage&&globalThis.localStorage.HARNESS_FF_METRICS)try{delete globalThis.localStorage.HARNESS_FF_METRICS,N("Picking up metrics from previous session")}catch(c){}_=window.setTimeout(L,Ie),d=s.environment,F=s.clusterIdentifier,ve().then(()=>{N("Fetch all flags ok",P)}).then(()=>{re()}).then(()=>{N("Event stream ready",{storage:P}),D.emit(H.READY,te({},P)),ye||Object.keys(P).forEach(c=>{var g;C.push({featureIdentifier:c,featureValue:P[c],variationIdentifier:((g=S[c])==null?void 0:g.identifier)||"",count:O?1:0,lastAccessed:Date.now()})})}).catch(c=>{D.emit(H.ERROR,c)})}).catch(o=>{de("Authentication error: ",o),D.emit(H.ERROR,o)});let ve=()=>Te(void 0,null,function*(){try{(yield(yield Ae(`${J.baseUrl}/client/env/${d}/target/${a.identifier}/evaluations?cluster=${F}`,{headers:{Authorization:`Bearer ${k}`}})).json()).forEach(c=>{let g=Oe(c),T=P[c.flag];g!==T&&(N("Flag variation has changed for ",c.identifier),P[c.flag]=g,S[c.flag]=te(te({},c),{value:g}),ue(c))})}catch(o){return de("Features fetch operation error: ",o),D.emit(H.ERROR,o),o}}),he=o=>Te(void 0,null,function*(){var s;try{let c=yield Ae(`${J.baseUrl}/client/env/${d}/target/${a.identifier}/evaluations/${o}?cluster=${F}`,{headers:{Authorization:`Bearer ${k}`}});if(c.ok){let g=yield c.json(),T=Oe(g);if(q(),P[o]=T,S[o]=te(te({},g),{value:T}),ce(),ue(g),!ye){let R=g.flag,m=C.find(V=>V.featureIdentifier===R&&V.featureValue===g.value);m?(ne(m),m.variationIdentifier=((s=S[R])==null?void 0:s.identifier)||""):C.push({featureIdentifier:R,featureValue:String(g.value),variationIdentifier:S[R].identifier||"",count:O?1:0,lastAccessed:Date.now()})}}else D.emit(H.ERROR,c)}catch(c){de("Feature fetch operation error: ",c),D.emit(H.ERROR,c)}}),re=()=>{if(!J.streamEnabled){N("Stream is disabled by configuration. Note: Polling is not yet supported");return}A=new vt(`${J.baseUrl}/stream?cluster=${F}`,{headers:{Authorization:`Bearer ${k}`,"API-Key":r}}),A.onopen=o=>{N("Stream connected",o),D.emit(H.CONNECTED)},A.onclose=o=>{N("Stream disconnected"),D.emit(H.DISCONNECTED)},A.onerror=o=>{de("Stream has issue",o),D.emit(H.ERROR,o)},A.addEventListener("*",o=>{let s=JSON.parse(o.data);switch(N("Received event from stream: ",s),s.event){case"create":setTimeout(()=>he(s.identifier),1e3);break;case"patch":s.domain==="target-segment"?ve():he(s.identifier);break;case"delete":delete P[s.identifier],D.emit(H.CHANGED,{flag:s.identifier,value:void 0,deleted:!0}),N("Evaluation deleted",{message:s,storage:P});break}})},me=(o,s)=>D.on(o,s),ee=(o,s)=>{o?D.off(o,s):ae()},we=(o,s)=>{var g;let c=P[o];if(!ye&&c!==void 0){let T=c,R=o,m=C.find(V=>V.featureIdentifier===R&&V.featureValue===T);m?(ne(m),m.variationIdentifier=((g=S[R])==null?void 0:g.identifier)||""):C.push({featureIdentifier:R,featureValue:T,count:O?1:0,variationIdentifier:S[R].identifier||"",lastAccessed:Date.now()})}return c!==void 0?c:s},ae=()=>{N("Closing event stream"),P=le(),S={},clearTimeout(_),D.all.clear(),A.close()};return{on:me,off:ee,variation:we,close:ae}};export{H as Event,ht as initialize};
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
//# sourceMappingURL=sdk.client.js.map
