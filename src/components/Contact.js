import React, {useState} from 'react'
import styled from 'styled-components'
import { FaWhatsapp,  FaLinkedinIn ,FaGithub,FaTwitter} from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
const Contact = () => {

        const [ copied , setCopied] = useState('')
    const copyCodeToClipboard =()=>{


            const phone_num = 7020264151;
            setCopied(phone_num);
           
            document.execCommand("copy");

    }
    return (
        <Main>
            <img src="images/pic.jpg" alt="" />
            <h3>Sagar Tare</h3>
            <h4>Frontend Developer</h4>
            <div className="icons">
                <div className="container">
            <a href=""><BiEnvelope className="margin" /></a>
            <span>sagartare2014@gmail.com</span>
            </div>
             <div className="container">
            
            <a href="" ><FcPhoneAndroid  className="margin" /></a>
            <span>7020264151</span>
            </div>
             <div className="container">
            
            <a href="" ><FaWhatsapp  className="margin" /></a>
            <span>9209145276</span>
            </div>
            
          
            </div>
        </Main>
    )
}

export default Contact

const Main =  styled.div`
    margin: 2% 5% 5% 5%;
    img{
        width:18%;
        border-radius:50%;
    }
    .icons{
        display:flex;
        flex-wrap:wrap;
        margin: 5% 0 0 29%;
        .container{
            display:flex;
            flex-direction:column;
            margin: 0 2%;
            a{font-size:25px;}
       
    }
        
    }
`;

