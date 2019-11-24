---
title: "What is React?"
tags: ["react"]
published: true
date: "2019-11-24"
---

React is a JavaScript library for building user interfaces created by Facebook. React is marketed as component-based, declarative and "create once, use everywhere".

Component-based means that our entire application is made up of several smaller components. Building component-based has many advantages: it allows us to combine several smaller components to create a new component. An example might be a List. In turn, the list can be made up of several List elements. A List element can be composed of a Thumbnail component and a Text component, etc. Structuring the application in this way allows us to reuse large parts of our code. For example, the thumbnail component I mentioned earlier can also used for our User Profile component or the like.

These components are implemented in a declarative way: we minimize side effects and allow our component to be a reflection of our data. If our data changes, this is reflected in our component. React is also responsible for ensuring that our data changes only update the components that are needed, so the application also gets better performance.

React is thus the library that allows us to create these components smoothly and React ensures that our components have good performance.

Today there is also the possibility to use React in several other places such as server, mobile applications and TV.

All this makes React my preferred way of writing complex web applications.

Modern projects based on React usually use many other tools. It is thrown around words like ES6, Webpack, Babel, ESLint and Redux. For someone who just wants to get started with React, this can be overwhelming. There are many different parts to get into just to get started.

Above, I mention words like side effects and declarative. If you come from a more object-oriented background and have never even touched a functional language, this may feel a bit strange. We will go into more of this when we start writing our own first components.
