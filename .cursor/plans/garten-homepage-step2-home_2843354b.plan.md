---
name: garten-homepage-step2-home
overview: "Umsetzungsplan für Schritt 2: Startseite von garten.ai entlang der neuen Content-Strategie fokussieren und verschlanken, ohne die technische Struktur unnötig umzubauen."
todos:
  - id: analyse-home-structure
    content: Bestehende Startseiten-Sektionen und Inhalte (inkl. aller `Section*` in `src/components/index`) erfassen und grob gegen `docs/step1-*` mappen.
    status: pending
  - id: design-home-ia
    content: "Ziel-Struktur und Reihenfolge der Startseiten-Sektionen definieren (inkl. Entscheidung: behalten/vereinfachen/zusammenlegen/streichen)."
    status: pending
    dependencies:
      - analyse-home-structure
  - id: rewrite-home-hero
    content: Hero-Text (Value Prop, Zielkunden, Kernbotschaften) und Hero-CTA(s) entlang Positionierung, Kernbotschaften und Webzielen neu formulieren.
    status: pending
    dependencies:
      - design-home-ia
  - id: update-home-painpoints
    content: "`SectionPainPoints` auf 5–7 klare Engpässe in „Sie“-Ansprache verschlanken und an die neue Struktur anpassen."
    status: pending
    dependencies:
      - design-home-ia
  - id: refine-who-i-work-with
    content: "`SectionWhoIWorkWith` und verwandte Abschnitte so zuschneiden, dass Zielkunden & Abgrenzung klar, aber knapp sind (Detailtiefe auf About verlagern)."
    status: pending
    dependencies:
      - design-home-ia
  - id: align-method-and-cta
    content: "`SectionMethod`, `SectionStepsCTA` (und ggf. `SectionHeroMetrics`/`FinalCTA`) in Inhalt, Länge und CTA-Logik an Prozess- und CTA-Leitplanken aus Schritt 1 angleichen."
    status: pending
    dependencies:
      - design-home-ia
  - id: home-meta-and-consistency
    content: Seitentitel, Meta-Description und Navigationseinträge für die Startseite auf die neue Positionierung und Rollenverteilung der Seiten abstimmen; abschließender Text- und Tonalitätscheck gegen `docs/step1-*`.
    status: pending
    dependencies:
      - rewrite-home-hero
      - update-home-painpoints
      - refine-who-i-work-with
      - align-method-and-cta
---

# Schritt 2 – Startseite fokussieren (`index.astro` + `components/index/*`)

## Ziel dieses Schritts

- **Ziel**: Die Startseite wird zur klaren, fokussierten Landingpage: Wer Sie sind, für wen Sie arbeiten, typische Engpässe, Ihr Ansatz und ein klarer nächster Schritt (CTA) – eng entlang der Leitplanken aus `description.md` und `docs/step1-*`.
- **Ergebnis**: Eine inhaltlich gestraffte Startseite mit klarer Struktur, rotem Faden über die fünf Kernbotschaften und maximal 1–2 Haupt-CTAs, ohne in die Tiefe der Dienstleistungs- oder About-Seite abzurutschen.

**Wichtige Referenzen**:

- `docs/step1-content-strategy-full.md`
- `docs/step1-content-strategy-compact.md`
- `description.md`
- Bestandscode: `src/pages/index.astro`, `src/components/index/*`, ggf. `src/data/home/*`, `src/config/site.ts`

---

## Schritt A: Ist-Analyse & Abgleich mit Leitplanke

- **A1 – Struktur und Inhalte der Startseite aufnehmen**
- Alle Sektionen und Komponenten der Startseite erfassen (insb. `SectionHero`, `SectionHeroMetrics`, `SectionPartners`, `SectionWhoIWorkWith`, `SectionPainPoints`, `SectionAuthority`, `SectionHappyEnd`, `SectionMethod`, `SectionReviews`, `SectionStepsCTA`).
- Pro Sektion kurz notieren: Welche Botschaft? Für wen? Welcher Teil von `description.md` wird hier (implizit) abgebildet?

- **A2 – Gegen Content-Strategie aus Schritt 1 spiegeln**
- Pro Sektion entscheiden: **behalten**, **vereinfachen**, **zusammenlegen** oder **streichen**, basierend auf:
- Kernbotschaften (Problem vor Tech, System statt Tool, Governance, Vendor-Neutralität, Enablement).
- Zielkunden- und Engpass-Profil.
- Mapping „Was gehört wohin?“ aus `step1-content-strategy-compact`.
- Kennzeichnen, welche Inhalte eher auf Service- oder About-Seite gehören und hier nur kurz angeteasert werden sollen.

