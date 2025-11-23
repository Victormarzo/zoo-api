import { query } from '../config/database.js';
import { newCuidadoSchema } from '../schemas/cuidado-schema.js';

export async function listarCuidados(req,res){
    try {
        const result = await query(`
            SELECT * FROM cuidados;
        `);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao listar cuidados:',error);
        return res.status(500).json({
            message:'Erro interno do servidor ao listar cuidados.',
            error:error.message
        });
    }
}

export async function adicionarCuidado(req, res) {
    const {error, value} = newCuidadoSchema.validate(req.body, {abortEarly:false});
        if (error){
            const errors = error.details.map(detail => detail.message);
            return res.status(400).json({
                message:'Falha na validação dos dados do cuidado',
                errors: errors
            });
        }
    
        const {name, description, frequency} = value;
        try {
            const sql = `
                INSERT INTO cuidados (name, description, frequency)
                VALUES ($1, $2, $3)
                RETURNING *;`;
            const values = [name, description, frequency];
            const result = await query(sql, values);
            return res.status(201).json({
                message: 'Cuidado cadastrado com sucesso!',
                cuidado: result.rows[0]});
    
        } catch (error) {
            console.error('Erro ao cadastrar cuidado:',error);
            return res.status(500).json({
                message:'Erro interno do servidor ao cadastrar cuidado.',
                error:error.message
            });
        }
    
}