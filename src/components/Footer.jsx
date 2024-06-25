import React from "react";
import { MdPhone, MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-[url(/images/why-bg8.jpg)]  py-16 bg-cover">
            <div className=" text-stone-300 flex lg:flex-nowrap flex-wrap justify-between max-w-7xl xl:px-0 px-6 mx-auto gap-20 items-center">
                <div className=" lg:w-1/3 mx-5">
                    <img
                        className=" size-20"
                        src="/images/logo.svg "
                        alt="Airplane logo"
                    />
                    <p>
                        Welcome to out Trip and Tour Agency. Lorem ipsum dolor
                        sit amet.
                        <hr className=" my-5" />
                    </p>
                    <div>
                        <ul className=" grid gap-2">
                            <a
                                href="#"
                                className=" flex items-center gap-2 hover:text-orange">
                                <MdPhone className=" text-orange" /> +123 45 678
                                000
                            </a>
                            <a
                                href="#"
                                className=" flex items-center gap-2 hover:text-orange">
                                <MdOutlineMail className=" text-orange" />{" "}
                                contact@example.com
                            </a>
                            <a
                                href="#"
                                className=" flex items-center gap-2 hover:text-orange">
                                <MdOutlineLocationOn className=" text-orange" />{" "}
                                66 Brooklyn Street New York, USA
                            </a>
                        </ul>
                    </div>
                </div>

                <div className=" lg:w-1/5 mx-5">
                    <h6 className=" text-white text-xl font-bold  ">Company</h6>
                    <ul className=" grid gap-4 mt-5 ">
                        <a href="#">About us</a>
                        <a href="#">Community Blogs</a>
                        <a href="#">Rewards</a>
                        <a href="#">Work with us</a>
                        <a href="#">Contact</a>
                    </ul>
                </div>
                <div className=" lg:w-1/5 mx-5 ">
                    <h6 className=" text-white text-xl font-bold  lg:mt-0">
                        Explore
                    </h6>
                    <ul className=" grid gap-4 mt-5">
                        <a href="#">Account</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Affiliate Program</a>
                        <a href="#">Our Partners</a>
                        <a href="#">Events</a>
                    </ul>
                </div>

                <div className=" lg:w-1/5 mx-5">
                    <h6 className=" text-white text-xl font-bold  lg:mt-0">
                        Newsletter
                    </h6>
                    <div className="grid gap-3 mt-5">
                        <input
                            className=" bg-stone-800 p-4 rounded-lg "
                            type="email"
                            placeholder="Email Address"
                        />
                        <button className=" bg-orange text-white  font-bold rounded-lg flex px-8 h-12 items-center justify-center hover:bg-slate-500 transition-all duration-200">
                            SUBSCRIBE
                        </button>
                        <label className="flex gap-4">
                            <input
                                type="checkbox"
                                className=""
                            />
                            I agree to all terms and policies
                        </label>
                    </div>
                </div>
            </div>
        </footer>
    );
}

{
    /* 
    <MdPhone />
<MdOutlineMail />
<MdOutlineLocationOn />
 */
}
