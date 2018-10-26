function btnCalculer_onclick()
{ 
 	var veterinaire,jour,TarifToilet,animal,Toiletage;

 	veterinaire = document.getElementById("lstVeterinaire").value;
 	jour = parseFloat(document.getElementById("txtNbreJours").value);


    if(document.getElementById("chkServ").checked == true )
    {
        TarifToilet = 5;
        Toiletage = "avec";
    }
    else
    {
        TarifToilet = 0;
        Toiletage = "sans";
    }

   if (document.getElementById("radChien").checked == true )
   {
       tarif = 18.50;
       animal = "chien";
   }
   else
   {
       tarif = 16.95;
       animal = "chat";
   }


    montant = tarif * jour;
    tps = montant * 0.05;
    tpq = montant * 0.09975;
    montantfinal = montant + tps + tpq;
    console.log("Vètérinaire responsable est " + veterinaire + "." + "Le montant pour la garde de votre " + animal + " est de " + montantfinal + " pour " + jour + " jours," + Toiletage + " service de toilettage.");


}
