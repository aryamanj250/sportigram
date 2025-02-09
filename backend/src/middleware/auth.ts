import { Request, Response, NextFunction } from 'express';

export const authenticateUser = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {  // Explicitly specify void return type
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            res.status(401).json({ error: 'Authentication required' });
            return;  // Exit function after sending response
        }

        // Token verification logic
        // const decoded = verifyToken(token);
        // req.user = decoded;

        next();  // Proceed to next middleware
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};