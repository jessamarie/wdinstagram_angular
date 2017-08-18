(function () {
  angular
  .module('wdinstagram')
  .controller('EntriesIndexController', [
    'Entry',
    EntriesIndexController
  ])

  function EntriesIndexController (Entry) {
    this.entries = Entry.query()
  }
})()
