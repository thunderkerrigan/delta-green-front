import pizza1 from './pizza-1.jpg'
import pizza2 from './pizza-2.jpg'
import pizza3 from './pizza-3.jpg'
import pizza4 from './pizza-4.jpg'
import pizza5 from './pizza-5.jpg'
import pizza6 from './pizza-6.jpg'
import pizza7 from './pizza-7.jpg'
import pizza8 from './pizza-8.jpg'
import pizza9 from './pizza-9.jpg'
import pizza10 from './pizza-10.jpg'

export interface Pizza {
  name: string
  ingredients: string[]
  imageURL: string
  price: number
}

export const pizzas: Pizza[] = [
  {
    name: 'Dunwich',
    imageURL: pizza1,
    price: 12.99,
    ingredients: [
      'Tomate',
      'Epinard',
      'Poivron',
      'Champignon',
      'Provolone',
      'Mozzarella',
    ],
  },
  {
    name: 'UFO',
    imageURL: pizza2,
    price: 12.99,
    ingredients: [
      'Tomate',
      'Radis',
      'Roquette',
      'concombre',
      'Tomate Cerise',
      'Oignon rouge',
    ],
  },
  {
    name: 'Saucer Watch',
    imageURL: pizza3,
    price: 12.99,
    ingredients: ['Tomate', 'Mozarella', 'Basilic'],
  },
  {
    name: 'The Bloop',
    imageURL: pizza4,
    price: 12.99,
    ingredients: [
      'Tomate',
      'Anchois',
      'Basilic',
      'Estragon',
      'Pecorino',
    ],
  },
  {
    name: 'Majestic 12',
    imageURL: pizza5,
    price: 12.99,
    ingredients: [
      'Sauce Arabiatta',
      'Champignon',
      'Scarmoza fumée',
      'poulet',
      'Basilic',
    ],
  },
  {
    name: 'Bermuda',
    imageURL: pizza6,
    price: 12.99,
    ingredients: ['Tomate', 'Jambon', 'Ananas', 'Cheddar'],
  },
  {
    name: 'Tugunska',
    imageURL: pizza7,
    price: 12.99,
    ingredients: ['Tomate', 'Mozarella', 'Olives', 'Poivron', 'Porc'],
  },
  {
    name: 'Delta Green',
    imageURL: pizza8,
    price: 12.99,
    ingredients: ['Mozarella', 'Pesto', 'Poulet', 'Gorgonzola'],
  },
  {
    name: 'Roswell',
    imageURL: pizza9,
    price: 12.99,
    ingredients: ['Tomate', ' Mozarella', 'Poivron', 'Chorizo'],
  },
  {
    name: 'SCP',
    imageURL: pizza10,
    price: 12.99,
    ingredients: ['Scarmoza Fumée', 'Cresson', 'Prosciutto'],
  },
]
