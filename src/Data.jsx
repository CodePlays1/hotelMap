const Data = 
{
    "hotels": [
      {
        "id": 1,
        "name": "Grand Palace Hotel",
        "location": {
          "address": "123 Luxury St, Beverly Hills, CA",
          "latitude": 34.0736,
          "longitude": -118.4053
        },
        "rating": 4.8,
        "price_per_night": 250,
        "amenities": [
          "Free WiFi",
          "Spa",
          "Gym",
          "Swimming Pool",
          "Restaurant"
        ],
        "rooms": [
          {
            "type": "Single Room",
            "beds": 1,
            "price": 150,
            "available": true
          },
          {
            "type": "Double Room",
            "beds": 2,
            "price": 250,
            "available": true
          },
          {
            "type": "Suite",
            "beds": 2,
            "price": 500,
            "available": false
          }
        ],
        "contact_info": {
          "phone": "+1 234 567 890",
          "email": "contact@grandpalacehotel.com"
        }
      },
      {
        "id": 2,
        "name": "Seaside Resort",
        "location": {
          "address": "456 Ocean Ave, Miami Beach, FL",
          "latitude": 25.7617,
          "longitude": -80.1918
        },
        "rating": 4.5,
        "price_per_night": 180,
        "amenities": [
          "Beach Access",
          "Bar",
          "Free WiFi",
          "Fitness Center",
          "Free Breakfast"
        ],
        "rooms": [
          {
            "type": "Standard Room",
            "beds": 2,
            "price": 180,
            "available": true
          },
          {
            "type": "Deluxe Room",
            "beds": 2,
            "price": 350,
            "available": true
          },
          {
            "type": "Family Suite",
            "beds": 4,
            "price": 600,
            "available": true
          }
        ],
        "contact_info": {
          "phone": "+1 305 123 4567",
          "email": "info@seasideresort.com"
        }
      }
    ]
  }

export default Data