var r=0,i=0,a=0,s=0,e=0,c=0;
var jobs = 
[
    ['Agriculture','Health Assisant','Computers','Construction','Mechnanic','Engineering','Food'],
    ['Marine Biology','Engineering','Chemistry','Zoology','Medicine','Economics','Phychology'],
    ['Communications','Cosmetology','Fine and Performing Arts','Photography','Radio and TV','Interior Design','Architecture'],
    ['Counseling','Nursing','Physical Therapy','Travel','Advertising','Public Relations','Education'],
    ['Fashion Merchandising','Real Estate','Marketing/Sales','Law','Political Science','International Trade','Banking/Finance'],
    ['Accounting','Court Reporting','Insurance','Administration','Medical Records','Banking','Data Processing']
]
function fun(event)
{
    if (event.target.value === 'R')
    {
        r+=1;
    }
    else if (event.target.value === 'I')
    {
        i+=1;
    }
    else if (event.target.value === 'A')
    {
        a+=1;
    }
    else if (event.target.value === 'S')
    {
        s+=1;
    }
    else if (event.target.value === 'E')
    {
        e+=1;
    }
    else if (event.target.value === 'C')
    {
        c+=1;
    }
}
function loop(arr_val)
{
    let low = 0,index =0;
    for (let i = 0;i<6;i++)
    {
        if (low < arr_val[i])
        {
            low = arr_val[i];
            index = i;
        }
    }
    if (low !== 0)
    {
        return index;
    }
}
function submit()
{
    let divmain = document.getElementById('main')
    document.getElementById('submain').style.display = 'none'; //3 2 1 0 0 0
    let arr = ['r','i','a','s','e','c'];
    let arr_val  = [],low = 0,value='',index=0,main=[],main_org=[];
    arr_val[0] = r,arr_val[1]=i,arr_val[2]=a,arr_val[3]=s,arr_val[4]=e,arr_val[5]=c
    for (let i = 0;i<3;i++)
    {
        let temp = loop(arr_val)
        main.push(arr[temp])
        arr_val[temp] = 0
    }
    main.forEach
    (
        (i)=>
        {
            if(main_org.indexOf(i)===-1)
            {
                main_org.push(i);
            }
        }
    )
    console.log(main_org)
    let div = document.createElement('div')
    div.id = 'secondmain'
    let temp = document.createElement('h1')
    temp.textContent = 'Jobs Suggest';
    div.append(temp);
    main_org.forEach
    (
        (xx)=>
        {
            if(xx==='r')
            {
                let head = document.createElement('h2')
                let br = document.createElement('br')
                head.textContent = 'Realistic Jobs'
                head.style.color = 'blue'
                head.style.margin = '10px'
                div.appendChild(head)
                // div.appendChild(br)
                for(let i = 0;i<7;i++)
                {
                    let li = document.createElement('li')
                    li.innerHTML = jobs[0][i]
                    div.appendChild(li)
                }
            }
            else if(xx == 'i')
            {
                let head = document.createElement('h2')
                let br = document.createElement('br')
                head.textContent = 'Investigative Jobs'
                head.style.color = 'blue'
                head.style.margin = '10px'
                div.appendChild(head)
                // div.appendChild(br)
                for(let i = 0;i<7;i++)
                {
                    let li = document.createElement('li')
                    li.innerHTML = jobs[1][i]
                    div.appendChild(li)
                }
            }
            else if(xx == 'a')
            {
                let head = document.createElement('h2')
                let br = document.createElement('br')
                head.textContent = 'Artistic Jobs'
                head.style.color = 'blue'
                head.style.margin = '10px'
                div.appendChild(head)
                // div.appendChild(br)
                for(let i = 0;i<7;i++)
                {
                    let li = document.createElement('li')
                    li.innerHTML = jobs[2][i]
                    div.appendChild(li)
                }
            }
            else if(xx == 's')
            {
                let head = document.createElement('h2')
                let br = document.createElement('br')
                head.textContent = 'Social Jobs'
                head.style.color = 'blue'
                head.style.margin = '10px'
                div.appendChild(head)
                // div.appendChild(br)
                for(let i = 0;i<7;i++)
                {
                    let li = document.createElement('li')
                    li.innerHTML = jobs[3][i]
                    div.appendChild(li)
                }
            }
            else if(xx == 'e')
            {
                let head = document.createElement('h2')
                let br = document.createElement('br')
                head.textContent = 'Enterprising Jobs'
                head.style.color = 'blue'
                head.style.margin = '10px'
                div.appendChild(head)
                // div.appendChild(br)
                for(let i = 0;i<7;i++)
                {
                    let li = document.createElement('li')
                    li.innerHTML = jobs[4][i]
                    div.appendChild(li)
                }
            }
            else if(xx == 'c')
            {
                let head = document.createElement('h2')
                let br = document.createElement('br')
                head.textContent = 'Conventional Jobs'
                head.style.color = 'blue'
                head.style.margin = '10px'
                div.appendChild(head)
                // div.appendChild(br)
                for(let i = 0;i<7;i++)
                {
                    let li = document.createElement('li')
                    li.innerHTML = jobs[5][i]
                    div.appendChild(li)
                }
            }
        }
    )
    div.style.display = 'block'
    div.style.padding = '10px'
    div.style.backgroundColor = '#F6E0B5';
    divmain.appendChild(div)
}