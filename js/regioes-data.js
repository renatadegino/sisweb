// formato

// var nome_da_regiao = [{
//             y: 'nome_da_serie',
//             a: carga_horaria_*200_dividida_por_8,
//             b: taxa_reprovacao,
//             c: taxa_aprovacao
//         }

$(function() {
  
var sudeste = [{
            y: '1º ano',
            a: 117.5,
            b: 2.7,
            c: 96.5
        }, {
            y: '2º ano',
            a: 117.5,
            b: 5.4,
            c: 94.1
        }, {
            y: '3º ano',
            a: 117.5,
            b: 8.5,
            c: 91
        }, {
            y: '4º ano',
            a: 117.5,
            b: 4.5,
            c: 95
        }, {
            y: '5º ano',
            a: 117.5,
            b: 6,
            c: 93.4
        }, {
            y: '6º ano',
            a: 122.5,
            b: 11.1,
            c: 86.6
        }, {
            y: '7º ano',
            a: 125,
            b: 10.3,
            c: 87.6
        }, {
            y: '8º ano',
            a: 125,
            b: 9.2,
            c: 88.1
        }, {
            y: '9º ano',
            a: 125,
            b: 11.3,
            c: 85.7
        }];

var nordeste = [{
            y: '1º ano',
            a: 102.5,
            b: 4.8,
            c: 94
        }, {
            y: '2º ano',
            a: 105,
            b: 25,
            c: 86.1
        }, {
            y: '3º ano',
            a: 105,
            b: 40,
            c: 81
        }, {
            y: '4º ano',
            a: 105,
            b: 65,
            c: 84.8
        }, {
            y: '5º ano',
            a: 105,
            b: 40,
            c: 84.9
        }, {
            y: '6º ano',
            a: 110,
            b: 40,
            c: 70.5
        }, {
            y: '7º ano',
            a: 110,
            b: 40,
            c: 76.7
        }, {
            y: '8º ano',
            a: 110,
            b: 40,
            c: 80.8
        }, {
            y: '9º ano',
            a: 110,
            b: 40,
            c: 83.4
        }];

var centrooeste = [{
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
        }];

var sul = [{
            y: '1º ano',
            a: 22,
            b: 4.8,
            c: 2.7
        }, {
            y: '2º ano',
            a: 3,
            b: 25,
            c: 75
        }, {
            y: '3º ano',
            a: 21,
            b: 40,
            c: 60
        }, {
            y: '4º ano',
            a: 66,
            b: 65,
            c: 35
        }, {
            y: '5º ano',
            a: 55,
            b: 40,
            c: 60
        }, {
            y: '6º ano',
            a: 33,
            b: 40,
            c: 60
        }, {
            y: '7º ano',
            a: 57,
            b: 40,
            c: 60
        }, {
            y: '8º ano',
            a: 12,
            b: 40,
            c: 60
        }, {
            y: '9º ano',
            a: 44,
            b: 40,
            c: 60
        }];

var norte = [{
            y: '1º ano',
            a: 22,
            b: 4.8,
            c: 2.7
        }, {
            y: '2º ano',
            a: 3,
            b: 25,
            c: 75
        }, {
            y: '3º ano',
            a: 21,
            b: 40,
            c: 60
        }, {
            y: '4º ano',
            a: 66,
            b: 65,
            c: 35
        }, {
            y: '5º ano',
            a: 55,
            b: 40,
            c: 60
        }, {
            y: '6º ano',
            a: 33,
            b: 40,
            c: 60
        }, {
            y: '7º ano',
            a: 57,
            b: 40,
            c: 60
        }, {
            y: '8º ano',
            a: 12,
            b: 40,
            c: 60
        }, {
            y: '9º ano',
            a: 44,
            b: 40,
            c: 60
        }];

//------------------------------------------
//-----------------SUDESTE------------------
//------------------------------------------


//-----CH x AP x REP

    Morris.Bar({
        element: 'sudeste-bar-chart',
        data: sudeste,
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Carga Horária Cumprida (% no ano)', 'Taxa de Reprovação (% no ano)', 'Taxa de Aprovação (% no ano)'],
        hideHover: 'auto',
        resize: true
    });

//-----Sudeste CH+AP x Nordeste CH+AP
//----- "a"+"c"

    Morris.Bar({
        element: 'sudestenordeste-bar-chart',
        data: [{
            y: '1º ano',
            a: sudeste[0].a,
            b: sudeste[0].c,
            c: nordeste[0].a,
            d: nordeste[0].c
        }, {
            y: '2º ano',
            a: sudeste[1].a,
            b: sudeste[1].c,
            c: nordeste[1].a,
            d: nordeste[1].c
            
        }, {
            y: '3º ano',
            a: sudeste[2].a,
            b: sudeste[2].c,
            c: nordeste[2].a,
            d: nordeste[2].c
            
        }, {
            y: '4º ano',
            a: sudeste[3].a,
            b: sudeste[3].c,
            c: nordeste[3].a,
            d: nordeste[3].c
            
        }, {
            y: '5º ano',
            a: sudeste[4].a,
            b: sudeste[4].c,
            c: nordeste[4].a,
            d: nordeste[4].c
            
        }, {
            y: '6º ano',
            a: sudeste[5].a,
            b: sudeste[5].c,
            c: nordeste[5].a,
            d: nordeste[5].c
            
        }, {
            y: '7º ano',
            a: sudeste[6].a,
            b: sudeste[6].c,
            c: nordeste[6].a,
            d: nordeste[6].c
            
        }, {
            y: '8º ano',
            a: sudeste[7].a,
            b: sudeste[7].c,
            c: nordeste[7].a,
            d: nordeste[7].c
            
        }, {
            y: '9º ano',
            a: sudeste[8].a,
            b: sudeste[8].c,
            c: nordeste[8].a,
            d: nordeste[8].c
            
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c', 'd'],
        labels: ['Sudeste - Carga Horária Cumprida (% no ano)', ' Sudeste - Taxa de Aprovação (% no ano)', ' Nordeste - Carga Horária Cumprida (horas no ano)', 'Nordeste - Taxa de Aprovação (% no ano)'],
        barColors: ['#efad4d', '#efad4d', '#66669a', '#66669a' ],
        hideHover: 'auto',
        resize: true
    });

//-----Sudeste CH+AP Localidade Rural x Urbana
//----- "a"+"c"

    Morris.Bar({
        element: 'sudestelocalidade-bar-chart',
        data: [{
            y: 'Rural',
            a: 117.5,
            b: 88.9,
           
        }, {
            y: 'Urbana',
            a: 120,
            b: 81.8,
            
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Sudeste - Carga Horária Cumprida (% no ano)', ' Sudeste - Taxa de Aprovação (% no ano)', ' Nordeste - Carga Horária Cumprida (horas no ano)', 'Nordeste - Taxa de Aprovação (% no ano)'],
        barColors: ['#0b1730', '#66999a'],
        hideHover: 'auto',
        resize: true
    });

});
