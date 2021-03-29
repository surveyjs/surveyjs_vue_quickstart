<template>
  <div class="container">
    <h2>SurveyJS Analytics Library</h2>
    <div id="summaryContainer"></div>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import * as SurveyAnalytics from "survey-analytics";
import { json, data } from "../data/analytics_data";

import "survey-analytics/survey.analytics.css";

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
    var surveyAnalyticsDataTables = new SurveyAnalytics.VisualizationPanel(
      this.survey.getAllQuestions(),
      this.data
    );
    surveyAnalyticsDataTables.render(
      document.getElementById("summaryContainer")
    );
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
