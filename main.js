
let label;
let orderNum;

function onLoad(){

let btn=document.querySelector("button#find") 
btn.addEventListener("click", (e)=>{ 
   newReturn(e)
    return
})
let dropdown= document.querySelector("select.shit")
dropdown.addEventListener("change", (e)=>{
    labelChoice(e)
    return
})

function labelChoice(e){
  label=e.target.value
  return 
}

function newReturn(e){
    let input = document.querySelector("input#number")
   orderNum=input.value;
      axios.post('api/form',{
          orderNum,
          label
      })
    }
}

window.onload=onLoad