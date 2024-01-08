import { Box, useMediaQuery } from "@mui/material"
import TypingAnim from "../components/typer/TypingAnim"
import { useTheme } from "@emotion/react"
import Footer from "../components/footer/Footer";

const Home = () => {

  const theme= useTheme();
  const isBelowMd=useMediaQuery(theme.breakpoints.down("md"));
  return <Box sx={{
    width:"{100%}",
    height:"100%",
    flex:"flex",
    mx:"auto",
  }}>
    <Box sx={{
      display:"flex",
      width:"100%",
      flexDirection:"column",
      alignItems:"center",
      mx:"auto",
      mt:3
    }}><Box>
      <TypingAnim/>
    </Box>
    <Box sx={{
      display:"flex",
      width:"100%",
      flexDirection:{md:"row",xs:"column",sm:"column"},
      gap:5,
      my:10
    }}>
        <img src=" robot.png" alt="robot" style={{width:"200px",margin:"auto"}}/>
        <img className="image-inverted rotate" src="openai.png" alt="openai" style={{width:"200px",margin:"auto"}}/>
    </Box>
    <Box sx={{
      display:"flex",
      width:"100%",
      margin:"auto",
    }}>
        <img src="chat.png" alt="chatbot" style={{display:"flex",width: isBelowMd?"80%":"60%",margin:"auto",borderRadius:20,boxShadow:"-5px -5px 105px #64f3d5",marginTop:20,marginBottom:20}}/>
    </Box>
    </Box>
    <Footer />
  </Box>
}

export default Home