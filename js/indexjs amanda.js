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
		{ label: "Norte",  data: 4.3},
		{ label: "Nordeste",  data: 4.3},
		{ label: "Sul",  data: 4.2},
		{ label: "Sudeste",  data: 4.8},
		{ label: "Centro-Oeste",  data: 4.5}

		];

		var dataChLocalidade = [
		{ label: "Urbana",  data: 4.42},
		{ label: "Rural",  data: 1.82},

		];

		var dataChRedeEnsino = [
		{ label: "Estadual",  data: 4.56},
		{ label: "Federal",  data: 4.9},
		{ label: "Municipal",  data: 4.32},
		{ label: "Privado",  data: 4.48},

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

});

	// A custom label formatter used by several of the plots

	function labelFormatter(label, series) {
		return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
	}

	//

	function setCode(lines) {
		$("#code").text(lines.join("\n"));
	}


});

	