function traduzirCodigo(codigo) {
    // dias da semana
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    const diaSemana = parseInt(codigo[0]);
    const periodo = codigo[1];
    const horario = parseInt(codigo.slice(2));

    //horários
    const horariosManha = ['7:30', '8:20', '9:30', '11:10'];
    const horariosTarde = ['13:30', '14:20', '15:30', '17:10'];
    if (horario < 1 || horario > 4) {
        return 'Horário inválido';
    }

    const diaSemanaTraduzido = diasSemana[diaSemana];
    const periodoTraduzido = (periodo === 'M') ? 'manhã' : 'tarde';
    const horarioInicio = (periodo === 'M') ? horariosManha[horario - 1] : horariosTarde[horario - 1];
    const horarioFim = (periodo === 'M') ? horariosManha[horario] : horariosTarde[horario];

    //tradução
    return `${diaSemanaTraduzido} de ${periodoTraduzido}, ${horarioInicio} às ${horarioFim}`;
}

document.getElementById('traduzir').addEventListener('click', function () {
    traduzirCodigo();
});
