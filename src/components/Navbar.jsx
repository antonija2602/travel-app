import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <nav className="w-full h-24   sticky top-0 z-50 bg-white  flex justify-between items-center px-8 lg:px-14 xl:px-28 ">
            {/* dropdown buttons */}
            <div className="absolute flex items-center">
                {dropdown ? (
                    <button
                        onClick={showDropdown}
                        className="  md:hidden text-3xl hover:opacity-70 transition-all  duration-200  ">
                        <MdClose />
                    </button>
                ) : (
                    <button
                        onClick={showDropdown}
                        className=" md:hidden absolute  text-3xl hover:text-orange transition-all  duration-200  ">
                        <HiMenuAlt3 className="" />
                    </button>
                )}
            </div>

            {/* logo */}
            <div className=" md:absolute lg:static">
                <img
                    className="size-14 lg:flex hidden "
                    src="./images/logo.svg"
                    alt="Airplane logo"
                />
            </div>

            {dropdown && (
                <div className=" lg:hidden w-full fixed left-0 top-20 py-5  bg-white   ">
                    <div className=" w-full flex flex-col items-baseline  ">
                        <ul className=" flex flex-col place-items-center w-full gap-4  ">
                            <a
                                href="#"
                                className=" hover:text-orange transition-all  duration-200">
                                Home
                            </a>
                            <a
                                href="#"
                                className=" hover:text-orange transition-all  duration-200">
                                Tours Page
                            </a>
                            <a
                                href="#"
                                className=" hover:text-orange transition-all  duration-200">
                                Destination
                            </a>
                            <a
                                href="#"
                                className=" hover:text-orange transition-all  duration-200">
                                News
                            </a>
                            <a
                                href="#"
                                className=" hover:text-orange transition-all  duration-200">
                                Pages
                            </a>
                            <a
                                href="#"
                                className=" hover:text-orange transition-all  duration-200">
                                Contact
                            </a>
                        </ul>
                    </div>
                </div>
            )}

            {/* ul */}
            <div className="md:flex  hidden ">
                <ul className="flex  items-center xl:gap-12 gap-x-6 max-md:hidden ">
                    <a
                        className="leading-normal  text-lg hover:text-orange transition-all  duration-200"
                        href="#">
                        Home
                    </a>
                    <a
                        className="leading-normal  text-lg hover:text-orange transition-all  duration-200"
                        href="#">
                        Tours Page
                    </a>
                    <a
                        className="leading-normal  text-lg
                             hover:text-orange transition-all  duration-200"
                        href="#">
                        Destination
                    </a>
                    <a
                        className="leading-normal  text-lg hover:text-orange transition-all  duration-200"
                        href="#">
                        News
                    </a>
                    <a
                        className="leading-normal  text-lg hover:text-orange transition-all  duration-200"
                        href="#">
                        Pages
                    </a>
                    <a
                        className="leading-normal  text-lg hover:text-orange transition-all  duration-200"
                        href="#">
                        Contact
                    </a>
                </ul>
            </div>

            {/* buttons right */}
            <div className=" flex gap-3 ">
                <button className="flex items-center justify-center rounded-full bg-slate-200 text-slate-500 size-10 hover:bg-orange hover:text-white transition-all  duration-200">
                    <CiSearch className=" text-2xl" />
                </button>
                <button className="flex items-center justify-center rounded-full bg-slate-200 text-slate-500 size-10  hover:bg-orange hover:text-white transition-all  duration-200">
                    <BsPersonCircle className=" text-2xl" />
                </button>
            </div>
        </nav>
    );
}
