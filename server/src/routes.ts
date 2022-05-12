import express from 'express';
import { SubmitFeedbackService } from './services/submitFeedbackService';
import { PrismaFeedbackRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    try {
    const prismaFeedbacksRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submiteFeedbackService = new SubmitFeedbackService(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    );

    await submiteFeedbackService.execute({
        type,
        comment,
        screenshot,
    })
    

    return res.status(201).send();
}catch (err) {
    console.error(err);

    return res.status(500).send();
}
});