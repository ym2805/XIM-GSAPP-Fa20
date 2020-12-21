# Breathing Blocks
By Anirudh Chandar, Camila Núñez, Luis Miguel Pizano

### An Exploration of Spatial Form and Air Pollution

The project proposes a block configuration in the Bronx neighborhoods of Melrose and Mott Haven that **weaves public infrastructure, urban landscape, public-private spaces and multimodal systems into a network of breathing urban blocks.** This network aims to reduce air pollution by re-thinking building type arrangements within the city block and redirecting street airflows in response to local wind patterns and seasonal changes.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_WindAnalysis1.png)
*The Project Methodology interfaces with building types, streets, parcels and wind vectors in order to suggest amenable conditions for urban depollution.*

<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Project Overview

<br />

In recent years, extreme lot maximization in the Bronx neighborhoods of Melrose and Mott Haven has eroded publicly-accessible, community-oriented spaces. Moreover, **undiscriminating land use patterns have resulted in increased levels of urban air pollution.** Large metropolitan arteries bear witness to noxious air quality conditions for pedestrians — most notable of which is Asthma Alley in the Bronx. 

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_Context1.jpg)
*Mott Haven Neighborhood Context*

Designers, developers and policy-makers must find new spatial solutions to redirect pollution away from common urban spaces, while ensuring that these spaces can foster gathering, recreation and delivery of services. Otherwise, the quality of life in urban neighborhoods will continue to decay, which will result in population loss, real estate devaluation, a weakened tax base and the defunding of essential public services - a process which the Bronx experienced in the 70s.

```
“What if all urban development projects were oriented around wind direction?”
```

**The Breathing Blocks proposes a vision of the Bronx in 2030 that optimizes block and street configurations to reduce air pollution in common areas. These configurations result from a computational model that 1) re-classifies streets relative to mobility uses and wind vector directions and 2) organizes building relationships at the city block scale so as to produce common spaces that are safe for public use.** The resultant urban network connects residential units, common spaces across property lines and mobility systems and public infrastructure.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/aclmpcn_collage.jpg)

*Connected Network of Breathing Blocks*


### Project Goals and Metrics
![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_Diagram1.png)


**Goal:** Provide a block configuration that connects residential units and open space by prioritizing efficient integration of vehicular, pedestrian and bike mobility systems and improved air quality within new city block arrangements.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_Diagram2.png)

**Significance:** The lot maximization of existing city blocks has a negative effect on open space and the quality of the urban experience. These conditions aggravate pollution and the hermetic quality of existing architecture.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_Diagram3.png)

**Neighborhood Variables**

1. **Housing Density:** By analyzing the effects of implementing diverse ratios between lot-area and built-area, together with different urban grid types, we intend to redistribute density so as to generate favorable conditions in terms of air quality and public space.

1. **Rail Systems:** Understanding the existing rail system allows us to generate the conditions to provide an optimal ratio between urban spaces, mobility infrastructure, and built area in terms of travel time and walking distance for residents. 

1. **Pollution Sources:** Studying sources of pollution is crucial for the creation of favorable conditions that provide air quality in terms of outdoor space per person ratio and building conditions that contribute to the adequate wind circulation at street level.

1. **Open Space:** By incorporating the existing open spaces to a second city grid that weaves private-public spaces into a network for pedestrian and bike circulation, allow us to create spaces that foster gathering and recreation while providing an adequate proportion between open space and built area within a short walking distance.

1. **Climate Conditions:** Analyzing solar gain between indoor and outdoor spaces provides balanced environmental conditions in public and private spaces for residents.

### What Did We Discover?

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_Diagram7.png)
*Triadic Relationship of Urban Form-Ventilation-Air Pollution Dissipation*

According to yang et al, “air pollution in cities may be considered a result of the effects of wind environment and urban spatial form. The wind environment, influenced by spatial form and influencing air pollution, functions as a bridge throughout this process, linking spatial form with urban air pollution.” Moreover, **if cities optimize and adjust the urban form so as to respond to and produce favorable conditions for wind speed, air pollution may be re-distributed away from residential centers through channels specifically designated for this use.** 

**"Breathing Blocks" suggests a context-sensitive methodology for the organization of building types within the city block in response to air pollution. Our primary metric, average airflow reduction (%), can be used to analyze both existing and proposed development scenarios to minimize the flow of polluted air into pedestrian areas.** 

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_StreetAnalysis.png)
*Mott Haven & Melrose Street Classification*

The project sets up two street types - vehicular ***primary streets*** that generate blocks and carry pollution away from the blocks and ***secondary streets*** that create sheltered pedestrian streets within the blocks. **The goal is to optimize wind-flow within the primary streets and minimize wind flow within the secondary streets, thereby safely moving pollution away from the pedestrian centric public spaces.**

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_Diagram6.png)

```
“Through the computational design model, we determined that curved streets that bend towards the primary wind direction are better movers of pollution.”
```

Secondary street angles can be optimized within each street type based on parcel angle to minimize air flow. Additionally, the results suggest a hierarchical correlation between block orientation and parcel angle. In turn, this relationship determines secondary street definition. 

<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Computational Design Model

<br />

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_Grasshopper.png)
*Computational Model Script*

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_ComputationalDesignFramework.png)

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_ComputationalDesignFramework2.png)
*Computational Design Framework: inputs, procedural rules and metrics*


### Walkability Analysis Tool
![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_NetworkAnalysis.png)

*Walkshed Visualization and Origin / Destination Visualization*

This analysis technique at the urban scale, focuses on access to urban amenities through networks and mobility, using shortest path and origin / destination routing.  We used this tool on our project to test each proposed street type. The resulting metrics for each type served as a way to compare each model and score them based on their overall walkability performance.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/AnalysisResults03.png)
*Walkability Analysis of Block Configuration #1*

