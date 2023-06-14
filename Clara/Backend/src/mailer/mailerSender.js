const nodemailer = require('nodemailer');

async function main(to, code) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'clara.official.no.reply@gmail.com',
        pass: 'lmbqctmtlnmsmijp'
      }
    });
    
    

    const info = await transporter.sendMail({
      from: 'clara no reply <clara.official.no.reply@gmail.com>',
      to: to,
      subject: 'Verificação de email',
      html:`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          /* Estilos CSS */
          .container {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 20px;
            width: 240px;
          }
          .image {
            width: 100%;
          }
          
          .title {
            color: #4AB3D3;
            font-size: 18px;
            margin-top: 20px;
          }
          
          .code {
            background-color: #e6e6e6;
            border-radius: 8px;
            padding: 10px;
            margin-top: 10px;
            font-size: 16px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 class="title">Confirmação de email</h1>
          <h4>código de 6 dígitos</h4>
          <div class="code">`+code+`</div>
        </div>
      </body>
      </html>
      `,
    });

  } catch (error) {
  }
}

module.exports = { main };
