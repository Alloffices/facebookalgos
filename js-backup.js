



$(window).on('load', function() {
  // Arrays of data points
  // Arrays of data points
  // Arrays of data points
  let zips = [
              '32608', 
              '32832',
              '33403',
              '33026',
              '33496', 
              '33414',
              '33409'
  ];
  let myOrder = [
              'Small Bol',
              'Kids Bol',
              'Thai Bol (Large Bol)',
              'Vegan Bol (Small Bol)', 
              'Baja Bol (Small Bol)',
              'Surf & Turf (Large Bol)',
              'Bottled Water',
              'Large Bol',
              'Craft Soda',
              'Infused Tea',
              'Island Time- Orange Strawberry',
              'San Pellegrino Sparkling Water',
              'Sweet South- Lemonade',
              'Berry Gold',
              'Gatsby',
              'Hawaiian Healer',
              'Immunity Spark Shot',
              'Sweet Melons',
              'Chocolate Chunk Gluten Free Cookie',
              'Snicker Doodle Cookie'
  ];    
  // Empty array that will have all of the selected products
  let pushMyOrder = [];
  let pushMyOrderCheckout = [];
  let pushTotalPrice = [];
  let pushSubmitOrder = [];

  // order/datetime.aspx searches for Location through zipcode
  // order/datetime.aspx searches for Location through zipcode
  // order/datetime.aspx searches for Location through zipcode
  // order/datetime.aspx searches for Location through zipcode
  function findSomething() {
    for (var i=0; i<zips.length;i++) {
      if (zips[i]) {
        // Variable checks DOM for Zipzodes in zips array
        var countsNum = $('body > div:contains("'+zips[i]+'")').length > 0;
        if (countsNum) {
          // Will switch between each zips[i] condition to check which one is true
          switch (zips[i]) {
            case '33496':
              console.log('Boca Raton');
              fbq('track',  'ViewContent',  {
                content_name:  'Boca Raton',}
              ); 
              break;
            case '32608':
              console.log('Gainesville');
              fbq('track',  'ViewContent',  {
                content_name:  'Gainesville'}
              ); 
              break;
            case '32832':
              console.log('Lake Nona');
              fbq('track',  'ViewContent',  {
                content_name:  'Lake Nona'}
              ); 
              break;
            case '33403':
              console.log('Northlake/PGA');
              fbq('track',  'ViewContent',  {
                content_name:  'Northlake/PGA'}
              ); 
              break;
            case '33026':
              console.log('Pembroke Pines');
              fbq('track',  'ViewContent',  {
                content_name:  'Pembroke Pines'}
              ); 
              break;
            case '33414':
              console.log('Wellington');
              fbq('track',  'ViewContent',  {
                content_name:  'Wellington'}
              ); 
              break;
            case '33409':
              console.log('West Palm Beach');
              fbq('track',  'ViewContent',  {
                content_name:  'West Palm Beach'}
              ); 
              break;
            default:
              console.log('The location you are looking for is not in our system');
          }
          console.log("Is there anything else you'd like?");
          // Once a valid zip code is found we break
          break;
        };
      } else {
        // Will alert that the page does not contain company zipcodes
        console.log("Zipcode Does Not Exist - Is there anything else you'd like?");
      }
    }
  }
  // Checks slug to contain = order/datetime.aspx?
  if(window.location.href.indexOf("order/datetime.aspx") > -1) {
    // Executes the main function to search location zips and locations
    findSomething();
  };


  // order/menu.aspx products that will be searched for under (MY PRODUCTS)
  // order/menu.aspx products that will be searched for under (MY PRODUCTS)
  // order/menu.aspx products that will be searched for under (MY PRODUCTS)
  // order/menu.aspx products that will be searched for under (MY PRODUCTS)
  // Function that will check which products have been selected
  function myOrderMenu() {
    for (var j=0;j<myOrder.length;j++) {
      var myOrderList = $('.order-list-container > div:contains("'+myOrder[j]+'")').length > 0;
      console.log(myOrderList);
      if (myOrderList) {
        pushMyOrder.push(myOrder[j]);
        console.log(myOrder[j]);
      }       
    }
    console.log(pushMyOrder);

    fbq('trackCustom',  'Menu', {
      content_name: pushMyOrder
    });
  }
  if(window.location.href.indexOf("order/menu.aspx") > -1) {    
    // Executes the main function to search location zips and locations
    myOrderMenu();
  };


  // Sugges.aspx | Checkout suggestion code - gets the products and value before checkout
  // Suggest.aspx | Checkout suggestion code - gets the products and value before checkout
  // Suggest.aspx | Checkout suggestion code - gets the products and value before checkout
  function myOrderSuggestion() {
    for (var s=0;s<myOrder.length;s++) {
      var myOrderCheckout = $('.order-list-container > div:contains("'+myOrder[s]+'")').length > 0;
      console.log(myOrderCheckout);
      if (myOrderCheckout) {
        pushMyOrderCheckout.push(myOrder[s]);
      };
    };

    // Find the value of the total price of the order
    let numbersNum = $('div#ctl00_cph1_orderList_pnlOrder td:last b').html();
    pushTotalPrice.push(numbersNum);
    
    console.log(pushTotalPrice);
    // Shows order in array in console (Check Browser Console)
    console.log(pushMyOrderCheckout);

    fbq('track', 'AddToCart', {
      value: pushTotalPrice,
      currency: 'USD',
      content_name: pushMyOrderCheckout
    });
  };

  if(window.location.href.indexOf("order/suggest.aspx") > -1) {    
    // When Complete Order button is clicked - myOrderSuggestion function fires pixel code and adds data to pixel
    $('#ctl00_cph1_orderList_upnlOrderList').click(function() {
      myOrderSuggestion();
      console.log('Completed!');
    });
  };

  // Submit-Order-Bolay-1.aspx | User will submit their card information here
  // Submit-Order-Bolay-1.aspx | User will submit their card information here
  // Submit-Order-Bolay-1.aspx | User will submit their card information here
  function subnmitCardOrder() {
    // Find the value of the total price of the order
    let submitPrice = $('div#ctl00_cph1_orderList_pnlOrder td:last b').html();
    pushSubmitOrder.push(submitPrice);

    // Will send purchase order to Facebook
    fbq('track', 'Purchase', {
      value: pushSubmitOrder,
      currency: 'USD',
    });
  }

  if(window.location.href.indexOf("order/submit.aspx") > -1) {    
    // This will track the exact price that the customer is checking out
    console.log("Submit-Order-Page-Bolay!");

    $('a#ctl00_cph1_btnSubmit').click(function() {
      subnmitCardOrder();
      console.log("Completed Total = " + pushSubmitOrder);
    });      
  }


  // Order-submitted-bolay.aspx | thank you page
  // Order-submitted-bolay.aspx | thank you page
  // Order-submitted-bolay.aspx | thank you page
  if(window.location.href.indexOf("order/done.aspx") > -1) {
    console.log('Not Tracking Code Here!')
  }

  // Cancel-Order-bolay.aspx | Cancel Order
  // Cancel-Order-bolay.aspx | Cancel Order
  // Cancel-Order-bolay.aspx | Cancel Order
  if(window.location.href.indexOf("order/cancel") > -1) {
    console.log('Not Tracking Code Here!')
  }
});