[Link](https://github.com/XIM-GSAPP-Fa20/src/tools/Network/Walkability_Network_Analysis/) 

#### Wind Analysis Tool
![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_WindAnalysis2.png)
*Iterative scenarios based on street type and parcel angle variation.*

**Our custom wind analysis tool measures optimal conditions for wind airflow.** It identifies ***primary streets*** on each iterative scenario in relation to the primary wind direction, sorting those that are within 30 degrees or less of separation from the north-south axis. This axis is determined based on an analysis of New York City wind directions in summer, the season with highest measurable pollutants in the Bronx according to reports from New York City Community Air Survey. The tool then analyzes every ***secondary street*** directly related to the relevant primary streets and measures their angle of intersection. Iterations are subsequently generated by varying parcel angles within each block. 

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_WindAnalysis3.png)

In doing so, **the tool generates a street hierarchy of air flow uses;** pollution can be carried at a higher speed through primary streets, which will shelter comunal pedestrian spaces within the blocks by decreasing wind flow on secondary streets. The resulting percentage of airflow reduction for each street type facilitates comparison of each iterative scenario. 

[Link](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/tree/main/src/tools)


### Procedural Types

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_Diagram4.png)

The project proposes the transformation of three building types (tower & plinth, courtyard and row house) by prioritizing the connection of semi-open ground floor spaces, courtyards, and rear yards. This scheme for urban integration requires that the building types be modified in a few important ways. The **tower & podium** type and the **courtyard** type are partially lifted in order to provide access to ground floor and courtyard common areas. Conversely, the **row house** type is shifted in order to connect rear yard areas into a common park zone, with varying degrees of openness. 

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_Diagram5.png)

These areas are subsequently connected into a network of shared urban common spaces. Types are arranged in order to maximize the barrier between street and common space and to reduce the scale and depth of urban street canyons, which typically house higher levels of air pollution.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_DiagramFAR.png)
*Relationship between FAR and Building Typologies*

[Link](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/tree/main/src/types/Row_House) 


### Design Space

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_InputRanges.gif)

**Parcel Width:** 200 - 250 - 300
**FAR Variation:** 0.3 - 0.5 - 0.7
**Parcel Angle:** 90°- 75°- 60°
**Street Option:** curve, diagonal, and orthogonal
**Design Space Size:** 81

The project incorporates variable parcel widths and FAR ratios inputs according to the above ranges. **These inputs generate a framework that allows us to test out the correlation between spatial form and urban air pollution.** Parcel angle and street options are inputs that relate directly to our wind analysis. Street options incorporate ***primary streets*** that carry away pollution and ***secondary streets*** that shelter pedestrian streets within the blocks. Street types for all given scenarios can be optimized based on parcel angle to minimize or maximize air flow. Subsequently, the performance of these iterations can be analyzed to achieve a maximum barrier between the street and common space.

```
The higher the airflow in primary streets and the lower the airlow in secondary streets, the higher that scenario is scored relative to the optimization of spatial form and urban air pollution.
```

<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Analysis and Results

<br />

### Exploring the Design Space


![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/ScoutLPACCN_1.JPG)

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/ScoutLPACCN_2.JPG)

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/ScoutLPACCN_2.2.JPG)

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/ScoutLPACCN_2.3.JPG)
*Scout Wind Analysis Scenarios per Street Type*

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/ScoutLPACCN_Compare.JPG)

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/ScoutLPACCN_Filter_1.JPG)

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/ScoutLPACCN_Filter_2.JPG)
*Scout Filter Interface Depicting Scenario Performance*


### Results & Design Comparison

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_WindAnalysis.gif)

Given the desirable quality of urban form relative to urban air pollution advanced by Yang et al, desirable results produced by the computational model favored low reduction of airflow in primary stress and high reduction of airflow in secondary streets. **According to this logic, the curvilinear street option performed highly, for it generated strong primary N-S axes and relatively perpendicular secondary streets which produced unfavorable channels for southerly wind vectors.**

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_Diagram8.png)

Additionally, **scenarios in which block parcels are oriented perpendicular to primary streets performed better.** This is because a perpendicular relationship between parcel orientation and primary street **creates internal block configurations that do not support intersection between primary and secondary streets. Greater intersectionality between streets at an angle that favors the N-S axis stated above will slow down the speed of air flow through primary streets, which will increase the amount of urban canyons and air pollution levels.** 

### Conclusions and Next Steps

**The methodology implemented by "Breathing Blocks" can be deployed by designers learning about the relationship between urban form and air pollution.** By using the metrics of primary and secondary street airflow reduction (%), project teams will understand the relationships between air flow speed in primary channels and minimized airflow in residential and pedestrian areas. 

The next steps for implementing the “Breathing Blocks” methodology can and should be geared towards the analysis of residential density in the resultant city blocks, so as to measure the impact of airflow channels on at-risk populations. **In addition, the analysis of mobility infrastructure can qualify the accessibility or inaccessibility of these structures.** The current model assumes frictionless vertical transportation between the residential structures, street curves, park areas, train stations and beyond.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/ACLMPCN_Bias.png)

*Rubric for Anti-Bias Analysis*

**Our computational model is regulated by checks and balances that take into account the specific vulnerabilities of the communities of Melrose and Mott Haven.** The Breathing Blocks model considers all possible users, with a focus on underserved users affected by pollution in the Bronx. Moreover, it focuses on the transparency of our protocols and the explainability of the model by clearly stating inputs. It also frames project questions by defining the impact of the existing urban fabric relative to questions of commercial and residential areas. 


