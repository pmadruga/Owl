import { GOOGLE_CLOUD_KEY } from '../../../ENVIRONMENT';

export const getURL = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_CLOUD_KEY}`;

export const getTextRequestBody = image => ({
  method: 'POST',
  body: JSON.stringify({
    requests: [
      {
        image: {
          content: image
        },
        features: [
          {
            type: 'TEXT_DETECTION'
          }
        ]
      }
    ]
  })
});
