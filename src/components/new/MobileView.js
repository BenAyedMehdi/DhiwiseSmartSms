import DemoPageStatusbar from "components/DemoPageStatusbar";
import DemoPageUserbar from "components/DemoPageUserbar";
import React, { useState, useEffect } from "react";
import { Button, Img, Input, Text } from "components";
import DemoPageRowtail from "components/DemoPageRowtail";
import DemoPageColumnexplainone from "components/DemoPageColumnexplainone";
import apiCalls from "apiCalls";
import ConversationMessages from "./ConversationMessages";

function MobileView() {
  const [typedMessage, setTypedMessage] = useState("");
  const [msgSent, setMsgSent] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({});

  useEffect(async ()  => {
    await getConversationMessages();
  }, [message]);

  const getConversationMessages = async () => {
    const conversation = await apiCalls.getConversationMessages();
    if (conversation !== undefined) {
      setMessages(conversation);
    }
  };

  const handleNewMessage = async (e) => {
    e.preventDefault();
    if (typedMessage === "") return;
    const newMessageSent = {
      messageContent: typedMessage,
      isReceived: true,
    };
    setMessages([...messages, newMessageSent]);

    const request = {
      conversationId: "5b02dbbf-3e9c-48d1-bf4c-8e66f61ebd3a",
      messageContent: typedMessage,
    };
    const response = await apiCalls.sendMessage(request);
    setMessage(newMessageSent);
  };

  const getReply = async (response) => {
    const request = {
      conversationId: "a28f2790-299d-46bc-a325-2260d48f5c71",
      messageContent: response.messageContent,
    };
    const res = await apiCalls.sendMessage(request);
    setMessages([
      ...messages,
      { messageContent: res.messageContent, isSent: false },
    ]);
  };

  return (
    <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between w-full md:h-full">
      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start rounded-[14px] w-[51%] md:w-full">
        <DemoPageStatusbar className="bg-gray-200 flex flex-row h-[59px] md:h-auto items-end justify-between w-[399px] sm:w-full" />
        <DemoPageUserbar className="flex flex-row sm:gap-5 h-[34px] md:h-auto items-center justify-center w-[399px] sm:w-full" />
        <Text
          className="text-[11px] text-black-900 text-center tracking-[0.07px] uppercase"
          size="txtPoppinsRegular11"
        >
          +123 123 123{" "}
        </Text>

        <ConversationMessages messagesList={messages} />

        <div className="flex flex-row gap-[18px] h-[107px] md:h-auto items-center justify-start mt-[180px] p-2.5 w-[399px] sm:w-full">
          <div className="flex flex-col h-[43px] md:h-auto items-start justify-center w-[285px] sm:w-full">
            <Input
              onChange={(text) => setTypedMessage(text)}
              name="type"
              placeholder="SMS"
              className="md:h-auto p-0 placeholder:text-gray-800_01 sm:h-auto text-[17px] text-left tracking-[-0.41px] w-full"
              wrapClassName="outline outline-[0.5px] outline-black-900_7e w-[99%]"
            ></Input>
          </div>
          <Button
            className="cursor-pointer min-w-[58px] text-[17px] text-center tracking-[-0.41px]"
            shape="round"
            color="indigo_A100"
            size="sm"
            variant="outline"
            onClick={handleNewMessage}
          >
            Send
          </Button>
        </div>
      </div>
      <DemoPageColumnexplainone className="flex flex-col font-jost md:gap-10 gap-[103px] items-start justify-start md:mt-0 mt-16 w-auto" />
    </div>
  );
}

export default MobileView;
