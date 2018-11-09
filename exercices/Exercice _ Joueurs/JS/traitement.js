var nom,points,cpt;

TabNomJoueur = new Array(4);
TabPoints = new Array(4);


nom = document.getElementById("txtNom").value;
point = document.getElementById("txtPoints").value;


cpt = 1;

function btnAjouter_onclick()
{

    if(cpt < 4)
    {
        cpt++;
        TabNomJoueur[cpt-1] = nom;
        TabPoints[cpt-1] = point;

    }
    document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur" + " " + cpt;
}
function btnTrouverMoy_onclick()
{


}

function btnTrouverMeilleur_onclick()
{

}

function btnTrouverPire_onclick()
{

}



