import { RiDoubleQuotesL } from "react-icons/ri";

const Review = ({ review }) => {
  const { rating, name, details } = review;
  return (
    <div className="px-5 py-10 flex flex-col items-center space-y-4">
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <input
            key={star}
            type="radio"
            name={`rating-${name}`} // Use a unique name for each review's rating
            className="mask mask-star-2 bg-orange-400"
            aria-label={`${star} star`}
            checked={star === parseInt(rating)}
            readOnly // Add readOnly to prevent user interaction if it's for display
          />
        ))}
      </div>
     <div className=" w-full flex justify-center">
         <RiDoubleQuotesL className="text-6xl" />
     </div>
      <p className="w-2/3 mx-auto ">{details}</p>
      <p className="text-yellow-500 text-2xl">{name}</p>
    </div>
  );
};

export default Review;
