const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const {validateListing, isLoggedIn, isOwner} = require("../middleware.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage}); //{dest: "uploads/"}

const listingController = require("../controllers/listings.js");

//Listings
router
    .route("/")
    .get(wrapAsync(listingController.index)) //index
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing)); //create

//New route (CREATE)
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing)) //read(show)
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.upadteListing)) //update
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing)); //delete

//Edit route (UPDATE)
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;