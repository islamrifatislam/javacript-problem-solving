function findCheapestPhone(phoneList) {

    if (!Array.isArray(phoneList) || phoneList.length === 0) {
        return "Phone list is empty";
    }

   
    let cheapestPhone = phoneList[0];

    
    for (let i = 1; i < phoneList.length; i++) {
        if (phoneList[i].price < cheapestPhone.price) {
            cheapestPhone = phoneList[i];
        }
    }
    return `সবচেয়ে সস্তা ফোন: ${cheapestPhone.name}, দাম: ${cheapestPhone.price} টাকা`;
}


const phones = [
  { name: "Galaxy A13", brand: "Samsung", price: 18000 },
  { name: "Redmi Note 13", brand: "Xiaomi", price: 17500 },
  { name: "Realme Narzo 50", brand: "Realme", price: 16990 },
  { name: "Infinix Smart 8", brand: "Infinix", price: 9990 }
];

console.log(findCheapestPhone(phones));
