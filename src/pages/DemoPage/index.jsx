import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import DemoPageColumnexplainone from "components/DemoPageColumnexplainone";
import DemoPageRowtail from "components/DemoPageRowtail";
import DemoPageStatusbar from "components/DemoPageStatusbar";
import DemoPageUserbar from "components/DemoPageUserbar";
import apiCalls from "apiCalls";
import MobileView from "components/new/MobileView";
import useResponsive from "hooks/useResponsive";

const DemoPagePage = () => {
  const isDesktop = useResponsive("up", "lg");
  const [typedMessage, setTypedMessage] = useState("");
  const [msgSent, setMsgSent] = useState(false);
  const navigate = useNavigate();

  const handleNewMessage = async (e) => {
    e.preventDefault();

    const request = {
      conversationId: "a28f2790-299d-46bc-a325-2260d48f5c71",
      messageContent: typedMessage,
    };

    const response = await apiCalls.sendMessage(request);
    console.log(response);
    setMsgSent(true);
  };

  return (
    <>
      {!isDesktop ? (
        <MobileView />
      ) : (
        <>
          <div className="bg-gradient  font-jost h-[1024px] mx-auto pb-3 pl-3 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-end justify-start my-auto p-10 md:px-5 right-[0] w-[85%]"
              style={{ backgroundImage: "url('images/img_group25.png')" }}
            >
              <div className="flex flex-col md:gap-10 gap-[114px] justify-start mb-[115px] mr-[83px] w-[70%] md:w-full">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[170px] md:ml-[0] ml-[590px] mr-[37px] text-base text-center tracking-[1.28px]"
                  shape="round"
                  color="gray_800"
                  size="sm"
                  variant="fill"
                >
                  Follow up
                </Button>

                <MobileView />
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
        </>
      )}
    </>
  );
};

export default DemoPagePage;