### Ergebnisse Schritt A – Ist-Analyse & Bewertung der Startseite

**Aktuelle Reihenfolge in `index.astro`**

1. `SectionHero`  
2. `SectionHeroMetrics`  
3. `SectionPartners`  
4. `SectionWhoIWorkWith`  
5. `SectionPainPoints`  
6. `SectionAuthority`  
7. `SectionHappyEnd`  
8. `SectionMethod`  
9. `SectionReviews`  
10. `SectionStepsCTA`  

---

**`SectionHero`**

- **Botschaft/Zweck**: Value Prop für KMU ohne eigenes KI‑Team, Fokus auf 20–40 % weniger manueller Arbeit, DSGVO‑sauber & auditierbar, klarer CTA „Sparring‑Call“.  
- **Bezug**: Positionierung, Zielkunden, Problemwelt (manuelle Arbeit, Governance-Angst), Kernbotschaften „Problem vor Technologie“, „Governance & Sicherheit“.  
- **Entscheidung**: **Behalten**; Texte in Schritt C gezielt schärfen (Value Prop + Zielkunden + 1 Haupt‑CTA).

**`SectionHeroMetrics`**

- **Botschaft/Zweck**: Verdichtung auf 3 Kennzahlen (ROI < 6 Monate, kürzere Durchlaufzeiten, weniger Risiko).  
- **Bezug**: Ziel des Webprojekts (Ergebnisse), Arbeitsweise & Prozess / Erfolgskriterien.  
- **Entscheidung**: **Tendenz: Vereinfachen bzw. mit `SectionHappyEnd` zu einem kompakten Outcome‑Block zusammenlegen**.

**`SectionPartners`**

- **Botschaft/Zweck**: Social Proof über Mandate aus Mittelstand & Enterprise („Verantwortung“).  
- **Bezug**: Langfristige Ziele & Erfolgskriterien, USP „Tiefe & Verantwortung“.  
- **Entscheidung**: **Behalten, aber perspektivisch mit `SectionAuthority`/`SectionReviews` zu einer fokussierten Social‑Proof‑Sektion bündeln**.

**`SectionWhoIWorkWith`**

- **Botschaft/Zweck**: Zielkunden- und Anti‑Zielgruppen‑Teaser („passt / passt nicht“).  
- **Bezug**: Zielkundenprofil, Anti‑Zielgruppen, Zusammenarbeitsprinzipien & No‑Gos.  
- **Entscheidung**: **Behalten, aber textlich straffen**; Tiefen-Erklärungen eher auf Service-/About‑Seite.

**`SectionPainPoints`**

- **Botschaft/Zweck**: 6 Pain Points (ineffiziente IT, Blindflug, DSGVO‑Angst, PoCs ohne Skalierung, Kopfmonopole, Lock‑in).  
- **Bezug**: Problemwelt & zentrale Engpässe aus Schritt 1 (5–7 Kern‑Engpässe in „Sie“-Ansprache).  
- **Entscheidung**: **Behalten**, ggf. Feintuning der Formulierungen.

**`SectionAuthority`**

- **Botschaft/Zweck**: 8 Jahre Erfahrung, Branchen (Gesundheitswesen, E‑Commerce, IT‑Dienstleister, Startup) + Teaser auf About.  
- **Bezug**: Persona, USP (Governance, Tiefe, Vendor‑Neutralität), Zielkundenbranchen.  
- **Entscheidung**: **Behalten**, perspektivisch **gemeinsam mit `SectionPartners` als schmalere Authority‑Sektion denken**.

**`SectionHappyEnd`**

- **Botschaft/Zweck**: Konkrete Benefits nach Zusammenarbeit (Effizienz, Unabhängigkeit, prüfbare KI‑Architekturen, Investitionsschutz).  
- **Bezug**: Leistungen/Angebotslogik, USP (Vendor‑Neutralität, Ownership, Governance, Nachhaltigkeit).  
- **Entscheidung**: **Behalten**, Inhalte ggf. mit `SectionHeroMetrics` zu einem konsolidierten „Ergebnisse“-Block zusammenführen.

**`SectionMethod`**

- **Botschaft/Zweck**: Kurzfassung des 4‑Phasen‑Prozesses (Analyse & Business Case, Architektur & Prototyp, Umsetzung & Integration, Übergabe & Unabhängigkeit).  
- **Bezug**: Arbeitsweise & Prozess, Kernbotschaften „Problem vor Technologie“, „System statt Tool“, „Enablement & Ownership“.  
- **Entscheidung**: **Behalten** als Mini‑Prozess, Tiefe bleibt der Service‑Seite vorbehalten.

**`SectionReviews`**

