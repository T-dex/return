const jquery= require('jquery')
const Nightmare=require('nightmare')
nightmare=Nightmare()
const axios=require('axios')

axios.get("/api/form", (res, req)=>{
    console.log(res, req);
    
})
nightmare.goto(`https://manager.backcountry/manager/admin/order_view.html?order=${orderNum}}`)




