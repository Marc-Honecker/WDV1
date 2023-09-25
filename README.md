# WDV1
Skript zur Vorlesung Wissenschaftliche Datenverarbeitung 1 von Prof. Dr. Martin H. Müser an der Universität des Saarlandes.
Der Inhalt befindet sich noch in Bearbeitung. 
Die Vorlesung wird zum ersten Mal im Sommersemester 2024 stattfinden.

[Hier klicken](https://marc-honecker.github.io/WDV1/intro.html) für die kompilierte Web-Version.



## Anweisungen für Mitarbeiter

### Installation

Folgende Module werden via `pip` installiert:  
`pip install jupyter-book`  
`pip install pyppeteer`  
`pip install ghp-import`  
`pip install sphinx-proof`  
`pip install docutils==0.17.1`

Alternativ:
`pip install -r /path/to/requirements.txt`

`requirements.txt` liegt im root-Verzeichnis des Repositories.

(im Fall von Anaconda wird `pip` in `/path/to/anaconda/bin` ausgeführt.)


### Arbeiten am Skript

Öffnen des Source Codes in Jupyter: `jupyter-notebook` (öffnet Jupyter im Browser)  
Kompilieren der HTML-Version: `jb build .`  
Öffnen der HTML-Version: `open _build/html/index.html`  
Kompilieren der PDF-Version: `jb build . --builder pdflatex`  
Öffnen der PDF-Version: `open _build/latex/WDV1.pdf`  
Aktualisieren der Web-Verison: `ghp-import -n -p -f _build/html` (auf dem main branch)  

Der branch `gh-pages` wird automatisch generiert und darf nicht manuell verändert werden!


### Konventionen

Für neue Arbeitseinheiten (Arbeit an einem bestimmten Kapitel) bitte einen neuen git branch anlegen mit Jahr und Monat im Namen, z.B. "23Mar_Plotting". 
Solche branches sollten solange sie verwendet werden regelmäßig mit dem main branch gemerged werden und geschlossen werden wenn nicht mehr benötigt.

Leerzeichen und Sonderzeichen in Dateinamen und Labels vermeiden.

Maximale Zeilenlänge von Code-Zellen ca. 80 Zeichen, damit sie im PDF ordentlich aussehen.