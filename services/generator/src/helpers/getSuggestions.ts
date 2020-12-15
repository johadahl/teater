import axios from 'axios';
import { env } from 'process';

export const getSuggestions = async ({lat, lng}: {lat: any, lng: any}) => {
  const googleURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${env.GOOGLE_API_KEY}&location=${lat},${lng}&radius=200&language=en&type=restaurant`

  const googleResponse = await axios.get(googleURL)
  const places = googleResponse.data.results

  const structured = places.map( (place: any) => {
    return {
      name: place.name,
      address: place.vicinity ?? null,
      rating: place.rating ?? null,
      price: place.price_level ?? null,
      open: place.opening_hours?.open_now ?? null
    }
  })

  const openNow = structured.filter((place:any) => place.open === true)

  return { suggestions: openNow }
}