- **Botschaft/Zweck**: Case Studies mit Blick auf Ausgangslage, Ansatz, spürbare Effekte + Tech‑Stack für Audit.  
- **Bezug**: Langfristige Ziele & Erfolgskriterien, Leistungen, USP (Substanz, Governance).  
- **Entscheidung**: **Behalten**; ggf. Einleitung minimal straffen.

**`SectionStepsCTA`**

- **Botschaft/Zweck**: Abschluss‑CTA „Klarheit in 30 Minuten“ inkl. 3 transparenter Schritte.  
- **Bezug**: Leistungen (Sparring), Ziel des Webprojekts & CTA‑Leitplanke (Qualität > Traffic).  
- **Entscheidung**: **Behalten**, in Schritt F mit Hero‑CTA terminologisch harmonisieren (ein Haupt‑Angebot, kein CTA‑Zoo).

---

## Schritt B: Ziel-Struktur & Reihenfolge der Sektionen festlegen

- **B1 – Ziel-Struktur der Startseite entwerfen**
- Auf Basis von A2 eine schlanke Reihenfolge definieren, z. B.:

1. Hero (Value Prop + Zielkunden + primärer CTA)
2. Pain-Section (Engpässe)
3. Kurz „Wer ich begleite“ / Zielkunden
4. Kurz „Wie ich arbeite“ (Methode/Prozess)
5. Social Proof / Authority (Reviews/Partner, optional verdichtet)
6. Abschluss-CTA (Steps/Final CTA)

- Pro geplanter Sektion festhalten, welche Texte aus `description.md`/`step1`-Dokumenten einspeisen.

- **B2 – Überflüssige oder doppelte Sektionen identifizieren**
- Markieren, welche bestehenden Sektionen entfernt oder stark gekürzt werden können, weil sie:
- Inhalte doppeln, die auf der Dienstleistungsseite ausführlicher vorkommen sollen.
- zu tief in persönliche Story oder Technik einsteigen (besser auf About/Service).

### Ergebnisse Schritt B – Ziel-Struktur & Zusammenlegungen

**Ziel-Reihenfolge der Startseite (Inhaltsblöcke)**

1. **Hero** – Positionierung, Zielkunden, Kernproblem, primärer CTA  
2. **Pain-Section** – 5–7 zentrale Engpässe in „Sie“-Ansprache  
3. **Zielkunden-Teaser** – Kurz „Wer ich begleite“ / Abgrenzung  
4. **Methode/Prozess (Kurzfassung)** – 4 Phasen als Mini-Prozess  
5. **Ergebnisse/Nutzen** – Outcome nach Zusammenarbeit (inkl. Kennzahlen)  
6. **Social Proof & Authority** – Referenzen, Mandate, Branchen-Erfahrung  
7. **Abschluss-CTA** – klarer nächster Schritt (Sparring/Potenzial-Check)  

Diese Struktur folgt direkt der Leitplanke aus Schritt 1: Hero → Pain → Zielkunden → Methode → Social Proof → CTA.

---

**Mapping auf bestehende Komponenten**

- **Hero-Block**  
- Basis: `SectionHero`  
- Anpassung in späteren Schritten: Text gegen Positionierung, Kernbotschaften und CTA-Leitplanke schärfen; optional 1–2 kurze Unterzeilen statt eigenem Metrics-Block.  

- **Pain-Section**  
- Basis: `SectionPainPoints`  
- Anpassung: Inhalte eng an die 5–7 Kern-Engpässe aus Schritt 1 anlegen; keine Unterabschnitt-Explosion.  

- **Zielkunden-Teaser**  
- Basis: `SectionWhoIWorkWith`  
- Anpassung: Straffen auf klares Profil + Anti-Zielgruppen in wenigen Punkten; persönliche Details und längere Erklärungen wandern auf About/Service.  

- **Methode/Prozess (Kurzfassung)**  
- Basis: `SectionMethod`  
- Anpassung: Klar als 4-Phasen-Überblick markieren; ausführliche Prozessdetails bleiben der Service-Seite vorbehalten.  

- **Ergebnisse/Nutzen**  
- Basis: `SectionHappyEnd`  
- Anpassung/Zuordnung:
- Inhalte aus `SectionHeroMetrics` (ROI, Durchlaufzeiten, Risiko) werden **inhaltlich in diesen Block integriert**, statt als separate Sektion zu bleiben.  
- Ziel: Ein starker, kompakter Outcome-Block, der Effizienz, Governance/Risiko und Investitionsschutz bündelt.  

