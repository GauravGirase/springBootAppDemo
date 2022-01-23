Dockerfile
FROM tomcat:8/9
COPY target/*.war /usr/local/tomcat/webapps/
