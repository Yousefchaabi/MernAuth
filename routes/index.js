var express = require("express");
const {
  Register,
  Login,
  Test,
  Admin,
} = require("../controllers/users.controllers");
var router = express.Router();
const passport = require("passport");
const { ROLES, inRole } = require("../security/Rolemiddleware");
const {
  AddProfile,
  FindAllProfiles,
  FindSingleProfile,
  DeleteProfile,
} = require("../controllers/profile.controllers");

/* users routes. */
router.post("/register", Register);
router.post("/login", Login);

/* Add Profile route */
router.post(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  AddProfile
);

/* get all Profiles route */
router.get(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  FindAllProfiles
);

/* get single Profile route */
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  FindSingleProfile
);

/* delete Profile route */
router.delete(
  "/profile/:id",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  DeleteProfile
);

/* test route */
// router.get(
//   "/test",
//   passport.authenticate("jwt", { session: false }),
//   inRole(ROLES.USER),
//   Test
// );

/* Admin route */
/* router.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  Admin
); */

module.exports = router;
