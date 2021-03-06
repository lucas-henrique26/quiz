import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a doença de chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro')
    ]),
    new QuestaoModel(202, 'O que a palavra legend significa em português?', [
        RespostaModel.errada('Legenda'),
        RespostaModel.errada('História'),
        RespostaModel.errada('Legendário'),
        RespostaModel.certa('Lenda')
    ]),
    new QuestaoModel(203, 'Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?', [
        RespostaModel.errada('Saci'),
        RespostaModel.errada('Lobisomem'),
        RespostaModel.errada('Curupira'),
        RespostaModel.certa('Caipora')
    ]),
    new QuestaoModel(204, 'Quanto tempo a luz do Sol demora para chegar à Terra?', [
        RespostaModel.errada('12 minutos'),
        RespostaModel.errada('1 dia'),
        RespostaModel.errada('5 horas'),
        RespostaModel.certa('8 minutos')
    ]),
    new QuestaoModel(205, 'Qual a montanha mais alta do Brasil?', [
        RespostaModel.errada('Pico da Bandeira'),
        RespostaModel.errada('Monte Roraima'),
        RespostaModel.errada('Pico Paraná'),
        RespostaModel.certa('Pico da Neblina')
    ]),
    new QuestaoModel(206, 'Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?', [
        RespostaModel.errada('A Astronomia'),
        RespostaModel.errada('A Filosofia'),
        RespostaModel.errada('A Biologia'),
        RespostaModel.certa('A Mitologia')
    ]),
    new QuestaoModel(207, 'Qual o maior animal terrestre??', [
        RespostaModel.errada('Girafa'),
        RespostaModel.errada('Dinossauro'),
        RespostaModel.errada('Tubarão Branco'),
        RespostaModel.certa('Elefante Africano')
    ]),
    new QuestaoModel(208, 'As pessoas de qual tipo sanguíneo são consideradas doadores universais?', [
        RespostaModel.errada('Tipo AB'),
        RespostaModel.errada('Tipo A'),
        RespostaModel.errada('Tipo B'),
        RespostaModel.certa('Tipo O')
    ]),
    new QuestaoModel(209, 'Que substância é absorvida pelas plantas e expirada por todos os seres vivos?', [
        RespostaModel.errada('O oxigênio'),
        RespostaModel.errada('O nitrogênio'),
        RespostaModel.errada('O dióxido de ferro'),
        RespostaModel.certa('O dióxido de carbono')
    ]),
    new QuestaoModel(210, 'Quem inventou a lâmpada?', [
        RespostaModel.errada('Graham Bell'),
        RespostaModel.errada('Steve Jobs'),
        RespostaModel.errada('Santos Dumont'),
        RespostaModel.certa('Thomas Edison')
    ])
]

export default questoes