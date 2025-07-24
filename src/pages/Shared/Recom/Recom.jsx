const Recom = ({ item }) => {
  const { image, name, description } = item;
  return (
    <div>
      <img src={image} alt={name} />
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p>{description}</p>{" "}
        <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-500">
            Add to Cart
        </button>
    </div>
  );
};

export default Recom;
