FROM node:alpine

ARG DOCKER_TAG
ENV APP_VERSION=$DOCKER_TAG
RUN echo "Bulding Docker image version: $APP_VERSION"

CMD echo $(node -e "console.log(process.env.APP_VERSION ?? 'No version provided')")
