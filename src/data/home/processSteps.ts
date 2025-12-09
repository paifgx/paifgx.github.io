// Process steps showing the methodology
import type { ProcessStep } from "../../types/common";

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    name: "Analyse & Business Case",
    description:
      "Ich prüfe Ihre Prozesse und Daten auf Herz und Nieren. Sie bekommen ein 2-seitiges Decision-Memo mit ROI-Schätzung und Risiken, bevor ich eine Zeile Code schreibe.",
  },
  {
    id: "02",
    name: "Architektur & Prototyp",
    description:
      "Ich baue einen funktionsfähigen Piloten (MVP). Sie erhalten Architektur-Diagramme und Security-Konzept, damit Sie sofort testen können.",
  },
  {
    id: "03",
    name: "Umsetzung & Integration",
    description:
      "Iterative Entwicklung in Ihrer Umgebung. Ich binde bestehende Systeme (ERP, CRM) an und liefere wöchentliche Demo-Sessions mit Ihrem Team.",
  },
  {
    id: "04",
    name: "Übergabe & Unabhängigkeit",
    description:
      "Ihr Team erhält Runbooks, Doku und einen Migrationsplan, der mich überflüssig macht. Sie übernehmen das Steuer, ohne laufende Abhängigkeit.",
  },
];
