const UniCards = ({
  filter,
  cardStyle,
  productComponent,
  productStyle,
  data,
}) => {
  return (
    <div
      className={`${cardStyle} grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-5`}
    >
      {filter
        ? data
            .filter(filter)
            .map((item) => (
              <div key={item.id}>
                {productComponent({ productStyle: productStyle, ...item })}
              </div>
            ))
        : data.map((item) => (
            <div key={item.id}>
              {productComponent({ productStyle: productStyle, ...item })}
            </div>
          ))}
    </div>
  );
};

export default UniCards;
