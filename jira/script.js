const btn=document.getElementById('btn')
const todo=document.getElementById('todo_todo')
const inprogrss=document.getElementsByClassName('todo inprogress')
const review=document.getElementsByClassName('todo review')
const done=document.getElementsByClassName('todo done')
btn.addEventListener('click',()=>{
    const tasktitle=prompt('Enter your Task Title');
    const task=prompt('Enter your Task');
    const assign=prompt('Assigned for..');
    const admin=prompt('Admin Name');
    const divtag=document.createElement('div');
    divtag.classList.add('divtag');
    const h3tag=document.createElement('h3');
    h3tag.textContent=`Title:${tasktitle}`;
    const ptag=document.createElement('h3')
    ptag.innerHTML=`Task:${task}`;
    const h4tag=document.createElement('h3');
    h4tag.textContent=`Assigned For ${assign}`;
    const p1tag=document.createElement('h3');
    p1tag.innerHTML=`Admin:${admin}`;
    const selecttag=document.createElement('select');
    const option1=document.createElement('option')
    option1.textContent='Todo'
    const option2=document.createElement('option')
    option2.textContent='InProgress'
    const option3=document.createElement('option')
    option3.textContent='Review';
    const option4=document.createElement('option')
    option4.textContent='Done'
    selecttag.appendChild(option1)
    selecttag.appendChild(option2)
    selecttag.appendChild(option3)
    selecttag.appendChild(option4)
    selecttag.style.marginLeft='65%';
    divtag.appendChild(h3tag)
    divtag.appendChild(ptag)
    divtag.appendChild(h4tag)
    divtag.appendChild(p1tag)
    divtag.appendChild(selecttag);
    todo.appendChild(divtag);
})