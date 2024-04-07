// Nested Object
let user = {
  name: "Annie",
  address: {
    personAdd: {
      city: "Dehradun",
      area: "Majra",
    },
    office: {
      city: "Hyderabad",
      area: {
        landmark: "HiTech",
      },
    },
  },
};

// write a function which takes this object as a function and returns another object.
let finalObject1 = {
    user_name: "Annie",
    user_address_personAdd_city: "Dehradun",
    user_address_personAdd_area: "Majra",
    user_address_office_city: "Hyderabad",
    user_address_office_area_landmark:"HiTech",
}

let magic = (obj, parent) => {
    for(let key in obj){
        if(typeof obj[key] === 'Object'){
            magic(object[key], parent+ " " + key);
        } else {
            finalObject1[parent+ " " + key] = Object[key];
        }
    }
}
magic(user, "user");

//----------------------------------------------------------------------

// Function to convert nested object into flat object with modified keys
function flattenObject(obj, parentKey = '') {
    let result = {};
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        let flattened = flattenObject(obj[key], parentKey ? parentKey + '_' + key : key);
        result = { ...result, ...flattened };
      } else {
        result[parentKey ? parentKey + '_' + key : key] = obj[key];
      }
    }
    return result;
  }
  
  // Call the function with the provided nested object
  let finalObject = flattenObject(user);
  
  // Output the final object
  console.log(finalObject);