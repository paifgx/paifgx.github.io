// Process steps showing the methodology
import type { ProcessStep } from "../../types/common";

export const processSteps: ProcessStep[] = [
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
      "Ich mache mich überflüssig. Sie erhalten Code, Doku und Trainings. Ihr Team übernimmt das Steuer, ohne laufende Abhängigkeit von mir.",
  },
];
