import joi from 'joi';

export const newCuidadoSchema = joi.object({
    name:joi.string().trim().min(2).max(255).required(),
    description:joi.string().trim().max(1000).allow(null, '').optional(),
    frequency:joi.string().trim().min(3).max(100).required(),
});
