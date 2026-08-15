const exprees = require("express");
const router = exprees.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn,isOwner,validateListing } = require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer=require("multer");
const {storage}= require("../cloudConfig.js");
const upload=multer({storage});

// using router.route to make it more compact
router.route("/")
    .get( wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing)
    );
  
//New Route
router.get("/new",upload.single("listing[image]"), isLoggedIn,listingController.renderNewForm );


router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put( isLoggedIn,isOwner, validateListing, wrapAsync(listingController.updateListing))
    .delete( isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));


//Edit Route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(listingController.editListing));

module.exports = router;

