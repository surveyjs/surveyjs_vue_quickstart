<template>
  <div>
    <h1>Survey Analytics - Table View</h1>
    <span>Uses Tabulator supported only by modern browsers.</span>
    <div id="tableContainer"></div>
  </div>
</template>

<script>
import { Model } from "survey-vue";
import "jspdf-autotable"
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

window.jsPDF = jsPDF;
window.XLSX = XLSX;

import { Tabulator } from "survey-analytics/survey.analytics.tabulator";

import { json, data } from "../data/analytics_data";

import "survey-analytics/survey.analytics.tabulator.min.css";
import "tabulator-tables/dist/css/tabulator.min.css";

export default {
  data() {
    const survey = new Model(json);
    return { survey };
  },

  mounted() {
    const surveyAnalyticsTabulator = new Tabulator(this.survey, data);
    surveyAnalyticsTabulator.render(document.getElementById("tableContainer"));
  },
};
</script>