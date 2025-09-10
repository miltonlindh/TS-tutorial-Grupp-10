# Kontaktbok: TypeScript med interfaces & types (Vite)

## Om projeket:
En kontaktbok exempel där vi sparar personer och företag i samma lista och skriver ut dem i webbläsarens console. Examplet visar hur man använder interfaces, union types och hur fältet kind hjälper TypeScript att förstå vilken typ något är.

### Tech stack:
* Language: TypeScript
* Byggt med vite
* target: browser (öppna console för att se resultatet)

#### Usage:
* Lägg till person (namn, email, valfri phone)
* Lägg till företag (namn, email, orgNumber, valfri contactPerson)
* Båda sparas i samma lista med type Contact = Person | Company
* Utskrift i console med enkel, läsbar text

##### Kom igång:
* Node.js 18+
* npm

Installera och kör
``` Bash
npm install # installera packages
npm run dev # starta dev server
```
Öppna länken från Vite (t.ex. http://localhost:5173) och öppna console (F12 → Console) för att se utskriften

##### Var finns koden?
* src/main.ts — hela kontaktboken (interfaces, types, funktioner)
* tsconfig.json — TypeScript‑inställningar (t.ex. strict: true)
* package.json — scripts (dev, build, preview)


 #### Hur funkar typerna: 

* BaseContact: gemensamma fält (id, name, email?).
* Person och Company extends BaseContact, så vi slipper skriva om samma fält
* Union type: type Contact = Person | Company gör att listan kan innehålla båda
* kind: "person" eller "company". När vi kollar contact.kind förstår TypeScript vilken typ det är, så vi kan skriva rätt fält utan fel
* Valfria fält med ? (t.ex. phone?)
* Nullish coalescing ??: visar en enkel fallback‑text om något saknas
  
 #### Testa:
  Lägg till en rad och se vad som händer:
  ``` main.ts
  addPerson("Din Person", "du@example.com", "070-1432167");
  ```
  ``` eller
  addCompany("Ditt Company", "info@example.se", "000000-0000");
  ```

 #### Licens:

 MIT License

Copyright (c) [2025] [Milton Lindh & Mohammed Yasin]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

