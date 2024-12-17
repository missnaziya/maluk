import React from 'react';

interface BannerProps {
  bg: string; // Expecting a string for CSS background value
}

const Banner: React.FC<BannerProps> = ({ bg }) => {
  return (
    <div
      className="h-[250px] border-b pt-16 border-white mb-2 max-sm:h-[300px] max-sm:pt-16 bg-cover bg-center"
      style={{ background: bg }}
    >
      <h1 className="section-title-title text-5xl text-center mb-7 max-md:text-5xl max-sm:text-3xl text-black max-sm:mb-2">
        {/* {title} */}
      </h1>
      <p className="section-title-path text-xl text-center max-sm:text-xl text-white">
        {/* {path} */}
      </p>
    </div>
  );
};

export default Banner;
