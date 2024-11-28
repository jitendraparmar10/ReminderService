const { Notificationticket } = require('../models/index');
const { Op } = require('sequelize');


class TicketRepository {
    
    async getAll() {
        try {
            const tickets = await Notificationticket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async create(data){
        try {
            const ticket = await Notificationticket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async get(filter){
        try {
            const tickets = await Notificationticket.findAll({
                where:{
                    status: filter.status,
                    notificationTime:{
                        [Op.lte]:new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async update(ticketId,data){
        try {
            const ticket = await Notificationticket.findByPk(ticketId);
            if(data.status)
                ticket.status = data.status;
            await ticket.save();            
            return ticket;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TicketRepository;