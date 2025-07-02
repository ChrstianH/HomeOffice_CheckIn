# HomeOffice CheckIn
Schnupperaufgabe von Werkdigital

## Aufgabenstellung
Es soll eine Anwendung erstellt werden, die es Mitarbeitern ermöglicht, sich im HomeOffice anzumelden und die automatisch die Zeiten an das Personalbüro übermittelt.
Dazu soll der Mitarbeiter sich zuerst einloggen, dann die Möglichkeit haben seine HomeOffice Zeit zu starten, sie wieder zu stoppen und sich für verschiedene Tag eine Übersicht ausgeben zu lassen. 
Beim Stoppen der HomeOffice-Tätigkeit soll automatisch eine Mail an das Personalbüro verschickt werden.

Datenbank: **MongoDB** ![MongoDB Logo](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) <br>
Webserver: **Node.js** ![Node.js Logo](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) <br>
Frontend:  **Angular** ![Angular Logo](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) <br>

Bearbeitungsstand: Eine MongoDB wurde erstellt mitzwei Collections, ```users``` und ```times```. Ein Login-Formular wurde erstellt, mit Name (```username```) und Passwort (```password```). Der Login-Button überliefert die Daten an den Server. Der Server vergleicht die 
Anmeldedaten und speichert im Erfolgsfall den Nutzer im localStorage.
