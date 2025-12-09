---
name: garten-homepage-step3-service
overview: Konkreter Umsetzungsplan, um die Dienstleistungsseite entlang der neuen Positionierung radikal zu entschlacken und auf wenige, klar strukturierte Sektionen zu reduzieren.
todos:
  - id: analyze-existing-service-page
    content: Bestehende Struktur und Inhalte der Dienstleistungsseite in `service.astro` und den zugehörigen Daten in `service.ts` vollständig erfassen und gegen das Zielbild mappen.
    status: completed
  - id: define-target-service-structure
    content: Zielstruktur mit 4–5 Kernsektionen (Kurz-Einstieg, Leistungsbausteine, Projektablauf, Arbeitsprinzipien & No-Gos, CTA) konkretisieren und den bestehenden Blöcken zuordnen.
    status: completed
    dependencies:
      - analyze-existing-service-page
  - id: refine-service-data-models
    content: "`servicePillars`, `engagementModes`, `technologyHighlights` und `painPoints` textlich und strukturell verschlanken, sodass sie die neue Angebotslogik klar abbilden."
    status: completed
    dependencies:
      - define-target-service-structure
  - id: simplify-service-template
    content: Template in `service.astro` auf die neue Zielstruktur umbauen, überlange Deep-Dive- und Tech-Sektionen einkürzen oder entfernen und neue Abschnitte (Projektablauf, Prinzipien) ergänzen.
    status: completed
    dependencies:
      - refine-service-data-models
  - id: update-faq-and-cta
    content: FAQ-JSON-LD (`faqSchema`) und CTA-Linie (Hero + `FinalCTA`) an die neue Struktur und den primären Angebots-Call anpassen.
    status: completed
    dependencies:
      - simplify-service-template
  - id: consistency-and-testing
    content: Konsistenz mit Startseite/About prüfen, Build/Preview ausführen und die Dienstleistungsseite manuell auf Lesbarkeit, Struktur und technische Fehler testen.
    status: completed
    dependencies:
      - update-faq-and-cta
---

# Schritt 3: Dienstleistungsseite radikal entschlacken

## Ziel & Kontext

- **Ziel**: Die Seite `src/pages/service.astro` und die zugehörigen Daten in `src/data/service.ts` werden zu einer kompakten, entscheidungsorientierten Leistungsübersicht umgebaut – weg vom Tech-Stack-Katalog, hin zu klaren Leistungsbausteinen, Prozess, Prinzipien und einem eindeutigen CTA.
- **Leitplanken**: Inhaltlich an `description.md` (Abschnitte wie „Leistungen / Angebotslogik“, „Arbeitsweise & Prozess“, „Zusammenarbeitsprinzipien“) ausrichten und die technische Struktur (Komponenten wie `ServiceArticle`, `FinalCTA`, `ServiceAudience` und Datentypen wie `servicePillars`, `engagementModes`, `technologyHighlights`, `painPoints`) möglichst beibehalten.

## Schritt A: Bestehende Dienstleistungsseite strukturieren

- **A1 – Bestand erfassen**: In [`src/pages/service.astro`](src/pages/service.astro) alle derzeitigen Blöcke klar inventarisieren:
- Hero + Intro (Titel, Beschreibung, USP, Kontakt-Pills)
- `painPoints`-Grid (aktuell aus `painPoints` in [`src/data/service.ts`](src/data/service.ts))
- "Hands-on Engineering" / "Arbeitsweise"-Block inkl. „So arbeite ich / So arbeite ich nicht“-Listen
- Kennzahlen-Block (`serviceStats` aus `src/config/site.ts`)
- `ServiceAudience`-Section (Zielgruppen)
- Drei `ServiceArticle`-"Deep Dives" (Automatisierung, stabile Abläufe, Enablement)
- "Leistungsbausteine"-Grid (Mapping über `servicePillars`)
- "Engagement"-Karten (über `engagementModes`)
- "Tooling & Observability"-Listen (über `technologyHighlights`)
- Abschluss-CTA (`FinalCTA`) und `faqSchema` JSON-LD.
- **A2 – Inhalte gegen Zielbild halten**: Jeden Block grob den gewünschten Zielen zuordnen (Kurz-Einstieg, Leistungsbausteine, Projektablauf, Arbeitsprinzipien/No-Gos, CTA) und markieren, was komplett gestrichen, was stark gekürzt und was in verdichteter Form übernommen werden soll.

