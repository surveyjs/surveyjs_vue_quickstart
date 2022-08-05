
// Refer to the following help topic for details:
// https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget
export function init(Survey) {
  const widget = {
    name: "textwithbutton",
    title: "Text with button",
    iconName: "",
    widgetIsLoaded: function () {
      return true;
    },
    isFit: function (question) {
      return question.getType() === 'textwithbutton';
    },
    activatedByChanged: function () {
      Survey.JsonObject.metaData.addClass("textwithbutton", [], null, "text");
      Survey.JsonObject.metaData.addProperties("textwithbutton", [
        { name: "buttonText", default: "Click Me" }
      ]);
    },
    isDefaultRender: false,
    htmlTemplate: "<div><input /><button></button></div>",
    afterRender: function (question, el) {
      const text = el.getElementsByTagName("input")[0];
      text.inputType = question.inputType;
      text.placeholder = question.placeHolder;
      const button = el.getElementsByTagName("button")[0];
      button.innerText = question.buttonText;
      button.onclick = function () {
        question.value = "You have clicked me";
      }
      text.onchange = function () {
        question.value = text.value;
      }
      const onValueChangedCallback = function () {
        text.value = question.value ? question.value : "";
      }
      const onReadOnlyChangedCallback = function() {
        if (question.isReadOnly) {
          text.setAttribute('disabled', 'disabled');
          button.setAttribute('disabled', 'disabled');
        } else {
          text.removeAttribute("disabled");
          button.removeAttribute("disabled");
        }
      };
      question.readOnlyChangedCallback = onReadOnlyChangedCallback;
      question.valueChangedCallback = onValueChangedCallback;
      onValueChangedCallback();
      onReadOnlyChangedCallback();
    }
  }
  
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}