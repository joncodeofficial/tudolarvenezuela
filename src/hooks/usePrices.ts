import { useState } from 'react';
import { useEffect } from 'react';
import { createWorker } from 'tesseract.js';
import { findPrice } from '../utils/findPrice';
import { CardInterface } from '../types/card.types';
import { InitialData } from '../constants';

export const usePrices = () => {
  const [data, setData] = useState<CardInterface[]>([]);

  useEffect(() => {
    const local = localStorage.getItem('tudolarvenezuela-cache');
    setData(local ? JSON.parse(local) : InitialData);

    (async () => {
      try {
        const prices: CardInterface[] = [];
        const worker = await createWorker('spa');

        const imageUrl =
          'https://cors-anywhere.herokuapp.com/https://monitordolarvenezuela.com/mdv-img/mdw.webp?';
        // const imageUrl = 'https://monitordolarvenezuela.com/mdv-img/mdw.webp?';
        const { data } = await worker.recognize(imageUrl);

        InitialData.forEach((card) => {
          prices.push({
            ...card,
            price: findPrice(data.text, card.title),
          });
        });

        setData(prices);
        localStorage.setItem('tudolarvenezuela-cache', JSON.stringify(prices));
        await worker.terminate();
      } catch (error) {
        console.error('Error:', error);
      }
    })();
  }, []);

  return { prices: data };
};
