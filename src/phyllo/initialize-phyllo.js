function PhylloConnectSDK(e,o)
{
    "object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.PhylloConnectSDK=o():e.PhylloConnectSDK=o()
    return(()=>{
        var e={
            64:e=>{
            e.exports={
                phyllo_standard_keys:{
                    PHYLLO_CONNECT_URL_KEY:{
                        sandbox:"https://connect.sandbox.getphyllo.com",
                        production:"https://connect.getphyllo.com",
                        preprod:"https://connect.preprod.getphyllo.com",
                        dev:"https://connect.dev.getphyllo.com",
                        dev2:"https://connect.dev2.getphyllo.com"
                    },
                        PHYLLO_ENVIRONMENT_KEY:"env",
                        PHYLLO_USER_ID_KEY:"userId",
                        PHYLLO_TOKEN_KEY:"token",
                        PHYLLO_APP_NAME_KEY:"appName",
                        PHYLLO_WORKPLATFORM_ID_KEY:"workPlatformId",
                        PHYLLO_REDIRECT_URL_KEY:"redirectURL"
                    }
                }
            }
        },
        o={};
        function r(n){
            var t=o[n];
            if(void 0!==t) return t.exports;
            var d=o[n]={exports:{}};
            return e[n](d,d.exports,r),d.exports
        }
        r.n=(e)=>{
                var o=e && e.__esModule?(()=>e.default):(()=>e);
                return r.d(o,{a:o}),o
        },
        r.d=(e,o)=>{
            for(var n in o)r.o(o,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})
        },
        r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{
            "undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})
        };
        var n={};
        return(()=>{"use strict";r.r(n),r.d(n,{clientConnect:()=>t,initialize:()=>d});
        var e=r(64);const o=e=>{if(!e.env||!["sandbox","production","dev","dev2","preprod"].includes(e.env))throw new Error("Please provide valid environment in config");if(!e.userId)throw new Error("Please provide user id in config");if(!e.appName)throw new Error("Please provide app name in config");if(!e.token)throw new Error("Please add token in config")},t=async(r,n,t,d,a=null)=>{try{return o({env:r,userId:n,token:t,appName:d}),`${e.phyllo_standard_keys.PHYLLO_CONNECT_URL_KEY[r]}?userId=${n}&appName=${d}&workPlatformId=${a}&redirectURL=${window.location.href}&token=${t}&env=${r}`}catch(e){console.error(e)}},d=r=>{var n=r[e.phyllo_standard_keys.PHYLLO_ENVIRONMENT_KEY],t=r[e.phyllo_standard_keys.PHYLLO_USER_ID_KEY],d=r[e.phyllo_standard_keys.PHYLLO_TOKEN_KEY],a=r[e.phyllo_standard_keys.PHYLLO_APP_NAME_KEY],l=r[e.phyllo_standard_keys.PHYLLO_WORKPLATFORM_ID_KEY],p=r[e.phyllo_standard_keys.PHYLLO_REDIRECT_URL_KEY];try{return o({env:n,userId:t,token:d,appName:a}),l=l||null,p=encodeURIComponent(p||window.location.href),{open:()=>{window.location.href=`${e.phyllo_standard_keys.PHYLLO_CONNECT_URL_KEY[n]}?userId=${t}&appName=${a}&workPlatformId=${l}&redirectURL=${p}&token=${d}&env=${n}&version=1`}}}catch(e){console.error(e)}}})(),n
})
}

module.exports = PhylloConnectSDK
/* (self,(() =>
{
    return(()=>{
        var e={
            64:e=>{
            e.exports={
                phyllo_standard_keys:{
                    PHYLLO_CONNECT_URL_KEY:{
                        sandbox:"https://connect.sandbox.getphyllo.com",
                        production:"https://connect.getphyllo.com",
                        preprod:"https://connect.preprod.getphyllo.com",
                        dev:"https://connect.dev.getphyllo.com",
                        dev2:"https://connect.dev2.getphyllo.com"
                    },
                        PHYLLO_ENVIRONMENT_KEY:"env",
                        PHYLLO_USER_ID_KEY:"userId",
                        PHYLLO_TOKEN_KEY:"token",
                        PHYLLO_APP_NAME_KEY:"appName",
                        PHYLLO_WORKPLATFORM_ID_KEY:"workPlatformId",
                        PHYLLO_REDIRECT_URL_KEY:"redirectURL"
                    }
                }
            }
        },o={};function r(n){var t=o[n];if(void 0!==t)return t.exports;var d=o[n]={exports:{}};return e[n](d,d.exports,r),d.exports}r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var n in o)r.o(o,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{clientConnect:()=>t,initialize:()=>d});var e=r(64);const o=e=>{if(!e.env||!["sandbox","production","dev","dev2","preprod"].includes(e.env))throw new Error("Please provide valid environment in config");if(!e.userId)throw new Error("Please provide user id in config");if(!e.appName)throw new Error("Please provide app name in config");if(!e.token)throw new Error("Please add token in config")},t=async(r,n,t,d,a=null)=>{try{return o({env:r,userId:n,token:t,appName:d}),`${e.phyllo_standard_keys.PHYLLO_CONNECT_URL_KEY[r]}?userId=${n}&appName=${d}&workPlatformId=${a}&redirectURL=${window.location.href}&token=${t}&env=${r}`}catch(e){console.error(e)}},d=r=>{var n=r[e.phyllo_standard_keys.PHYLLO_ENVIRONMENT_KEY],t=r[e.phyllo_standard_keys.PHYLLO_USER_ID_KEY],d=r[e.phyllo_standard_keys.PHYLLO_TOKEN_KEY],a=r[e.phyllo_standard_keys.PHYLLO_APP_NAME_KEY],l=r[e.phyllo_standard_keys.PHYLLO_WORKPLATFORM_ID_KEY],p=r[e.phyllo_standard_keys.PHYLLO_REDIRECT_URL_KEY];try{return o({env:n,userId:t,token:d,appName:a}),l=l||null,p=encodeURIComponent(p||window.location.href),{open:()=>{window.location.href=`${e.phyllo_standard_keys.PHYLLO_CONNECT_URL_KEY[n]}?userId=${t}&appName=${a}&workPlatformId=${l}&redirectURL=${p}&token=${d}&env=${n}&version=1`}}}catch(e){console.error(e)}}})(),n
    })
    ()
})
); */