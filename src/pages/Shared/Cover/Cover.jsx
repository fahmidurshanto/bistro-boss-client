import {Parallax} from "react-parallax";

const Cover = ({img, title, subTitle}) => {
  return (

      <Parallax
        className="bg-cover bg-center mt-20 mb-10"
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="Menu Cover"
        strength={-200}
    >
        <div
      className="hero h-[600px]">
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">
           {subTitle}
          </p>
        </div>
      </div>
    </div>
    </Parallax>
    
  );
};

export default Cover;