- **Social Proof & Authority**  
- Basis: Kombination aus `SectionAuthority`, `SectionPartners` und `SectionReviews`.  
- Zielbild:
- Ein zusammenhängender Social-Proof-Bereich (oder zwei eng beieinander liegende Sektionen) mit:
- Branchen-/Erfahrungsteil (aus `SectionAuthority`, inkl. Verweis auf About).  
- Mandate/Logos (aus `SectionPartners`) als verdichteter Visueller Block.  
- Ausgewählte Case Studies (`SectionReviews`) mit Fokus auf Problem → Ansatz → Ergebnis (+ Tech-Stack).  
- Persönliche Story bleibt knapp, vertieft wird sie auf der About-Seite.  

- **Abschluss-CTA**  
- Basis: `SectionStepsCTA`  
- Anpassung: Terminologie und Angebot mit dem Hero-CTA synchronisieren (ein Hauptangebot, z. B. Automatisierungs-/KI-Potenzial-Check); Schritte und Nutzen klar kommunizieren.  

---

**Sektionen mit Zusammenlegungs- oder Kürzungskandidaten (B2)**

- **`SectionHeroMetrics`**  
- Status: **wird inhaltlich in Hero/Outcome integriert, nicht als eigene Startseiten-Sektion weitergeführt**.  
- Grund: Kennzahlen gehören logisch zum Nutzen/Outcome und müssen nicht als eigener Block zwischen Hero und restlicher Seite stehen.  

- **`SectionPartners`**  
- Status: **läuft in einem kompakten Social-Proof-Bereich auf**, gemeinsam mit Authority/Reviews.  
- Grund: Logos und Mandate sind wichtig, aber nicht als eigener „Großblock“ nötig; sie unterstützen Authority/Case Studies.  

- **`SectionAuthority` & `SectionReviews`**  
- Status: **bleiben inhaltlich erhalten**, werden aber als zusammengehöriger Social-Proof-Komplex gedacht (statt drei getrennten „Vertrauens“-Sektionen).  
- Grund: Vermeidung von Dopplungen und Scroll-Strecke, klarer Cluster „Warum garten.ai vertrauenswürdig ist“.  

- **Sonstige Tiefe (Story, Technikdetails)**  
- Alles, was zu stark in persönliche Biographie, Technik-Details oder Prozess-Mikroebenen geht, wird für Service- bzw. About-Seite reserviert und auf der Startseite nur knapp angeteasert.

---

## Schritt C: Hero & Above-the-fold schärfen

- **C1 – Value Proposition & Zielkunden im Hero neu formulieren**
- Aus `Positionierung`, Zielkundenprofil und Kernbotschaften 1–2 präzise Hero-Sätze entwickeln:
- Wer Sie sind.
- Für wen Sie arbeiten.
- Welches Kernproblem Sie lösen.
- Sicherstellen, dass mindestens „Problem vor Technologie“ und „System statt Tool“ klar erkennbar sind.

- **C2 – CTA im Hero definieren**
- Aus „Ziel des Webprojekts“ 1 primären CTA wählen (z. B. Workflow-/Digitalisierungs-Sparring oder Automatisierungs-/KI-Potenzial-Check).
- Optional: 1 sekundären, niedrigschwelligen CTA (Kontakt/E-Mail), aber keine CTA-Flut.

- **C3 – Umsetzung in `SectionHero` (und ggf. `SectionHeroMetrics`) planen**
- Textstruktur und evtl. Metriken/Unterzeilen definieren, ohne die Layout-Struktur übermäßig zu verändern.
- Prüfen, ob `SectionHeroMetrics` noch benötigt wird oder ob Kennzahlen an anderer Stelle besser aufgehoben sind.

### Ergebnisse Schritt C – Hero & Above-the-fold

- **C1 – Hero-Value-Prop & Zielkunden**
- **Kicker (Badge über der Headline)**: „Digitale System‑ & Workflow‑Architektur für den deutschen Mittelstand“  
- Spiegelt die Kernpositionierung aus `description.md` und den Mapping-Abschnitt „Startseite“ in `step1-content-strategy-*`.  
- **Hero-Headline** (mit farblich hervorgehobenem Teil):
- Grundzeile: „Stabile Kernprozesse statt Tool‑Zoo,“  
- Hervorgehobener Teil: „für den deutschen Mittelstand.“  
- Transportiert die Botschaften „System statt Tool“ und die Fokussierung auf deutsche KMU mit klaren Kernprozessen.  
- **Hero-Subline (Fließtext)**:
- Vorschlag: „Ich helfe deutschen KMU, ihre wertschöpfenden Kernprozesse so zu strukturieren und zu automatisieren, dass typischerweise 20–40 % manueller Arbeit wegfallen – und gleichzeitig Medienbrüche und Excel‑Wüsten verschwinden. Das Ergebnis sind tragfähige End‑to‑End‑Systeme, die DSGVO‑sauber, auditierbar und ohne Agentur‑Lock‑in laufen – auch wenn intern das Know-how, die Kapazität oder einfach der klare Fahrplan dafür fehlt.“  
- Verankert: Problem vor Technologie (erst Kernprozesse), System statt Tool, Governance & Security‑by‑Design, Vendor‑Neutralität/Ownership sowie die Überforderung/fehlende Kapazität in vielen KMU.

