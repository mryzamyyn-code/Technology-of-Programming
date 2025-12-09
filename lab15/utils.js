window.generateId = function() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

window.filterByName = function(list, keyword) {
  keyword = keyword.toLowerCase();
  return list.filter(s => s.name.toLowerCase().includes(keyword));
}
