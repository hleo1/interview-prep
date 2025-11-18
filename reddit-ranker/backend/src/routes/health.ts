import { Router, Request, Response } from 'express';
import { admin } from '../config/firebase';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    // Test Firebase connection by attempting to access Firestore
    const db = admin.firestore();
    
    // Perform a simple operation to verify connection
    await db.collection('health_check').limit(1).get();
    
    res.status(200).json({
      status: 'healthy',
      firebase: 'connected',
      timestamp: new Date().toISOString(),
      projectId: admin.app().options.projectId
    });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(503).json({
      status: 'unhealthy',
      firebase: 'disconnected',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    });
  }
});

export default router;

