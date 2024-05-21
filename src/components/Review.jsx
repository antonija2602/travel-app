import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdStar } from "react-icons/md";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },

    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

export default function Review() {
    const Card = ({ image, name, position }) => {
        return (
            <div className=" max-w-sm bg-white  rounded-lg shadow mx-4 p-8 ">
                <div className="flex flex-col items-center gap-3">
                    <img
                        className="size-32 rounded-full shadow-lg mb-5 object-cover"
                        src={image}
                        alt=""
                    />
                    <span className=" flex items-center ">
                        {[...Array(5)].map((_, index) => (
                            <MdStar
                                key={index}
                                className=" text-amber-500 text-xl"
                            />
                        ))}
                    </span>
                    <p className=" text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi accusantium aut possimus repellat alias id error
                        officia unde, eaque illo deleniti laboriosam ex iure
                        voluptatum quos voluptas aspernatur. Sunt, obcaecati.
                    </p>

                    <h5 className=" text-xl font-medium ">{name}</h5>
                    <span className="text-sm text-orange uppercase ">
                        {position}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="bg-slate-50 relative z-10">
                <div className=" xl:px-0 px-6 mx-auto text-center pt-16">
                    <p className=" text-orange text-xl p-2">
                        Testimonials & Reviews
                    </p>
                    <h4 className=" lg:text-5xl text-3xl font-bold p-2 ">
                        What They're Saying
                    </h4>
                </div>
                <div className=" container mx-auto  max-w-7xl px-20 py-8">
                    <Carousel
                        partialVisbile={false}
                        swipeable={true}
                        draggable={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        arrows={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">
                        <Card
                            image="/images/saying1.jpg"
                            name="Shirley Smith"
                            position="Founder & CEO"
                        />
                        <Card
                            image="/images/saying2.jpg"
                            name="David Anderson"
                            position="Customer"
                        />
                        <Card
                            image="/images/saying3.jpg"
                            name="Andra Young"
                            position="Founder & CEO"
                        />
                        <Card
                            image="/images/saying4.jpg"
                            name="Kevin Smith"
                            position="Customer"
                        />
                    </Carousel>
                    ;
                </div>
            </div>
        </div>
    );
}
