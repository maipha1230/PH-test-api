import{r as o,a as c,j as m,b as n,B as l,o as g,k as T,T as v,D as F,U as S}from"./index-1558d431.js";import{F as W,T as B,B as _,c as j,a as D}from"./formik.esm-44055dca.js";import{D as $,a as E,b as I,M}from"./index-7808d7ef.js";import"./Grid-6b1af745.js";const R=j().shape({bank_name_th:D().required("กรุณากรอกชื่อไทยของธนาคาร"),bank_name_en:D().required("กรุณากรอกชื่ออังกฤษของธนาคาร")});function q({open:k,handleDialogClose:h,bankId:i=null}){const[b,d]=o.useState({bank_name_th:"",bank_name_en:""});o.useEffect(()=>{u()},[k,h]);const s=()=>{x(),h()},x=()=>{d({bank_name_th:"",bank_name_en:""})},u=async()=>{if(i){const e=await c.get(`/banks/get-bank/${i}`);e.status==200&&d({bank_name_th:e.data.bank_name_th,bank_name_en:e.data.bank_name_en})}};return m($,{open:k,onClose:s,fullWidth:!0,children:[n(E,{children:i?"แก้ไขธนาคาร":"เพิ่มธนาคาร"}),n(I,{children:n(W,{onSubmit:async e=>{if(i){const a=await c.put(`/banks/update-bank/${i}`,{bank_name_th:e.bank_name_th,bank_name_en:e.bank_name_en});a.status==201&&g(a.data).then(()=>{s()})}else{const a=await c.post("/banks/create-bank",{bank_name_th:e.bank_name_th,bank_name_en:e.bank_name_en});a.status==201&&g(a.data).then(()=>{s()})}},initialValues:b,validationSchema:R,enableReinitialize:!0,children:({values:e,errors:a,touched:r,handleBlur:t,handleChange:f,handleSubmit:p,isValid:C,dirty:w})=>n("form",{onSubmit:p,style:{width:"100%",marginTop:"1rem"},children:m(l,{display:"flex",flexDirection:"column",gap:"1rem",sx:{width:"100%"},children:[n(B,{fullWidth:!0,variant:"outlined",type:"text",label:"ชื่อธนาคาร(ไทย)",onBlur:t,onChange:f,value:e.bank_name_th,name:"bank_name_th",error:!!r.bank_name_th&&!!a.bank_name_th,helperText:r.bank_name_th&&a.bank_name_th}),n(B,{fullWidth:!0,variant:"outlined",type:"text",label:"ชื่อธนาคาร(อังกฤษ)",onBlur:t,onChange:f,value:e.bank_name_en,name:"bank_name_en",error:!!r.bank_name_en&&!!a.bank_name_en,helperText:r.bank_name_en&&a.bank_name_en}),m(l,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:2,children:[n(_,{type:"submit",color:"success",variant:"contained",disabled:!C||!w,children:"บันทัก"}),n(_,{color:"inherit",variant:"contained",onClick:s,children:"ยกเลิก"})]})]})})})})]})}function O(){T();const[k,h]=o.useState([]),[i,b]=o.useState(!1),[d,s]=o.useState(null);o.useEffect(()=>{u()},[i]);const x=[{name:"bank_name_th",label:"ชื่อธนาคาร(ไทย)",options:{filter:!0,sort:!0}},{name:"bank_name_en",label:"ชื่อธนาคาร(อังกฤษ)",options:{filter:!0,sort:!1}},{name:"bank_id",label:"จัดการ",options:{filter:!0,sort:!1,customBodyRender:t=>m(l,{display:"flex",flexDirection:{xs:"column",md:"row"},gap:1,justifyContent:"center",alignItems:"center",width:{xs:"100%",md:"50%"},children:[n(_,{fullWidth:!0,color:"warning",variant:"contained",onClick:()=>y(t),children:"แก้ไข"}),n(_,{fullWidth:!0,color:"error",variant:"contained",onClick:()=>e(t),children:"ลบ"})]})}}],u=async()=>{const t=await c.get("/banks/get-banks");t.status==200&&h(t.data)},y=t=>{s(t),a()},e=t=>{S().then(f=>{f.isConfirmed&&c.delete(`banks/remove-bank/${t}`).then(p=>{p.status==200&&g(p.data).then(()=>{u()})})})},a=()=>{b(!0)};return m(l,{display:"flex",flexDirection:"column",p:2,children:[n(v,{variant:"h5",children:"ธนาคาร"}),n(F,{}),n(l,{pt:1.5,children:n(_,{variant:"contained",color:"success",onClick:a,children:"เพิ่มธนาคาร"})}),n(l,{width:"100%",maxWidth:"100wh",height:"70vh",mt:3,children:n(M,{title:"ตารางธนาคาร",data:k,columns:x,options:{filterType:"checkbox"}})}),i&&n(q,{open:i,handleDialogClose:()=>{b(!1),s(null)},bankId:d})]})}export{O as default};
