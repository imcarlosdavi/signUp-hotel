let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

//Class do Hotel
class Hotel{
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id,nome,categoria,endereco,telefone){
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

//Class da Reserva
class Reserva{
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor(id,idhotel,responsavel,diaentrada,diasaida){
        this.Id = id
        this.IdHotel = idhotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaentrada
        this.DiaSaida = diasaida
    }
}

//Cadastro do Hotel
function cadastrarHotel(){
    let nome = prompt("Qual o nome do Hotel?")
    let categoria = prompt("Coloque a categoria do Hotel")
    let endereco = prompt("Qual o endereço do Hotel?")
    let telefone = parseInt(prompt("Coloque o número de telefone."))
    let hotel = new Hotel(idHotel,nome,categoria,endereco,telefone)
    idHotel++
    hoteis.push(hotel)
}

//Cadastro da Reserva
function cadastrarReserva(){
    let idHotel
    let existe = false
    do{
        idHotel = parseInt(prompt("Insira um Id do Hotel"))
        for(let i = 0; i < hoteis.length;i++){
            if(idHotel == hoteis[i].Id){
                i = hoteis.length
                existe = true
            }else if(i == hoteis.length - 1){
                console.log("Id do Hotel não cadastrado")
            }
        }
    } while(!existe)

    let responsavel = prompt("Insira um responsável,")
    let diaDeEntrada = parseInt(prompt("Coloque o Dia de entrada."))
    let diaDeSaida

    do{
        diaDeSaida= parseInt(prompt("Coloque o Dia de saída."))
        if(diaDeSaida < diaDeEntrada){
            console.log("O Dia de saída deve ser maior que o Dia de Entrada")
        }
    } while(diaDeSaida < diaDeEntrada)

    let reserva = new Reserva(idReserva,idHotel,responsavel,diaDeEntrada,diaDeSaida)
    idReserva++
    reservas.push(reserva)
}


//Procurar reserva pelo hotel
function procurarReservasPeloHotel(idHotel){
    reservas.forEach(reserva=>{
        if(idHotel == reserva.IdHotel){
            let i = idHotel - 1
            console.log("Hotel", hoteis[i].Nome)
            console.log("Responsável", reservas[i].Responsavel)
            console.log("Dia de Entrada", reservas[i].DiaEntrada)
            console.log("Dia de Saída", reservas[i].DiaSaida)
        }
    })
}


//Procurar o hotel pela reserva
function procurarHotelPelaReserva(reservaId){
    let idHotel = reservas[reservaId - 1].idHotel
    console.log("Hotel", hoteis[idHotel - 1].Nome)
    console.log("Endereço", hoteis[idHotel - 1].Endereco)
    console.log("Dia de Entrada", reservas[reservaId - 1].DiaEntrada)
    console.log("Dia de saída", reservas[reservaId - 1].DiaSaida)
}


//Procurar reserva pelo nome do responsável
function procurarReservaPeloNome(nome){
   for(let i = 0; i < reservas.length; i++){
    if(nome == reservas[i].Responsavel){
        console.log("Id da reserva"+reservas[i].Id)
        console.log("Hotel"+ hoteis[(reservas[i].IdHotel) - 1].Nome)
    }
   }
}


//Procurar hotéis pela categoria
function procurarHotelPelaCategoria(categoria){
    hoteisProcurados = []
    for(i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].Categoria){
           hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados;
}


//Para atualizar o número de telefone
function atualizarTelefone(idHotel,telefone){
    hoteis[idHotel - 1].Telefone = telefone
    console.log("Número de Telefone atualizado")
}


//Todo o fluxo do programa de Hotel.
let continuar = true
do{
    let opcao = prompt("Escolha uma opção: \n1. cadastrar hotel \n2. cadastrar reserva \n3. Procurar reserva pelo hotel \n4. Procuara hotel pela reserva"+
    "\n5. Procurar reserva pelo nome \n6. Procurar hotel pela categoria \n7. Atualizar telefone \n8. Encerrar")

    switch(opcao){
        case "1":
            cadastrarHotel()
            break;
        case "2":
            cadastrarReserva()
            break;
        case "3":
            procurarReservasPeloHotel(prompt("Digite o Id do Hotel."))
            break;
        case "4":
            procurarHotelPelaReserva(prompt("Digite o Id da Reserva."))
            break;
        case "5":
            procurarReservaPeloNome(prompt("Digite o nome do responsável pela reserva."))
            break;
        case "6":
            let hoteisProcurados = procurarHotelPelaCategoria(prompt("Digite a categoria que deseja procurar"))
            console.log(hoteisProcurados)
            break;
        case "7":
            let idHotel = parseInt(prompt("Digite o Id do hotel que deseja atualizar."))
            let telefone = parseInt(prompt("Digite o novo Número de telefone."))
            atualizarTelefone(idHotel,telefone)
            break;
        case "8":
            console.log("Programa encerrado.")
            continuar = false
            break;
        default:
            console.log("Cadastro inválido!")
        break
    }

}while(continuar)