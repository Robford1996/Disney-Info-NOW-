const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", {
    data: req.data,
  });
});

module.exports = router;
