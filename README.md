# VueJS QuickStart Source - SurveyJS: Survey Library and Survey Creator

## How to run this sample application
 - git clone https://github.com/surveyjs/surveyjs_vue_quickstart.git
 - cd surveyjs_vue_quickstart
 - npm i
 - npm run serve
 - open http://localhost:8080/ in your web browser


For detailed explanation on how VueJS things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Add survey component on your page
```JavaScript
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- If you want to show survey, uncomment the line below -->
    <!-- <survey :survey="survey"></survey> -->
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import "survey-vue/defaultV2.css";
SurveyVue.StylesManager.applyTheme("defaultV2");

var Survey = SurveyVue.Survey;

export default {
  components: {
    Survey
  },
  data() {
    var json = {
     elements: [
      { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
     ]
    };
    var model = new SurveyVue.Model(json);
    return {
      survey: model
    };
  }
};
</script>
```
