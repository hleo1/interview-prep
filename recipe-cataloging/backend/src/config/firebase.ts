import admin from 'firebase-admin';
import path from 'path';

const serviceAccount = require(path.join(__dirname, '../../reddit-ranker-firebase-adminsdk-fbsvc-379324e0f0.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();
export default admin;

