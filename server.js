const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const jquery = require('jquery')
const Nightmare = require('nightmare')
nightmare = new Nightmare({
    show: true
})


let webAdd = ''
const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (res, req) => {
    console.log(req);
    req.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/api/form', (res, req) => {
    webAdd = res.body.orderNum;
    console.log(webAdd);
    // nightmare.goto(`https://manager.backcountry/manager/admin/order_view.html?order=${webAdd}`)
    // .wait(4000)
    // .evaluate(function(){
    //     var orderNumber =[]
    //     $('input[name=order]').each(function(){
    //       item={}
    //       item["product"]=$(this).text()
    //       item["link"]=$(this).attr("href")
    //       orderNumber.push(item)
    //     })
    //     return orderNumber
    //   })
    //   .end()
    //   .then(function(result){
    //     for(orderNum in result){
    //       updatedSku.push(result[orderNum].link);
    //     }
    //     // newRun(updatedSku)
    //     console.log(updatedSku);
    //     app.post('/api/form',(res, req)=>{
    //         newOrder=req.body.orderNumber
    //     })
    //     return updatedSku
    const newAddy = `https://manager.backcountry/manager/admin/order_view.html?order=${webAdd}`


})



app.listen(port, () => {
    console.log(`listening on port ${port}`);
})