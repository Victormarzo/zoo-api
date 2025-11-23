import { query } from '../config/database.js';
import { newAnimalSchema } from '../schemas/animal-schema.js';

export async function listarAnimais(req,res){
    try {
        const result = await query(`
            SELECT * FROM animais;
        `);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao listar animais:',error);
        return res.status(500).json({
            message:'Erro interno do servidor ao listar animais.',
            error:error.message
        });
    }
}

export async function adicionarAnimal(req,res){
    const {error, value} = newAnimalSchema.validate(req.body, {abortEarly:false});
    
    if (error){
        const errors = error.details.map(detail => detail.message);
        return res.status(400).json({
            message:'Falha na validação dos dados do animal',
            errors: errors
        });
    }

    const {name, description, birth_date, species, habitat, country_origin} = value

    const formatDateForDB = (date) => {
        if (date instanceof Date) {
            return date.toISOString().split('T')[0]; 
        }
        return date;
    };
    
    try {
        const sql = `
            INSERT INTO animais (name, description, birth_date, species, habitat, country_origin)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;`;
        const values = [name, description, formatDateForDB(birth_date), species, habitat, country_origin];
        const result = await query(sql, values);
        return res.status(201).json({
            message: 'Animal cadastrado com sucesso!',
            animal: result.rows[0]});

    } catch (error) {
        console.error('Erro ao cadastrar animal:',error);
        return res.status(500).json({
            message:'Erro interno do servidor ao cadastrar animal.',
            error:error.message
        }) ;
    }
}