<template>
  <div class="container">
    <h2>Results Table - display survey results in the table form</h2>
    <span>Uses Datatables. Browsers compatibility: IE10+ </span>
    <div id="tableContainer"></div>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import { DataTables } from "survey-analytics/survey.analytics.datatables";
import { json, data } from "../data/analytics_data";

import $ from "jquery";
import "datatables.net/js/jquery.dataTables.js";
import "datatables.net-dt/js/dataTables.dataTables.js";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-colreorder/js/dataTables.colReorder.js";
import "datatables.net-rowgroup/js/dataTables.rowGroup.js";

import "survey-analytics/survey.analytics.datatables.css";
import "datatables.net-colreorder-dt/css/colReorder.dataTables.css";

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
    DataTables.initJQuery($);
    var surveyAnalyticsDataTables = new DataTables(this.survey, this.data);
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
