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
    <!-- If you want to hide Survey Creator, comment the line below -->
    <survey-creator></survey-creator>
  </div>
</template>

<script>
//In your VueJS App.vue or yourComponent.vue file add these lines to import
import SurveyCreator from './components/SurveyCreator'
import * as SurveyVue from 'survey-vue'
import 'bootstrap/dist/css/bootstrap.css';

var Survey = SurveyVue.Survey
Survey.cssType = "bootstrap";

//If you want to add custom widgets package
//Add these imports
import * as widgets from "surveyjs-widgets";

//And initialize widgets you are want ti use
widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);

export default {
  name: 'app',
  components: {
    Survey,
    SurveyCreator
  },
  data () {
    //Define Survey JSON
    //Here is the simplest Survey with one text question
    var json = {
     elements: [
      { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
     ]
    };
    
    //Create the model and pass it into VueSJ Survey component
    var model = new SurveyVue.Model(json)
    //You may set model properties
    // model.mode="display"

    return {
        survey: model
    }
  }
}
</script>
```
