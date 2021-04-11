# NestJS and React sample

This project contains:
- A sample NestJS application exposing mocked data at `/routes/`
- A sample React application that consumes and shows the routes from the NestJS application

To run this project, install Docker and docker-compose and run `docker-compose up -d`.

# Running on Kuberbetes

## Backend

Try:

```
kubectl apply -f k8s/nest-api/deploy.yaml
kubectl expose -f k8s/nest-api/deploy.yaml
```

Wait for the pods to be ready and try:

```
kubectl port-forward service/nest-api 3000
```

## Frontend

Try:

```
kubectl apply -f k8s/react-app/deploy.yaml
kubectl expose -f k8s/react-app/deploy.yaml
```

Wait for the pods to be ready and try:

```
kubectl port-forward service/react-app 3001:3000
```
