import Image from "next/image";
import { Header } from "../components/Header";
import { Meta } from "../components/Meta";
import { Sidebar } from "../components/Sidebar";
import { Slot_1 } from "../components/Slot_1";
import { Slot_2 } from "../components/Slot_2";
import { Slot_3 } from "../components/Slot_3";
import { Slot_4 } from "../components/Slot_4";
import { Maps } from "../components/Maps";

export default function Home() {
const removemenu =()=>{
  const  menu = document.querySelector(".sidebar");
  menu.classList.remove("sidebar_move");
  const  slot1 = document.querySelector(".slot-1");
  slot1.classList.remove("jusify_slot1");
}

  return (
    <>
      <Meta title="GEMS Modern Academy Dubai - Index-Page" />
      <div className="main_wrapper">
        {/* Header Start   */}
        <div className="header_wrapper">
          <Header />
        </div>
        {/* Header End   */}

        {/* Main Content Start   */}
        <div className="main_content">
          <Sidebar />
          <div className="other-content" onMouseEnter={removemenu} >
            <Slot_1  />
            <Slot_2 />
            <Slot_3 />
            <Slot_4 />
           
          </div>
          <div className="dashboard_footer_dummy"></div>
        </div>
        {/* Main Content End  */}
      </div>
      {/* <Maps /> */}
       
    </>
  );
}
