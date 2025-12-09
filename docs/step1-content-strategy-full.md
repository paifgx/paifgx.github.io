## Schritt 1 – Inhaltliche Leitplanke aus `description.md` (vollständige Fassung)

Diese Notiz bündelt alle Ergebnisse aus Schritt 1 des Plans `garten-homepage-refactor` und dient als Referenz für alle weiteren Text- und Strukturänderungen.

---

## 1. Inhaltsblöcke aus `description.md`

### 1.1 Übersicht der Blöcke

- **Marke & Person**  
  Marke garten.ai, Rolle von Patrik, Selbstbild, Natur-/Wachstumsmetapher.
  - Tags: Marke, Persona, Positionierung

- **Positionierung**  
  Kernpositionierung, Leistungsversprechen, Fokus Mittelstand & wertschöpfende Kernprozesse.
  - Tags: Positionierung, Value Proposition, Nutzenversprechen, Zielkunden

- **Zielkunden**  
  Primäre Zielgruppen, Rollen, Anti-Zielgruppe.
  - Tags: Zielkundenprofil, Anti-Zielgruppen

- **Problemwelt der Kunden**  
  Typische Ausgangssituation: Medienbrüche, manuelle Arbeit, PoCs ohne Skalierung, Governance-/DSGVO-Angst, Lock-in, Kopfmonopole.
  - Tags: Problemwelt, Engpässe, Risiken

- **Leistungen / Angebotslogik**  
  Vier kombinierbare Leistungsbausteine (Architektur & Workflow, Assistenz-/Automatisierungslösungen, Beratung/Sparring/Trainings, langfristige Begleitung).
  - Tags: Leistungen, Angebotslogik, Bausteine

- **Arbeitsweise & Prozess**  
  Vier Phasen: Analyse & Business Case, Architektur & MVP, Umsetzung & Integration, Übergabe & Enablement.
  - Tags: Prozess, Arbeitsweise, Projektphasen

- **USP & Prinzipien**  
  Differenzierungsmerkmale: Problem vor Technologie, System statt Tool, Governance & Security-by-Design, Vendor-Neutralität, Dokumentation & Ownership, Tiefe, Ehrlichkeit.
  - Tags: USP, Prinzipien, Differenzierung, Arbeitsprinzipien

- **Werte & Leitplanken**  
  Nachhaltigkeit, Verantwortung, Humanismus, Partnerschaft.
  - Tags: Werte, Leitplanken, Haltung

- **Persönliche Positionierung / Persona**  
  Deep-Tech-Architekt, „Hacker-/Matrix“-Vibe, Didaktiker/Dozent, radikal ehrlich, Unternehmer.
  - Tags: Persona, Marke, Stil

- **Langfristige Ziele & Erfolgskriterien**  
  Boutique-Marke für sinnvolle digitale Architektur/Automatisierung/KI im DACH-Mittelstand; Erfolg in Tiefe der Transformation, Stabilität, Unabhängigkeit der Kunden.
  - Tags: Vision, Erfolgskriterien

- **Zusammenarbeitsprinzipien & No-Gos**  
  Voraussetzungen (Verantwortung, Entscheidungsfähigkeit, Ehrlichkeit), No-Gos (Feigenblatt-KI, reiner Code-Monkey, rein „billig & schnell“).
  - Tags: Zusammenarbeit, No-Gos, Rahmenbedingungen

- **Vision & Warum**  
  Persönliches „Warum“: Systeme sollen Menschen stärken, Mittelstand auf Konzern-Niveau bei Architektur/Governance bringen, robuste Strukturen bauen.
  - Tags: Vision, Sinn, Purpose

- **Brand-Ton & Sprache**  
  Deutsch, „Sie“-Ansprache, klare und präzise Sprache, konkret, ohne Hype, ehrliche Abgrenzung.
  - Tags: Brand-Ton, Sprachleitfaden, Stil

- **Ziel des Webprojekts**  
  Website-Ziele: Klarheit (wer/für wen/welche Probleme/wie Zusammenarbeit), Vertrauen (Substanz, Referenzen), Conversion (klare CTAs, wenige Pfade).
  - Tags: Webziel, CTA-Ziele, Informationsarchitektur

