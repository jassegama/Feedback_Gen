export interface SendMailData {
    subject:  string;
    body: string;
}

export interface MailAdapter {
    SendMail: (data: SendMailData) => Promise<void>;
}