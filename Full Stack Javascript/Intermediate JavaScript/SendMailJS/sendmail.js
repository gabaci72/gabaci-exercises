const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025,
    secure: false,
});

transporter.sendMail({
    from: '"Test Kullanıcı" <test@example.com>',
    to: "serianonim@gmail.com",
    subject: "Merhaba!",
    text: "Bu bir test e-postasıdır.",
}, (err, info) => {
    if (err) {
        console.error("Hata:", err);
    } else {
        console.log("Başarılı:", info);
    }
});