---
title: "How to secure your Firebase config settings"
tags: ["javascript"]
published: true
date: "2019-12-24"
---

It’s always good prectice to hide all kinds of API keys for security reasons so that nobody can access the configuration settings in your app.

Best way to do it is by creating a .ENV file for local development and load the information in production by setting environment variables in Heroku/Netlify etc.

You can create a .ENV file with the following (you need to set the environment variables manually in Heroku/Netlify etc as your .ENV should be in your .gitignore and will not be uploaded):

`REACT_APP_APIKEY=INSERT THIS FROM GOOGLE REACT_APP_AUTH_DOMAIN=INSERT THIS FROM GOOGLE REACT_APP_DATABASEURL=INSERT THIS FROM GOOGLE REACT_APP_PROJECTID=INSERT THIS FROM GOOGLE REACT_APP_STORAGEBUCKET=INSERT THIS FROM GOOGLE REACT_APP_MESSAGINGSENDERID=INSERT THIS FROM GOOGLE REACT_APP_APPID=INSERT THIS FROM GOOGLE REACT_APP_MEASUREMENTID=INSERT THIS FROM GOOGLE`

Alternatively you can also destructure the process.env object like this:

`const { REACT_APP_APIKEY, REACT_APP_AUTH_DOMAIN, REACT_APP_DATABASEURL, REACT_APP_PROJECTID, REACT_APP_STORAGEBUCKET, REACT_APP_MESSAGINGSENDERID, REACT_APP_APPID, REACT_APP_MEASUREMENTID } = process.env`

Then in your firebase.utils.js you can modify the config object to this:

`const config = { apiKey: process.env.REACT_APP_APIKEY, authDomain: process.env.REACT_APP_AUTH_DOMAIN, databaseURL: process.env.REACT_APP_DATABASEURL, projectId: process.env.REACT_APP_PROJECTID, storageBucket: process.env.REACT_APP_STORAGEBUCKET, messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID, appId: process.env.REACT_APP_APPID, measurementId: process.env.REACT_APP_MEASUREMENTID }`

Or if you got the second example working:

`const config = { apiKey: REACT_APP_APIKEY, authDomain: REACT_APP_AUTH_DOMAIN, databaseURL: REACT_APP_DATABASEURL, projectId: REACT_APP_PROJECTID, storageBucket: REACT_APP_STORAGEBUCKET, messagingSenderId: REACT_APP_MESSAGINGSENDERID, appId: REACT_APP_APPID, measurementId: REACT_APP_MEASUREMENTID }`

Also take a look at this for more information: https://create-react-app.dev/docs/adding-custom-environment-variables/
