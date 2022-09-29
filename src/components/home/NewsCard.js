
import "./NewsCard.css"

export const NewsCard = (props) => {
  return (
    <>
      <div className="swiper-slide news-card">
        <p>{props.newsDesc}</p>
        <button> Read &gt;&gt; </button>
      </div>
    </>
  );
};