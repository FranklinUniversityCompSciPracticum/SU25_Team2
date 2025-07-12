import mens_1 from "./mens_1.jpg";
import mens_2 from "./mens_2.jpg";
import mens_3 from "./mens_3.jpg";
import mens_4 from "./mens_4.jpg";
import mens_5 from "./mens_5.jpg";
import mens_6 from "./mens_6.jpg";
import mens_7 from "./mens_7.jpg";
import mens_8 from "./mens_8.jpg";
import mens_9 from "./mens_9.jpg";
import mens_10 from "./mens_10.jpg";
import mens_11 from "./mens_11.jpg";
import mens_12 from "./mens_12.jpg";

import womens_1 from "./womens_1.jpg";
import womens_2 from "./womens_2.jpg";
import womens_3 from "./womens_3.jpg";
import womens_4 from "./womens_4.jpg";
import womens_5 from "./womens_5.jpg";
import womens_6 from "./womens_6.jpg";
import womens_7 from "./womens_7.jpg";
import womens_8 from "./womens_8.jpg";
import womens_9 from "./womens_9.jpg";
import womens_10 from "./womens_10.jpg";
import womens_11 from "./womens_11.jpg";
import womens_12 from "./womens_12.jpg";

import kids_1 from "./kids_1.jpg";
import kids_2 from "./kids_2.jpg";
import kids_3 from "./kids_3.jpg";
import kids_4 from "./kids_4.jpg";
import kids_5 from "./kids_5.jpg";
import kids_6 from "./kids_6.jpg";
import kids_7 from "./kids_7.jpg";
import kids_8 from "./kids_8.jpg";
import kids_9 from "./kids_9.jpg";
import kids_10 from "./kids_10.jpg";
import kids_11 from "./kids_11.jpg";
import kids_12 from "./kids_12.jpg";


