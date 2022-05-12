import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8f8c8626cd07b2",
      pass: "567272a6f70218"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async SendMail({ subject, body } : SendMailData) {
        await transport.sendMail({
            from: 'JG Solutions <support@jgsolutions.com>',
            to: 'Jasse Gama <jassegama@gmail.com>',
            subject,
            html: body,
        })
    };
}