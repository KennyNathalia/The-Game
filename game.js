alert("Laten we beginnen");
var name = (prompt("Wat is je naam?"));
alert("Hey " + name)

//level 1
alert("Je wordt wakker door een vreemd geluid dat van buiten komt. \nJe ziet ook een fel licht.")
number = prompt("Je wilt kijken wat het is. \n1. Je gaat naar buiten om te kijken wat het is. \n2. Je negeert het allemaal en probeert verder te slapen. \n\n Maak je keuze! (typ 1 of 2)")

//level 2
if (number==1) {
	alert("Je gaat naar beneden!")
	number = prompt("Je wilt naar buiten gaan maar je moeder houdt je tegen. \nZe vindt het gevaarlijk en je mag niet weg \n1. Ga terug naar boven \n2. Je rent naar de deur en rent weg. \n\n Maak je keuze! (typ 1 of 2)")
//level 3
  if (number==1) {
	 alert("Je gaat teleurgesteld naar boven...")
	 number = prompt("Je wilt net gaan slapen maar je hoort een vreemde stem. \nJe moet het gewoon even zien. \nJe bent van plan om te ontsnappen. \n1. Je gaat via je raam naar buiten. \n2. Je gaat de sleutel zoeken om de deur te openen. \n\n Maak je keuze! (typ 1 of 2)")
    if (number==2) {
 	  alert("Je hebt besloten om de sleutel te zoeken om de deur te openen")
 	  alert("Je moeder is aan het slapen. \nAlsnog moet je oppassen want ze is een lichte slaper.")
 	  alert("Er ging opeens wat door je hoofd. \nOmdat je het allemaal vreemd is kan je ook voorbereid naar buiten en wat spullen pakken. \nOf je gaat gewoon gelijk voor de sleutel.")
 	  number = prompt("1. Je zoekt spullen voordat je gaat. \n2. Je gaat naar de plek waar de sleutel meestal is.")
 	   if (number==2) {
 	   	alert("Je zoekt de sleutel")
 	   	alert("...")
 	   	alert("De sleutel ligt er niet?!")
 	   	alert("Waarschijnlijk heeft je moeder de sleutel verstopt. \nMaar je bent niet dom. \nJe weet dat er een 2de sleutel is. \nHet enige probleem is dat je zusje die sleutel heeft.")
 	   	number = prompt("Je loopt je zusjes kamer binnen en ziet de sleutel. \nJe weet dat zij hem niet zomaar geeft. \n1. Je leidt haar af zodat je sleutel kan pakken. \n 2. Je zegt gewoon eerlijk wat je wilt doen. \n\nMaak je keuze! (typ 1 of 2)")
 	   	  if (number==1) {
  	        prompt("Leidt haar af!")
  	         alert("Ze is in slaap gevallen door jou argument. \nJe kan nu de sleutel pakken!")
  	         alert("Je trekt wat kleren aan en gaat opent de deur zachtjes. \nJe hoort de lift opeens en je weet dat hij bij jou verdieping stopt, waarschijnlijk de buurman. \n")
             alert("Je wilt geen gesprek met hem aan.")
             number = prompt("Wat ga je doen? \n1.Je negeert hem. \n2.Je gaat via de trap naar beneden. \n\nWat ga je doen?")
               if (number==2) {
               	alert("Je bent via de trap naar beneden gegaan. \nHij heeft je net niet gezien!")
               	alert("Je bent nu ook eindelijk buiten! \nJe kijkt om je heen en ziet overal politie")
               	number = prompt("Natuurlijk wil je niet gezien worden, wat ga je doen? \n1.Je geeft het op. \n2.Je gaat in sneaky mode. \n3.Je leidt de politie af")
               	  if (number==3){
               	  	alert("Je wijst iemand op straat aan en je schreeuwt dat hij er wat mee te maken heeft")
               	  	alert("De vreemdeling heeft er helemaal niks mee te maken maar de politie gelooft je. \nHet gekke is dat iedereen van de politie achter hem aan gaat. \nOokal had de vreemdeling er niks mee te maken, rent hij toch weg uit angst")
                    alert("Je bent bij het licht aangekomen")
                    alert("Het blijkt een meteor te zijn. \nJe hoorde het niet maar inplaats van je moeder, ben jij een diepe slaper. \nMisschien is het een probleem.")
                    alert("Je hebt heel de tijd een soort van drang om de meteor aan te raken")
                    number = prompt("Ga je het doen? \n1.Ja \n2.Nee. \n\nMaak je keuze! (typ 1 of 2)")
                      if(number == 1) {
                    	alert("Je raakt het aan en je voelt een vreemde kracht")
                    	number = prompt("Je hebt het gevoel dat je nu krachten hebt, proberen? \n1.Ja \n2.Nee")
                      	  if(number == 1){
                      	  	alert("Er ging wat kapot. \nJe hebt krachten.")
                      	  	alert("Nu komt de vraag.")
                      	  	number = prompt("Hero of Villian? \n1.Hero \n2.Villian.")
                      	  	  if (number == 1) {
                      	  	  	alert("Je bent een held! Iedereen herkent je nu!")
                      	  	  }
                      	  	  else{
                      	  	  	alert("Sorry maar dit spel heeft een goed einde")
                      	  	  	alert("GAME OVER")
                      	  	  }

                      }
                      else{
                      	alert("Waarom niet?")
                      	alert("GAME OVER")
                      }
                      }
                      else{
                      	alert("Altijd alles aanraken.")
                      	alert("GAME OVER")
                      }
                      		 
                      
               	    
               
             



                  }
                  else if (number==2){
                    alert("Je loopt naar het licht en elke keer als er politie langs loopt verstop je je. \nJe vindt het raar dat ze je niet zien") 
                    alert("Je ziet nog 1 agent. Het ziet er naar uit dat je met hem gaat vechten")
                    prompt("Ga je het doen? \n1.Ja \n2.Nee")
                    alert("Het maaktte niet uit wat je koos. \nJe mocht sowieso niet naar het licht en de agent schiet je neer")
                    alert("GAME OVER")

                  }else {
                  	alert("Dit spreekt voor zich")
                  	alert("GAME OVER")
                  }
               
             }else {
             	alert("Je bent snel langs hem gelopen. \nHij keek je nogal raar aan")
             	alert("Hij dacht dat je hem misschien niet hoorde. \nDus hij riep je naam heel hard")
             	alert("Je moeder hoorde dit en je bent gepakt")
             	alert("GAME OVER")
             }
          }else{
  	     alert("Je hebt gezegd wat je wilt doen en je zusje snitcht je.")
  	     alert("GAME OVER")
  }
       }else {
       alert("Terwijl je naar spullen zocht heeft je zusje je gesnitcht.")
       alert("GAME OVER")
 }
    }else {
 	 alert("Je woont in een flat. \nJe woont ook nog is op de 10de verdieping. \n\nDus je bent nogal dood.")
 	 alert("GAME OVER")
 }
 }else {
  alert("Je rent naar de deur maar hij zit opslot.\nJe moeder is kwaad en je hebt gefaald.")
  alert("GAME OVER")
 }
}else {
 alert("Je had niet kunnen slapen en je hebt zware hoofdpijn gekregen.")
 alert("GAME OVER")
 }



