function btnCalculer_onclick()
{ 

var nbr1,nbr2,symbole;

    nbr1 = parseFloat((document.getElementById("txtNbre1").value));
    nbr2 = parseFloat((document.getElementById("txtNbre2").value));
    symbole = parseFloat((document.getElementById("txtOperateur").value));
    reponse = calculerlesplus(nbr1,nbr2);
    rep = calculerlemulti(nbr1,nbr2);
    solution = calculerlediviser(nbr1,nbr2);
    repmoins = calculerlemoins(nbr1,nbr2);

    function calculerlesplus(nbr1,nbr2)

    {
        var reponse;

        reponse = nbr1 + nbr2;
        return reponse;
    }
    function calculerlemulti(nbr1,nbr2)

    {
        var rep;

        rep = nbr1*nbr2;
        return rep;
    }
    function calculerlediviser(nbr1,nbr2)

    {
        var solution;

        solution = nbr1/nbr2;
        return solution;
    }
    function calculerlemoins(nbr1,nbr2)

    {
        var repmoins;

        repmoins = nbr1-nbr2;
        return repmoins;
    }

    document.getElementById("lblMessage").innerHTML = reponse;
    document.getElementById("lblMessage").innerHTML = rep;
    document.getElementById("lblMessage").innerHTML = solution;
    document.getElementById("lblMessage").innerHTML = repmoins;
}