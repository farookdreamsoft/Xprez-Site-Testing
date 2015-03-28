(function($)
{
	if (typeof charts == 'undefined') 
		return;

	charts.chart_ordered_bars = 
	{
		// chart data
		data: null,

		// will hold the chart object
		plot: null,

		// chart options
		options:
		{
			bars: {
				show:true,
				barWidth: 0.2,
				fill:1
			},
			grid: {
				show: true,
			    aboveData: false,
			    color: "#3f3f3f" ,
			    labelMargin: 5,
			    axisMargin: 0, 
			    borderWidth: 0,
			    borderColor:null,
			    minBorderMargin: 5 ,
			    clickable: true, 
			    hoverable: true,
			    autoHighlight: false,
			    mouseActiveRadius: 20,
			    backgroundColor : { }
			},
	        series: {
	        	grow: {active:false}
	        },
	        legend: { position: "ne", backgroundColor: null, backgroundOpacity: 0 },
	        colors: [],
	        tooltip: true,
			tooltipOpts: {
				content: "%s : %y.0",
				shifts: {
					x: -30,
					y: -50
				},
				defaultTheme: false
			}
		},
		
		placeholder: "#chart_ordered_bars",

		// initialize
		init: function()
		{
			// apply styling
			charts.utility.applyStyle(this);
			
			//some data
			var d1 = [];
		    for (var i = 0; i <= 30; i += 1)
		        d1.push([1,5],[2,8],[3,18],[4,14],[5,10],[6,22],[7,18],[8,27],[9,16],[10,8],[11,28],[12,18],[13,18],[14,14],[15,10],[16,22],[17,18],[18,27],[19,16],[20,18]);
		 
		    var d2 = [];
		    for (var i = 0; i <= 30; i += 1)
		        d2.push([1,2],[2,12],[3,10],[4,4],[5,15],[6,17],[7,8],[8,7],[9,19],[10,5],[11,2],[12,12],[13,10],[14,4],[15,15],[16,17],[17,8],[18,7],[19,19],[20,5]);
		 
		    var ds = new Array();
		 
		    ds.push({
		     	label: "Income",
		        data:d1,
		        bars: {order: 1}
		    });
		    ds.push({
		    	label: "Expense",
		        data:d2,
		        bars: {order: 2}
		    });
			this.data = ds;

			this.plot = $.plot($(this.placeholder), this.data, this.options);
		}
	};
		
	$(window).on('load', function(){
		setTimeout(function(){
			charts.chart_ordered_bars.init();
		}, 100);
	});
	
})(jQuery);