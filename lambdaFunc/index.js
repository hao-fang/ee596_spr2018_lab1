'use strict';

const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  //! TODO: please replace the appId with your Skill ID.
  alexa.appId = 'APP_ID';
  alexa.registerHandlers(handlers);
  alexa.execute();
};


// --------------- handlers ------------------

const handlers = {
  'NewSession': function () {
    // Called when the session starts
    console.log("NewSession requestId=" + this.event.request.requestId
      + ", sessionId=" + this.event.session["sessionId"]);

    this.emit('LaunchRequest');
  },

  'LaunchRequest': function () {
    // Called when the user launches the skill without specifying what they want
    console.log("LaunchRequest requestId=" + this.event.request.requestId
      + ", sessionId=" + this.event.session["sessionId"]);

    let cardTitle = "Welcome";
    let speechOutput = "Welcome to the Alexa Skills Kit sample. "
      + "Please tell me your favorite color by saying, "
      + "my favorite color is red";
    let repromptText = "Please tell me your favorite color by saying, "
      + "my favorite color is red.";

    this.response.speak(speechOutput)
      .listen(repromptText)
      .cardRenderer(cardTitle, speechOutput);
    this.emit(':responseReady');
  },

  'SessionEndedRequest': function () {
    console.log("SessionEndedRequest requestId=" + this.event.request.requestId
      + ", sessionId=" + this.event.session["sessionId"]);
    // add cleanup logic here
  },

  'MyColorIsIntent': function () {
    console.log("MyColorIsIntent requestId=" + this.event.request.requestId
      + ", sessionId=" + this.event.session["sessionId"]);

    //! get color from request
    let slots = this.event.request.intent.slots;
    let favoriteColor = null;
    let cardTitle = this.event.request.intent.name;
    let speechOutput;
    let repromptText;
    if (slots['Color']) {
      if (slots['Color']['value']) {
        favoriteColor = slots['Color']['value'];
      }
    }
    if (favoriteColor === null) {
      speechOutput = "I'm not sure what your favorite color is. "
        + "Please try again.";
      repromptText = "I'm not sure what your favorite color is. "
        + "You can tell me your favorite color by saying, "
        + "my favorite color is red.";
    } else {
      this.attributes['favoriteColor'] = favoriteColor
      speechOutput = "I now know your favorite color is "
        + favoriteColor
        + ". You can ask me your favorite color by saying, "
        + "what's my favorite color?";
      repromptText = "You can ask me your favorite color by saying, "
        + "what's my favorite color?";
    }

    this.response.speak(speechOutput)
      .listen(repromptText)
      .cardRenderer(cardTitle, speechOutput);
    this.emit(':responseReady');
  },

  'WhatsMyColorIntent': function () {
    console.log("WhatsMyColorIntent requestId=" + this.event.request.requestId
      + ", sessionId=" + this.event.session["sessionId"]);

    let favoriteColor = this.attributes['favoriteColor'];
    let cardTitle;
    let speechOutput;
    let repromptText = null;

    if (favoriteColor) {
      speechOutput = "Your favorite color is " + favoriteColor + ". Goodbye.";
      this.response.speak(speechOutput)
        .cardRenderer(cardTitle, speechOutput);
    } else {
      speechOutput = "I'm not sure what your favorite color is."
        + "You can say, my favorite color is red.";
      this.response.speak(speechOutput)
        .listen(repromptText)
        .cardRenderer(cardTitle, speechOutput);
    }

    this.emit(':responseReady');
  },

  'AMAZON.HelpIntent': function () {
    this.emit('LaunchRequest');
  },

  'AMAZON.CancelIntent': function () {
    this.emit('SessionEndedRequest');
  },

  'AMAZON.StopIntent': function () {
    this.emit('SessionEndedRequest');
  },

  'Unhandled': function () {
    //! Unknown intent
    console.log("Unhandled requestId=" + this.event.request.requestId
      + ", sessionId=" + this.event.session["sessionId"]);

    let cardTitle = this.event.request.intent.name;
    let speechOutput = "Sorry, I didn't get that.";
    let repromptText = "You can say, my favorite color is red";

    this.response.speak(speechOutput)
      .listen(repromptText)
      .cardRenderer(cardTitle, speechOutput);
    this.emit(':responseReady');
  }

};
