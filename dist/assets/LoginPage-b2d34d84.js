import{k as h,p as x,b as e,B as i,j as t,T as s,a as f,o as g}from"./index-87c800a0.js";import{c as w,a as c,F as b,T as d,B as y}from"./formik.esm-06a3687f.js";function T(){h(),x();const m={username:"",password:""},p=w().shape({username:c().required("กรุณากรอกชื่อผู้ใช้งาน"),password:c().min(8,"กรุณากรอกอย่างน้อย 8 ตัวอักษร").required("กรุณากรอกรหัสผ่าน")});return e(i,{display:"flex",justifyContent:"center",alignItems:"center",sx:{background:"#e1e2fe"},minHeight:"100vh",children:t(i,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:{xs:"100vw",md:"450px"},py:"2rem",px:"1.5rem",borderRadius:"2rem",bgcolor:"#ffff",gap:"1.5rem",sx:{backdropFilter:"blur(5px)"},children:[e(s,{variant:"h4",fontWeight:"bold",sx:{color:"#2e5596"},children:"เข้าสู่ระบบ"}),e("img",{src:"/Untitled-1-01.png",width:"200px",style:{objectFit:"cover"}}),e(s,{variant:"h6",sx:{color:"#2e5596",display:{xs:"none",md:"block"}},children:"ระบบจัดการผู้ใช้งาน Principal Healthcare"}),t(i,{display:{xs:"flex",md:"none"},flexDirection:"column",gap:.2,alignItems:"center",children:[e(s,{variant:"h6",sx:{color:"#2e5596"},children:"ระบบจัดการผู้ใช้งาน"}),e(s,{variant:"h6",sx:{color:"#2e5596"},children:"Principal Healthcare"})]}),e(b,{onSubmit:n=>{f.post("/auth/sign-in",{username:n.username,password:n.password}).then(a=>{a.status==200&&(localStorage.setItem("access-token",a.data.access_token),g("เข้าสู่ระบบสำเร็จ").then(()=>{window.location.href="/"}))}).catch(a=>{console.log(a)})},initialValues:m,validationSchema:p,children:({values:n,errors:a,touched:r,handleBlur:o,handleChange:l,handleSubmit:u})=>e("form",{onSubmit:u,style:{width:"100%"},children:t(i,{display:"flex",flexDirection:"column",gap:"1rem",sx:{width:"100%"},children:[e(d,{fullWidth:!0,variant:"outlined",type:"text",label:"ชื่อผู้ใช้งาน",onBlur:o,onChange:l,value:n.username,name:"username",error:!!r.username&&!!a.username,helperText:r.username&&a.username}),e(d,{fullWidth:!0,variant:"outlined",type:"password",label:"รหัสผ่าน",onBlur:o,onChange:l,value:n.password,name:"password",error:!!r.password&&!!a.password,helperText:r.password&&a.password}),e(y,{type:"submit",color:"primary",variant:"contained",children:"เข้าสู่ระบบ"})]})})})]})})}export{T as default};