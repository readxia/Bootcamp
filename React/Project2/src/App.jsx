import { useState } from 'react'
import './App.css'
import Videos from './Videos'

function App() {
  
  let videoList = [
    {
      title: "Steve Jobs' Vision of the World",
      url: "https://www.youtube.com/embed/upzKj-1HaKw"
    },

    {
      title: "Steve Jobs on Microsoft",
      url: "https://www.youtube.com/embed/jcFbGsl8DDI"
    },

    {
      title: "Steve Jobs on programming",
      url: "https://www.youtube.com/embed/5fI3zz2cp3k"
    },
  ]


  return (
    <div>
      <h1>Welcome to the Ultimate Steve Jobs Fan Website!</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg" width="500px"></img>
      <p>Steve Jobs was the co-founder and CEO of Apple Inc. He is widely considered to be a brilliant businessman, as well as one of the greatest tech visionaries on our time.</p>
      <p>The story of his life is nothing short of fascinating. After dropping out of college,he started Apple with his friend <a href="https://en.wikipedia.org/wiki/Steve_Wozniak">Steve Wozniak</a> in 1976 at the age of 21. The duo gained wealth and fame a year later for the <a href="https://en.wikipedia.org/wiki/Apple_II">Apple II</a>
        , one of the first highly successful mass-oproduced personal computers. This was followed by the very successful Maintoush in 1984, the first mass-rpoduced computer with aGUI (graphical user interface).
        After being ousted of Apple in 1985, he went on to oversee the creation of two new companies: NeXT computer and <a href="https://en.wikipedia.org/wiki/Pixar">Pixar</a>. With the success of the movie Toy Story, Steve became a billionaire.</p>
        <p>In 1997, Steve returned to Apple. Bill Gates and Microsoft dominated the computer industry, and Apple was on the brink of extinction. Nonetheless, <a href="https://en.wikipedia.org/wiki/Reality_distortion_field">Steve was a fantastic salesman</a>, and used his business acumen to slowly bring the company back to profitability.</p>
        <h1>Steve Jobs Resources</h1>
        <p>Apple's tribute to Steve Jobs:</p>
        <a href="https://www.apple.com/stevejobs/">Remembering Steve</a>
        <p>The Steve Jobs Biography</p>
        <a href="https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537">Steve Jobs</a>
        <p>The Steve Jobs Movie</p>
        <a href="https://www.imdb.com/title/tt2080374/">Steve Jobs on IMDB</a>
        <h1>Check out these Steve Job's Videos</h1>
        
      {/* maps through the objects in the videoList and displays them in their own video component */}
      {videoList.map((video) => (
        <Videos title={video.title} url={video.url}/>
      ))}

    </div>
  )
}

export default App
