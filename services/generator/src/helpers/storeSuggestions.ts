import { Restaurant } from '../types';

type Like = {
  restaurantId: string;
  likes: number;
};
export class Room {
  id: string;
  suggestions: Restaurant[];
  users: string[];
  liked: Like[];

  constructor(id: string) {
    this.id = id;
    this.suggestions = [];
    this.users = [];
    this.liked = [];
  }

  addUser(user: string) {
    this.users.push(user);
  }

  addSuggestions(suggestions: Restaurant[]) {
    this.suggestions.concat(suggestions);

    suggestions.forEach((restaurant) => {
      this.liked.push({
        restaurantId: restaurant.id,
        likes: 0,
      });
    });
  }

  addLike(restaurantId: string) {
    let isMatch = false;
    this.liked.forEach((like) => {
      if (like.restaurantId === restaurantId) {
        like.likes += 1;
      }
    });
    return isMatch;
  }
}

export let store: Room[] = [];
