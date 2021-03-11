msg.payload = {
    
    "text" : msg.payload,
    "tone" : msg.response,
    "sentiment" : msg.sentiment
};

return msg;