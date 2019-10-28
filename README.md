# Project is based on (https://learnredux.com/) tutorial by [Wes Bos](http://wesbos.com/).

## Motivation

Idea behind the project was to update app made during this great tutorial by Wes
for all those who might've struggled or are unfamiliar with older React syntax.

I tried to keep it as close to original code as possible and replicate 100% of the
functionalities. Please also read comments in files.

In course mainly latest possible version were used (exception: react-transition-group
(https://github.com/reactjs/react-transition-group/tree/v1-stable) - v1 was used
to keep <CSSTransitionGroup /> component compatible with original one coded by Wes)

### Installation:

```
1.  Clone repo
2.  yarn
3.  yarn start
```

## Notes:

- Node version should be >= 8.6.0

- src/index.js = reduxstagram.js

- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
  and formatted with Prettier.

- It is possible to time travel between url changes using Dev Tools, thanks to
  connected-react-router package (https://github.com/supasate/connected-react-router).

- Styles (.styl) are outputted in single .css file (style.css) and that files is
  imported in index.js. It was possible thanks to create-react-app-stylus package
  (https://www.npmjs.com/package/create-react-app-stylus).

- One should delete contents of /actions, /components, /reducers, remove
  store.js and delete some code in index.js and then perform "yarn" in terminal
  to obtain clean project.

- Before setting up Router please see comments in, among others, index.js & Main.jsx.

- Also when setting up store please first check index.js, store.js & /reducers/index.js.

- Lecture 17 (Error Tracking and Insights with Sentry) was skipped in this project,
  if you want to get most up to date info check (https://www.npmjs.com/package/raven-js).

- Lecture 18 (Hot Reloading Redux Reducers with webpack) doesn't apply, because Create
  React App takes care of hot reloading.

**HUGE THANKS TO WES BOS FOR THIS AMAZING TUTORIAL! (https://learnredux.com/)**

Enjoy! :)
