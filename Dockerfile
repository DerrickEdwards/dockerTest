FROM node:argon

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundele app source
COPY . /usr/src/app

# Expose the app's port for container level mapping
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]

