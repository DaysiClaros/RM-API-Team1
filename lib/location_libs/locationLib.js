var request = require('../request_lib/requestTokenLib.js');
var resource = require('../../resources/resource.json');
/**
 * The module create allow creating a new location.
 * @param {object} json, contains a json file with the location attributes.
 * @param {function}callback, contains the error and the response.
 */
module.exports.create = function (json, callback) {
    var endPoint = resource.locations;
    request.create(endPoint, json, function (err, res) {
        callback(err, res);
    });
};

module.exports.get = function (callback) {
    var endPoint = resource.locations;
    request.get(endPoint, function (err, res) {
        callback(err, res);
    });
};
/**
 * The module gets a location given an id.
 * @param {String} id, contains the id of location at get.
 * @param {function}callback, contains the error and the response.
 */
module.exports.getById = function (id, callback) {
    var endPoint = resource.locations + '/' + id;
    // var endPoint = '/locations/' + id;
    request.get(endPoint, function (err, res) {
        callback(err, res);
    });
};
/**
 * The module updates a specific location.
 * @param {String} id, contains the id of location at update.
 * @param {object} jsonUpdate, contains a json file with the location attributes that will be updated.
 * @param {function}callback, contains the error and the response.
 */
module.exports.update = function (id, jsonUpdate, callback) {
    var endPoint = '/locations/' + id;
    request.update(endPoint, jsonUpdate, function (err, res) {
        callback(err, res);
    });
};
/**
 * The module deletes a specific location given an id.
 * @param {String} id, contains the id of location at delete.
 * @param {function}callback, contains the error and the response.
 */
module.exports.delete = function (id, callback) {
    var endPoint = '/locations/' + id;
    request.delete(endPoint, function (err, res) {
        callback(err, res);
    });
};