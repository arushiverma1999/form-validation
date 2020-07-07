const name=document.getElementById("name");
const email=document.getElementById("email");
const zip=document.getElementById("zip");
const number=document.getElementById("number");
name.addEventListener('blur',name_validate);
email.addEventListener('blur',email_validate);
zip.addEventListener('blur',zip_validate);
number.addEventListener('blur',number_validate);

function name_validate()
    {
        const name_value=name.value;
        const re=/^[a-zA-Z]{2,20}$/;
        if(!re.test(name_value))
        {
          document.querySelector(".text-name").innerHTML="<h4>Add name between 2 to 20 characters</h4>";
        }
        else{
            document.querySelector(".text-name").innerHTML="";
        }
    }

function email_validate()
    {
        const email_value=email.value;
        const re=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.[a-zA-Z]{2,5}$/;
        if(!re.test(email_value))
        {
          document.querySelector(".text-mail").innerHTML="<h4>Add a valid email id</h4>";
        }
        else{
            document.querySelector(".text-mail").innerHTML="";
        }
    }  

function zip_validate()
    {
        const zip_value=zip.value;
        const re=/^[0-9]{6}$/;
        if(!re.test(zip_value))
        {
          document.querySelector(".text-pin").innerHTML="<h4>Add postal code of 6 digits </h4>";
        }
        else{
            document.querySelector(".text-pin").innerHTML="";
        }
    }  

function number_validate()
    {
        const number_value=number.value;
        const re=/^[9876][0-9]{9}$/;
        if(!re.test(number_value))
        {
          document.querySelector(".text-number").innerHTML="<h4>Add phone number of 10 digits </h4>";
        }
        else{
            document.querySelector(".text-number").innerHTML="";
        }
    }  