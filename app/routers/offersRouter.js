const express = require("express");
const offersController = require("../controllers/offersController");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

const offersRouter = express.Router();

offersRouter.post("/", authenticationMiddleware, offersController.sendOffer);
offersRouter.get("/sent", authenticationMiddleware, offersController.getSentOffers);
offersRouter.get("/received", authenticationMiddleware, offersController.getReceivedOffers);
offersRouter.post("/:id/accept", authenticationMiddleware, offersController.acceptOffer);
offersRouter.post("/:id/reject", authenticationMiddleware, offersController.rejectOffer);

module.exports = offersRouter;