---

## 2. Mapping: Blöcke → Seiten & Strukturen

### 2.1 Haupt-Zuordnung pro Block

- **Startseite (Landing)**
  - Positionierung
  - Zielkunden (Kurzfassung)
  - Problemwelt der Kunden (Pain-Section)
  - Auszüge aus USP & Prinzipien (Authority/„Warum gerade dieser Ansatz“)
  - Sehr kurze Teaser auf: Marke & Person, Leistungen, Prozess

- **Dienstleistungsseite**
  - Leistungen / Angebotslogik (als kompakte Leistungsbausteine)
  - Arbeitsweise & Prozess (4‑Phasen-Modell)
  - Auszüge aus USP & Prinzipien (Arbeitsprinzipien, Governance, Vendor-Neutralität)
  - Zusammenarbeitsprinzipien & No-Gos (Rahmen, Erwartungen)
  - Teile der Problemwelt (dort, wo sie den Leistungsbaustein einleiten)

- **About-Seite**
  - Marke & Person
  - Persönliche Positionierung / Persona
  - Werte & Leitplanken
  - Ausgewählte Punkte aus USP & Prinzipien (dort, wo sie zur Person passen)
  - Vision & Warum
  - Ausgewählte Teile von Langfristigen Zielen & Erfolgskriterien (nur soweit sie Vertrauen und Klarheit schaffen)

- **Globale / strukturelle Ebene**
  - Brand-Ton & Sprache → steuert alle Texte, ist aber nicht als Seite sichtbar.
  - Ziel des Webprojekts → steuert Informationsarchitektur, Navigation und CTAs auf allen Seiten.

### 2.2 Abbildung auf bestehende Code-Struktur

- **Startseite**
  - Datei: `src/pages/index.astro`
  - Komponenten: `src/components/index/*`
  - Grobes inhaltliches Mapping:
    - `SectionHero` → Positionierung + Kurz-Teaser Marke & Person + primärer CTA aus „Ziel des Webprojekts“.
    - `SectionWhoIWorkWith` → Zielkunden (Profil + Anti-Zielgruppen angedeutet).
    - `SectionPainPoints` → Problemwelt der Kunden (verdichtet auf 5–7 Engpässe).
    - `SectionMethod` / `SectionHeroMetrics` / ähnliche → Kurzfassung „Arbeitsweise & Prozess“ plus Nutzen.
    - `SectionAuthority`, `SectionReviews`, `SectionPartners` → Social Proof und Auszüge aus USP & Prinzipien.

- **Dienstleistungsseite**
  - Datei: `src/pages/service.astro`
  - Daten: `src/data/service.ts`
  - Grobes inhaltliches Mapping:
    - Einleitung / erste Sektion → Zielkunden + Problemwelt, aber stärker auf konkrete Leistungen hinführend.
    - Leistungssektionen → direkte Abbildung der vier Bausteine aus „Leistungen / Angebotslogik“.
    - Prozesssektion → 4‑Phasen-Modell aus „Arbeitsweise & Prozess“.
    - Arbeitsprinzipien / No-Gos → USP & Prinzipien + Zusammenarbeitsprinzipien & No-Gos.
    - CTA / Final CTA → aus „Ziel des Webprojekts“ (z. B. Sparring / Potenzial-Check als Standardangebot).

- **About-Seite**
  - Datei: `src/pages/about.astro`
  - Daten: `src/data/aboutMeta.ts`, `src/data/aboutTimeline.ts`
  - Grobes inhaltliches Mapping:
    - About-Hero / Intro → Marke & Person, persönliche Positionierung/Persona, 1–2 Sätze Vision & Warum.
    - Werte-/Prinzipien-Blöcke → Werte & Leitplanken plus passende Ausschnitte aus USP & Prinzipien.
    - Timeline → Stationen und Projekte, die die Kernbotschaften (Governance, Verantwortung, Tiefe, Mittelstand/Regulierung) belegen.
    - Dezenter CTA am Ende → Anbindung an Kontakt/Sparring-Call (aus „Ziel des Webprojekts“).

