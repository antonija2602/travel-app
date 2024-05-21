import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiHeart, CiCamera } from "react-icons/ci";
import {
    MdStar,
    MdCheck,
    MdPeopleOutline,
    MdArrowRightAlt,
} from "react-icons/md";
import { WiTime3 } from "react-icons/wi";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export default function Destination() {
    const Places = ({ column, image, country, tours }) => {
        return (
            <div className={`relative overflow-hidden h-72 ${column}`}>
                <img
                    className=" h-full w-full rounded-lg object-cover hoverImg"
                    src={image}
                    alt={country}
                />
                <p className=" text-3xl text-white font-semibold absolute left-6 bottom-6">
                    {country}
                </p>
                <button className=" bg-orange text-white rounded-lg px-4 py-2 text-xs font-semibold absolute top-4 right-4 hover:opacity-80 transition-all duration-200">
                    {tours} TOURS
                </button>
            </div>
        );
    };

    const Tours = ({ image, country, name }) => {
        return (
            <div className="relative grid    max-w-sm  rounded-lg shadow-lg  border-slate-200 h-full mx-auto  sm:mx-4  ">
                <div>
                    <img
                        className="object-cover h-52 w-full rounded-t-lg "
                        src={image}
                        alt={country}
                    />
                </div>
                <div className=" absolute inline-flex  justify-between top-4 left-4 right-4">
                    <p className=" bg-cyan-500 rounded-md px-4 py-1 text-white text-sm">
                        FEATURED
                    </p>
                    <button className=" bg-gray p-1 rounded-md">
                        <CiHeart className=" text-white text-xl" />
                    </button>
                </div>
                <div className="grid gap-3 px-4 py-6  ">
                    <h5 className=" text-xl font-semibold tracking-tight text-gray-900  ">
                        {name}
                    </h5>

                    <div className="grid gap-5  ">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <span className=" flex items-center ">
                                    {[...Array(5)].map((_, index) => (
                                        <MdStar
                                            key={index}
                                            className=" text-amber-500 text-xl"
                                        />
                                    ))}
                                </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
                                    5.0
                                </span>
                            </div>

                            <span className=" flex">
                                <button className="">
                                    <CiCamera size={30} />
                                </button>
                                <p className=" bg-orange text-xs rounded-full text-white w-4 h-4 flex items-center justify-center ">
                                    5
                                </p>
                            </span>
                        </div>

                        <span className=" flex gap-4 text-slate-500 ">
                            From <p className=" text-orange">$59.00</p>
                        </span>

                        <div className="flex items-center justify-between bg-slate-50  ">
                            <span className="flex items-center gap-2">
                                <WiTime3 className=" text-orange" />
                                10 days
                            </span>

                            <span className="flex items-center gap-2">
                                <MdPeopleOutline className=" text-orange" />
                                50
                            </span>

                            <a
                                href="#"
                                className="flex text-orange   hover:scale-110  focus:outline-none  font-medium gap-2 text-center ">
                                explore
                                <MdArrowRightAlt className="mt-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className=" lg:mt-60 mt-10 flex flex-col justify-center items-center    ">
            <div className=" max-w-screen-2xl px-6 mx-auto text-center ">
                <p className=" text-orange text-xl">Destination List</p>
                <h4 className=" font-bold lg:text-5xl text-3xl py-8">
                    Go exotic places
                </h4>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 py-8">
                    <Places
                        column="lg:col-span-1"
                        country="Morocco"
                        image="./images/morocco.jpg"
                        tours="4"
                    />
                    <Places
                        column="lg:col-span-2"
                        country="United Kingdom"
                        image="./images/uk.jpg"
                        tours="6"
                    />
                    <Places
                        column="lg:col-span-1"
                        country="Singapore"
                        image="./images/singapore.jpg"
                        tours="3"
                    />
                    <Places
                        column="lg:col-span-2"
                        country="Hungary"
                        image="./images/hungary.jpg"
                        tours="2"
                    />
                    <Places
                        column="lg:col-span-2"
                        country="Italy"
                        image="/images/italy.jpg"
                        tours="5"
                    />
                </div>
            </div>
            <div className="lg:flex max-w-7xl px-6 py-16 xl:gap-14    ">
                <div className="flex flex-col lg:flex-row lg:gap-24 items-center ">
                    <div className="relative lg:w-1/2   ">
                        {/* <div className="flex m-auto border "> */}
                        <img
                            className="blob "
                            src="/images/blob2.jpg"
                            alt=""
                        />
                        {/* </div> */}
                        <div className=" absolute flex flex-col top-0 end-0 ">
                            <p className=" text-orange font-semibold text-4xl sm:text-6xl">
                                30%
                            </p>
                            <p className="sm:text-4xl text-2xl font-semibold ">
                                Discount
                            </p>
                        </div>
                        <button className="absolute bottom-8 start-0 bg-white shadow-md px-6 py-2   rounded-xl hover:scale-105 transition-all duration-200">
                            <p className=" text-gray text-xs font-medium">
                                Book Tour Now
                            </p>
                            <p className=" font-semibold ">+12(34)567890</p>
                        </button>
                    </div>
                    <div className=" lg:w-1/2 pt-10 ">
                        <p className=" text-orange text-xl">Get to know us</p>
                        <h4 className=" font-bold lg:text-5xl text-3xl py-4">
                            Plan Your Trip with us
                        </h4>
                        <p className=" text-slate-500 leading-8 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Amet, vero? Nisi ab voluptas sed fugit quo,
                            provident officia optio facilis nesciunt quasi non
                            dolorem quibusdam quos doloremque quaerat eius nemo.
                        </p>
                        <span className=" flex items-center gap-4 py-2 font-medium">
                            <MdCheck className=" bg-orange text-white rounded-xl" />
                            Lorem ipsum dolor sit amet.
                        </span>
                        <span className=" flex items-center gap-4 py-2 font-medium">
                            <MdCheck className=" bg-orange text-white rounded-xl" />
                            Lorem ipsum dolor sit amet.
                        </span>
                        <span className=" flex items-center gap-4 py-2 font-medium">
                            <MdCheck className=" bg-orange text-white rounded-xl" />
                            Lorem ipsum dolor sit amet.
                        </span>
                        <div className=" mt-8">
                            <button className=" bg-orange text-white text-xs font-bold rounded-md px-8 h-12 items-center hover:bg-slate-500 transition-all duration-200">
                                BOOK WITH US NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-center justify-center  gap-6">
                <p className=" text-orange text-xl">Featured tours</p>
                <h4 className=" lg:text-5xl text-3xl font-bold">
                    Most popular tours
                </h4>
            </div>
            <div className="   container  py-20 ">
                <Carousel
                    className=" pb-8"
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
                    <Tours
                        image="/images/popular3.jpg"
                        name="Brooklyn Christmas Lights Tour"
                    />
                    <Tours
                        image="/images/popular4.jpg"
                        name="Discovery Islands Kayaking Tour"
                    />
                    <Tours
                        image="/images/popular5.jpg"
                        name="Yucatan Peninsula & Caribbean"
                    />
                    <Tours
                        image="/images/popular2.jpg"
                        name="Java & Bali One Life Adventures"
                    />
                    <Tours
                        image="/images/popular1.jpg"
                        name="Mykonos and Santorini Tour"
                    />
                </Carousel>
            </div>
        </div>
    );
}
