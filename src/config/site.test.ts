import { describe, it, expect } from "vitest";
import { business, contact, siteMeta } from "./site";

describe("site config", () => {
  describe("business", () => {
    it("should have all required fields", () => {
      expect(business.owner).toBeTruthy();
      expect(business.company).toBeTruthy();
      expect(business.street).toBeTruthy();
      expect(business.postalCode).toBeTruthy();
      expect(business.city).toBeTruthy();
      expect(business.country).toBeTruthy();
      expect(business.countryCode).toBeTruthy();
      expect(business.vatId).toBeTruthy();
      expect(business.insurer.name).toBeTruthy();
      expect(business.insurer.street).toBeTruthy();
      expect(business.insurer.city).toBeTruthy();
      expect(business.insurer.coverage).toBeTruthy();
    });
  });

  describe("contact", () => {
    it("should have all required fields", () => {
      expect(contact.email).toBeTruthy();
      expect(contact.phoneDisplay).toBeTruthy();
      expect(contact.phoneHref).toBeTruthy();
      expect(contact.websites.main).toBeTruthy();
      expect(contact.websites.dev).toBeTruthy();
      expect(contact.websites.solutions).toBeTruthy();
      expect(contact.linkedin.url).toBeTruthy();
      expect(contact.linkedin.handle).toBeTruthy();
      expect(contact.calendaring.general).toBeTruthy();
      expect(contact.calendaring.workflowSprint).toBeTruthy();
    });

    it("should have valid email format", () => {
      expect(contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it("should have valid URLs", () => {
      expect(contact.websites.main).toMatch(/^https?:\/\//);
      expect(contact.websites.dev).toMatch(/^https?:\/\//);
      expect(contact.websites.solutions).toMatch(/^https?:\/\//);
      expect(contact.linkedin.url).toMatch(/^https?:\/\//);
      expect(contact.calendaring.general).toMatch(/^https?:\/\//);
      expect(contact.calendaring.workflowSprint).toMatch(/^https?:\/\//);
    });
  });

  describe("siteMeta", () => {
    it("should have all required fields", () => {
      expect(siteMeta.title).toBeTruthy();
      expect(siteMeta.description).toBeTruthy();
      expect(siteMeta.origin).toBeTruthy();
      expect(siteMeta.locale).toBeTruthy();
      expect(siteMeta.ogImage).toBeTruthy();
    });

    it("should have valid origin URL", () => {
      expect(siteMeta.origin).toMatch(/^https?:\/\//);
    });
  });
});
