import 'dotenv/config';
import mongoose from 'mongoose';
import Food from '../models/Food.js';
const foods=[
['Truffle Margherita','Pizza',890,'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85','Wood-fired pizza, tomato, fior di latte, basil and black truffle oil.','Chef pick',4.9],
['Butter Chicken','Indian',620,'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85','Silky tomato curry with charred chicken, butter and aromatic spices.','Popular',4.8],
['Wok Chicken Noodles','Chinese',460,'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85','Wok-tossed noodles, tender chicken, greens and house soy glaze.',null,4.7],
['Creamy Truffle Pasta','Pasta',720,'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85','Tagliatelle with parmesan cream, wild mushroom and truffle.','New',4.9],
['Royal Family Set','Set Menu',1850,'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85','A generous table of grilled chicken, rice, curry, salad and drinks.','Best value',4.8],
['Crispy Chicken Burger','Fast Food',540,'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85','Crispy chicken, brioche, slaw, pickles and smoked mayo.',null,4.7],
['Mango Panna Cotta','Desserts',380,'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85','Silky vanilla panna cotta finished with ripe mango and mint.',null,4.8],
['Saffron Lassi','Drinks',240,'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85','Chilled yogurt drink with saffron, cardamom and rose.',null,4.8]
];
await mongoose.connect(process.env.MONGODB_URI);await Food.deleteMany({});await Food.insertMany(foods.map(([name,category,price,img,desc,badge,rating])=>({name,category,price,img,desc,badge,rating})));console.log('Seeded Velora menu:',foods.length,'items');await mongoose.disconnect();
