# Bridging 3D Green Resource Equality

**Using bridges as an add-on system together with other green space types to improve overall living conditions.**

![description](../images/Final_Project_Temple_Intro_Image.png)
*Please include a short caption.*

<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Project Overview

<br />

Between 2010 and 2017, population has increased in neighborhoods across all five boroughs of NYC, but decreased in Chinatown area. 

Chinatown residents identified housing as the major issue they care most about as they live in the less affluent area.


![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/B_background_research_population.jpg)


Neighborhoods with high-rise buildings are usually lack of outdoor green spaces provided for every residents due to a dense residential population. 

Yet, green spaces are essential for people’s health and can be achieved through multiple methods. 

### Problem Statement

Extreme environmental and health issues are shifting real estate values towards greater access to open spaces over transits in NYC.
How will Chinatown act to maximize accessibility to green spaces for low-income residents affected by city-wide gentrification?

```
“What if increasing the population of Chinatown through a high FAR neighborhood 

with enlarged preferable outdoor spaces through varied add-on green systems？ ”
```

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/B_photo_collage.png)
*Equally distributed green space.*


![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/B_google_map_collage.png)
*Chinatown with design space.*


### Goals and Metrics

#### 1. Walkability
Distance to green spaces including ground travel distance and vertical travel distance from each floor. 

#### 2. Daylight Hours
Daylight hours of green spaces from April to Octorber that have at least 6-hour daylight.

*Measuring at the height of trees (12 meters above the ground).*

#### 3. Green Space Area per person 
Sqft of net green spaces of all types divided by population.

### Why?

Short distance to green spaces can scatter the population and create equal green resource accessibility for each individual person.
Daylight hours are necessary and beneficial for vegetation and preferable green spaces.

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/B_vegetation.png)
*Vegetation suitable for NYC Climate.*


### What Did We Discover?

```
“Through the computational design model, we have identified:

terraces with vertical forests, courtyards with green gardens, and bridges with public green spaces 

that allows the neighborhood to address high density while achieving desirable green spaces for each person.”
```

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/B_far_now_future.jpg)

<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Computational Design Model

<br />

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/B_procedural_type_diagram.jpg)
*Procedural types are determined by parcel size.*


### Analysis Tools
![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/Metric%20Diagram-02.png)
*Metrics on Walkability, Green Space and Daylight.*

#### Distance to Green Space - 3D Network

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/XIM%20TOOL%20DIAGRAM-02.png)
*Distance to green space are measured based on a 3D network.*

Custom Tool Page [Link](https://github.com/ym2805/XIM-GSAPP-Fa20/blob/main/src/tools/Network/Distance_to_Green_Space/Distance%20to%20Green%20Space%20-%203D%20Network)

#### Direct Sunlight Hours for Trees

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/Metric%20Diagram-01.png)


### Procedural Types

#### Inputs

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/B_input.png)

#### Types and Rules

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/B_procedural_type.jpg)

Procedural Type [Link](https://github.com/ym2805/XIM-GSAPP-Fa20/blob/main/src/types/Podium_Tower_Bridges/Podium%20Tower%20with%20Bridges.md)


### Design Space

```
For example,
"FAR varies because we want a combination of different procedural types and green space types."
```

Please include simple diagram(s) that illustrate extremes of the design space, animated gif of design space and computational model table. The diagrams and animations should be CLEAR and SIMPLE. These can be animations showing how your model changes one variable at a time, still images explaining the variables, or other drawing types, but you must break down the complexity of your project into intelligible pieces.



![description](../images/PT_DiagramRangeInput.png)
*Please include a short caption describing your diagram.*

<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Analysis and Results

<br />

### Exploring the Design Space

This section should be descriptive of your team's design exploration and initial insights using Scout. 

***Each team will be conducting a live demonstration of your model in Scout when presenting final project.***

Additionally, teams will be required to document their live demo on GitHub with annotated, sequential screenshots replicating the sequence of the live demonstration. Show how you can use Scout to explore scenarios or answer specific questions using the parallel coordinates chart.

```
For example,
“What if’s . . .”
```

### Results

Were certain metrics inconclusive? Were there unexpected correlations? What are the GENERAL trends in your data? What are your SPECIFIC insights/findings? You can annotate right on top of Scout screenshots or translate insights to diagrams. How does performance (metrics) relate to form (inputs)?

![description](../images/PT_PerformanceSummarySlide.png)
*Please include a short caption describing your diagram.*

### Design Comparison

Create an image comparing several options that are representative of the trends in your analysis. This should include high and low-performing options, options that perform well in some metrics but poorly in others, options that do a good job of balancing trade-offs, etc. Include text explaining the comparison image and key take-aways. Include an option that gives context to the performance as a baseline or a benchmark. For example, it could be the existing context or an option with your target density but with traditional development patterns (i.e., densification without design innovation.)

Make sure to include both images and the data. Provide a visual hierarchy so that we can see which data are most relevant, which are high vs.  low. These can be simple charts, or even just text. Focus on clearly communicating the data. 

Zoom in to talk about the best option(s) and the worst. Take a few images to detail why these options perform well or poorly. The point of this entire exercise is to create a data-driven methodology for making DECISIONS, so choose which option or options are the best and defend those choices.

### Conclusions and Next Steps

1. We recommend select middle parcel size as input to allow a controllable number of high podium towers with bridges.
2. If applying this model as a proof-of-concept across city, the next step we recommend is to understand the zoning requirement for each neighborhood.
*FAR as input is important. Bridging System also needs to apply in areas that are programatically suitable.*
3. Whether to apply this model in a neighborhood requires a fundamental understanding of its social-economical and cultural context. 
Bias may exist without a comprehensive preliminary research of the site.