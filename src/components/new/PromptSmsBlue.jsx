import React from "react";

import { Img, Text } from "components";

const PromptSmsBlue = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-end w-[366px]">
        <div className="bg-blue-A200 flex flex-col h-full md:h-auto items-end justify-start px-3 py-1.5 rounded-[18px] w-[242px]">
          <Text
            className="leading-[22.00px] max-w-[218px] md:max-w-full text-[17px] text-white-A700 tracking-[-0.41px]"
            size="txtPoppinsRegular17"
          >
            {props.messagetext}
          </Text>
        </div>
      </div>
    </>
  );
};

export default PromptSmsBlue;
