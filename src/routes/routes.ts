import { Router } from "express"
import { URLController } from "../controller/urlController"

const router =  Router()

router.post("/shorten", new URLController().shorten)
router.get("/shorten", new URLController().findAllUrls)
router.get("/:hash", new URLController().redirect)

export { router }