var Product = require('../models/items');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/stock', { useNewUrlParser: true });
var products = [
  new Product({
  imagePath: 'Images/polo.jpg',
  title: 'H&M Polo Shirt',
  description: 'Casual Slim Fit Shirt in Green and Blue Colour. Light Weight and Quick Dry.',
  price: 25
}),
new Product({
imagePath: 'Images/polo.jpg',
title: 'Kenwood Blender',
description: 'Easy to set up Blender. Two Plug. Porcelain and glass finish in Silver and White.',
price: 80
}),
new Product({
imagePath: 'Images/polo.jpg',
title: 'Peruvian Wig with Frontal',
description: '100% good quality Peruvian Human hair with 360 lace frontal. 18 inches. Light and Easy to install.',
price: 100
}),
new Product({
imagePath: 'Images/polo.jpg',
title: 'Mac Air Laptop',
description: 'Brilliant Retina Display with True Tone technology.Comes in silver, white and space gray.',
price: 1000
}),
new Product({
imagePath: 'Images/polo.jpg',
title: 'Adapter Set',
description: 'Wall Adapter set. Comes in pack of three. Easy to use with child safety feature.',
price: 50
}),
new Product({
imagePath: 'Images/polo.jpg',
title: 'Christian Loubotin',
description: 'Available in Red and Hot Pink, these 5 inch heels are top notch, affordable and classy. Definately a show stopper.',
price: 25
}),
new Product({
imagePath: 'Imag',
title: 'Samsung S8',
description: 'Fast and powerful with 10nm processor. Comes in Rose gold and Midnight Black. 64gb and memory card slot.',
price: 2000
}),
new Product({
imagePath: 'Images/polo.jpg',
title: 'Newbron Onesies',
description: 'Comes in packs of three\'s with various colours and cute designs. Suitable for babies between 2.5kg to 5kg.',
price: 40
}),
new Product({
imagePath: 'Images/polo.jpg',
title: 'Travel Backpack',
description: 'Multipurpose backpack with numerous compartments. Available in gray and Black.',
price: 60
})
];
var done = 0;
for(var i=0; i < products.length; i++ ){
  products[i].save(function(error, result){
    done ++;
    if (done === products.length){
      exit();
    }

  });
}
function exit(){
  mongoose.disconnect();
}
