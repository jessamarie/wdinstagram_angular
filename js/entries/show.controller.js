(function () {
  angular
  .module('wdinstagram')
  .controller('EntriesShowController', [
    '$stateParams',
    'Entry',
    EntriesShowController
  ])

  function EntriesShowController ($stateParams, Entry) {
    this.entry = Entry.find($stateParams.id)
  }
})()
