# Row House Type for Small Lot Size



![description](../images/Row_House_1.png)

### Type Description

Row House type will be pulled in order to connect individual yard areas into a common park zone, with varying degrees of openness. This Grasshopper procedural type scales and centers the building within the lots towards the streets to generate communal access to the backyards and knit them into a pedestrian only circulation network of public space within the blocks. This configuration also limits block porosity towards streets air pollution.

### Required inputs 

Input type: Static
Inputs: Lots, Streets Center Line and Building Height, these will determine footprint area, location and height extrusion for the buildings. 

![description](../images/Row_House_3.png)

### Type Rules 

1. The building will be pulled towards the closest street line.
2. The building will then be centered on the lot footprint in order to generate access corridors to their respective backyards.
3. If the building is located on the corner of the block then the building will pull to the closest street line in relation to the shortest side of its footprint.

### Use Type If: 

1. Your team is interested in exploring how row house typology could be used within your project.
2. Your team is interested in including horizontal backyards.
3. Your team has small lots resulting from your parcel-making logic.
4. Your team wants to conduct studies of sunlight and wind, for example, based on the row house building typology.

![description](../images/Row_House_2.png)

### Not Recommended to Use Type If:

1. If this lot footprint exceeds you zone FAR since, the building type footprint will be determined by scaling the lot footprint to 70%.
2. Your team is exploring more complex geometries because the end result might not meet the procedural rules and the end result might not be what you want.
3. The density target of your project is very high.
4. The height of your structures is very high.
5. Your team is exploring different building typologies other than courtyard typology.

### What to Know & Limitations 

1. Lots scale in static. If you want to have each of the lots to scale separately depending on each area then, you will have to modify the definition of the type. 
2. This procedural type only supports small lots, medium-density targets and low height structures.

### Required Plugins 

No specific plugins necessary

### Required Files 

![Grasshopper File](../ROW_HOUSE.gh)
