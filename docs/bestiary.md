## Members
<dl>
<dt><a href="#beastsByTerm">beastsByTerm</a></dt>
<dd><p>Alias of beastByTerms</p>
</dd>
</dl>
## Functions
<dl>
<dt><a href="#beast">beast(int)</a></dt>
<dd><p>Gets a beasts information by id</p>
</dd>
<dt><a href="#beastsByTerms">beastsByTerms(mixed)</a></dt>
<dd><p>Gets a list of beasts whoes name contains specific terms</p>
</dd>
<dt><a href="#beastsByFirstLetter">beastsByFirstLetter(string)</a></dt>
<dd><p>Gets a list of beasts that start with a specific letter</p>
</dd>
<dt><a href="#areas">areas()</a></dt>
<dd><p>Gets a list of all possible area names</p>
</dd>
<dt><a href="#beastsByArea">beastsByArea(string)</a></dt>
<dd><p>Gets a list of beasts by an area name</p>
</dd>
<dt><a href="#slayerCategories">slayerCategories()</a></dt>
<dd><p>Gets a list of all possible slayer categories</p>
</dd>
<dt><a href="#beastsBySlayer">beastsBySlayer(int)</a></dt>
<dd><p>Gets a list of beasts by a specific slayer category id</p>
</dd>
<dt><a href="#weaknesses">weaknesses()</a></dt>
<dd><p>Gets a list of all possible weaknesses</p>
</dd>
<dt><a href="#beastsByWeakness">beastsByWeakness(id)</a></dt>
<dd><p>Gets a list of beasts by a specific weekeness id</p>
</dd>
<dt><a href="#beastsByLevelRange">beastsByLevelRange(int, int)</a></dt>
<dd><p>Gets a list of beasts by the specified level range(200-300)</p>
</dd>
</dl>
<a name="beastsByTerm"></a>
## beastsByTerm
Alias of beastByTerms

**Kind**: global variable  
<a name="beast"></a>
## beast(int)
Gets a beasts information by id

**Kind**: global function  

| Param | Description |
| --- | --- |
| int | id The beasts id |

<a name="beastsByTerms"></a>
## beastsByTerms(mixed)
Gets a list of beasts whoes name contains specific terms

**Kind**: global function  

| Param | Description |
| --- | --- |
| mixed | name String seperating terms with spaces or an array of terms |

<a name="beastsByFirstLetter"></a>
## beastsByFirstLetter(string)
Gets a list of beasts that start with a specific letter

**Kind**: global function  

| Param | Description |
| --- | --- |
| string | letter The letter to search for |

<a name="areas"></a>
## areas()
Gets a list of all possible area names

**Kind**: global function  
<a name="beastsByArea"></a>
## beastsByArea(string)
Gets a list of beasts by an area name

**Kind**: global function  

| Param | Description |
| --- | --- |
| string | area The area name to search for |

<a name="slayerCategories"></a>
## slayerCategories()
Gets a list of all possible slayer categories

**Kind**: global function  
<a name="beastsBySlayer"></a>
## beastsBySlayer(int)
Gets a list of beasts by a specific slayer category id

**Kind**: global function  

| Param | Description |
| --- | --- |
| int | id A slayer category id |

<a name="weaknesses"></a>
## weaknesses()
Gets a list of all possible weaknesses

**Kind**: global function  
<a name="beastsByWeakness"></a>
## beastsByWeakness(id)
Gets a list of beasts by a specific weekeness id

**Kind**: global function  

| Param | Description |
| --- | --- |
| id | weeknessId A weekeness id |

<a name="beastsByLevelRange"></a>
## beastsByLevelRange(int, int)
Gets a list of beasts by the specified level range(200-300)

**Kind**: global function  

| Param | Description |
| --- | --- |
| int | min The minimum level to lookup |
| int | max The maximum level to lookup |

