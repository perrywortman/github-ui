import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service(),
  actions: {
    favoriteClicked(org) {
      this.get('favorites').favoriteItem(org);
    }
  },
  model(){
    return [
      {
        id: 'braintree'
      },
      {
        id: 'dropbox'
      },
      {
        id: 'google'
      },
      {
        id: 'netflix'
      },
      {
        id: 'facebook'
      },
      {
        id: 'coinbase'
      }
    ];
  }
});