## Schritt B: Zielstruktur der Seite festziehen

- **B1 – Fünf Kernsektionen definieren** (auf Basis des Refactor-Plans):

1. **Kurz-Einstieg**: Für wen die Leistungen sind (Zielkunden) + typische Kernprobleme aus der „Problemwelt der Kunden“.
2. **Leistungsbausteine**: 3–4 klar abgegrenzte Bausteine (z. B. Digitale Architektur & Workflow-Design, Assistenzsysteme & Automatisierung, Beratung/Sparring/Trainings, optionale langfristige Begleitung).
3. **Projektablauf**: Kompakte Darstellung der 4 Phasen aus „Arbeitsweise & Prozess“ (Analyse & Business Case, Architektur & MVP, Umsetzung & Integration, Übergabe & Enablement).
4. **Arbeitsprinzipien & No-Gos**: Klartext zu Prinzipien und Abgrenzungen (Problem vor Technologie, System statt Tool, Governance/Security-by-Design, No-Gos aus „Zusammenarbeitsprinzipien“).
5. **CTA**: Ein klarer nächster Schritt (z. B. Sparring-/Potenzial-Call) mit einem dominanten CTA.

- **B2 – Komponenten-Zuordnung planen**:
- Hero + `painPoints` + `ServiceAudience` für den **Kurz-Einstieg** bündeln und textlich straffen.
- `servicePillars` als Basis für die **Leistungsbausteine** nutzen (ggf. Inhalte/Umbennenung anpassen).
- Einen neuen kompakten Abschnitt für den **Projektablauf** vorsehen (z. B. Schritt- oder Timeline-Komponente innerhalb von `service.astro`).
- Den bestehenden "Arbeitsweise"-/"So arbeite ich"-Block als **Arbeitsprinzipien & No-Gos** zusammenfassen.
- `FinalCTA` als **CTA-Sektion** beibehalten und inhaltlich an den zentralen Angebots-CTA anpassen.

## Schritt C: Datenstrukturen in `src/data/service.ts` inhaltlich verdichten

- **C1 – `servicePillars` auf 3–4 Bausteine zuschneiden**:
- Bestehende Einträge („Audit & Roadmap“, „PoC → produktiver Workflow“) mit `description.md` abgleichen und bei Bedarf:
- umbenennen (z. B. zu Bausteinen, die die Angebotslogik klarer widerspiegeln),
- Texte für Entscheider verdichten (Outcome, Risiken, Governance) und technische Details in `stack` bzw. in 1–2 Sätze pro Baustein verlagern,
- Lieferobjekte (`deliverables`) und Ergebnisse (`results`) auf jeweils 3–4 starke Punkte beschränken.
- **C2 – `engagementModes` schärfen**:
- Beschreibungen kürzen und klarer an die drei Modelle binden (Fractional AI/CIO, Projekt-Delivery, Advisory & Enablement), jeweils mit Fokus auf Verantwortung, Einsatzszenarien und typischen Startpunkten.
- **C3 – `technologyHighlights` komprimieren**:
- Listen auf wenige, repräsentative Zeilen pro Kategorie (LLM & RAG, Cloud & Delivery, Security & Observability) reduzieren, ohne in Marketing-Sprech zu verfallen.
- **C4 – `painPoints` an Problemwelt ausrichten**:
- Prüfen, ob die aktuellen Pain Points (Tool-Wildwuchs, Abhängigkeit von Einzelpersonen, Skepsis & Risikoangst) direkt zu den Kernproblemen in `description.md` passen und Texte ggf. leicht anpassen, damit sie sauber zur Positionierung und zur Startseite konsistent sind.

## Schritt D: Template von `service.astro` auf Zielstruktur umbauen

