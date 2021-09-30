<template>
  <div id="surveyCreatorContainer"></div>
</template>

<script>
import * as SurveyCreator from "survey-creator";
import "survey-creator/survey-creator.css";

import * as SurveyKo from "survey-knockout";
import * as widgets from "surveyjs-widgets";
import { init as customWidget } from "../components/customwidget";

// widgets.icheck(SurveyKo);
widgets.select2(SurveyKo);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo);
widgets.bootstrapslider(SurveyKo);
customWidget(SurveyKo);

SurveyKo.Serializer.addProperty("question", "tag:number");

var CKEDITOR = window["CKEDITOR"];

var CkEditor_ModalEditor = {
    afterRender: function (modalEditor, htmlElement) {
        if (typeof CKEDITOR === "undefined") 
            return;
        var editor = CKEDITOR.replace(htmlElement);
        var isUpdating = false;
        editor.on("change", function () {
            isUpdating = true;
            modalEditor.editingValue = editor.getData();
            isUpdating = false;
        });
        editor.setData(modalEditor.editingValue);
        modalEditor.onValueUpdated = function (newValue) {
            if (!isUpdating) {
                editor.setData(newValue);
            }
        };
    },
    destroy: function (modalEditor, htmlElement) {
        if (typeof CKEDITOR === "undefined") 
            return;
        var instance = CKEDITOR.instances[htmlElement.id];
        if (instance) {
            instance.removeAllListeners();
            instance.destroy(true);
            CKEDITOR.remove(instance);
        }
    }
};
SurveyCreator.SurveyPropertyModalEditor.registerCustomWidget(
  "html",
  CkEditor_ModalEditor
);
SurveyCreator.SurveyPropertyModalEditor.registerCustomWidget(
  "text",
  CkEditor_ModalEditor
);

export default {
  name: "survey-creator",
  data() {
    return {};
  },
  mounted() {
    let options = { showEmbededSurveyTab: true };
    this.surveyCreator = new SurveyCreator.SurveyCreator(
      "surveyCreatorContainer",
      options
    );
    this.surveyCreator.saveSurveyFunc = function() {
      console.log(JSON.stringify(this.text));
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
