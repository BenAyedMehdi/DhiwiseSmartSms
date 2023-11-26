import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, List, Text } from "components";
import useResponsive from "hooks/useResponsive";
import Navbar from "components/Navbar";
import NavbarButton from "components/NavbarButton";
import MobileView from "components/new/MobileView";

const FeaturePagePage = () => {
  const isDesktop = useResponsive("up", "lg");
  const navigate = useNavigate();

  return (
    <>
      {!isDesktop ? (
        <>
          <div className="bg-gradient  font-jost h-[1024px] mx-auto pb-3 pl-3 relative w-full">
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

            <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <List
                    className="sm:flex-col flex-row gap-[27px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[107px] h-[218px] items-center justify-end sm:ml-[0] p-7 sm:px-5 rounded-[24px] w-full"
                      style={{
                        backgroundImage: "url('images/img_image1.png')",
                      }}
                    >
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtJostRomanBold16"
                      >
                        TelecomGPT
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtJostRomanRegular16"
                      >
                        SMS-power AI to keep you connected even when you are
                        offline
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[107px] h-[218px] items-center justify-end sm:ml-[0] p-7 sm:px-5 rounded-[24px] w-full"
                      style={{
                        backgroundImage: "url('images/img_image1.png')",
                      }}
                    >
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtJostRomanBold16"
                      >
                        QuizSMS
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtJostRomanRegular16"
                      >
                        Quiz and other game to keep you entertained and informed
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[107px] h-[218px] items-center justify-end sm:ml-[0] p-7 sm:px-5 rounded-[24px] w-full"
                      style={{
                        backgroundImage: "url('images/img_image1.png')",
                      }}
                    >
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtJostRomanBold16"
                      >
                        AssistantGPT
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtJostRomanRegular16"
                      >
                        AI- power assistant to help you with your questions and
                        concerns
                      </Text>
                    </div>
                  </List>
                </div>
                
          </div>
        </>
      ) : (
        <div className="bg-gradient  font-jost h-[1024px] mx-auto pb-3 pl-3 relative w-full">
          <div className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-10 md:px-5 right-[0] w-[85%]">
            <div className="flex flex-col md:gap-10 gap-[109px] items-end justify-start mb-[138px] w-[77%] md:w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[170px] text-base text-center tracking-[1.28px]"
                shape="round"
                color="gray_800"
                size="sm"
                variant="fill"
              >
                Follow up
              </Button>
              <div className="bg-white-A700_19 flex flex-col h-[645px] md:h-auto items-start justify-start max-w-[873px] mr-[3px] md:px-10 sm:px-5 px-[82px] py-[61px] rounded-[24px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <List
                    className="sm:flex-col flex-row gap-[27px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[107px] h-[218px] items-center justify-end sm:ml-[0] p-7 sm:px-5 rounded-[24px] w-full"
                      style={{
                        backgroundImage: "url('images/img_image1.png')",
                      }}
                    >
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtJostRomanBold16"
                      >
                        TelecomGPT
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtJostRomanRegular16"
                      >
                        SMS-power AI to keep you connected even when you are
                        offline
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[107px] h-[218px] items-center justify-end sm:ml-[0] p-7 sm:px-5 rounded-[24px] w-full"
                      style={{
                        backgroundImage: "url('images/img_image1.png')",
                      }}
                    >
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtJostRomanBold16"
                      >
                        QuizSMS
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtJostRomanRegular16"
                      >
                        Quiz and other game to keep you entertained and informed
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[107px] h-[218px] items-center justify-end sm:ml-[0] p-7 sm:px-5 rounded-[24px] w-full"
                      style={{
                        backgroundImage: "url('images/img_image1.png')",
                      }}
                    >
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtJostRomanBold16"
                      >
                        AssistantGPT
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtJostRomanRegular16"
                      >
                        AI- power assistant to help you with your questions and
                        concerns
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
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
            <Button
              className="common-pointer bg-transparent cursor-pointer font-bold leading-[normal] min-w-[84px] text-center text-white-A700 text-xl"
              onClick={() => navigate("/aboutpage")}
            >
              About us
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer font-bold leading-[normal] min-w-[183px] text-center text-white-A700 text-xl"
              onClick={() => navigate("/demopage")}
              size="xs"
            >
              Live the experience
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer font-bold leading-[normal] min-w-[86px] text-center text-white-A700 text-xl"
              onClick={() => navigate("/featurepage")}
            >
              Solutions
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturePagePage;
