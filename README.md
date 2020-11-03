# --Back-End--
Grim-Link-Backend
### PORT 
PORT="3000"

# current end points

## ship Routes

### GET("/")
required params - NONE
returns - ALL SHIP DATA --

( includes 3 image sizes (small, medium, large) )

### GET("/ships")
required params - NONE
returns - all ships with three key values --

("ship_id", "chassis_id", "name")

### GET("/ships/:id")
required params - SPECIFIED SHIP_ID
returns - specified ship by ship_id with 3 key values --

 ("ship_id", "chassis_id", "name")


## ship spec Routes

### GET("/ships/:id/specs")
required params - SPECIFIED SHIP_ID
returns - specified ship by ship_id with 24 key values --
(
        "id",
        "afterburner_speed",
        "beam",
        "cargocapacity",
        "height",
        "length",
        "manufacturer_id",
        "mass",
        "max_crew",
        "min_crew",
        "pitch_max",
        "production_note",
        "production_status",
        "roll_max",
        "scm_speed",
        "size",
        "time_modified",
        "type",
        "xaxis_acceleration",
        "yaw_max",
        "yaxis_acceleration",
        "zaxis.acceleration",
        "description",
        "url",
)