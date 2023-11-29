import Title from "./Title";

const StandartContainer = ({
  children,
  title,
  subtitle,
  titleStyle,
  bodyStyle,
}) => {
  return (
    <>
      <div className={`${bodyStyle} w-full px-7 sm:px-20 xl:px-0 py-24`}>
        <div className="max-w-screen-lg mx-auto space-y-10">
          <div>
            <Title title={title} subtitle={subtitle} titleStyle={titleStyle} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default StandartContainer;
