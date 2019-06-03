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
        uri: `https://us20.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`,
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString(‘base64’)}`,
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
