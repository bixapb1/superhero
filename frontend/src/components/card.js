import React from "react";
import style from "../style/card.module.css";
import { Link } from "react-router-dom";
import { removeHero, editHero } from "../redux/action";
import { useDispatch } from "react-redux";

function Card({ hero }) {
  const { nickname, _id, Images } = hero;
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.flip}>
        <Link
          to={`/${_id}`}
          className={style.front}
          style={{
            textDecoration: "none",
            position: "relative",
          }}
        >
          <img
            className={style.img}
            src={Images.split(",")[0]}
            alt={nickname}
          />
          <h1 className={style.textshadow}>{nickname}</h1>
        </Link>
        <div className={style.groupBtn}>
          <button
            className="double-border-button"
            onClick={() => dispatch(removeHero(_id))}
          >
            Delete
          </button>
          <Link
            to={"/edit"}
            className="double-border-button"
            onClick={() => dispatch(editHero(hero))}
          >
            Edit
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
