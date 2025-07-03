import React from "react";

const MenuItem = ({ item }) => {
  console.log(item);
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2 gap-10 items-center p-10">
      <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[120px]" src={image} alt={name} />
      <div>
        <h3 className="uppercase font-bold text-xl mb-4">{name}</h3>
        <p>{recipe}</p>
      <p className="text-yellow-700"><span className="font-semibold">Price:</span> ${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
