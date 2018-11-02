function btnCalculer_onclick()
{ 
 	var nbre1,nbre2,nbre3,nbre4;

    nbre1  = parseFloat((document.getElementById("txtNbre1").value));
    nbre2  = parseFloat((document.getElementById("txtNbre2").value));
    nbre3  = parseFloat((document.getElementById("txtNbre3").value));
    nbre4 = 3;


    if((nbre1 >= nbre2) && (nbre2 !== nbre3))
    {
        nbre4 = nbre4 +2 * nbre1;
    }
    else if((nbre1 == nbre2) || (nbre2 > nbre3))
    {
        nbre4 = nbre4 + nbre1;
    }
    else
    {
        nbre4 = nbre4 * nbre2 / nbre1 - nbre3;
    }
    document.getElementById("lblMessage").innerHTML = "" + nbre4;


}