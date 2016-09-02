/**
 * AttendeeLib Module
 * @fileoverview attendeeLib module that obtains the attendees by filter.
 * @author  Jimmy.Romero@fundacion-jala.org (Jimmy Joel Romero Sejas)
 * @version 1.0.0
 * @module attendee_lib/attendeeLib
 */

var request = require('../request_lib/requestLib.js');
var resource = require('../../resources/resource.json');
var service = require('../../resources/service.json');

var filter = '?filter=j';
var index = 0;

/**
 * Module to GET the Attendee, given a service Id and a filter.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getAttendee = function(callback){	
	var endpoint = resource.services + '/' + service[index].id + resource.attendee + filter;	
	request.get(endpoint, function(err, res){
		callback(err, res);
	});
};
