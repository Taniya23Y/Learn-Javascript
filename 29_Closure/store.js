function createStore(storeName) {
    let inventory = {};
    let sales = 0;
  
    function sellItem(item, quantity) {
      if (inventory[item] >= quantity) {
        inventory[item] -= quantity;
        sales += quantity;
        console.log(`${quantity} ${item}(s) sold from ${storeName}`);
      } else {
        console.log(`Insufficient stock in ${storeName}`);
      }
    }
  
    function restockItem(item, quantity) {
      if (inventory[item]) {
        inventory[item] += quantity;
      } else {
        inventory[item] = quantity;
      }
      console.log(`${quantity} ${item}(s) restocked in ${storeName}`);
    }
  
    function getSales() {
      console.log(`Total sales in ${storeName}: ${sales}`);
    }
  
    return {
      sellItem,
      restockItem,
      getSales
    };
  }
  
  const store1 = createStore("Tech Emporium");
  const store2 = createStore("Books 'n' More");
  
  store1.restockItem("laptop", 10);
  store1.sellItem("laptop", 3);
  store1.getSales(); // Output: Total sales in Tech Emporium: 3
  
  store2.restockItem("novels", 20);
  store2.sellItem("novels", 15);
  store2.getSales(); // Output: Total sales in Books 'n' More: 15