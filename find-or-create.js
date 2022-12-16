var userGR = new GlideRecord("sys_user");
userGR.addQuery("user_name", "john.skender")
userGR.addQuery("name", "John Skender");
userGR.setLimit(1);
//if record exists return it
if (userGR.next()) return userGR;
//returns the encodedQuery equivalent of all the addQuery's from the previous condition
var encodedQuery = userGR.getEncodedQuery();
userGR.newRecord();
//sets values for each part of the query. ex: sets user_name = john.skender
userGR.applyEncodedQuery(encodedQuery);
userGR.insert();
return userGR;
