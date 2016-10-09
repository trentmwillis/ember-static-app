# Ember Static App

This addon is an experiment to enforce static resolution of an Ember application via ES `import` statements.

## "Static" Vs. Normal Ember Applications

1. Components
  - **S:** must _explicitly_ import all components used
  - **N:** can _implicitly_ use any available components found by the Resolver

2. Helpers
  - _TODO_

3. Injections
  - _TODO_

## Installation

* `git clone <repository-url>` this repository
* `cd ember-static-app`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
