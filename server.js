const express= require('express')
const path = require('path')
const bodyParser= require('body-parser')
const jquery= require('jquery')
const Nightmare=require('nightmare')
nightmare=Nightmare()


let webAdd=''
const app=express()
const port =process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (res, req)=>{
    req.sendFile(path.join(__dirname+'/index.html'));
})

app.post('/api/form', (res, req)=>{
    webAdd=res.body.orderNum;
    console.log(webAdd);
    console.log(`https://manager.backcountry/manager/admin/order_view.html?order=${webAdd}`)
})


console.log(`https://manager.backcountry/manager/admin/order_view.html?order=${webAdd}`)

app.listen(port,()=>{
    console.log(`listening on port ${port}`); 
})