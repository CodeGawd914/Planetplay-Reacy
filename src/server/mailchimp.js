import request from 'request'
const LIST_ID = process.env.REACT_APP_LIST_ID
const API_KEY = process.env.REACT_APP_MAILCHIMP_API

export async function subscribe({ email }) {
  const data = {
    email_address: email,
    status: 'subscribed',
  };
await new Promise((resolve, reject) => {
    request.post(
      {
        uri: '',
        headers: {
          Accept: 'application/json',
          Authorization: '',
        },
        json: true,
        body: data,
      },
      (err, response, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      },
    );
  });
}
