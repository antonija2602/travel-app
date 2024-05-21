import React from "react";

import { FaPlay } from "react-icons/fa";
import { GiDeer, GiHangGlider } from "react-icons/gi";
import { CiFlag1 } from "react-icons/ci";
import { MdOutlineParagliding } from "react-icons/md";

export default function About() {
    return (
        <div>
            <div className="bg-[url(/images/about-bg2.jpg)] bg-cover bg-bottom bg-no-repeat py-24 ">
                <div className=" lg:flex gap-12 max-w-7xl px-6 mx-auto">
                    <div className=" lg:w-1/2">
                        <span>
                            <button className=" animate-pulse rounded-lg bg-orange w-20 h-20 flex justify-center items-center mb-8">
                                <FaPlay className=" text-white" />
                            </button>
                            <p className=" text-orange text-xl pb-2">
                                Are you ready to travel?
                            </p>
                        </span>
                        <p className=" text-white leading-normal text-5xl   font-bold ">
                            We are the World Leading Online Tour Booking
                            Platform
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                        <div className=" border border-gray rounded-lg p-10 flex flex-col items-center gap-4 text-orange hover:cursor-pointer hover:bg-orange hover:text-white transition-all duration-300">
                            <GiDeer className="  text-2xl w-20 h-20" />
                            <p className=" text-white text-xl font-semibold">
                                Wildlife Tours
                            </p>
                        </div>
                        <div className=" border border-gray rounded-lg p-10 flex flex-col items-center gap-4 text-orange hover:cursor-pointer hover:bg-orange hover:text-white transition-all duration-300">
                            <MdOutlineParagliding className="  text-2xl w-20 h-20" />
                            <p className=" text-white text-xl font-semibold">
                                Paragliding Tours
                            </p>
                        </div>
                        <div className=" border border-gray rounded-lg p-10 flex flex-col items-center gap-4 text-orange hover:cursor-pointer hover:bg-orange hover:text-white transition-all duration-300">
                            <CiFlag1 className="  text-2xl w-20 h-20" />
                            <p className=" text-white text-xl font-semibold">
                                Adventure Tours
                            </p>
                        </div>
                        <div className=" border border-gray rounded-lg p-10 flex flex-col items-center gap-4 text-orange hover:cursor-pointer hover:bg-orange hover:text-white transition-all duration-300">
                            <GiHangGlider className="  text-2xl w-20 h-20" />
                            <p className=" text-white text-xl font-semibold">
                                Hand Gliding Tours
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url(/images/partners-bg9.jpg)]   py-24 grid place-content-center ">
                <div className=" grid  place-items-center gap-8 xl:flex xl:gap-32   ">
                    <p className=" lg:text-4xl text-3xl font-bold text-white  whitespace-nowrap">
                        Our partners
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-14   ">
                        <img
                            className="size-40   object-scale-down"
                            src="/images/brand2.png"
                            alt=""
                        />

                        <img
                            className="size-40   object-scale-down"
                            src="/images/brand3.png"
                            alt=""
                        />

                        <img
                            className="size-40  object-scale-down"
                            src="/images/brand4.png"
                            alt=""
                        />

                        <img
                            className="size-40   object-scale-down"
                            src="/images/brand5.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
