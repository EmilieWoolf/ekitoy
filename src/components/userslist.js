// src/components/QuoteList.js
import React from "react";
import ToyCard from './toycard'

// An array of objects
const toys = [
  {
    name: "Snes Mini",
    image:
      "https://www.cdiscount.com/pdt2/i/n/i/1/700x700/snesmini/rw/nintendo-classic-mini-super-nintendo-entertainme.jpg"
  },
  {
    name: "Barbies",
    image:
      "https://www.nova.ie/wp-content/uploads/2019/04/Black-Metal-Barbie.jpg"
  },
  {
    name: "Flash McQueen",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81zQdSJc0nL._SL1500_.jpg"
  },
  {
    name:
      "Glock 26",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Glock_26_%286971790359%29.jpg/2560px-Glock_26_%286971790359%29.jpg"
  },
  {
    name: "Snes Mini",
    image:
      "https://www.cdiscount.com/pdt2/i/n/i/1/700x700/snesmini/rw/nintendo-classic-mini-super-nintendo-entertainme.jpg"
  },
  {
    name: "Barbies",
    image:
      "https://www.nova.ie/wp-content/uploads/2019/04/Black-Metal-Barbie.jpg"
  },
  {
    name: "Flash McQueen",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81zQdSJc0nL._SL1500_.jpg"
  },
  {
    name:
      "Glock 26",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Glock_26_%286971790359%29.jpg/2560px-Glock_26_%286971790359%29.jpg"
  }
];

const ToyList = () => (
  <div>
    {toys.map(item => (
        <ToyCard name={item.name} image={item.image} />
        ))}
  </div>
);

export default ToyList;