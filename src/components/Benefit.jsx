import React from "react";

import { MdPerson, MdComment, MdArrowRightAlt } from "react-icons/md";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { GiRuleBook } from "react-icons/gi";
import { MdArrowCircleRight } from "react-icons/md";

export default function Benefit() {
    return (
        <div>
            <div className="bg-[url(/images/why-bg8.jpg)] bg-cover  flex    ">
                <img
                    className="hidden lg:flex w-1/3 object-cover "
                    src="/images/pool.jpg"
                    alt=""
                />
                <div
                    className="grid gap-5 text-stone-200 py-10 px-20
                     max-w-3xl ">
                    <p className=" text-orange text-xl p-2">
                        Our benefit lists
                    </p>
                    <h4 className=" lg:text-5xl text-3xl font-bold p-2 text-white ">
                        Why Choose Us
                    </h4>
                    <p className=" ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nihil beatae iure voluptatum amet deserunt
                        accusamus? Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Nihil beatae iure voluptatum amet
                        deserunt accusamus?
                    </p>
                    <div className="grid gap-8 py-6">
                        <div className="flex items-center gap-6">
                            <span>
                                <RiFlightTakeoffFill className=" text-orange text-3xl" />
                            </span>
                            <span className="grid gap-2">
                                <h6 className=" font-bold text-lg">
                                    Professional and Certified
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Molestiae labore
                                    cupiditate optio, reiciendis sapiente
                                    accusamus.
                                </p>
                            </span>
                        </div>
                        <div className="flex items-center gap-6">
                            <span>
                                <GiRuleBook className=" text-orange text-3xl" />
                            </span>
                            <span className="grid gap-2">
                                <h6 className=" font-bold text-lg">
                                    Get Instant Tour Bookings
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Molestiae labore
                                    cupiditate optio, reiciendis sapiente
                                    accusamus.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div></div>
            </div>
            <div className=" ">
                <div className=" flex flex-wrap max-w-7xl  p-10 mx-auto lg:py-24 ">
                    <div className=" lg:w-1/2">
                        <p className=" text-xl text-orange">Join Us</p>
                        <p className=" lg:text-5xl text-3xl py-3 text-textColor font-semibold">
                            Not a Member Yet?
                        </p>
                        <p className=" text-slate-500">
                            Join Us! Our members can access savings of up to 50%
                            and earn Trip Coins while booking.
                        </p>
                        <div className=" flex gap-4 pt-6">
                            <button className=" bg-orange text-white text-xs font-bold rounded-lg flex gap-2 px-8 h-12 items-center hover:bg-slate-500 transition-all duration-200">
                                <MdArrowCircleRight size={20} />
                                SIGN IN
                            </button>
                            <button className=" bg-white text-textColor text-xs font-bold rounded-lg flex gap-2 px-8 h-12 border  border-slate-300 items-center hover:bg-slate-500 hover:text-white transition-all duration-200">
                                <MdPerson size={20} />
                                REGISTER
                            </button>
                        </div>
                    </div>
                    <div className=" flex justify-center  lg:w-1/2 w-full lg:mt-0 mt-14">
                        <img
                            src="/images/member1.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
