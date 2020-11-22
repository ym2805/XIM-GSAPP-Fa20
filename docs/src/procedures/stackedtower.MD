# Stacked Tower Building Typology Procedural Type

![description](..imagesgh_procedural_type_ex4.jpg)

!-- ![description of image](XIM-GSAPP-Fa20imagesgh_procedural_pype_ex4.jpg) --

### Type Description

This collection of structures explores the ways in which the stacked tower building typology can be built and modified. This Grasshopper procedural type helps divide the lots into different groups to create vertical towers that have multiple stacked rectangle geometries that has a slight horiontal shift, so that it can create more outdoor space for gardening, following user inputs and pre-set procedural rules.

### Required inputs

1. Dynamic Lots and FAR
These are the dimensions that will determine what type of structure will be towers or parks.

1. Static Floor to Floor Height

### Type Rules

1. If the area of the parcel is greater than 6000 square feet, then the building type should remain a tower.
2. There are four different tower types that act as an input value.
3. If the area of the parcel is less than 6000 square feet, then the parcel will serve as a courtyard.

![description](..imagesgh_procedural_type_ex3.jpg)

!-- ![description of image](XIM-GSAPP-Fa20imagesgh_procedural_type_ex3.jpg) --

### Use Type If

1. Your team is interested in exploring how tower on podium typology could be used within your project.
1. If your team wants to conduct studies of sunlight and surface area, for example, based on the tower on podium building typology.

### Not Recommended to Use Type If

1. Your team is exploring more complex geometries because the end result might not meet the procedural rules and the end result might not be what you want.
1. The density target of your project is very low.
1. The height of your structures is very low.
1. Your team is exploring different building typologies other than tower typologies.

![description](..stackedtower.jpg)

!-- ![description of image](XIM-GSAPP-Fa20/images/stackedtower.jpg) --

### What to Know & Limitations

1. This procedural type only supports building bay depth suitable for single loaded corridor residential or side loaded office.
1. This procedural type assumes that for residential purposes, each resident required 600 square feet.

### Required Plugins

1. No specific plugins necessary

### Required Files

[Rhino File](..stackedtower.3dm)

[Grasshopper File](..stackedtower.gh)
