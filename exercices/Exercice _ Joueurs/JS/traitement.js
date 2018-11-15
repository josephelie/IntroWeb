var nomJ, point, nbturn, numJoueur;
var joueur = new Array(4);
var Pointjoueur = new Array(4);
numJoueur = 1;
nbturn = 0;

function btnAjouter_onclick()
{

    joueur[nbturn]= document.getElementById("txtNom").value;
    Pointjoueur[numJoueur] = document.getElementById("txtPoints").value;

    if(numJoueur < 5)
    {
        nbturn++;
        numJoueur ++;
        document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur " + numJoueur;
    }

    else if(numJoueur  > 3)
    {
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnRechercher").disabled = false;
        document.getElementById("btnAjouter").disabled = true;

        document.getElementById("lblNbreJoueur").innerHTML = "Tout les joueur ont été sélectionner !";
    }

}
function btnTrouverMoy_onclick()
{
    var total;
    total = 0;

    for(var i = 1; i < 5; i++)
    {
        total = total + Pointjoueur[i];
    }
    total = total / 4;
    document.getElementById("lblReponse").innerHTML = "La moyenne est de " + total + " points";
}
function btnTrouverMeilleur_onclick()
{
if(PointJoueur[0] < pointJoueur[1])
{
    document.getElementById("lblReponse").innerHTML = Pointjoueur[1];
}
else if(PointJoueur[1] < pointJoueur[2])
{
    document.getElementById("lblReponse").innerHTML = Pointjoueur[2];
}
else if(PointJoueur[2] < pointJoueur[3])
{
    document.getElementById("lblReponse").innerHTML = Pointjoueur[3];
}
else
{
    document.getElementById("lblReponse").innerHTML = Pointjoueur[4];
}

}
function btnTrouverPire_onclick()
{


}



