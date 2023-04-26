import { Router, Request, Response } from "express";
import Order from "../models/Order";
import { Document, Error } from "mongoose";
const route = Router();

route.get('/', (_req: Request, res: Response) => {
  Order.find({}).then((order) => {
    res.json(order);
  }).catch((err) => {
    res.json(err);
  })
})

route.post('/', (req: Request, res: Response) => {
  let order = new Order(req.body);

  order.save().then((order) => {
    res.json(`added ${order._id} succesfully`);
  }).catch((err) => {
    res.json(err);
  });

})

export default route;