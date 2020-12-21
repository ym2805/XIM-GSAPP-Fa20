# The Great Outdoor_Five Building Types
<!--add your title on the first line above-->
### Type Description

The building types defined with the different locations and positions of the public space. According to different population density. They can be changed to:

![description](https://github.com/tterrytang/the-great-outdoor/blob/main/WeChat%20Screenshot_20201121213149.png)


A. Outdoor Performance space

B. Outdoor Eating space/ Arcade

C. Urban Roof Garden space

D. Bar/ Barbeque Area space

E. Dog Park/ Tower on Podium

![description](https://github.com/tterrytang/the-great-outdoor/blob/main/WeChat%20Screenshot_20201121214732.png
)  High Density/ Tower on podium


![description](https://github.com/tterrytang/the-great-outdoor/blob/main/WeChat%20Screenshot_20201121214528.png)  
Mid Density/ Green roof park


![description](https://github.com/tterrytang/the-great-outdoor/blob/main/WeChat%20Screenshot_20201121214457.png)  
Low Density/ Outdoor eating space, outdoor performance


### Required inputs 
Urban Popilation Density: High, Mid, Low

Streen Pattern: Loose Grid, Organic, Radial

Public Space SQ.ft per households: 28, 113, 254

Street Width: 60, 70, 80


### Type Rules
1. If the building height is lower than 120ft, then it will become a low density type, model type will be outdoor performance and outdoor eating
2. If the building set between 120-200ft, then it will become a mid density type, model type will be green roof public space
3. If the building height is more than 200ft, then it will become a high density type, model type will be bar area and tower on podium.
### Use Type If:
1. Your team is interested in exploring how the street pattern and width that affect the public space size
2. Your team is interested in definding what is the comfortable public space and quantity the dimension of the comfortable public space
3. If your team want to futher study the sunlight, traffic issues and public space for Post-COVID era.

### Not Recommended to Use Type If:
1. Have too much data that add up to this model type
2. The density of population is not defined 
3. Not thought about change the street system
4. The height of the building is too low

### What to Know & Limitations 
1. The model is complex and need to pay attention to the different public space changed during the calculation
2. This procedural type only supports in high population density urban area. The building height should be large than 250ft
3. Need to set a attraction point, otherwise the model will not running

### Required Plugins

N/A

#### How To Use

<b>Step by Step Instructions:</b>
1. Draw street line on rhino, with 3 different street setting, such as, grid, star, triangle 
2. Right click on "street1" -> Select Multiple Lines with grid.
3. Right click on "Street2" -> Select Multiple Line with star.
4. Right click on "Street3" -> Select Multiple Line with triangle.
5. Adjust urban density and population option 
6. Review visual and metric outputs. 
​
<b> Troubleshooting </b>
If the street width oversized our too narrow, the running will fail, please check the input.

### Required Files

[Rhino File](https://github.com/tterrytang/the-great-outdoor/blob/main/The%20Great%20Outdoors%20(1).3dm)

[Grasshopper File](https://github.com/tterrytang/the-great-outdoor/blob/main/great%20out%20door%20building%20types.gh)
