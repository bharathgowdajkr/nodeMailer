
const nodemailer = require('nodemailer');

exports.eMail = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let mailTransporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'from@gmail.com', //from address (your gmail account)
                    pass: 'figgjjhionjhupo'//app password of your gmail account
                }
            });

            let mailDetails = {
                from: 'from@gmail.com', //from address (your gmail account)
                to: 'to@gmail.com', //to address 
                subject: 'This mail from #KR',
                html: `<div>Hi...,</div> <br> <div>Your document has been completed and attached below.</div>`,
                attachments: [
                    {
                        filename: `Test attachment`,
                        path: `https://matfuvit.github.io/UVIT/predavanja/literatura/TutorialsPoint%20node.js.pdf`,
                        contentType: 'application/pdf'
                    },
                ],

            };

            mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log('Error Occurs' + err);
                    return reject({
                        mesage: err.message
                    });
                } else {

                    console.log(`Email sent successfully to ${data.accepted[0]} `);

                    resolve({
                        mesage: `Email sent successfully to ${data.accepted[0]} `
                    })

                }
            })
        } catch (e) {
            console.log("error sending", e);
            reject({
                mesage: e.message
            })
        }
    })
}
