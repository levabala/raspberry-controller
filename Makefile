include .env

.DEFAULT_GOAL := build

.PHONY: clean
clean:
	docker-compose down -v && docker system prune --volumes --force;

.PHONY: build
build: clean
	docker-compose up -d --build --force-recreate raspberry-controller-db;
	docker-compose ps;