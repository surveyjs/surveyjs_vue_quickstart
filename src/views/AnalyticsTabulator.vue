<template>
  <div class="container">
    <h2>Results Table - display survey results in the table form</h2>
    <span>Uses Tabulator. Supports modern browsers.</span>
    <div id="tableContainer"></div>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";

import "jspdf-autotable"

import { Tabulator } from "survey-analytics/survey.analytics.tabulator";

import { json, data } from "../data/analytics_data";

import "survey-analytics/survey.analytics.tabulator.css";
import "tabulator-tables/dist/css/tabulator.min.css";

/* eslint-disable vue/no-unused-components */
export default {
  components: {
    SurveyVue,
  },

  data() {
    const survey = new SurveyVue.Model(json);
    return { survey, data };
  },

  mounted() {
    var surveyAnalyticsDataTables = new Tabulator(this.survey, this.data);
    surveyAnalyticsDataTables.render(document.getElementById("tableContainer"));
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
