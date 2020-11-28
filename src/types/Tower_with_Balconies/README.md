# Tower with Balconies for Optimal Daylight

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%20MAIN%20PHOTO.jpg)

### Type Description 

This collection of structures explores the ways in which the  tower with balconies for optimal daylight can be built and modified. This Grasshopper procedural type helps optimize the basic podium curve into 4-sides rectangular tower, all following user inputs and pre-set procedural rules.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-BATTERY.png)

### Required inputs 

1. Dynamic: 

(1)Base Curves: The input data structure must be Grafted.

(2)FAR: The input data will determine the density of the building.

2. Static: 

(1)Tower Footprint One Side Set Back Ratio: The data range should be between 0 and 0.5.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%20SETBACK.jpg)

(2)Tower Footprint General Offset Ratio: The data should smaller than One Side Set Back Ratio.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%20OFFSET.jpg)

(3)Interval Floor Number: This parameter determines how many floors generate a balcony for a group.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%20Interval.jpg)

(4)Floor to Floor Height

(5)Podium Height

(6)Balcony Depth

### Type Rules 

1. In consideration of energy consumption, the building should reduce direct sunlight in summer as much as possible to isolate heat, and increase direct sunlight in winter to ensure insulation.
2. The current balcony direction is determined by the sunlight direction which should related to the context, and the default direction is due south (0, -1). The specific operation of this part can be found in the cluster of "balcony footprint".
3. The battery calculated the angle between the normal direction of the base tower outline and the sunlight direction, arranged them in pairs according to the order of the angle, and set the balcony offset on the direction with sufficient sunlight.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%20rule.jpg)

### Use Type If: 

1. Your team is interested in exploring how tower typology with balconies could be used within your project.
2. Your team is interested in considering the optimal daylight to reduce energy consumption.
3. If your team want to conduct studies of sunlight, for example, based on the urban context.

### Not Recommended to Use Type If:

1. Your team is exploring more complex geometries because the end result might not meet the procedural rules and the end result might not be what you want.
2. The height of your structures is very low.
3. Your team is exploring different building typologies other than tower typology.

### What to Know & Limitations 

1. Tower Footprint in cluster. If your tower has less than 4 sides (like triangle shape), it would not work. 
   The current type only supports the tower with greater than or equal to 4 sides, and optimize the one with more than 4 sides to 4 sides.
2. Balcony Footprint in cluster. If your tower want to conduct the sunlight based on the urban context, you will have to modify the definition of sunlight vector.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%204%20sides.jpg)


### Required Plugins 

No specific plugins necessary

### Required Files

[Rhino File](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/types/Tower_with_Balconies/Tower%20with%20Balconies%20for%20Optimal%20Daylight.3dm)

[Grasshopper File](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/types/Tower_with_Balconies/Tower%20with%20Balconies%20for%20Optimal%20Daylight.gh)
