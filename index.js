// Write your solution in this file!


const driver = { foo: 'bar' };
/*
updateDriverWithKeyAndValue()-
this function should take in a driver Object,
a key and a value. The function should not mutate
the driver parameter and return a new driver that
has an updated value for the key passed in.
*/
function updateDriverWithKeyAndValue(driver, key, value){
  const newSafeDriver = { ...driver };

  newSafeDriver[key] = value;
  return newSafeDriver;
}

/*
destructivelyUpdateDriverWithKeyAndValue() -
this function should work the same as
updateDriverWithKeyAndValue() but it should mutate
the driver parameter passed in.
*/

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}


/*
deleteFromDriverByKey() -
this function should take in a driver Object and a key.
It should delete the key/value pair for the key that
was passed in from the driver Object. This should all
not actually mutate the driver passed in.
*/


function deleteFromDriverByKey(driver, key) {
  const newDriver = { ...driver };
  delete newDriver[key];
  return newDriver;
}

/**

destructivelyDeleteFromDriverByKey() -
this function should work the same as
deleteFromDriverByKey() but it should mutate
the driver passed in.

HINT: You might find deleteFromDriverByKey()
to be a bit hard to write non-destructively.
Think about how we learned to use Object.assign().
What happens if we do this:

**/

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
