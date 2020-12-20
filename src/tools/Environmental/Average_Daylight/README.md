# Beneficial Daylight for Facades Analysis Tool

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-MAIN%20PHOTO2.jpg)

### Tool Description 

This analysis tool explores building in winter and summer sunlight time. In consideration of energy consumption, the building should reduce direct sunlight in summer as much as possible to prevent heat, and increase direct sunlight in winter to ensure insulation. Area that meets both summer shading and winter lighting can be understood as a sustainable area. This Analysis Tool visualizes the distribution of these sustainable areas.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-battery.png)

### Required inputs 

1. Dynamic: Context Mesh: merge context and target buildings into meshes

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-mesh%20context.jpg)

2. Static: 

(1)Building Surface Subdivision Number: this input data should not larger than 50.

(2)Winter Sun Path

(3)Winter sunrise and sunset time domain

(4)Winter Sunlight Hours Threshold: 3

(5)Summer Sun Path

(6)Summer sunrise and sunset time domain

(7)Summer Sunlight Hours Threshold: 6

### Tool Rules 

1. With sun path and sunlight time Domain, the battery output two groups of data about energy consumption based on the current building: Winter Sunlignt Hours and Summer Shadow Hours. For winter, the sunlight time on the winter solstice is about 3hours. We think that “winter sun > 3hours/day” is relatively ideal. For summer, we arrange the sunlight time in order, ensuring enough shadow in summer. we think that “summer sun < 6hours/day”is beneficial.
2. "Sustainable Facade " in output data indicates the percentage of the facade area that meets both “winter sun > 3hours/day” and “summer sun < 6hours/day”.
3. Area that meets both summer shading and winter lighting can be understood as a sustainable area. “Mesh Analysis” visualizes the distribution of these sustainable areas.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-SUBDIVISION.jpg)

### Modeling Standards 

1. Please follow the following Rhino standards to ensure the proper functionality of the tool:
2. Model is oriented to True North.
3. Model is set to either Meters or Feet (not mm or in). 
4. Model is free of overlapping, coplanar, or intersecting geometry.
5. Any obstructions around the space have been modeled (trees, topography, buildings).
6. Any curved surfaces in the model have been simplified to individual flat planes.
7. Any surrounding context has been made into a single, joined mesh.

### Limitations & Context

1.The current sunshine information is in New York. If you want to apply to other cities, please link the correct Sun Path Curve and sunrise/ Sunset Domain.
2.The analysis tool doesn't measure the building energy.

### Required Plugins 

No specific plugins necessary

### Required Files

[Rhino File](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Average_Daylight/Beneficial%20Daylight%20for%20Facades%20Analysis%20Tool.3dm)

[Grasshopper File](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Average_Daylight/Beneficial%20Daylight%20for%20Facades%20Analysis%20Tool.gh)
