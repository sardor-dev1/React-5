import React, { Fragment } from "react";
import "./modal.scss";

function Modal(data, close) {
  return (
    <Fragment>
      <div className="user__card">
        <div onClick={() => close(null)}></div>;
        <div className="user__card__img">
          <img src={data.url} alt="" />
        </div>
        <div className="user__card__data">
          <h3 className="user__card__title">
            {data.fname} {data.lname}
          </h3>
          <p className="user__card__desc">{data.birth}</p>
          <p className="user__card__desc">{data.gender}</p>
          <p className="user__card__desc">{data.number}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;
