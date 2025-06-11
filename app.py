from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

love_messages = [
    "Você foi a melhor coisa que já me aconteceu.",
    "Te amo mais que tudo ❤️",
    "Com você não importa o lugar nem o dia, sempre vou estar feliz",
    "Qual meu momento favorito com você? SIM.",
    "Você é o meu lar, meu amor, minha paz.",
    "Você é meu sonho realizado",
    "Eu amo seu jeito.",
    "Pra sempre minha mamolada",
    "Você é o que da cor e brilho para minha vida (ainda)",
    "Quer namorar comigo? **gif do ronaldinho**",
    "Nunca esqueça o quanto eu amo você",
    "Eu amo namorar você",
    "Te amo meu Babynho ❤️",
    "Obrigado por ser minha namorada.",
    "Te amo até sempre",
    "Você faz os meus dias felizes",
    "Eu amo os rolês aleatórios com você",
    "Amo até todas as 'demências' com você",
    "Você é meu porto seguro",
    "Eu amo quando você sorri pra mim quando me enxerga de longe",
    "Eu amo suas curvas 😏",
    "Eu amo assistir serie com você (com você dormindo).",
    "Eu amo pizza de calabresa com você kkk",
    "Eu amo seu abraço",
    "Eu amo quando você é a conchinha de fora (ei, ninguem pode saber disso)",
    "Amo a forma como você cuida de mim",
    "Eu amo amar voce ❤️",
    "Eu amo nossas loucuras",
    "Sou apaixonado por você",
    "Amo os 'filhos' que voce me deu",
    "A melhor coisa da vida é dormir e acordar ao seu lado",   
    "Eu te amo tanto..",
    "Mataria e morreria por você",
    "Você é muito mais do que sonhei",
    "Você é minha principessa",
    "Meu sonho é poder acordar ao seu lado todos os dias da vida",
    "Se eu pudesse voltar no tempo a unica coisa que faria diferente, seria ter te conhecido antes",
    "Se eu estiver do seu lado agora, me de um beijinho",
    "Se eu estiver do seu lado agora me de um abraço",
    "Você é a melhor companhia",
    "To amando você",
    "Você é meu maior presente",
    "A vida so tem graça pq nela tem você",
    "Você é o grande amor da minha vida",
    "Você é o sonho que virou realidade",
    "Você é quem faz meu coração bater mais rapido, mas tambem que faz desacelerar",
    "Quando estou com você esqueço todo o resto",
    "Eu Te amo mil milhoes, em cada multiverso por que você me tornou digno, e se você precisar de mim, eu estarei lá",
    "Te amo hoje, te amo amanhã, te amarei pra sempre",
    "Tudo ao seu lado vale a pena",
    "A vida é tao feliz com voce do meu lado",
    "Eu amo a forma como você cuida de mim",
    "Você é a minha paixão",
    "Você me mostrou como amar de verdade",
    "Minha maior ambição na vida é te ter ao meu lado até o fim dela",
    "Te amarei de janeiro a janeiro, verao a verao e no inverno principalmente no inverno (você é muito quentinha)",
    "Lembra do dia que ",
    "Sou louco por você",
    "Amo sua boca, seu cheiro",
    "Te amarei até nossos cabelos ficarem grisalhos e estivermos sentados no nosso balanço na arvore de folhas caindo no outono",
    "Se eu estiver do seu lado agora me da um beijinho (pq sim, eu sou fofinho)",
    "Amo a sua bu... busca por conquistas",
    "Amo quando faz cafuné em mim",
    "Prometo cuidar de você enquanto viver",
    "Eu amo seu sorriso",
    "Eu amo seu cabelo (seja cacheado ou liso, ou até trança), voce fica linda de todas as formas",
    "Eu amo o seu amor",
    "'Eu nao to preparado pra viver mais um dia ser te chamar de minha namorada' , lembra desse susto? kk Te amo baby"

]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/nova_carta")
def nova_carta():
    return jsonify({"mensagem": random.choice(love_messages)})

if __name__ == "__main__":
    app.run(debug=True)
