import axios from 'axios';

const pageSize = 50;

class FoodSearchService {

  static async searchFood(searchTerm, page) {
    const { data } = await axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1&page_size=${pageSize}&page=${page}&tagtype_0=languages&tag_contains_0=contains&tag_0=English`),
      remaining = data.count - (pageSize * page);

    return {
      items: data && data.products ? FoodSearchService.mapFoodsToVM(data.products) : [],
      remaining: remaining > 0 ? remaining : null
    };
  }

  static mapFoodsToVM(foods = []) {
    return foods.filter(food => food.nutriments && food.nutriments.energy_100g).map(food => ({
      name: food.product_name,
      protein: food.nutriments.proteins_100g,
      fat: food.nutriments.fat_100g,
      carbs: food.nutriments.carbohydrates_100g,
      cal: food.nutriments.energy_100g / 4.2,
      servingSize: food.serving_quantity / 100
    }));
  }
}

export default FoodSearchService;