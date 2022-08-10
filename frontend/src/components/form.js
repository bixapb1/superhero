import React from "react";
import style from "../style/form.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postHero, patchHero } from "../redux/action";
function Form({ setIsOpen, edit }) {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const { editHero } = useSelector((store) => store);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {
    const form = document.getElementById("form");
    const formData = new FormData(form);

    if (edit) {
      dispach(patchHero(formData, editHero._id));
      return navigate("/");
    } else {
      dispach(postHero(formData));
      setIsOpen(false);
      reset();
    }
  };

  return (
    <form
      id="form"
      className={`${style.form} ${edit ? style.edit : ""}`}
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <label className={style.label} htmlFor="nickname">
        Nickname:
      </label>
      <input
        className={style.input}
        type="text"
        id="nickname"
        {...register("nickname", { required: true })}
        defaultValue={!setIsOpen ? editHero?.nickname : ""}
      />

      <label className={style.label} htmlFor="real_name">
        Real name:
      </label>
      <input
        className={style.input}
        type="text"
        id="real_name"
        {...register("real_name", { required: true })}
        defaultValue={!setIsOpen ? editHero?.real_name : ""}
      />
      <label className={style.label} htmlFor="origin_description">
        Origin description:
      </label>
      <input
        className={style.input}
        type="text"
        id="origin_description"
        {...register("origin_description", { required: true })}
        defaultValue={!setIsOpen ? editHero?.origin_description : ""}
      />

      <label className={style.label} htmlFor="superpowers">
        Superpowers:
      </label>
      <input
        className={style.input}
        type="text"
        id="superpowers"
        {...register("superpowers", { required: true })}
        defaultValue={!setIsOpen ? editHero?.superpowers : ""}
      />
      <label className={style.label} htmlFor="catch_phrase">
        Catch phrase:
      </label>
      <input
        className={style.input}
        type="text"
        id="catch_phrase"
        {...register("catch_phrase", { required: true })}
        defaultValue={!setIsOpen ? editHero?.catch_phrase : ""}
      />
      <label className={style.label} htmlFor="Images">
        Upload Images:
      </label>
      <input
        className={style.input}
        type="file"
        multiple={true}
        accept=".jpg,.jpeg,.png"
        id="Images"
        {...register("Images")}
      />
      <div className={style.contentImage}>
        {editHero.Images &&
          editHero.Images.split(",").map((src) => {
            return (
              <div key={src} className={style.boxImg}>
                <img src={`${src}`} alt={`${src}`} />
              </div>
            );
          })}
      </div>

      <input className={style.submit} type="submit" value="Submit" />
    </form>
  );
}

export default Form;
