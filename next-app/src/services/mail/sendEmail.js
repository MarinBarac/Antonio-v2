import mailServiceConfiguration from '@config/mail/service.json';

const sendEmail = async ({ url, mailData }) => {
    const nodeMailerData = { ...mailData, mailServiceConfiguration };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(nodeMailerData),
    });
    if (response.status !== 200) {
      return false;
    }
  
    return true;
  };
  
  export default sendEmail;