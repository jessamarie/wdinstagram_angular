# WDInstagram Angular

## TODO:
[ ] make images on index page crop
[ ] make images on show page non-cropped/Original
[ ] remove padding on create page
[ ] add edit/update page from show page
[ ] add destroy button on show page

## Original HW Assignment:

Fork and Clone

Make a simple instagram clone!

## Part 1 CRUD with dummy data

Build a simple Angular app that can preform CRUD on dummy data. Each `entry` should have a: `photo_url`, `author`, & `body`. Add a router, and templates for at least a `show` & `index` view.

## Part 2 CRUD with API

Clone the [WDInstagram api](https://github.com/ga-wdi-exercises/wdinstagram_rails_api) - you don't need to fork as you won't be modifying this

```shell
$ bundle install
$ rails db:create
$ rails db:migrate
$ rails db:seed
$ rails s
```

Create a factory that integrates with the API so that CRUD changes will be persisted

## Bonus

If you're feeling frisky add some custom directives

## Super Bonus

Integrate your Angular code into the Rails API's codebase, so its just one big app.
