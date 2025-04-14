import express from 'express';
import { isSellerAuth, loginSeller, logoutSeller } from '../controllers/seller.controller.js';

const sellerRouter = express.Router();

sellerRouter.post('/login',loginSeller )
sellerRouter.get('/is-auth',isSellerAuth, isSellerAuth)
sellerRouter.get('/logout', logoutSeller)

export default sellerRouter;