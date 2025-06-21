import chefService from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div
      style={{ backgroundImage: `url(${chefService})` }}
      className={`bg-cover bg-center bg-no-repeat py-24 bg-fixed text-center space-y-4`}
    >
      <div className="bg-white w-3/4 mx-auto p-10 rounded-lg space-y-4">
        <h2 className="font-[Cinzel] text-3xl font-bold">Bistro Boss</h2>
        <p className="w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
