import express from "express";
import * as UrlController from "../controllers/url.controller.js";
const router = express.Router();

router.post("/shorten", UrlController.generateShortUrl);
router.get("/shorten/:shortId", UrlController.getToRedirectUrl);
router.put("/shorten/:shortId", UrlController.updateUrl);
router.delete("/shorten/:shortId", UrlController.deleteUrl);
router.get("/stat/:shortId", UrlController.getStat);

export default router;
