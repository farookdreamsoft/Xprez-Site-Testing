(function($)
{
	if (typeof charts == 'undefined') 
		return;

	charts.chart_lines_fill_nopoints_2 = 
	{
		// chart data
		data: 
		{
			d1: []
		},

		// will hold the chart object
		plot: null,

		// chart options
		options: 
		{
			colors: [ primaryColor ],
			grid: {
				color: "#dedede",
			    borderWidth: 1,
			    borderColor: "transparent",
			    clickable: true, 
			    hoverable: true
			},
	        series: {
	        	grow: {active:false},
	            lines: {
            		show: true,
            		fill: false,
            		lineWidth: 5,
            		steps: false,
            		color: "#C21C1C"
            	},
	            points: {show:false}
	        },
	        legend: { position: "nw", color:"#FFFF00", backgroundColor: null, backgroundOpacity: 0 },
	        yaxis: { 
	        	ticks:3, 
	        	tickSize: 40,
	        	tickFormatter: function(val, axis) { return val + "k";} 
	    	},
	        xaxis: { ticks:4, tickDecimals: 0, tickColor: 'transparent' },
	        shadowSize:0,
	        tooltip: true,
			tooltipOpts: {
				content: "%s : %y.0",
				shifts: {
					x: -20,
					y: -50
				},
				defaultTheme: false
			}
		},

		placeholder: "#chart_lines_fill_nopoints_2",
		
		// initialize
		init: function()
		{	
			// generate some data
			//this.data.d1 = [[1, 3+charts.utility.randNum()], [2, 6+charts.utility.randNum()], [3, 30+charts.utility.randNum()], [4, 110+charts.utility.randNum()],[5, 80+charts.utility.randNum()],[6, 18+charts.utility.randNum()],[7, 50+charts.utility.randNum()],[8, 15+charts.utility.randNum()],[9, 18+charts.utility.randNum()],[10, 60+charts.utility.randNum()],[11, 110+charts.utility.randNum()],[12, 27+charts.utility.randNum()],[13, 30+charts.utility.randNum()],[14, 33+charts.utility.randNum()],[15, 24+charts.utility.randNum()],[16, 80+charts.utility.randNum()],[17, 30+charts.utility.randNum()],[18, 33+charts.utility.randNum()],[19, 36+charts.utility.randNum()],[20, 39+charts.utility.randNum()],[21, 42+charts.utility.randNum()],[22, 70+charts.utility.randNum()],[23, 36+charts.utility.randNum()],[24, 39+charts.utility.randNum()],[25, 42+charts.utility.randNum()],[26, 45+charts.utility.randNum()],[27,60+charts.utility.randNum()],[28, 51+charts.utility.randNum()],[29, 55+charts.utility.randNum()], [30, 100+charts.utility.randNum()]];
			this.data.d1 = [[1,25],[2,12],[3,82],[4,10],[5,45],[6,97],[7,28],[8,75],[9,40],[10,124],[11,82],[12,10],[13,45],[14,97],[15,28],[16,75],[17,40],[18,124]];
			this.data.d2 = [[1,15],[2,18],[3,52],[4,20],[5,35],[6,19],[7,85],[8,57],[9,30],[10,43],[11,62],[12,90],[13,65],[14,27],[15,132],[16,52],[17,73],[18,114]];
			this.data.d3 = [[1,35],[2,122],[3,72],[4,30],[5,15],[6,64],[7,38],[8,107],[9,154],[10,224],[11,172],[12,237],[13,125],[14,177],[15,112],[16,159],[17,150],[18,144]];
			
			// make chart
			this.plot = $.plot(
				this.placeholder, 
				[
				 {
         			label: "Gross Revenue", 
         			data: this.data.d1
         		 },
				 {
         			label: "Net Revenue", 
         			data: this.data.d2
         		 },
				 {
         			label: "Profit", 
         			data: this.data.d3
         		 }				
				], 
				
				this.options);
		}
	};

	$(window).on('load', function(){
		setTimeout(function(){
			charts.chart_lines_fill_nopoints_2.init();
		}, 100);
	});
	
})(jQuery);