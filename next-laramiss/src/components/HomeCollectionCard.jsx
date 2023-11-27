import Image from "next/image";
import Link from "next/link";

const HomeCollectionCard = (props) => {
  return (
    <>
      <Link href={"#"}>
        <div className="overflow-hidden">
          <Image
            className="hover:scale-110 transition-all duration-500"
            src={props.image}
            alt=""
          />
        </div>
        <div
          className={`${props.cardBodyStyle} text-center flex flex-col p-5 items-center justify-center space-y-3`}
        >
          <h1 className={`${props.titleStyle}`}>{props.title}</h1>
          <p className={`${props.subtitleStyle}`}>{props.subtitle}</p>
          <p className={`${props.descStyle}`}>{props.desc}</p>
        </div>
      </Link>
    </>
  );
};

export default HomeCollectionCard;
