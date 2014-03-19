---
layout: default
title:  Voorbeeld
---

Dit is de eerste regel, alles hierboven wordt vanzelf aangemaakt (te weten de titel van dit stuk als H1 (hoofding 1) 


## alle hoofdingskes op een rijtje
# Hoofding 1
## Hoofding 2
### Hoofding 3
#### Hoofding 4
##### Hoofding 5
###### Hoofding 6

Alternatief kun je een titel ook met onderlijning scoren

Hoofding 1 
=
Kan ook door dubbele onderlijning met = (eentje is genoeg)

Hoofding 2 
-
Kan ook door enkele onderlijning met - (eentje is genoeg)


> Belangrijk: 
> Zoals je merkt wordt de titel van de pagina standaard als H1 ge-injecteerd, het wordt daarom sterk afgeraden verder nog H1 op de pagina te gebruiken.



Links
-----

Voor links in een tekst gaan we typisch voor de combinatie met [ en ] waarbij een [woord][vakantiewoning] verwijst naar een beheerde referentie (zie _includes/links.md).

Daarnaast kun je ook terplekke linken naar een niet centraal beheerd adres door de ( en ) te gebruiken zoals bij deze [link](http://google.com/). 



beelden
-------

Zouden we maximaal via de achtergronden moeten kunnen laten spreken, maar als het echt nuttig is kan een beeld ook in de tekst opgenomen worden:

![logo](/img/logo-fluisterbos-vakantiewoning.png)



inline tekst-decoratie
----------------------

Een woord dat **vet** moet zet je tussen dubbele * 
een woord dat *scheef* moet gaat tussen _ of enkele *
Onderlijnen en doorhalen kan blijkbaar niet.

lijstjes
--------
### genummerd 

Door 1 vooraan de lijn te zetten

1. één 
1. twee
1. drie
1. vier
  1. hoedje van
  1. hoedje van

### niet genummerd 

Door ster, plus of min vooraan te zetten

* iets
- nog iets
  + anders

### definitie-lijsten

Niet specifiek ondersteund



lijntjes
--------

De tekst hieronder

---

staat tussen lijnen (door minstens 3 - met een lege lijn ervoor)

---



vaste-tekst-blok waarin alles kan
---------------------------------

```
een blok met tekst waar alles <echt> doorkomt
```



geforceerde nieuwe lijnen
-------------------------
Dit toont hoe je halfweg de tekst (dus hier <br/> zo) een nieuwe lijn kan forceren?

Let op dat zelf een nieuwe
lijn beginnen in de tekst net averechts werkt!

Nochtans kan het wel als  
de vorige lijn eindigt op (minstens) 2 spaties!

Als je een spatie wil injecteren waar geen lijn-splitsing mag gebeuren dan kan dat met de speciale code&nbsp;(&amp;bsp;)'non-breaking-space'

tabel
-----

### tabel met verplicht hoofd

| EEN | TABEL  |
|-----|--------| 
| met | inhoud | 

### tabel met leeg hoofd

|||
|-----------|--------------|
| een tabel | zonder hoofd |
| en met een | tweede rij. |

Het hoofd is verplicht, maar als je het leeg laat, verdwijnt die bovenste rij vanzelf.



Blockquote
----------

> Dit is gekwoote tekst zoals dat heet

>> Dubbel kwoten kan ook


{% include links.md %}
