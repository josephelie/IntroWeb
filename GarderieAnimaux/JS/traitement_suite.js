function btnCalculer_onclick()
{ 
 	var veterinaire,jour,TarifToilet,animal,Toiletage,rabais,horaire,tarif,tauxhoraire, montantfinal,montant,tps,tvq;

 	veterinaire = document.getElementById("lstVeterinaire").value;
 	jour = parseFloat(document.getElementById("txtNbreJours").value);


    if(document.getElementById("chkServ").checked === true )
    {
        TarifToilet = 5;
        Toiletage = "avec";
    }
    else
    {
        TarifToilet = 0;
        Toiletage = "sans";
    }

   if (document.getElementById("radChien").checked === true )
   {
       tarif = 18.50;
       animal = "chien";
   }
   else
   {
       tarif = 16.95;
       animal = "chat";
   }

   if(jour <= 1 && jour < 5)
   {
    rabais = 1;
   }
    if(jour <= 5 && jour < 10)
    {
        rabais = 0.95;
    }
    if(jour <= 10 && jour <= 30)
    {
        rabais = 0.90;
    }
    if(jour > 30)
    {
        rabais = 0.85;
    }
    horaire = document.getElementById("txtNbrheure").value;
    switch (veterinaire)
    {
        case "Audrey Bouchard" : nom = "Audrey Bouchard";
                        tauxhoraire = 25;
                        break;
        case "Stéphane Tremblay" :nom = "Stéphane Tremblay";
                         tauxhoraire = 35;
                         break;
        case "Maxime Simard" : nom = "Maxime  Simard";
                         tauxhoraire = 40;
                         break;
        case "Mélissa Caron" : nom = "Mélissa Caron";
                         tauxhoraire = 45;
                         break;
                         document.getElementById("saitama")
    }
    montant = jour * tauxhoraire * horaire + tarif;
    montant = montant * rabais;
    tps = montant * 0.05;
    tvq = montant * 0.09975;
    montantfinal = montant + tps + tvq ;
    document.getElementById("lblMessage").innerHTML ="Vètérinaire responsable est " + veterinaire + "." + "Le montant pour la garde de votre " + animal + " est de " + montantfinal + " pour " + jour + " jours," + Toiletage + " service de toilettage.";


}
