import express from "express";
import { AddressController } from "../Controller/address.controller";

const addressRouter = express.Router();

addressRouter.get('/fetch',AddressController.getAddress)
addressRouter.post('/create',AddressController.createAddress)
addressRouter.put('/edit',AddressController.createAddress)
addressRouter.post('/delete',AddressController.deleteAddress)

export default addressRouter;