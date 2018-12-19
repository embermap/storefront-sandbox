import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  title(i) {
    return `Post ${i}`;
  },

  body: "This is a test post!"

});
