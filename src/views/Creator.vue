<template>
  <div>
    <h1>Survey Creator / Form Builder</h1>
    <survey-creator :json="json"></survey-creator>
  </div>
</template>

<script>
import SurveyCreator from "../components/SurveyCreator";
import { json } from "../data/survey_json";

export default {
  components: {
    SurveyCreator
  },
  data() {
    return { json };
  }
};
</script>