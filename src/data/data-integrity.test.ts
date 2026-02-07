import { describe, it, expect } from "vitest";
import { servicePillars, engagementModes, painPoints } from "./service";
import { timeEntries } from "./aboutTimeline";
import { pillars, principles, capabilities } from "./aboutMeta";

describe("data integrity", () => {
  describe("service data", () => {
    it("servicePillars should have valid entries", () => {
      expect(servicePillars.length).toBeGreaterThan(0);
      servicePillars.forEach((pillar) => {
        expect(pillar.title).toBeTruthy();
        expect(pillar.subtitle).toBeTruthy();
        expect(pillar.description).toBeTruthy();
        expect(pillar.cards.length).toBeGreaterThan(0);
        pillar.cards.forEach((card) => {
          expect(card.title).toBeTruthy();
          expect(card.description).toBeTruthy();
        });
        expect(pillar.icon).toBeTruthy();
        expect(pillar.image).toBeTruthy();
      });
    });

    it("engagementModes should have valid entries", () => {
      expect(engagementModes.length).toBeGreaterThan(0);
      engagementModes.forEach((mode) => {
        expect(mode.title).toBeTruthy();
        expect(mode.description).toBeTruthy();
      });
    });

    it("painPoints should have valid entries", () => {
      expect(painPoints.length).toBeGreaterThan(0);
      painPoints.forEach((pain) => {
        expect(pain.title).toBeTruthy();
        expect(pain.description).toBeTruthy();
        expect(pain.icon).toBeTruthy();
      });
    });
  });

  describe("about data", () => {
    it("timeEntries should have valid entries", () => {
      expect(timeEntries.length).toBeGreaterThan(0);
      timeEntries.forEach((entry) => {
        expect(entry.id).toBeGreaterThan(0);
        expect(entry.date).toBeTruthy();
        expect(entry.title).toBeTruthy();
        expect(entry.content).toBeTruthy();
      });
    });

    it("pillars should have valid entries", () => {
      expect(pillars.length).toBeGreaterThan(0);
      pillars.forEach((pillar) => {
        expect(pillar.label).toBeTruthy();
        expect(pillar.description).toBeTruthy();
      });
    });

    it("principles should have valid entries", () => {
      expect(principles.length).toBeGreaterThan(0);
      principles.forEach((principle) => {
        expect(principle.title).toBeTruthy();
        expect(principle.description).toBeTruthy();
      });
    });

    it("capabilities should have valid entries", () => {
      expect(capabilities.length).toBeGreaterThan(0);
      capabilities.forEach((capability) => {
        expect(capability.title).toBeTruthy();
        expect(capability.description).toBeTruthy();
        expect(capability.icon).toBeTruthy();
      });
    });
  });
});
