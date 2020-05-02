---
title: "Pure Components"
tags: ["react"]
published: true
date: "2020-01-03"
---

React.PureComponent är exakt samma som React.Component förutom att den hanterar metoden ``shouldComponentUpdate()`` för dig.

När props eller state ändras kommer PureComponent att göra en ytlig jämförelse av både props och state. Komponent å andra sidan kommer inte att jämföra aktuella props och state till nästa ut ur leden. Således kommer komponenten att återges som standard när shouldComponentUpdate anropas.
  

