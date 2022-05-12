import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksReposity } from "../feedbacksRepository";

export class PrismaFeedbackRepository implements FeedbacksReposity {
    async create({type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
        
    };
}