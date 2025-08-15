import { usePrices } from '../hooks/usePrices';
import { CardInterface } from '../interfaces/card.interface';
import Loader from './Loader';

type CardProps = {
  card: CardInterface;
};

const Card = ({ card }: CardProps) => {
  const { prices } = usePrices();

  return (
    <div className='relative w-56 h-[370px] rounded-2xl border-4 border-white-custom overflow-hidden bg-white-custom cursor-pointer transition-all ease-in-out card-wrap hover:scale-105'>
      <div className='w-full h-48 grid place-items-center card-header one'>
        <img
          className='aspect-square'
          width={120}
          height={120}
          src={card.image}
          alt={card.title}
        />
      </div>
      <div className='w-3/5 h-40 mx-auto flex flex-col  items-center justify-between'>
        <h2 className='text-center min-h-[40px] uppercase text-xl font-semibold text-gradient  '>
          {card.name}
        </h2>
        <p className='text-center text-sm text-gray-600 font-medium tracking-wide'>
          {card.fecha}
        </p>
        <button className='w-40 h-9 py-1 rounded-md font-semibold text-xl text-white uppercase card-btn one transition-all duration-300'>
          {card.price === 'loading' ? (
            <Loader className='w-5 h-5' />
          ) : (
            <span className='flex items-center pl-11'>
              {parseFloat(card?.price.replace(',', '.')).toFixed(2)}
              <span className='text-sm ml-1'>bs</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
