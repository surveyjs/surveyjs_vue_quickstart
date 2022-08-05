export const json = {
  title: "Product Feedback Survey",
  showProgressBar: "top",
  pages: [{
    elements: [{
      type: "matrix",
      name: "Quality",
      title: "Please indicate if you agree or disagree with the following statements",
      columns: [{
        value: 1,
        text: "Strongly disagree"
      }, {
        value: 2,
        text: "Disagree"
      }, {
        value: 3,
        text: "Neutral"
      }, {
        value: 4,
        text: "Agree"
      }, {
        value: 5,
        text: "Strongly agree"
      }],
      rows: [{
        value: "affordable",
        text: "Product is affordable"
      }, {
        value: "does what it claims",
        text: "Product does what it claims"
      }, {
        value: "better then others",
        text: "Product is better than other products on the market"
      }, {
        value: "easy to use",
        text: "Product is easy to use"
      }]
    }, {
      type: "rating",
      name: "satisfaction",
      title: "How satisfied are you with the product?",
      mininumRateDescription: "Not satisfied",
      maximumRateDescription: "Completely satisfied"
    }, {
      type: "rating",
      name: "recommend friends",
      visibleIf: "{satisfaction} > 3",
      title: "How likely are you to recommend the product to a friend or colleague?",
      mininumRateDescription: "Won't recommend",
      maximumRateDescription: "Will recommend"
    }, {
      type: "comment",
      name: "suggestions",
      title: "What would make you more satisfied with the product?"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "price to competitors",
      title: "Compared to our competitors, do you feel the product is",
      choices: [
        "Less expensive",
        "Priced about the same",
        "More expensive",
        "Not sure"
      ]
    }, {
      type: "radiogroup",
      name: "price",
      title: "Do you feel our current price is merited by our product?",
      choices: [
        "correct|Yes, the price is about right",
        "low|No, the price is too low",
        "high|No, the price is too high"
      ]
    }, {
      type: "multipletext",
      name: "pricelimit",
      title: "What is the... ",
      items: [{
        name: "mostamount",
        title: "Most amount you would pay for a product like ours"
      }, {
        name: "leastamount",
        title: "The least amount you would feel comfortable paying"
      }]
    }]
  }, {
    elements: [{
      type: "text",
      name: "email",
      title: 'Thank you for taking our survey. Please enter your email address and press the "Submit" button.'
    }]
  }]
};