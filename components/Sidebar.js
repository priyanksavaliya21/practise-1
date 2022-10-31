import avtar from "../public/images/Bitmap.svg";
import Image from "next/image";
import home from "../public/images/icons8-home.svg";
import quiz from "../public/images/icons8-quiz.svg";
import play from "../public/images/icons8-play_property.svg";
import setting from "../public/images/icons8-settings.svg";
import elective from "../public/images/icons8-elective.svg";
import  classroom from "../public/images/icons8-classroom.svg";
import   add from "../public/images/icons8-add.svg";
import   rocket from "../public/images/icons8-rocket.svg";
import   logout  from "../public/images/icons8-logout_rounded_left.svg";
import { Navtab_v1 } from "../components/Navtab_v1";
import { Navtab_v2 } from "../components/Navtab_v2";

const Sidebar = () => {

  return (
    <>
      <div className="sidebar">
        <div className="sidebar_header">
          <div className="avtar">
            <div className="image-container">
              <Image
                src={avtar}
                alt="header logo"
                layout="fill"
                className="image"
                quality={100}
              />
            </div>
          </div>
          <h3 className="username">Abdullah</h3>
          <p className="division">VII - A</p>
        </div>
        <div className="sidbar_nav">
          <Navtab_v1 imgsrc={home} labaltext="home" />
          <Navtab_v2  imgsrc={elective} labaltext="Subjects" panal1="maths"  panal2="coding"  panal3="economics" />
          <Navtab_v1 imgsrc={quiz} labaltext="Assessments" />
          <Navtab_v1 imgsrc={play} labaltext="Live-Sessions" />
          <Navtab_v2  imgsrc={classroom} labaltext="Training Zone"  panal1="dubai"  panal2="abu dhabi"  panal3="tehran" />
          <Navtab_v1 imgsrc={setting} labaltext="Profile Settings" />
        </div>
        <div className="bottom_nav">
         <Navtab_v2  imgsrc={add} labaltext="Create" panal1="course"  panal2="post"  panal3="blog" />
         <Navtab_v2  imgsrc={ rocket} labaltext="Publish" panal1="page"  panal2="article"  panal3="book" />
        </div>
        <div className="logout_tab">
        <Navtab_v1 imgsrc={ logout} labaltext="Log out" />
        </div>
      </div>
    </>
  );
};

export { Sidebar };
