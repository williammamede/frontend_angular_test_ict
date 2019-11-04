**Simple angular example to perform http requests**
___

This project aims to show, in a web page, some data provided to a endpoint via POST.

There are two PHP endpoints:
1. post.php -> this is reponsable to receive the data
2. read.php -> this is responsable to show the received data

There are 3 possible ways to run the php BE:

* Run it in your php environment using the files inside httpd folter.

* Generate a docker image using the httpd\.docker\backend.dockerfile. 

* Download the docker image from Docker HUB performing a pull request from the repository [willmamede/php_test_ict](https://cloud.docker.com/repository/docker/willmamede/php_test_ict)