- **Navigation, Meta & CTAs**
  - Navigation/Branding: `src/components/Header.vue`, `src/layouts/BaseLayout.astro`, `src/config/site.ts`
  - CTA-Komponenten: z. B. `src/components/ui/FinalCTA.astro`
  - Leitplanke:
    - Benennung und Reihenfolge der Menüpunkte spiegeln Rollen der Seiten: Start = Landing/Überblick, Service = Leistungsvertiefung, About = Person/Werte.
    - CTAs: 1–2 Haupt-CTAs, basierend auf „Ziel des Webprojekts“ (Workflow-/Digitalisierungs-Sparring, Automatisierungs-/KI-Potenzial-Check, Kontakt).

---

## 3. Kernbotschaften (Core Messages)

### 3.1 Kandidaten (aus `description.md`)

- Problem vor Technologie
- System statt Tool (End-to-End statt Insellösungen)
- Governance & Security-by-Design
- Vendor-Neutralität & Unabhängigkeit
- Enablement & Ownership beim Kunden
- Fokus auf wertschöpfende Kernprozesse im Mittelstand
- Ehrlichkeit & Klarheit statt Hype & Showcases

### 3.2 Ausgewählte Kernbotschaften mit Claims & Beweisankern

- **Problem vor Technologie**
  - Kurzlabel: „Problem vor Technologie“
  - Ein-Satz-Claim: „Sie investieren nur in digitale Lösungen und KI, wenn sie ein klar definiertes Geschäftsproblem messbar verbessern.“
  - Beweisanker:
    - Startpunkt ist immer Prozess, Mensch und Business-Case – nicht „irgendwas mit KI“.
    - Decision-Memo mit Szenarien, ROI, Risiken und klarer Empfehlung (inkl. „nicht machen“).
    - Fokus auf wertschöpfende Kernprozesse (Sales, Reklamationen, Pflegeplanung, Wissensarbeit), keine Gimmicks.

- **System statt Tool**
  - Kurzlabel: „System statt Tool“
  - Ein-Satz-Claim: „Sie bekommen tragfähige End-to-End-Systeme für Ihre Kernprozesse – keine weitere Insel-Lösung.“
  - Beweisanker:
    - Architektur & Workflow-Design über ganze Prozessketten (APIs, Events, Datenmodelle, Integrationslayer).
    - Monitoring, Logging, Rollen- und Rechtekonzepte gehören von Anfang an dazu.
    - Fokus: lieber einen Kernprozess sauber transformieren als zehn halbgare Experimente.

- **Governance & Security-by-Design**
  - Kurzlabel: „Governance & Sicherheit von Anfang an“
  - Ein-Satz-Claim: „Sie gehen Digitalisierung und KI so an, dass Datenschutz, Sicherheit und Governance von Beginn an mitgedacht sind.“
  - Beweisanker:
    - Orientierung an IT-Grundschutz/ISO-Prinzipien.
    - Klare Rollen, Berechtigungen und Datenflüsse im Architekturdesign.
    - Ehrliche Benennung von Risiken und Grenzen, kein Schönreden von Compliance- oder Betriebsrisiken.

- **Vendor-Neutralität & Unabhängigkeit**
  - Kurzlabel: „Vendor-neutral & unabhängig“
  - Ein-Satz-Claim: „Sie bleiben technologisch so unabhängig wie sinnvoll – Entscheidungen folgen Ihrem Use-Case, nicht dem Hype.“
  - Beweisanker:
    - Auswahl von Cloud, LLMs und Tools nach Use-Case, Regulatorik, Wirtschaftlichkeit.
    - Transparente Darstellung von Abhängigkeiten und Trade-offs.
    - Kein Blackbox-Ansatz: Code, Architekturwissen und Betriebskompetenz bleiben beim Kunden.

