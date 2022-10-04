const { info } = require('console');
const nodemailer = require('nodemailer');

//계정정보선언(선생님거임 내걸로 하려면 https://mailtrap.io/ 회원가입 후 입력하기)
const email = {
  "host": "smtp.mailtrap.io",
  "port": 2525,
  "secure": false,
  "auth" : {
    "user":"82e975b2fa894a",
    "pass":"ce751d6a98d2e7"
  }
};

const send = async (option) => {
    //계정정보
    nodemailer.createTransport(email).sendMail(option, (error, infor) => {
        if(error){
            console.log("error");
        }else {
            console.log(info);
            return info.response;
        }
    });
};

let emailData = {
    from: 'hbg199@naver.com',
    to: 'hbg199@naver.com',
    subject: '테스트메일',
    text: 'nodejs 한시간만에 끝내는 수업 수강중'
}

send(emailData);