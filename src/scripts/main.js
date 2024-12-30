//IMPORTA A BIBLIOTECA DE ANIMAÇÕES
AOS.init();

//---------------------------------------------------------------------------
//CRIANDO A CONTAGEM REGRESSIVA

//A FUNÇÃO "NEW DATE" ARMAZENA A DATA DO EVENTO BASEADO NOS PARAMETROS DE "MÊS DIA ANO E HORA"
const dataDoEvento = new Date("Jan 12 2025 19:00");
//O GET TIME DA O TEMPO EM TIMESTAMP (UM ESPÉCIE DE CÓDIGOD DAS HORAS)
const timeStampDoEvento = dataDoEvento.getTime();

//A FUNÇÃO SET INTERVAL SE REPETE CONFORME O INTERVALO DADO EM MILISEGUNDOS, NO CASO "1000", OU SEJA 1 SEGUNDO
const contaAsHoras = setInterval(function(){
    //A CADA 1 SEGUNDO A CONST AGORA MUDA, GERANDO UMA NOVA DATA E UM NOVO TIMESTAMP
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    //O TIMESTAMP ATUAL É SUBTRAÍDO DO TIMESTAMP DA DATA DO EVENTO
    const distanciaProEvento = timeStampDoEvento - timeStampAgora;

    //PARA SABER QUANTOS SEGUNTOS FALTAM: DIVIDE POR 1000
    //PARA SABER QUANTOS MINUTOS FALTAM: DIVIDE POR 1000*60
    //PARA SABER QUANTAS HORAS FALTAM: DIVIDE POR 1000*60*60
    //PARA SABER QUANTOS DIAS FALTAM: DIVIDE POR 1000*60*60*24

    const diaEmMs = 1000*60*60*24;
    const horaEmMs = 1000*60*60;
    const minutoEmMs = 1000*60;

    //O "MATH.FLOOR" TIRA O VALOR DAS CASAS DECIMAIS PARA O DIA
    const diasProEvento =  Math.floor(distanciaProEvento / diaEmMs);
    const horasProEvento = Math.floor((distanciaProEvento % diaEmMs)/horaEmMs);
    const minutosProEvento = Math.floor((distanciaProEvento % horaEmMs) / minutoEmMs);
    const segundosProEvento = Math.floor((distanciaProEvento % minutoEmMs) / 1000);

    //ESCREVE ATRAVÉS DA TAG <SPAN> NO HTML. O GETELEMENTBYID SELECIONA A TAG E O INNER TML ADICIONA O CONTEÚDO
    document.getElementById('contador').innerHTML = `começa em ${diasProEvento}d ${horasProEvento}h ${minutosProEvento}min ${segundosProEvento}s`;

    //O IF FUNCIONA PARA QUANDO A DATA JA PASSOU
    if (distanciaProEvento < 0){
        //O CLEARINTERVAL PARA A CONTAGEM
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'ja começou e o link esta expirado'
    }
}, 1000);