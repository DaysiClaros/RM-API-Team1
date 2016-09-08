/**
 * AttendeeLib Module
 * @fileoverview attendeeLib module that obtains the attendees by filter.
 * @author  Jimmy.Romero@fundacion-jala.org (Jimmy Joel Romero Sejas)
 * @version 1.0.0
 * @module attendee_lib/attendeeLib
 */

var manager = require('../manager_lib/managerLib.js');
var LogManagement = require('../../logger/LogManagement.js');

var request = manager.getRequestManager().getRequestLib(); //require('../request_lib/requestLib.js');
var resource = manager.getJsonManager().getResource(); //require('../../resources/resource.json');
var service = manager.getJsonManager().getService(); //require('../../resources/service.json');
var method = manager.getJsonManager().getRequestMethod();//require('../../resources/requestMethod.json');

var filter = '?filter=ji';
var index = 0;

/**
 * Module to GET the Attendee, given a service Id and a filter.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getAttendee = function(callback){
	var endpoint = resource.services + '/' + service[index].id + resource.attendee + filter;
	request.get(endpoint, function(err, res){
		LogManagement.log(resource.services, endpoint, method.GET, err, res);
		callback(err, res);
	});
};
