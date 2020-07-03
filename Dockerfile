FROM node:12

# Create app directory
WORKDIR /app

# Install app dependencies
# Copy package-lock.json file to /app we created in previous command
COPY package.json /app
COPY package-lock.json /app
RUN npm install
# install sails
RUN npm -g install sails
# install sails mysql
RUN npm install sails-mysql

# Copy application to /app dorectory
COPY . /app

# Expose port 1337 to sails lift
EXPOSE 1337

# execute when Docker image is launching (run app).
CMD sails lift --host 0.0.0.0