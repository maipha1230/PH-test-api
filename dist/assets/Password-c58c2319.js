import{an as y,ao as S,r as c,a9 as g,ap as T,k as v,p as Q,j as h,B as _,b as p,T as L,aq as x,a as B,o as E}from"./index-067de1a3.js";import{F as k,T as m,B as F,c as P,a as w}from"./formik.esm-21fb3e16.js";function W(n,i,e,s,a){const[t,r]=c.useState(()=>a&&e?e(n).matches:s?s(n).matches:i);return g(()=>{let l=!0;if(!e)return;const o=e(n),d=()=>{l&&r(o.matches)};return d(),o.addListener(d),()=>{l=!1,o.removeListener(d)}},[n,e]),t}const b=T["useSyncExternalStore"];function j(n,i,e,s,a){const t=c.useCallback(()=>i,[i]),r=c.useMemo(()=>{if(a&&e)return()=>e(n).matches;if(s!==null){const{matches:u}=s(n);return()=>u}return t},[t,n,s,a,e]),[l,o]=c.useMemo(()=>{if(e===null)return[t,()=>()=>{}];const u=e(n);return[()=>u.matches,f=>(u.addListener(f),()=>{u.removeListener(f)})]},[t,e,n]);return b(o,l,r)}function D(n,i={}){const e=y(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:t=s?window.matchMedia:null,ssrMatchMedia:r=null,noSsr:l=!1}=S({name:"MuiUseMediaQuery",props:i,theme:e});let o=typeof n=="function"?n(e):n;return o=o.replace(/^@media( ?)/m,""),(b!==void 0?j:W)(o,a,t,r,l)}const M={old_pass:"",new_pass:"",new_pass2:""},R=P().shape({old_pass:w().min(8,"กรุณากรอกอย่างน้อย 8 ตัวอักษร").required("กรุณากรอกรหัสผ่านเดิม"),new_pass:w().min(8,"กรุณากรอกอย่างน้อย 8 ตัวอักษร").required("กรุณากรอกรหัสผ่านใหม่"),new_pass2:w().min(8,"กรุณากรอกอย่างน้อย 8 ตัวอักษร").required("กรุณากรอกยืนยันรหัสผ่านใหม่")});function C(){const n=v();Q();const i=e=>{e.new_pass!=e.new_pass2?x("รหัสผ่านใหม่ไม่ตรงกัน"):e.new_pass==e.old_pass?x("รหัสผ่านเดิมและรหัสผ่านใหม่ไม่ควรซ้ำกัน"):B.put("/auth/change-password",{old_pass:e.old_pass,new_pass:e.new_pass}).then(s=>{s.status==200&&E(s.data).then(()=>window.location.href="/password")})};return h(_,{display:"flex",flexDirection:"column",p:2,gap:2,width:D(n.breakpoints.up("lg"))?"50%":"100%",children:[p(L,{variant:"h5",fontWeight:"bold",sx:{color:"#2e5596"},children:"แก้ไขรหัสผ่าน"}),p(k,{onSubmit:i,initialValues:M,validationSchema:R,enableReinitialize:!0,children:({values:e,errors:s,touched:a,handleBlur:t,handleChange:r,handleSubmit:l,isValid:o})=>p("form",{onSubmit:l,style:{width:"100%"},children:h(_,{display:"flex",flexDirection:"column",gap:"1rem",sx:{width:"100%"},children:[p(m,{fullWidth:!0,variant:"outlined",type:"password",label:"รหัสผ่านเดิม",onBlur:t,onChange:r,value:e.old_pass,name:"old_pass",error:!!a.old_pass&&!!s.old_pass,helperText:a.old_pass&&s.old_pass}),p(m,{fullWidth:!0,variant:"outlined",type:"password",label:"รหัสผ่านใหม่",onBlur:t,onChange:r,value:e.new_pass,name:"new_pass",error:!!a.new_pass&&!!s.new_pass,helperText:a.new_pass&&s.new_pass}),p(m,{fullWidth:!0,variant:"outlined",type:"password",label:"ยืนยันรหัสผ่านใหม่",onBlur:t,onChange:r,value:e.new_pass2,name:"new_pass2",error:!!a.new_pass2&&!!s.new_pass2,helperText:a.new_pass2&&s.new_pass2}),p(F,{type:"submit",color:"primary",variant:"contained",disabled:!o,children:"แก้ไขรหัสผ่าน"})]})})})]})}export{C as default};
