import{a$ as y,b0 as S,r as c,aK as g,b1 as T,k as v,p as Q,j as h,B as _,b as u,T as L,b2 as b,a as B,o as E}from"./index-37a76331.js";import{F as k,T as m,B as F,c as P,a as w}from"./formik.esm-880ee7a3.js";function W(n,i,e,s,a){const[t,o]=c.useState(()=>a&&e?e(n).matches:s?s(n).matches:i);return g(()=>{let l=!0;if(!e)return;const r=e(n),p=()=>{l&&o(r.matches)};return p(),r.addListener(p),()=>{l=!1,r.removeListener(p)}},[n,e]),t}const x=T["useSyncExternalStore"];function $(n,i,e,s,a){const t=c.useCallback(()=>i,[i]),o=c.useMemo(()=>{if(a&&e)return()=>e(n).matches;if(s!==null){const{matches:d}=s(n);return()=>d}return t},[t,n,s,a,e]),[l,r]=c.useMemo(()=>{if(e===null)return[t,()=>()=>{}];const d=e(n);return[()=>d.matches,f=>(d.addListener(f),()=>{d.removeListener(f)})]},[t,e,n]);return x(r,l,o)}function j(n,i={}){const e=y(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:t=s?window.matchMedia:null,ssrMatchMedia:o=null,noSsr:l=!1}=S({name:"MuiUseMediaQuery",props:i,theme:e});let r=typeof n=="function"?n(e):n;return r=r.replace(/^@media( ?)/m,""),(x!==void 0?$:W)(r,a,t,o,l)}const D={old_pass:"",new_pass:"",new_pass2:""},M=P().shape({old_pass:w().min(8,"กรุณากรอกอย่างน้อย 8 ตัวอักษร").required("กรุณากรอกรหัสผ่านเดิม"),new_pass:w().min(8,"กรุณากรอกอย่างน้อย 8 ตัวอักษร").required("กรุณากรอกรหัสผ่านใหม่"),new_pass2:w().min(8,"กรุณากรอกอย่างน้อย 8 ตัวอักษร").required("กรุณากรอกยืนยันรหัสผ่านใหม่")});function C(){const n=v();Q();const i=e=>{e.new_pass!=e.new_pass2?b("รหัสผ่านใหม่ไม่ตรงกัน"):e.new_pass==e.old_pass?b("รหัสผ่านเดิมและรหัสผ่านใหม่ไม่ควรซ้ำกัน"):B.put("/auth/change-password",{old_pass:e.old_pass,new_pass:e.new_pass}).then(s=>{s.status==200&&E(s.data).then(()=>window.location.href="/password")})};return h(_,{display:"flex",flexDirection:"column",p:2,gap:2,width:j(n.breakpoints.up("lg"))?"50%":"100%",children:[u(L,{variant:"h5",fontWeight:"bold",sx:{color:"#2e5596"},children:"แก้ไขรหัสผ่าน"}),u(k,{onSubmit:i,initialValues:D,validationSchema:M,enableReinitialize:!0,children:({values:e,errors:s,touched:a,handleBlur:t,handleChange:o,handleSubmit:l,isValid:r,dirty:p})=>u("form",{onSubmit:l,style:{width:"100%"},children:h(_,{display:"flex",flexDirection:"column",gap:"1rem",sx:{width:"100%"},children:[u(m,{fullWidth:!0,variant:"outlined",type:"password",label:"รหัสผ่านเดิม",onBlur:t,onChange:o,value:e.old_pass,name:"old_pass",error:!!a.old_pass&&!!s.old_pass,helperText:a.old_pass&&s.old_pass}),u(m,{fullWidth:!0,variant:"outlined",type:"password",label:"รหัสผ่านใหม่",onBlur:t,onChange:o,value:e.new_pass,name:"new_pass",error:!!a.new_pass&&!!s.new_pass,helperText:a.new_pass&&s.new_pass}),u(m,{fullWidth:!0,variant:"outlined",type:"password",label:"ยืนยันรหัสผ่านใหม่",onBlur:t,onChange:o,value:e.new_pass2,name:"new_pass2",error:!!a.new_pass2&&!!s.new_pass2,helperText:a.new_pass2&&s.new_pass2}),u(F,{type:"submit",color:"primary",variant:"contained",disabled:!r||!p,children:"แก้ไขรหัสผ่าน"})]})})})]})}export{C as default};
