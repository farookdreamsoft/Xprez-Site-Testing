$.validator.setDefaults(
{
	//submitHandler: function() { alert("submitted!"); },
	showErrors: function(map, list) 
	{
		this.currentElements.parents('label:first, div:first').find('.has-error').remove();
		this.currentElements.parents('.form-group:first').removeClass('has-error');
		
		$.each(list, function(index, error) 
		{
			var ee = $(error.element);
			var eep = ee.parents('label:first').length ? ee.parents('label:first') : ee.parents('div:first');
			
			ee.parents('.form-group:first').addClass('has-error');
			eep.find('.has-error').remove();
			eep.append('<p class="has-error help-block">' + error.message + '</p>');
		});
		//refreshScrollers();
	}
});

$(function()
{
	// validate signup form on keyup and submit
	$("#validateSubmitForm").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			sup_name: {
				required: true,
				minlength: 2
			},
			cus_name: {
				required: true,
				minlength: 2
			},
			category_name: {
				required: true,
				minlength: 2
			},
			item_name: {
				required: true,
				minlength: 2
			},
			item_cost_price: {
				required: true,
				minlength: 1
			},
			item_selling_price: {
				required: true,
				minlength: 1
			},
			item_catid: {
				required: true,
				minlength: 1
			},
			item_qty: {
				required: true,
				minlength: 1
			},
			item_supid: {
				required: true,
				minlength: 1
			},
			ac_name : {
				required: true,
				minlength: 2
			},
			usr_name: {
				required: true,
				minlength: 2
			},
			usr_uname: {
				required: true,
				minlength: 5
			},
			usr_password: {
				required: true,
				minlength: 5
			},
			usr_type: {
				required: true,
				minlength: 1
			},
			usr_npassword: {
				required: true,
				minlength: 5
			},
			usr_cpassword: {
				required: true,
				minlength: 5,
				equalTo: "#usr_npassword"
			},
			
			edit_name: {
				required: true,
				minlength: 5
			},
			edit_password: {
				required: true,
				minlength: 5
			},
			
			
			/*username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},*/
			agree: "required"
		},
		messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",
			
			sup_name: {
				required: "Please enter a Supplier Name",
				minlength: "Supplier Name must consist of at least 2 characters"
			},
			cus_name: {
				required: "Please enter a Customer Name",
				minlength: "Customer Name no must be at least 2 characters long"
			},
			category_name: {
				required: "Please enter a Category Name",
				minlength: "Category Name must consist of at least 2 characters"
			},
			item_name: {
				required: "Please enter a Item Name",
				minlength: "Item Name must be at least 2 characters long"
			},
			item_cost_price: {
				required: "Please enter a Cost Price",
				minlength: "Cost Price must consist of at least 1 characters"
			},
			item_selling_price: {
				required: "Please enter a Selling Price",
				minlength: "Selling Price must be at least 1 characters long"
			},
			item_catid: {
				required: "Select a Category Name",
				minlength: "Category Name must be select 1 option"
			},
			item_qty: {
				required: "Please enter a Quantity",
				minlength: "Quantity must be at least 1 characters long"
			},
			item_supid: {
				required: "Select a Supplier Name",
				minlength: "Supplier Name must be select 1 option"
			},
			ac_name: {
				required: "Select a Account Name",
				minlength: "Account Name must be select 2 option"
			},
			usr_name: {
				required: "Please enter a Name",
				minlength: "Name must consist of at least 2 characters"
			},
			usr_uname: {
				required: "Please enter a User Name",
				minlength: "User Name must consist of at least 5 characters"
			},
			usr_password: {
				required: "Please provide a password",
				minlength: "Password must be at least 5 characters long"
			},
			usr_type: {
				required: "Select a User Type",
				minlength: "User Type must be at least 5 characters long"
			},
			usr_npassword: {
				required: "Please provide a New Password",
				minlength: "Your New Password must be at least 5 characters long"
			},
			usr_cpassword: {
				required: "Please provide a Confirm Password",
				minlength: "Your Confirm Password must be at least 5 characters long",
				equalTo: "Please enter the same Confirm Password as above"
			},
			
			edit_name: {
				required: "Please enter a User Name",
				minlength: "User Name must consist of at least 5 characters"
			},
			edit_password: {
				required: "Please provide a Password",
				minlength: "Your password must be at least 5 characters long"
			},
			
			/*username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 2 characters"
			},
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long"
			},
			confirm_password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			},
			email: "Please enter a valid email address",
			*/agree: "Please accept our policy"
		}
	});

	// propose username by combining first- and lastname
	$("#username").focus(function() {
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		if(firstname && lastname && !this.value) {
			this.value = firstname + "." + lastname;
		}
	});

	//code to hide topic selection, disable for demo
	var newsletter = $("#newsletter");
	// newsletter topics are optional, hide at first
	var inital = newsletter.is(":checked");
	var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
	var topicInputs = topics.find("input").attr("disabled", !inital);
	// show when newsletter is checked
	newsletter.click(function() {
		topics[this.checked ? "removeClass" : "addClass"]("gray");
		topicInputs.attr("disabled", !this.checked);
	});
});