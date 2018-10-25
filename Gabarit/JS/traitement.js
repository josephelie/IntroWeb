function btnCalculer_onclick()
{ 
 	var adulte,etudiant,enfant,vieux;

    adulte  = parseFloat(document.getElementById("txt4").value);
    etudiant = parseFloat(document.getElementById("txt1").value);
    enfant = parseFloat(document.getElementById("txt2").value);
    vieux = parseFloat(document.getElementById("txt3").value);


    if (etudiant + adulte + vieux > 5)
    {
      rabais = 0.9;
    }
    else
    {
       rabais = 1;
    }

    montant = (etudiant * 12 + adulte * 20 + vieux * 15)* rabais;
    console.log("Vous devez payez " + montant);

}