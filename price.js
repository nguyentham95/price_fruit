function Price() {
    let fruit, price, display;
    fruit = document.getElementById("trai_cay").value;
    price = "";
    display = "";
    
    switch (fruit) {
  
      case "oi":
      case "duahau":
        price = "20.000 VNÐ/kg";
        break; 
        
      case "tao":
      case "xoai":
        price = "30.000 VNÐ/kg";
        break;     
      
      case "cam":
      case "chomchom":
        price = "40.000 VNÐ/kg";
        break;    
  
      case "mangcut":
          price = "50.000 VNÐ/kg";
          break;   
  
      default:
        price = "Không tìm thấy trái cây.";
  
  
    }
  
    display = fruit + " co gia la: " + price;
  
   
    document.getElementById("result").innerHTML = display;
  
  }