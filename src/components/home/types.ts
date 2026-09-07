export type Recipe = {
id: number;
name : string;
image: string;
rating: number;
cuisine: string;
difficulty: string;
prepTimeMinutes: number;
reviewCount: number,
caloriesPerServing: number;
cookTimeMinutes: number;
ingredients: string[];
instructions: string[];
mealType:string[];
servings: number;
tags:string[];
userId:number

}