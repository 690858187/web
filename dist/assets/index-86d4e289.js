import{d as F,g as p,s as q,o as c,e as b,j as x,t as C,k as R,_ as L,a as j,c as i,l as N,F as k,m as y,w as o,f as n,n as E,q as Z,r as I,v as H,T as ee,x as te,b as U,y as ne,z as le,A as oe,B as se,C as M,D as ae,G as ue,u as W,h as D,H as ce,E as re,I as T}from"./index-83aa274e.js";const ie={key:0,class:"logo"},_e=["src"],de=F({__name:"index",setup(l){return(s,e)=>p(q).logoHidden?(c(),b("div",ie,[x("img",{src:p(q).logo,alt:"Logo"},null,8,_e),x("p",null,C(p(q).title),1)])):R("",!0)}});const fe=L(de,[["__scopeId","data-v-375c6485"]]),pe={name:"Menu"},me=F({...pe,props:{menuList:Array},setup(l){let s=j();const e=d=>{console.log(d.index),s.push(d.index)};return(d,u)=>{const r=i("el-icon"),f=i("el-menu-item"),m=i("Menu"),v=i("el-sub-menu");return c(!0),b(k,null,N(l.menuList,(a,_)=>(c(),b(k,{key:_},[a.children?a.children&&a.children.length==1?(c(),b(k,{key:1},[a.children[0].meta.hidden?R("",!0):(c(),y(f,{key:0,index:a.children[0].path,onClick:e},{title:o(()=>[x("span",null,C(a.children[0].meta.title),1)]),default:o(()=>[n(r,null,{default:o(()=>[(c(),y(E(a.children[0].meta.icon)))]),_:2},1024)]),_:2},1032,["index"]))],64)):(c(),y(v,{key:2,index:a.path},{title:o(()=>[n(r,null,{default:o(()=>[(c(),y(E(a.meta.icon)))]),_:2},1024),x("span",null,C(a.meta.title),1)]),default:o(()=>[n(m,{menuList:a.children},null,8,["menuList"])]),_:2},1032,["index"])):(c(),b(k,{key:0},[a.meta.hidden?R("",!0):(c(),y(f,{key:0,index:a.path,onClick:e},{title:o(()=>[x("span",null,C(a.meta.title),1)]),default:o(()=>[n(r,null,{default:o(()=>[(c(),y(E(a.meta.icon)))]),_:2},1024)]),_:2},1032,["index"]))],64))],64))),128)}}});let A=Z("SettingStore",{state:()=>({fold:!1,refsh:!1}),actions:{foldtoggle(){this.fold=!this.fold},refshtoggle(){this.refsh=!this.refsh}},getters:{}});const ve=F({__name:"index",setup(l){let s=A(),e=I(!0);return H(()=>s.refsh,()=>{e.value=!1,te(()=>{e.value=!0})}),(d,u)=>{const r=i("router-view");return c(),y(r,null,{default:o(({Component:f})=>[n(ee,{name:"fade"},{default:o(()=>[p(e)?(c(),y(E(f),{key:0})):R("",!0)]),_:2},1024)]),_:1})}}});const he=L(ve,[["__scopeId","data-v-1e88fc21"]]),ge={style:{margin:"0 2px"}},ye=F({__name:"index",setup(l){let s=A(),e=U();const d=()=>{s.foldtoggle()};return(u,r)=>{const f=i("el-icon"),m=i("el-button"),v=i("el-breadcrumb-item"),a=i("el-breadcrumb");return c(),b(k,null,[n(m,{onClick:d},{default:o(()=>[n(f,{color:"gray"},{default:o(()=>[(c(),y(E(p(s).fold?"Fold":"Expand")))]),_:1})]),_:1}),n(a,{"separator-icon":"ArrowRight"},{default:o(()=>[(c(!0),b(k,null,N(p(e).matched,(_,g)=>ne((c(),y(v,{to:_.path,key:g},{default:o(()=>[n(f,null,{default:o(()=>[(c(),y(E(_.meta.icon)))]),_:2},1024),x("span",ge,C(_.meta.title),1)]),_:2},1032,["to"])),[[le,_.meta.title]])),128))]),_:1})],64)}}});const xe=L(ye,[["__scopeId","data-v-7aa38709"]]);function G(l){return oe()?(se(l),!0):!1}function J(l){return typeof l=="function"?l():p(l)}const K=typeof window<"u"&&typeof document<"u",be=Object.prototype.toString,we=l=>be.call(l)==="[object Object]",Se=()=>{};function z(l){var s;const e=J(l);return(s=e==null?void 0:e.$el)!=null?s:e}const ke=K?window:void 0,Fe=K?window.document:void 0;function O(...l){let s,e,d,u;if(typeof l[0]=="string"||Array.isArray(l[0])?([e,d,u]=l,s=ke):[s,e,d,u]=l,!s)return Se;Array.isArray(e)||(e=[e]),Array.isArray(d)||(d=[d]);const r=[],f=()=>{r.forEach(_=>_()),r.length=0},m=(_,g,w,h)=>(_.addEventListener(g,w,h),()=>_.removeEventListener(g,w,h)),v=H(()=>[z(s),J(u)],([_,g])=>{if(f(),!_)return;const w=we(g)?{...g}:g;r.push(...e.flatMap(h=>d.map(S=>m(_,h,S,w))))},{immediate:!0,flush:"post"}),a=()=>{v(),f()};return G(a),a}function Ce(){const l=I(!1);return ae()&&ue(()=>{l.value=!0}),l}function Ee(l){const s=Ce();return M(()=>(s.value,!!l()))}const V=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Le(l,s={}){const{document:e=Fe,autoExit:d=!1}=s,u=M(()=>{var t;return(t=z(l))!=null?t:e==null?void 0:e.querySelector("html")}),r=I(!1),f=M(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(t=>e&&t in e||u.value&&t in u.value)),m=M(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(t=>e&&t in e||u.value&&t in u.value)),v=M(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(t=>e&&t in e||u.value&&t in u.value)),a=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(t=>e&&t in e),_=Ee(()=>u.value&&e&&f.value!==void 0&&m.value!==void 0&&v.value!==void 0),g=()=>a?(e==null?void 0:e[a])===u.value:!1,w=()=>{if(v.value){if(e&&e[v.value]!=null)return e[v.value];{const t=u.value;if((t==null?void 0:t[v.value])!=null)return!!t[v.value]}}return!1};async function h(){if(!(!_.value||!r.value)){if(m.value)if((e==null?void 0:e[m.value])!=null)await e[m.value]();else{const t=u.value;(t==null?void 0:t[m.value])!=null&&await t[m.value]()}r.value=!1}}async function S(){if(!_.value||r.value)return;w()&&await h();const t=u.value;f.value&&(t==null?void 0:t[f.value])!=null&&(await t[f.value](),r.value=!0)}async function B(){await(r.value?h():S())}const $=()=>{const t=w();(!t||t&&g())&&(r.value=t)};return O(e,V,$,!1),O(()=>z(u),V,$,!1),d&&G(h),{isSupported:_,isFullscreen:r,enter:S,exit:h,toggle:B}}const Me=["src"],$e={class:"el-dropdown-link"},Re=F({__name:"index",setup(l){let s=j(),e=U(),d=A(),u=W();const r=()=>{d.refshtoggle()},{isFullscreen:f,toggle:m}=Le(),v=()=>{},a=_=>{ce.confirm("是否要退出登录","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{try{await u.userLogout(),s.push({path:"/login",query:{redirect:e.path}})}catch(g){re({message:g.message,type:"error",dangerouslyUseHTMLString:!0,duration:3e3})}})};return(_,g)=>{const w=i("Refresh"),h=i("el-icon"),S=i("el-button"),B=i("FullScreen"),$=i("Aim"),t=i("Setting"),P=i("arrow-down"),Q=i("el-dropdown-item"),X=i("el-dropdown-menu"),Y=i("el-dropdown");return c(),b(k,null,[n(S,{size:"small",circle:"",onClick:r},{default:o(()=>[n(h,null,{default:o(()=>[n(w)]),_:1})]),_:1}),n(S,{size:"small",circle:"",onClick:p(m)},{default:o(()=>[n(h,null,{default:o(()=>[p(f)?(c(),y($,{key:1})):(c(),y(B,{key:0}))]),_:1})]),_:1},8,["onClick"]),n(S,{size:"small",circle:"",onClick:v},{default:o(()=>[n(h,null,{default:o(()=>[n(t)]),_:1})]),_:1}),x("img",{src:p(u).avatar,style:{width:"24px",height:"24px","border-radius":"12px"}},null,8,Me),n(Y,{onCommand:a},{dropdown:o(()=>[n(X,null,{default:o(()=>[n(Q,null,{default:o(()=>[D("退出登录")]),_:1})]),_:1})]),default:o(()=>[x("span",$e,[D(C(p(u).username)+" ",1),n(h,{class:"el-icon--right"},{default:o(()=>[n(P)]),_:1})])]),_:1})],64)}}});const Ae=L(Re,[["__scopeId","data-v-5cb90c13"]]),Be={class:"tabbar"},qe={class:"left"},ze={class:"right"},Ie=F({__name:"index",setup(l){return(s,e)=>(c(),b("div",Be,[x("div",qe,[n(xe)]),x("div",ze,[n(Ae)])]))}});const De=L(Ie,[["__scopeId","data-v-bd3f54cb"]]),Te={class:"layout_container"},Oe={class:"layout_slider"},Ve=F({__name:"index",setup(l){let s=A(),e=W();return(d,u)=>{const r=i("el-menu"),f=i("el-scrollbar");return c(),b("div",Te,[x("div",Oe,[n(fe),n(f,{class:"sbar"},{default:o(()=>[n(r,{collapse:!!p(s).fold,"default-active":d.$route.path,"unique-opened":"","background-color":"#001529","text-color":"white"},{default:o(()=>[n(me,{menuList:p(e).menuRoutes},null,8,["menuList"])]),_:1},8,["collapse","default-active"])]),_:1})]),x("div",{class:T(["layout_tabbar",{fold:!!p(s).fold}])},[n(De)],2),x("div",{class:T(["layout_main",{fold:!!p(s).fold}])},[n(he)],2)])}}});const Ne=L(Ve,[["__scopeId","data-v-5370b9c6"]]);export{Ne as default};