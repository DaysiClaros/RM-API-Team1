var expect = require('chai').expect;
var attendee = require('../../lib/attendee_lib/attendeeLib.js')
var config = require('../../config.json');
var status = require('../../resources/status.json');

describe('Attendee Acceptance Test', function(){
	this.timeout(config.timeout);
	var attendeeJson = {};	
	var arrayAttendee;
	var firstElement = 0;
	var minimumAttendee = 1;

	before(function(done){
		attendee.getAttendee(function(err, res){
			expect(res.status).to.equal(status.OK);
			arrayAttendee = res.body;
			done();
		});
	});	

	it('GET /services/{serviceId}/attendees', function(done){
		attendee.getAttendee(function(err, res){			
			
			if(expect(arrayAttendee.length).to.be.at.least(minimumAttendee)){
				attendeeJson = arrayAttendee[firstElement];				
				expect(res.body[firstElement]._id).to.equal(attendeeJson._id);				
				expect(res.body[firstElement].dn).to.equal(attendeeJson.dn);
				expect(res.body[firstElement].cn).to.equal(attendeeJson.cn);
				expect(res.body[firstElement].whenChanged).to.equal(attendeeJson.whenChanged);
				expect(res.body[firstElement].displayName).to.equal(attendeeJson.displayName);
				expect(res.body[firstElement].name).to.equal(attendeeJson.name);
				expect(res.body[firstElement].sAMAccountName).to.equal(attendeeJson.sAMAccountName);
				expect(res.body[firstElement].userPrincipalName).to.equal(attendeeJson.userPrincipalName);
				expect(res.body[firstElement].mail).to.equal(attendeeJson.mail);
				expect(res.body[firstElement].serviceId).to.equal(attendeeJson.serviceId);
			}
			else{				
				attendeeJson = arrayAttendee;				
				expect(res.body).to.be.at.least(attendeeJson);				
			}
			expect(res.status).to.equal(status.OK);	
			done();
		})
	});
});
