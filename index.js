function findMatching(array, driver){
    return array.filter(item => item.toLowerCase() === driver.toLowerCase())
  }

function fuzzyMatch(array, search){
  return array.filter(driver =>{
    let outcome=false;
    for (let i = 0; i < search.length; i++){
      if (search[i].toLowerCase() === driver[i].toLowerCase()){
        outcome = true;
      } else{
        outcome = false;
        return outcome;
      }
    }
    return outcome;
  })
}

function matchName(array, search){
    return array.filter(item => item.name === search)
  }