import express, { Router, Request, Response } from 'express'

const router = express.Router()

router.route('/')
    .get(async (req: Request, res: Response) => {
        res.json({
            username: "testing"
        })
    })

export default router;