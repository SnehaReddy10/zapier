import nodemailer from 'nodemailer';
import { EMAIL, PASSWORD } from '../config';

export function sendEmail({
  receiver,
  subject,
  body,
}: {
  receiver: string;
  subject: string;
  body: string;
}) {
  console.log('Started email', { receiver, subject, body });

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  let mailOptions = {
    from: EMAIL,
    to: receiver,
    subject: subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (err: any, info: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log('email sent', info.response);
    }
  });
}
