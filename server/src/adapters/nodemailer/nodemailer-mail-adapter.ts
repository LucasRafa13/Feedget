import { MailAdapter, SendMailData } from "../mail-adapter"
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6cfdecc5ad3af5",
    pass: "9a3849b40d878c"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMain({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Luicas <batatal@rocketseat.team>",
      subject,
      html: body
    })
  }
}
