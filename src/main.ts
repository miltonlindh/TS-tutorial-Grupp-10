//Kontaktbok med interfaces And types
//Det här programmet visar hur man kan använda typescript interfaces och types
//skapar en enkel kontaktbok som innehåller både personer och företag

//1. skapa grunden, interface för en kontakt
interface BaseContact {
  id: number; // unikt id för varje kontakt
  name: string; // namn på kontakten
  email?: string; //email är valfritt därför använder vi "?"
}

//2. skapa interface för personer, vi ärver BaseContact för att slippa skriva samma grej igen
//kind används för att skilja på person och företag
interface Person extends BaseContact {
  kind: "person";
  phone?: string;
}
//3. skapa interface för företag

interface Company extends BaseContact {
  kind: "company";
  orgNumber: string;
  contactPerson?: string;
}
//4. skapa en type alias som kombinerar både person och company
//det gör att vi kan spara båda typerna i samma lista
type Contact = Person | Company;

//5. en lista för att lagra alla kontakter
let contacts: Contact[] = [];
let idCounter = 1; //räknare som automatiskt ger nya kontakter ett unikt id

//6. funktion för att lägga till en person
function addPerson(name: string, email: string, phone?:string): void {
  const person: Person = {
    id: idCounter++, //ger et nytt id varje gång funktionen anropas
    kind: "person", //markerar att detta är en person
    name,
    email,
    phone
  };
  contacts.push(person); //lägg till personen i kontaktlistan
}
//7. funktion för att lägga till ett företag
function addCompany(name: string, email: string, orgNumber: string, contactPerson?: string):void {
  const company: Company = {
    id: idCounter++, 
    kind: "company",
    name,
    email,
    orgNumber,
    contactPerson
  };
  contacts.push(company);
  }

//8. funktion för att lista alla kontakter
function listContacts(): void {
  console.log("=== ContactBook ===");

  //loopar ingeom alla kontakter i listan
  contacts.forEach((contact) => {
    //om det är en person, skriv ut namn, email och telefon
    if (contact.kind === "person") {
      console.log(`${contact.name} (${contact.email}) Tel: ${contact.phone ?? "Ingen telefon"}`);
    }
    //om det är ett företag, skriv ut namn, email och orgnummer 
    else {
      console.log(`${contact.name} (${contact.email}) Org.nr: ${contact.orgNumber}`);
    }
  });
}

//9. exempel på hur vi använder funktionerna 

//lägger till två personer
addPerson("Test Person", "test@live.com", "076-3982711");
addPerson("Random Person", "random@hotmail.com");

//lägger till två företag
addCompany("Microsoft", "Contact@microsoft.se", "556677-8899", "Bill Gates");
addCompany("Ica AB", "contact@ica.se", "123456-7890");

//visar alla kontakter i kosnolen
listContacts();
