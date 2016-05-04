$(function() {

   
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Norte',
            a: 860,
            b: 11.8,
            c: 82.9
        }, {
            y: 'Sul',
            a: 840,
            b: 10.4,
            c: 88.1
        }, {
            y: 'Nordeste',
            a: 860,
            b: 12.9,
            c: 81.9
        }, {
            y: 'Sudeste',
            a: 960,
            b: 7.9,
            c: 90.6
        }, {
            y: 'Centro-Oeste',
            a: 900,
            b: 9.3,
            c: 88.2
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Carga Horária Cumprida (horas no ano)', 'Taxa de Reprovação (% no ano)' , 'Taxa de Aprovação (% no ano)'],
        hideHover: 'auto',
        resize: true
    });

});
