import React from "react";
import Button from "../Button";
import "./css/style.scss";

function ProjectBoxMobile(props) {
  return (
    <div className="project_box_mobile">
      <div className="project_preview_mobile">
        <img
          src={props.image}
          alt="project_name"
          className="project_image_mobile"
        />
      </div>
      <div className="project_info_mobile">
        <div className="project_name_mobile">{props.name}</div>
        <Button className="btn_visit_mobile" text="Visit" link={props.link} />
      </div>
    </div>
  );
}

export default ProjectBoxMobile;
