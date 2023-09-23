const { Router } = require('express');
const router = Router();

const { HostessUser } = require('../controllers/User/HostessUser');
const { DeletePost } = require('../controllers/User/DeletePost'); 
const { OnlyAllPost } = require('../controllers/User/OnlyAllPost'); 





router.get('/hostess/:idHostess', HostessUser)
router.get('/posthostess', OnlyAllPost)


router.delete('/post/:postId', DeletePost)




module.exports = router