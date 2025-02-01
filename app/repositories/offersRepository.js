const database = require("./database");

const offersRepository = {
    createOffer: async (productId, buyerId, price) => {
        let offer = null;
        try {
            await database.connect();
            offer = await database.query(
                "INSERT INTO offers (productId, sellerId, buyerId, price, status) " +
                "SELECT ?, sellerId, ?, ?, 'pending' FROM products WHERE id = ?",
                [productId, buyerId, price, productId]
            );
            await database.disconnect();
        } catch (e) {
            await database.disconnect();
            console.log(e); // ERROR IN DATABASE OR SQL
        }
        return offer;
    },
    getOffersByBuyer: async (buyerId) => {
        let offers = null;
        try {
            await database.connect();
            offers = await database.query("SELECT * FROM offers WHERE buyerId = ?", [buyerId]);
            await database.disconnect();
        } catch (e) {
            await database.disconnect();
            console.log(e); // ERROR IN DATABASE OR SQL
        }
        return offers;
    },
    getOffersBySeller: async (sellerId) => {
        let offers = null;
        try {
            await database.connect();
            offers = await database.query("SELECT * FROM offers WHERE sellerId = ?", [sellerId]);
            await database.disconnect();
        } catch (e) {
            await database.disconnect();
            console.log(e); // ERROR IN DATABASE OR SQL
        }
        return offers;
    },
    acceptOffer: async (id, sellerId) => {
        let response = null;
        try {
            await database.connect();
            await database.query("UPDATE offers SET status = 'accepted' WHERE id = ? AND sellerId = ?", [id, sellerId]);
            await database.query("INSERT INTO transactions (productId, sellerId, buyerId, price) SELECT productId, sellerId, buyerId, price FROM offers WHERE id = ?", [id]);
            response = { success: true };
            await database.disconnect();
        } catch (e) {
            await database.disconnect();
            console.log(e); // ERROR IN DATABASE OR SQL
        }
        return response;
    },
    rejectOffer: async (id, sellerId) => {
        let response = null;
        try {
            await database.connect();
            await database.query("UPDATE offers SET status = 'rejected' WHERE id = ? AND sellerId = ?", [id, sellerId]);
            response = { success: true };
            await database.disconnect();
        } catch (e) {
            await database.disconnect();
            console.log(e); // ERROR IN DATABASE OR SQL
        }
        return response;
    }
};

module.exports = offersRepository;
