"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const slides = [
  {
    image: "/Images/Banner.jpg",
    title: "Find the Perfect Tutor for Your Journey",
    description:
      "Connect with expert tutors and achieve academic success with personalized learning support.",
    button: "Explore Tutors",
  },

  {
    image: "/Images/teacher-student.jpg",
    title: "Learn From Experienced  Mentors",
    description:
      "Boost your confidence with professional guidance from skilled and experienced tutors.",
    button: "Start Learning",
  },

  {
    image: "/Images/online-learning.jpg",
    title: "Interactive Online Learning Experience",
    description:
      "Attend flexible and engaging online sessions designed for  students.",
    button: "Book Session",
  },

  {
    image: "/Images/Tutor-image.png",
    title: "One-to-One Personalized Tutoring",
    description:
      "Get personalized support and focused learning from dedicated expert tutors.",
    button: "Find Tutor",
  },

  {
    image: "/Images/tutor-student.png",
    title: "Build Your Future With Quality Education",
    description:
      "Enhance your student journey with modern learning methods and expert mentorship.",
    button: "Get Started",
  },
];

const Banner = () => {
  return (
    <div className="w-full">

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

           <div className="relative w-full h-[650px] overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                sizes="100vw"
               className="object-cover object-center"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-start">

                <div className="max-w-7xl mx-auto px-8 text-white">

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">

                    {slide.title}

                  </h1>

                  <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200">

                    {slide.description}

                  </p>

                  <Link href="/tutors">

                    <button className="mt-8 bg-blue-600 hover:bg-cyan-600 transition duration-300 px-8 py-4 rounded-lg text-lg font-semibold">

                      {slide.button}

                    </button>

                  </Link>

                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;