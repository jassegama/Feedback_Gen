import { MailAdapter } from "../adapters/mailAdapter";
import { FeedbacksReposity } from "../repositories/feedbacksRepository";

interface SubmitFeedbackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService {
    constructor(
        private feedbackRepository: FeedbacksReposity,
        private mailAdapter: MailAdapter,
        ){}
        
    async execute(request: SubmitFeedbackServiceRequest) {
        const { type, comment, screenshot } = request;
    
    await this.feedbackRepository.create({
        type,
        comment,
        screenshot
    })

    await this.mailAdapter.SendMail({
        subject: 'New Feedback',
        body: [
        `<div style="font-famlily: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Type of Feedback: ${type}</p>`,
        `<p>Comment: ${comment}</p>`,
        `</div>`
        ].join('\n')
    })

    }
}