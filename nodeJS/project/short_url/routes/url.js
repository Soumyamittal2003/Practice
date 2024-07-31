const express=require("express");
const router =express.Router();
const {handleGenerateNewShortUrl,
    handleRedirect,
    handleGetAnalytics} = require('../controllers/url')


router.route("/")
.post(handleGenerateNewShortUrl);

router.route("/:shortId")
.get(handleRedirect);


router.route("/analytics/:shortId")
.get(handleGetAnalytics)

module.exports=router;