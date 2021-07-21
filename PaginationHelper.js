// /PaginationHelper



// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  console.log(collection)
  this.collection = collection
  this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.round(this.collection.length / 4)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  let size = 4
  let chunked = []

  for (let i = 0; i < this.collection.length; i += size) {
    chunked.push(this.collection.slice(i, i + size))
  }

  if (pageIndex >= chunked.length) {
    return -1
  }

  return chunked[pageIndex].length
}


// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if () {

  }
  return Math.floor(itemIndex / 4)
}



var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2));
