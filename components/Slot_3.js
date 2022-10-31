import Image from "next/image";
import download from "../public/images/icons8-download.svg";

const Slot_3 = () => {
  return (
    <>
      <div className="slot-3">
        <div className="course_found">
          <p>13 courses found</p>
        </div>
        <div className="pdf_download">
          <a href="#0" className="download_link">
           <span> Download CSV</span>
            <div className="download_icon">
            <div className="image-container">
              <Image
                src={download}
                alt="header logo"
                layout="fill"
                className="image"
                quality={100}
              />
            </div>
          </div>
          </a>
        </div>
      </div>
    </>
  );
};
export { Slot_3 };
