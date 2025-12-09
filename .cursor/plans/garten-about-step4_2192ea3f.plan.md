---
name: garten-about-step4
overview: Konsolidierung der About-Seite entlang Markenpositionierung, Werten, Persona und Vision aus `description.md`, inklusive fokussierter Timeline und klar platziertem CTA.
todos:
  - id: about-audit
    content: Ist-Analyse & Mapping der About-Seite und der zugehörigen Daten gegen `description.md` durchführen.
    status: completed
  - id: about-hero-copy
    content: Hero-, Intro- und Positionierungs-Text in `about.astro` an die Kernpositionierung aus `description.md` anpassen.
    status: completed
    dependencies:
      - about-audit
  - id: about-meta-structure
    content: "`pillars`, `principles` und `capabilities` in `aboutMeta.ts` entlang Werte & USP neu strukturieren und kürzen."
    status: completed
    dependencies:
      - about-audit
  - id: about-timeline-focus
    content: "`timeEntries` in `aboutTimeline.ts` auf wenige, wirkungsstarke Stationen fokussieren und Texte schärfen."
    status: completed
    dependencies:
      - about-audit
  - id: about-cta
    content: CTA-Block am Ende der About-Seite ergänzen und mit der in `description.md` beschriebenen CTA-Logik abstimmen.
    status: completed
    dependencies:
      - about-hero-copy
      - about-meta-structure
      - about-timeline-focus
---

# Schritt 4: About-Seite konsolidieren

## Ziel & Scope

- **Ziel**: Die About-Seite so ausrichten, dass sie Marke, Persona, Werte und Vision von garten.ai prägnant für mittelständische Entscheider vermittelt und klar auf Ihre Rolle als AI Solution Architect einzahlt.
- **Scope**: Inhalte und Struktur von [src/pages/about.astro](src/pages/about.astro), [src/data/aboutMeta.ts](src/data/aboutMeta.ts) und [src/data/aboutTimeline.ts](src/data/aboutTimeline.ts) sowie ein neuer CTA am Seitenende.
- **Nicht im Scope**: Globale Navigation, Meta-Tags & CTAs über alle Seiten (werden in einem separaten Schritt geklärt).

## Bestandsaufnahme & Leitplanken

- **Inhalte mappen**: Bestehende Abschnitte (Hero, Positionierung, Arbeitsweise, Werte/Prinzipien, Fähigkeiten, Timeline) gegen die Bereiche 'Marke & Person', 'Positionierung', 'Werte & Leitplanken', 'USP & Prinzipien', 'Persönliche Positionierung / Persona' und 'Vision & Warum' aus [description.md](description.md) spiegeln.
- **Dopplungen & Lücken markieren**: Festhalten, welche Aussagen mehrfach vorkommen (z. B. Rollenmix, Tech-Stacks, Governance) und wo wichtige Botschaften aus `description.md` noch fehlen oder zu schwach sind.
- **Entscheidungsmatrix**: Pro Abschnitt kurz definieren, welche Botschaften dort schwerpunktmäßig erzählt werden (z. B. Hero = Persona & Nutzenversprechen, Werte-Blöcke = Prinzipien/Leitplanken, Timeline = belegte Wirkung).

## Umsetzungsplan im Detail

- **Schritt 1 – Hero & Einleitung nachziehen**:
- **Aufgabe**: Titel, Metabeschreibung und Hero-Intro in [src/pages/about.astro](src/pages/about.astro) so umformulieren, dass Ihre Positionierung aus `description.md` im Fokus steht (Problem vor Technologie, System statt Tool, Governance/Enablement, Mittelstand).
- **Umfang**: `title`- und `description`-Props von `<BaseLayout>`, H1 "Patriks Werdegang" samt Einleitungs-Absatz sowie ggf. der Textblock **Positionierung**.
- **Schritt 2 – Werte, Prinzipien & Fähigkeiten strukturieren**:
- **Aufgabe**: `pillars`, `principles` und `capabilities` in [src/data/aboutMeta.ts](src/data/aboutMeta.ts) neu zuschneiden, so dass sie direkt aus 'Werte & Leitplanken' und 'USP & Prinzipien' abgeleitet sind.
- **Umfang**: Kategorien klarer benennen, überlange Aufzählungen kürzen, 3–4 prägnante Einträge pro Liste, Fokus auf Arbeitsweise, Haltung und Wirkung statt Tool-Listen.
- **Schritt 3 – Timeline fokussieren**:
- **Aufgabe**: `timeEntries` in [src/data/aboutTimeline.ts](src/data/aboutTimeline.ts) auf Stationen mit klar messbarer Wirkung und hoher Relevanz für regulierte Umfelder und Mittelstand reduzieren.
- **Umfang**: Einträge priorisieren, Texte auf Outcome, Verantwortung und Kontext zuschneiden, Reihenfolge und Lesefluss der Timeline beibehalten.
- **Schritt 4 – CTA am Seitenende ergänzen**:
- **Aufgabe**: Einen dezenten CTA-Block ('Lassen Sie uns sprechen') am Ende der About-Seite einbauen, der zu einem klaren nächsten Schritt führt (Kontaktformular oder Sparring-Call).
- **Umfang**: CTA-Card oder -Zeile in [src/pages/about.astro](src/pages/about.astro) hinzufügen, bestehende Button-/Link-Stile wiederverwenden und an die in `description.md` unter 'Ziel des Webprojekts' beschriebenen CTAs anlehnen.
- **Schritt 5 – Konsistenz-Check Inhalt & Ton**:
- **Aufgabe**: Sicherstellen, dass Sprache, Ton und Abgrenzungen ('Sie'-Ansprache, Klartext, Anti-Zielgruppen) über die gesamte About-Seite konsistent zum Brand-Ton aus [description.md](description.md) sind.
- **Umfang**: Finaler Text-Review mit Fokus auf Verständlichkeit für Entscheider und technische Glaubwürdigkeit für Fach- und IT-Teams.
- **Schritt 6 – Technische Prüfung**:
- **Aufgabe**: Nach den inhaltlichen Anpassungen verifizieren, dass Build und Typen weiter funktionieren.
- **Umfang**: Import- und Typfehler für `pillars`, `principles`, `capabilities` und `timeEntries` prüfen und eine lokale Vorschau der About-Seite gegenlesen.

## Abgrenzung zu anderen Schritten

- **Dienstleistungs- und Startseite**: Anpassungen an `service.astro` und der Startseite folgen in eigenen Schritten und werden hier nur als Kontext berücksichtigt.
- **Globale Navigation & Metadaten**: Vereinheitlichung von Navigation, Seitentiteln und globalen CTAs erfolgt separat, sobald About-, Start- und Dienstleistungsseite jeweils inhaltlich stehen.