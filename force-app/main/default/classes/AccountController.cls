public with sharing class AccountController {
   @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Region__r.Name, Cost_Center__r.Name FROM Account LIMIT 5];
    }
    @AuraEnabled
    public static void updateFirstName(Id recId, String FirstName){
        Contact con = new Contact(Id = recId);
        con.FirstName = FirstName;
        update con;
        
    }
}