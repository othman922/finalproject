const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_GMAIL_EMAIL,
      pass: process.env.ADMIN_GMAIL_PASSWORD,
    },
  });

  const sendEmailNotification = async (reservation) => {
    try {
      const mailOptions = {
        from: process.env.ADMIN_GMAIL_EMAIL,
        to: process.env.ADMIN_GMAIL_EMAIL, 
        subject: "New Reservation",
        text: `A new reservation has been made.\n\nDetails:\nDate: ${reservation.date}\nPeople: ${reservation.people}\nTime: ${reservation.time}`,
      };
  
      await transporter.sendMail(mailOptions);
      console.log("Email notification sent to admin");
    } catch (error) {
      console.error("Error sending email notification:", error);
    }
  }; 

module.exports = sendEmailNotification

