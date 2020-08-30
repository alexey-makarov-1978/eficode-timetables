import axios from "axios";

const planUrl =
  "https://api.digitransit.fi/routing/v1/routers/finland/index/graphql";

const autoCompleteUrl =
  "http://api.digitransit.fi/geocoding/v1/autocomplete?text=";

export async function getPlan(oLat, oLon, dLat, dLon) {
  const query = `{
    plan(from: {lat: ${oLat}, lon: ${oLon}}, 
      to: {lat: ${dLat}, lon: ${dLon}}) {
      date
      itineraries {
        startTime
        endTime
        duration
        legs {
          startTime
          endTime
          mode
          duration
          distance
          route {
            shortName
          }
          from {
            name
          }
          to {
            name
          } 
        }
      }
    }
  }`;

  const response = await axios({
    url: planUrl,
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/graphql",
    },
    data: query,
  });

  return response.data.data.plan;
}

export async function getLocations(searchText) {
  const response = await axios.get(autoCompleteUrl + searchText);

  return response.data.features.map((v) => {
    return {
      label: v.properties.label,
      lat: v.geometry.coordinates[1],
      lon: v.geometry.coordinates[0],
    };
  });
}
