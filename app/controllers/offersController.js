const offersService = require('../services/offersService')

offersController = {
    sendOffer: async (req, res) => {
        try {
            let { productId, price } = req.body;
            let buyerId = req.infoInApiKey.id;
            let offer = await offersService.sendOffer(productId, buyerId, price);
            return res.json(offer);
        } catch (errors) {
            return res.status(errors[0].code).json({ errors: errors });
        }
    },
    getSentOffers: async (req, res) => {
        try {
            let buyerId = req.infoInApiKey.id;
            let offers = await offersService.getSentOffers(buyerId);
            return res.json(offers);
        } catch (errors) {
            return res.status(errors[0].code).json({ errors: errors });
        }
    },
    getReceivedOffers: async (req, res) => {
        try {
            let sellerId = req.infoInApiKey.id;
            let offers = await offersService.getReceivedOffers(sellerId);
            return res.json(offers);
        } catch (errors) {
            return res.status(errors[0].code).json({ errors: errors });
        }
    },
    acceptOffer: async (req, res) => {
        try {
            let { id } = req.params;
            let sellerId = req.infoInApiKey.id;
            let response = await offersService.acceptOffer(id, sellerId);
            return res.json(response);
        } catch (errors) {
            return res.status(errors[0].code).json({ errors: errors });
        }
    },
    rejectOffer: async (req, res) => {
        try {
            let { id } = req.params;
            let sellerId = req.infoInApiKey.id;
            let response = await offersService.rejectOffer(id, sellerId);
            return res.json(response);
        } catch (errors) {
            return res.status(errors[0].code).json({ errors: errors });
        }
    }
}

module.exports = offersController;
