# WDV1
Skript zur Vorlesung Wissenschaftliche Datenverarbeitung 1 von Prof. Dr. Martin H. Müser an der Universität des Saarlandes.

## Anweisungen für Mitarbeiter

### Arbeiten mit dem Skript
Installation von jupyter-book mit Anaconda:  
`conda install -c conda-forge jupyter-book`  
`conda install -c conda-forge pyppeteer`  

Öffnen des Source Codes in Jupyter: `jupyter-notebook` (öffnet Jupyter im Browser)  
Kompilieren der HTML-Version: `jb build .`  
Öffnen der HTML-Version: `open _build/html/index.html`  
Kompilieren der PDF-Version: `jb build . --builder pdflatex`  
Öffnen der PDF-Version: `open _build/latex/WDV1.pdf`  

### Konventionen

Maximale Zeilenlänge von Code: ca. 80 Zeichen, damit Code-Zellen auch im PDF ordentlich aussehen.

Leerzeichen und Sonderzeichen in Dateinamen und Labels vermeiden.

Für neue Arbeitseinheiten (Arbeit an einem bestimmten Kapitel) bitte einen neuen git branch anlegen mit Jahr und Monat im Namen, z.B. "23Mar_Plotting". 
Solche branches sollten solange sie verwendet werden regelmäßig mit dem main branch gemerged werden und geschlossen werden wenn nicht mehr benötigt.

