import Image from "next/image";
import arrow from "../public/images/icons8-expand.svg";
import { Navtab_v1 } from "../components/Navtab_v1";
import React, { useState } from "react";

const Navtab_v2 = (props) => {
  const [show, setshow] = useState(false);

  const collaps = ()=>{
    setshow(!show)
  }

  return (
    <>
      <div className="navtab_v2">
        <div className="parent_collaps" onClick={collaps}>
          <div className="navicon">
            <div className="image-container">
              <Image
                src={props.imgsrc}
                alt="header logo"
                layout="fill"
                className="image"
                quality={100}   
              />
            </div>
          </div>
          <p className="labal_nav">{props.labaltext}</p>
          <div className="arrow_nav" style={{ transform: show ?  " rotate(90deg) translateX(-5px)" :  " rotate(0deg) translateY(-50%) " } }  >
            <div className="image-container">
              <Image
                src={arrow}
                alt="header logo"
                layout="fill"
                className="image white_arrow"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="child_collaps" style={{height : show ? "auto" : "0px"    }}>
          <Navtab_v1 imgsrc={props.imgsrc} labaltext={props.panal1} />
          <Navtab_v1 imgsrc={props.imgsrc} labaltext={props.panal2}  />
          <Navtab_v1 imgsrc={props.imgsrc} labaltext={props.panal3} />
        </div>
      </div>
    </>
  );
};
export { Navtab_v2 };
