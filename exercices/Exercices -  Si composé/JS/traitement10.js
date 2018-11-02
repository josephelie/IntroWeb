function btnCalculer_onclick()
{ 
 	var age,categorie;

 	age = parseFloat((document.getElementById("txtAge").value));


    if (age >= 6 && age <= 8)
    {
        categorie ="pousin"
    }
    else if (age >= 9 && age <= 10 )
    {
        categorie = "pupille"
    }
    else if (age >=11 && age <= 12)
    {
        categorie = "minime"
    }
    else if (age >= 13)
    {
        categorie = "cadet"
    }
    document.getElementById("lblMessage").innerHTML = "votre groupe est " + "*" + categorie + "*";
}

