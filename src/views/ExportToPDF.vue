<template>
  <div class="container">
    <div class="jumbotron">
      <h2>Export survey to a PDF document</h2>
      <p>
        The SurveyJS PDF Export library allows you to render SurveyJS Library surveys to PDF in
        a browser which can be later emailed or printed.
      </p>
      <p>Click the button below to get a PDF document.</p>
    </div>
    <div>
      <button v-on:click="savePDF">Save PDF</button>
    </div>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import * as SurveyPDF from "survey-pdf";
import "bootstrap/dist/css/bootstrap.css";
var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

import * as widgets from "surveyjs-widgets";

// widgets.icheck(SurveyVue);
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

SurveyVue.Serializer.addProperty("question", "tag:number");

/* eslint-disable vue/no-unused-components */
export default {
  components: {
    Survey
  },
  data() {
    var json = {
      title: "Product Feedback Survey Example",
      showProgressBar: "top",
      pages: [
        {
          questions: [
            {
              type: "matrix",
              name: "Quality",
              title:
                "Please indicate if you agree or disagree with the following statements",
              columns: [
                {
                  value: 1,
                  text: "Strongly Disagree"
                },
                {
                  value: 2,
                  text: "Disagree"
                },
                {
                  value: 3,
                  text: "Neutral"
                },
                {
                  value: 4,
                  text: "Agree"
                },
                {
                  value: 5,
                  text: "Strongly Agree"
                }
              ],
              rows: [
                {
                  value: "affordable",
                  text: "Product is affordable"
                },
                {
                  value: "does what it claims",
                  text: "Product does what it claims"
                },
                {
                  value: "better then others",
                  text: "Product is better than other products on the market"
                },
                {
                  value: "easy to use",
                  text: "Product is easy to use"
                }
              ]
            },
            {
              type: "rating",
              name: "satisfaction",
              title: "How satisfied are you with the Product?",
              mininumRateDescription: "Not Satisfied",
              maximumRateDescription: "Completely satisfied"
            },
            {
              type: "rating",
              name: "recommend friends",
              visibleIf: "{satisfaction} > 3",
              title:
                "How likely are you to recommend the Product to a friend or co-worker?",
              mininumRateDescription: "Will not recommend",
              maximumRateDescription: "I will recommend"
            },
            {
              type: "comment",
              name: "suggestions",
              title: "What would make you more satisfied with the Product?"
            }
          ]
        },
        {
          questions: [
            {
              type: "radiogroup",
              name: "price to competitors",
              title: "Compared to our competitors, do you feel the Product is",
              choices: [
                "Less expensive",
                "Priced about the same",
                "More expensive",
                "Not sure"
              ]
            },
            {
              type: "radiogroup",
              name: "price",
              title: "Do you feel our current price is merited by our product?",
              choices: [
                "correct|Yes, the price is about right",
                "low|No, the price is too low for your product",
                "high|No, the price is too high for your product"
              ]
            },
            {
              type: "multipletext",
              name: "pricelimit",
              title: "What is the... ",
              items: [
                {
                  name: "mostamount",
                  title:
                    "Most amount you would every pay for a product like ours"
                },
                {
                  name: "leastamount",
                  title: "The least amount you would feel comfortable paying"
                }
              ]
            }
          ]
        },
        {
          questions: [
            {
              type: "text",
              name: "email",
              title:
                'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
            }
          ]
        }
      ]
    };
    var model = new SurveyVue.Model(json);
    var savePDF = function() {
      var surveyPDF = new SurveyPDF.SurveyPDF(json);
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