- **D1 – Kurz-Einstieg vereinfachen**:
- Hero-Headline und Sub-Text in [`src/pages/service.astro`](src/pages/service.astro) so anpassen, dass klar wird: Seite = Leistungsübersicht für definierte Zielgruppe(n) + typische Engpässe + kurzer Hinweis auf Arbeitsweise.
- `painPoints`-Grid und `ServiceAudience` enger an den Hero anbinden, so dass direkt nach wenigen Scrollbewegungen klar ist: Für wen, welche Probleme, in welchem Kontext.
- **D2 – Deep-Dive-Sektion ersetzen oder stark kürzen**:
- Die drei `ServiceArticle`-Abschnitte unter „Deep Dives“ entweder:
- zu einem einzigen, sehr kompakten Abschnitt mit 2–3 exemplarischen Szenarien bündeln **oder**
- komplett entfernen, wenn die neuen **Leistungsbausteine** bereits genügend Klarheit bieten.
- **D3 – Leistungsbausteine-Sektion an neue Bausteine anpassen**:
- Überschrift und Einleitung der „Leistungsbausteine“-Section an die neue Angebotslogik aus `servicePillars` anpassen.
- Sicherstellen, dass die Darstellung (Karten pro Baustein) die Entscheidungsfragen der Zielkunden beantwortet (Was bekomme ich? Was ändert sich? Welche Risiken sind adressiert?).
- **D4 – Neuen Projektablauf-Abschnitt einbauen**:
- Unterhalb der Leistungsbausteine einen neuen Abschnitt einfügen, der die 4 Phasen des Projektablaufs knapp erklärt.
- Struktur wählen, die ohne neue komplexe Komponenten auskommt (z. B. einfache Cards oder nummerierte Liste in `service.astro`).
- **D5 – Arbeitsprinzipien & No-Gos verdichten**:
- Den Block "Hands-on Engineering / Arbeitsweise" und die Listen „So arbeite ich / So arbeite ich nicht“ zu einem prägnanten Abschnitt zusammenführen, der Prinzipien und Abgrenzungen auf maximal 6–8 Bulletpoints reduziert.
- Textlich eng an „Werte & Leitplanken“ und „Zusammenarbeitsprinzipien“ aus `description.md` anlehnen.
- **D6 – Technologieliste verkürzen oder integrieren**:
- Die "Tooling & Observability"-Section so einkürzen, dass sie maximal eine halbe Bildschirmhöhe einnimmt – Fokus auf Credibility statt Vollständigkeit.
- Optional die wichtigsten Tech-Stichworte direkt in den Bausteinen oder im Projektablauf verankern, statt sie isoliert aufzulisten.

## Schritt E: FAQ-Schema und CTA-Linie aktualisieren

- **E1 – `faqSchema` in `service.astro` neu ausrichten**:
- Fragen/Antworten so überarbeiten, dass sie die neue Struktur der Seite widerspiegeln, z. B.:
- Für wen ist das Angebot geeignet?
- Welche Leistungsbausteine gibt es?
- Wie läuft ein typisches Projekt ab?
- Wie wird Governance, Security & Compliance berücksichtigt?
- Wie starte ich und wie schnell geht es los?
- JSON-LD-Struktur (Typen, `@context`, `mainEntity`) unverändert lassen, nur `name`- und `text`-Felder anpassen.
- **E2 – CTA konsolidieren**:
- In Hero und `FinalCTA` denselben primären CTA verwenden (z. B. „Automatisierungs-/KI-Potenzial-Check“ oder ein klar definierter Sparring-Call), abgeleitet aus `description.md` und den bereits gewählten CTAs auf der Startseite.
- Sekundäre CTAs (z. B. E-Mail, LinkedIn) nur als Ergänzung unterhalb des primären Calls belassen, nicht als gleichwertige Alternativen.

## Schritt F: Konsistenz- und Technik-Checks

- **F1 – Konsistenz über Seiten hinweg prüfen**:
- Sicherstellen, dass Problemwelt, Zielkunden, Leistungsbausteine und Projektablauf-Begriffe mit den Formulierungen auf Startseite und About übereinstimmen.
- Doppelungen (z. B. sehr ähnliche Erklärtexte) identifizieren und auf der jeweils „richtigen“ Seite belassen.
- **F2 – Technische Regression vermeiden**:
- Überprüfen, dass alle bestehenden Imports und Props (`servicePillars`, `engagementModes`, `technologyHighlights`, `painPoints`, `FinalCTA`, `ServiceAudience`, `ServiceArticle`) weiterhin korrekt verwendet werden oder sauber entfernt/ersetzt sind.
- Build/Preview laufen lassen und die Dienstleistungsseite manuell im Browser prüfen (Layout, Lesbarkeit, FAQ-Snippet in den DevTools).