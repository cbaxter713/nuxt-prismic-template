# nuxt-prismic-template

> A Basic Nuxt project with Prismic headless CMS integration.

## Prerequisites
Nuxt requires your base `node` version to be at least `8.0`.
We recommend using `nvm` to manage the node versions on your machine.
Learn how to [install nvm](https://github.com/creationix/nvm) if you don't already have it.

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# deploy project to heroku
$ npm run deploy:heroku
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Documentation
This project uses [Vue Styleguidist](https://vue-styleguidist.github.io/) for component documentation.  

To run the component style guide locally, simply run:
`npm run styleguide`

All relevant components automatically have their Vue props documented by name, type and required attributes.  When adding any components it is strongly recommended that you add additional documentation for basic descriptions, events, examples, etc.

For more information on how to document your single file components, go [here](https://vue-styleguidist.github.io/Documenting.html)

## Troubleshooting
> Sometimes the global `node-sass` setup on your machine can go awry. If you try running the project and encounter errors related to `node-sass`, run the following command to clear up that issue: `npm rebuild node-sass`
