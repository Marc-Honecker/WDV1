Search.setIndex({"docnames": ["Notebooks/CurveSketching", "Notebooks/HelloWorld", "Notebooks/IO", "Notebooks/Int_and_Diff", "Notebooks/ODEs", "README", "intro"], "filenames": ["Notebooks/CurveSketching.ipynb", "Notebooks/HelloWorld.ipynb", "Notebooks/IO.ipynb", "Notebooks/Int_and_Diff.ipynb", "Notebooks/ODEs.ipynb", "README.md", "intro.md"], "titles": ["Kurvendiskussion und Optimierung", "Erste Schritte in Python", "Lesen und Schreiben von Dateien", "Numerisches Integrieren und Differenzieren", "Gew\u00f6hnliche Differential Gleichungen", "WDV1", "Vorbemerkungen zu Kurs und Skript"], "terms": {"ist": [0, 1, 2, 3, 4, 6], "traditionel": 1, "erst": 6, "welch": [1, 2, 3], "man": [0, 1, 2, 3], "einer": [0, 1, 2, 3], "neuen": [1, 2, 5, 6], "programmiersprach": [1, 6], "schreibt": 1, "aber": [0, 1, 2, 3, 4, 6], "wa": [1, 2, 3, 4, 6], "\u00fcberhaupt": 2, "dies": [0, 1, 2, 3, 6], "soll": [1, 6], "tats\u00e4chlich": [1, 2, 3], "nur": [0, 1, 2, 3], "ausgeben": [], "klingt": 6, "sehr": [1, 2, 3, 6], "simpel": 1, "es": [0, 1, 2, 3, 6], "relativ": [0, 1], "schnell": 6, "auch": [0, 1, 2, 3, 4, 5, 6], "hilft": [], "dennoch": 1, "sich": [1, 2, 3, 4, 5, 6], "bereit": [0, 1, 3, 4, 6], "mit": [0, 1, 2, 3, 4, 6], "grunds\u00e4tzlichen": [], "strukturen": 1, "vertraut": 1, "zu": [0, 1, 2, 3, 4], "machen": [1, 2, 3], "deshalb": [2, 3, 6], "wird": [0, 1, 2, 3, 4, 5, 6], "besonder": [], "diesem": [0, 1, 2, 3, 4, 6], "kur": [1, 2], "der": [0, 1, 3, 4, 5, 6], "startpunkt": [], "f\u00fcr": [0, 1, 2, 3, 6], "sein": [0, 1, 2, 3, 6], "hier": [1, 2, 3, 5], "beginnt": 1, "def": [0, 1, 3], "wir": [0, 1, 2, 3, 4, 6], "geben": [2, 6], "au": [0, 1, 2, 3, 4, 6], "print": [1, 2, 3], "starten": 0, "klein": [1, 3], "besteht": [2, 6], "im": [0, 1, 2, 3, 5, 6], "wesentlichen": [1, 2], "drei": [1, 6], "komponenten": [], "einem": [0, 1, 2, 3, 4, 5, 6], "kommentar": 1, "hierbei": [1, 2, 3, 4], "handelt": [1, 3], "um": [0, 1, 2, 3], "ein": [0, 1, 2, 3, 4, 6], "notiz": 1, "de": [1, 2, 3, 4, 5, 6], "programmier": 1, "eingeleitet": [], "di": [0, 1, 2, 3, 4], "durch": [0, 1, 2, 3, 6], "symbol": 1, "all": [0, 1, 2, 6], "hinter": 1, "sybmol": [], "geschrieben": 2, "steht": [1, 2], "komplett": 3, "bei": [0, 1, 2, 3, 4, 6], "\u00fcbersetzung": [], "ignoriert": 1, "funktionendefinit": [], "damit": [0, 1, 2, 3, 4, 5, 6], "funktionen": [1, 2, 6], "nutzen": [0, 1, 2, 3], "kann": [0, 1, 2, 3], "muss": [1, 2], "vorher": [], "definieren": [], "danach": 3, "beliebig": 1, "oft": [1, 2], "benutzen": [1, 2, 4], "noch": [0, 1, 2, 4, 5, 6], "erw\u00e4hnen": [], "dass": [0, 1, 2, 3, 4, 6], "dient": [0, 1, 6], "allgemeinen": [1, 2, 6], "al": [1, 2, 3, 6], "syntax": [1, 6], "immer": [1, 2, 3, 4], "gleich": 1, "zuerst": 0, "schl\u00fcsselwort": 1, "name": [1, 2, 4], "funktion": [0, 1, 2, 3], "gefolgt": [], "von": [0, 1, 3, 4, 5], "doppelpunkt": [], "funktionenaufruf": [], "streng": 2, "genommen": [], "sind": [1, 2, 3, 6], "zwei": [1, 2, 3, 6], "aufruf": 1, "zeil": 1, "3": [1, 2, 3, 4, 6], "und": [1, 4, 5], "zweit": [], "5": [1, 2, 3], "an": [0, 1, 2, 3, 4, 5, 6], "den": [0, 1, 2, 3, 4, 6], "inhalt": [1, 5, 6], "rau": [], "startet": 1, "gibt": [0, 1, 2], "dann": [0, 1, 2, 3, 4, 6], "au\u00dferdem": [], "dem": [0, 1, 2, 3, 4, 6], "aufmerksamen": [], "leser": 3, "aufgefallen": [], "nicht": [1, 2, 3, 4, 5, 6], "definiert": [], "hatten": [], "obwohl": [], "doch": [], "eigentlich": 1, "jede": [1, 2], "definert": [], "m\u00fcsste": [], "allerd": [1, 2], "wenig": [1, 3], "ander": [0, 1, 2, 3, 6], "liefert": [], "direkt": [1, 2, 3], "sie": [1, 2, 5, 6], "einfach": [0, 1, 2, 4, 6], "verf\u00fcgbar": 2, "weiter": [0, 1, 2], "solcher": 1, "gegeben": [0, 1, 4, 6], "zeit": [0, 2], "eingef\u00fchrt": 0, "werden": [0, 1, 2, 3, 4, 5, 6], "notwendig": [], "bald": [], "mehr": [1, 2, 3, 5, 6], "genutzt": [1, 2], "hiermit": [0, 2], "definit": [1, 2, 3], "gezeigt": 1, "wurd": [1, 4], "meisten": [1, 2], "anderen": [0, 4], "programmiersprachen": 6, "einstieg": [], "verlangt": [], "somit": [2, 3], "haben": [0, 1, 2, 3, 4, 6], "solch": [0, 2, 4, 5], "schon": [0, 2, 3], "einmal": [0, 2], "gesehen": [], "einig": 1, "beispiel": [0, 1, 2, 3], "w\u00e4ren": 1, "zur": [0, 1, 3, 5, 6], "illustr": 1, "c": [1, 2, 5, 6], "includ": 1, "stdio": 1, "h": [0, 1, 2, 5], "int": [1, 3], "printf": 1, "n": [0, 1, 5], "return": [0, 1, 3], "0": [0, 1, 2, 3, 4], "iostream": 1, "std": 1, "cout": 1, "endl": 1, "java": 1, "class": 1, "public": 1, "static": 1, "void": 1, "string": 1, "arg": 1, "system": [1, 6], "out": 1, "println": 1, "rust": 1, "fn": 1, "zum": [0, 2, 4, 5], "betrachten": [1, 3], "folgend": [0, 1], "prgramm": [], "k\u00f6nnen": [0, 1, 2, 3, 4, 6], "mehrfach": 4, "sogar": 2, "\u00f6fter": [], "auf": [0, 1, 2, 3, 4, 5, 6], "dauer": [], "ganz": [2, 3, 4, 6], "sch\u00f6n": [], "schreibaufwendig": [], "h\u00e4lt": [], "hierf\u00fcr": [1, 2, 6], "etwa": [1, 2], "vereinfachend": [], "also": [1, 2, 3, 4, 6], "schreiben": [1, 4, 6], "unser": [0, 1, 2, 3, 4], "letzt": 1, "i": 1, "rang": 1, "sogenannt": [1, 2], "schleif": [1, 3], "weitem": [], "meist": 1, "genutzten": [], "wie": [0, 1, 2, 3, 4, 6], "oben": [0, 1, 2], "beiden": [2, 3, 4], "auff\u00e4lligen": [], "einzeln": [], "erl\u00e4utert": 1, "reih": 1, "oder": [1, 2, 3, 6], "folg": 1, "zahlen": 1, "zur\u00fcck": [1, 2, 4], "insgsamt": 1, "verschieden": [1, 6], "f\u00e4lle": 1, "beginnend": 1, "endend": 1, "1": [0, 1, 2, 5, 6], "insgesamt": [0, 1, 2], "erzeugt": 1, "b": [0, 1, 2, 3, 5, 6], "inc": 1, "wobei": 1, "hochgez\u00e4hlt": 1, "wenn": [1, 2, 3, 5], "ergbni": [], "so": [1, 2, 3, 4], "m\u00f6glich": [1, 3], "zahl": 1, "gilt": 1, "kleiner": 3, "zur\u00fcckgegeben": [], "In": [0, 1, 2, 3, 4, 6], "code": [0, 1, 2, 3, 4, 5, 6], "sieht": [0, 2, 3, 4], "vereinfacht": [], "folgt": [0, 2, 3, 4], "my_rang": [], "start": [], "end": [2, 4, 6], "m\u00fcssen": [1, 2, 3, 6], "un": [0, 1, 2, 3, 4], "berechneten": 4, "merken": [1, 2], "sogenannten": 1, "list": [1, 4], "sp\u00e4ter": [1, 2, 4], "dazu": [0, 1, 2, 6], "range_list": [], "while": 1, "brauchen": [0, 1, 3, 4, 6], "moment": [2, 6], "wirklich": 2, "interessieren": [], "art": 6, "f\u00fchrt": [], "solang": [1, 4, 5], "einen": [1, 2, 3, 4, 5, 6], "bestimmten": [2, 3, 5], "programmteil": [], "wieder": [0, 2, 3], "bi": [0, 1], "bestimmt": 0, "bedingung": [0, 1], "erf\u00fcllt": 1, "sobald": 1, "brechen": [], "ab": [1, 3], "append": [], "jetzt": [0, 1, 2, 3, 4], "letzten": [2, 6], "schnipsel": [], "f\u00fchren": 1, "abschnitt": [1, 3], "genauso": 2, "lang": 1, "unserem": 0, "jedoch": [1, 2], "vorsicht": 1, "my_never_ending_loop": 1, "test": [], "gleichheit": 1, "testen": [], "ob": [1, 3], "zuordnung": [], "wert": [1, 3, 4], "myvar": 1, "sollt": [0, 1, 3], "ziemlich": 3, "offensichtlich": [0, 1, 4], "niemal": 1, "enden": 1, "deswegen": [], "f\u00e4llen": [], "eher": [1, 2, 6], "selten": [], "gesicht": [], "bekommen": [2, 3], "beschr\u00e4nken": 2, "haupts\u00e4chlich": [], "hilflo": [], "fall": [1, 2, 3, 4], "sehen": [0, 2, 3], "sollten": [1, 5, 6], "schauen": [0, 2, 3, 4], "erweiterung": 2, "m\u00f6chte": [0, 1, 2, 3], "allen": [1, 3], "tagen": [], "au\u00dfer": 1, "montag": 1, "beauti": 1, "implementierung": [1, 3], "w\u00e4re": [1, 6], "import": [0, 1, 2, 3, 5], "datetim": 1, "weekdai": 1, "6": [0, 1, 2, 3, 4], "sonntag": 1, "todai": 1, "einzig": [1, 4], "neue": [1, 2, 5, 6], "selbst": [0, 6], "erkl\u00e4rend": [], "fals": 1, "englisch": [], "falsch": 1, "bedinung": [], "zweig": 1, "ausgef\u00fchrt": 1, "gegenst\u00fcck": [], "true": 1, "wahr": 1, "bleiben": [], "heut": 2, "bek\u00e4men": [], "ausgab": 4, "unter": [1, 3, 4, 6], "begriff": [1, 2], "booleschen": 1, "zusammengefasst": 1, "\u00fcbrigen": 1, "denn": [1, 2, 3], "auswertet": 1, "schleifenrumpf": 1, "abgebrochen": 1, "restlich": [], "nach": [1, 2, 3, 4], "leer": [], "grundlegend": 1, "einleitung": 1, "abgeschlossen": [0, 1], "n\u00e4chsten": [0, 1], "kapiteln": [0, 1], "erlernten": 1, "f\u00e4higkeiten": 1, "problem": [1, 2, 3, 6], "physikalischem": 1, "hintergrund": [1, 6], "ebenso": 1, "unn\u00f6tig": 1, "darf": [1, 5], "wegelassen": 1, "vorlesung": [3, 5, 6], "wissenschaftlich": [5, 6], "datenverarbeitung": [2, 5, 6], "prof": 5, "dr": 5, "martin": 5, "m\u00fcser": 5, "universit\u00e4t": 5, "saarland": 5, "instal": 5, "jupyt": 5, "book": 5, "anaconda": [5, 6], "conda": 5, "forg": 5, "pyppet": 5, "\u00f6ffnen": [2, 5], "sourc": 5, "notebook": 5, "\u00f6ffnet": 5, "browser": 5, "kompilieren": 5, "html": 5, "version": [5, 6], "jb": 5, "build": 5, "open": 5, "_build": 5, "index": [1, 5], "pdf": 5, "builder": 5, "pdflatex": 5, "latex": 5, "maximal": 5, "zeilenl\u00e4ng": 5, "ca": 5, "80": 5, "zeichen": [2, 5], "zellen": 5, "ordentlich": 5, "aussehen": [1, 2, 5], "leerzeichen": 5, "sonderzeichen": 5, "dateinamen": 5, "label": 5, "vermeiden": 5, "arbeitseinheiten": 5, "arbeit": [2, 5], "kapitel": [0, 2, 3, 4, 5], "bitt": 5, "git": 5, "branch": 5, "anlegen": [3, 5], "jahr": 5, "monat": 5, "namen": [1, 2, 5], "z": [1, 2, 5, 6], "23mar_plot": 5, "verwendet": [1, 5], "regelm\u00e4\u00dfig": 5, "main": [1, 5], "gemerg": 5, "geschlossen": 5, "ben\u00f6tigt": 5, "ihnen": [1, 4, 6], "beigebracht": 6, "comput": [0, 1, 3, 6], "unterst\u00fctzung": 6, "divers": 6, "f\u00e4cher": 6, "verwenden": 6, "die": [0, 3, 4, 5, 6], "best": 6, "hat": [0, 1, 2, 6], "momentan": 6, "python": [2, 3, 4, 5], "herauskristallisiert": 6, "da": [2, 3, 4, 6], "dieser": [0, 1, 2, 3, 4, 6], "fokussiert": 6, "seit": [0, 1, 3, 6], "einigen": 6, "jahren": [1, 4, 6], "state": 6, "Of": 6, "The": 6, "viel": [1, 2, 3, 6], "bereich": [0, 2, 3, 6], "sei": [0, 2, 3, 6], "scientif": 6, "vor": [0, 1, 4, 6], "allem": [1, 6], "ki": 6, "siegeszug": 6, "absehbar": 6, "ganzheitlichen": 6, "ansatz": 6, "gew\u00e4hlt": 6, "\u00fcblichen": 6, "programmierkursen": 6, "abweicht": 6, "lernen": 6, "\u00fcbertragenen": 6, "sinn": [1, 2, 6], "zun\u00e4chst": [0, 1, 2, 3, 6], "s\u00e4tze": 6, "ohn": [1, 2, 5, 6], "vielen": [1, 6], "grammatikalischen": 6, "begriffen": 6, "konfrontiert": 6, "sollen": 6, "lage": [0, 6], "versetzt": 6, "kontinuierlich": 6, "bibliotheken": [2, 3, 6], "herangef\u00fcrht": 6, "beispielen": 6, "numerik": 6, "statistik": 6, "formlo": 6, "gelehrt": 6, "aufgezeigt": 6, "herk\u00f6mmlichen": 6, "programmen": [2, 6], "\u00fcblicherweis": 6, "gel\u00f6st": 6, "w\u00fcrden": 6, "am": [1, 6], "wdv": 6, "echt": 6, "b\u00fccher": 6, "quer": 6, "lesen": 6, "erlernen": 6, "hausaufgaben": 6, "testat": 6, "deren": [1, 6], "bestehen": 6, "erlaubt": 6, "finalen": 6, "leistungkontrol": 6, "klausur": [3, 6], "teilzunehmen": 6, "weder": 6, "testaten": 6, "klausuren": 6, "paradox": 6, "sonst": 6, "mogeln": 6, "leistungkontrollen": 6, "vermutlich": 6, "manchmal": 6, "teilen": [0, 1, 6], "teil": [0, 1, 6], "vorhersagen": 6, "dei": 6, "dessen": [2, 6], "ausf\u00fchrung": [1, 6], "passiert": [1, 6], "pseudo": [4, 6], "umst\u00e4nden": 6, "aufgefordert": 6, "fehler": [1, 3, 4, 6], "gegebenen": 6, "markieren": 6, "verbessern": [3, 6], "kein": [1, 2, 6], "lehrbuch": 6, "detail": 6, "regeln": 6, "\u00fcbungen": 6, "erkl\u00e4rt": 6, "angegebenen": 6, "referenzen": 6, "nachgeschlagen": 6, "ansammlung": 6, "kleinen": [2, 6], "kommentierten": 6, "schnipseln": 6, "lehrstunden": 6, "je": [1, 6], "45": 6, "minuten": 6, "stund": 6, "besprochen": 6, "2": [0, 1, 2, 3, 4, 6], "vermittelt": [1, 6], "studierend": 6, "l\u00f6sung": [1, 2, 3, 6], "aufgabenblatt": 6, "bginnen": 6, "dabei": [0, 1, 6], "unklarheiten": 6, "schwierigkeiten": 6, "anwesenden": 6, "hiwi": 6, "stellen": [0, 3, 4, 6], "hello": [], "world": [], "tut": 1, "text": 1, "auszugeben": 1, "aufgab": 1, "anpassen": 1, "ihren": 1, "computerprogrammen": 1, "rein": 1, "l\u00e4sst": [1, 4], "einzigen": [1, 3], "l\u00f6sen": [1, 3, 4], "lerninhalt": 1, "vordefinierten": 1, "dt": 1, "drucken": 1, "argument": 1, "druckenden": 1, "nimmt": 1, "stell": [0, 1, 2], "\u00fcbernehmen": 1, "programmierersprachen": 1, "mathematisch": 1, "notat": 1, "nomenklatur": 1, "x": [0, 1, 2, 3, 4], "ebenfal": 1, "f": [0, 1, 3, 5], "bezeichnet": 1, "inspiriert": 1, "variant": 1, "k\u00f6nnte": [1, 2], "geschieht": 1, "indent": 1, "zeilen": 1, "einheit": 1, "geh\u00f6ren": 1, "stet": 1, "identisch": 1, "einr\u00fccken": 1, "gekennzeichnet": 1, "zuvor": [1, 2], "definierten": [1, 2], "korrekt": 1, "verpflichtend": 1, "wesentlich": [1, 2], "gegensatz": [1, 2], "fast": 1, "wo": [1, 2], "lediglich": [1, 2], "konvent": 1, "besseren": 1, "lesbarkeit": 1, "darstellt": 1, "zugeh\u00f6rigkeit": 1, "bl\u00f6cken": 1, "geschweift": 1, "klammern": 1, "signalisiert": 1, "vorgeschrieben": 1, "h\u00e4ufig": 1, "nat\u00fcrlich": [0, 1, 3], "exit": 1, "zur\u00fcckgibt": 1, "anhand": [1, 4], "au\u00dferhalb": 1, "feststellen": 1, "durchgelaufen": 1, "zwischenschritt": 1, "beendet": 1, "neben": 1, "anf\u00e4ngern": 1, "empfohlen": 1, "taschenrechn": 1, "programmieren": 1, "empfinden": 1, "verarbeitung": 1, "eingaben": 1, "nutzer": 1, "unwichtig": 1, "diesen": [1, 2, 6], "halten": 1, "selbstverst\u00e4ndlich": [1, 3, 4], "grundrechenarten": 1, "beherrschen": 1, "wollen": [1, 2, 3], "nun": [0, 1, 4], "erweitern": [1, 3], "sodass": 1, "welt": 1, "sondern": 1, "personen": 1, "begr\u00fc\u00dfen": 1, "zwar": 1, "wochentag": 1, "abh\u00e4ngig": 1, "freundlichkeit": 1, "letzter": 1, "bedeutet": 1, "gef\u00fchlen": 1, "entwickeln": 1, "fallunterscheidungen": 1, "macht": 1, "studenten": 1, "student": 1, "tom": 1, "anna": 1, "peter": 1, "julia": 1, "kommen": [1, 2, 3], "mehrer": 1, "konzept": 1, "vom": 1, "beim": [1, 3], "ausf\u00fchren": [1, 2], "hinwei": 1, "menschen": 1, "liest": 1, "variabl": 1, "zuordnen": 1, "nie": 1, "programmiert": 1, "wundern": 1, "vielleicht": [0, 1], "gleichheitszeichen": 1, "genau": [0, 1, 3], "mathematischen": 1, "zuordnungssymbol": 1, "contain": 1, "beh\u00e4lter": 1, "eckigen": 1, "eintr\u00e4g": 1, "enthalten": [1, 6], "enthaltenen": 1, "objekt": 1, "genannt": 1, "besser": [1, 2], "varianten": 1, "folgenden": [1, 2], "zugriff": 1, "element": [1, 2], "geordneten": 1, "containern": 1, "nummeriert": 1, "teilt": 1, "zusammenf\u00fcgen": 1, "l\u00e4ngeren": 1, "oper": 1, "wahrscheinlich": 1, "vorstellen": 1, "obig": [0, 1], "method": [1, 3], "begr\u00fc\u00dfung": 1, "aller": [1, 2, 3], "m\u00fchsamer": 1, "l\u00e4nger": 1, "grund": [1, 3], "bieten": [1, 2, 6], "st\u00e4ndig": 1, "wiederholend": 1, "abl\u00e4uf": 1, "len": 1, "fest": [1, 2], "typ": 1, "welcher": 1, "einger\u00fcckten": 1, "wiederholt": 1, "nennt": 1, "laufvari": 1, "wiederholung": 1, "iter": 1, "beschreibt": 1, "eingesetzt": 1, "kurz": [1, 2], "length": 1, "l\u00e4nge": 1, "anzahl": [1, 2], "elementen": 1, "aufgrund": [1, 6], "ihrer": 1, "h\u00e4ufigen": 1, "anwendung": [1, 3, 6], "genauer": [0, 1, 2, 3], "ganzen": 1, "stellt": [1, 2], "daf\u00fcr": [1, 2, 4], "selb": [], "anzahlen": 1, "argumenten": 1, "nehmen": [0, 1, 2], "definitionen": 1, "vielzahl": 1, "denen": 1, "option": 1, "bzw": 1, "default": 1, "dar": 1, "aufruft": 1, "bestenfal": 1, "altmodisch": 1, "bezeichnen": 1, "h\u00f6here": 1, "unterscheiden": 1, "maschinennahen": 1, "dadurch": [1, 3], "nah": [0, 1], "menschlichen": 1, "sprach": 1, "h\u00f6rt": 1, "umst\u00e4ndlich": 1, "sagen": [1, 2, 3], "nat\u00fcrlichen": 1, "aufsteigend": 1, "reihenfolg": 1, "begr\u00fc\u00df": 1, "ich": 1, "betreffenden": 1, "meiner": 1, "gen\u00fcgt": 1, "studentenlist": 1, "denken": 1, "er": [0, 1, 4], "unten": [1, 2], "durchgeht": 1, "\u00fcber": [1, 3, 4, 6], "iterieren": 1, "jeden": [1, 3], "beliebigen": 1, "student_list": 1, "greet": 1, "ding": [0, 1], "aufzeigen": 1, "vergleich": 1, "objekten": 1, "operatoren": 1, "funktioniert": 1, "mathematik": 1, "vergeben": 1, "nutzt": [1, 2], "stattdessen": 1, "pr\u00fcfung": 1, "gleichung": [1, 3], "ausdruck": 1, "ansonsten": 1, "ihm": 1, "anweisen": 1, "gro\u00dfer": [1, 2], "kommt": [1, 2], "gro\u00dfe": 1, "verantwortung": 1, "obigen": [0, 1, 3], "w\u00fcrde": 1, "abbrechen": 1, "tastenkombin": 1, "strg": 1, "unbedingt": 1, "zumindest": [1, 2], "vorbereitet": 1, "mal": [1, 5], "begegnen": 1, "basierend": 1, "zuletzt": 1, "eingef\u00fchrten": 1, "realisieren": [0, 1, 2], "wochentagen": 1, "freundlichen": 1, "zeigt": 1, "zus\u00e4tzlich": 1, "modulen": 1, "importieren": [1, 2, 3], "modul": 1, "vordefiniert": 1, "basissprach": 1, "entwed": 1, "umgebung": 1, "environ": 1, "installiert": 1, "py": 1, "datei": 1, "aktuellen": 1, "arbeitsverzeichni": 1, "finden": [0, 1, 6], "hervorragend": 1, "angebot": 1, "pluspunkt": 1, "popul\u00e4rsten": 1, "member": 1, "mitgliedsfunkt": 1, "nutz": 1, "zwischen": [1, 2], "modulnam": 1, "funktionsnam": 1, "wissen": [0, 1], "warum": [1, 2], "gleichen": 1, "wiederum": [1, 2], "besitzt": 1, "orientierten": 1, "besond": 1, "hohe": 1, "abstraktionsniveau": 1, "bietet": 1, "anfang": 1, "verwirrend": 1, "wirkt": 1, "gute": [1, 3], "leider": [1, 2, 3], "eben": 1, "erfordert": 1, "inhalten": 1, "einger\u00fcckt": 1, "block": 1, "___": 1, "ausgewertet": 1, "andernfal": 1, "ergebni": [1, 3], "angezeigt": 1, "sicher": 1, "dokument": 1, "aktualisiert": 1, "operationen": 1, "eingangsgr\u00f6\u00df": 1, "haub": 1, "digitaltechnik": 1, "ausschlie\u00dflich": 1, "informatik": 1, "veranstaltung": 1, "verst\u00e4ndni": 1, "variablen": 1, "ausreichen": 1, "geht": 1, "dahint": 1, "befindet": [2, 5], "bearbeitung": [5, 6], "ersten": 5, "sommersemest": 5, "2024": 5, "stattfinden": 5, "klicken": 5, "kompiliert": 5, "web": 5, "ghp": 5, "pip": 5, "aktualisieren": 5, "verison": 5, "p": 5, "gh": 5, "page": 5, "automatisch": 5, "generiert": 5, "manuel": 5, "ver\u00e4ndert": 5, "kostenlosen": 6, "onlin": 6, "kurs": 6, "w3": 6, "inventwithpython": 6, "guten": 6, "\u00fcberblick": 6, "speziel": 6, "spezialisiert": 6, "handbuch": 6, "christian": 6, "hill": 6, "empfehlen": 6, "popularit\u00e4t": 6, "erdenklichen": 6, "jederzeit": 6, "hilf": 6, "kurzen": 6, "googl": 6, "Suche": 6, "frage": [2, 6], "chatgpt": 6, "ben\u00f6tigen": 6, "\u00fcbungsaufgaben": 6, "funktionierend": 6, "python3": 6, "inklus": 6, "zusatzpaketen": 6, "distribut": 6, "laden": [2, 6], "entsprechend": [4, 6], "ihr": 6, "herunt": 6, "installieren": 6, "schritt": [0, 6], "learn": 6, "program": 6, "sci": 6, "2015": 6, "doi": 6, "10": [2, 3, 6], "1017": 6, "cbo9781139871754": 6, "wichtig": [0, 2], "bestandteil": 2, "wissenschaftlichen": 2, "zweifel": 2, "egal": 2, "daten": 2, "bilddaten": [], "quantit": 2, "qualit": 2, "usw": [], "besch\u00e4ftigen": 2, "messbar": 2, "beschreibend": 2, "grunds\u00e4tzlich": 2, "festplatt": 2, "ssd": [], "konkret": 3, "persistent": [], "speichermedium": [], "vorliegen": [], "mag": 2, "engl": 2, "storag": [], "sog": 2, "hauptspeich": 2, "memori": 2, "geladen": 2, "dort": [0, 2], "berechnungen": 2, "alldi": [], "anwenden": [], "darum": 0, "k\u00fcmmern": [0, 2, 3], "ordner": 2, "organisiert": [], "dateisystem": 2, "window": 2, "maco": 2, "linux": 2, "ordnern": 2, "d\u00fcrfte": 2, "graphisch": 2, "arten": [], "pfaden": 2, "rel": 3, "kompletten": 2, "pfad": 2, "ausgehend": [], "root": [], "directori": 2, "angeben": 2, "besonderen": 2, "zweck": [], "reicht": 2, "home": [], "unix": [], "user": [], "your": [], "angegeben": [], "eingehen": [], "admonit": [], "vs": [], "tip": [], "dropdown": [], "dateien": 6, "tiefer": [], "gr\u00fcnde": [], "sowohl": [], "ins": 2, "gehen": [], "betriebssystem": [], "recht": 3, "weit": [], "auseinand": [], "bedarf": [], "materi": [], "einzusteigen": [], "simpl": [], "jeder": 0, "gewarnt": [], "liegen": 2, "irgend": [], "ver\u00e4ndern": [], "irreparablen": [], "sch\u00e4den": [], "eurem": [], "schlimsten": [], "anschluss": [], "boot": [], "f\u00e4hig": [], "exakt": 3, "wei": [], "unber\u00fchrt": [], "lassen": [], "quasi": [], "bezugspunkt": [], "programm": 2, "zugreifen": 2, "insbesonder": 2, "dateiverwaltungsprogramm": 2, "spiel": 2, "hierarchi": 2, "angeordnet": 2, "durchlaufen": 2, "hypothetisch": 2, "ordnerstruktur": 2, "unseren": [2, 3], "bedeutung": 2, "angegnommen": 2, "gesamt": 2, "befinden": 2, "m\u00f6chten": [2, 3, 4], "d": [2, 3], "lautet": 2, "A": 2, "trennzeichen": 2, "beachtung": 2, "geschenkt": 2, "realen": 2, "leben": 2, "gesamten": 2, "normal": 2, "wohl": 2, "f\u00e4llt": 2, "k\u00fcrzer": 2, "vorherig": 2, "liegt": 2, "n\u00e4mlich": 2, "punkt": [0, 2, 3], "betrachen": 2, "umgekehrten": 2, "relativen": 2, "v\u00f6llig": [2, 3], "verstehen": 2, "einsetzen": 2, "abnehmen": 2, "klassischen": 2, "seltsamen": 2, "momentanen": [2, 4], "absoluten": 2, "restlichen": 2, "einblendet": 2, "platzhalt": [], "eltern": 2, "parent": 2, "blendet": [], "befehl": 2, "rest": [], "verh\u00e4lt": 2, "\u00e4hnlich": [0, 2, 3], "vermuten": [0, 2, 4], "konnt": 2, "derart": 2, "allt\u00e4glich": 2, "funktionalit\u00e4t": 2, "bereitstellen": 2, "sammlungen": 2, "riesig": 2, "biliotheken": 2, "vorherigen": 2, "bibliothek": 2, "bekannt": [0, 2, 3], "numpi": [0, 2, 3], "optionalen": 2, "np": [0, 2, 3], "\u00fcblich": 2, "loadtxt": 2, "\u00fcbernimmt": 2, "data": 2, "fname": 2, "test_data": 2, "csv": [], "delimit": 2, "arrai": 2, "4": [0, 2, 3, 4], "7": 2, "8": 2, "9": 2, "11": 2, "12": 2, "panda": 2, "pd": 2, "read_csv": 2, "filepath_or_buff": 2, "test_data_with_head": 2, "fnmae": [], "paramt": 2, "einzelnen": 2, "englischen": 2, "omma": 2, "s": 2, "epar": 2, "v": [2, 4], "alu": 2, "solchen": 2, "kommata": 2, "getrennt": 2, "abgespeichert": 2, "dsv": 2, "elimit": 2, "perat": 2, "voneinand": 2, "beispielsweis": 2, "whitespac": 2, "unterscheidung": 2, "findet": [0, 2, 3], "excel": 2, "abespeichern": 2, "trenner": 2, "nachdem": 2, "eingelesen": 2, "mat": 2, "matrix": 2, "vektor": 2, "multiplizieren": 2, "standard": [], "skalarprodukt": 2, "berechnen": [0, 2, 3, 4], "dot": [2, 4], "mat_a": 2, "30": [], "70": [], "110": [], "berechnet": [2, 3], "elementweis": 2, "produkt": 2, "erwarten": 2, "26": 2, "42": 2, "angenommen": 2, "gerad": 2, "erzeugten": 2, "test_vector": 2, "savetxt": 2, "ihn": 2, "sp\u00e4teren": [2, 3], "zeitpunkt": 2, "eventuel": 2, "weiterrechenen": 2, "sinnvol": 2, "benutzt": [2, 3], "st\u00e4rken": 2, "effizienten": 2, "berechnung": [2, 3], "aufbereiten": 2, "tabel": 2, "anstel": [2, 3], "fragen": 2, "praktisch": 2, "m\u00f6glichkeit": 2, "zahlt": 2, "kriterien": 2, "geordnet": 2, "spalt": 2, "zweiten": 2, "weg": [2, 4], "dritten": [2, 4], "geschwindigkeit": 2, "zugeh\u00f6rig": 2, "beschleunigung": [2, 4], "eingetragen": 2, "regel": [2, 3], "entsprechenden": 2, "beziehen": 2, "spaltennumm": [], "weiteren": 2, "datafram": 2, "umwandeln": 2, "np_data": 2, "to_numpi": 2, "arbeiten": 2, "anschlie\u00dfend": 2, "konvertieren": 2, "df": [0, 2, 3], "to_csv": 2, "path_or_buf": 2, "test_datafram": 2, "erleichtert": 2, "entstandenen": 2, "vorteil": 2, "analysieren": 2, "erwartungswert": 2, "varianz": 2, "pro": 2, "geschmackssach": 2, "framework": 2, "bevorzugt": 2, "numerisch": 6, "widmen": 3, "intuit": 0, "konkreten": 3, "r": [0, 3], "rightarrow": [0, 3], "visualisieren": 3, "matplotlib": [0, 3], "pyplot": [0, 3], "plt": [0, 3], "grenzen": [0, 3], "integr": [], "linspac": [0, 3], "1000": [0, 3], "fx": 3, "plotten": [0, 3], "plot": [0, 3], "fill_between": 3, "collect": [], "polycollect": [], "0x7f79ad47ba90": [], "0x7f8708957a90": [], "integrieren": [0, 6], "differenzieren": [0, 6], "0x7f3b9857fac0": [], "0x7f653217bac0": [], "0x7f2d98e57a90": [], "mathbb": [0, 3], "0x7f1e0ba3fa60": [], "vline": 3, "20": 3, "fv": 3, "color": [0, 3], "black": [0, 3], "grei": 3, "red": 3, "show": [0, 3], "gut": 3, "erkennen": 3, "linearen": 3, "abschnitten": 3, "approximieren": 3, "roten": 3, "approximationen": 3, "bekommt": 3, "representierung": 3, "trapez": 3, "fl\u00e4che": 3, "begin": [], "align": [], "limits_a": 3, "sum_a": 3, "delta": [3, 4], "berechnungsformel": 3, "approximativen": 3, "formel": [0, 3, 4], "\u00fcbersetzen": 3, "schrittweit": 3, "dx": 3, "beginn": [], "fab": 3, "fdx": 3, "jetztig": [], "fertig": [], "334": [], "33450049999016": [], "333": 3, "3333333333333": 3, "approx": 3, "frac": [0, 3, 4], "cdot": [3, 4], "analytisch": 3, "einfachen": 3, "berechnungsmethod": 3, "nahe": 3, "h\u00e4ngt": 3, "qualit\u00e4t": 3, "ergebniss": 3, "signifik": 3, "wahl": 3, "w\u00e4hlen": 3, "gro\u00df": 3, "gro\u00dfen": 3, "reduziert": 3, "genauigkeit": 3, "drastig": 3, "daumenregel": 3, "lieber": 3, "w\u00e4hlt": 3, "heutigen": 3, "prozessoren": 3, "merkt": 3, "keinen": 3, "unterschi": 3, "100": 3, "diskretisiert": 3, "ziel": 3, "graph": 3, "m\u00f6glichst": [0, 3], "numerischen": [0, 3], "hauptschleif": 3, "link": 3, "gesamtfl\u00e4ch": 3, "addiert": 3, "algorithmu": [0, 3], "endeffekt": 3, "riemann": 3, "schule": 3, "prinzipiel": 3, "unedlich": 3, "summ": 3, "rechtecken": 3, "infinitisim": 3, "breit": 3, "endlich": 3, "rechteck": 3, "breiter": 3, "approxim": [0, 3], "weshalb": [0, 3], "unterteilen": 3, "ableitung": [0, 3], "differnzierbar": [], "techniken": 3, "n\u00e4herungsweisen": 3, "integralen": 3, "ableitungen": [], "vorallem": 3, "schwer": 3, "ineffizi": 3, "x_val": [0, 3], "arang": 3, "3335000000001": 3, "aussieht": 3, "berechenen": 3, "1e": [0, 3], "999999999621423": [], "wer": [], "fragt": [], "leicht": 3, "different": 3, "resultierenden": 3, "verschiebungen": 3, "richtung": [0, 3], "weil": 3, "geringeren": [], "defint": [], "interessiert": 3, "f\u00fcndig": [], "quadratischen": 3, "thema": 3, "erfahren": 3, "relev": 3, "herk\u00f6mmlich": 3, "erh\u00e4lt": 3, "o": [0, 3, 4], "gr\u00f6\u00dferen": 3, "resultiert": 3, "dgl": 4, "verlet": [], "jean": 4, "baptist": 4, "joseph": 4, "delambr": 4, "18": 4, "jahrhundert": 4, "entwickelt": 4, "unabh\u00e4ngig": 4, "wissenschaftlern": 4, "anderem": 4, "namensgeb": 4, "loup": 4, "1960er": 4, "l\u00f6st": 4, "ordnung": 4, "flugbahn": 4, "k\u00f6per": 4, "seiner": 4, "posit": 4, "sowi": 4, "beschleunigungs\u00e4nderung": 4, "formal": [], "taylor": [3, 4], "entwicklung": 4, "grade": 4, "t": 4, "ausgedr\u00fcckt": 0, "erhalten": [3, 4], "gr\u00f6\u00dfenordnung": [3, 4], "haken": 4, "annahm": 4, "gegegen": [], "iterativen": 4, "hierzu": 4, "addieren": 4, "ergbniss": 4, "2x": 4, "umschreiben": 4, "hergeleitet": [0, 4], "gew\u00f6hnlich": 6, "differenti": 6, "gleichungen": [3, 6], "input": [], "x_0": 0, "output": [], "sequenz": 4, "initialisier": 4, "x_": [0, 4], "eingab": 4, "endpunkt": 4, "t_": 4, "leftarrow": 4, "gr\u00f6\u00dfe": [], "setz": 4, "x_vor": [], "x_jetzt": [], "ne": 4, "2x_jetzt": [], "t_quadrat": [], "dt_squar": [], "dt_": 4, "squar": 4, "val": 4, "gib": 4, "hierau": 4, "dazugeh\u00f6rig": 4, "\u00fcberlassen": [3, 4], "abegeschlossen": 4, "dieselb": 1, "zentral": 2, "genauen": [0, 2], "spaltennummern": 2, "\u00fcberschriften": 2, "ben\u00f6tigten": [0, 3], "unterschiedlich": 3, "aufl\u00f6sung": 3, "unendlich": 3, "darstellen": 3, "schrittweiten": 3, "01": 3, "kurvendiskussionen": [0, 3], "differneyzieren": [], "vorangegangenen": 0, "behandelt": 0, "fehlt": 0, "f\u00e4higkeit": 0, "nullstellen": 0, "schone": [], "angedeutet": 0, "versuchen": 0, "verh\u00e4ltnism\u00e4\u00dfig": 0, "paar": 0, "beachten": 0, "kurvendiskuss": 6, "optimierung": 6, "grundide": 0, "verlauf": [0, 3], "gegebenem": 0, "folgen": 0, "anfangspunkt": 0, "dazugeh\u00f6rigen": 0, "tangent": 0, "funktionswert": [0, 3], "f_val": [0, 3], "df_val": [0, 3], "achs": 0, "x_axi": 0, "nullstel": 0, "dicht": 0, "gesuchten": 0, "dortau": 0, "weiterrechnen": 0, "informel": 0, "formeln": [], "x_n": 0, "darau": 0, "resultierend": 0, "n\u00f6tigen": 0, "erweiterungen": 0, "mittlerweil": 0, "vornehmen": 0, "abbruch": 0, "h\u00f6chsten": 0, "m\u00fcssten": 0, "n\u00e4chste": 0, "gefunden": 0, "umgehen": 0, "plottet": 0, "initialisiert": 0, "differnezieren": 0, "praxi": 0, "00000000139778": 3, "kenntniss": 0, "durchspielen": 0, "einfachheit": 0, "halber": 0, "interval": 3, "diskretisieren": 3, "visualisierung": 3, "punkten": 3, "entspricht": 3, "erwartungen": 3, "besprechen": 3, "h\u00f6herer": [], "anwendungen": 3, "reichen": 3, "weswegen": 3, "2f": 3, "indem": 3, "entwicklungen": 3, "durchf\u00fchrt": 3, "hf": 3, "3f": 3, "zusammen": 3, "analog": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"hello": 1, "world": 1, "da": [0, 1], "main": [], "programm": 1, "python": [1, 6], "improv": [], "schleifen": 1, "engl": 1, "loop": 1, "die": [1, 2], "els": 1, "anweisung": [], "boolesch": 1, "algebra": 1, "wdv1": 5, "anweisungen": 5, "f\u00fcr": 5, "mitarbeit": 5, "arbeiten": 5, "mit": 5, "dem": 5, "skript": [5, 6], "konventionen": 5, "vorbemerkungen": 6, "zu": 6, "kur": 6, "und": [0, 2, 3, 6], "ablauf": 6, "einer": 6, "lehreinheit": 6, "erst": 1, "schritt": 1, "anderen": 1, "programmiersprachen": 1, "verbessert": 1, "fallunterscheidung": 1, "literaturempfehlungen": 6, "instal": 6, "von": [2, 6], "inhaltsverzeichni": 6, "lesen": 2, "schreiben": 2, "dateien": 2, "pfade": 2, "absolut": 2, "home": [], "directori": [], "achtung": [], "rel": 2, "vs": 3, "einlesen": 2, "der": 2, "ersten": 2, "datei": 2, "csv": 2, "integrieren": 3, "differenzieren": 3, "numerisch": 3, "intuit": 3, "integr": 3, "h": 3, "2h": 3, "gew\u00f6hnlich": 4, "differenti": 4, "gleichungen": 4, "herleitung": 4, "verlet": 4, "algorithmu": 4, "kurvendiskuss": 0, "optimierung": 0, "newton": 0, "verfahren": 0, "problem": 0, "de": 0, "ableitungen": 3, "1": 3, "ordnung": 3, "2": [], "h\u00f6herer": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})