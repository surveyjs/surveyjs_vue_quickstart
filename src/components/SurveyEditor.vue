<template>
<div id="surveyEditorContainer"></div>
</template>

<script>
import * as SurveyEditor from 'surveyjs-editor'
import 'surveyjs-editor/surveyeditor.css';

export default {
  name: 'survey-editor',
  data () {
    return {
    }
  },
  mounted () {
    let editorOptions = { showEmbededSurveyTab: true };
    this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
    this.editor.saveSurveyFunc = function() {
      console.log(JSON.stringify(this.text));
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
