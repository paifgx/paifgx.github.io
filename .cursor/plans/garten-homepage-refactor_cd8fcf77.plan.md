---
name: garten-homepage-refactor
overview: Verschlankung und Neuausrichtung der garten.ai-Website (Startseite, Dienstleistungsseite und About) entlang der klaren Positionierung aus `description.md`, ohne die technische Struktur unnötig zu verändern.
todos:
  - id: content-mapping
    content: Kernbotschaften und Seiten-Mapping aus `description.md` ableiten (welcher Abschnitt landet auf welcher Seite)
    status: pending
  - id: service-simplify
    content: Dienstleistungsseite (`service.astro` + zugehörige Daten) auf wenige, klar strukturierte Sektionen reduzieren
    status: pending
    dependencies:
      - content-mapping
  - id: home-align
    content: Startseite-Texte und -Sektionen an neue Positionierung und die verschlankte Dienstleistungsseite anpassen
    status: pending
    dependencies:
      - content-mapping
      - service-simplify
  - id: about-refine
    content: About-Seite entlang Persona, Werten und Vision aus `description.md` straffen
    status: pending
    dependencies:
      - content-mapping
  - id: nav-cta-unify
    content: Navigation, Meta-Descriptions und CTAs über alle Seiten konsistent und klar ausrichten
    status: pending
    dependencies:
      - service-simplify
      - home-align
      - about-refine
---

# Refactor der garten.ai-Seiten entlang `description.md`

## Zielbild der Website

- **Startseite**: Klare Landingpage mit Fokus auf: Wer Sie sind, für wen Sie arbeiten, typische Engpässe, Ihr Ansatz und ein klarer nächster Schritt (CTA). Nur anreißen, keine langen Erklärtexte.
- **Dienstleistungsseite**: Kompakte Vertiefung der Leistungen aus `description.md` (Architektur & Workflow, Assistenz-/Automatisierungslösungen, Beratung/Trainings, Begleitung) plus typischer Projektablauf und klarer CTA – ohne Tech-Stack-Listen und Marketing-Ballast.
- **About-Seite**: Verdichtete Darstellung von Person, Werdegang, Werten und Prinzipien (Marke & Person, USP, Werte, Vision), ergänzt um eine aussagekräftige Timeline.
- **Navigation/CTAs**: Konsistente Benennung, wenige, klare Wege (Kontakt / Sparring-Call / Potenzial-Check), keine parallel konkurrierenden Angebote.

## Schritt 1: Inhaltliche Leitplanke aus `description.md` ableiten

- **Mapping bauen**: `description.md` grob in Website-Bereiche mappen (z. B. Zielkunden & Problemwelt → Startseite + Service-Einstieg; Leistungen & Prozess → Service; USP/Werte/Persona/Vision → About).
- **Kernbotschaften definieren**: 3–5 Kernbotschaften formulieren (Problem vor Technologie, System statt Tool, Governance/Security-by-Design, Vendor-Neutralität, Enablement), die sich wie ein roter Faden durch alle Seiten ziehen.
- **Tonalität prüfen**: Texte auf allen Seiten gegen „Brand-Ton & Sprache“ aus `description.md` spiegeln (klar, präzise, kein Geschwurbel, ehrliche Abgrenzung).

## Schritt 2: Startseite fokussieren (`src/pages/index.astro` + `src/components/index/*`)

- **Bestehende Sektionen sichten**: Inhalte von `SectionHero`, `SectionHeroMetrics`, `SectionPartners`, `SectionWhoIWorkWith`, `SectionPainPoints`, `SectionAuthority`, `SectionHappyEnd`, `SectionMethod`, `SectionReviews`, `SectionStepsCTA` gegen `description.md` spiegeln.
- **Inhalt straffen**:
- Hero-Section auf eine klare Value Proposition + Zielkunden + CTA verdichten.
- Pain Points eng an die „Problemwelt der Kunden“ (Medienbrüche, Tool-Zoo, Governance-Angst, PoCs ohne Skalierung, Kopfmonopole) anbinden.
- "Wer ich bin" nur kurz anteasern, Details der Person auf About verlagern.
- **Dopplungen abbauen**: Inhalte, die besser auf die Dienstleistungsseite oder About passen (z. B. tiefe Erklärungen von Arbeitsweise oder Tech-Stack), dort hin verschieben oder ganz streichen.
- **CTA-Linie schärfen**: In `SectionStepsCTA` und ggf. Hero nur 1–2 Hauptangebote einsetzen (z. B. "Digitalisierungs-/Workflow-Sparring" oder "Automatisierungs-/KI-Potenzial-Check"), wie in `description.md` vorgesehen.

## Schritt 3: Dienstleistungsseite radikal entschlacken (`src/pages/service.astro` + `src/data/service.ts`)

- **Ziel & Rolle klären**: Seite als "vertiefende Leistungsübersicht" definieren – nicht als zweites Sales-Deck. Inhaltlich an `Leistungen / Angebotslogik` und `Arbeitsweise & Prozess` aus `description.md` ausrichten.
- **Struktur neu zuschneiden** (vorgeschlagen):

