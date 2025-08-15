import Card from './Card';
import { CardInterface } from '../types/card.types';
import { usePrices } from '../hooks/usePrices';

const ListCards = () => {
  const { prices } = usePrices();

  console.log();

  return (
    <section className='max-w-7xl mt-20 mx-auto px-14 mb-16 py-8 grid grid-auto-fluid place-items-center gap-10'>
      {prices.map((card: CardInterface) => (
        <Card key={card.image} card={card} />
      ))}
    </section>
  );
};

export default ListCards;
