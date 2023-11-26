import React from "react";

import { Img, Text } from "components";

const ReplySmsGrey = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-5 w-px" src="images/img_tail.svg" alt="tail" />
        <div className="bg-gray-200 flex flex-col h-full items-end justify-start px-3 py-1.5 rounded-[18px] w-full">
          <Text
            className="leading-[22.00px] max-w-[230px] md:max-w-full text-[17px] text-black-900 tracking-[-0.41px]"
            size="txtPoppinsRegular17Black900"
          >
            {props.messagetext}
          </Text>
        </div>
      </div>
    </>
  );
};


export default ReplySmsGrey;
