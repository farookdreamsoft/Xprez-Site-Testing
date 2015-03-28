// JavaScript Document
function setSelectedIndex(s, v) {
	for ( var i = 0; i < s.options.length; i++ ) {		
		if ( s.options[i].text == v ) {				
			s.options[i].selected = true;
		return;
		}
	}
}					

function dupSelected(md) 
{ 
    var recslen =  document.forms[0].length; 
    var checkboxes="" 
    for(i=1;i<recslen;i++) { 
        if(document.forms[0].elements[i].checked==true) 
        checkboxes+= " "+document.forms[0].elements[i].name 
    } 
    
    if(checkboxes.length>0) { 
        var con=confirm("Are you sure you want to make duplicate"+md); 
        if(con) { 
           document.forms[0].action="duplicate.php?recsno="+checkboxes+"&mode="+md; 
           document.forms[0].submit() 
        } 
    } else { 
        alert("No record is selected.") 
    	} 
} 

function deleteSelected(md) 
{ 
    var recslen =  document.forms[0].length; 
    var checkboxes="" 
    for(i=1;i<recslen;i++) 
    { 
        if(document.forms[0].elements[i].checked==true) 
        checkboxes+= " "+document.forms[0].elements[i].name 
    } 
    
    if(checkboxes.length>0) 
    { 
        var con=confirm("Are you sure you want to delete"); 
        if(con) 
        { 
           //alert("No record is selected."+checkboxes+md)
		   document.forms[0].action="delete.php?recsno="+checkboxes+"&mode="+md; 
           document.forms[0].submit() 
			
        } 
    } 
    else 
    { 
        alert("No record is selected.") 
    } 
} 

function changeSelected(md,id) 
{ 
    var recslen =  document.forms[0].length; 
    var checkboxes="" 
    for(i=1;i<recslen;i++) { 
        if(document.forms[0].elements[i].checked==true) 
        checkboxes+= " "+document.forms[0].elements[i].name 
    } 
    
    if(checkboxes.length>0) { 
        var con=confirm("Are you sure you want to change category"); 
        if(con) { 
           document.forms[0].action="changes.php?recsno="+checkboxes+"&mode="+md+"&id="+id; 
           document.forms[0].submit() 
        } 
    } else { 
        alert("No record is selected.") 
    	} 
} 

function ExportAll(md){
	document.forms[0].action="export_report.php?mode="+md;
	document.forms[0].submit();
}

function selectall() 
{ 
	var recslen = document.forms[0].length; 
	if(document.forms[0].topcheckbox.checked==true){ 
    	for(i=1;i<recslen;i++) { 
			document.forms[0].elements[i].checked=true; 
			//alert(document.forms[0].elements[i].checked);
        } 
    } else { 
        for(i=1;i<recslen;i++) 
	        document.forms[0].elements[i].checked=false; 
    	} 
} 
function delRecord(i) 
{ 
    var con=confirm("Are you sure you want to delete"); 
    if(con) 
	{ 
           document.forms[0].action="delete.php?recsno="+i+"&mode=sv"; 
           document.forms[0].submit();			
	}  
}
