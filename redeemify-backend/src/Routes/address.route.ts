import express from "express";
import { AddressController } from "../Controller/address.controller";



const addressRouter = express.Router();

addressRouter.get('/:addressId',AddressController.getAddress)
addressRouter.get('/:userId/:addressId',AddressController.getAddress)
addressRouter.post('/create',AddressController.createAddress)
addressRouter.patch('/edit',AddressController.createAddress)


export default addressRouter;