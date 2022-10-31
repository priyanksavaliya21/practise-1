import Image from "next/image";
import filter from "../public/images/icons8-filter.svg";
import downaroww from "../public/images/icons8-expand_arrow-down.svg";
import { useState } from "react";

const Slot_2 = () => {
  const [ currclass , setclass] = useState(false);

const addclass =()=>{
    setclass(!currclass);
}

  return (
    <>
      <div className="slot-2">
        <h3 className="slot-2-head">Courses</h3>
        <div className="slot-2-left_tools">
          <div className="choice_block">
            <button className="choice_btn choice_btn-diff-1  ">all</button>
            <button className="choice_btn  choice_btn-diff-2 active">my</button>
          </div>
          <div className="searchbar">
            <input
              type="search"
              name="search"
              id="searchbar"
              placeholder="Search by keyword"
            />
          </div>
          <div className="filter_menu">
            <div className="filter_head " onClick={addclass}>
              <div className="filter_icon">
                <div className="image-container">
                  <Image
                    src={filter}
                    alt="header logo"
                    layout="fill"
                    className="image"
                    quality={100}
                  />
                </div>
              </div>
              <span className="filter_value">Filter</span>
              <div className="down_arrow" style={{transform:currclass ? "rotate(180deg)  translateY(50%)" : "rotate(0deg) translateY(-50%)"  }}>
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
            <ul className={`filter_block ${ currclass ? "activefilter" : null}`}>
              <Filteritems item="item 1" val="1" />
              <Filteritems item="item 2" val="2" />
              <Filteritems item="item 3" val="3" />
              <Filteritems item="item 4" val="4" />
              <Filteritems item="item 5" val="5" />
              <Filteritems item="item 6" val="6" />
              <Filteritems item="item 7" val="7" />
              <Filteritems item="item 8" val="8" />
              <Filteritems item="item 9" val="9" />
              <Filteritems item="item 10" val="10" />
              <Filteritems item="item 11" val="11" />
              <Filteritems item="item 12" val="12" />
              <Filteritems item="item 13" val="13" />
              <Filteritems item="item 14" val="14" />
              <Filteritems item="item 15" val="15" />
              <Filteritems item="item 16" val="16" />
              <Filteritems item="item 17" val="17" />
              <Filteritems item="item 18" val="18" />
              <Filteritems item="item 19" val="19" />
              <Filteritems item="item 20" val="20" />
              <Filteritems item="item 21" val="21" />
              <Filteritems item="item 22" val="22" />
              <Filteritems item="item 23" val="23" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const Filteritems = (props) => {
  return (
    <>
      <li className="filter_item" data-value={props.val}>
        {props.item}
      </li>
    </>
  );
};
export { Slot_2, Filteritems };
