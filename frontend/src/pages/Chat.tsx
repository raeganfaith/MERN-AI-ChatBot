import React from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import red from "@mui/material/colors/red";

const chatMessages = [
  {
    role: "assistant",
    content: "Hello! How can I assist you today?"
  },
  {
    role: "assistant",
    content: "I’m your friendly AI assistant, here to help with your questions."
  },
  {
    role: "assistant",
    content: "Need help? Just ask me anything!"
  },
  {
    role: "assistant",
    content: "Goodbye! Have a great day!"
  },
  {
    role: "assistant",
    content: "Got it! Anything else I can help with?"
  },
  {
    role: "assistant",
    content: "Oops! Something went wrong. Can you try that again?"
  },
  {
    role: "assistant",
    content: "You’re welcome! Let me know if there’s anything else."
  }
];

const Chat = () => {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box 
        sx={{ 
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column", 
        }}
      >
        <Box 
          sx={{ 
            display: "flex", 
            width: "100%", 
            height: "60vh", 
            bgcolor: "rgb(17, 29, 39)", 
            borderRadius: 5,
            flexDirection: 'column',
            mx: 3,
          }}
        >
          <Avatar 
            sx={{ 
              mx: "auto", 
              my: 2, 
              bgcolor: "white", 
              color: "black", 
              fontWeight: 700, 
            }}
          >
            {auth?.user?.name[0]}
            {auth?.user?.name.split(" ")[1][0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work-sans" }}>
            You are talking to a ChatBOT
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work-sans", my: 4, p: 3 }}>
            You can ask some questions related to Knowledge, Business, Advices,
            Education, etc. But avoid sharing personal information
          </Typography>
          <Button 
            sx={{ 
              width: "200px", 
              my: "auto", 
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              }, 
            }}>
              Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flex:{ md: 0.8, xs: 1, s: 1 }, flexDirection: "column", px: 3 }}>
        <Typography 
          sx={{ 
            fontSize: "40px", 
            color: "white", 
            mb: 2,
            mx: "auto", 
            fontWeight: "600"
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box 
          sx={{ 
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          { chatMessages.map((chat) => <div>{ chat.content }</div>) }  
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
