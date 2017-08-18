(function () {
  angular
  .module('wdinstagram')
  .controller('EntriesNewController', [
    '$state',
    'Entry',
    EntriesNewController
  ])

  function EntriesNewController ($state, Entry) {
    this.entry = new Entry()
    this.create = function () {
      this.entry.$save(() => {
        $state.go('entriesIndex')
      })
    }
  }
})()
