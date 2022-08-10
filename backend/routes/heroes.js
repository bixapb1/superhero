const express = require("express");
const upload = require("../midlleware/upload");
const router = express.Router();
const Hero = require("../model/Hero");

router.get("/", async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (err) {
    res.json({ massage: err });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const heroes = await Hero.findById(req.params.id);
    res.json(heroes);
  } catch (err) {
    res.json({ massage: err });
  }
});

//Post
router.post("/", upload.array("Images"), async (req, res) => {
  const hero = new Hero({
    nickname: req.body.nickname,
    real_name: req.body.real_name,
    origin_description: req.body.origin_description,
    superpowers: req.body.superpowers,
    catch_phrase: req.body.catch_phrase,
  });
  if (req.files) {
    let path = "";
    req.files.forEach(function (files) {
      path = path + files.path + ",";
    });
    path = path.substring(0, path.lastIndexOf(","));

    hero.Images = path;
  }
  try {
    const savedHero = await hero.save();
    res.json(savedHero);
  } catch (err) {
    res.json({ massage: err });
  }
});
//Put
router.patch("/:id", upload.array("Images"), async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id);
    if (req.files) {
      let path = "";
      req.files.forEach(function (files) {
        path = path + files.path + ",";
      });
      path = path.substring(0, path.lastIndexOf(","));
      hero.Images = path;
    }
    Object.assign(hero, req.body);
    hero.save();
    res.json(hero);
  } catch (err) {
    res.json({ massage: err });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id);
    await hero.remove();
    res.json({ massage: "hero remove" });
  } catch (err) {
    res.json({ massage: err });
  }
});

module.exports = router;
