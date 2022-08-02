import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import HomeView from "@/views/HomeView.vue";

describe("Test", () => {
  it("should render the app", () => {
    const wrapper = mount(HomeView);

    expect(wrapper.exists()).toBe(true);

    const header = wrapper.find("h1");
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe("Hello world!");
  });
});
