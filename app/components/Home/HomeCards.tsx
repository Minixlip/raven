import Card from '../Misc/Card';

export default function HomeCards(props: any) {
  return (
    <div className="flex-1 flex flex-col mt-1 gap-1 ">
      <div className="flex flex-col items-center md:flex-row flex-1 gap-1">
        <Card cardInfo={props.cardClothes[0]} />
        <Card cardInfo={props.cardClothes[1]} />
      </div>
      <div className="flex flex-col items-center md:flex-row flex-1 gap-1">
        <Card cardInfo={props.cardClothes[2]} />
        <Card cardInfo={props.cardClothes[3]} />
      </div>
    </div>
  );
}
