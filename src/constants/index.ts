import { CardInterface } from '../types/card.types';
import { format } from 'date-fns';

export const InitialData: CardInterface[] = [
  {
    title: 'BCV',
    name: 'Banco Central',
    image: './images/BCV.webp',
    price: 'loading',
    fecha: format(new Date(), 'hh:mm a dd/MM/yyyy'),
  },
  {
    title: 'Dolar Today',
    name: 'Dolar Today',
    image: './images/dolarToday.webp',
    price: 'loading',
    fecha: format(new Date(), 'hh:mm a dd/MM/yyyy'),
  },
  {
    title: 'BS',
    name: 'Monitor Dolar',
    image: './images/dolarMonitor.webp',
    price: 'loading',
    fecha: format(new Date(), 'hh:mm a dd/MM/yyyy'),
  },
  {
    title: 'LocalBitcoin',
    name: 'Bitcoin',
    image: './images/bitcoin.webp',
    price: 'loading',
    fecha: format(new Date(), 'hh:mm a dd/MM/yyyy'),
  },
];
