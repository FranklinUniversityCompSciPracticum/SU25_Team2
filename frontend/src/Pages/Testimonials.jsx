import React from "react";
import Slider from "react-slick";
import { FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Jane Doe",
    text: "This app completely changed the way I work. Incredible experience!",
    rating: 5,
  },
  {
    name: "John Smith",
    text: "Easy to use and very intuitive. Highly recommend!",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    text: "Good value and excellent customer service. Would buy again.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    text: "Some issues at first, but support helped me resolve them quickly.",
    rating: 3,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const renderStars = (count) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) =>
          i < count ? <FaStar key={i} /> : <FaRegStar key={i} />
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col justify-between">
              <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-lg">{t.name}</p>
                {renderStars(t.rating)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
