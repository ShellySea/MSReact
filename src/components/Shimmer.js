const Shimmer = () => {
  const mapped = Array.from({ length: 12 }).map((el, i) => {
    console.log(el);
    return (
      <div className="card" key={i}>
        <div className="shimmerBG media"></div>
        <div className="p-32">
          <div className="shimmerBG title-line"></div>
          <div className="shimmerBG title-line end"></div>
          <div className="shimmerBG content-line m-t-24"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
    );
  });

  return <div className="shimmer-container">{mapped}</div>;
};

export default Shimmer;
