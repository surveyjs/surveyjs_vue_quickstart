<template>
  <div id="surveyCreatorContainer"></div>
</template>

<script>
import { SurveyCreator } from "survey-creator-knockout";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

export default {
  name: "survey-creator",
  props: ['json'],
  mounted() {
    const options = { showLogicTab: true };
    this.creator = new SurveyCreator(options);
    this.creator.JSON = this.json;
    this.creator.saveSurveyFunc = function() {
      console.log(JSON.stringify(this.text));
    };
    this.creator.render("surveyCreatorContainer");
  }
};
</script>

<style>
#surveyCreatorContainer {
  height: calc(100vh - 125px);
  width: 100vw;
}
</style>
