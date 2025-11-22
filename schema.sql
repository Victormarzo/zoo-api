CREATE TABLE IF NOT EXISTS "animais" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    birth_date DATE,
    species VARCHAR(100) NOT NULL,
    habitat VARCHAR(100),
    country_origin VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS "cuidados" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    frequency VARCHAR(50) NOT NULL
);

INSERT INTO "animais" (name, description, birth_date, species, habitat, country_origin) VALUES
('Leo', 'Leão macho adulto', '2018-05-15', 'Leão', 'Savana', 'África do Sul'),
('Ana', 'Elefante fêmea', '2015-08-20', 'Elefante Africano', 'Savana', 'Quênia');

INSERT INTO "cuidados" (name, description, frequency) VALUES
('Alimentação', 'Fornecimento de carne fresca', 'diária'),
('Exame Veterinário', 'Check-up geral de saúde', 'mensal');