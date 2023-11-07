FROM centos:latest

RUN cd /etc/yum.repos.d/ \
    && sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-* \
    && sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*

RUN yum -y update && yum -y install curl

RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash -

RUN yum -y install nodejs httpd

WORKDIR /var/www/html

COPY ./crud-app/dist/crud-app .



CMD apachectl -DFOREGROUND



