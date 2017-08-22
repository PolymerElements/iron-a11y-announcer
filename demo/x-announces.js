import '../../polymer/polymer.js';
import { IronA11yAnnouncer } from '../iron-a11y-announcer.js';
import '../../paper-button/paper-button.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
        padding: 1em 0;
        font-family: inherit;
      }
    </style>

    <span>[[message]]</span>
    <paper-button raised="" on-tap="_onTapAnnounce">Announce</paper-button>
`,

  is: 'x-announces',

  hostAttributes: {
    'aria-hidden': 'true'
  },

  properties: {
    message: {
      type: String
    }
  },

  attached: function() {
    IronA11yAnnouncer.requestAvailability();
  },

  _onTapAnnounce: function() {
    this.fire('iron-announce', {
      text: this.message.trim()
    }, {
      bubbles: true
    });
  }
});
