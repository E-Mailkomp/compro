"use strict";(()=>{var e={};e.id=569,e.ids=[569],e.modules={67096:e=>{e.exports=require("bcrypt")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},19405:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>w,patchFetch:()=>h,requestAsyncStorage:()=>m,routeModule:()=>c,serverHooks:()=>x,staticGenerationAsyncStorage:()=>g});var s={};t.r(s),t.d(s,{POST:()=>l});var a=t(49303),i=t(88716),o=t(60670),n=t(67096),u=t.n(n),p=t(87070),d=t(8690);async function l(e){let{name:r,email:t,password:s}=await e.json();if(!r||!t||!s)return p.NextResponse.json("Missing Fields",{status:400});if(await d._.user.findUnique({where:{email:t.toLowerCase()}}))return p.NextResponse.json("User already exists!",{status:500});let a=await u().hash(s,10);return await d._.user.create({data:{name:r,email:t.toLowerCase(),password:a}}),p.NextResponse.json("User created successfully!",{status:200})}let c=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/register/route",pathname:"/api/register",filename:"route",bundlePath:"app/api/register/route"},resolvedPagePath:"D:\\GITHUB-WASIS\\new\\compro-codecrew\\src\\app\\api\\register\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:m,staticGenerationAsyncStorage:g,serverHooks:x}=c,w="/api/register/route";function h(){return(0,o.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:g})}},8690:(e,r,t)=>{t.d(r,{_:()=>a});let s=require("@prisma/client"),a=global.prisma||new s.PrismaClient({log:["query"]})}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,972],()=>t(19405));module.exports=s})();