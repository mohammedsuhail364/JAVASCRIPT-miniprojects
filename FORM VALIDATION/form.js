const username=document.querySelector('#username')
const form=document.querySelector('#form')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')
form.addEventListener('submit',(e)=>
{
    if(!validateinput())
    {
        e.preventDefault();
    }
})
function validateinput()
{
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();
    let success=true
    if (usernameval==="")
    {
        success=false
        seterror(username,'username is required')
    }
    else
    {
        setsuccess(username)
    }
    if(emailval==="")
    {
        success=false
        seterror(email,'email is required')
    }
    else if(!validateEmail(emailval))
    {
        success=false
        seterror(email,'please enter a valid email')

    }
    else
    {
        setsuccess(email)
    }
    if (passwordval==="")
    {
        success=false
        seterror(password,'password is required')
    }
    else if(passwordval.length<8)
    {
        success=false
        seterror(password,'password is short')
    }
    else
    {
        setsuccess(password)
    }
    if (cpasswordval==='')
    {
        success=false
        seterror(cpassword,'password is required')
    }
    else if (cpasswordval!==passwordval)
    {
        success=false
        seterror(cpassword,'password is mismatched')
    }
    else{
        setsuccess(cpassword)
    }
    return success
}
function seterror(element,message)
{
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector('.error');
    errorelement.innerText=message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success')
}
function setsuccess(element)
{
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector('.error');
    errorelement.innerText='';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };