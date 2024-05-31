import { Router } from "express";
import {login, dashboard, fill, users} from '../controllers/auth.controller.js'

const router = Router()

router.get('/dashboard', dashboard)

router.get('/users', users)

router.post('/login', login)

router.post('/fill', fill)

export default router