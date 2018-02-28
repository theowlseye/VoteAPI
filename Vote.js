/*global $*/
 $.ajaxSetup(
  {
     headers : {
       
       'X-API-KEY' : 'xRpBvViAHZ5OQ7jQek9EV1F9TLfMEop14ujNWfZa'
      }
  });
  
  $.getJSON("https://api.propublica.org/congress/v1/115/house/sessions/1/votes/256.json",MyParseCode);
  
  function MyParseCode(resp)
  {
   var myVote = resp.results.votes.vote;
			
			var myPositions= resp.results.votes.vote.positions;
   alert(myVote.description);
  }
$("body").append("div");

 
