import{J as v,d as Q,r as u,G as W,c as n,o as h,e as C,f as a,w as t,h as k,j as X,m as Y,K as m,_ as Z}from"./index-83aa274e.js";const ee=(i,d)=>v.get(`/admin/product/baseTrademark/${i}/${d}`),le=i=>i.id?v.put("/admin/product/baseTrademark/update",i):v.post("/admin/product/baseTrademark/save",i),ae=i=>v.delete(`/admin/product/baseTrademark/remove/${i}`),oe=["src"],te={class:"dialog-footer"},ne=Q({__name:"index",setup(i){const d=u(1),f=u(10),z=u(!0),w=u(!0),N=u(!1),x=u(0),g=u([]),c=u(!1),b=u(!1),y=u(),o=u({id:void 0,tmName:"",logoUrl:""}),V={tmName:[{required:!0,trigger:"blur",validator:(l,e,s)=>{e.length>=2?s():s(new Error("品牌名称长度至少2位"))}}],logoUrl:[{required:!0,validator:(l,e,s)=>{e?s():s(new Error("请上传品牌logo图片"))}}]};W(()=>{p()});const p=(l=1)=>{d.value=l,ee(d.value,f.value).then(e=>{console.log(e),e.code==200&&(g.value=e.data.records,x.value=e.data.total)})},T=l=>{console.log(`${l} items per page`),p()},$=l=>{console.log(`current page: ${l}`),p(l)},q=(l,e)=>{o.value.logoUrl=l.data,y.value.clearValidate("logoUrl")},A=l=>l.type!=="image/jpeg"?(m.error("Avatar picture must be JPG format!"),!1):l.size/1024/1024>2?(m.error("Avatar picture size can not exceed 2MB!"),!1):!0,B=l=>{console.log(l),Object.assign(o.value,l),c.value=!0},E=l=>{console.log(l),ae(l.id).then(e=>{console.log(e),e.code==200?(m.success("删除品牌成功"),p(g.value.length>1?d.value:d.value-1)):m.error("删除品牌失败")})},O=()=>{o.value.id=void 0,o.value.tmName="",o.value.logoUrl="",c.value=!0},P=()=>{y.value.validate(l=>{if(!l)return!1;b.value=!0,le(o.value).then(e=>{console.log(e),e.code==200?(c.value=!1,m.success(o.value.id?"修改品牌成功":"添加品牌成功"),p(o.value.id?d.value:1)):(c.value=!1,m.error(o.value.id?"修改品牌失败":"添加品牌失败"))}).finally(()=>{b.value=!1})})};return(l,e)=>{const s=n("el-button"),_=n("el-table-column"),D=n("el-image"),S=n("el-popconfirm"),j=n("el-table"),G=n("el-pagination"),L=n("el-card"),M=n("el-input"),U=n("el-form-item"),J=n("Plus"),R=n("el-icon"),F=n("el-upload"),H=n("el-form"),I=n("el-dialog");return h(),C("div",null,[a(L,{shadow:"always"},{default:t(()=>[a(s,{type:"primary",size:"small",onClick:O,icon:"Plus"},{default:t(()=>[k(" 添加品牌 ")]),_:1}),a(j,{data:g.value,border:"",style:{width:"100%"}},{default:t(()=>[a(_,{type:"index",label:"序号",width:"80px",align:"center"}),a(_,{prop:"tmName",label:"品牌名称"}),a(_,{label:"品牌LOGO"},{default:t(({row:r})=>[a(D,{src:r.logoUrl,fit:"contain",lazy:!0,style:{width:"100px",height:"100px"},alt:"暂无图片"},null,8,["src"])]),_:1}),a(_,{label:"品牌操作"},{default:t(r=>[a(s,{type:"warning",size:"small",onClick:K=>B(r.row),icon:"Edit"},null,8,["onClick"]),a(S,{title:"确定要删除该品牌吗?",onConfirm:K=>E(r.row)},{reference:t(()=>[a(s,{size:"small",type:"danger",icon:"Delete"})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),a(G,{"current-page":d.value,"onUpdate:currentPage":e[0]||(e[0]=r=>d.value=r),"page-size":f.value,"onUpdate:pageSize":e[1]||(e[1]=r=>f.value=r),"page-sizes":[10,20,30,40,50],small:z.value,disabled:N.value,background:w.value,layout:"prev, pager, next, jumper, ->, sizes, total",total:x.value,onSizeChange:T,onCurrentChange:$},null,8,["current-page","page-size","small","disabled","background","total"])]),_:1}),a(I,{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=r=>c.value=r),title:o.value.id?"修改品牌":"添加品牌","destroy-on-close":""},{footer:t(()=>[X("span",te,[a(s,{onClick:e[3]||(e[3]=r=>c.value=!1)},{default:t(()=>[k("取消")]),_:1}),a(s,{type:"primary",onClick:P,loading:b.value},{default:t(()=>[k(" 确定 ")]),_:1},8,["loading"])])]),default:t(()=>[a(H,{ref_key:"formRef",ref:y,model:o.value,rules:V,"label-width":"100px",style:{width:"80%"}},{default:t(()=>[a(U,{prop:"tmName",label:"品牌名称"},{default:t(()=>[a(M,{modelValue:o.value.tmName,"onUpdate:modelValue":e[2]||(e[2]=r=>o.value.tmName=r),autocomplete:"off",placeholder:"请你输入品牌名字"},null,8,["modelValue"])]),_:1}),a(U,{prop:"logoUrl",label:"品牌LOGO"},{default:t(()=>[a(F,{class:"avatar-uploader",action:"/api/admin/product/fileUpload","show-file-list":!0,"on-success":q,"before-upload":A},{default:t(()=>[o.value.logoUrl?(h(),C("img",{key:0,src:o.value.logoUrl,class:"avatar"},null,8,oe)):(h(),Y(R,{key:1,class:"avatar-uploader-icon"},{default:t(()=>[a(J)]),_:1}))]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});const de=Z(ne,[["__scopeId","data-v-fbd8b5a7"]]);export{de as default};