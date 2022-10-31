import Image from "next/image";
import logo from "../public/images/Combined Shape2.svg";
import logo2 from "../public/images/Group-2.png";

const Header = () => {
  
  return (
    <>
      <header>
        <div className="part-1 ">
          <div className="header_logo ">
            <div className="image-container">
              <Image
                src={logo}
                alt="header logo"
                layout="fill"
                className="image"
                quality={100}
              />
            </div>
          </div>
          <div className="header_txt">
            <h2 className="header_qut">GEMS Modern Academy Dubai</h2>
          </div>
          <div className="message-info">
            <div className="message-info-box">
              <div className="message_num">16</div>
            </div>
          </div>
        </div>
        <div className="part-2">
          <p className="drop_head">Edutech - Teacher</p>

          <div className="year_menu">
            <select className="select-block ">
              <option value="2021-2022" className="opt">
                2021-2022
              </option>
              <option value="2020-2021" className="opt">
                2020-2021
              </option>
              <option value="2019-2020" className="opt">
                2019-2020
              </option>
              <option value="2018-2019" className="opt">
                2018-2019
              </option>
              <option value="2017-2018" className="opt">
                2017-2018
              </option>
              <option value="2016-2017" className="opt">
                2016-2017
              </option>
              <option value="2015-2016" className="opt">
                2015-2016
              </option>
              <option value="2014-2015" className="opt">
                2014-2015
              </option>
              <option value="2013-2014" className="opt">
                2013-2014
              </option>
              <option value="2012-2013" className="opt">
                2012-2013
              </option>
            </select>
          </div>
        </div>
        <div className="part-3">
            <div className="logo2">
            <div className="image-container">
              <Image
                src={logo2}
                alt="header logo"
                layout="fill"
                className="image"
                quality={100}
              />
            </div>
            </div>
        </div>
      </header>
    </>
  );
};

export { Header };
