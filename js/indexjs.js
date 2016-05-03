// A $( document ).ready() block.
$( document ).ready(function() {
   $(function() {

		// Example Data

		// var data = [
		// 	{ label: "Series1",  data: 10},
		// 	{ label: "Series2",  data: 30},
		// 	{ label: "Series3",  data: 90},
		// 	{ label: "Series4",  data: 70},
		// 	{ label: "Series5",  data: 80},
		// 	{ label: "Series6",  data: 110}
		// ];

		// var data = [
		// 	{ label: "Series1",  data: [[1,10]]},
		// 	{ label: "Series2",  data: [[1,30]]},
		// 	{ label: "Series3",  data: [[1,90]]},
		// 	{ label: "Series4",  data: [[1,70]]},
		// 	{ label: "Series5",  data: [[1,80]]},
		// 	{ label: "Series6",  data: [[1,0]]}
		// ];

		var dataChRegiao = [
		{ label: "Norte",  data: 4.3, color: '#347ab8'},
		{ label: "Nordeste",  data: 4.3, color: '#66669a'},
		{ label: "Sul",  data: 4.2, color: '#d9544f'},
		{ label: "Sudeste",  data: 4.8, color: '#efad4d'},
		{ label: "Centro-Oeste",  data: 4.5, color: '#5db75d'}

		];

		var dataChLocalidade = [
		{ label: "Urbana",  data: 4.42, color: '#483D8B'},
		{ label: "Rural",  data: 4.32, color: '#16a085'}
		];

		var dataChRedeEnsino = [
		{ label: "Estadual",  data: 4.56, color: '#A52A2A'},
		{ label: "Federal",  data: 4.9, color: '#2F4F4F'},
		{ label: "Municipal",  data: 4.32, color: '#f39c12'},
		{ label: "Privado",  data: 4.48, color: '#34495e'}
		];


		// Randomly Generated Data

		// var data = [],
		// 	series = Math.floor(Math.random() * 6) + 3;

		// for (var i = 0; i < series; i++) {
		// 	data[i] = {
		// 		label: "Series" + (i + 1),
		// 		data: Math.floor(Math.random() * 100) + 1
		// 	}
		// }


	//-------------------------------------------
	var placeholder2 = $("#placeholder2");

	$("#example-11").click(function() {

		placeholder2.unbind();

		$.plot(placeholder2, dataChRegiao, {
			series: {
				pie: { 
					show: true
				}
			},
			legend: {
				show: false
			}
		});

		setCode([
			"$.plot('#placeholder2', data, {",
			"    series: {",
				"        pie: {",
				"            show: true",
				"        }",
				"    },",
				"    legend: {",
				"        show: false",
				"    }",
				"});"
		]);
	});

	$("#example-21").click(function() {

		placeholder2.unbind();

		$.plot(placeholder2, dataChLocalidade, {
			series: {
				pie: { 
					show: true
				}
			},
			legend: {
				show: false
			}
		});

		setCode([
			"$.plot('#placeholder2', data, {",
				"    series: {",
				"        pie: {",
				"            show: true",
				"        }",
				"    },",
				"    legend: {",
				"        show: false",
				"    }",
				"});"
		]);
	});

	$("#example-31").click(function() {

		placeholder2.unbind();

		$.plot(placeholder2, dataChRedeEnsino, {
			series: {
				pie: { 
					show: true
				}
			},
			legend: {
				show: false
			}
		});

		setCode([
			"$.plot('#placeholder2', data, {",
				"    series: {",
				"        pie: {",
				"            show: true",
				"        }",
				"    },",
				"    legend: {",
				"        show: false",
				"    }",
				"});"
		]);
	});

		// Show the initial default chart

		$("#example-11").click();

	//--------------------------------

	var dataTxRepRegiao = [
		{ label: "Norte AP",  data: 82.9, color: '#347ab8'},
		{ label: "Norte REP",  data: 11.8, color: '#2980b9'},

		{ label: "Nordeste AP",  data: 81.9, color: '#66669a'},
		{ label: "Nordeste REP",  data: 12.9, color: '#9370DB'},

		{ label: "Sul AP",  data: 90.6, color: '#d9544f'},
		{ label: "Sul REP",  data: 7.9, color: '#F08080'},

		{ label: "Sudeste AP",  data: 88.1, color: '#efad4d'},
		{ label: "Sudeste REP",  data: 10.4, color: '#e67e22'},

		{ label: "Centro-Oeste AP",  data: 88.2, color: '#5db75d'},
		{ label: "Centro-Oeste REP",  data: 9.3, color: '#3CB371'}

	];

		var dataTxRepLocalidade = [
		{ label: "Urbana AP",  data: 86.54, color: '#6A5ACD'},
		{ label: "Urbana REP",  data: 10.34, color: '#483D8B'},

		{ label: "Rural AP",  data: 85.52, color:'#1abc9c'},
		{ label: "Rural REP",  data: 10.8, color: '#16a085'},

		];
		
		
		var dataTxRepRedeEnsino = [
		{ label: "Estadual AP",  data: 84.46, color: '#A52A2A'},
		{ label: "Estadual REP",  data: 12.4, color: '#e74c3c'},

		{ label: "Federal AP",  data: 91.26, color: '#2F4F4F'},
		{ label: "Federal REP",  data: 8.7, color: '#5F9EA0'},

		{ label: "Municipal AP",  data: 86.16, color: '#f1c40f'},
		{ label: "Municipal REP",  data: 10.66, color: '#f39c12'},

		{ label: "Privado AP",  data: 96.52, color: '#34495e'},
		{ label: "Privado REP",  data: 3.22, color: '#34495e'},
		];

		// Randomly Generated Data

		// var data = [],
		// 	series = Math.floor(Math.random() * 6) + 3;

		// for (var i = 0; i < series; i++) {
		// 	data[i] = {
		// 		label: "Series" + (i + 1),
		// 		data: Math.floor(Math.random() * 100) + 1
		// 	}
		// }


	//-------------------------------------------
	var placeholder = $("#placeholder");

	$("#example-1").click(function() {

		placeholder.unbind();

		$.plot(placeholder, dataTxRepRegiao, {
			series: {
				pie: { 
					show: true
				}
			},
			legend: {
				show: false
			}
		});

		setCode([
			"$.plot('#placeholder', data, {",
			"    series: {",
				"        pie: {",
				"            show: true",
				"        }",
				"    },",
				"    legend: {",
				"        show: false",
				"    }",
				"});"
		]);
	});

	$("#example-2").click(function() {

		placeholder.unbind();

		$.plot(placeholder, dataTxRepLocalidade, {
			series: {
				pie: { 
					show: true
				}
			},
			legend: {
				show: false
			}
		});

		setCode([
			"$.plot('#placeholder', data, {",
				"    series: {",
				"        pie: {",
				"            show: true",
				"        }",
				"    },",
				"    legend: {",
				"        show: false",
				"    }",
				"});"
		]);
	});

	$("#example-3").click(function() {

		placeholder.unbind();

		$.plot(placeholder, dataTxRepRedeEnsino, {
			series: {
				pie: { 
					show: true
				}
			},
			legend: {
				show: false
			}
		});

		setCode([
			"$.plot('#placeholder', data, {",
				"    series: {",
				"        pie: {",
				"            show: true",
				"        }",
				"    },",
				"    legend: {",
				"        show: false",
				"    }",
				"});"
		]);
	});
	

		// Show the initial default chart

		$("#example-1").click();


	});


	function setCode(lines) {
		$("#code").text(lines.join("\n"));
	}


});

	