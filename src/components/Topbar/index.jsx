import React from "react";
import { useNavigate } from "react-router-dom";


<div className="flex flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
<div className="flex flex-col items-center justify-start pt-0.5">
  <div
    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
    size="txtJostRomanBold32"
  >
    <span className="text-white-A700 font-jost text-left font-bold">
      SMSavvy
    </span>
    <span className="text-pink-A400 font-jost text-left font-bold">
      .
    </span>
  </div>
</div>
<div
  className="cursor-pointer font-medium leading-[normal] min-w-[170px] my-[3px] text-base text-center tracking-[1.28px]"
  shape="round"
  color="gray_800"
  size="sm"
  variant="fill"
>
  Follow up
</div>
</div>

export default function Topbar() {
    const navigate = useNavigate();
    return (
      <div className="flex w-[1439px] items-center justify-between px-[145px] py-10 relative md:w-auto md:gap-60 sm:gap-10 mx-15">
        <div
          className="bg-transparent cursor-pointer font-bold leading-[normal] min-w-[84px] text-center text-white-A700 text-3xl xl:max-w-[1280px]"
          onClick={() => navigate("/")}
        >
          SmartSMS<span className="text-pink-A400">.</span>
        </div>

        <div className="bg-pink-A400 cursor-pointer rounded-[45px] [font-family:'Jost-Medium',Helvetica] text-white-A700 font-bold leading-[normal] min-w-[104px] min-h-full justify-center items-center flex">
            Follow up
        </div>
      </div>
    );
}