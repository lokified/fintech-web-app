import { NewsCard } from "./NewsCard"
import "./NewsCards.css"

export const NewsCards =() => {

    return (
      <>
        <div className="news-cards">
          <NewsCard
            newsDesc="Here, we have a quote card. We want users to be able to swipe it if
            the minimum threshold to load a new quote is reached, it should move
            back to its original position and load a new quote."
          />

          <NewsCard
            newsDesc="Here, we have a quote card. We want users to be able to swipe it if
            the minimum threshold to load a new quote is reached, it should move
            back to its original position and load a new quote."
          />

          <NewsCard
            newsDesc="Here, we have a quote card. We want users to be able to swipe it if
            the minimum threshold to load a new quote is reached, it should move
            back to its original position and load a new quote."
          />

        </div>
      </>
    );
}