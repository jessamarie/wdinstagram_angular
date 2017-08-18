(function () {
  angular
  .module('wdinstagram')
  .factory('Entry', [
    '$resource',
    entryService
  ])

  function entryService ($resource) {
    return $resource('http://localhost:3000/entries/:id', {}, {
      update: {
        method: 'PUT'
      }
    })
    // const entries = [
    //   {
    //     photo_url: 'https://i.imgur.com/Qfx5jABm.jpg',
    //     author: 'Jessa',
    //     body: 'This is an awesome photo duuude.'
    //   },
    //   {
    //     photo_url: 'https://i.imgur.com/Qfx5jABm.jpg',
    //     author: 'Jemma',
    //     body: 'This happened today.'
    //   },
    //   {
    //     photo_url: 'https://i.imgur.com/Qfx5jABm.jpg',
    //     author: 'Elvis',
    //     body: 'I aint nothing but a houndog'
    //   }
    // ]
    //
    // return {
    //   all: all,
    //   find: find
    // }
    //
    // function all () {
    //   return entries
    // }
    //
    // function find (id) {
    //   return entries[id]
    // }
  }
})()
