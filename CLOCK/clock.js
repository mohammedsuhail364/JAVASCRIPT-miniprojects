function demo()
{let datetime=new Date();
    console.log(datetime)
let hrs=datetime.getHours()
let mins=datetime.getMinutes()
let secs=datetime.getSeconds()
if (hrs>12)
{
    hrs=hrs-12
    document.getElementById('ampm').textContent='PM'
}
else if (hrs==12)
{
    hrs=hrs
    document.getElementById('ampm').textContent='PM'
}
document.getElementById('hrs').textContent=padzero(hrs)
document.getElementById('mins').textContent=padzero(mins)
document.getElementById('secs').textContent=padzero(secs);}
setInterval(demo,500)
function padzero(num)
{
    return num<10?"0"+num:num
}
