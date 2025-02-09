import { Router } from 'express';
import { MatchController } from '../controllers/match.controller';  // Fixed path
import { authenticateUser } from '../middleware/auth';  // Now pointing to correct location

const router = Router();  // Fixed syntax
const matchController = new MatchController();

router.get('/nearby', authenticateUser, matchController.getNearbyMatches);
router.post('/:matchId/join', authenticateUser, matchController.joinMatch);

export default router;