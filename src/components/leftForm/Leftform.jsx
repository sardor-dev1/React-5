import React, { useState } from "react";
import "./leftform.scss";
import Modal from "../modal/Modal";

let userCard = [
  {
    id: 1,
    fname: "Alexsadr",
    lname: "Gumbold",
    number: +998946523321,
    birth: "1995-15-21",
    gender: "male",
    url: "https://images.law.com/contrib/content/uploads/sites/292/2024/03/Aleksandr-Livshits-767x633.jpg",
  },
  {
    id: "2",
    fname: "Mario",
    lname: "Todo",
    number: +9965151515,
    birth: "1956-25-36",
    gender: "male",
    url: "https://t4.ftcdn.net/jpg/01/34/51/81/360_F_134518160_5DyP0y6YqXQgG6FdorIvpk7M6CBNrglm.jpg",
  },
  {
    id: "3",
    fname: "Josh",
    lname: "Shosh",
    number: +9965151515,
    birth: "1985-14-08",
    gender: "male",
    url: "https://img.freepik.com/free-photo/smiling-executive_23-2147707180.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais",
  },
];

function leftform() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [url, setUrl] = useState("");
  const [data, setData] = useState(userCard);
  const [edit, setEdit] = useState(null);

  const formSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      let index = data.findIndex((el) => el.id === edit.id);
      let updateData = {
        id: edit.id,
        fname: fname,
        lname: lname,
        birth: birth,
        number: number,
        gender: gender,
      };
      let update = data;
      update.splice(index, 1, updateData);
      setData(update);
      setEdit(null);
    } else {
      const users = {
        id: new Date().getTime(),
        fname: fname,
        lname: lname,
        birth: birth,
        url: url,
        number: number,
        gender: gender,
      };
      setData((prev) => [...prev, users]);
    }

    setFname("");
    setLname("");
    setBirth("");
    setUrl("");
    setNumber("");
    setGender("");
  };
  console.log(data);

  const cardDelete = (id) => {
    setEdit(null);
    if (confirm("Card should be deleted")) {
      let filterCard = data.filter((el) => el.id !== id);
      setData(filterCard);
    }
  };

  const cardEdit = (el) => {
    setEdit(el);
    setFname(el.fname);
    setLname(el.lname);
    setUrl(el.url);
    setBirth(el.birth);
    setNumber(el.number);
    setGender(el.gender);
  };

  const [product, setProduct] = useState(null);
  const userData = data?.map((el) => (
    <div key={el.id} className="user__card">
      <div className="user__card__img">
        <img src={el.url} alt="" onClick={() => setProduct(el)} />
      </div>
      <div className="user__card__info">
        <h3 className="user__card__title">
          {el.fname} {el.lname}
        </h3>
        <p className="user__card__desc">{el.birth}</p>
        <p className="user__card__desc">{el.gender}</p>
        <p className="user__card__desc">{el.number}</p>
        <div className="user__card__btns">
          <button
            className="user__card__btn user__delete"
            onClick={() => cardDelete(el.id)}
          >
            Delete
          </button>
          <button
            className="user__card__btn form__edit"
            onClick={() => cardEdit(el)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="">
      <div className="forms">
        <form onSubmit={formSubmit} className="form" action="">
          <h2 className="form__title">Users Form</h2>
          <div>
            <label htmlFor="">Full name</label>
            <input
              required
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="fullName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input
              required
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="lastName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Url</label>
            <input
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="url"
              type="url"
            />
          </div>
          <div>
            <label htmlFor="">BirthDate</label>
            <input
              required
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              placeholder="birthdate"
              type="date"
            />
          </div>
          <div>
            <label htmlFor="">Phone number</label>
            <input
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="tel"
              type="number"
            />
          </div>
          <div>
            <label htmlFor="Gender">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              name=""
              id=""
            >
              <option value="gender">Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div className="form__btn">
            <button className="form__submit">{edit ? "Save" : "Create"}</button>
          </div>
        </form>
        <div className="form__cards">{userData}</div>
        {product ? <Modal data={product} close={setProduct} /> : <></>}
      </div>
    </section>
  );
}

export default leftform;
