import express from 'express';

import isAuthenticated from '../middleware/isAuthenticated.js';
import { createCource, editCource, getCreatorCources } from '../controller/cource.controller.js';
import upload from '../utils/multer.js'
const router=express.Router();
router.route("/").post(isAuthenticated,createCource)
router.route("/").get(isAuthenticated,getCreatorCources)
router.route("/:courceId").put(isAuthenticated,upload.single("courceThumbnail"),editCource)
export default router;