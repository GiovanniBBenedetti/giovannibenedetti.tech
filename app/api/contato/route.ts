import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { nome, email, menssagem } = await req.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAILER_AUTH_USER,
      pass: process.env.MAILER_AUTH_PASS,
    },
  });


  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: sans-serif; background-color: #000; color: #fff; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #09090b; border: 1px solid #18181b; border-radius: 16px; overflow: hidden; }
        .header { background-color: #000; padding: 40px 20px; text-align: center; border-bottom: 1px solid #18181b; }
        .header h1 { margin: 0; font-size: 24px; letter-spacing: -1px; color: #fff; }
        .header span { color: #3b82f6; }
        .content { padding: 30px; line-height: 1.6; color: #a1a1aa; }
        .info-box { background-color: #18181b; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #3b82f6; }
        .info-box p { margin: 5px 0; color: #fff; font-weight: bold; }
        .info-box span { color: #71717a; font-weight: normal; }
        .message-content { background-color: #000; padding: 20px; border-radius: 8px; border: 1px solid #27272a; color: #e4e4e7; }
        .footer { padding: 20px; text-align: center; font-size: 12px; color: #52525b; background-color: #000; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>G<span>B</span> • Portfólio</h1>
        </div>
        <div class="content">
          <h2 style="color: #fff; margin-top: 0;">Novo Contato Recebido</h2>
          <p>Você recebeu uma nova mensagem através do formulário do seu portfólio.</p>
          
          <div class="info-box">
            <p>De: <span>${nome}</span></p>
            <p>E-mail: <span>${email}</span></p>
          </div>

          <div class="message-content">
            <strong style="display: block; margin-bottom: 10px; color: #3b82f6;">Mensagem:</strong>
            ${menssagem.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} Giovanni Benedetti • Sistema de Notificação Automática
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transport.sendMail({
      from: `"${nome}" <${process.env.MAILER_AUTH_USER}>`,
      to: process.env.MAILER_EMAIL_PESSOAL,  
      subject: `Novo contato de ${nome}`,
      html: htmlBody,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}