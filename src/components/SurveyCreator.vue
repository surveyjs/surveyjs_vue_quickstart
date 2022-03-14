<template>
  <div id="surveyCreatorContainer"></div>
</template>

<script>
import * as SurveyCreator from "survey-creator-knockout";


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

Survey.Serializer.addProperty("question", "tag:number");

export default {
  name: "survey-creator",
  data() {
    return {};
  },
  mounted() {
    const options = { showLogicTab: true };
    this.creator = new SurveyCreator.SurveyCreator(options);
    this.creator.saveSurveyFunc = function() {
      console.log(JSON.stringify(this.text));
    };
    this.creator.render("surveyCreatorContainer");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