let all_product = [
  {
    id: 1,
    name: "Yellow State Park Varsity Jacket - Men",
    category: "men",
    image: mens_1,
    new_price: 60.0,
    old_price: 85.5,
    description: "A stylish and soft varsity jacket, perfect for casual outings in cool weather"
  },
  {
    id: 2,
    name: "Orange and Blue Sweater - Men",
    category: "men",
    image: mens_2,
    new_price: 30.0,
    old_price: 35.5,
    description: "Bold style grabs the eye in this ridiculously soft sweater"

  },
  {
    id: 3,
    name: "Navy Blue Cropped Cardigan - Men",
    category: "men",
    image: mens_3,
    new_price: 32.0,
    old_price: 40.5,
    description: "Classic and timeless style in a navy blue Cardigan"

  },
  {
    id: 4,
    name: "Light Beige Slim Fit Linen Jacket - Men",
    category: "men",
    image: mens_4,
    new_price: 120.0,
    old_price: 150.0,
    description: "Slim cut linen jacket is the perfect clean look for summer occasions"

  },
  {
    id: 5,
    name: "Orange Textured Jacket - Men",
    category: "men",
    image: mens_5,
    new_price: 55.0,
    old_price: 85.5,
    description: "Get bold and stay warm in this flamboyant orange jacket with texture"

  },
  {
    id: 6,
    name: "Modern Fit Plaid Linen Blend Sport Coat - Men",
    category: "men",
    image: mens_6,
    new_price: 85.0,
    old_price: 110.5,
    description: "The best fit you will ever experience in this"
  },
  {
    id: 7,
    name: "Emerald Green Zipper Jacket - Men",
    category: "men",
    image: mens_7,
    new_price: 60.0,
    old_price: 70.5,
    description: "Look flashy and bright with this nacket featuring a full zipper"
  },
  {
    id: 8,
    name: "Navy Blue & Green Cropped Cardigan - Men",
    category: "men",
    image: mens_8,
    new_price: 45.0,
    old_price: 55.5,
    description: "Classic cardigan look in navy blue and green"
  },
  {
    id: 9,
    name: "Patterned Zip Sweater Polo - Men",
    category: "men",
    image: mens_9,
    new_price: 35.0,
    old_price: 50.5,
    description: "Polo sweater looks great everywhere- with a zipper for comfort"
  },
  {
    id: 10,
    name: "Blue and Green Sweater - Men",
    category: "men",
    image: mens_10,
    new_price: 25.0,
    old_price: 30.5,
    description: "Gorgeous blue and green sweater for men"
  },
  {
    id: 11,
    name: "Slim Fit White Polo - Men",
    category: "men",
    image: mens_11,
    new_price: 30.0,
    old_price: 50.5,
    description: "Slim cut fits just right, in white color ideal for summer"
  },
  {
    id: 12,
    name: "Forest Green Polo - Men",
    category: "men",
    image: mens_12,
    new_price: 25.0,
    old_price: 30.5,
    description: "Forest green polo is classy and stylish"
  },
  {
    id: 13,
    name: "Sleeveless Cropped Puffer Vest- Women",
    category: "women",
    image: womens_1,
    new_price: 50.0,
    old_price: 80.5,
    description: "Sleeveless look in a warm and comfy puffy jacket"
  },
  {
    id: 14,
    name: "Shaggy Pink Faux Fur Jacket - Women",
    category: "women",
    image: womens_2,
    new_price: 85.0,
    old_price: 120.5,
    description: "Shaggy pink faux fur keeps you warm and comfy"
  },
  {
    id: 15,
    name: "Blue Hollow Out Crotchet Top - Women",
    category: "women",
    image: womens_3,
    new_price: 20.0,
    old_price: 30.5,
    description: "Crochet tops are coming back in style- get yours"
  },
  {
    id: 16,
    name: "Pretty in Pink Puffer Jacket - Women",
    category: "women",
    image: womens_4,
    new_price: 70.0,
    old_price: 90.0,
    description: "Pink puffer is warm and stylish"
  },
  {
    id: 17,
    name: "Patterned Orange Summer Dress - Women",
    category: "women",
    image: womens_5,
    new_price: 55.0,
    old_price: 70.5,
    description: "Pretty orange summer dress is great for summer"
  },
  {
    id: 18,
    name: "Striped Blue Shirt - Women",
    category: "women",
    image: womens_6,
    new_price: 15.0,
    old_price: 20.5,
    description: "Striped blue shirt looks great everywhere"
  },
  {
    id: 19,
    name: "Biege Contrast Collar Jacket - Women",
    category: "women",
    image: womens_7,
    new_price: 55.0,
    old_price: 70.5,
    description: "Collar jacket will keep you warm and comfy"
  },
  {
    id: 20,
    name: "Cropped White Vest - Women",
    category: "women",
    image: womens_8,
    new_price: 25.0,
    old_price: 40.5,
    description: "Cropped white vest is just awesome- invest now"
  },
  {
    id: 21,
    name: "Casual Light Brown Sweater - Women",
    category: "women",
    image: womens_9,
    new_price: 45.0,
    old_price: 60.5,
    description: "Light sweater keeps you warm but not hot"
  },
  {
    id: 22,
    name: " White and Navy Blue Sports Top - Women",
    category: "women",
    image: womens_10,
    new_price: 65.0,
    old_price: 80.5,
    description: "Sports top is great for all of your sporty activities"
  },
  {
    id: 23,
    name: "Purple and Cream Striped Sweater - Women",
    category: "women",
    image: womens_11,
    new_price: 35.0,
    old_price: 50.5,
    description: "Purple and cream striped sweater is comfy and so stylish"
  },
  {
    id: 24,
    name: "Red Turtleneck - Women",
    category: "women",
    image: womens_12,
    new_price: 45.0,
    old_price: 60.5,
    description: "Nice red turtleneck to keep you warm on chily days"
  },
  {
    id: 27,
    name: "Half Zipped Biege Sweater - Kid",
    category: "kid",
    image: kids_1,
    new_price: 85.0,
    old_price: 120.5,
    description: "A fashionable half-zipped sweater for kids, great for cooler weather. Made with soft, breathable fabric makes this a comfortable fit that kids will love.",
  },
  {
    id: 28,
    name: "Plum T-Shirt - Kid",
    category: "kid",
    image: kids_2,
    new_price: 85.0,
    old_price: 120.5,
    description: "A bright plum-colored tee that's both fun and functional. Lightweight and easy to wear for everyday adventures.",
  },
  {
    id: 29,
    name: "Cadet Gray Button Front Knit Shirt - Kid",
    category: "kid",
    image: kids_3,
    new_price: 85.0,
    old_price: 120.5,
    description: "A stylish cadet gray knit shirt with button-front design. Perfect for layering or wearing solo in casual settings.",
  },
  {
    id: 30,
    name: "Faux Leather Shearling Biker Jacket - Kid",
    category: "kid",
    image: kids_4,
    new_price: 85.0,
    old_price: 120.5,
    description: "Trendy faux leather biker jacket with cozy shearling lining. Adds edge and warmth to any kid’s wardrobe.",
  },
  {
    id: 31,
    name: "Atomic Tangerine T-Shirt - Kid",
    category: "kid",
    image: kids_5,
    new_price: 85.0,
    old_price: 120.5,
    description: "Vibrant and fun, this Atomic Tangerine tee is ideal for kids who love bold colors and comfy fits.",
  },
  {
    id: 32,
    name: "Lightweight Green Plaid Flannel Shirt - Kid",
    category: "kid",
    image: kids_6,
    new_price: 85.0,
    old_price: 120.5,
    description: "Classic green plaid flannel with a lightweight feel. Versatile enough for school or weekend play.",
  },
  {
    id: 33,
    name: "Sky Blue Polo Shirt - Kid",
    category: "kid",
    image: kids_7,
    new_price: 85.0,
    old_price: 120.5,
    description: "A crisp sky-blue polo that offers comfort and a polished look. Great for dress-up or casual wear.",
  },
  {
    id: 34,
    name: "Long Sleeve Red Striped Shirt - Kid",
    category: "kid",
    image: kids_8,
    new_price: 85.0,
    old_price: 120.5,
    description: "Bright red stripes make this long sleeve shirt a standout. Soft cotton ensures all-day comfort.",
  },
  {
    id: 35,
    name: "Navy Blue and Red Striped Tracksuit - Kid",
    category: "kid",
    image: kids_9,
    new_price: 85.0,
    old_price: 120.5,
    description: "Sporty and comfy, this tracksuit features navy and red stripes. Ideal for active play and staying cozy.",
  },
  {
    id: 36,
    name: "Metallic Rain Jacket - Kid",
    category: "kid",
    image: kids_10,
    new_price: 85.0,
    old_price: 120.5,
    description: "Stay dry in style with this fun metallic rain jacket. Water-resistant and lightweight for rainy days.",
  },
  {
    id: 37,
    name: "Red White & Blue Button Up Shirt - Kid",
    category: "kid",
    image: kids_11,
    new_price: 85.0,
    old_price: 120.5,
    description: "Patriotic style meets everyday wear with this red, white, and blue button-up. Great for family outings.",
  },
  {
    id: 38,
    name: "Green & Navy Blue Hooded Sweatshirt - Kid",
    category: "kid",
    image: kids_12,
    new_price: 85.0,
    old_price: 120.5,
    description: "A cozy hooded sweatshirt in green and navy tones. Great for layering on chilly school days.",
  },
];

export default all_product;
