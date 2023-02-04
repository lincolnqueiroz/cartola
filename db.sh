#! /bin/sh
echo "docker compose down"
docker compose down
echo "docker compose -f docker-compose-db.yml up"
docker compose -f docker-compose-db.yml up