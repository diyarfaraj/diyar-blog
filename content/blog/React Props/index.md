---
title: "Vad är state i React?"
tags: ["react"]
published: true
date: "2020-01-07"
---

En [komponents](https://diyar.tech/Skapa-komponent-i-React) state är ett objekt som innehåller
viss information som kan förändras under komponentens livslängd sk. lifecycle.
Man bör alltid försöka göra en komponents state så enkelt som möjligt och minimera antalet komponenter som har egna state.

Låt oss skapa en användarkomponent med meddelande som state:

``` javascript 
class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Welcome to React world'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}
```

State liknar till stor del props men det är privat och helt  kontrollerat av komponenten. dvs. det är inte 
tillgängligt för någon annan komponent än den som äger och sätter in den.


  

