//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Mon Sep 21 15:22:45 2020
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action()
{
	web.url(
		{
			name : 'WebTours', 
			url : 'http://localhost:1080/WebTours/', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : '', 
			snapshot : 't1.inf', 
			mode : 'HTML'
		}
	);

	lr.thinkTime(20);
	web.submitForm(
		{
			name : 'login.pl', 
			snapshot : 't2.inf', 
			itemData :  [
				{name : 'username', value : 'jojo'},
				{name : 'password', value : 'bean'},
				{name : 'login.x', value : '68'},
				{name : 'login.y', value : '6'}
			]
		}
	);

	web.image(
		{
			name : 'Search Flights Button', 
			alt : 'Search Flights Button', 
			snapshot : 't3.inf'
		}
	);

	web.submitForm(
		{
			name : 'reservations.pl', 
			snapshot : 't4.inf', 
			itemData :  [
				{name : 'depart', value : 'Denver'},
				{name : 'departDate', value : '09/22/2020'},
				{name : 'arrive', value : 'London'},
				{name : 'returnDate', value : '09/23/2020'},
				{name : 'numPassengers', value : '1'},
				{name : 'roundtrip', value : '<OFF>'},
				{name : 'seatPref', value : 'None'},
				{name : 'seatType', value : 'Coach'},
				{name : 'findFlights.x', value : '39'},
				{name : 'findFlights.y', value : '10'}
			]
		}
	);

	web.setSocketsOption('SSL_VERSION', 'AUTO');

	web.submitForm(
		{
			name : 'reservations.pl_2', 
			snapshot : 't5.inf', 
			itemData :  [
				{name : 'outboundFlight', value : '020;338;09/22/2020'},
				{name : 'reserveFlights.x', value : '78'},
				{name : 'reserveFlights.y', value : '9'}
			]
		}
	);

	lr.thinkTime(28);
	web.submitForm(
		{
			name : 'reservations.pl_3', 
			snapshot : 't6.inf', 
			itemData :  [
				{name : 'firstName', value : 'Jojo'},
				{name : 'lastName', value : 'Bean'},
				{name : 'address1', value : 'agagag'},
				{name : 'address2', value : '54561'},
				{name : 'pass1', value : 'Jojo Bean'},
				{name : 'creditCard', value : '123454567'},
				{name : 'expDate', value : '21/25'},
				{name : 'saveCC', value : '<OFF>'},
				{name : 'buyFlights.x', value : '41'},
				{name : 'buyFlights.y', value : '10'}
			]
		}
	);

	lr.thinkTime(5);
	web.image(
		{
			name : 'SignOff Button', 
			alt : 'SignOff Button', 
			snapshot : 't7.inf'
		}
	);

	return 0;
}

