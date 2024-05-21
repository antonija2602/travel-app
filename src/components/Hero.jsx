import React from "react";
import { MdSearch, MdOutlineParagliding } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GiDeer, GiHangGlider, GiFishingBoat } from "react-icons/gi";
import { CiFlag1 } from "react-icons/ci";
import { WiTime3 } from "react-icons/wi";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export default function Hero() {
    return (
        <section className=" relative bg-black lg:h-[85vh]">
            <video
                autoPlay
                muted
                loop
                className=" absolute  w-full h-full lg:top-0 object-cover -top-[12vh] opacity-55">
                <source
                    src="./videos/video.mp4"
                    type="video/mp4"
                />
            </video>
            <div className=" flex flex-col items-center justify-center relative z-10 lg:h-full h-screen  max-w-7xl px-6 lg:pt-0  mx-auto -top-28 md:-top-6 gap-8">
                <p className=" text-3xl text-orange pb-4 ">Let's explore</p>
                <h4 className=" lg:text-6xl text-3xl text-white text-center">
                    Where Would You Like To Go?
                </h4>
                <p className=" text-white text-2xl my-8 text-center">
                    Checkout Beautiful Places Around the World
                </p>

                {/* div search */}
                <div className=" bg-white grid lg:grid-cols-5 grid-cols-1 rounded-lg w-full overflow-hidden ">
                    {/* 1 section */}
                    <span className=" flex items-center py-7 lg:border-r  border-gray relative pl-4">
                        <MdOutlineParagliding className=" text-4xl text-orange" />
                        <span className="flex flex-col justify-center absolute h-full left-16 right-2">
                            <p className=" text-gray text-sm "> Location</p>
                            <select className="text-sm font-bold w-full">
                                <option> Destination</option>
                                <option>Africa</option>
                                <option>Morocco</option>
                                <option>Nigeria</option>
                                <option>Tanzania</option>
                            </select>
                        </span>
                    </span>

                    {/* 2 section */}
                    <span className=" flex items-center py-7 lg:border-r border-gray relative pl-4">
                        <FaPeopleCarry className=" text-4xl text-orange" />
                        <span className="flex flex-col justify-center absolute h-full left-16 right-2">
                            <p className=" text-gray text-sm">Type</p>
                            <select className="text-sm font-bold w-full">
                                <option>Activity</option>
                                <option>Adventure</option>
                                <option>Beach</option>
                                <option>City Tours</option>
                                <option>Cruises</option>
                                <option>Discovery</option>
                                <option>Historical</option>
                            </select>
                        </span>
                    </span>

                    {/* 3 section */}
                    <span className=" flex items-center py-7 lg:border-r  border-gray relative pl-4">
                        <WiTime3 className=" text-4xl text-orange" />
                        <span className="flex flex-col justify-center absolute h-full left-16 right-2">
                            <p className=" text-gray text-sm">Date From</p>
                            <input
                                type="date"
                                className=" text-sm font-bold w-full"
                            />
                        </span>
                    </span>

                    {/* 4 section */}
                    <span className=" flex items-center lg:border-r  border-gray  py-7  relative pl-4">
                        <FaPeopleGroup className=" text-4xl text-orange" />
                        <span className="flex flex-col justify-center absolute h-full left-16 right-2">
                            <p className=" text-gray text-sm">Guests</p>
                            <input
                                className=" font-semibold placeholder:text-black "
                                type="text"
                                placeholder="0"
                            />
                        </span>
                    </span>

                    {/* search button */}
                    <button className="flex items-center justify-center gap-3     bg-orange  text-2xl text-white hover:opacity-90 transition-all duration-200 ">
                        <MdSearch className=" text-3xl " />
                        SEARCH
                    </button>
                </div>

                {/* arrow pic */}
                <img
                    className=" my-4 text-white size-24  "
                    src="./images/linearrow.svg"
                    alt="line arrow"
                />

                {/* under the arrow pic */}
                <p className="   relative z-10    text-white text-3xl font-semibold">
                    or browse the selected type
                </p>
            </div>
            <div className="  lg:-mt-20 -mt-24 relative z-10 max-w-6xl px-6 mx-auto ">
                <Carousel
                    className=" py-8"
                    partialVisible={false}
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    customTransition="all .5"
                    transitionDuration={500}
                    arrows={true}
                    keyBoardControl={true}
                    itemClass="carousel-item">
                    <div className="grid mx-4 place-content-center  shadow-xl bg-white p-8 rounded-lg  gap-4 ">
                        <GiDeer className=" rounded-full w-20 h-20 p-4 bg-[#c5faf5] text-[#3fd2a8] hover:bg-orange hover:cursor-pointer hover:text-white transition-all  duration-200" />
                        <p className=" text-center font-bold">Wildlife</p>
                    </div>
                    <div className="grid mx-4 place-content-center shadow-xl bg-white p-8 rounded-lg r gap-4">
                        <MdOutlineParagliding className=" rounded-full w-20 h-20 p-4 bg-[#26B2EC24] text-[#06aff6] hover:bg-orange hover:text-white transition-all  duration-200 hover:cursor-pointer" />
                        <p className=" font-bold">Paragliding</p>
                    </div>
                    <div className="grid  mx-4 place-content-center shadow-xl bg-white p-8 rounded-lg  gap-4">
                        <CiFlag1 className=" rounded-full w-20 h-20 p-4 bg-[#f5ecfd] text-[#9e60e5] hover:bg-orange hover:text-white transition-all  duration-200 hover:cursor-pointer" />
                        <p className=" font-bold">Adventure</p>
                    </div>
                    <div className="grid auto-cols-max mx-4 place-content-center shadow-xl bg-white p-8 rounded-lg  gap-4">
                        <GiHangGlider className=" rounded-full w-20 h-20 p-4 bg-[#fff4de] text-[#f6b23b] hover:bg-orange hover:text-white transition-all  duration-200 hover:cursor-pointer" />
                        <p className=" font-bold">Hang Gliding</p>
                    </div>
                    <div className="grid  mx-4 place-content-center shadow-xl bg-white p-8 rounded-lg r gap-4">
                        <GiFishingBoat className=" rounded-full w-20 h-20 p-4 bg-[#D036321C] text-[#d03632] hover:bg-orange hover:text-white transition-all  duration-200 hover:cursor-pointer" />
                        <p className=" font-bold">Sightseeing</p>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
