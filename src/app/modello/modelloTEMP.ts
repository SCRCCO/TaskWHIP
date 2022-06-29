export interface modelloTEMP {
    location: Location
    current: Current
  }
  
  export interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  
  export interface Current {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
 
    temp_f: number
    is_day: number
    condition: Condition
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
  }
  
  export interface Condition {
    text: string
    icon: string
    code: number
  }
  {
   /*  "location": {
        "name": "Arezzo",
        "region": "Toscana",
        "country": "Italy",
        "lat": 43.42,
        "lon": 11.88,
        "tz_id": "Europe/Rome",
        "localtime_epoch": 1656317543,
        "localtime": "2022-06-27 10:12"
    },
    "current": {
        "last_updated_epoch": 1656313200,
        "last_updated": "2022-06-27 09:00",
        "temp_c": 31.5,
        "temp_f": 88.7,
        "is_day": 1,
        "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
        },
        "wind_mph": 5.6,
        "wind_kph": 9,
        "wind_degree": 174,
        "wind_dir": "S",
        "pressure_mb": 1015,
        "pressure_in": 29.97,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 23,
        "cloud": 4,
        "feelslike_c": 29.7,
        "feelslike_f": 85.5,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 8,
        "gust_mph": 6.5,
        "gust_kph": 10.4 */
    }
