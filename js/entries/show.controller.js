(function () {
  angular
  .module('wdinstagram')
  .controller('EntriesShowController', [
    '$stateParams',
    'Entry',
    EntriesShowController
  ])

  function EntriesShowController ($stateParams, Entry) {
    this.entry = Entry.get({id: $stateParams.id})
  }
})()
