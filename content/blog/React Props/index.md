---
title: "React props"
tags: ["react"]
published: true
date: "2020-01-17"
---

Props är inputs till React-komponenter. De är enskilda värden eller objekt som innehåller en uppsättning värden som skickas till komponenter vid skapandet med hjälp av en namnkonvention som liknar HTML-taggattribut. Det är data som skickas från en överordnad komponent till en underordnad komponent.

Det primära syftet med props i React är att tillhandahålla följande komponentfunktionalitet:

- Skicka anpassade data till din komponent.
- Trigger-tillstånd ändras.
- Använd via ``this.props.reactProp`` inuti komponentens ``render()`` -metod.
- 
Låt oss till exempel skapa ett element med ``reactProp``-egenskapen:

``` javascript 
<Element reactProp={'1'} />
```

Detta ``reactProp`` (eller vad du än nämnde den med) blir då en egenskap som är kopplad till React's native props-objekt som ursprungligen redan finns på alla komponenter som skapats med React-biblioteket.

``props.reactProp``. 


  

