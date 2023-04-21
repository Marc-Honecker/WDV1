# WDV1
Skript zur Vorlesung Wissenschaftliche Datenverarbeitung 1 von Prof. Dr. Martin H. Müser an der Universität des Saarlandes.
Der Inhalt befindet sich noch in Bearbeitung. 
Die Vorlesung wird zum ersten Mal im Sommersemester 2024 stattfinden.

[Hier klicken](https://marc-honecker.github.io/WDV1/intro.html) für die kompilierte Web-Version.

## Anweisungen für Mitarbeiter

### Arbeiten mit dem Skript

Installation von jupyter-book mit Anaconda:  
`conda install -c conda-forge jupyter-book`  
`conda install -c conda-forge pyppeteer`  
`conda install -c conda-forge ghp-import`  

Installation von jupyter-book mit Python ohne Anaconda:  
`pip install jupyter-book`  
`pip install pyppeteer`  
`pip install ghp-import`  

Öffnen des Source Codes in Jupyter: `jupyter-notebook` (öffnet Jupyter im Browser)  
Kompilieren der HTML-Version: `jb build .`  
Öffnen der HTML-Version: `open _build/html/index.html`  
Kompilieren der PDF-Version: `jb build . --builder pdflatex`  
Öffnen der PDF-Version: `open _build/latex/WDV1.pdf`  
Aktualisieren der Web-Verison: `ghp-import -n -p -f _build/html` (auf dem main branch)  

Der branch `gh-pages` wird automatisch generiert und darf nicht manuell verändert werden!

### Konventionen

Maximale Zeilenlänge von Code: ca. 80 Zeichen, damit Code-Zellen auch im PDF ordentlich aussehen.

Leerzeichen und Sonderzeichen in Dateinamen und Labels vermeiden.

Für neue Arbeitseinheiten (Arbeit an einem bestimmten Kapitel) bitte einen neuen git branch anlegen mit Jahr und Monat im Namen, z.B. "23Mar_Plotting". 
Solche branches sollten solange sie verwendet werden regelmäßig mit dem main branch gemerged werden und geschlossen werden wenn nicht mehr benötigt.

