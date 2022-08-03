<template>
  <div>
    <h1>Survey Analytics</h1>
    <div id="summaryContainer"></div>
  </div>
</template>

<script>
import { Model } from "survey-vue";
import { VisualizationPanel } from "survey-analytics";
import { json, data } from "../data/analytics_data";

import "survey-analytics/survey.analytics.min.css";

export default {
  data() {
    const survey = new Model(json);
    return { survey };
  },

  mounted() {
    const surveyAnalytics = new VisualizationPanel(
      this.survey.getAllQuestions(),
      data
    );
    surveyAnalytics.render(
      document.getElementById("summaryContainer")
    );
  },
};
</script>
