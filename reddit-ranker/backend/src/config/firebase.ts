import admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json';

const initializeFirebase = () => {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      projectId: 'reddit-ranker'
    });
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    throw error;
  }
};

export { admin, initializeFirebase };

