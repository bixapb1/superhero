import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { viewHeroes } from "../redux/action";
export default function View() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { hero } = useSelector((store) => store);
  const {
    nickname,
    real_name,
    superpowers,
    catch_phrase,
    origin_description,
    Images,
  } = hero;
  useEffect(() => {
    dispatch(viewHeroes(id));
  }, [dispatch, id]);

  return (
    <>
      {hero ? (
        <div style={{ color: "white", fontSize: "1.4rem" }}>
          <p>Nickname: {nickname}</p>
          <p>Real name: {real_name}</p>
          <p>Superpowers: {superpowers}</p>
          <p>Catch phrase: {catch_phrase}</p>
          <p>Origin description: {origin_description}</p>
        </div>
      ) : (
        <div style={{ color: "white", fontSize: "1.4rem" }}> Loading... </div>
      )}

      {Images &&
        Images.split(",").map((src) => {
          return (
            <div key={src} style={{ width: "300px", height: "300px" }}>
              <img src={`${src}`} alt={`${src}`} />
            </div>
          );
        })}
    </>
  );
}
