svm-data-viewer
===============

this project shows views of different json rest public data and its rules.

ajax.googleapis.com/ google feed api - rss to jsonp
---------------------------------------------------

summaries

https://developers.google.com/feed/v1/jsondevguide

examples

http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JCALLBACK&q=http://feeds.bbci.co.uk/news/world/rss.xml
http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JCALLBACK&q=http://hosted.ap.org/lineups/WORLDHEADS.rss?SITE=AP&SECTION=HOME

earthquake.usgs.gov/ geojsonp
-----------------------------

summaries

http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson_detail.php

examples

http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojsonp
http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojsonp

openweathermap.org/ jsonp
-------------------------

summaries

http://openweathermap.org/API
http://openweathermap.org/API#weather

examples

http://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test
http://api.openweathermap.org/data/2.5/weather?q=Fairfax,va&callback=test

itunes.apple.com/ jsonp
-----------------------

examples

http://itunes.apple.com/search?term=michael+jackson&callback=test
http://itunes.apple.com/search?term=paul+anka&callback=test
