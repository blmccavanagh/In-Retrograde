const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const axios = require('axios').default;

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password, dob, timeOfBirth, timezone, placeOfBirth }) => {
      // call open weather api to get lon and lat
      
      const openweatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${placeOfBirth}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);

      const birthLongitude = openweatherResponse.data.coord.lon;
      const birthLatitude = openweatherResponse.data.coord.lat;

      // const horoApiResponse = await axios.get(``);

      const user = await User.create({ name, email, password, dob, timeOfBirth, timezone, placeOfBirth, birthLongitude, birthLatitude });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

  },
};

module.exports = resolvers;
