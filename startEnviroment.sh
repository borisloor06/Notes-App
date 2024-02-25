#!/bin/bash

which docker

if [ $? -eq 0 ]
then
    docker --version | grep "Docker version"
    if [ $? -eq 0 ]
    then
        echo "docker exists"
        echo "set enviroment variables"
        export PG_USER=loor-9E36FC
        export PG_PASS=7xN4bFN89DfW4I0r5+Jugf4xqmaBL2gYM8jT08l0r3SqWijSafupIkrkfwmYE22
        export PG_DB=note-app
        export DB_PORT=5432
        echo "find free port for backend"
        startBackPort=3000
        backPort=0

        while true; do
            netstat -o -n -a | grep ":$startBackPort"
            if [ $? -eq 0 ]; then
                echo "Port unavailable"
                startBackPort=$((startFrontPort+1))
            else
                echo "Port available"
                frontPort=$startBackPort
                break
            fi
        done

        export BACKEND_PORT=$backPort
        echo "find free port for fronted"
        startFrontPort=0
        frontPort=0

        while true; do
            netstat -o -n -a | grep ":$startFrontPort"
            if [ $? -eq 0 ]; then
                echo "Port unavailable"
                startFrontPort=$((startFrontPort+1))
            else
                echo "Port available"
                frontPort=$startFrontPort
                break
            fi
        done

        export FRONTED_PORT=$frontPort
        echo "port for backend: $BACKEND_PORT", "port for fronted: $FRONTED_PORT"
        # create dir for volume postgres-data if not exists
        if [ ! -d ./postgres-data ]; then
            echo "create dir postgres-data for volume"
            mkdir ./postgres-data
        fi

        # check for docker-compose
        which docker-compose
        if [ $? -eq 0 ]
        then
            docker-compose --version | grep "docker-compose version"
            if [ $? -eq 0 ]
            then
                echo "starting docker"
                docker-compose up -d
                echo "create database"
                # create database from sql file pg
                docker exec -i pg-note-app psql postgresql://$PG_USER:$PG_PASS@localhost:$DB_PORT/$PG_DB < ./note.sql
            else
                echo "you need to install docker-compose" >&2
            fi
        else
            echo "you need to install docker-compose" >&2
        fi
    else
        echo "you need to install docker"
    fi
else
    echo "you need to install docker" >&2
fi