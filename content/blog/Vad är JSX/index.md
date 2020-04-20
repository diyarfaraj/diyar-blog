---
title: "Vad är JSX?"
tags: ["react"]
published: true
date: "2019-12-26"
---

JSX är en XML-liknande syntaxförlängning till ECMAScript (akronymen står för JavaScript XML). 

I grunden ger det bara syntaktiskt socker för funktionen ``React.createElement()`` vilket ger oss uttrycksfullhet av JavaScript tillsammans med HTML som mallsyntax.

I exemplet nedan återgår texten i h1-taggen som JavaScript-funktion till renderfunktionen.
```javascript
class App extends React.Component {
  render() {
    return(
      <div>
        <h1>{'Welcome to React world!'}</h1>
      </div>
    )
  }
}
```