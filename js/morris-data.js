$(function() {

   
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Norte',
            a: 100,
            b: 90,
            c: 10
        }, {
            y: 'Sul',
            a: 35,
            b: 25,
            c: 75
        }, {
            y: 'Nordeste',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: 'Sudeste',
            a: 45,
            b: 65,
            c: 35
        }, {
            y: 'Centro-Oeste',
            a: 50,
            b: 40,
            c: 60
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Carga Horária Cumprida', 'Taxa de Aprovação', 'Taxa de Reprovação'],
        hideHover: 'auto',
        resize: true
    });

});
