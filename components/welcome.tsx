import React from 'react';

const Welcome = () => {
  return (
    <>
   
    <section className="bg-cover bg-center relative m-6">
      {/* Responsive Video Section */}
      <div className="container-fluid">
        <div className="col-12">
          <div className="video-container">
            <video className="rounded w-full h-auto" autoPlay controls>
              <source src="/welcome.mp4" type="video/mp4" />
              <p>
                Your browser does not support the video element. Please{' '}
                <a href="/assets/images/banner/welcome.mp4" download>
                  download the video
                </a>
                .
              </p>
            </video>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Welcome;
