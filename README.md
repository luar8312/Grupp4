# Grupp4 - Satans Demokrati


## Att tänka på
* När man commitar filer, ladda inte upp några filer som ligger i eran .idea-mapp då filerna i den mappen innehåller inställningar och liknande för er lokala IDE. Det kan skapa problem för andra om man drar ner någon annans .idea-mapp. Detsamma gäller om man kör någon annan IDE än Webstorm; ladda inte upp lokala inställningsfiler etc.
* Var noga med att kommentera koden så alla förstår vad den gör, det underlättar för samtliga om man ska in och redigera någon annans kod.
* Ha samma namn på script och html-filer som har med varandra att göra, samt lägg de filerna som hör ihop i samma katalog. T.ex. om man har en html-fil med namn main.html och en tillhörande script-fil så bör den script-filen namnges main.js.

##Kataloger och filer
- /server: här lägger man alla filer som innehåller kod som enbart körs på servern.
- /client: här hamnar all kod som körs på klienten.
    - /fb: här läggs filer som har med facebook-API att göra.
    - /layouts: mapp för layout-filer.
    - /styles: CSS-filer för design och layout av sidorna.
- /public: Här lägger man alla externa filer såsom bilder, fonts etc.
- /tests: filer för testning läggs här.