const nodemailer = require('nodemailer');

describe('Validar envio do e-mail', () => {
  test('Verificar se o e-mail é enviado com sucesso', async () => {
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
      to: 'recipient@example.com',
      subject: 'assunto do email de teste',
      text: 'corpo do email de teste'
    });

    expect(info).toBeDefined();
    expect(info.response).toContain('250 2.0.0 OK');
  });
});

const nodemailer1 = require('nodemailer');

describe('Validar falha no envio do e-mail', () => {
  test('Verificar se o envio do e-mail é falhado se um destinatário não for defnido', async () => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'clara.official.no.reply@gmail.com',
        pass: 'lmbqctmtlnmsmijp'
      }
    });

    await expect(transporter.sendMail({
      from: 'clara no reply <clara.official.no.reply@gmail.com>',
      to: '', // Empty recipient
      subject: 'assunto do email de teste',
      text: 'corpo do email de teste'
    })).rejects.toThrow('No recipients defined');
  });
});