- **C2 – CTA-Logik im Hero**
- **Primärer CTA**:
- Label: „Automatisierungs‑Potenzial‑Check buchen“  
- Ziel: `contact.calendaring.general` (30‑minütiger Gesprächstermin).  
- Klartext-Kommunikation unter dem Button: „30 Min.“ und „Kostenlos“ bleiben bestehen, um Niedrigschwelligkeit zu betonen.  
- Inhaltlich deckungsgleich mit dem Angebot in `SectionStepsCTA`/`ctaCopy`, so dass 1 Haupt‑Angebot die gesamte Seite trägt.  
- **Sekundärer CTA**:
- E-Mail-Link unter/neben dem Button bleibt als niedrigschwellige Alternative (Fragen vorab per E‑Mail).  
- Keine weiteren CTAs im Hero (kein CTA‑Zoo); Kontaktformular bleibt tiefer auf der Seite oder auf der Kontaktseite verortet.

- **C3 – Rolle von `SectionHeroMetrics`**
- Die drei Kennzahlen (Amortisation < 6 Monate, kürzere Durchlaufzeiten, weniger Risiko) werden **nicht mehr als eigener Abschnitt direkt unter dem Hero ausgespielt**, sondern:
- Inhaltlich in den späteren **Outcome-/Ergebnis-Block** (`SectionHappyEnd` in der Zielstruktur) integriert.  
- Optional als kurze, in den Fließtext eingebaute Belege („typisch: Amortisation < 6 Monate bei klar definierten Kernprozessen“), ohne eigenen „Metrik‑Teaser“.  
- Ergebnis: Above‑the‑fold bleibt auf Value‑Prop + Zielkunden + CTA fokussiert; Kennzahlen stützen später den Nutzen, ohne die Startstruktur zu zerstückeln.

---

## Schritt D: Pain Points & Problemwelt verdichten

- **D1 – Engpässe aus Schritt 1 übernehmen**
- Die 5–7 Kern-Engpässe aus `step1-content-strategy-compact` als Grundlage für `SectionPainPoints` nutzen.
- Pro Pain-Punkt 1 klaren Satz in „Sie“-Ansprache formulieren.

- **D2 – Struktur und Anzahl der Pain-Points anpassen**
- Sicherstellen, dass die Pain-Section nicht ausufert: lieber weniger, treffende Punkte als Listen mit Unterpunkten.
- Optional: eine kurze Einleitung, die die Pain-Section an den Hero anschließt („Wenn Sie sich in mehreren dieser Punkte wiederfinden …“).

### Ergebnisse Schritt D – Pain Points verdichten

**D1 – Abgleich mit Schritt-1-Kern-Engpässen**

Die aktuellen 6 Pain Points in `src/data/home/painPoints.ts` decken bereits 6 der 7 Kern-Engpässe aus Schritt 1 ab:

1. **"Versteckte Kosten durch ineffiziente IT"** → deckt: "Ihr Team verbringt zu viel Zeit mit Copy & Paste, manueller Recherche und Excel-Pflege."
2. **"Entscheidungen im Blindflug"** → deckt: "Ihre Kernprozesse laufen über mehrere schlecht integrierte Systeme; Zahlen sind langsam oder widersprüchlich."
3. **"Angst vor DSGVO-Verstößen"** → deckt: "Sie sehen Potenzial in Digitalisierung/KI, aber niemand will persönlich das DSGVO-/Security-Risiko tragen."
4. **"Systeme, die nicht mitwachsen"** → deckt: "Sie haben PoCs oder Skripte, die im Kleinen funktionieren, aber nicht skalieren."
5. **"Wissen in den Köpfen, nicht im System"** → deckt: "Zentrale Prozesse hängen an wenigen Schlüsselpersonen."
6. **"Sorge vor Abhängigkeit (Lock-in)"** → deckt: "Frühere Dienstleister haben Sie in technische oder organisatorische Abhängigkeiten gebracht."

**Fehlender 7. Pain Point:** "Digitalisierungsprojekte scheitern an unklaren Rollen und Change-Müdigkeit, nicht an der Technik."

**D2 – Anpassungsplan für SectionPainPoints**

