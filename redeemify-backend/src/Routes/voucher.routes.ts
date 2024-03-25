import express from 'express';
import { VoucherController } from '../Controller/voucher.controller';

const voucherRouter = express.Router();

voucherRouter
.get('/', VoucherController.getVouchers)
.post('/create', VoucherController.createVouchers)
.post('/delete', VoucherController.deleteVouchers)
.post('/map', VoucherController.mapVouchers)
.put('/map', VoucherController.mapVouchers)

export default voucherRouter;