- **Enablement & Ownership**
  - Kurzlabel: „Enablement & Ownership“
  - Ein-Satz-Claim: „Sie können die Systeme nach dem Projekt selbst betreiben und weiterentwickeln – garten.ai macht sich bewusst überflüssig.“
  - Beweisanker:
    - Saubere Dokumentation (Architektur, APIs, Konfiguration, Runbooks, Betriebskonzepte).
    - Onboarding und Schulung interner Teams (Dev, Ops, Fachbereiche).
    - Optional: langfristige Begleitung als Sparringspartner, aber kein erzwungener Lock-in.

### 3.3 Verortung der Kernbotschaften je Seite

- **Startseite**
  - Sichtbar in Hero, Pain Points und Methode/Prozess:
    - Problem vor Technologie
    - System statt Tool
  - Governance & Enablement eher implizit in Formulierungen („verantwortungsvoll“, „übergebene Systeme“).

- **Dienstleistungsseite**
  - Explizit ausspielen:
    - System statt Tool
    - Governance & Security-by-Design
    - Enablement & Ownership
  - Vendor-Neutralität z. B. im Abschnitt zu Arbeitsprinzipien/Tool-Auswahl.

- **About-Seite**
  - Betonung:
    - Ehrlichkeit & Klarheit (als Teil der Persona)
    - Enablement & Ownership (persönliches Motiv)
    - Problem vor Technologie (als roter Faden im Werdegang)
  - Vision und Werte rahmen die Botschaften.

---

## 4. Zielkundenprofil & zentrale Engpässe

### 4.1 Zielkundenprofil

- **Unternehmen**
  - Mittelständische Organisationen im DACH-Raum mit klaren Kernprozessen.
  - Typische Sektoren:
    - E-Commerce / Retail mit hohem Transaktionsvolumen.
    - Gesundheitswesen (Kliniken, Pflege, Versorger, MedTech) mit strenger Aufsicht und Datenschutz.
    - IT-Dienstleister / Systemhäuser mit eigenem Angebot und internen Modernisierungsbedarfen.
    - Wissensintensive Organisationen (Bildung, Beratung, Dienstleistung) mit starker Dokumentations- und Reporting-Last.

- **Rollen**
  - Geschäftsführung und Bereichsleitung.
  - IT-Leitung, Architektur, Produkt-/Projektverantwortliche.

- **Haltung**
  - Leidensdruck durch Medienbrüche, Tool-Zoo, Excel-Wildwuchs.
  - Wunsch nach pragmatischer, governance-sicherer Digitalisierung und KI – ohne Hype.
  - Bereitschaft, Verantwortung für Change und Governance im eigenen Haus zu tragen.

- **Anti-Zielgruppen (für Texte eher knapp)**
  - „Wir wollen mal schnell irgendwas mit KI, weil alle das machen.“
  - Reine „Showcase“-Projekte ohne echten Prozess-/Ergebnis-Impact.
  - Projekte ohne Entscheidungsfähigkeit, bei denen grundlegende Strukturfragen nicht angegangen werden sollen.

### 4.2 Zentrale Engpässe (in „Sie“-Ansprache)

- „Ihr Team verbringt zu viel Zeit mit Copy & Paste, manueller Recherche und Excel-Pflege statt mit eigentlicher Wertschöpfung.“
- „Ihre Kernprozesse laufen über mehrere Systeme, die schlecht integriert sind – Zahlen sind langsam, unvollständig oder widersprüchlich.“
- „Sie sehen das Potenzial neuer Technologien, aber niemand möchte persönlich den Kopf für Datenschutz-, Governance- oder Sicherheitsfehler hinhalten.“
- „Sie haben PoCs oder Skripte, die im Kleinen funktionieren, aber unter echter Last oder in mehreren Abteilungen auseinanderfallen.“
- „Zentrale Prozesse hängen an wenigen Schlüsselpersonen – fällt jemand aus, steht der Prozess.“
- „Frühere Dienstleister haben Infrastruktur und Code so gebaut, dass Sie fachlich und technisch abhängig sind.“
- „Digitalisierungsprojekte scheitern weniger an der Technik als an unklaren Rollen, fehlender Verantwortung und Change-Müdigkeit.“

### 4.3 Einsatz der Engpässe je Seite

