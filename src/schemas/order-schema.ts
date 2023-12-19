import Joi from 'joi';

const AdditionalSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
});

const ProductSchema = Joi.object({
  id: Joi.number().positive().required(),
  image: Joi.string(),
  name: Joi.string(),
  observation: Joi.string(),
  price: Joi.number(),
  quantity: Joi.number().required(),
});
const OrderProductSchema = Joi.object({
  additional: Joi.array().items(AdditionalSchema).optional().default([]),
  product: Joi.array().items(ProductSchema).required(),
});

const PaymentSchema = Joi.array().items(Joi.string()).required();

export const OrderSchema = Joi.object({
  name: Joi.string().required(),
  cartProducts: Joi.array().items(OrderProductSchema).required(),
  paymentMethod: PaymentSchema,
});
