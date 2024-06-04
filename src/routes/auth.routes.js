import { Router } from "express";
import {login, dashboard, fill, users, listworker, obtworker} from '../controllers/auth.controller.js'

const router = Router()


router.post('/worker', listworker)

router.get('/recuworker', obtworker)

router.get('/dashboard', dashboard)

router.get('/users', users)

router.post('/login', login)

router.post('/fill', fill)

export default router