/**
*   JobTimeRepository
*/
class JobTimeRepository extends LocalSessionRepository{
    /**
    *   @val
    */
    const _NAMESPACE = 'jobtime';
    
    /**
    *   constructor
    *
    */
    constructor() {
        super();
    }
    
    /**
    *   timecard
    *
    *   @param ?string date_string
    *   @return ?JobTime
    */
    timecard(date_string) {
       
       //_NAMESPACEで区切っているけど、どうする?
       //この場合、LocalSessionRepositoryはすべてover writeになる
       //collectionのキー == Storageキーにする？
       //この場合、localsession以外へ改造する場合、JobTimeRepositoryも影響する
       
       
       
       let jobtimes = this.find(this._NAMESPACE);
       
       if (jobtimes === null
        || ! jobtimes instanceof Map
       ) {
           return null;
       }
       
       jobtimes
       
       
       
       
    }
    
    /**
    *   addStamp
    *
    *   @param string jobname
    *   @return this
    */
    addStamp(jobname) {
       
       return this;
    }
    
    /**
    *   removeStamp
    *
    *   @param string date_string
    *   @param int index
    *   @return this
    */
    removeStamp(date_string, index) {
       
       return this;
    }
    
    /**
    *   totalList
    *
    *   @param string date_string
    *   @return JobTime[]
    */
    totalList(date_string) {
       
    }
    
    /**
    *   jobList
    *
    *   @return string[]
    */
    jobList() {
       
    }
    
    /**
    *   jobList
    *
    *   @return string[]
    */
    _find() {
       
    }
}
