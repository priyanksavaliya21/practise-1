 
import Image from "next/image";

const Navtab_v1 = (props)=>{

return(
    <>
          <div className="navtab_v1">
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
            <p className="labal_nav"><a href="#0">{props.labaltext}</a></p>
          </div>
    </>
)

}
export {Navtab_v1}