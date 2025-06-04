(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function b(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(n){if(n.ep)return;n.ep=!0;const t=b(n);fetch(n.href,t)}})();function C(T,j=""){return`
    <div class="min-h-screen bg-gray-100 text-gray-900">
      <!-- Top App Title -->
      <header class="p-4 bg-white shadow-md">
        <h1 class="text-2xl font-bold text-gray-800">StockWise</h1>
      </header>

      <!-- Navigation Bar -->
      ${j==="#/login"||j==="#/register"?"":`
        <nav class="bg-white p-4 shadow-sm flex gap-6 text-sm font-medium text-gray-700 border-b">
          <a href="#/dashboard" class="hover:text-blue-500">📊 Dashboard</a>
          <a href="#/inventory" class="hover:text-blue-500">📦 Inventory</a>
          <a href="#/transaction" class="hover:text-blue-500">🧾 Transactions</a>
          <a href="#/stock-prediction" class="hover:text-blue-500">📈 Stock Prediction</a>
          <a href="#/distribution" class="hover:text-blue-500">🚚 Distribution</a>
          <a href="#/about" class="hover:text-blue-500">ℹ️ About</a>
        </nav>
      `}

      <!-- Main Content -->
      <main class="max-w-6xl mx-auto p-6">
        ${T}
      </main>
    </div>
  `}function z(){const T=document.getElementById("app"),j=`
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl grid grid-cols-1 md:grid-cols-2">
        <!-- Left Section: Form -->
        <div class="p-8 flex flex-col justify-center">
          <h1 class="text-3xl font-bold mb-2">Login</h1>
          <p class="text-sm text-gray-500 mb-6">See your growth and get support!</p>

          <form id="loginForm" class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email*</label>
              <input type="email" id="email" name="email" placeholder="Enter your email"
                     class="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password*</label>
              <input type="password" id="password" name="password" placeholder="Minimum 8 characters"
                     class="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>

            <div class="flex items-center justify-between text-sm text-gray-600">
              <label class="flex items-center gap-2">
                <input type="checkbox" class="form-checkbox" />
                Remember me
              </label>
              <a href="#" class="text-indigo-600 hover:underline">Forgot password?</a>
            </div>

            <button type="submit"
                    class="w-full bg-indigo-900 text-white py-2 rounded-md hover:bg-indigo-800 transition">
              Login
            </button>

            <p class="text-sm text-center text-gray-600 mt-2">
              Not registered yet?
              <a href="#/register" class="text-indigo-600 hover:underline">Create a new account</a>
            </p>
          </form>
        </div>

        <!-- Right Section: Illustration -->
        <div class="hidden md:block bg-gray-50">
          <img src="/login-illustration.png" alt="Login illustration" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  `;T.innerHTML=C(j,"#/login");const b=document.getElementById("loginForm");b.addEventListener("submit",async e=>{e.preventDefault();const n={email:b.email.value.trim(),password:b.password.value.trim()};try{const t=await fetch("http://localhost:3000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),r=await t.json();t.ok?(alert("Login successful!"),location.hash="#/dashboard"):alert(r.error||"Login failed.")}catch(t){console.error(t),alert("Something went wrong.")}})}function F(){const T=document.getElementById("app"),j=`
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
        <!-- Left: Illustration -->
        <div class="hidden md:block bg-gray-50">
          <img src="/login-illustration.png" alt="Register illustration" class="w-full h-full object-cover" />
        </div>

        <!-- Right: Form -->
        <div class="p-8 flex flex-col justify-center">
          <h1 class="text-2xl font-bold mb-2 text-gray-800">Register</h1>
          <p class="text-sm text-gray-600 mb-6">Manage all your inventory efficiently</p>
          <p class="text-xs text-gray-500 mb-4">Let’s get you all set up so you can verify your personal account and begin setting up your work profile.</p>

          <form id="registerForm" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter your name"
                  class="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Minimum 8 characters"
                  class="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"
                  class="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone no.</label>
                <input type="text" id="phone" name="phone" placeholder="Minimum 8 characters"
                  class="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password"
                class="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div class="flex items-center gap-2 text-sm">
              <input type="checkbox" id="terms" class="form-checkbox" />
              <label for="terms" class="text-gray-600">
                I agree to all terms, <a href="#" class="text-indigo-600 underline">privacy policies, and fees</a>
              </label>
            </div>

            <button type="submit"
              class="w-full bg-indigo-900 text-white py-2 rounded-md hover:bg-indigo-800 transition">
              Sign up
            </button>

            <p class="text-sm text-center text-gray-600 mt-2">
              Already have an account?
              <a href="#/login" class="text-indigo-600 hover:underline">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  `;T.innerHTML=C(j,"#/register");const b=document.getElementById("registerForm");b.addEventListener("submit",async e=>{e.preventDefault();const n={firstName:b.firstName.value.trim(),lastName:b.lastName.value.trim(),email:b.email.value.trim(),phone:b.phone.value.trim(),password:b.password.value.trim()};try{const t=await fetch("http://localhost:3000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),r=await t.json();t.ok?(alert("Registration successful!"),location.hash="#/login"):alert(r.error||"Registration failed.")}catch(t){console.error(t),alert("Something went wrong.")}})}var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Y(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var D={exports:{}};(function(T,j){(function(b,e){T.exports=e()})(U,function(){return function(b){function e(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return b[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=b,e.c=n,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=8)}([function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:t,CONFIRM_BUTTON:t+"--confirm",CANCEL_BUTTON:t+"--cancel",DANGER_BUTTON:t+"--danger",BUTTON_LOADING:t+"--loading",BUTTON_LOADER:t+"__loader"},e.default=e.CLASS_NAMES},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var r="."+t;return document.querySelector(r)},e.stringToNode=function(t){var r=document.createElement("div");return r.innerHTML=t.trim(),r.firstChild},e.insertAfter=function(t,r){var o=r.nextSibling;r.parentNode.insertBefore(t,o)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;var r=Object.getPrototypeOf(t);return r===null||r===Object.prototype},e.ordinalSuffixOf=function(t){var r=t%10,o=t%100;return r===1&&o!==11?t+"st":r===2&&o!==12?t+"nd":r===3&&o!==13?t+"rd":t+"th"}},function(b,e,n){function t(p){for(var f in p)e.hasOwnProperty(f)||(e[f]=p[f])}Object.defineProperty(e,"__esModule",{value:!0}),t(n(25));var r=n(26);e.overlayMarkup=r.default,t(n(27)),t(n(28)),t(n(29));var o=n(0),s=o.default.MODAL_TITLE,i=o.default.MODAL_TEXT,u=o.default.ICON,d=o.default.FOOTER;e.iconMarkup=`
  <div class="`+u+'"></div>',e.titleMarkup=`
  <div class="`+s+`"></div>
`,e.textMarkup=`
  <div class="`+i+'"></div>',e.footerMarkup=`
  <div class="`+d+`"></div>
`},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},o=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),s=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:o,confirm:s};var i=function(f){switch(f){case e.CONFIRM_KEY:return s;case e.CANCEL_KEY:return o;default:var m=f.charAt(0).toUpperCase()+f.slice(1);return Object.assign({},r,{text:m,value:f})}},u=function(f,m){var w=i(f);return m===!0?Object.assign({},w,{visible:!0}):typeof m=="string"?Object.assign({},w,{visible:!0,text:m}):t.isPlainObject(m)?Object.assign({visible:!0},w,m):Object.assign({},w,{visible:!1})},d=function(f){for(var m={},w=0,x=Object.keys(f);w<x.length;w++){var a=x[w],c=f[a],l=u(a,c);m[a]=l}return m.cancel||(m.cancel=o),m},p=function(f){var m={};switch(f.length){case 1:m[e.CANCEL_KEY]=Object.assign({},o,{visible:!1});break;case 2:m[e.CANCEL_KEY]=u(e.CANCEL_KEY,f[0]),m[e.CONFIRM_KEY]=u(e.CONFIRM_KEY,f[1]);break;default:t.throwErr("Invalid number of 'buttons' in array ("+f.length+`).
      If you want more than 2 buttons, you need to use an object!`)}return m};e.getButtonListOpts=function(f){var m=e.defaultButtonList;return typeof f=="string"?m[e.CONFIRM_KEY]=u(e.CONFIRM_KEY,f):Array.isArray(f)?m=p(f):t.isPlainObject(f)?m=d(f):f===!0?m=p([!0,!0]):f===!1?m=p([!1,!1]):f===void 0&&(m=e.defaultButtonList),m}},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(1),r=n(2),o=n(0),s=o.default.MODAL,i=o.default.OVERLAY,u=n(30),d=n(31),p=n(32),f=n(33);e.injectElIntoModal=function(a){var c=t.getNode(s),l=t.stringToNode(a);return c.appendChild(l),l};var m=function(a){a.className=s,a.textContent=""},w=function(a,c){m(a);var l=c.className;l&&a.classList.add(l)};e.initModalContent=function(a){var c=t.getNode(s);w(c,a),u.default(a.icon),d.initTitle(a.title),d.initText(a.text),f.default(a.content),p.default(a.buttons,a.dangerMode)};var x=function(){var a=t.getNode(i),c=t.stringToNode(r.modalMarkup);a.appendChild(c)};e.default=x},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},o=Object.assign({},r);e.resetState=function(){o=Object.assign({},r)},e.setActionValue=function(i){if(typeof i=="string")return s(t.CONFIRM_KEY,i);for(var u in i)s(u,i[u])};var s=function(i,u){o.actions[i]||(o.actions[i]={}),Object.assign(o.actions[i],{value:u})};e.setActionOptionsFor=function(i,u){var d=(u===void 0?{}:u).closeModal,p=d===void 0||d;Object.assign(o.actions[i],{closeModal:p})},e.default=o},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(1),r=n(3),o=n(0),s=o.default.OVERLAY,i=o.default.SHOW_MODAL,u=o.default.BUTTON,d=o.default.BUTTON_LOADING,p=n(5);e.openModal=function(){t.getNode(s).classList.add(i),p.default.isOpen=!0};var f=function(){t.getNode(s).classList.remove(i),p.default.isOpen=!1};e.onAction=function(m){m===void 0&&(m=r.CANCEL_KEY);var w=p.default.actions[m],x=w.value;if(w.closeModal===!1){var a=u+"--"+m;t.getNode(a).classList.add(d)}else f();p.default.promise.resolve(x)},e.getState=function(){var m=Object.assign({},p.default);return delete m.promise,delete m.timer,m},e.stopLoading=function(){for(var m=document.querySelectorAll("."+u),w=0;w<m.length;w++)m[w].classList.remove(d)}},function(b,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(n=window)}b.exports=n},function(b,e,n){(function(t){b.exports=t.sweetAlert=n(9)}).call(e,n(7))},function(b,e,n){(function(t){b.exports=t.swal=n(10)}).call(e,n(7))},function(b,e,n){typeof window<"u"&&n(11),n(16);var t=n(23).default;b.exports=t},function(b,e,n){var t=n(12);typeof t=="string"&&(t=[[b.i,t,""]]);var r={insertAt:"top"};r.transform=void 0,n(14)(t,r),t.locals&&(b.exports=t.locals)},function(b,e,n){e=b.exports=n(13)(void 0),e.push([b.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(b,e){function n(r,o){var s=r[1]||"",i=r[3];if(!i)return s;if(o&&typeof btoa=="function"){var u=t(i);return[s].concat(i.sources.map(function(d){return"/*# sourceURL="+i.sourceRoot+d+" */"})).concat([u]).join(`
`)}return[s].join(`
`)}function t(r){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"}b.exports=function(r){var o=[];return o.toString=function(){return this.map(function(s){var i=n(s,r);return s[2]?"@media "+s[2]+"{"+i+"}":i}).join("")},o.i=function(s,i){typeof s=="string"&&(s=[[null,s,""]]);for(var u={},d=0;d<this.length;d++){var p=this[d][0];typeof p=="number"&&(u[p]=!0)}for(d=0;d<s.length;d++){var f=s[d];typeof f[0]=="number"&&u[f[0]]||(i&&!f[2]?f[2]=i:i&&(f[2]="("+f[2]+") and ("+i+")"),o.push(f))}},o}},function(b,e,n){function t(y,h){for(var k=0;k<y.length;k++){var g=y[k],O=x[g.id];if(O){O.refs++;for(var E=0;E<O.parts.length;E++)O.parts[E](g.parts[E]);for(;E<g.parts.length;E++)O.parts.push(p(g.parts[E],h))}else{for(var M=[],E=0;E<g.parts.length;E++)M.push(p(g.parts[E],h));x[g.id]={id:g.id,refs:1,parts:M}}}}function r(y,h){for(var k=[],g={},O=0;O<y.length;O++){var E=y[O],M=h.base?E[0]+h.base:E[0],L=E[1],I=E[2],B=E[3],S={css:L,media:I,sourceMap:B};g[M]?g[M].parts.push(S):k.push(g[M]={id:M,parts:[S]})}return k}function o(y,h){var k=c(y.insertInto);if(!k)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var g=_[_.length-1];if(y.insertAt==="top")g?g.nextSibling?k.insertBefore(h,g.nextSibling):k.appendChild(h):k.insertBefore(h,k.firstChild),_.push(h);else{if(y.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");k.appendChild(h)}}function s(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y);var h=_.indexOf(y);h>=0&&_.splice(h,1)}function i(y){var h=document.createElement("style");return y.attrs.type="text/css",d(h,y.attrs),o(y,h),h}function u(y){var h=document.createElement("link");return y.attrs.type="text/css",y.attrs.rel="stylesheet",d(h,y.attrs),o(y,h),h}function d(y,h){Object.keys(h).forEach(function(k){y.setAttribute(k,h[k])})}function p(y,h){var k,g,O,E;if(h.transform&&y.css){if(!(E=h.transform(y.css)))return function(){};y.css=E}if(h.singleton){var M=v++;k=l||(l=i(h)),g=f.bind(null,k,M,!1),O=f.bind(null,k,M,!0)}else y.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(k=u(h),g=w.bind(null,k,h),O=function(){s(k),k.href&&URL.revokeObjectURL(k.href)}):(k=i(h),g=m.bind(null,k),O=function(){s(k)});return g(y),function(L){if(L){if(L.css===y.css&&L.media===y.media&&L.sourceMap===y.sourceMap)return;g(y=L)}else O()}}function f(y,h,k,g){var O=k?"":g.css;if(y.styleSheet)y.styleSheet.cssText=P(h,O);else{var E=document.createTextNode(O),M=y.childNodes;M[h]&&y.removeChild(M[h]),M.length?y.insertBefore(E,M[h]):y.appendChild(E)}}function m(y,h){var k=h.css,g=h.media;if(g&&y.setAttribute("media",g),y.styleSheet)y.styleSheet.cssText=k;else{for(;y.firstChild;)y.removeChild(y.firstChild);y.appendChild(document.createTextNode(k))}}function w(y,h,k){var g=k.css,O=k.sourceMap,E=h.convertToAbsoluteUrls===void 0&&O;(h.convertToAbsoluteUrls||E)&&(g=N(g)),O&&(g+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(O))))+" */");var M=new Blob([g],{type:"text/css"}),L=y.href;y.href=URL.createObjectURL(M),L&&URL.revokeObjectURL(L)}var x={},a=function(y){var h;return function(){return h===void 0&&(h=y.apply(this,arguments)),h}}(function(){return window&&document&&document.all&&!window.atob}),c=function(y){var h={};return function(k){return h[k]===void 0&&(h[k]=y.call(this,k)),h[k]}}(function(y){return document.querySelector(y)}),l=null,v=0,_=[],N=n(15);b.exports=function(y,h){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");h=h||{},h.attrs=typeof h.attrs=="object"?h.attrs:{},h.singleton||(h.singleton=a()),h.insertInto||(h.insertInto="head"),h.insertAt||(h.insertAt="bottom");var k=r(y,h);return t(k,h),function(g){for(var O=[],E=0;E<k.length;E++){var M=k[E],L=x[M.id];L.refs--,O.push(L)}g&&t(r(g,h),h);for(var E=0;E<O.length;E++){var L=O[E];if(L.refs===0){for(var I=0;I<L.parts.length;I++)L.parts[I]();delete x[L.id]}}}};var P=function(){var y=[];return function(h,k){return y[h]=k,y.filter(Boolean).join(`
`)}}()},function(b,e){b.exports=function(n){var t=typeof window<"u"&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||typeof n!="string")return n;var r=t.protocol+"//"+t.host,o=r+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(s,i){var u=i.trim().replace(/^"(.*)"$/,function(p,f){return f}).replace(/^'(.*)'$/,function(p,f){return f});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(u))return s;var d;return d=u.indexOf("//")===0?u:u.indexOf("/")===0?r+u:o+u.replace(/^\.\//,""),"url("+JSON.stringify(d)+")"})}},function(b,e,n){var t=n(17);typeof window>"u"||window.Promise||(window.Promise=t),n(21),String.prototype.includes||(String.prototype.includes=function(r,o){return typeof o!="number"&&(o=0),!(o+r.length>this.length)&&this.indexOf(r,o)!==-1}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,o){if(this==null)throw new TypeError('"this" is null or not defined');var s=Object(this),i=s.length>>>0;if(i===0)return!1;for(var u=0|o,d=Math.max(u>=0?u:i-Math.abs(u),0);d<i;){if(function(p,f){return p===f||typeof p=="number"&&typeof f=="number"&&isNaN(p)&&isNaN(f)}(s[d],r))return!0;d++}return!1}}),typeof window<"u"&&function(r){r.forEach(function(o){o.hasOwnProperty("remove")||Object.defineProperty(o,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(b,e,n){(function(t){(function(r){function o(){}function s(a,c){return function(){a.apply(c,arguments)}}function i(a){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");if(typeof a!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],w(a,this)}function u(a,c){for(;a._state===3;)a=a._value;if(a._state===0)return void a._deferreds.push(c);a._handled=!0,i._immediateFn(function(){var l=a._state===1?c.onFulfilled:c.onRejected;if(l===null)return void(a._state===1?d:p)(c.promise,a._value);var v;try{v=l(a._value)}catch(_){return void p(c.promise,_)}d(c.promise,v)})}function d(a,c){try{if(c===a)throw new TypeError("A promise cannot be resolved with itself.");if(c&&(typeof c=="object"||typeof c=="function")){var l=c.then;if(c instanceof i)return a._state=3,a._value=c,void f(a);if(typeof l=="function")return void w(s(l,c),a)}a._state=1,a._value=c,f(a)}catch(v){p(a,v)}}function p(a,c){a._state=2,a._value=c,f(a)}function f(a){a._state===2&&a._deferreds.length===0&&i._immediateFn(function(){a._handled||i._unhandledRejectionFn(a._value)});for(var c=0,l=a._deferreds.length;c<l;c++)u(a,a._deferreds[c]);a._deferreds=null}function m(a,c,l){this.onFulfilled=typeof a=="function"?a:null,this.onRejected=typeof c=="function"?c:null,this.promise=l}function w(a,c){var l=!1;try{a(function(v){l||(l=!0,d(c,v))},function(v){l||(l=!0,p(c,v))})}catch(v){if(l)return;l=!0,p(c,v)}}var x=setTimeout;i.prototype.catch=function(a){return this.then(null,a)},i.prototype.then=function(a,c){var l=new this.constructor(o);return u(this,new m(a,c,l)),l},i.all=function(a){var c=Array.prototype.slice.call(a);return new i(function(l,v){function _(y,h){try{if(h&&(typeof h=="object"||typeof h=="function")){var k=h.then;if(typeof k=="function")return void k.call(h,function(g){_(y,g)},v)}c[y]=h,--N==0&&l(c)}catch(g){v(g)}}if(c.length===0)return l([]);for(var N=c.length,P=0;P<c.length;P++)_(P,c[P])})},i.resolve=function(a){return a&&typeof a=="object"&&a.constructor===i?a:new i(function(c){c(a)})},i.reject=function(a){return new i(function(c,l){l(a)})},i.race=function(a){return new i(function(c,l){for(var v=0,_=a.length;v<_;v++)a[v].then(c,l)})},i._immediateFn=typeof t=="function"&&function(a){t(a)}||function(a){x(a,0)},i._unhandledRejectionFn=function(a){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",a)},i._setImmediateFn=function(a){i._immediateFn=a},i._setUnhandledRejectionFn=function(a){i._unhandledRejectionFn=a},b!==void 0&&b.exports?b.exports=i:r.Promise||(r.Promise=i)})(this)}).call(e,n(18).setImmediate)},function(b,e,n){function t(o,s){this._id=o,this._clearFn=s}var r=Function.prototype.apply;e.setTimeout=function(){return new t(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new t(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(o){o&&o.close()},t.prototype.unref=t.prototype.ref=function(){},t.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(o,s){clearTimeout(o._idleTimeoutId),o._idleTimeout=s},e.unenroll=function(o){clearTimeout(o._idleTimeoutId),o._idleTimeout=-1},e._unrefActive=e.active=function(o){clearTimeout(o._idleTimeoutId);var s=o._idleTimeout;s>=0&&(o._idleTimeoutId=setTimeout(function(){o._onTimeout&&o._onTimeout()},s))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(b,e,n){(function(t,r){(function(o,s){function i(l){typeof l!="function"&&(l=new Function(""+l));for(var v=new Array(arguments.length-1),_=0;_<v.length;_++)v[_]=arguments[_+1];var N={callback:l,args:v};return w[m]=N,f(m),m++}function u(l){delete w[l]}function d(l){var v=l.callback,_=l.args;switch(_.length){case 0:v();break;case 1:v(_[0]);break;case 2:v(_[0],_[1]);break;case 3:v(_[0],_[1],_[2]);break;default:v.apply(s,_)}}function p(l){if(x)setTimeout(p,0,l);else{var v=w[l];if(v){x=!0;try{d(v)}finally{u(l),x=!1}}}}if(!o.setImmediate){var f,m=1,w={},x=!1,a=o.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(o);c=c&&c.setTimeout?c:o,{}.toString.call(o.process)==="[object process]"?function(){f=function(l){r.nextTick(function(){p(l)})}}():function(){if(o.postMessage&&!o.importScripts){var l=!0,v=o.onmessage;return o.onmessage=function(){l=!1},o.postMessage("","*"),o.onmessage=v,l}}()?function(){var l="setImmediate$"+Math.random()+"$",v=function(_){_.source===o&&typeof _.data=="string"&&_.data.indexOf(l)===0&&p(+_.data.slice(l.length))};o.addEventListener?o.addEventListener("message",v,!1):o.attachEvent("onmessage",v),f=function(_){o.postMessage(l+_,"*")}}():o.MessageChannel?function(){var l=new MessageChannel;l.port1.onmessage=function(v){p(v.data)},f=function(v){l.port2.postMessage(v)}}():a&&"onreadystatechange"in a.createElement("script")?function(){var l=a.documentElement;f=function(v){var _=a.createElement("script");_.onreadystatechange=function(){p(v),_.onreadystatechange=null,l.removeChild(_),_=null},l.appendChild(_)}}():function(){f=function(l){setTimeout(p,0,l)}}(),c.setImmediate=i,c.clearImmediate=u}})(typeof self>"u"?t===void 0?this:t:self)}).call(e,n(7),n(20))},function(b,e){function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(l){if(p===setTimeout)return setTimeout(l,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(l,0);try{return p(l,0)}catch{try{return p.call(null,l,0)}catch{return p.call(this,l,0)}}}function o(l){if(f===clearTimeout)return clearTimeout(l);if((f===t||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(l);try{return f(l)}catch{try{return f.call(null,l)}catch{return f.call(this,l)}}}function s(){a&&w&&(a=!1,w.length?x=w.concat(x):c=-1,x.length&&i())}function i(){if(!a){var l=r(s);a=!0;for(var v=x.length;v;){for(w=x,x=[];++c<v;)w&&w[c].run();c=-1,v=x.length}w=null,a=!1,o(l)}}function u(l,v){this.fun=l,this.array=v}function d(){}var p,f,m=b.exports={};(function(){try{p=typeof setTimeout=="function"?setTimeout:n}catch{p=n}try{f=typeof clearTimeout=="function"?clearTimeout:t}catch{f=t}})();var w,x=[],a=!1,c=-1;m.nextTick=function(l){var v=new Array(arguments.length-1);if(arguments.length>1)for(var _=1;_<arguments.length;_++)v[_-1]=arguments[_];x.push(new u(l,v)),x.length!==1||a||r(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=d,m.addListener=d,m.once=d,m.off=d,m.removeListener=d,m.removeAllListeners=d,m.emit=d,m.prependListener=d,m.prependOnceListener=d,m.listeners=function(l){return[]},m.binding=function(l){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(l){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},function(b,e,n){n(22).polyfill()},function(b,e,n){function t(o,s){if(o==null)throw new TypeError("Cannot convert first argument to object");for(var i=Object(o),u=1;u<arguments.length;u++){var d=arguments[u];if(d!=null)for(var p=Object.keys(Object(d)),f=0,m=p.length;f<m;f++){var w=p[f],x=Object.getOwnPropertyDescriptor(d,w);x!==void 0&&x.enumerable&&(i[w]=d[w])}}return i}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:t})}b.exports={assign:t,polyfill:r}},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(24),r=n(6),o=n(5),s=n(36),i=function(){for(var u=[],d=0;d<arguments.length;d++)u[d]=arguments[d];if(typeof window<"u"){var p=s.getOpts.apply(void 0,u);return new Promise(function(f,m){o.default.promise={resolve:f,reject:m},t.default(p),setTimeout(function(){r.openModal()})})}};i.close=r.onAction,i.getState=r.getState,i.setActionValue=o.setActionValue,i.stopLoading=r.stopLoading,i.setDefaults=s.setDefaults,e.default=i},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(1),r=n(0),o=r.default.MODAL,s=n(4),i=n(34),u=n(35),d=n(1);e.init=function(p){t.getNode(o)||(document.body||d.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),i.default(),s.default()),s.initModalContent(p),u.default(p)},e.default=e.init},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(0),r=t.default.MODAL;e.modalMarkup=`
  <div class="`+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(0),r=t.default.OVERLAY,o=`<div 
    class="`+r+`"
    tabIndex="-1">
  </div>`;e.default=o},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(0),r=t.default.ICON;e.errorIconMarkup=function(){var o=r+"--error",s=o+"__line";return`
    <div class="`+o+`__x-mark">
      <span class="`+s+" "+s+`--left"></span>
      <span class="`+s+" "+s+`--right"></span>
    </div>
  `},e.warningIconMarkup=function(){var o=r+"--warning";return`
    <span class="`+o+`__body">
      <span class="`+o+`__dot"></span>
    </span>
  `},e.successIconMarkup=function(){var o=r+"--success";return`
    <span class="`+o+"__line "+o+`__line--long"></span>
    <span class="`+o+"__line "+o+`__line--tip"></span>

    <div class="`+o+`__ring"></div>
    <div class="`+o+`__hide-corners"></div>
  `}},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(0),r=t.default.CONTENT;e.contentMarkup=`
  <div class="`+r+`">

  </div>
`},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(0),r=t.default.BUTTON_CONTAINER,o=t.default.BUTTON,s=t.default.BUTTON_LOADER;e.buttonMarkup=`
  <div class="`+r+`">

    <button
      class="`+o+`"
    ></button>

    <div class="`+s+`">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
`},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(4),r=n(2),o=n(0),s=o.default.ICON,i=o.default.ICON_CUSTOM,u=["error","warning","success","info"],d={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},p=function(w,x){var a=s+"--"+w;x.classList.add(a);var c=d[w];c&&(x.innerHTML=c)},f=function(w,x){x.classList.add(i);var a=document.createElement("img");a.src=w,x.appendChild(a)},m=function(w){if(w){var x=t.injectElIntoModal(r.iconMarkup);u.includes(w)?p(w,x):f(w,x)}};e.default=m},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(2),r=n(4),o=function(s){navigator.userAgent.includes("AppleWebKit")&&(s.style.display="none",s.offsetHeight,s.style.display="")};e.initTitle=function(s){if(s){var i=r.injectElIntoModal(t.titleMarkup);i.textContent=s,o(i)}},e.initText=function(s){if(s){var i=document.createDocumentFragment();s.split(`
`).forEach(function(d,p,f){i.appendChild(document.createTextNode(d)),p<f.length-1&&i.appendChild(document.createElement("br"))});var u=r.injectElIntoModal(t.textMarkup);u.appendChild(i),o(u)}}},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(1),r=n(4),o=n(0),s=o.default.BUTTON,i=o.default.DANGER_BUTTON,u=n(3),d=n(2),p=n(6),f=n(5),m=function(x,a,c){var l=a.text,v=a.value,_=a.className,N=a.closeModal,P=t.stringToNode(d.buttonMarkup),y=P.querySelector("."+s),h=s+"--"+x;y.classList.add(h),_&&(Array.isArray(_)?_:_.split(" ")).filter(function(g){return g.length>0}).forEach(function(g){y.classList.add(g)}),c&&x===u.CONFIRM_KEY&&y.classList.add(i),y.textContent=l;var k={};return k[x]=v,f.setActionValue(k),f.setActionOptionsFor(x,{closeModal:N}),y.addEventListener("click",function(){return p.onAction(x)}),P},w=function(x,a){var c=r.injectElIntoModal(d.footerMarkup);for(var l in x){var v=x[l],_=m(l,v,a);v.visible&&c.appendChild(_)}c.children.length===0&&c.remove()};e.default=w},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(3),r=n(4),o=n(2),s=n(5),i=n(6),u=n(0),d=u.default.CONTENT,p=function(w){w.addEventListener("input",function(x){var a=x.target,c=a.value;s.setActionValue(c)}),w.addEventListener("keyup",function(x){if(x.key==="Enter")return i.onAction(t.CONFIRM_KEY)}),setTimeout(function(){w.focus(),s.setActionValue("")},0)},f=function(w,x,a){var c=document.createElement(x),l=d+"__"+x;c.classList.add(l);for(var v in a){var _=a[v];c[v]=_}x==="input"&&p(c),w.appendChild(c)},m=function(w){if(w){var x=r.injectElIntoModal(o.contentMarkup),a=w.element,c=w.attributes;typeof a=="string"?f(x,a,c):x.appendChild(a)}};e.default=m},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(1),r=n(2),o=function(){var s=t.stringToNode(r.overlayMarkup);document.body.appendChild(s)};e.default=o},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(5),r=n(6),o=n(1),s=n(3),i=n(0),u=i.default.MODAL,d=i.default.BUTTON,p=i.default.OVERLAY,f=function(g){g.preventDefault(),c()},m=function(g){g.preventDefault(),l()},w=function(g){if(t.default.isOpen)switch(g.key){case"Escape":return r.onAction(s.CANCEL_KEY)}},x=function(g){if(t.default.isOpen)switch(g.key){case"Tab":return f(g)}},a=function(g){if(t.default.isOpen)return g.key==="Tab"&&g.shiftKey?m(g):void 0},c=function(){var g=o.getNode(d);g&&(g.tabIndex=0,g.focus())},l=function(){var g=o.getNode(u),O=g.querySelectorAll("."+d),E=O.length-1,M=O[E];M&&M.focus()},v=function(g){g[g.length-1].addEventListener("keydown",x)},_=function(g){g[0].addEventListener("keydown",a)},N=function(){var g=o.getNode(u),O=g.querySelectorAll("."+d);O.length&&(v(O),_(O))},P=function(g){if(o.getNode(p)===g.target)return r.onAction(s.CANCEL_KEY)},y=function(g){var O=o.getNode(p);O.removeEventListener("click",P),g&&O.addEventListener("click",P)},h=function(g){t.default.timer&&clearTimeout(t.default.timer),g&&(t.default.timer=window.setTimeout(function(){return r.onAction(s.CANCEL_KEY)},g))},k=function(g){g.closeOnEsc?document.addEventListener("keyup",w):document.removeEventListener("keyup",w),g.dangerMode?c():l(),N(),y(g.closeOnClickOutside),h(g.timer)};e.default=k},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(1),r=n(3),o=n(37),s=n(38),i={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},u=Object.assign({},i);e.setDefaults=function(a){u=Object.assign({},i,a)};var d=function(a){var c=a&&a.button,l=a&&a.buttons;return c!==void 0&&l!==void 0&&t.throwErr("Cannot set both 'button' and 'buttons' options!"),c!==void 0?{confirm:c}:l},p=function(a){return t.ordinalSuffixOf(a+1)},f=function(a,c){t.throwErr(p(c)+" argument ('"+a+"') is invalid")},m=function(a,c){var l=a+1,v=c[l];t.isPlainObject(v)||v===void 0||t.throwErr("Expected "+p(l)+" argument ('"+v+"') to be a plain object")},w=function(a,c){var l=a+1,v=c[l];v!==void 0&&t.throwErr("Unexpected "+p(l)+" argument ("+v+")")},x=function(a,c,l,v){var _=typeof c,N=_==="string",P=c instanceof Element;if(N){if(l===0)return{text:c};if(l===1)return{text:c,title:v[0]};if(l===2)return m(l,v),{icon:c};f(c,l)}else{if(P&&l===0)return m(l,v),{content:c};if(t.isPlainObject(c))return w(l,v),c;f(c,l)}};e.getOpts=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];var l={};a.forEach(function(N,P){var y=x(0,N,P,a);Object.assign(l,y)});var v=d(l);l.buttons=r.getButtonListOpts(v),delete l.button,l.content=o.getContentOpts(l.content);var _=Object.assign({},i,u,l);return Object.keys(_).forEach(function(N){s.DEPRECATED_OPTS[N]&&s.logDeprecation(N)}),_}},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(o){var s={};return t.isPlainObject(o)?Object.assign(s,o):o instanceof Element?{element:o}:o==="input"?r:null}},function(b,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var r=e.DEPRECATED_OPTS[t],o=r.onlyRename,s=r.replacement,i=r.subOption,u=r.link,d=o?"renamed":"deprecated",p='SweetAlert warning: "'+t+'" option has been '+d+".";s&&(p+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+s+'" instead.');var f="https://sweetalert.js.org";p+=u?" More details: "+f+u:" More details: "+f+"/guides/#upgrading-from-1x",console.warn(p)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])})})(D);var q=D.exports;const A=Y(q);async function K(){const T=document.getElementById("app");let j=[],b=[];try{j=await(await fetch("http://localhost:3000/api/inventory")).json(),b=await(await fetch("http://localhost:3000/api/prediction/compare")).json()}catch(s){console.error("Failed to load data:",s)}const e=b.filter(s=>s.status==="understock");if(e.length>0){const s=e.map(i=>`• ${i.pizza_id}`).join(`
`);A({title:"Stock Alert 🚨",text:`The following items are understocked:

${s}`,icon:"warning",button:"Acknowledge"})}const n=e.map(s=>`
    <tr class="border-t">
      <td class="py-2">${s.pizza_id}</td>
      <td class="py-2">${s.predicted}</td>
      <td class="py-2">${s.actual}</td>
      <td class="py-2 text-red-600">${s.status}</td>
    </tr>
  `).join(""),t=[...j].sort((s,i)=>i.stock-s.stock).map(s=>`
      <tr class="border-t">
        <td class="py-2">${s.name}</td>
        <td class="py-2">${s.stock}</td>
      </tr>
    `).join(""),r=b.map(s=>`
    <tr class="border-t">
      <td class="py-2">${s.pizza_id}</td>
      <td class="py-2">${s.predicted}</td>
      <td class="py-2">${s.actual}</td>
      <td class="py-2 text-${s.status==="understock"?"red":s.status==="balanced"?"green":"yellow"}-600">${s.status}</td>
    </tr>
  `).join(""),o=`
    <div class="min-h-screen bg-gray-100 text-gray-800 p-6">
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <div class="flex items-center gap-4">
          <button class="text-gray-600 hover:text-gray-800">🔔</button>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gray-400 rounded-full"></div>
            <span class="text-sm text-gray-700">Admin</span>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white shadow rounded-lg p-4 h-48 flex items-center justify-center text-gray-400 text-sm">
          [ Chart Placeholder ]
        </div>
        <div class="bg-white shadow rounded-lg p-4 h-48 flex items-center justify-center text-gray-400 text-sm">
          [ Pie Chart Placeholder ]
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white shadow rounded-lg p-4">
          <h2 class="text-lg font-semibold mb-4">Stock Alert</h2>
          <table class="w-full text-sm text-left">
            <thead class="border-b text-gray-600">
              <tr>
                <th class="py-2">Pizza ID</th>
                <th class="py-2">Predicted</th>
                <th class="py-2">Actual</th>
                <th class="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              ${n||'<tr><td colspan="4" class="py-2 text-center text-gray-500">No stock alerts.</td></tr>'}
            </tbody>
          </table>
        </div>

        <div class="bg-white shadow rounded-lg p-4">
          <h2 class="text-lg font-semibold mb-4">Total Stocks</h2>
          <table class="w-full text-sm text-left">
            <thead class="border-b text-gray-600">
              <tr>
                <th class="py-2">Pizza ID</th>
                <th class="py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              ${t}
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-white shadow rounded-lg p-4 mt-6">
        <h2 class="text-lg font-semibold mb-4">Prediction vs Stock</h2>
        <table class="w-full text-sm text-left">
          <thead class="border-b text-gray-600">
            <tr>
              <th class="py-2">Pizza ID</th>
              <th class="py-2">Predicted</th>
              <th class="py-2">Actual</th>
              <th class="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            ${r||'<tr><td colspan="4" class="py-2 text-center text-gray-500">No predictions available.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;T.innerHTML=C(o)}function H(){const T=document.getElementById("app");async function j(){try{return(await(await fetch("http://localhost:3000/api/prediction/compare")).json()).map(o=>o.pizza_id)}catch{return[]}}async function b(){return await(await fetch("http://localhost:3000/api/inventory")).json()}async function e(){const t=await b(),r=await j(),s=`
      <h1 class="text-3xl font-semibold mb-4">Inventory</h1>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-4">Inventory Table</h2>
        <table class="w-full text-sm text-left mb-4">
          <thead class="border-b text-gray-600">
            <tr>
              <th class="py-2">Pizza ID</th>
              <th class="py-2">Predicted</th>
              <th class="py-2">Actual</th>
              <th class="py-2">Status</th>
            </tr>
          </thead>
          <tbody id="inventory-body">
            ${t.map(i=>{const u=i.status==="understock"?"text-red-600":i.status==="overstock"?"text-yellow-600":i.status==="balanced"?"text-green-600":"text-gray-600";return`
        <tr class="border-t" data-id="${i.id}">
          <td class="py-2">${i.pizza_id}</td>
          <td class="py-2">${i.predicted}</td>
          <td class="py-2">${i.actual}</td>
          <td class="py-2 ${u}">${i.status}</td>
        </tr>
      `}).join("")}
          </tbody>
        </table>
        <div class="flex gap-4 mt-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" id="add-btn">Add</button>
          <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" id="edit-btn">Edit</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" id="remove-btn">Remove</button>
        </div>
      </div>
    `;T.innerHTML=C(s),document.getElementById("add-btn").onclick=async()=>{const{value:i}=await A({text:"Enter Pizza ID, Predicted, Actual",content:n(["pizza_id","predicted","actual"]),buttons:!0});if(i){const[u,d,p]=i;if(!r.includes(u))return A("Invalid",`Pizza ID must be one of: ${r.join(", ")}`,"error");await fetch("http://localhost:3000/api/inventory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pizza_id:u,predicted:+d,actual:+p})}),await e()}},document.getElementById("edit-btn").onclick=async()=>{const i=prompt("Enter the ID of the item to edit:"),u=t.find(p=>p.id==i);if(!u)return A("Error","Item not found","error");const{value:d}=await A({text:"Update fields",content:n(["predicted","actual"],u),buttons:!0});if(d){const[p,f]=d;await fetch(`http://localhost:3000/api/inventory/${i}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({predicted:+p,actual:+f})}),await e()}},document.getElementById("remove-btn").onclick=async()=>{const i=prompt("Enter the ID of the item to remove:");await A("Are you sure?","This cannot be undone!","warning",{buttons:!0,dangerMode:!0})&&(await fetch(`http://localhost:3000/api/inventory/${i}`,{method:"DELETE"}),await e())}}function n(t,r={}){const o=document.createElement("div");return o.innerHTML=t.map(s=>`
      <input type="text" name="${s}" placeholder="${s}" value="${r[s]||""}"
        class="swal-content__input mb-2">
    `).join(""),o}e()}function X(){const T=document.getElementById("app");T.innerHTML=C(`
    <div class="flex items-center justify-center min-h-[60vh]">
      <h1 class="text-4xl font-bold text-gray-800">About This App</h1>
    </div>
  `)}function V(){const T=document.getElementById("app");T.innerHTML=C(`
    <h1 class="text-4xl font-bold mb-4 text-gray-800">Distribution</h1>
    <p class="text-lg text-gray-600">Distribution and logistics data will be shown here.</p>
  `)}async function W(){const T=document.getElementById("app");let j=[],b="order_id",e=!0,n="";async function t(){try{const u=await fetch("http://localhost:8000/transactions");if(!u.ok)throw new Error(`HTTP error! status: ${u.status}`);j=await u.json()}catch(u){console.error("Failed to fetch transactions:",u),j=[]}}function r(u){return u.slice().sort((d,p)=>{let f=d[b],m=p[b];return b==="order_date"&&(f=new Date(f),m=new Date(m)),f<m?e?-1:1:f>m?e?1:-1:0})}function o(u){const d=r(u);function p(m){return m!==b?"":e?"▲":"▼"}const f=d.map(m=>`
      <tr class="border-t hover:bg-gray-100 cursor-default">
        <td class="py-2 px-4">${m.order_id}</td>
        <td class="py-2 px-4">${m.pizza_name}</td>
        <td class="py-2 px-4 text-center">${m.quantity}</td>
        <td class="py-2 px-4">${m.order_date}</td>
        <td class="py-2 px-4 text-right">${m.unit_price.toLocaleString()}</td>
      </tr>
    `).join("");return`
      <table class="w-full text-sm text-left bg-white shadow rounded-lg overflow-hidden mt-4">
        <thead class="bg-gray-200 text-gray-600 border-b select-none">
          <tr>
            <th class="py-3 px-4 cursor-pointer" data-key="order_id">Order ID ${p("order_id")}</th>
            <th class="py-3 px-4 cursor-pointer" data-key="pizza_name">Pizza Name ${p("pizza_name")}</th>
            <th class="py-3 px-4 text-center cursor-pointer" data-key="quantity">Quantity ${p("quantity")}</th>
            <th class="py-3 px-4 cursor-pointer" data-key="order_date">Order Date ${p("order_date")}</th>
            <th class="py-3 px-4 text-right cursor-pointer" data-key="unit_price">Unit Price ${p("unit_price")}</th>
          </tr>
        </thead>
        <tbody>
          ${f||'<tr><td colspan="5" class="text-center py-4 text-gray-500">No transactions found.</td></tr>'}
        </tbody>
      </table>
    `}function s(){return n.trim()?j.filter(u=>u.pizza_name.toLowerCase().includes(n.toLowerCase())):j}function i(){const u=s(),d=`
      <div class="min-h-screen bg-gray-100 text-gray-800 p-6">
        <h1 class="text-2xl font-bold mb-6">Transaction History & Input</h1>

        <!-- Form Tambah Transaksi -->
        <form id="transaction-form" class="mb-6 bg-white p-4 rounded shadow max-w-md mx-auto">
          <div class="mb-4">
            <label for="order_id" class="block font-medium mb-1">Order ID</label>
            <input type="text" id="order_id" name="order_id" required class="w-full border rounded px-3 py-2" />
          </div>
          <div class="mb-4">
            <label for="pizza_name" class="block font-medium mb-1">Pizza Name</label>
            <input type="text" id="pizza_name" name="pizza_name" required class="w-full border rounded px-3 py-2" />
          </div>
          <div class="mb-4">
            <label for="quantity" class="block font-medium mb-1">Quantity</label>
            <input type="number" id="quantity" name="quantity" required min="1" class="w-full border rounded px-3 py-2" />
          </div>
          <div class="mb-4">
            <label for="order_date" class="block font-medium mb-1">Order Date</label>
            <input type="date" id="order_date" name="order_date" required class="w-full border rounded px-3 py-2" />
          </div>
          <div class="mb-4">
            <label for="unit_price" class="block font-medium mb-1">Unit Price</label>
            <input type="number" id="unit_price" name="unit_price" required min="0" class="w-full border rounded px-3 py-2" />
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Transaction</button>
        </form>

        <!-- Filter -->
        <div class="max-w-4xl mx-auto mb-4 flex items-center gap-2">
          <input type="text" id="searchInput" placeholder="Search pizza name..." class="flex-1 border px-3 py-2 rounded" />
          <button id="searchBtn" class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Search</button>
        </div>

        <div class="max-w-4xl mx-auto">
          ${o(u)}
        </div>
      </div>
    `;T.innerHTML=C(d);const p=document.getElementById("transaction-form");p.addEventListener("submit",async x=>{x.preventDefault();const a={order_id:p.order_id.value.trim(),pizza_name:p.pizza_name.value.trim(),quantity:Number(p.quantity.value),order_date:p.order_date.value,unit_price:Number(p.unit_price.value)};try{const c=await fetch("http://localhost:8000/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!c.ok){const l=await c.text();throw new Error(`Failed to add transaction: ${l}`)}j.push(a),p.reset(),i()}catch(c){console.error(c),alert("Gagal menambahkan transaksi.")}}),T.querySelectorAll("th[data-key]").forEach(x=>{x.addEventListener("click",()=>{const a=x.getAttribute("data-key");b===a?e=!e:(b=a,e=!0),i()})});const m=document.getElementById("searchBtn"),w=document.getElementById("searchInput");w.value=n,m.addEventListener("click",()=>{n=w.value.trim(),i()})}await t(),i()}async function G(){const T=document.getElementById("app");let j=[],b=null;async function e(){try{const s=await fetch("http://localhost:8000/transactions");if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);j=await s.json()}catch(s){console.error("Failed to fetch transactions:",s),j=[]}}function n(){const s={};return j.forEach(i=>{s[i.pizza_name]=(s[i.pizza_name]||0)+i.quantity}),s}function t(){const s=n();return`
      <table class="min-w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-200">
            <th class="border border-gray-300 px-4 py-2 text-left">Pizza Name</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Total Sold</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(s).map(([u,d])=>`
      <tr>
        <td class="border px-4 py-2">${u}</td>
        <td class="border px-4 py-2 text-center">${d}</td>
      </tr>
    `).join("")||'<tr><td colspan="2" class="text-center p-4 text-gray-500">No data available</td></tr>'}
        </tbody>
      </table>
    `}function r(){return b?`
      <div class="mt-6 p-4 bg-green-100 border border-green-400 rounded max-w-md mx-auto">
        <h3 class="font-semibold mb-2">Prediction for ${b.date}:</h3>
        <ul>
          ${Object.entries(b.predictions).map(([s,i])=>`
            <li>${s}: ${i} pizzas</li>
          `).join("")}
        </ul>
      </div>
    `:""}function o(){const s=`
      <div class="min-h-screen bg-gray-100 p-6 text-gray-800">
        <h1 class="text-2xl font-bold mb-6">Pizza Stock Prediction</h1>

        <h2 class="text-xl mb-4">Total Pizza Sold</h2>
        ${t()}

        <form id="prediction-form" class="max-w-md mx-auto bg-white p-4 rounded shadow">
          <label for="predict_date" class="block mb-2 font-medium">Enter Date to Predict (YYYY-MM-DD):</label>
          <input type="date" id="predict_date" name="predict_date" required class="w-full border rounded px-3 py-2 mb-4" />
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Predict</button>
        </form>

        ${r()}
      </div>
    `;T.innerHTML=C(s);const i=document.getElementById("prediction-form");i.addEventListener("submit",u=>{u.preventDefault();const d=i.predict_date.value;if(!d)return alert("Please enter a valid date.");const p=n(),f={};for(const[m,w]of Object.entries(p))f[m]=Math.round(w*.1);b={date:d,predictions:f},o()})}await e(),o()}function $(){switch(window.location.hash){case"#/login":z();break;case"#/register":F();break;case"#/dashboard":K();break;case"#/inventory":H();break;case"#/transaction":W();break;case"#/stock-prediction":G();break;case"#/about":X();break;case"#/distribution":V();break;default:z();break}}const J="modulepreload",Q=function(T){return"/"+T},R={},Z=function(j,b,e){if(!b||b.length===0)return j();const n=document.getElementsByTagName("link");return Promise.all(b.map(t=>{if(t=Q(t),t in R)return;R[t]=!0;const r=t.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(!!e)for(let u=n.length-1;u>=0;u--){const d=n[u];if(d.href===t&&(!r||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${o}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":J,r||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),r)return new Promise((u,d)=>{i.addEventListener("load",u),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>j()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})};function tt(T={}){const{immediate:j=!1,onNeedRefresh:b,onOfflineReady:e,onRegistered:n,onRegisteredSW:t,onRegisterError:r}=T;let o,s;const i=async(d=!0)=>{await s};async function u(){if("serviceWorker"in navigator){if(o=await Z(()=>import("./workbox-window.prod.es5-5ffdab76.js"),[]).then(({Workbox:d})=>new d("/sw.js",{scope:"/",type:"classic"})).catch(d=>{r==null||r(d)}),!o)return;o.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),o.addEventListener("installed",d=>{d.isUpdate||e==null||e()}),o.register({immediate:j}).then(d=>{t?t("/sw.js",d):n==null||n(d)}).catch(d=>{r==null||r(d)})}}return s=u(),i}window.addEventListener("DOMContentLoaded",$);window.addEventListener("hashchange",$);tt({immediate:!0});