1. Kurz-Einstieg: Für wen diese Leistungen sind (Zielkunden) und welche Kernprobleme adressiert werden (aus "Problemwelt der Kunden").
2. Leistungsbausteine: 3–4 klar abgegrenzte Bausteine (Digitale Architektur & Workflow-Design, Assistenzsysteme & Automatisierung, Beratung/Sparring/Trainings, optionale langfristige Begleitung) statt vieler Deep-Dive-Sektionen.
3. Projektablauf: Kompakt die 4 Phasen aus `Arbeitsweise & Prozess` (Analyse & Business Case, Architektur & MVP, Umsetzung & Integration, Übergabe & Enablement) darstellen.
4. Arbeitsprinzipien & No-Gos: Kurz die wichtigsten Prinzipien und Abgrenzungen (Problem vor Technologie, System statt Tool, Governance, No-Gos aus `Zusammenarbeitsprinzipien`) als Klartext.
5. CTA: Konkreter nächster Schritt (z. B. 30-minütiges Sparring) mit einem einzigen primären CTA.

- **Bestehende Sektionen eindampfen**:
- "Deep Dives", lange Listen in "Leistungsbausteine", "Engagement", "Tooling & Observability" und sehr technische Aufzählungen auf das reduzieren, was für Entscheider wirklich nötig ist (Outcome, Risiken, Governance) – Technologie eher als 1–2 Sätze oder kompakten Bulletblock.
- FAQ-Schema (`faqSchema` in `service.astro`) so anpassen, dass es die neue, verschlankte Struktur widerspiegelt (wenige, starke Fragen/Antworten statt Marketing-Sprech).
- **Technische Struktur erhalten**: Layout, Komponenten (`ServiceArticle`, `FinalCTA`, `ServiceAudience`) und Datenquellen (`serviceStats`, `servicePillars`, `engagementModes`, `technologyHighlights`) möglichst beibehalten, Inhalte aber komprimieren oder zusammenlegen.

## Schritt 4: About-Seite konsolidieren (`src/pages/about.astro` + `src/data/aboutMeta.ts` + `src/data/aboutTimeline.ts`)

- **Positionierung nachziehen**: Hero-Text und Einleitung stärker an "Marke & Person", "Persönliche Positionierung / Persona" und "Vision & Warum" aus `description.md` anlehnen – weniger allgemeine KI-/Projekt-Historie, mehr klarer Fokus auf Ihre Rolle im Mittelstand.
- **Werte & Prinzipien strukturieren**: Inhalte in `pillars`, `principles` und `capabilities` gegen `Werte & Leitplanken` und `USP & Prinzipien` spiegeln und ggf. zusammenführen, um Wiederholungen und Überlänge zu vermeiden.
- **Timeline fokussieren**: `timeEntries` auf Stationen mit klar messbarer Wirkung und Relevanz für aktuelle Zielkunden reduzieren (z. B. Projekte in regulierten Umfeldern, Mittelstand, Governance/Architektur-Rollen).
- **CTA klar platzieren**: Am Ende der About-Seite einen dezenten, aber klaren CTA („Lassen Sie uns sprechen“) einbauen, der auf die Kontaktseite oder den Sparring-Call verweist.

## Schritt 5: Navigation, Metadaten & CTAs vereinheitlichen

- **Navigation prüfen** (`src/components/Header.vue`, `src/layouts/BaseLayout.astro`, `src/config/site.ts`): Benennung und Reihenfolge der Menüpunkte so anpassen, dass die neue Rollenverteilung der Seiten (Landing vs. Service-Vertiefung vs. About) klar wird.
- **Meta-Tags & Descriptions**: Seitentitel und Descriptions für `index.astro`, `service.astro`, `about.astro` an die neue Positionierung anpassen (klare Aussage: wer, für wen, welche Probleme, welcher Outcome).
- **CTAs konsistent machen**: Über alle Seiten hinweg die gleichen 1–2 Haupt-CTAs (Kontaktformular, E-Mail, Calendly/Terminbuchung) verwenden, wie in `description.md` unter "Ziel des Webprojekts" beschrieben.

## Schritt 6: Kleinere Seiten & Konsistenzchecks

- **Kontakt-/Impressum-/Privacy-Seiten**: Nur dort anpassen, wo Branding, Kurzbeschreibung oder CTAs aktualisiert werden müssen; rechtliche Texte inhaltlich nicht anfassen.
- **Ton & Abgrenzung prüfen**: Über einen finalen Textdurchlauf sicherstellen, dass Anti-Zielgruppen und No-Gos klar, aber knapp adressiert werden und keine widersprüchlichen Versprechen auf verschiedenen Seiten auftauchen.
- **Technische Regression vermeiden**: Nach Änderungen kurz bauen/testen (Astro Build/Preview), um sicherzustellen, dass alle Komponenten und Datenimporte weiterhin funktionieren.

## Arbeitsweise im Projekt

- **Seite für Seite vorgehen**: Zuerst Dienstleistungsseite vereinfachen, dann Startseite nachziehen, anschließend About; nach jeder Seite kurzer inhaltlicher Check mit Ihnen.
- **Bestehende Struktur respektieren**: Komponenten und Datenstrukturen nur dort anfassen, wo es der Klarheit dient; keine unnötigen Refactors.
- **Deutsch, "Sie"-Ansprache**: Alle neuen Texte strikt entlang der Sprach- und Haltungsregeln aus `description.md` formulieren.