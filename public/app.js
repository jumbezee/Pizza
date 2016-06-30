
function something()
{

		var x = window.localStorage.getItem('bbb');

		x = x * 1 + 1; 

		window.localStorage.setItem('bbb', x);

		alert('Item in your cart: ' + cart_get_number_of_items());
}


function add_to_cart(id)
{
	var key = 'product_' + id;
	 
	var x = window.localStorage.getItem(key)
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);

	
}


function cart_get_number_of_items()
{
	var cnt = 0;
	for(var i=0, len=localStorage.length; i<len; i++) 
	{
    	var key = localStorage.key(i);
    	var value = localStorage[key];
    	if(key.indexOf('product_') == 0)
    	{
    		cnt = cnt + value * 1;
   		}
	}
	return cnt;
}

function cart_get_orders()
{
	var orders = '';
	for(var i=0, len=localStorage.length; i<len; i++) 
	{
    	var key = localStorage.key(i);
    	var value = localStorage[key];
    	if(key.indexOf('product_') == 0)
    	{
    		orders = orders + key + '=' + value + ',';
    	}
	}
	return orders;
}
