import { Router  } from "express";
const router: Router = Router();

router.get('/', (req, res) =>{
    res.send('hello word');
})

export default router;