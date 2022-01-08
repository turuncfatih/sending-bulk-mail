const nodemailer = require("nodemailer");

class MailService {
    constructor() {
        this.email = 'Your E-mail'
        this.password = 'Your Password'
        this.subject = 'Test Netflix '
        this.text = ' Test Text'
        this.enTemplate = `Html Mail Template `
        this.mailGonders = 1;   // 1 tr Template tr Mail  // 2 en template en Mail
        this.mailTR = ["test@gmail.com", "test1@gmail.com", "test2@gmail.com"]
        this.enMail = ["test3@gmail.com", "test4@gmail.com", "test5@gmail.com"]
    }
    async mailService(template, mail) {
        let mailss = "test@gmail.com"

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: this.email,
                pass: this.password
            }
        });
        let info = transporter.sendMail({
            from: `${this.email}`,
            to: mail,
            subject: this.subject,
            text: this.text,
            html: template,
        }).then((res) => {
            console.log(res.accepted + " " + res.response)
            transporter.close();
        }).catch((error) => {
            console.log(error)
            transporter.close();
        });

    }
    async mailGonder() {
        if (this.mailGonders === 1) {
            this.mailTR.map(async value => {
                await this.mailService(this.trTemplate, value);
            })
        } else if (this.mailGonders === 2) {
            this.enMail.map(async value => {
                await this.mailService(this.enTemplate, value);
            })
        }
    }
}

const system = new MailService()
const main = system.mailGonder();


//1 tr   //2 En


