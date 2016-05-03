$(function() {
  


    Morris.Bar({
        element: 'sudestexregiao-bar-chart',
        data: [{
            y: '1º ano',
            a: 55,
            b: 4.8,
            c: 2.7
        }, {
            y: '2º ano',
            a: 35,
            b: 25,
            c: 75
        }, {
            y: '3º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '4º ano',
            a: 45,
            b: 65,
            c: 35
        }, {
            y: '5º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '6º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '7º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '8º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '9º ano',
            a: 50,
            b: 40,
            c: 60
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Carga Horária Cumprida (h)', 'Taxa de Aprovação (%)', 'Taxa de Reprovação (%)'],
        hideHover: 'auto',
        resize: true
    });


    Morris.Bar({
        element: 'sudeste-bar-chart',
        data: [{
            y: '1º ano',
            a: 55,
            b: 4.8,
            c: 2.7
        }, {
            y: '2º ano',
            a: 35,
            b: 25,
            c: 75
        }, {
            y: '3º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '4º ano',
            a: 45,
            b: 65,
            c: 35
        }, {
            y: '5º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '6º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '7º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '8º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '9º ano',
            a: 50,
            b: 40,
            c: 60
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Carga Horária Cumprida (h)', 'Taxa de Aprovação (%)', 'Taxa de Reprovação (%)'],
        hideHover: 'auto',
        resize: true
    });

     Morris.Bar({
        element: 'outro-bar-chart',
        data: [{
            y: '1º ano',
            a: 55,
            b: 4.8,
            c: 2.7
        }, {
            y: '2º ano',
            a: 35,
            b: 25,
            c: 75
        }, {
            y: '3º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '4º ano',
            a: 45,
            b: 65,
            c: 35
        }, {
            y: '5º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '6º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '7º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '8º ano',
            a: 50,
            b: 40,
            c: 60
        }, {
            y: '9º ano',
            a: 50,
            b: 40,
            c: 60
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Carga Horária Cumprida (h)', 'Taxa de Aprovação (%)', 'Taxa de Reprovação (%)'],
        hideHover: 'auto',
        resize: true
    });
});
