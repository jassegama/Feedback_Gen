export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;

}

export interface FeedbacksReposity {
    create: (data: FeedbackCreateData) => Promise<void>;
}