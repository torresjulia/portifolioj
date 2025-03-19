export default interface Tecnologia {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  destaque: boolean;
}

//Se eu quiser criar uma instância de Tecnologia (que tem seus atributos obrigatórios) e eu ainda não tiver todos os atributos, posso fazer da seguinte forma:
// const t: Partial<Tecnologia> = {
//   id: 1,
//   nome: "Angular",
//   descricao: "Angular",
//   destaque: true,
// };
