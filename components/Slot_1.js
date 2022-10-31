import hometool from "../public/images/Shape.svg";
import Image from "next/image";
import add from "../public/images/icons8-add.svg";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';

const Slot_1 = () => {

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#20a6d2" ,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#20a6d2" ,
      fontWeight:"800",
    },
  }));
  
 const menunove = ()=>{
  const  menu = document.querySelector(".sidebar");
  const  slot1 = document.querySelector(".slot-1");
  menu.classList.toggle("sidebar_move");
  slot1.classList.toggle("jusify_slot1");
    
 }


  return (
    <>
      <div className="slot-1">
        <div className="left_tools">
        <BootstrapTooltip  title="Click here for Menu" placement="left-start" arrow TransitionComponent={Zoom} >
          <button className="home_tool" onClick={menunove}>
            <div className="image-container">
              <Image
                src={hometool}
                alt="header logo"
                layout="fill"
                className="image"
                quality={100}
              />
            </div>
          </button>
          </BootstrapTooltip>
          <p className="home_tool-text">Courses</p>
        </div>
        <div className="righttools">
        <BootstrapTooltip  title=" New Course" placement="bottom" arrow TransitionComponent={Zoom} >
          <button className="couse_btn">
            
            <div className="navicon">
              <div className="image-container">
                <Image
                  src={ add }
                  alt="header logo"
                  layout="fill"
                  className="image"
                  quality={100}
                />
              </div>
            </div> 
           <span className="text-course-btn"> New Course</span>
          </button>
          </BootstrapTooltip>
        </div>
      </div>
    </>
  );
};
export { Slot_1 };
