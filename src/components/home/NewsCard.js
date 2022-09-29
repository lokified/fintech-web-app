
import "./NewsCard.css"

export const NewsCard = (props) => {
  return (
    <>
      <div className="news-card">
        <p>{props.newsDesc}</p>
        <button> continue &gt;&gt; </button>
      </div>
    </>
  );
};