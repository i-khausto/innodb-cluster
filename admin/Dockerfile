FROM ubuntu:22.04

RUN apt update \
    && apt upgrade -y \
    && apt install -y git mysql-client

RUN mkdir /tmp/test_db \
    && git clone https://github.com/i-khausto/test_db.git /tmp/test_db