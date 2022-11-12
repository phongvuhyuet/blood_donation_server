docker rm -f blood-donation-backend
docker rmi -f mailnophone03/blood-donation-backend:latest

docker run -d -p 5000:5000 --env-file ./.env --name blood-donation-backend mailnophone03/blood-donation-backend:latest