- **Anzahl:** Von 6 auf 7 Pain Points erhöhen, um alle Kern-Engpässe abzudecken.
- **Formulierungen schärfen:** Bestehende Punkte präziser an die Schritt-1-Engpässe angleichen (mehr direkte "Sie"-Ansprache, kürzere Sätze).
- **Neuer 7. Punkt:** "Digitalisierungsprojekte scheitern an unklaren Rollen und Change-Müdigkeit, nicht an der Technik."
- **Icons beibehalten:** Bestehende Icons passen gut; für den neuen Punkt ein passendes Icon wählen (z.B. UsersIcon oder ExclamationTriangleIcon).
- **Struktur:** Einleitungstext ("Wenn Sie sich in mehreren dieser Punkte wiederfinden...") hinzufügen, um den Übergang vom Hero zu verbessern.
- **Abschluss:** Bestehender Abschluss ("Genau an diesen Stellen setze ich an...") beibehalten und ggf. leicht schärfen.

**Umsetzung:**

- Zuerst `src/data/home/painPoints.ts` aktualisieren (7 Punkte, präzisere Texte).
- Dann `SectionPainPoints.astro` prüfen und ggf. Einleitung hinzufügen.

---

## Schritt E: "Wer ich bin" und „Mit wem ich arbeite“ nur anteasern

- **E1 – Zielkunden-Teaser in `SectionWhoIWorkWith` ausrichten**
- Texte so anpassen, dass Zielkundenprofil und Anti-Zielgruppen aus Schritt 1 sichtbar werden, ohne in eine komplette About-Seite abzurutschen.
- Klare Abgrenzung: für wen das Angebot passt und für wen nicht.

- **E2 – Persönliche Ebene knapp halten**
- Kurze Beschreibung von Patrik/garten.ai (Marke & Person, Persona) einbauen, die auf die About-Seite verweist.
- Tiefe persönliche Historie und lange Erklärungen auf About verschieben.

- **E3 – Authority-Elemente fokussieren**
- `SectionAuthority`, `SectionReviews`, `SectionPartners` inhaltlich prüfen:
- Welche Elemente stützen die Kernbotschaften (Governance, Tiefe, Verantwortung) am besten?
- Überflüssige Marketing-Floskeln streichen.

### Ergebnisse Schritt E – Zielkunden-Teaser straffen

**E1 – Abgleich mit Schritt-1-Zielkundenprofil**

Die aktuelle `SectionWhoIWorkWith` ist bereits nah am Schritt-1-Profil, aber zu lang und persönlich:

- **Aktuelle Stärken:**
- Anti-Zielgruppen passen gut zu Schritt 1 (3 von 3 Punkten decken die Kern-No-Gos ab)
- Zielgruppen-Punkte sind konkret und praxisnah
- Visuelle Trennung (rot für Anti, blau für Ziel) funktioniert gut

- **Probleme/zu straffen:**
- Speaker-Bild mit persönlicher Geschichte gehört auf About-Seite (verlängert unnötig)
- Zielgruppen-Punkte sind zu spezifisch (z.B. "Angebote >2.000€/Stück") → allgemeiner machen
- Anti-Zielgruppen könnten präziser an Schritt-1-Formulierungen angeglichen werden
- Persönliche Elemente (Vortrag-Beschreibung) aus der Section entfernen

**E2 – Straffungsplan für SectionWhoIWorkWith**

- **Speaker-Bild entfernen:** Das Bild mit Vortrags-Beschreibung wird komplett entfernt. Persönliche Geschichte gehört auf About.
- **Layout ändern:** Von 2-Spalten (Bild + Text) zu 1-Spalte (nur Text), um kompakter zu werden.
- **Anti-Zielgruppen präzisieren:** Aktuelle 3 Punkte leicht an Schritt-1-Formulierungen angleichen:
- "Sie primär 'schnell irgendwas mit KI' wollen" → "Sie wollen mal schnell irgendwas mit KI, weil alle das machen"
- "Sie erwarten, dass ich Ihre komplette IT-Basis aufräume" → "Reine Showcase-Projekte ohne echten Prozess-/Ergebnis-Impact"
- "Sie KI vor allem als Marketing-Gag sehen" → "Projekte ohne Entscheidungsfähigkeit, bei denen grundlegende Strukturfragen nicht angegangen werden sollen"
- **Zielgruppen-Punkte verallgemeinern:** Von spezifischen Beispielen zu allgemeineren Haltungen:
- Statt "Angebote >2.000€/Stück, Reklamationen mit viel Dokumentation, Pflege-/Behandlungsplanung" → "Sie haben klare Schmerzpunkte in wertschöpfenden Kernprozessen"
- Statt "Ihnen DSGVO, Revision und Security wichtig sind, Sie aber kein eigenes KI-Team haben" → "Ihnen DSGVO, Sicherheit und Governance wichtig sind – Sie sind bereit, Verantwortung zu tragen"
- Statt "eine bis zwei interne Ansprechpersonen benennen" → "Sie sind bereit, interne Ressourcen für Change und Governance zu aktivieren"
- **Einleitung beibehalten:** "Passt das für uns?" als H2 bleibt, da es die Frage gut stellt.
- **Verweis auf About:** Am Ende der Section einen dezenten Link zur About-Seite hinzufügen ("Mehr zu meiner Erfahrung").

