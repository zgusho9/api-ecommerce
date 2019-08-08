

function MetaDatum(name, date, author, price, button){
    this.name = name;
    this.date = dateString(date);
    this.author = author;
    if(price === '0')this.price = "Free";
    else this.price = price;
    this.button = "https://commons.oceanprotocol.com/asset/" + button;
  }
  var metas = [];
  $(document).ready(function()
  { 
      $( "#search_form" ).submit(function( event ) {
          $(".result_box").empty();
          metas = [];
          event.preventDefault();
          const headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', '*');
          //headers.append('Access-Control-Allow-Headers', '*');

          
          let term = $("#search_input").val();
          fetch('https://immense-fortress-43420.herokuapp.com/https://pure-waters-23057.herokuapp.com/api/assets/' + term,{
            headers
          })
          .then(response => response.json())
          .then(function(obj){
          //returned json style formatted object
            //obj = JSON.stringify(obj);
            //obj = JSON.parse(obj); // parses obj into javascript object
           
            console.log(obj);
            var num_results = obj.results.length;
            console.log(num_results);
            for(var i = 0; i < num_results; ++i){
              let serv = obj.results[i].service[0].metadata;  
              let name = serv.base.name;
              let date = serv.base.dateCreated;
              let author = serv.base.author;
              let price = serv.base.price;
              let id = obj.results[i].id;
              //console.log(name);
              metas.push( new MetaDatum(name, date,author, price,id ));
              //initializes metaDatum product into metas array
                //console.log(metadata.base.author);//check
              
            }
            searchResultGrid(num_results);
          })
          .then(function(myJson){
            //console.log(myJson)//dont need
            //console.log(metas);
          })
        });
  
  })
  
  function searchResultGrid(num_results){
    let term = $("#search_input").val();
    //alert(term);
    var num_rows = Math.ceil(num_results / 4);
    var myElement = $("#myHeader");
    if (num_results === 1) myElement.text(num_results + " result for \"" + term + "\"");//how to find search input
    else myElement.text(num_results + " results for \"" + term + "\"");
    for(let i = 0; i < num_results; ++i){
      let txt = "";
      txt += "<b>Name:</b> " + metas[i].name + "</br>";
      txt += "<b> Date:</b>  " + metas[i].date + "</br>";
      txt += "<b> Author:</b>  " + metas[i].author + "</br>";
      txt += "<b> Price:</b>  " + metas[i].price + "</br></br></br>";
      txt += "<a href=" + metas[i].button + "><button class= 'button_boi button_boi1'>Buy on OCEAN</button></a>"  ; //change to popup or link maybe? see what happens
      //let in_txt = '<div class = "append_here"><txt>'
      $("div.result_box").append('<div class = "product">' + txt + '</div>');
    }
    fix_heights();
  }
  
  function fix_heights(){
    $('.result_box').each(function(){  
        
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.product', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.product',this).height(highestBox);

      //sets each button to height 0
     
                    
    }); 
  }
  
  function dateString(d){
      let year = d.slice(0,4);
      var month = d.slice(5,7);
      switch(month){
        case "01": month = "January";
            break;
        case "02": month = "February";
            break;
        case "03": month = "March";
            break;
        case "04": month = "April";
            break;
        case "05": month = "May";
            break;
        case "06": month = "June"; 
            break;
        case "07": month = "July";
            break;
        case "08": month = "August";
            break;
        case "09": month = "September";
            break;
        case "10": month = "October";
            break;
        case "11": month = "November";
            break;
        case "12": month = "December";
            break;
        }
     let day = d.slice(8,10);
     let time = d.slice(11,19);
     return (day + " " + month + ", " + year + " " + time + " GMT");

  }