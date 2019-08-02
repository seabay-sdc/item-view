# Project Name

Seabay is an existing product page clone of EBay. The site was created using microservices and deploying separately. SeaBay2 was a project to scale the item-view page microservice to hold 10 Million records while also optimizing CRUD route performance.

Contributors: 

For this component
[Michael Bergeron](https://github.com/Michael-Bergeron) - item page

*Item-View* was built primarily with ReactJS on the front end and Node/Express on the backend. Other key technologies used are listed below: 

<img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="100"/>
<img src="https://lh3.googleusercontent.com/xcong6Yn8NoueMYWPhEfO76dw0Nt70kiDVOCOygTFEQWpysHxcT-5jYzq9XWIgD3lvCGnGrjlhddm7WEOw9V1FlHivqFjZCXF9IDsfd7uQ2SxlI80roSJcnHvb0O7POvlYOPNvRG" width="100" />
<img src="https://lh5.googleusercontent.com/_RcI-sgNRX5J0olXzRycjQN3tysoTXbH8kXRfE0AtBY8KkDrINApsrfZGAkczZYGwKTPZlYdJXQyKmWO4zFzvON9Op6Ovcu0GQxwabxWfGJH__oRB6YCC-qD_3b2yj_efkprD8UP" width="100" />
<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="100" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="100" />
<img src="https://lh5.googleusercontent.com/pqPRWyCMu39CU4GAERH3XI0fri2uJzMteIV5t-4qAG566IJWdXRABxLjV1jwdVvID-NvFw3USgyM8FXC5w_yAimYz4FY1gVEm96Yd2JQZh-pYl33lHpbOI7-3-uTixqgX1XHRker" width="100" />
<img src="https://www.picclickimg.com/d/l400/pict/254262493926_/25-Amazon-Web-Services-Credit-Redemption-Code.jpg" width="100" />
<img src="https://newrelic.com/assets/newrelic/logo_NR-tw.png" width="100" />
<img src="https://icon-library.net/images/postgres-icon/postgres-icon-27.jpg" width="100" />

### Technical Challenges/Research
Started the project by seeding a database with 10 Million records and testing the times of a mongoDB and postres database for access and write times.

Seeding the postgres with a csv file was as quick as 34 seconds while seeding a mongoDB took 2:21. I then optimized both databases through indexing, primary keys, and minimizing space where possible. I then was able to get access time for the postgres database to an average of 1.1ms. The mongoDB was only able to get to an average of 4.3ms for access time. For searching the entire database, access time for mongoDB was 4500ms compared to only 862ms for postgres.

Access time was decreased by over 90% by indexing the mongoDB. 
Access time was decreased by 80% by making the primary key the searched item # and minimizing space.

I deployed both databases on AWS to research seeding time and access time for a deployed database and found very similar results which ended with me choosing to move forward with the postgres database.

The next step was to test my server locally and deployed on AWS to check on requests per second(RPS) to check server load.

On my first stress test of my server using artillery.io, I got an RPS of 929.54 with a median latency of 121.3. A similar test that accessed the database returned an RPS of 619.58 with a median latency of 130.8. After optimizing my server using fastify and clusters to take advantage of all cores on the processor, I was able to raise the RPS to the root directory to 1570.11 with a median latency of 110.2. The database call was raised to 957.2 RPS with an average latency of 128.9.

Unfortunatly, the EC2 instance I used (t2.micro) is a single core so I could not take advantage of clusters. The first run on AWS with my optimized server gave results of an RPS of 826.1.

After researching through different testing methods, it looks like my current computer was limited with testing with artillery.io. I moved to loader.io which does cloud testing and is less dependent on my local machine. This was able to rais the RPS to the index.html file to over 1000 before getting errors. Running 2,500 gives a significant error rate of 10%.

The next step was to change the server from a node.js server to nginx which significantly raised the response per second of the server to 8,500 on my EC2 instance. 