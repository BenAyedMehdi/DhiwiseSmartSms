import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Navbar from "components/Navbar";
import useResponsive from "hooks/useResponsive";

const AboutPagePage = () => {
  const isDesktop = useResponsive("up", "lg");
  const navigate = useNavigate();

  return (
    <>
    {isDesktop ? (

      
      <div className="bg-gradient  font-jost h-[1024px] mx-auto pb-3 pl-3 relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[129px] h-max inset-y-[0] justify-start my-auto p-10 md:px-5 right-[0] w-[85%]"
          style={{ backgroundImage: "url('images/img_group25.png')" }}
        >
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[170px] md:ml-[0] ml-[850px] mr-[120px] text-base text-center tracking-[1.28px]"
            shape="round"
            color="gray_800"
            size="sm"
            variant="fill"
            >
            Follow up
          </Button>
          <div className="flex flex-col gap-[33px] h-[605px] md:h-auto items-center justify-center mb-[158px] md:ml-[0] ml-[312px] mr-[505px] w-auto">
            <Text
              className="max-w-[323px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtJostRomanRegular24"
              >
              Our goal is to improve human interaction with technology{" "}
            </Text>
            <Img
              className="h-10 w-10"
              src="images/img_rocket.svg"
              alt="rocket"
              />
            <Text
              className="max-w-[323px] md:max-w-full text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
              size="txtJostRomanRegular24"
              >
              We want to enhance technologies with limitations
            </Text>
            <Img
              className="h-10 w-10"
              src="images/img_rocket_white_a700.svg"
              alt="rocket_One"
              />
            <Text
              className="max-w-[310px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtJostRomanRegular24"
              >
              The fastest and most modern AI is just one SMS away!
            </Text>
            <Img
              className="h-10 w-10"
              src="images/img_rocket_white_a700.svg"
              alt="rocket_Two"
            />
          </div>
        </div>
        <Button
          className="common-pointer absolute bg-transparent cursor-pointer font-bold leading-[normal] left-[11%] min-w-[147px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 top-[4%]"
          onClick={() => navigate("/")}
          size="xs"
          >
          SMSavvy.
        </Button>
        <div className="absolute flex flex-col md:gap-10 gap-[70px] items-start justify-start left-[11%] md:px-5 top-[34%] w-auto">
          <Navbar />
        </div>
      </div>
        ) : (
                
      <div className="bg-gradient  font-jost h-[1024px] mx-auto pb-3 pl-3 relative w-full">
        <div
          className=" bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[129px] h-max inset-y-[0] justify-start my-auto p-10 md:px-5 right-[0] w-[85%]"
          style={{ backgroundImage: "url('images/img_group25.png')" }}
        >
          
        <Button
          className="common-pointer  bg-transparent cursor-pointer font-bold leading-[normal] left-[11%] min-w-[147px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 top-[4%]"
          onClick={() => navigate("/")}
          size="xs"
          >
          SMSavvy.
        </Button>
        <div className=" flex flex-col md:gap-10 gap-[70px] items-start justify-start left-[11%] md:px-5 top-[34%] w-auto">
          <Navbar />
        </div>
        <Text
              className="max-w-[323px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtJostRomanRegular24"
              >
              Our goal is to improve human interaction with technology{" "}
            </Text>
            <Img
              className="h-10 w-10"
              src="images/img_rocket.svg"
              alt="rocket"
              />
              <Text
              className="max-w-[323px] md:max-w-full text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
              size="txtJostRomanRegular24"
              >
              We want to enhance technologies with limitations
            </Text>
            <Img
              className="h-10 w-10"
              src="images/img_rocket_white_a700.svg"
              alt="rocket_One"
              />
              <Text
              className="max-w-[310px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtJostRomanRegular24"
              >
              The fastest and most modern AI is just one SMS away!
            </Text>
            <Img
              className="h-10 w-10"
              src="images/img_rocket_white_a700.svg"
              alt="rocket_Two"
            />
        </div>
      </div>
        )}
    </>
  );
};

export default AboutPagePage;
