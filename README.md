# SurveyJS + Vue Quickstart Template 

SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template uses Vue 2 and the following SurveyJS components:

- [SurveyJS Library / Runner](https://surveyjs.io/Documentation/Library?id=LibraryOverview)
- [Survey Creator / Form Builder](https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview)
- [PDF Export](https://surveyjs.io/Documentation/Pdf-Export?id=PdfExportOverview)
- [Survey Analytics](https://surveyjs.io/Documentation/Analytics?id=AnalyticsOverview)

## Run the application

```bash
git clone https://github.com/surveyjs/surveyjs_vue_quickstart.git
cd surveyjs_vue_quickstart
npm i
npm run serve
```

Open http://localhost:8080/ in your web browser.

## Template structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [src/data/survey_json.js](src/data/survey_json.js)
  - [src/views/Survey.vue](src/views/Survey.vue)
- Add Survey Creator to a page
  - [src/components/SurveyCreator.vue](src/components/SurveyCreator.vue)
  - [src/views/Creator.vue](src/views/Creator.vue)
- Export a survey to a PDF document
  - [src/views/ExportToPDF.vue](src/views/ExportToPDF.vue)
- Visualize survey results
  - As charts
    - [src/data/analytics_data.js](src/data/analytics_data.js)
    - [src/views/Analytics.vue](src/views/Analytics.vue)
  - As a table (modern browsers)
    - [src/data/analytics_data.js](src/data/analytics_data.js)
    - [src/views/AnalyticsTabulator.vue](src/views/AnalyticsTabulator.vue)
  - As a table (old browsers)
    - [src/data/analytics_data.js](src/data/analytics_data.js)
    - [src/views/AnalyticsDatatables.vue](src/views/AnalyticsDatatables.vue)
- Create a custom question type
  - [src/components/customwidget.js](src/components/customwidget.js)
- Register third-party components
  - [src/components/SurveyCreator.vue](src/components/SurveyCreator.vue#L16)