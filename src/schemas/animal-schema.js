import joi from 'joi';

export const newAnimalSchema = joi.object({
    name:joi.string().trim().min(2).max(255).required(),
    species:joi.string().trim().min(3).max(100).required(),
    description:joi.string().trim().max(1000).allow(null, '').optional(),
    birth_date: joi.date().iso().allow(null).optional(),
    habitat:joi.string().trim().min(3).max(100).allow(null, '').optional(),
    country_origin:joi.string().trim().max(100).allow(null, '').optional()
})
