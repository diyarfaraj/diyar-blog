---
title: "React: Skillnaden mellan element och komponent"
tags: ["react"]
published: true
date: "2019-12-27"
---

Ett element är ett vanligt objekt som beskriver vad som ska visas på skärmen när det gäller DOM-noder eller andra komponenter. 
Element kan innehålla andra element i sina props. Att skapa ett React-element är enkel. När ett element har skapats, är den omuterbart.

Objektrepresentationen av React Element skulle vara följande:
```javascript
const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)
```
Funktionen ovan ``React.createElement()`` returnerar ett objekt:
```
{
  type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}
```
Och slutligen skickas den till DOM med ``ReactDOM.render ()`` för att renderas enligt nedan: 
```html
<div id='login-btn'>Login</div>
```
En komponent kan deklareras på flera olika sätt. Det kan vara en klass med en render ()-metod. 
Alternativt kan det i enkla fall definieras som en funktion. 
I båda fallen tar det props som input och returnerar ett JSX-träd som output:
```javascript
const Button = ({ onLogin }) => React.createElement(
  'div',
  { id: 'login-btn', onClick: onLogin },
  'Login'
)
```