const offersRepository = require('../repositories/offersRepository');
const InputError = require('../errors/inputError');
const LogicError = require('../errors/logicError');

const offersService = {
    sendOffer: async (productId, buyerId, price) => {
        let errors = [];

        if (productId == undefined)
            errors.push(new InputError("productId", 'productId is undefined'));
        if (buyerId == undefined)
            errors.push(new InputError("buyerId", 'buyerId is undefined'));
        if (price == undefined)
            errors.push(new InputError("price", 'price is undefined'));

        if (errors.length > 0)
            throw errors;

        let offer = await offersRepository.createOffer(productId, buyerId, price);
        if (offer == null)
            errors.push(new LogicError('Error when creating offer'));

        if (errors.length > 0)
            throw errors;

        return offer;
    },
    getSentOffers: async (buyerId) => {
        let errors = [];

        if (buyerId == undefined)
            errors.push(new InputError("buyerId", 'buyerId is undefined'));

        if (errors.length > 0)
            throw errors;

        let offers = await offersRepository.getOffersByBuyer(buyerId);
        if (offers == null)
            errors.push(new LogicError('Error when getting sent offers'));

        if (errors.length > 0)
            throw errors;

        return offers;
    },
    getReceivedOffers: async (sellerId) => {
        let errors = [];

        if (sellerId == undefined)
            errors.push(new InputError("sellerId", 'sellerId is undefined'));

        if (errors.length > 0)
            throw errors;

        let offers = await offersRepository.getOffersBySeller(sellerId);
        if (offers == null)
            errors.push(new LogicError('Error when getting received offers'));

        if (errors.length > 0)
            throw errors;

        return offers;
    },
    acceptOffer: async (id, sellerId) => {
        let errors = [];

        if (id == undefined)
            errors.push(new InputError("id", 'id is undefined'));
        if (sellerId == undefined)
            errors.push(new InputError("sellerId", 'sellerId is undefined'));

        if (errors.length > 0)
            throw errors;

        let response = await offersRepository.acceptOffer(id, sellerId);
        if (response == null)
            errors.push(new LogicError('Error when accepting offer'));

        if (errors.length > 0)
            throw errors;

        return response;
    },
    rejectOffer: async (id, sellerId) => {
        let errors = [];

        if (id == undefined)
            errors.push(new InputError("id", 'id is undefined'));
        if (sellerId == undefined)
            errors.push(new InputError("sellerId", 'sellerId is undefined'));

        if (errors.length > 0)
            throw errors;

        let response = await offersRepository.rejectOffer(id, sellerId);
        if (response == null)
            errors.push(new LogicError('Error when rejecting offer'));

        if (errors.length > 0)
            throw errors;

        return response;
    }
};

module.exports = offersService;