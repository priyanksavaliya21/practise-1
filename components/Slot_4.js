import Image from "next/image";
import pencil from "../public/images/icons8-pencil.svg";
import plus from "../public/images/icons8-plus_math.svg";
import trash from "../public/images/icons8-trash.svg";
import bluerocket from "../public/images/icons8-rocket2.svg";
import CourseData from "./CourseData";

import { useState } from "react";
import downaroww from "../public/images/icons8-expand_arrow-down.svg";
import { Filteritems } from "./Slot_2";
import { Pagination } from "./Pagination";
import { paginate } from "./../utils/paginate";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';

const Slot_4 = () => {
  // const data = CourseData;

  const [currclass2, setclass2] = useState(false);
  const addclass2 = (e) => {
   
    setclass2(!currclass2);
  };

  // this is for pagination
  const [data, setdata] = useState(CourseData);

  const [currentPage, setcurrentPage] = useState(1);
  const pageSize = 15;
  const handlePageChage = (pagex) => {
    setcurrentPage(pagex);
  };
  const handleDelete = (currelm) => {
    setdata(data.filter((p) => p.id !== currelm.id));
  };

  const paginatePost = paginate(data, currentPage, pageSize);

  return (
    <>
      <div className="slot-4">
        <table>
          <thead>
            <tr>
              <th className="active">Name</th>
              <th>Department</th>
              <th>Program</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatePost.map((currelm, index) => {
              return (
                <>
                  <tr key={index.toString()}>
                    <td> {currelm.name}</td>
                    <td>{currelm.department} </td>
                    <td> {currelm.program}</td>
                    <td>
                      <div className="btn-block">
                        <div>
                          <BtnActions
                            imgsrc={pencil}
                            alt="iconfor_action-1"
                            link={currelm.btn_1Link}
                            title="Edit"
                          />
                        </div>
                        <div>
                          <BtnActions
                            imgsrc={plus}
                            alt="iconfor_action-2"
                            link={currelm.btn_2Link}
                            title="Add"
                          />
                        </div>
                        <div onClick={() => handleDelete(currelm)}>
                          <BtnActions
                            imgsrc={trash}
                            alt="iconfor_action-3"
                            link={currelm.btn_3Link}
                            title="Remove"
                          />
                        </div>
                        <div>
                          <BtnActions
                            imgsrc={bluerocket}
                            alt="iconfor_action-4"
                            link={currelm.btn_4Link}
                            title="Boost"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* ------------slot-5-here-------------------------------- */}
      <div className="slot-5">
        <div className="show_count_parent">
          <div className="tab_show_count" onClick={addclass2}>
            Showing <span className="fw-bolder"> 15</span>
            <div
              className="slot-5-down"
              style={{
                transform: currclass2
                  ? "rotate(180deg)  translateY(50%)"
                  : "rotate(0deg) translateY(-50%)",
              }}
            >
              <div className="image-container">
                <Image
                  src={downaroww}
                  alt="header logo"
                  layout="fill"
                  className="image"
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div
            className={`drop_down_showcount ${
              currclass2 ? "activeshowbar" : null
            }`}
          >
            <Filteritems item=" Showing 1" val="1" />
            <Filteritems item=" Showing 2" val="2" />
            <Filteritems item=" Showing 3" val="3" />
            <Filteritems item=" Showing 4" val="4" />
            <Filteritems item=" Showing 5" val="5" />
            <Filteritems item=" Showing 6" val="6" />
            <Filteritems item=" Showing 7" val="7" />
            <Filteritems item=" Showing 8" val="8" />
            <Filteritems item=" Showing 9" val="9" />
            <Filteritems item=" Showing 10" val="10" />
            <Filteritems item=" Showing 11" val="11" />
            <Filteritems item=" Showing 12" val="12" />
            <Filteritems item=" Showing 13" val="13" />
            <Filteritems item=" Showing 14" val="14" />
            <Filteritems item=" Showing 15" val="15" />
          </div>
        </div>
        <Pagination
          items={data.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onpageChange={handlePageChage}
        />
      </div>
    </>
  );
};



const BtnActions = (props) => {

  

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
  



  return (
    <>


    
      <BootstrapTooltip  title={props.title} placement="bottom" arrow TransitionComponent={Zoom} >
      <button className="btn-tool" data-link={props.link}>
        <div className="btn-logo_1">
          <div className="image-container">
            <Image
              src={props.imgsrc}
              alt={props.alt}
              layout="fill"
              className="image"
              quality={100}
            />
          </div>
        </div>
      </button>
      </BootstrapTooltip>
    </>
  );
};

export { Slot_4, BtnActions };
