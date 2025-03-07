import ItemDisplay from '../components/Shop/ItemDisplay';

const mockData = [
  {
    clothingName: 'FREEDOM GRAPHIC TEE',
    link: 'https://framerusercontent.com/images/TITuLcYSx53fInKnsoSGfE8Xuw.jpg',
    description:
      'Bold expression through minimal design. Our Freedom Graphic Tee Series 1 features architectural prints on premium cotton.',
    price: 85,
  },
];

export default function ShopItem() {
  return (
    <div>
      <ItemDisplay clothing={mockData[0]} />
    </div>
  );
}
