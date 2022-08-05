<template>
  <div id="surveyCreatorContainer"></div>
</template>

<script>
import { SurveyCreator } from "survey-creator-knockout";

import * as Survey from "survey-core";
import * as widgets from "surveyjs-widgets";
import { init as customWidget } from "../components/customwidget";

import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

// widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
customWidget(Survey);

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
  width: (100vw - 16px);
}
</style>
