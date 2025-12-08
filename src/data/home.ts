// Mini-Styleguide für Texte:
// - Einheitlich "Sie" in Kundentexten
// - Englische Begriffe nur bei fachlicher Notwendigkeit (Stack, Tools, Methoden)
// - Verbotene/kritische Begriffe: "konform", "state-of-the-art", "ganzheitlich" (ersetzen oder bewusst begründen)
// - Ziel: Klarheit und Sauberkeit, nicht literarische Perfektion

export const painPoints = [
  {
    title: "Versteckte Kosten durch ineffiziente IT",
    description:
      "Mitarbeiter pflegen Excel statt Kundenbeziehungen. Manuelle Datenübertragung kostet täglich Marge.",
    icon: "BanknotesIcon",
  },
  {
    title: "Entscheidungen im Blindflug",
    description:
      "ERP, Shop und CRM schweigen sich an. Berichte dauern Tage statt Sekunden.",
    icon: "ChartBarSquareIcon",
  },
  {
    title: "Angst vor DSGVO-Verstößen",
    description:
      "KI ja, aber sicher. Architekturen orientiert an BSI IT-Grundschutz und DSGVO – mit audit-fähiger Doku statt Blackbox.",
    icon: "ShieldCheckIcon",
  },
  {
    title: "Systeme, die nicht mitwachsen",
    description:
      "Prototypen brechen unter Last zusammen. Sie brauchen IT, die auch bei doppeltem Umsatz stabil läuft.",
    icon: "ArrowTrendingUpIcon",
  },
  {
    title: "Wissen in den Köpfen, nicht im System",
    description:
      "Kopfmonopole gefährden den Betrieb. Ich sichere Wissen in Systemen und Doku.",
    icon: "DocumentTextIcon",
  },
  {
    title: "Sorge vor Abhängigkeit (Lock-in)",
    description:
      "Kein Blackbox-Mietmodell. Der Code gehört Ihnen, Abhängigkeiten bleiben transparent.",
    icon: "LockOpenIcon",
  },
];

export const benefits = [
  {
    title: "Effizienz, die man misst",
    description:
      "Medienbrüche verschwinden. Prozesse, die früher Stunden dauerten, laufen jetzt in Sekunden automatisch.",
    icon: "ClockIcon",
  },
  {
    title: "Eigentum & Unabhängigkeit",
    description:
      "Der Projektcode gehört Ihnen – kein Agentur-Lock-in, keine Lizenzmiete für meine Arbeit. Technische Abhängigkeiten (Cloud, Datenbanken, LLMs) halten wir bewusst transparent und so austauschbar wie möglich.",
    icon: "KeyIcon",
  },
  {
    title: "Prüfbare KI-Architekturen",
    description:
      "Architekturen und Implementierungen, die sich an BSI IT-Grundschutz, ISO/IEC 27001 und DSGVO orientieren. Audit-fähige Doku und Logging",
    hint: "Die fachliche Freigabe liegt bei Datenschutz & Revision Ihres Hauses.",
    icon: "ClipboardDocumentCheckIcon",
  },
  {
    title: "Investitionsschutz",
    description:
      "Keine Wegwerf-Software. Ich baue eine solide Architektur, die auch in 5 Jahren noch wartbar und skalierbar ist.",
    icon: "CheckBadgeIcon",
  },
];

export const processSteps = [
  {
    id: "01",
    name: "Analyse & Business Case",
    description:
      "Ich prüfe Ihre Prozesse und Daten auf Herz und Nieren. Lohnt sich die Automatisierung? Ich rechne es durch, bevor ich eine Zeile Code schreibe.",
  },
  {
    id: "02",
    name: "Architektur & Prototyp",
    description:
      "Ich baue einen funktionsfähigen Piloten (MVP). Sicherheit und Datenschutz sind von Tag 1 an integriert, damit Sie sofort testen können.",
  },
  {
    id: "03",
    name: "Umsetzung & Integration",
    description:
      "Iterative Entwicklung in Ihrer Umgebung. Ich binde bestehende Systeme (ERP, CRM) an und sorge für stabilen Betrieb unter Last.",
  },
  {
    id: "04",
    name: "Übergabe & Unabhängigkeit",
    description:
      "Ich mache mich überflüssig. Sie erhalten Code, Doku und Trainings. Ihr Team übernimmt das Steuer – ohne laufende Abhängigkeit von mir.",
  },
];

export const authority = {
  yearsExperience: "8 Jahren",
  headline: "anspruchsvollen IT-Projekten.",
  description:
    "Ich kenne beide Welten: Die Agilität moderner Tech-Stacks und die strengen Anforderungen von Konzernen und Behörden. Meine Architektur-Entscheidungen basieren nicht auf Hypes, sondern auf jahrelanger Erfahrung in kritischen Infrastrukturen.",
};

export const authorityHighlights = [
  {
    title: "Gesundheitswesen",
    description: "Sichere Middleware für Patientendaten (Uniklinik).",
  },
  {
    title: "E-Commerce",
    description: "Skalierung für Hochlast-Zeiten (DAX-nah).",
  },
  {
    title: "IT-Dienstleister",
    description: "DSGVO-orientierter KI-Assistent für interne Teams.",
  },
  {
    title: "Startup",
    description: "Echtzeit-Plattform – Von der Idee zum Produkt.",
  },
];

export const ctaCopy = {
  title: "Klarheit in 30 Minuten.",
  subline:
    "Kein Sales-Pitch, sondern echte Strategie. Ich prüfe gemeinsam mit Ihnen, ob und wie ich Ihnen helfen kann.",
  buttonLabel: "Jetzt Sparring-Call buchen",
  steps: [
    {
      number: "01",
      title: "Termin wählen",
      description:
        "Suchen Sie sich einen passenden Slot in meinem Kalender aus.",
    },
    {
      number: "02",
      title: "Status Quo Analyse",
      description: "Wir besprechen Ihre aktuelle Herausforderung und Ziele.",
    },
    {
      number: "03",
      title: "Strategie & Fahrplan",
      description:
        "Sie erhalten erste Lösungsansätze – egal ob wir zusammenarbeiten oder nicht.",
    },
  ],
};