**E3 – Technische Anpassungen**

- `speakerImage` Import entfernen
- Layout von `lg:grid lg:grid-cols-2` zu einfacher zentrierter Section ändern
- Eventuell Section-Subtitle von "Zielgruppe" zu "Für wen?" oder "Passt das?" ändern
- Neue Punkte als einfache Bullet-Points statt komplexer Layout-Struktur

---

## Schritt F: Methode/Prozess & CTA-Sektion angleichen

- **F1 – Kurzfassung der 4 Phasen ausarbeiten**
- Aus „Arbeitsweise & Prozess“ 3–5 kurze Bulletpoints bauen, die den typischen Ablauf verständlich machen (Analyse, Architektur & MVP, Umsetzung, Übergabe & Enablement).
- Diese als Grundlage für `SectionMethod` bzw. eine kombinierte Prozess-Section nutzen.

- **F2 – CTA-Logik vereinheitlichen**
- `SectionStepsCTA` und ggf. `FinalCTA` so planen, dass sie:
- die Kernbotschaften wieder aufgreifen,
- maximal 1–2 klare nächste Schritte anbieten (z. B. Sparring/Potenzial-Check, Kontaktformular).
- Texte gegen „Ziel des Webprojekts“ spiegeln: Qualität der Kontakte > Quantität des Traffics.

### Ergebnisse Schritt F – Methode & CTA angleichen

**F1 – Abgleich mit Schritt-1-Arbeitsweise**

Die aktuellen `processSteps` in `src/data/home/processSteps.ts` sind bereits sehr nah an der Schritt-1-Arbeitsweise:

- **1. Analyse & Business Case** → passt gut zu Schritt 1, könnte aber leicht präziser werden (Decision-Memo erwähnen)
- **2. Architektur & Prototyp** → passt gut, MVP-Fokus ist korrekt  
- **3. Umsetzung & Integration** → passt gut, iterative Entwicklung und Integration sind zentral
- **4. Übergabe & Unabhängigkeit** → passt gut, Enablement und Ownership sind Kernbotschaften

**Anpassungsplan für processSteps:**

- Beschreibungen leicht präzisieren, um Schritt-1-Details aufzunehmen (z.B. Decision-Memo, Monitoring/Logging, Dokumentation)
- Aber: Startseiten-kompatibel halten – nicht zu detailliert werden, da die Service-Seite die Vollversion trägt
- Einleitungstext in SectionMethod beibehalten („Struktur statt Chaos“, „Kein PoC-Friedhof...“)

**F2 – CTA-Logik-Abgleich**

Die aktuelle `SectionStepsCTA` verwendet bereits das korrekte Hauptangebot „Automatisierungs-Potenzial-Check“ und passt zu Schritt-1-Leitplanken:

- **1 Haupt-CTA**: „Automatisierungs-Potenzial-Check buchen“ → deckt sich mit Hero-CTA (einheitliches Angebot)
- **3 Schritte**: Termin wählen → Status Quo Analyse → Strategie & Fahrplan → klar und transparent
- **Qualitätsfokus**: „Kein Sales-Pitch“, „egal ob Zusammenarbeit zustande kommt“ → passt zu „Qualität > Traffic“

**Anpassungsplan für CTA:**

- Keine großen Änderungen nötig – die aktuelle CTA-Logik ist bereits Schritt-1-konform
- Eventuell: Prüfen, ob die Beschreibungen der 3 Schritte noch klarer die Kernbotschaften einbeziehen können

---

## Schritt G: Konsistenz, Meta & technischer Check

- **G1 – Navigation & Meta-Daten prüfen**
- Sicherstellen, dass Seitentitel und Meta-Description in `index.astro` und `src/config/site.ts` die neue Positionierung spiegeln (wer, für wen, welches Problem, welcher Outcome).
- Prüfen, ob Navigation und aktive Zustände auf die Rolle der Startseite als Landingpage einzahlen.

- **G2 – Dopplungen zu Service/About minimieren**
- Textstellen identifizieren, die in Schritt 3 (Service) oder Schritt 4 (About) ausführlich kommen sollen und hier nur anteasert werden.

