    function ValidateEmail(event)
    {

        var form = document.getElementById('form');
        var email = document.getElementById('email').value;
        var text = document.getElementById('text');
        var mailformat =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(email.match(mailformat))
    {
    // form.classList.add('valid');
    // form.classList.remove('invalid')
    text.innerHTML = "Your Email Address Is Valid"
    text.style.color = '#00ff00'
    text.style.fontSize = '15px';
    }
    else if(email == "")
    {
    // form.classList.remove('valid');
    // form.classList.add('invalid');
    text.innerHTML = "⚠️ Please Enter an Email Address";
    text.style.color = " yellow"
    text.style.fontSize = '15px';
    }
    else
    {
        // form.classList.remove('valid');
        // form.classList.remove('invalid');
        text.innerHTML = "Please Enter Valid Address";
    text.style.color = "#ff0000"
    text.style.fontSize = '15px';
    }
    }