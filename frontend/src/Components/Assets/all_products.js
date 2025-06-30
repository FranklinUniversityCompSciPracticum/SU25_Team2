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
    description: "A stylish yellow state park varsity jacket that adds a pop of color to your wardrobe.",
  },
  {
    id: 2,
    name: "Orange and Blue Sweater - Men",
    category: "men",
    image: mens_2,
    new_price: 30.0,
    old_price: 35.5,
    description: "A stylish orange and blue sweater that adds a touch of elegance to your casual wardrobe.",
  },
  {
    id: 3,
    name: "Navy Blue Cropped Cardigan - Men",
    category: "men",
    image: mens_3,
    new_price: 32.0,
    old_price: 40.5,
    description: "A stylish navy blue cropped cardigan that adds a touch of sophistication to your casual wardrobe.",
  },
  {
    id: 4,
    name: "Light Beige Slim Fit Linen Jacket - Men",
    category: "men",
    image: mens_4,
    new_price: 120.0,
    old_price: 150.0,
    description: "A stylish light beige slim fit linen jacket that adds a touch of elegance to your wardrobe.",
  },
  {
    id: 5,
    name: "Orange Textured Jacket - Men",
    category: "men",
    image: mens_5,
    new_price: 55.0,
    old_price: 85.5,
    description: "A stylish orange textured jacket that adds a pop of color to your wardrobe.",
  },
  {
    id: 6,
    name: "Modern Fit Plaid Linen Blend Sport Coat - Men",
    category: "men",
    image: mens_6,
    new_price: 85.0,
    old_price: 110.5,
    description: "A stylish modern fit plaid linen blend sport coat that adds a touch of sophistication to your wardrobe.",
  },
  {
    id: 7,
    name: "Emerald Green Zipper Jacket - Men",
    category: "men",
    image: mens_7,
    new_price: 60.0,
    old_price: 70.5,
    description: "A stylish emerald green zipper jacket that adds a pop of color to your wardrobe.",
  },
  {
    id: 8,
    name: "Navy Blue & Green Cropped Cardigan - Men",
    category: "men",
    image: mens_8,
    new_price: 45.0,
    old_price: 55.5,
    description: "A stylish navy blue and green cropped cardigan that adds a touch of elegance to your casual wardrobe.",
  },
  {
    id: 9,
    name: "Patterned Zip Sweater Polo - Men",
    category: "men",
    image: mens_9,
    new_price: 35.0,
    old_price: 50.5,
    description: "A stylish patterned zip sweater polo that adds a touch of sophistication to your casual wardrobe.",
  },
  {
    id: 10,
    name: "Blue and Green Sweater - Men",
    category: "men",
    image: mens_10,
    new_price: 25.0,
    old_price: 30.5,
    description: "A stylish blue and green sweater that adds a pop of color to your wardrobe.",
  },
  {
    id: 11,
    name: "Slim Fit White Polo - Men",
    category: "men",
    image: mens_11,
    new_price: 30.0,
    old_price: 50.5,
    description: "A classic slim fit white polo that adds a touch of elegance to your casual wardrobe.",
  },
  {
    id: 12,
    name: "Forest Green Polo - Men",
    category: "men",
    image: mens_12,
    new_price: 25.0,
    old_price: 30.5,
    description: "A classic forest green polo that adds a touch of sophistication to your casual wardrobe.",
  },
  {
    id: 13,
    name: "Sleeveless Cropped Puffer Vest- Women",
    category: "women",
    image: womens_1,
    new_price: 50.0,
    old_price: 80.5,
    description: "A trendy sleeveless cropped puffer vest that adds a stylish layer to your outfit.",
  },
  {
    id: 14,
    name: "Shaggy Pink Faux Fur Jacket - Women",
    category: "women",
    image: womens_2,
    new_price: 85.0,
    old_price: 120.5,
    description: "A stylish shaggy pink faux fur jacket that adds a touch of glamour to your winter wardrobe.",
  },
  {
    id: 15,
    name: "Blue Hollow Out Crotchet Top - Women",
    category: "women",
    image: womens_3,
    new_price: 20.0,
    old_price: 30.5,
    description: "A stylish blue hollow out crochet top that adds a touch of elegance to your summer wardrobe.",
  },
  {
    id: 16,
    name: "Pretty in Pink Puffer Jacket - Women",
    category: "women",
    image: womens_4,
    new_price: 70.0,
    old_price: 90.0,
    description: "A stylish and warm puffer jacket in a lovely pink color, perfect for chilly days.",
  },
  {
    id: 17,
    name: "Patterned Orange Summer Dress - Women",
    category: "women",
    image: womens_5,
    new_price: 55.0,
    old_price: 70.5,
    description: "A vibrant orange summer dress with a unique pattern, ideal for warm weather outings.",
  },
  {
    id: 18,
    name: "Striped Blue Shirt - Women",
    category: "women",
    image: womens_6,
    new_price: 15.0,
    old_price: 20.5,
    description: "A classic striped blue shirt that adds a touch of elegance to any outfit.",
  },
  {
    id: 19,
    name: "Biege Contrast Collar Jacket - Women",
    category: "women",
    image: womens_7,
    new_price: 55.0,
    old_price: 70.5,
    description: "A chic beige jacket with a contrast collar, perfect for layering in style.",
  },
  {
    id: 20,
    name: "Cropped White Vest - Women",
    category: "women",
    image: womens_8,
    new_price: 25.0,
    old_price: 40.5,
    description: "A trendy cropped white vest that adds a modern touch to your wardrobe.",
  },
  {
    id: 21,
    name: "Casual Light Brown Sweater - Women",
    category: "women",
    image: womens_9,
    new_price: 45.0,
    old_price: 60.5,
    description: "A cozy light brown sweater, perfect for casual outings or lounging at home.",
  },
  {
    id: 22,
    name: " White and Navy Blue Sports Top - Women",
    category: "women",
    image: womens_10,
    new_price: 65.0,
    old_price: 80.5,
    description: "A stylish white and navy blue sports top, perfect for workouts or casual outings.",
  },
  {
    id: 23,
    name: "Purple and Cream Striped Sweater - Women",
    category: "women",
    image: womens_11,
    new_price: 35.0,
    old_price: 50.5,
    description: "A cozy purple and cream striped sweater, perfect for adding a pop of color to your winter wardrobe.",
  },
  {
    id: 24,
    name: "Red Turtleneck - Women",
    category: "women",
    image: womens_12,
    new_price: 45.0,
    old_price: 60.5,
    description: "A classic red turtleneck that adds warmth and style to your winter wardrobe.",
  },
  {
    id: 27,
    name: "Half Zipped Biege Sweater - Kid",
    category: "kid",
    image: kids_1,
    new_price: 85.0,
    old_price: 120.5,
    description: "A cozy half zipped beige sweater, perfect for keeping warm during chilly days.",
  },
  {
    id: 28,
    name: "Plum T-Shirt - Kid",
    category: "kid",
    image: kids_2,
    new_price: 85.0,
    old_price: 120.5,
    description: "A stylish plum t-shirt, perfect for casual outings or school wear.",
  },
  {
    id: 29,
    name: "Cadet Gray Button Front Knit Shirt - Kid",
    category: "kid",
    image: kids_3,
    new_price: 85.0,
    old_price: 120.5,
    description: "A stylish cadet gray button front knit shirt, perfect for casual outings or school wear.",
  },
  {
    id: 30,
    name: "Faux Leather Shearling Biker Jacket - Kid",
    category: "kid",
    image: kids_4,
    new_price: 85.0,
    old_price: 120.5,
    description: "A stylish faux leather shearling biker jacket, perfect for adding a touch of edge to your child's outfit.",
  },
  {
    id: 31,
    name: "Atomic Tangerine T-Shirt - Kid",
    category: "kid",
    image: kids_5,
    new_price: 85.0,
    old_price: 120.5,
    description: "A vibrant atomic tangerine t-shirt, perfect for adding a pop of color to your child's wardrobe.",
  },
  {
    id: 32,
    name: "Lightweight Green Plaid Flannel Shirt - Kid",
    category: "kid",
     image: kids_6,
    new_price: 85.0,
    old_price: 120.5,
    description: "A lightweight green plaid flannel shirt, perfect for layering or casual wear.",
  },
  {
    id: 33,
    name: "Sky Blue Polo Shirt - Kid",
    category: "kid",
    image: kids_7,
    new_price: 85.0,
    old_price: 120.5,
    description: "A classic sky blue polo shirt, perfect for casual outings or school wear.",
  },
  {
    id: 34,
    name: "Long Sleeve Red Striped Shirt - Kid",
    category: "kid",
    image: kids_8,
    new_price: 85.0,
    old_price: 120.5,
    description: "A classic long sleeve red striped shirt, perfect for casual outings or school wear.",
  },
  {
    id: 35,
    name: "Navy Blue and Red Striped Tracksuit - Kid",
    category: "kid",
    image: kids_9,
    new_price: 85.0,
    old_price: 120.5,
    description: "A sporty navy blue and red striped tracksuit, perfect for active kids who love to play.",
  },
  {
    id: 36,
    name: "Metallic Rain Jacket - Kid",
    category: "kid",
    image: kids_10,
    new_price: 85.0,
    old_price: 120.5,
    description: "A stylish metallic rain jacket that keeps your child dry and fashionable during rainy days.",
  },
  {
    id: 37,
    name: "Red White & Blue Button Up Shirt - Kid",
    category: "kid",
    image: kids_11,
    new_price: 85.0,
    old_price: 120.5,
    description: "A stylish red, white, and blue button-up shirt, perfect for casual outings or special occasions.",
  },
   {
    id: 38,
    name: "Green & Navy Blue Hooded Sweatshirt - Kid",
    category: "kid",
    image: kids_12,
    new_price: 85.0,
    old_price: 120.5,
    description: "A cozy green and navy blue hooded sweatshirt, perfect for keeping warm during chilly days.",
  },
];

export default all_product;
