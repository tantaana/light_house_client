import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Testimonials.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import inverted from "../../../Assets/Testimonials/inverted.png";

import img1 from "../../../Assets/Testimonials/Person_1.jpeg";
import img2 from "../../../Assets/Testimonials/Person_2.png";
import img3 from "../../../Assets/Testimonials/Person_3.png";
import img4 from "../../../Assets/Testimonials/Person_4.jpg";

import company1 from "../../../Assets/Testimonials/Company_1.png";
import company2 from "../../../Assets/Testimonials/Company_2.png";
import company3 from "../../../Assets/Testimonials/Company_3.png";
import company4 from "../../../Assets/Testimonials/Company_4.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Apurbo Shakil",
      position: "Data Engineer",
      img: img1,
      comment:
        "I've relied on Lighthouse for on-time and well-done clipping paths for several years. I'm always happy with their service and the way they do everything easily for me. I would love to tell everyone that Lighthouse is one of the best company which gives me the best value for money.",
      companyImg: company1,
    },
    {
      name: "Jr. NTR",
      position: "Software Developer",
      img: img2,
      comment:
        "Lighthouse help to easily manage my photos into a simple image. I will never forget how lighthouse helped me to complete my unorganized work in a short time.",
      companyImg: company2,
    },
    {
      name: "Ramcharan Nattu",
      position: "Web Developer",
      img: img3,
      comment:
        "It will be bad if I don't give any credit to lighthouse for their amazing hard work. They have a mind blowing team which helped me to complete my image processing within time.",
      companyImg: company3,
    },
    {
      name: "Lylaa Candace",
      position: "Photoshop Expert",
      img: img4,
      comment:
        "Without lighthouse, I couldn't finish my work within time. Their services are just mind blowing which helped me to grow my image processing firm within in a short period of time.",
      companyImg: company4,
    },
  ];

  return (
    <div className="my-20">
      <div className="mb-10 mx-4">
        <h2 className="text-4xl font-bold text-center mb-4">Testimonials</h2>
        <h2 className="text-[#595a5c] text-lg font-medium text-center">
          We've so many happy customers all over the world!
        </h2>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper mainDiv"
      >
        {testimonials?.map((testimonial, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="rounded-xl bg-gradient-to-br from-blue-200 from-10% via-white via-40% to-sky-200 to-90% duration-500 ease-in-out py-6 px-6 shadow-2xl drop-shadow-lg">
                <div className="mb-10">
                  <img src={inverted} alt="" />
                  <h2 className="text-lg textFlow font-medium mt-1 xl:mr-24">
                    {testimonial?.comment}
                  </h2>
                </div>

                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={testimonial?.img}
                      className="w-[60px] h-[60px] object-cover rounded-full"
                      alt=""
                    />

                    <div>
                      <h2 className="text-xl font-bold">{testimonial?.name}</h2>
                      <h2 className="text-[#595a5c] text-lg font-medium">
                        {testimonial?.position}
                      </h2>
                    </div>
                  </div>

                  <img
                    src={testimonial?.companyImg}
                    className="hidden xl:block"
                    alt=""
                  />
                </div>

                <div className="flex xl:hidden justify-end mt-2">
                  <img src={testimonial?.companyImg} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
