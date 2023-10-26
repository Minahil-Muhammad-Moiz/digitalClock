let hrs = document.getElementById('hrs')
let mins = document.getElementById('mins')
let sec = document.getElementById('sec')
let currentTime = new Date()
currentTime.toDateString()

setInterval (function(){
    let currentTime = new Date()
    currentTime.toDateString() 
    hrs.innerHTML = ((currentTime.getHours()<10)?  '0':'' )+ currentTime.getHours()
    mins.innerHTML = ((currentTime.getMinutes()<10)? '0':'')+currentTime.getMinutes()
    sec.innerHTML = ((currentTime.getSeconds()<10)? '0':'')+currentTime.getSeconds()
},1000)