---
title: "Using external scripts in Gatsby"
tags: ["javascript"]
published: true
date: "2019-11-08"
---

Exactly what do we mean by external scripts? Well, in my case it was a plain vanilla JS snippet of script that I had to insert in my website's body in order to get it working.

I could not find any working plugins so the only alternative was to insert the script.
To be more specific it, I wanted to insert the Hubspot Chatbot into a web app I was building. I needed it to be in the body of my layout.

According to the [Gatsby](https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody) documentation the best alternative for mr was to choose the ‘onRenderBody’ function, which doing the following:

Called after every page Gatsby server renders while building HTML so you can set head and body components to be rendered in your html.js.

Gatsby does a two-pass render for HTML. It loops through your pages first rendering only the body and then takes the result body HTML string and passes it as the body prop to your html.js to complete the render.

It’s often handy to be able to send custom components to your html.js. For example, it’s a very common pattern for React.js libraries that support server rendering to pull out data generated during the render to add to your HTML.

Using this API over replaceRenderer is preferable as multiple plugins can implement this API where only one plugin can take over server rendering. However, if your plugin requires taking over server rendering then that’s the one to use.

Step 1:
Create a new file in the root of your project called “Gatsby-ssr.js”

Step 2:
In that file add the following code:<br/>
`const React = require("react");` <br/>
`exports.onRenderBody = ({ setPreBodyComponents }) => {` <br/>
`setPreBodyComponents([ <script key="X" type="text/javascript" src="XXXXXX.js" /> ]); };`

As already mentioned I wanted the external Hubspot script to be in the body, hence the “setPreBodyComponents”. If you want it to be in the head then just change both the above to “setHeadComponents”.
