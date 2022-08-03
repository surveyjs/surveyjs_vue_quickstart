<template>
  <div class="container">
    <h1>SurveyJS PDF Export</h1>
    <div class="jumbotron">
      <p>SurveyJS PDF Export is a client-side extension over the SurveyJS Library that enables users to save surveys as PDF documents.</p>
      <p>NOTE: Dynamic elements and characteristics (visibility, validation, navigation buttons) are not supported.</p>
      <p>Click the button below to export survey to a PDF document.</p>
      <button v-on:click="savePDF">Save as PDF</button>
    </div>
  </div>
</template>

<script>
import { Model } from "survey-vue";
import { SurveyPDF } from "survey-pdf";
import { json } from "../data/survey_json";

export default {
  data() {
    const model = new Model(json);
    const savePDF = function() {
      const surveyPDF = new SurveyPDF(json);
      surveyPDF.data = model.data;
      surveyPDF.save();
    };
    return {
      survey: model,
      savePDF: savePDF
    };
  }
};
</script>
