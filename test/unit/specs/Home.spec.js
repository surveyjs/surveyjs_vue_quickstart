import Vue from "vue";
import Hello from "@/views/Home";

describe("Home.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector("h1").textContent).to.equal(
      "SurveyJS + VueJS bolierplate"
    );
  });
});
