import { useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";

const products = [
  {
    id: 1,
    name: "Blueberry cake with raw toppings",
    price: "Rs 2,290",
    image: "/campaigns/product1.png",
  },
  {
    id: 2,
    name: "Chocolate truffle cake",
    price: "Rs 2,190",
    image: "/campaigns/product2.png",
  },
  {
    id: 3,
    name: "Brownie cake with fluffy cream",
    price: "Rs 1,222",
    image: "/campaigns/product3.png",
  },
  {
    id: 4,
    name: "Ferro rocher cake",
    price: "Rs 1,234",
    image: "/campaigns/product4.png",
  },
  {
    id: 5,
    name: "Custurd mixed with fruit cake",
    price: "Rs 2,456",
    image: "/campaigns/product5.png",
  },
  {
    id: 6,
    name: "Best raw toppings choco cake",
    price: "Rs 2,345",
    image: "/campaigns/product6.png",
  },
  {
    id: 7,
    name: "Green cup cakes",
    price: "Rs 1,234",
    image: "/campaigns/product7.png",
  },
  {
    id: 8,
    name: "Blueberry toppings cake",
    price: "Rs 2,456",
    image: "/campaigns/product8.png",
  },
  {
    id: 9,
    name: "Strawberry cakes with blueberry",
    price: "Rs 2,345",
    image: "/campaigns/product9.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StageTwo = ({ handleSetStage }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectedProducts = (product) => {
    let temp = [...selectedProducts];
    if (temp.includes(product.id)) {
      temp = temp.filter((item) => item !== product.id);
      setSelectedProducts(temp);
    } else {
      temp.push(product.id);
      setSelectedProducts(temp);
    }
  };

  return (
    <>
      <div className="flex flex-col shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white mt-5">
        <div className="inline-block min-w-full py-2 align-middle md:px-3 overflow-x-auto">
          <div className="flex items-center mb-3">
            <h2 className="font-semibold ">Choose the Product</h2>
            <span className="text-sm text-gray-400 ml-5">(Step 2 of 4)</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 border-t py-5">
            {products.map((product, idx) => (
              <div
                key={idx}
                onClick={() => {
                  handleSelectedProducts(product);
                }}
                className={classNames(
                  selectedProducts.includes(product.id) ? "ring-2 ring-offset-2 ring-blue-500 hover:border-gray-400" : "",
                  "relative rounded-lg border border-gray-300 bg-white px-3 py-5 shadow-sm flex items-center space-x-3"
                )}
              >
                <div className="flex-shrink-0">
                  <img className="" src={product.image} alt="" />
                </div>
                <div className="flex-1">
                  <button className="focus:outline-none flex flex-col">
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500 truncate">{product.price}</p>
                  </button>
                </div>
                <button
                  className={classNames(
                    selectedProducts.includes(product.id) ? "bg-blue-600" : "border border-gray-400",
                    "relative w-5 h-5 p-1 flex items-center justify-center rounded-full"
                  )}
                >
                  <CheckIcon className={classNames(selectedProducts.includes(product.id) ? "text-white" : "text-gray-400")} aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button
          onClick={() => handleSetStage()}
          type="button"
          className="py-2 px-8 order border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default StageTwo;
