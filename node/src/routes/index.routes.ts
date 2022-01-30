import User from "../entities/User";
import { Request, Response, Router } from "express";
import { getRepository, Repository } from "typeorm";

const routes = Router();

const names = [
  "Milena",
  "Leandro",
  "Jeferson",
  "Marcos",
  "Leila",
  "Joise",
  "Danilo",
  "Mateus",
  "Larissa",
  "Camila",
  "Fernanda",
];

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Rota de cadastro de Usuário
 */
routes.get("/", async (request: Request, response: Response) => {
  const data = { name: names[getRandomIntInclusive(0, names.length - 1)] };

  let ormRepository: Repository<User>; // váriavel do tipo repositório de User

  ormRepository = getRepository(User); // conecta com a tabela users do banco de dados

  const person = ormRepository.create(data); // Cria uma instancia de User

  await ormRepository.save(person); // Salva o novo user no banco de dados

  const people = await ormRepository.find();

  const title = "<h1>Full Cycle Rocks!</h1>";
  const list = `
    <ul>
      ${people.map((p) => `<li>${p.name}</li>`).join("")}
    </ul>
  `;

  return response.send(title + list); // retorna o usuário cadastrado
});

export default routes;
