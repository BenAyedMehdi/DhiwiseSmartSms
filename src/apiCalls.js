import axios from 'axios';

const url = 'https://localhost:7250';


export default class apiCalls {
  static createConversation = async () => {
    const response = await axios.post(`${url}/api/conversations`).catch((e) => console.log(e));
    console.log(response);
    return response.data;
  };
  
  static sendMessage = async (messageToAdd) => {
    const response = await axios.post(`${url}/api/Message`, messageToAdd).catch((e) => console.log(e));
    console.log(response);
    return response.data;
  };

  static getConversationMessages = async() => {
    const conversationId= "5b02dbbf-3e9c-48d1-bf4c-8e66f61ebd3a";
    const response = await axios.get(`${url}/api/Message/Conversation/${conversationId}`).catch((e) => console.log(e));
    if (response !== undefined) {
      console.log("fetched", response.data);
      return response.data;
    }
  };

}