- **Startseite**
  - 5–7 Engpässe als eigene Pain-Section mit klaren, kurzen Sätzen.
  - Fokus auf:
    - Manuelle Routinearbeit
    - Medienbrüche & Tool-Zoo
    - Governance-/Security-Unsicherheit
    - PoCs ohne Skalierung
    - Kopfmonopole

- **Dienstleistungsseite**
  - Engpässe nutzen, um direkt in Leistungsbausteine zu überführen:
    - Routinearbeit, Medienbrüche → Architektur & Workflow-Design, Assistenz- & Automatisierungslösungen.
    - Governance-Unsicherheit → Arbeitsprinzipien, Governance & Security-by-Design.
    - PoCs, Kopfmonopole, Lock-in → Begleitung, Dokumentation & Ownership, Vendor-Neutralität.

- **About-Seite**
  - Engpässe selbst weniger aufzählen, sondern über Projekte/Timeline und Werte zeigen, dass genau diese Probleme adressiert werden.

---

## 5. Tonalität & Sprachleitfaden (operationalisiert)

### 5.1 Stilmerkmale

- Deutsch, konsequente „Sie“-Ansprache.
- Klar, direkt, präzise; so wenig Buzzwords wie möglich.
- Konkrete Beispiele und Alltagssituationen statt abstrakter Phrasen.
- Verständlich für Entscheider, fachlich sauber für Technik-Teams.
- Nüchterner, konstruktiver Pragmatismus – kein Hype, keine Heilsversprechen.

### 5.2 Do/Don't-Regeln

- **Do**
  - Konkrete Situationen schildern („Ihre Mitarbeitenden tippen Kennzahlen aus System A in System B…“).
  - Probleme, Risiken und Grenzen klar benennen und anschließend Lösungswege oder Empfehlungen aufzeigen.
  - Den Nutzen in Zeit, Qualität, Risiko, Entlastung und Ownership formulieren.
  - Anti-Zielgruppen und No-Gos klar, aber knapp nennen.
  - In Claims möglichst eine konkrete Zielgruppe oder Situation ansprechen.

- **Don't**
  - Keine Sätze wie „Wir bieten State-of-the-art KI-Lösungen für alle Branchen.“
  - Keine Superlative oder Garantien ohne Substanz.
  - Kein „KI rettet alles“-Narrativ.
  - Keine reinen Tech-Sichtweisen ohne Bezug zu Prozessen und Menschen.
  - Keine anbiedernden Formulierungen („wir sind der perfekte Partner für alles und jeden“).

### 5.3 Implizite Leitplanken aus Werten & Prinzipien

- **Nachhaltigkeit**
  - Wörter wie „tragfähig“, „langlebig“, „wartbar“, „kein Wegwerf-Prototyp“ nutzen, wo passend.

- **Verantwortung**
  - Formulierungen wie „klar benennen“, „ehrlich sagen, wenn etwas keinen Sinn ergibt“, „Risiken transparent machen“.

- **Humanismus**
  - Betonung von Entlastung, Fokus auf sinnvolle Arbeit, Stärkung von Teams statt Personaleinsparung.

- **Partnerschaft**
  - „Wir“ im Sinne von gemeinsamer Arbeit (Kunde + garten.ai), nicht „Agentur vs. Kunde“.

---

## 6. Zusammenfassung der Artefakte aus Schritt 1

- **Content-Mapping**
  - Jedes Kapitel aus `description.md` ist einem der drei Hauptseiten-Typen (Start, Service, About) oder der globalen Ebene zugeordnet und grob auf bestehende Komponenten gemappt.

- **Kernbotschaften**
  - Fünf Kernbotschaften mit Kurzlabel, Claim und Beweisankern bilden den roten Faden durch alle Seiten.

- **Zielkunden & Engpässe**
  - Klar definiertes Zielkundenprofil für den DACH-Mittelstand und sieben zentrale Engpässe in „Sie“-Ansprache, mit Leitlinie, wo sie ausgespielt werden.

- **Tonalitätsleitfaden**
  - Konkrete Do/Don't-Regeln und Stilmerkmale stellen sicher, dass alle neuen Texte konsistent im garten.ai‑Ton bleiben.
