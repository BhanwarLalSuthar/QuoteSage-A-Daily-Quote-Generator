import axios from "axios";
import  { useState, useEffect} from "react";
import QouteButton from "./components/QuoteButton"
import QuoteCard from "./components/QuoteCard"
import ThemeToggle from "./components/ThemeToggle"
import FontSizeDropDown from "./components/FontSizeDropdown"

function App() {
  const [quote, setQuote] = useState("Quote goes here");
  const [author, setAuthor] = useState("Author goes here");
  const [liked, setLiked] = useState(() =>{
    const storedLikes = JSON.parse(localStorage.getItem("likedQuotes")|| "{}");
    return storedLikes[quote] || false
  });
  const [fontSize, setFontSize] = useState(() =>{
    return localStorage.getItem("fontSize") || "text-lg"
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [loading, setLoading] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => {
      const newLiked = !prev;
      const storedLikes = JSON.parse(localStorage.getItem("likedQuotes") || "{}");
      storedLikes[quote] = newLiked;
      localStorage.setItem("likedQuotes", JSON.stringify(storedLikes));
      return newLiked;
    });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light" ));
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  const fetchNewQuote = async() =>{
    try {
      setQuote("");
      setAuthor("");
      setLoading(true);
      const res = await axios.get(
        "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random")
      );
      const data = JSON.parse(res.data.contents)[0];
      console.log(data.q)
      console.log("Fetching new quote...");
      
      setQuote(data.q);
      setAuthor(data.a);
      // Check if this quote is already liked
      const storedLikes = JSON.parse(localStorage.getItem("likedQuotes") || "{}");
      setLiked(storedLikes[data.q] || false);
    } catch (err) {
      setQuote("Failed to fetch quote");
      setAuthor("Error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNewQuote();
    localStorage.setItem("theme", theme);
    localStorage.setItem("fontSize", fontSize);
  }, [theme, fontSize]);

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} min-h-screen sm:p-6 transition-colors duration-300`}>
      <div className="max-w-2xl mx-auto space-y-4">
        <ThemeToggle currentTheme={theme} onToggle={toggleTheme}/>
        <FontSizeDropDown fontSize={fontSize} onChange={handleFontSizeChange} />
        <QuoteCard 
          quote={quote}
          author={author}
          liked={liked}
          onLikeToggle={toggleLike}
          fontSize={fontSize}
          theme={theme}
          />
        <QouteButton onClick={() => {
          console.log("new quote clicked")
          fetchNewQuote()
          // disabled={loading}
          }}>
            New Quote
        </QouteButton>
      </div>
    </div>
  )
}

export default App
