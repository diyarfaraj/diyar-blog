---
title: "Skapa komponent i React"
tags: ["react"]
published: true
date: "2019-12-29"
---

Det finns två möjliga sätt att skapa en komponent.

 - Funktionskomponenter: Detta är det enklaste sättet att skapa en komponent. Det är rena JavaScript-funktioner som accepterar props objekt som första parameter och returnera React element:
  
```javascript
function Greeting({ name }) {
  return <h1>{`Hello, ${name}`}</h1>

}
```

- Klasskomponenter: Du kan också använda ES6-klasser för att definiera en komponent. Ovanstående funktionskomponent kan skrivas som
```javascript
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.name}`}</h1>
  }
}
```
