(function () {
  angular
  .module('wdinstagram')
  .factory('Entry', [
    entryService
  ])

  function entryService () {
    const entries = [
      {
        photo_url: 'https://i.imgur.com/Qfx5jABm.jpg',
        author: 'Jessa',
        body: 'This is an awesome photo duuude.'
      },
      {
        photo_url: 'https://i.imgur.com/Qfx5jABm.jpg',
        author: 'Jemma',
        body: 'This happened today.'
      },
      {
        photo_url: 'https://i.imgur.com/Qfx5jABm.jpg',
        author: 'Elvis',
        body: 'I aint nothing but a houndog'
      }
    ]

    return {
      all: all,
      find: find
    }

    function all () {
      return entries
    }

    function find (id) {
      return entries[id]
    }
  }
})()
