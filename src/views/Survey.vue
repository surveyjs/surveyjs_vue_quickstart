<template>
  <div class="container">
    <h1>SurveyJS Library / Runner</h1>
    <Survey :survey="survey" />
  </div>
</template>

<script>
import { Survey, Model, StylesManager } from "survey-vue";
import "survey-vue/defaultV2.css";
StylesManager.applyTheme("defaultV2");
import { json } from "../data/survey_json";

export default {
  components: {
    Survey
  },
  data() {
    const model = new Model(json);
    return {
      survey: model
    };
  }
};
</script>