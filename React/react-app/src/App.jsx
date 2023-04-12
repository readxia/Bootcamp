import React from 'react'
import jonArbuckle from './assets/jon-arbuckle.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <h1>About Jon Arbuckle</h1>
      <img src={jonArbuckle} width='200px'/>
      <div class='intro'>
        <p>Hi there everyone! My name is <u>Jon Arbuckle </u>. I am 30 years old and I am a cartoonist that lives in Muncie, Indiana. 
              I am the proud owner of a cat named <strong>Garfield</strong> and a dog named <strong>Odie</strong>.
          Garfield is fat, lazy and loves to eat, while Odie is a dog without a brain. Although my pets drive me <em>crazy</em>, I can't imagine my life without them.</p>

        <p>I spend about half my time going to the grocery store to buy enough food to feed Garfield, I have to make sure to buy all of Garfield's favorite foods,
            or else he'll get grumpy. This includes milk, cheese, bread, ham, chicken wings, potato chips, pasta with marinara sauce,
            frozen pizzas, and <strong>lots and lots</strong> of lasagna. When I come home, Garfield usually attacks me and tries to eat everything in the grocery bag
            before I even have time to put it in the refrigerator. One time he ate everything that I bought in 30 seconds, and I had to go back to the store to buy more food.
            <em> I wasn't too happy about that</em>. </p>
      </div>


          <hr></hr>

          <h1>Garfield's favorite foods</h1>
        <ul>
            <li>Pepperoni Pizza</li>
            <li>Spaghetti with meatballs</li>
            <li>Jumbo shrimp</li>
            <li>Lobster with filet mignon</li>
        </ul>

        <h1>Things that Garfield hates</h1>

        <ol>
            <li>Mondays</li>
            <li>Spiders</li>
            <li>Raisins</li>
            <li>Jon singing in the shower</li>
        </ol>
    </div>
  )
}

export default App
