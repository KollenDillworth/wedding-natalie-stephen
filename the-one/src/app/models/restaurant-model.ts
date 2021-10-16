export interface RestaurantModel{
    restaurants: Restaurants[];
}

interface Restaurants{
    type: string;
    name: string;
    url: string;
    mapUrl: string;
}