- **G3 – Kurzer technischer Smoke-Test**
- Nach Umsetzung: Build/Preview laufen lassen, ob alle Startseiten-Komponenten und Datenimporte weiterhin funktionieren.

### Ergebnisse Schritt G – Meta, Navigation & Konsistenz

**G1 – Meta-Daten & Navigation geprüft**

*Aktuelle Meta-Daten (aus `src/config/site.ts`):*

- Titel: "Patrik Garten · AI Solution Architect & Software Engineer"
- Description: "Freelance AI Solution Architect, Software Engineer & IT-Dozent. End-to-end KI-Architekturen, von klassischen ML-Systemen bis zu LLM-/GenAI-Plattformen, sowie Security-by-Design für regulierte DACH-Unternehmen."

*Probleme & Anpassungsplan:*

- Titel ist zu persönlich fokussiert ("Patrik Garten") statt auf die Marke/Service
- Description ist technisch und nicht landingpage-orientiert (beantwortet nicht die Kernfragen: wer/für wen/welches Problem/welcher Outcome)
- Navigation (aus `navigationItems`) ist korrekt: Startseite ist implizit, dann "Werdegang" und "Dienstleistungen"

*Empfohlene neue Meta-Daten:*

- Titel: "garten.ai · Digitale System- & Workflow-Architektur für den deutschen Mittelstand"
- Description: "Stabile Kernprozesse statt Tool-Zoo: Ich helfe deutschen KMU, ihre wertschöpfenden Prozesse zu automatisieren. 20–40 % weniger Handarbeit durch End-to-End-Systeme mit Governance & DSGVO-Konformität."

**G2 – Dopplungen zu Service/About minimiert**

*Prüfung der aktuellen Startseiten-Inhalte:*

- **Service-Seite Dopplungen:** Die 4-Phasen-Prozess-Section auf der Startseite ist sehr knapp gehalten und verweist implizit auf die Service-Seite für Details. Keine kritischen Überschneidungen.
- **About-Seite Dopplungen:** Authority-Section auf Startseite ist auf 8 Jahre + Branchen beschränkt, mit Link zu About. Speaker-Bild wurde entfernt. Keine Überschneidungen.
- **Case Studies:** Auf Startseite nur "Ausschnitt", detaillierte Projekte gehören auf Service/About.

*Ergebnis:* Startseite hält sich an die Leitplanke "anteasern, nicht vertiefen" – alle Detailinhalte sind für Service/About reserviert.

**G3 – Technischer Smoke-Test**

*Build erfolgreich durchgeführt:*

- Alle Komponenten funktionieren korrekt
- Keine TypeScript-Fehler
- Keine Linting-Fehler (nur eine kleine Vue-Warnung über ungenutzten Import)
- Alle neuen Pain Points, Prozess-Schritte und CTA-Anpassungen werden korrekt dargestellt

*Empfehlung:* Meta-Daten aktualisieren, dann ist Schritt 2 vollständig abgeschlossen.

---

## Todos für Schritt 2

- **analyse-home-structure**: Bestehende Startseiten-Sektionen und Inhalte (inkl. aller `Section*` in `src/components/index`) erfassen und grob gegen `docs/step1-*` mappen.  
- **design-home-ia**: Ziel-Struktur und Reihenfolge der Startseiten-Sektionen definieren (inkl. Entscheidung: behalten/vereinfachen/zusammenlegen/streichen).  
- **rewrite-home-hero**: Hero-Text (Value Prop, Zielkunden, Kernbotschaften) und Hero-CTA(s) entlang Positionierung, Kernbotschaften und Webzielen neu formulieren.  
- **update-home-painpoints**: `SectionPainPoints` auf 5–7 klare Engpässe in „Sie“-Ansprache verschlanken und an die neue Struktur anpassen.  
- **refine-who-i-work-with**: `SectionWhoIWorkWith` und ggf. „Wer ich bin“-Anteile so zuschneiden, dass Zielkunden & Abgrenzung klar, aber knapp sind (Detailtiefe auf About verlagern).  
- **align-method-and-cta**: `SectionMethod`, `SectionStepsCTA` (und ggf. `SectionHeroMetrics`/`FinalCTA`) in Inhalt, Länge und CTA-Logik an Prozess- und CTA-Leitplanken aus Schritt 1 angleichen.  
- **home-meta-and-consistency**: Seitentitel, Meta-Description und Navigationseinträge für die Startseite auf die neue Positionierung und Rollenverteilung der Seiten abstimmen; abschließender Text- und Tonalitätscheck gegen `docs/step1-*`.ture